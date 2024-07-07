"use client";

import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: TitleProps) => {
  return (
    <h3 className="relative flex items-center gap-2 text-sm sm:text-3xl py-2">
      <div className="flex items-center text-foreground-2 bg-shade-3 px-4 p-1 rounded-full border border-shade-2">
        { children }
      </div>
    </h3>
  );
};

export default Subtitle;