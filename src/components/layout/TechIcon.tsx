"use client";

const TechIcon = ({ technology }: { technology: string }) => {
    
    const icons = (technology: string) => {

        const iconsObj: Record<string, React.ReactNode> = {
            "Laravel":      <img src="/assets/tech/laravel.svg" alt="Laravel"/>,
            "TypeScript":   <img src="/assets/tech/typescript.svg" alt="TypeScript"/>,
            "Git":          <img src="/assets/tech/git.svg" alt="Git"/>,
            "JavaScript":   <img src="/assets/tech/javascript.svg" alt="JavaScript"/>,
            "React":        <img src="/assets/tech/react.svg" alt="React"/>,
            "Next.js":      <img src="/assets/tech/nextjs.svg" alt="Next.js"/>,
            "Tailwind CSS": <img src="/assets/tech/tailwindcss.svg" alt="Tailwind CSS"/>,
            "Node.js":      <img src="/assets/tech/nodejs.svg" alt="Node.js"/>,
            "PHP":          <img src="/assets/tech/php.svg" alt="PHP"/>,
            "Docker":       <img src="/assets/tech/docker.svg" alt="Docker"/>,
            "MySQL":        <img src="/assets/tech/mysql.svg" alt="MySQL"/>
        };

        return iconsObj[technology];
    };

    return (
        <>
            { icons(technology) }
        </>
    );
};

export default TechIcon;