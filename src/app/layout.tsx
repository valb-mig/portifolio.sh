import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "#/css/globals.css";

const rubki = Rubik({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivalber Miguel - Portifólio",
  description: "Portifólio de Ivalber Miguel",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubki.className}>
        <div className="bg-default overflow-hidden">
          { children }
        </div>
      </body>
    </html>
  );
}
