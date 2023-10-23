"use client";

export function OriginText({ id }: { id: string }) {
  const originText = localStorage.getItem(`${id}_essay`);
  return (
    <p className="flex-1 px-2 font-mono text-sm text-slate-600 tracking-wider leading-normal whitespace-pre-line overflow-auto">
      {originText}
    </p>
  );
}
