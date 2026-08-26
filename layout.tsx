import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regantis Irrigation C.A. | Proyectos y sistemas de riego",
  description: "Proyectos y soluciones profesionales en sistemas de riego: goteo, aspersión fija y carretes autopropulsados para Venezuela y Panamá.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
