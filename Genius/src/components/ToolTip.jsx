// components/Tooltip.jsx
import React from "react";

export default function Tooltip({ text, children }) {
  return (
    <div className="relative group cursor-pointer">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out bg-white text-black text-[11px] font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap z-10">
        {text}
      </div>
    </div>
  );
}
