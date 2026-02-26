import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEOBIOS — Consultoría Ambiental",
  description:
    "Especialistas en consultoría ambiental, gestión ambiental, supervisión, estudios científicos y asesoría jurídica ambiental. Más de 20 años de experiencia.",
  keywords:
    "consultoría ambiental, gestión ambiental, estudios ambientales, supervisión ambiental, asesoría jurídica ambiental, GEOBIOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
