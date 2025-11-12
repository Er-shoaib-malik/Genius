import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BookModel from "../components/BookModel";

const DiscoverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-center px-8 md:px-20 overflow-hidden"
    >
      {/* Left content */}
      <div className="z-10 max-w-lg md:text-left text-center md:pr-10">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
          Discover what <br /> you love
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Answer a quick quiz to find your favorite subjects — like{" "}
          <span className="font-semibold text-white">Science</span>,{" "}
          <span className="font-semibold text-white">Tech</span>, or{" "}
          <span className="font-semibold text-white">Math</span>.
        </p>
      </div>

      {/* Book model with floating labels */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={
          isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex justify-center items-center w-[300px] h-[500px] mt-12 mr-20 md:mt-0"
      >
        <BookModel cover="/covers/book6.png" spine="/spines/spine6.png" />

        {/* Floating tags */}
        <div className="absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
          Math
        </div>
        <div className="absolute top-[40%] -right-20 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
          Science
        </div>
        <div className="absolute bottom-0 -right-10 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
          AI
        </div>
        <div className="absolute bottom-8 -left-16 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
          Technology
        </div>
      </motion.div>


    </section>
  );
};

export default DiscoverSection;
