import type { Metadata } from "next";
import { Wix_Madefor_Text } from "next/font/google"; // Official Next.js font optimization
import "./globals.css";

// Configure the font with the weights found in your CSS (400, 500) plus bold for headers
const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Covering all potential weights
  variable: "--font-wix", // CSS variable we will use in Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "RACO AI",
  description: "Smart solutions for scaling B2B operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={wixMadeforText.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}