"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { drawThreeGeo } from "../globe/threeGeoJSON.js";

const BRISTOL = { lat: 51.4545, lon: -2.5879 };
const DHAKA = { lat: 23.8103, lon: 90.4125 };
const GLOBE_RADIUS = 2;
const MAX_DPR = 2;

function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export default function Globe() {
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);
  const labelBristolRef = useRef<HTMLDivElement | null>(null);
  const labelDhakaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapEl = canvasWrapRef.current;
    if (!wrapEl) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.15);

    const camera = new THREE.PerspectiveCamera(
      50,
      wrapEl.clientWidth / wrapEl.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_DPR));
    renderer.setSize(wrapEl.clientWidth, wrapEl.clientHeight);
    renderer.setClearColor(0x000000, 0);
    wrapEl.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 3, 5);
    scene.add(ambientLight, dirLight);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Load coastline data
    fetch("/geojson/ne_110m_coastline.json")
      .then((response) => response.text())
      .then((text) => {
        const data = JSON.parse(text);
        const coastlines = drawThreeGeo({
          json: data,
          radius: GLOBE_RADIUS,
          materialOptions: {
            color: 0x6699cc,
          },
        });
        globeGroup.add(coastlines);
      })
      .catch((err) => console.error("Failed to load coastline data:", err));

    // Bristol and Dhaka markers
    const bristolVec = latLonToVec3(BRISTOL.lat, BRISTOL.lon, GLOBE_RADIUS);
    const dhakaVec = latLonToVec3(DHAKA.lat, DHAKA.lon, GLOBE_RADIUS);

    const createMarker = (position: THREE.Vector3) => {
      const markerGroup = new THREE.Group();

      const dotGeom = new THREE.SphereGeometry(0.03, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xff3344),
        transparent: true,
        opacity: 0.95,
      });
      const dot = new THREE.Mesh(dotGeom, dotMat);
      markerGroup.add(dot);

      const ringGeom = new THREE.RingGeometry(0.05, 0.07, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xff3344),
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.lookAt(camera.position);
      markerGroup.add(ring);

      markerGroup.position.copy(position);
      return markerGroup;
    };

    const bristolMarker = createMarker(bristolVec);
    const dhakaMarker = createMarker(dhakaVec);
    globeGroup.add(bristolMarker, dhakaMarker);

    // Arc between Bristol and Dhaka
    const arcLift = 0.6;
    const midPoint = bristolVec
      .clone()
      .add(dhakaVec)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(GLOBE_RADIUS + arcLift);
    const arcCurve = new THREE.QuadraticBezierCurve3(
      bristolVec,
      midPoint,
      dhakaVec
    );

    const arcTubeGeom = new THREE.TubeGeometry(arcCurve, 64, 0.006, 8, false);
    const arcTubeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xff3344),
      transparent: true,
      opacity: 0.7,
    });
    const arcTube = new THREE.Mesh(arcTubeGeom, arcTubeMat);
    globeGroup.add(arcTube);

    const arcPoints = arcCurve.getPoints(100);
    const arcGeom = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const arcMat = new THREE.LineDashedMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      dashSize: 0.12,
      gapSize: 0.06,
      linewidth: 2,
    });
    const arcLine = new THREE.Line(arcGeom, arcMat);
    arcLine.computeLineDistances();
    globeGroup.add(arcLine);

    const travelDotGeom = new THREE.SphereGeometry(0.016, 16, 16);
    const travelDotMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xffffff),
      transparent: true,
      opacity: 0.9,
    });
    const travelDot = new THREE.Mesh(travelDotGeom, travelDotMat);
    globeGroup.add(travelDot);

    let travelProgress = 0;

    const tempVec = new THREE.Vector3();
    const cameraDir = new THREE.Vector3();

    const updateLabel = (
      ref: React.RefObject<HTMLDivElement>,
      target: THREE.Object3D
    ) => {
      const el = ref.current;
      if (!el) return;
      target.getWorldPosition(tempVec);
      tempVec.project(camera);

      const isFrontFacing =
        tempVec.clone().normalize().dot(cameraDir.copy(camera.position).normalize()) > 0;
      if (!isFrontFacing) {
        el.style.display = "none";
        return;
      }

      el.style.display = "block";
      const x = (tempVec.x * 0.5 + 0.5) * renderer.domElement.clientWidth;
      const y = (-tempVec.y * 0.5 + 0.5) * renderer.domElement.clientHeight;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    };

    let rafId = 0;
    const clock = new THREE.Clock();

    const renderLoop = () => {
      rafId = requestAnimationFrame(renderLoop);
      const t = clock.getElapsedTime();

      globeGroup.rotation.y += 0.0015;

      const bristolRing = bristolMarker.children[1] as THREE.Mesh;
      const dhakaRing = dhakaMarker.children[1] as THREE.Mesh;
      bristolRing.scale.setScalar(1 + Math.sin(t * 2) * 0.15);
      (bristolRing.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(t * 2) * 0.2;
      dhakaRing.scale.setScalar(1 + Math.cos(t * 2) * 0.15);
      (dhakaRing.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.cos(t * 2) * 0.2;

      bristolRing.lookAt(camera.position);
      dhakaRing.lookAt(camera.position);

      arcMat.dashOffset -= 0.002;

      travelProgress = (travelProgress + 0.003) % 1;
      const dotPos = arcCurve.getPoint(travelProgress);
      travelDot.position.copy(dotPos);

      // Update all line animations from threeGeoJSON
      globeGroup.children.forEach((child) => {
        if (child.userData.update) {
          child.userData.update(t);
        }
      });

      updateLabel(labelBristolRef, bristolMarker);
      updateLabel(labelDhakaRef, dhakaMarker);

      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target !== wrapEl) continue;
        const { width, height } = entry.contentRect;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(wrapEl);

    renderLoop();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();

      globeGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat?.dispose());
          } else {
            child.material?.dispose();
          }
        }
        if (child instanceof THREE.Line) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat?.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentElement === wrapEl) {
        wrapEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <figure className="relative aspect-square w-full">
      <div className="relative h-full w-full overflow-hidden lg:overflow-visible">
        <div
          ref={canvasWrapRef}
          className="h-full w-full [&>canvas]:h-full [&>canvas]:w-full"
          aria-hidden="true"
        />
        <div
          ref={labelBristolRef}
          className="pointer-events-none absolute w-40 whitespace-nowrap"
          style={{ transform: "translate(-0.5rem, -0.5rem)" }}
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur-md">
            Bristol, UK
          </div>
        </div>
        <div
          ref={labelDhakaRef}
          className="pointer-events-none absolute w-40 whitespace-nowrap"
          style={{ transform: "translate(-0.5rem, -100%)" }}
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur-md">
            Dhaka, Bangladesh
          </div>
        </div>
      </div>
    </figure>
  );
}
