import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tritubot | Reciclaje inteligente de botellas PET",
  description:
    "Landing moderna para presentar una red de reciclaje inteligente de botellas PET, lista para desplegar en Vercel.",
  metadataBase: new URL("https://tritubot.vercel.app"),
  openGraph: {
    title: "Tritubot",
    description:
      "Convierte el reciclaje de botellas PET en una experiencia clara, medible y atractiva para ciudadanos, marcas y ciudades.",
    url: "https://tritubot.vercel.app",
    siteName: "Tritubot",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tritubot",
    description:
      "Rediseño de landing para una iniciativa de reciclaje PET preparada para Vercel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
