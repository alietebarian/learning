import React from "react";

interface DetailsBoxProps {
  icon: React.ReactNode;
  title: string;
  count: number | string;
}

export default function DetailsBox({ icon, title, count }: DetailsBoxProps) {
  return (
    <div className="flex flex-col items-center p-16 bg-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300 min-w-[180px] shadow-md">
      <span className="text-5xl text-cyan-400 mb-2 ">{icon}</span>
      <span className="text-lm  text-white">{count}</span>
      <span className="text-lm font-bold text-gray-300 mt-1">{title}</span>
    </div>
  );
}
