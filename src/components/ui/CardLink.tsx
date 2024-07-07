import LanguageTag from "ui/LanguageTag";

import { 
    Github
} from "lucide-react";

interface CardLinkProps {
    title: string;
    description?: string;
    href?: string;
    languages?: string[];
    img?: string;
    type?: string;
}

const CardLink = ({ img, href, title, languages, description, type }: CardLinkProps) => {
  return (
    <a
        className="relative flex flex-col gap-4 justify-between h-full rounded-xl bg-shade-4 border border-shade-2 p-8 shadow-xl transition hover:border-primary hover:shadow-primary/10 z-10"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
        <span className="absolute -top-2 -right-2 bg-emerald-500 px-2 text-lg rounded-full text-emerald-950 shadow-lg shadow-emerald-400/20">
            {type}
        </span>

        <div>
            <Github className="text-primary h-14 w-14 bg-shade-3 p-2 rounded-lg"/>

            <h3 className="mt-4 text-xl font-bold text-foreground-1">
                { title }
            </h3>

            {description && (
                <p className="mt-1 text-sm text-foreground-5">
                    { description }
                </p>
            )}

            <div>
                { languages && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        { languages.map((language) => (
                            <LanguageTag key={language} name={language}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
        <div>
            <img src={img ? img : "/img/projects/placeholder.png"} alt="imagem" className="flex w-full rounded-lg"/>  
        </div>
    </a>
  );
}

export default CardLink;