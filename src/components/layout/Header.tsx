"use client";

import Badge from  "ui/Badge";

import { 
    Terminal,
    Github,
    Linkedin,
    Instagram
} from "lucide-react";

const Header = () => {
  return (
        <div className="p-2 text-foreground-1">
            <header className="flex justify-between items-center h-10">
                    
                <div className="flex items-center gap-2">
                    <Badge title="./portifolio.sh" titleClass="hidden sm:block">
                        <Terminal />
                    </Badge>
                </div>

                <div className="flex gap-2 text-sm">
                    {
                        [
                            { name: "Sobre", href: "#about" },
                            { name: "Experiência", href: "#experience" },
                            { name: "Tecnologias", href: "#technologies" },
                            { name: "Projetos", href: "#projects" }
                        ].map((item, index) => (
                            <a 
                                key={index}
                                className="text-foreground-4 hover:text-foreground-1 p-1 px-2 rounded-lg transition-all hidden sm:block sm:text-xs lg:text-lg " 
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        ))
                    }
                </div>

                <div className="flex gap-2">
                    <Badge redirect="https://github.com/valb-mig">
                        <Github />
                    </Badge>
                    <Badge redirect="https://www.linkedin.com/in/valb-mig/">
                        <Linkedin />
                    </Badge>
                    <Badge redirect="https://www.instagram.com/valb.mig/">
                        <Instagram />
                    </Badge>
                </div>

            </header>
        </div>
  );
}

export default Header;