"use client";

import Badge from  "ui/Badge";

import { 
    Terminal,
    Github,
    Linkedin,
    Instagram
} from "lucide-react";

import config from "@/config";

const Header = () => {
  return (
        <div className="p-2 text-foreground-1">
            <header className="flex justify-between items-center h-10">
                    
                <div className="flex items-center gap-2">
                    <a className="flex items-center gap-2 font-bold h-full" href="https://github.com/valb-mig" target="_blank" rel="noreferrer">
                        <img src="/img/valb-mig.png" width="36px" className="rounded-lg"/>
                        { config.name }
                    </a>
                    <Badge title="./portifolio.sh">
                        <Terminal />
                    </Badge>
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