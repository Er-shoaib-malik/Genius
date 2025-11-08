import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Calendar,
  Paperclip,
  BookOpen,
  Trophy,
  File,
  Bell,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: <Home size={20} />, label: "Back to Genius" },
  { icon: <Calendar size={20} />, label: "Calendar" },
  { icon: <Paperclip size={20} />, label: "Dashboard" },
  { icon: <File size={20} />, label: "Courses" },
  { icon: <BookOpen size={20} />, label: "Pdfs & Books" },
  { icon: <Trophy size={20} />, label: "Awards" },
];



export default function DashNavbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3.5 bg-gray-100 font-poppins">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-[#1DB2F0]">G</span>
          <span className="text-[#1DB2F0]">e</span>
          <span className="text-[#3C9545]">n</span>
          <span className="text-[#FDD309]">i</span>
          <span className="text-[#FC2220]">u</span>
          <span className="text-[#FC2220]">s</span>
        </div>

        {/* Nav Items */}
        <div className="flex flex-wrap items-center space-x-4">
          {navItems.map((item, i) => (
            <NavButton key={i} icon={item.icon} label={item.label} />
          ))}
        </div>

        {/* Profile + Notifications */}
        <div className="flex items-center gap-8 mr-3 p-1 rounded-sm bg-gray-200/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="profile icon.avif" className="h-8 pl-0.5" />
            </div>
            <span className="font-regular text-xs">Alice Smith</span>
          </div>
          <div className="relative flex gap-2">
            <button className="relative">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-1.5 h-1.5 rounded-full flex items-center justify-center"></span>
              <Bell size={16} />
            </button>
            <button className="relative">
              <Settings size={16} />
            </button>
          </div>
        </div>
      </nav>

      
    </div>
  );
}

function NavButton({ icon, label }) {
  return (
    <motion.div
      className="relative px-4 py-2 rounded-md cursor-pointer flex items-center overflow-hidden bg-gray-200/30"
      whileHover="hover"
      initial="initial"
    >
      {/* Blue background animation */}
      <motion.div
        className="absolute inset-0 bg-blue-500/90 rounded-xs"
        variants={{
          initial: { width: 0 },
          hover: {
            width: "100%",
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
        style={{ originX: 0 }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10 flex items-center "
        variants={{
          initial: { color: "#6a7282" },
          hover: { color: "#ffffff", transition: { duration: 0.2 } },
        }}
      >
        {icon}
      </motion.div>

      {/* Label (animates width on hover) */}
      <motion.span
        className="relative z-10 text-sm font-medium hidden md:inline-block overflow-hidden whitespace-nowrap"
        variants={{
          initial: {
            opacity: 0,
            width: 0,
            marginleft: 0
          },
          hover: {
            opacity: 1,
            width: "auto",
            color: "#ffffff",
            margin: "0 0 0 8px" ,
            transition: {
              duration: 0.3,
              ease: "easeOut",
              delay: 0.15, // label appears slightly after background
            },
          },
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
