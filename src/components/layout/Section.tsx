"use client";

import React from "react";

import { 
    Plus
  } from "lucide-react";

interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
};

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section id={id} className={`flex w-full items-center relative py-4 px-2 ${ className }`}>

        <div className="absolute flex w-full justify-between z-30 top-0 text-shade-3 overflow-hidden">
            <span className="flex w-10 justify-between">
                <Plus className="rotate-12 h-5"/>
                <Plus className="rotate-45 h-3"/>
            </span>
            <span className="flex w-10 justify-between">
                <Plus className="rotate-12 h-7"/>
                <Plus className="rotate-45 h-3"/>
            </span>
        </div>

        { children }
    </section>
  );
};

export default Section;