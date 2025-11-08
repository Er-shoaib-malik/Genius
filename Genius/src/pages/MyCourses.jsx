import React from "react";
import DashNavbar from "../components/DashNavbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MyCourses = () => {
  const handleFindMore = () => {
    console.log("Find More Courses clicked");
  };

  return (
    <div>
      <DashNavbar />
      <div className="bg-gray-100 min-h-screen poppins-regular">
        <div className="rounded-[70px] px-9 py-23 bg-white flex flex-col items-center min-h-screen relative">
          {/* Dashboard Text */}
          <motion.div
            className="text-[15px] w-full text-black font-regular flex justify-end mr-40"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Dashboard{" "}
            <span className="mx-1 text-blue-500">→ Current Learning</span>
          </motion.div>

          {/* Title */}
          <div className="text-[30px] w-full text-black mb-8 font-regular">
            <span>My Courses</span>
          </div>

          {/* Cards */}
          <div className="w-full grid md:grid-cols-2 gap-8 justify-center">
            {/* Card 1 */}
            <div className="rounded-2xl h-[448px] w-[654px] overflow-hidden shadow-lg cursor-pointer">
              <img
                src="2.avif"
                alt="Blockchain Course"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl h-[448px] w-[654px] overflow-hidden shadow-lg cursor-pointer">
              <img
                src="5.avif"
                alt="Investing Course"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl h-[448px] w-[654px] overflow-hidden shadow-lg cursor-pointer">
              <img
                src="8.avif"
                alt="Investing Course"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl h-[448px] w-[654px] overflow-hidden shadow-lg cursor-pointer">
              <img
                src="9.avif"
                alt="Investing Course"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Button aligned right */}
<div className="w-full flex justify-end mt-12 pr-20">
  <button
    onClick={handleFindMore}
    className="relative w-60 h-14 bg-gray-100 border-4 border-white text-black font-medium rounded-full flex items-center justify-center transition group overflow-hidden hover:shadow-lg"
  >
    <div className="absolute inset-0 bg-[#F9452C] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>

    <div className="absolute left-0 top-0 bottom-0 flex items-center pl-1 z-10">
      <div className="bg-[#F9452C] rounded-full p-4 flex items-center justify-center">
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
    </div>

    <span className="relative text-md z-10 group-hover:text-white transition-colors duration-300 ml-6">
      Find More Courses
    </span>
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default MyCourses;
