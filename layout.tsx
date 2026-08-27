import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://regantisirrigation.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sistemas de riego en Venezuela y Panamá | Regantis Irrigation",
    template: "%s | Regantis Irrigation",
  },
  description: "Diseño, suministro e instalación de sistemas de riego agrícola en Venezuela y Panamá: goteo, aspersión, microaspersión, filtrado y conducción.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: siteUrl,
    siteName: "Regantis Irrigation C.A.",
    title: "Sistemas de riego en Venezuela y Panamá | Regantis Irrigation",
    description: "Ingeniería, suministro e instalación de sistemas de riego agrícola para proyectos en Venezuela y Panamá.",
    images: [{ url: "/hero-carrete-riego.jpeg", width: 1200, height: 630, alt: "Proyecto de riego agrícola Regantis Irrigation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas de riego en Venezuela y Panamá | Regantis Irrigation",
    description: "Ingeniería, suministro e instalación de sistemas de riego agrícola.",
    images: ["/hero-carrete-riego.jpeg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Regantis Irrigation C.A.",
  url: siteUrl,
  logo: `${siteUrl}/regantis-logo.png`,
  image: `${siteUrl}/hero-carrete-riego.jpeg`,
  description: "Ingeniería, suministro e instalación de sistemas de riego agrícola en Venezuela y Panamá.",
  email: "ventas@regantisirrigation.com",
  telephone: ["+50767676192", "+584243470965"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cagua",
    addressRegion: "Aragua",
    addressCountry: "VE",
  },
  areaServed: [
    { "@type": "Country", name: "Venezuela" },
    { "@type": "Country", name: "Panamá" },
  ],
  serviceType: [
    "Diseño de sistemas de riego",
    "Instalación de sistemas de riego",
    "Riego por goteo",
    "Riego por aspersión",
    "Microaspersión",
    "Filtrado y conducción hidráulica",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />{children}</body></html>;
}
