import React, { useState } from "react";
import { Send, HelpCircle, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
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

  const options = [
    {
      icon: <Send className="w-5 h-5 text-white" />,
      title: "Email Us",
      desc: "hey@Genius.com",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-white" />,
      title: "Check out FAQs",
      desc: "Get Quick Answers",
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Are you a company?",
      desc: "← Contact Form",
    },
  ];

  return (
    <div className="pt-[100px] pb-[50px] bg-black w-full flex justify-center items-center mx-auto px-4">
      <div className="max-w-[1140px] w-full bg-black text-white flex flex-col md:flex-row justify-between gap-10 md:gap-0 poppins-light">
        {/* Left Section */}
        <div className="w-full md:w-[45%] flex flex-col justify-start">
          <motion.div
            className="flex flex-col gap-2.5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              className="text-[14px] md:text-[15px] text-white font-medium"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Home <span className="mx-1 text-white">→</span> Contact & Support
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              How Can We Assist <span className="text-[#D5F37C]">You </span>
              Today?
            </motion.h1>

            <motion.p
              className="text-[#FFFFFFCC] text-[16px] md:text-[17px] max-h-[65px] mb-8 leading-loose font-medium"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Need some assistance? Feel free to send us a message using this
              form, and we'll respond promptly!
            </motion.p>
          </motion.div>

          <motion.div
            className="w-[100px] md:w-[140px] h-[3px] bg-[#858585] mb-7"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 md:gap-y-10 md:gap-x-8">
            {options.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 transition-all duration-200 ease-in-out hover:translate-x-1.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-[#24242499] rounded-xl h-[48px] w-[48px] flex items-center justify-center border border-[#EEEEEE1A]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[16px]">{item.title}</h3>
                  <p className="text-[#B3B3B3] text-[14px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full md:max-w-[48%] bg-[#141414] rounded-2xl px-6.5 py-9 border border-[#FFFFFF33] flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {["firstName", "lastName"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-gray-200 mb-2">
                    {field === "firstName" ? "First Name" : "Last Name"}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === "firstName" ? "Jane" : "Smith"}
                    className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white font-semibold placeholder:font-semibold placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              ))}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Jane@gmail.com"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white font-semibold placeholder:font-semibold placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white font-semibold placeholder:font-semibold placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white font-semibold placeholder:font-semibold placeholder-[#999999] focus:outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 mb-6">
              <label className="relative cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="peer w-[15px] h-[15px] appearance-none border border-[#bbbbbb41] rounded-[3px] bg-[#24242499] cursor-pointer checked:bg-[#3B82F6] checked:border-[#3B82F6] transition-all duration-200"
                />
                <svg
                  className="absolute left-[3px] top-[2.5px] w-2.5 h-2.5 hidden peer-checked:block pointer-events-none"
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

              <p className="text-[12px] text-white leading-[20px]">
                I consent to Genius collecting, storing, and using the
                information I provide in this form to contact. For more details,
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
            <div className="flex justify-center">
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
                  Get in Touch
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
