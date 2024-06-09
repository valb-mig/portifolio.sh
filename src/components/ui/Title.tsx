"use client";

import React from "react";

import { 
    Hash,
  } from "lucide-react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="flex items-center gap-2 text-3xl sm:text-5xl py-2 w-full overflow-hidden">
        <div className="flex items-center text-foreground-1">
            <Hash size={40} className="text-shade-1"/>
            { children }
        </div>
        <span className="flex bg bg-gradient-to-r from-shade-4 to-transparent h-1 min-w-full"/>
    </h2>
  );
};

export default Title;