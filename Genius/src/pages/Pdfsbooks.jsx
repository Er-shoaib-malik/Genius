import React from "react";
import DashNavbar from "../components/DashNavbar";
import { BookOpenText } from "lucide-react";
import BookshelfSection from "../components/BookShelfSection";

export default function Pdfsbooks() {
  const books = [
    { title: "The Science of Molecules", author: "Dr. Amira Hassan" },
    { title: "The Psychology of Perception", author: "Prof. Daniel Rivera" },
    { title: "The Language of Algorithms", author: "Dr. Elena Marković" },
    { title: "The Rise of Social Engineering", author: "Malcolm Gladwell" },
    { title: "A Mind for Science", author: "Prof. Michaela Paul" },
    {
      title: "Virtual Minds: Thriving ",
      author: "Dr. Naomi Clarke",
    },
  ];

  return (
    <div>
      <DashNavbar />
      <div className="bg-gray-100 min-h-screen poppins-regular">
        <div className="rounded-[70px]  bg-black ">
          <div className="flex flex-1 justify-center items-center px-15 py-15">
            <div className="bg-black border border-white/40 w-full  h-[682px] rounded-3xl flex items-center justify-between px-15">
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

          <section className="w-full h-[500px] bg-black py-20 flex flex-col items-center ">
            <div className="absolute">
              <div className="flex  gap-40 w-full max-w-6xl px-8 relative -left-40 z-2">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white w-14 h-75  shadow-lg justify-between m-2 text-center"
                  >
                    <span className="text-[10px] max-w-10 h-5 mt-15 flex justify-center  font-medium text-gray-800 rotate-[-90deg] whitespace-nowrap origin-bottom mb-4">
                      {book.title}
                    </span>
                    <span className="text-[10px] w-10 mb-5 font-medium text-gray-600 rotate-[-90deg] whitespace-nowrap origin-top">
                      {book.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-25 w-[90%] bg-linear-to-b from-gray-200/20 to-gray-500/20 relative top-55"></div>

            <div className="w-[90%] h-4 bg-white rounded-t-md relative top-55"></div>
          </section>
          <section className="w-full h-[500px] bg-black py-20 flex flex-col items-center ">
            <div className="absolute">
              <div className="flex  gap-40 w-full max-w-6xl px-8 relative -left-40 z-2">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white w-14 h-75  shadow-lg justify-between m-2 text-center"
                  >
                    <span className="text-[10px] max-w-10 h-5 mt-15 flex justify-center  font-medium text-gray-800 rotate-[-90deg] whitespace-nowrap origin-bottom mb-4">
                      {book.title}
                    </span>
                    <span className="text-[10px] w-10 mb-5 font-medium text-gray-600 rotate-[-90deg] whitespace-nowrap origin-top">
                      {book.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-25 w-[90%] bg-linear-to-b from-gray-200/20 to-gray-500/20 relative top-55"></div>

            <div className="w-[90%] h-4 bg-white rounded-t-md relative top-55"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
