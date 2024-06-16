"use client";

import { 
  Github,
  Linkedin,
  Instagram,
  MailIcon
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-shade-4">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="mt-4 max-w-xs text-foreground-5">
              Website dedicado em apresentar o meu progresso como desenvolvedor web, e como programador em geral, apresentado em formato de portifolio.
            </p>

            <ul className="mt-8 flex gap-6">

              <li>
                <a
                  href="https://www.instagram.com/valb.mig/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-shade-1 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6"/>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/valb-mig"
                  rel="noreferrer"
                  target="_blank"
                  className="text-shade-1 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6"/>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/valb-mig/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-shade-1 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkedin</span>
                  <Linkedin className="h-6 w-6"/>
                </a>
              </li>

              <li>
                <a
                  href="mailto:valb-mig@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="text-shade-1 transition hover:opacity-75"
                >
                  <span className="sr-only">Gmail</span>
                  <MailIcon className="h-6 w-6"/>
                </a>
              </li>

            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-foreground-1">Linguagens</p>
              <ul>
                <li className="text-foreground-5">
                  <p>Javascript</p>
                </li>
                <li className="text-foreground-5">
                  <p>TypeScript</p>
                </li>
                <li className="text-foreground-5">
                  <p>Python</p>
                </li>
                <li className="text-foreground-5">
                  <p>PHP</p>
                </li>
                <li className="text-foreground-5">
                  <p>Shell Script</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground-1">Frameworks</p>
              <ul>
                <li className="text-foreground-5">
                  <p>Laravel</p>
                </li>
                <li className="text-foreground-5">
                  <p>Laminas</p>
                </li>
                <li className="text-foreground-5">
                  <p>Reactjs</p>
                </li>
                <li className="text-foreground-5">
                  <p>Next.js</p>
                </li>
                <li className="text-foreground-5">
                  <p>Tailwind CSS</p>
                </li>
                <li className="text-foreground-5">
                  <p>Sass</p>
                </li>
                <li className="text-foreground-5">
                  <p>Tauri</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground-1">Databases</p>
              <ul>
                <li className="text-foreground-5">
                  <p>MySQL</p>
                </li>
                <li className="text-foreground-5">
                  <p>Sqlite</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground-1">Ferramentas</p>
              <ul>
                <li className="text-foreground-5">
                  <p>Git</p>
                </li>
                <li className="text-foreground-5">
                  <p>Github</p>
                </li>
                <li className="text-foreground-5">
                  <p>Figma</p>
                </li>
                <li className="text-foreground-5">
                  <p>Node</p>
                </li>
                <li className="text-foreground-5">
                  <p>Docker</p>
                </li>
                <li className="text-foreground-5">
                  <p>Linux</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-foreground-5">&copy; 2024. Ivalber Miguel. feito com ❤️ por <a href="https://github.com/valb-mig" className="text-emerald-500 underline" target="_blank">valb-mig</a></p>
      </div>
    </footer>
  );
}

export default Footer;