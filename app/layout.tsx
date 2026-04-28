import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MESO — Sistemas Autónomos para África / Autonomous Systems for Africa",
  description: "MESO constrói sistemas de drones avançados e plataformas de IA para proteger a infraestrutura crítica de África.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
