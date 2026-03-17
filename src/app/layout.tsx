import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "#/css/globals.css";

const jetbrains = JetBrains_Mono({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mono"
});

const inter = Inter({ 
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Ivalber Souza — Backend Developer",
  description: "Portfólio de Ivalber Souza — PHP Backend Developer, DDD, Clean Code, Docker.",
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
    <html lang="pt-br" className="dark">
      <body className={`${jetbrains.variable} ${inter.variable} font-mono bg-zinc-950 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
