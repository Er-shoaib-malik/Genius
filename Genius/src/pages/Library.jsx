import React from "react";
import ScrollImageSequence from "../components/ScrollImageSequence";

const Library = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Scroll-driven canvas sequence */}
      <ScrollImageSequence className="h-[500vh] " />

      {/* Next section — your “Library” content */}

      {/* Add as many more sections as you like below */}

    <div className="relative min-h-screen bg-black">
        <section className=" relative flex flex-col items-center justify-center h-[206px] bg-black text-white text-center px-6 pt-[70px]">
        <h1 className="text-[40px] md:text-5xl font-semibold mb-4">
          Your Library, <span className="text-white/90">Your way</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-2">
          Read ready-made topics or create your own personalised study book.
        </p>
        <p className=" mb-8 text-lg">
          Learn how it works →{" "}
          <span className="">
            scrolls to next section
          </span>
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
    </div>
    </div>
  );
};

export default Library;
