"use client";

import TechIcon from "layout/TechIcon";

interface TechCardProps {
  name: string;
  id: string |number;
}

const TechCard = ({ name, id }: TechCardProps) => {

  const delay = `calc(30s / 11 * (11 - ${id}) * -2)`;

  return (
    <span 
      className="flex w-full p-2 rounded-lg items-center text-lg lg:text-4xl gap-2 text-foreground-3 pointer-events-none item"
      style={{ animationDelay: delay}}
    >
      <div className="min-w-10 min-h-10 size-10 lg:size-20 flex items-center justify-center">
        <TechIcon technology={name}/>
      </div> 
      { name }
    </span>
  );
};

export default TechCard;