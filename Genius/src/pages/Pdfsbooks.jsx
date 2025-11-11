import React, { useState } from "react";
import { motion } from "framer-motion";
import DashNavbar from "../components/DashNavbar";
import { BookOpenText } from "lucide-react";

export default function Pdfsbooks() {
  const books = [
    {
      title: "The Science of Molecules",
      author: "Dr. Amira Hassan",
      sideImage: "/covers/book1.png",
    },
    {
      title: "The Psychology of Perception",
      author: "Prof. Daniel Rivera",
      sideImage: "/covers/book2.png",
    },
    {
      title: "The Language of Algorithms",
      author: "Dr. Elena Marković",
      sideImage: "/covers/book3.png",
    },
    {
      title: "The Rise of Social Engineering",
      author: "Malcolm Gladwell",
      sideImage: "/covers/book4.png",
    },
    {
      title: "A Mind for Science",
      author: "Prof. Michaela Paul",
      sideImage: "/covers/book5.png",
    },
    {
      title: "Virtual Minds: Thriving",
      author: "Dr. Naomi Clarke",
      sideImage: "/covers/book6.png",
    },
  ];

  const [hoveredBook, setHoveredBook] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen poppins-regular">

      {/* Top Section */}
      <div className="rounded-[70px] bg-black">
        <div className="flex flex-1 justify-center items-center px-15 py-15">
          <div className="bg-black border border-white/40 w-full h-[682px] rounded-3xl flex items-center justify-between px-15">
            {/* Left Text Section */}
            <section className="flex flex-col items-start justify-center text-white text-left px-6 space-y-4 max-w-md">
              {/* Icon */}
              <BookOpenText className="w-20 h-20 text-[#C8F560]" />

              {/* Title */}
              <h1 className="text-[40px] font-bold leading-tight">
                Your E-book & PDF
                <span className="block text-white/90">library</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-white font-medium mb-6">
                Your complete e-book library — owned, created, and saved.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 text-[15px]">
                <button className="bg-white text-black font-medium px-6 py-2 rounded-lg border border-transparent hover:bg-black hover:text-white hover:border-blue-500 transition-all duration-300">
                  Create my own e-book
                </button>
                <button className="border border-white text-white font-medium px-6 py-2 rounded-lg hover:border-blue-500 transition-all duration-300">
                  Browse Library
                </button>
              </div>
            </section>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img
                src="openbook.png"
                alt="Open Book"
                className="h-[468px] object-contain mr-25"
              />
            </div>
          </div>
        </div>

        {/* Bookshelf Section */}
        <section className="w-full h-[500px] bg-black py-20 flex flex-col items-center relative overflow-hidden">
          <div className="absolute">
            <div className="flex gap-40 w-full max-w-6xl px-8 relative -left-40 z-2">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredBook(index)}
                  onMouseLeave={() => setHoveredBook(null)}
                  className="relative flex flex-col items-center bg-white w-14 h-75 shadow-lg justify-between m-2 text-center cursor-pointer overflow-visible"
                  animate={{
                    x: hoveredBook === index ? -10 : 0, // move left slightly
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Book Spine */}
                  <span className="text-[10px] max-w-10 h-5 mt-15 flex justify-center font-medium text-gray-800 rotate-[-90deg] whitespace-nowrap origin-bottom mb-4">
                    {book.title}
                  </span>
                  <span className="text-[10px] w-10 mb-5 font-medium text-gray-600 rotate-[-90deg] whitespace-nowrap origin-top">
                    {book.author}
                  </span>

                  {/* Side Image Appears */}
                  <motion.img
                    src={book.sideImage}
                    alt="Book Side"
                    className="absolute top-0 left-full h-full shadow-md"
                    initial={{ width: 0 }}
                    animate={
                      hoveredBook === index
                        ? { width: 70 } // expands to 30px
                        : { width: 0 } // shrinks back
                    }
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      transformOrigin: "left center",
                      borderTopRightRadius: "3px",
                      borderBottomRightRadius: "3px",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Shelf Base */}
          <div className="h-25 w-[90%] bg-gradient-to-b from-gray-200/20 to-gray-500/20 relative top-55"></div>
          <div className="w-[90%] h-4 bg-white rounded-t-md relative top-55"></div>
        </section>
        <section className="w-full h-[500px] bg-black py-20 flex flex-col items-center relative overflow-hidden">
          {/* Shelf Base */}
          <div className="h-25 w-[90%] bg-gradient-to-b from-gray-200/20 to-gray-500/20 relative top-55"></div>
          <div className="w-[90%] h-4 bg-white rounded-t-md relative top-55"></div>
        </section>
        <section className="w-full h-[500px] bg-black py-20 flex flex-col items-center relative overflow-hidden">
          {/* Shelf Base */}
          <div className="h-25 w-[90%] bg-gradient-to-b from-gray-200/20 to-gray-500/20 relative top-55"></div>
          <div className="w-[90%] h-4 bg-white rounded-t-md relative top-55"></div>
        </section>
      </div>
    </div>
  );
}
