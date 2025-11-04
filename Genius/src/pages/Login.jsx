import React, { useState } from "react";
import { Send, HelpCircle, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
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
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Don't have an Account",
      desc: "create an account",
    }
  ];

  return (
    <div className="pt-[100px] pb-[50px] bg-black w-full flex justify-center items-center mx-auto px-4">
      <div className="max-w-[1140px] w-full bg-black text-white flex justify-center items-center flex-col gap-10 poppins-light">
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
              Home <span className="mx-1 text-white">→</span> Log In
            </motion.div>

            <motion.h1
              className="text-6xl md:text-5xl font-bold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Welcome Back!             </motion.h1>

            <motion.p
              className="text-[#FFFFFFCC] text-[16px] md:text-[17px] max-h-[65px] mb-8 leading-loose font-medium"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Log in to continue exploring your Genius tools and personalized courses.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-[100px] md:w-[140px] h-[3px] bg-[#858585] mb-7"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>

          <div className=" w-full">
            {options.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 transition-all duration-200 ease-in-out hover:translate-x-1.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-[#24242499] rounded-xl h-[45px] w-[45px] flex items-center justify-center border border-[#EEEEEE1A]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[16px]">{item.title}</h3>
                  <p className="text-[#B3B3B3] text-[14px] font-medium">{item.desc}</p>
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
          <form onSubmit={handleSubmit} className="space-y-7">
            

            {/* username */}
            <div>
              <label className="block text-xs font-bold text-gray-200 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full h-[42px] bg-[#BBBBBB08] border border-[#EEEEEE1A] rounded-lg px-3 text-white font-medium placeholder:font-medium placeholder-[#999999] focus:outline-none focus:border-blue-500 transition"
              />
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
                  Log in
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
