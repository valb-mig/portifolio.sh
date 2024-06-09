import LanguageTag from "ui/LanguageTag";

import { 
    Github
} from "lucide-react";

interface CardLinkProps {
    title: string;
    description?: string;
    href?: string;
    languages?: string[];
}

const CardLink = ({ href, title, languages, description }: CardLinkProps) => {
  return (
    <a
        className="relative block rounded-xl bg-shade-4 border border-shade-2 p-8 shadow-xl transition hover:border-primary hover:shadow-primary/10 z-10"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
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
    </a>
  );
}

export default CardLink;