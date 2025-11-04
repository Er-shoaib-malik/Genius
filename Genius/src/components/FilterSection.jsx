import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterSection = ({ title, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl px-5 py-1.5 mb-4 cursor-pointer hover:bg-gray-50 transition-all duration-300 w-[400px]  "
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between h-[73px] ">
        <span className="font-medium text-gray-900">{title}</span>
        <ChevronDown
          className={`w-6 h-6 text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown section */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-px text-md text-gray-900 font-medium">
          {options.map((option, index) => (
            <li
              key={index}
              className="hover:text-blue-400 rounded-lg px-1 py-0.5 transition"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
