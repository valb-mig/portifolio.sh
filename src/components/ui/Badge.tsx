"use client";

import React from "react";

interface TitleProps {
    title?: string;
    redirect?: string;
    titleClass?: string;
    children?: React.ReactNode;
    className?: string;
}

const Badge = ({ children, title, className, redirect, titleClass }: TitleProps) => {
  return (
    <div className={`flex gap-2 text-lg items-center ${className ? className : ``} ${redirect ? `cursor-pointer` : ``}`} onClick={redirect ? () => window.open(redirect, "_blank") : undefined}>
        <span className={`flex items-center justify-center w-9 h-9 bg-shade-3 border-2 border-shade-2 rounded-lg transition-all ${redirect ? `hover:border-emerald-500` : ``}`}>
          { children }
        </span>
        { title && <p className={`${titleClass ? titleClass : ``}`}>{ title }</p> }
    </div>
  );
};

export default Badge;