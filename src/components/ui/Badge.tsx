"use client";

import React from "react";

interface TitleProps {
    title?: string;
    redirect?: string;
    children?: React.ReactNode;
}

const Badge = ({ children, title, redirect }: TitleProps) => {
  return (
    <div className={`flex gap-2 text-lg items-center ${redirect ? `cursor-pointer` : ``}`} onClick={redirect ? () => window.open(redirect, "_blank") : undefined}>
        <span className={`flex items-center justify-center w-9 h-9 bg-shade-3 border-2 border-shade-2 rounded-lg transition-all ${redirect ? `hover:border-emerald-500` : ``}`}>
          { children }
        </span>
        { title && <p>{ title }</p> }
    </div>
  );
};

export default Badge;