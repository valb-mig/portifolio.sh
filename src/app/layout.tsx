import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "#/css/globals.css";

const rubki = Rubik({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivalber Miguel - Portifólio",
  description: "Portifólio de Ivalber Miguel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubki.className}>
        <div className="bg-default">
          { children }
        </div>
      </body>
    </html>
  );
}
