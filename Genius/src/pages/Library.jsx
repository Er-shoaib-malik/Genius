import React, { useState } from "react";
import ScrollImageSequence from "../components/ScrollImageSequence";
import BookModel from "../components/BookModel";
import DiscoverSection from "../components/DiscoverSection";

const Library = () => {
  const covers = [
    "/covers/book1.png",
    "/covers/book2.png",
    "/covers/book3.png",
  ];
  const [selectedCover, setSelectedCover] = useState(covers[2]);
  return (
    <div className="w-full overflow-x-hidden">
      {/* Scroll-driven canvas sequence */}
      <ScrollImageSequence className="h-[500vh] " />

      {/* Next section — your “Library” content */}

      {/* Add as many more sections as you like below */}

      <div className="relative min-h-screen bg-black flex flex-col gap-20">
        <section className=" relative flex flex-col items-center justify-center h-[206px] bg-black text-white text-center px-6 pt-[70px]">
          <h1 className="text-[40px] md:text-5xl font-semibold mb-4">
            Your Library, <span className="text-white/90">Your way</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-2">
            Read ready-made topics or create your own personalised study book.
          </p>
          <p className=" mb-8 text-lg">
            Learn how it works →{" "}
            <span className="">scrolls to next section</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 h-[38px]">
            <button className="bg-white text-black font-regular px-6 py-0 rounded-lg hover:bg-black hover:text-white transition-all border hover:border-blue-500 duration-350">
              Create my own e-book
            </button>
            <button className="border border-white text-white font-regular px-6 py-3 flex justify-center items-center rounded-lg   transition-all hover:border-blue-500 duration-350">
              Browse Library
            </button>
          </div>
        </section>

        <section className="flex ">
          <BookModel cover="/covers/book1.png" spine="/spines/spine1.png" />
          <BookModel cover="/covers/book2.png" spine="/spines/spine2.png" />
          <BookModel cover="/covers/book3.png" spine="/spines/spine3.png" />
          <BookModel cover="/covers/book4.png" spine="/spines/spine4.png" />
          <BookModel cover="/covers/book5.png" spine="/spines/spine5.png" />
          <BookModel cover="/covers/book6.png" spine="/spines/spine6.png" />
        </section>
        <DiscoverSection />
        <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-center px-20 md:px-20 py-16">
          {/* LEFT CONTENT */}
          <div className="max-w-lg md:text-left text-center mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              Make it Yours
            </h1>
            <p className="text-gray-300 text-lg md:text-xl">
              Customize chapters, layouts, covers, and notes, <br />
              turn it into your personal study guide.
            </p>
          </div>

          {/* RIGHT CONTENT — BOOK & COVERS */}
          <div className="flex flex-col items-center justify-center relative">
            {/* Main book preview */}
            <div className="flex flex-row">
              <div>
                <div className="w-[250px] h-[350px] bg-gray-800 rounded-sm shadow-2xl overflow-hidden">
                  <img
                    src={selectedCover}
                    alt="Book Cover"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Cover options */}
                <div className="flex gap-4 mt-6">
                  {covers.map((cover, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCover(cover)}
                      className={`w-[80px] h-[80px] overflow-hidden rounded-sm border-2 transition-all duration-300 ${
                        selectedCover === cover
                          ? "border-white scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={cover}
                        alt={`Cover ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-12 right-0 bg-[#111] text-white text-sm px-5 py-2 rounded-md border border-gray-600 shadow-lg">
                To change the cover, just click on the image
              </div>
            </div>
          </div>
        </section>
            <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-16">
      {/* LEFT CONTENT */}
      <div className="max-w-lg md:text-left text-center mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
          Combine & <br /> Create
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Mix different topics into a single e-book, just for you.
        </p>
      </div>

      {/* RIGHT CONTENT — 3D BOOK MODELS */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-16">
        <BookModel cover="/covers/book1.png" spine="/spines/spine1.png" />
        <BookModel cover="/covers/book2.png" spine="/spines/spine2.png" />
        <BookModel cover="/covers/book3.png" spine="/spines/spine3.png" />
      </div>
    </section>

        <img src="/section.png" alt="" className="ml-20" />
        <section
          className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center px-10 md:px-24 text-white"
          style={{
            backgroundImage: "url('/library.avif')", // place your uploaded image here
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            <p className="text-gray-200 text-lg md:text-xl mb-4 font-light">
              Unlock the Genius in You —{" "}
              <span className="italic">Anywhere in the world</span>
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Create an e-book <br />
              <span className="text-[#f5e8c7] font-semibold">
                that is actually yours
              </span>
            </h1>

            <button className="mt-10 flex items-center gap-2 bg-[#ff5e3a] hover:bg-[#ff744e] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
              Get Started
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Optional “Made in Framer” badge */}
        </section>
      </div>
    </div>
  );
};

export default Library;
