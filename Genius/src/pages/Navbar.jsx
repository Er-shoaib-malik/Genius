import React from "react";
import { ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-10 py-4 font-sans pb-30">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">e</span>
          <span className="text-[#FBBC05]">n</span>
          <span className="text-[#34A853]">i</span>
          <span className="text-[#EA4335]">u</span>
          <span className="text-[#4285F4]">s</span>
        </h1>
      </div>

      {/* Center - Nav Links */}
      <div className="flex items-center gap-10 text-[15px] font-medium">
        <a href="#" className="hover:text-gray-300 transition-colors">
          About Us
        </a>
        <a href="#" className="text-blue-600 font-semibold">
          Courses
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
          Explore
          <ChevronDown size={16} />
        </a>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses, e-books, lessons"
            className="w-[240px] rounded-full bg-white text-black placeholder-gray-500 px-4 py-2 text-sm focus:outline-none"
          />
          <Search
            size={16}
            className="absolute right-3 top-2.5 text-gray-500"
          />
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 border border-[#1E40AF] text-white rounded-md font-semibold text-sm bg-[#1A1A1A] hover:bg-[#1E40AF] transition">
          SIGN UP
        </button>
        <button className="px-5 py-2 border border-gray-600 text-white rounded-md font-medium text-sm hover:bg-gray-800 transition">
          Log In
        </button>
      </div>
    </nav>
  );
}
