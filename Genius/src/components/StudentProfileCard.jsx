import React from "react";
import { motion } from "framer-motion";
import {
  AppWindow,
  PieChart,
  Clock,
  Plus,
  ArrowRight,
  Book,
  LampDesk,
} from "lucide-react";

export default function StudentProfileCard() {
  const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
    const getGreeting = (hour) => {
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  return (
    <div className="max-w-[611px] w-full bg-gray-100 rounded-3xl shadow-sm border border-gray-100 p-5 pb-1.5 space-y-2">
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <p className="text-gray-800 text-sm font-medium">{date}</p>
        <h2 className="text-2xl font-semibold text-gray-900">{getGreeting(now.getHours())} Alice</h2>
        <p className="text-gray-800 text-sm font-medium">Level 2: Thinker</p>
      </div>

      {/* Toolbar Icons */}
      <div className="flex gap-3 justify-end text-yellow-500">
        <AppWindow className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition-colors" />
        <PieChart className="w-5 h-5 cursor-pointer text-blue-500 hover:text-yellow-600 transition-colors" />
        <LampDesk className="w-5 h-5 cursor-pointer text-blue-500 hover:text-yellow-600 transition-colors" />
        <Book className="w-5 h-5 cursor-pointer text-blue-500  hover:text-yellow-600 transition-colors" />
        <Plus className="w-5 h-5 cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors" />
      </div>

      {/* Course Card */}
      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <div className="flex justify-center absolute -bottom-1 ml-6 mb-9">
          <button
            onClick={handleSubmit}
            className="relative w-65 h-10 bg-white border-4 border-white text-black font-medium rounded-[15px] flex items-center justify-center transition group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#F9452C] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"></div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center pl-1 z-10">
              <div className="bg-[#F9452C] rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="relative text-xs z-10 group-hover:text-white transition-colors duration-300">
              Continue where you left off.
            </span>
          </button>
        </div>

        {/* Right side — Instructor Image */}
        <div className="w-[571px] h-[344px] ">
          <img
            src="15.png"
            alt="Instructor"
            className="object-cover w-full h-full rounded-2xl md:rounded-none md:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
