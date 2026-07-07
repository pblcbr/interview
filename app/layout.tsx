import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prepara tu entrevista · Event Manager en Eskisit Catering",
  description:
    "Practica tu entrevista para Event Manager en Eskisit Catering (Sitges), con feedback después de cada respuesta.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
