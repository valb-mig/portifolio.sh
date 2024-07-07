"use client";

import React from "react";

interface ButrtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, className, children }: ButrtonProps) => {
  return (
    <button className={`flex gap-2 text-lg justify-center items-center w-9 h-9 bg-shade-3 border-2 border-shade-2 rounded-lg transition-all hover:bg-emerald-900 hover:border-emerald-600 ${className ? className : `` }`} onClick={onClick}>
        { children }
    </button>
  );
};

export default Button;