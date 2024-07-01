"use client";

const LanguageTag = ({ name }: { name: string }) => {
  return (
    <span className="inline-block rounded-full bg-shade-3 border border-shade-2 px-2 py-1 text-xs font-bold text-foreground-5 uppercase">
      { name }
    </span>
  );
};

export default LanguageTag;