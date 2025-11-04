import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, HelpCircle, UserPlus, Send, ArrowRight } from "lucide-react";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reenterPassword: "",
    pronouns: "",
    customPronouns: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-poppins overflow-hidden">
      {/* Left Section with animation */}
      <motion.div
        className="w-full md:w-1/2 px-8 md:px-12 py-8 md:py-0 flex flex-col justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Breadcrumb */}
        <div className="text-[14px] md:text-[15px] text-white mb-2 font-semibold">
          Home <span className="mx-1 text-white">→</span> Sign Up
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[40px] font-bold leading-tight mb-4 max-w-[441px]">
          Create Your Learning Account
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFFCC] text-base leading-relaxed mb-6 max-w-[429px]">
          Create your account to unlock courses, ebooks, and certificates —
          everything in one place.
        </p>

        {/* Decorative Line */}
        <div className="w-[100px] md:w-[140px] h-[3px] bg-[#858585] mb-7"></div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 md:gap-y-10 md:gap-x-8">
          {[
            {
              icon: <FileText className="w-5 h-5 text-white" />,
              title: "Browse Courses",
              desc: "We offer over 200 Courses",
            },
            {
              icon: <HelpCircle className="w-5 h-5 text-white" />,
              title: "Check out FAQs",
              desc: "Get Quick Answers",
            },
            {
              icon: <UserPlus className="w-5 h-5 text-white" />,
              title: "Sign Up & Get Started",
              desc: "From custom eBooks to personalized courses",
            },
            {
              icon: <Send className="w-5 h-5 text-white" />,
              title: "Got Questions?",
              desc: "Send us an email",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 transition-all duration-200 ease-in-out hover:translate-x-1.5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div className="bg-[#24242499] rounded-xl h-[45px] w-[45px] flex items-center justify-center border border-[#EEEEEE1A]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[15px]">{item.title}</h3>
                <p className="text-[#B3B3B3] text-[14px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Section with animation */}
      <motion.div
        className="w-full md:w-1/2 pt-[35px] pb-[35px] px-6 md:px-[30px] flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-[#141414] rounded-[15px] p-6 md:p-8 w-full max-w-[661px] border-[0.5px] border-[#FFFFFF33]">
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-poppins font-bold">
              <div>
                <label className="text-[#E0E0E0] block text-[12px] mb-2 font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="text-[#E0E0E0] block text-[12px] mb-2 font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-[#E0E0E0] block text-[12px] mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Jane@gmail.com"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-[#E0E0E0] block text-[12px] mb-2 font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Re-enter Password */}
            <div>
              <label className="text-[#E0E0E0] block text-[12px] mb-2 font-bold">
                Re-enter Password
              </label>
              <input
                type="password"
                name="reenterPassword"
                value={formData.reenterPassword}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Pronouns */}
            <div>
              <label className="text-[#E0E0E0] block text-[12px] mb-2 font-bold">
                How should we refer to you?:
              </label>
              <select
                name="pronouns"
                value={formData.pronouns}
                onChange={handleChange}
                className="w-full h-[42px] text-[15px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-[#999999] focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer"
              >
                <option value="">Select...</option>
                <option value="he/him">he/him</option>
                <option value="she/her">she/her</option>
                <option value="they/them">they/them</option>
                <option value="prefer-to-write">Prefer to write it</option>
              </select>
            </div>

            {/* Custom Pronouns */}
            <div>
              <label className="text-[#E0E0E0] block text-[12px] mb-2 font-medium">
                If you selected "Prefer to write it," please write your pronouns
                here
              </label>
              <input
                type="text"
                name="customPronouns"
                value={formData.customPronouns}
                onChange={handleChange}
                placeholder="she/her/they"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 mb-6">
              <label className="relative cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="peer w-4 h-4 appearance-none border border-[#EEEEEE1A] rounded-sm bg-[#BBBBBB33] cursor-pointer checked:bg-blue-600 checked:border-blue-600 transition-all duration-200"
                />
                <svg
                  className="absolute left-0.5 top-0.5 w-3 h-3 hidden peer-checked:block pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 L9 17 L4 12" />
                </svg>
              </label>
              <p className="text-[12px] text-white leading-[20px] line-clamp-2">
                I consent to Genius collecting, storing, and using the
                information I provide in this sign-up sheet. For more details,
                please see our{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">
                  Terms of Service
                </span>
                .
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full mt-2">
              <button
                onClick={handleSubmit}
                className="relative w-60 h-10 bg-white border-4 border-white text-black font-bold rounded-[15px] flex items-center justify-center transition group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#F9452C] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"></div>
                <div className="absolute left-0 top-0 bottom-0 flex items-center pl-0.5 z-10">
                  <div className="bg-[#F9452C] rounded-full p-2 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span className="relative text-sm z-10 group-hover:text-white transition-colors duration-300">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
