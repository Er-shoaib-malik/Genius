import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  BookOpenText,
  Languages,
  ArrowRight,
  Download,
} from "lucide-react";
import HomePage from "./LandingText";
import { useState } from "react";

const PdfTranslation = () => {
  const covers = [
    "/covers/book1.png",
    "/covers/book2.png",
    "/covers/book3.png",
    "/covers/book4.png",
  ];

  // Animation variants
  const fromTop = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const fromBottom = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Scroll-based background color interpolation
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1], // adjust transition position
    ["#000000", "#111111", "#FFFFFF", "#FFFFFF"] // from black → white
  );
  const [file, setFile] = useState(null);
  const [hover, setHover] = useState(false);
  const [language, setLanguage] = useState("");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const handleSubmit1 = () => {
    if (!file) return alert("Please upload a PDF file first!");
    if (!language) return alert("Please select a target language!");
    alert(`Translating ${file.name} to ${language}...`);
  };

  return (
    <motion.div
      style={{ backgroundColor: bgColor }}
      className="transition-colors duration-700 px-[55px] flex flex-col gap-[90px] poppins-regular"
    >
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-[600px] text-white px-6 text-center">
        <HomePage />
        <p className="text-[19px] font-medium text-gray-300 mt-12 max-w-[520px]">
          Instantly translate or turn your PDFs into e-books — making your
          documents easier to read, share, and use anywhere.
        </p>
      </section>

      {/* CV SECTION */}
      <section className="flex justify-center items-center px-10  relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[1450px] h-[590px] p-5 rounded-[40px] bg-gradient-to-b from-[#2E5BFF] to-[#000000] flex items-center justify-between relative overflow-hidden"
        >
          {/* Left Card */}
          <div className="w-[470px] h-[560px] bg-gradient-to-b from-[#2E5BFF] to-[#d4fc8a] rounded-[25px] shadow-lg flex flex-col justify-between p-8 text-black">
            <div>
              <Languages className="w-[134px] h-[134px] text-white opacity-60 relative -right-68" />
            </div>
            <div>
              <p className="text-xl font-medium mb-2">In few Steps</p>
              <h2 className="text-[30px] font-semibold leading-snug">
                Translate any PDF — <br /> without breaking the layout.
              </h2>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col w-[800px] justify-center text-left text-[#2E5BFF] mr-5">
            <h1 className="text-[63px] font-semibold leading-tight w-[800px]">
              Your CV, your reports or <br /> any other pdf document <br /> –
              all instantly translated
            </h1>

            {/* Buttons */}
            <div className="flex flex-col gap-10 mt-6">
              <button className="bg-black text-white h-[55px] w-[265px] pl-5 flex items-center rounded-lg text-[20px] font-medium border border-[#232323] hover:bg-neutral-900 transition">
                Hover over the CV
              </button>
              <div className="flex w-full mt-2">
                <button className="relative w-45 h-14 bg-white border-4 border-white text-black font-semibold rounded-[21px] flex items-center justify-center transition group overflow-hidden">
                  <div className="absolute inset-0 bg-[#2E5BFF] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"></div>
                  <div className="absolute left-0 top-0 bottom-0 flex items-center pl-0.5 z-10">
                    <div className="bg-[#2E5BFF] rounded-full p-4 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="relative text-[18px] z-10 group-hover:text-white transition-colors duration-300 ml-12">
                    Start Now
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* CV Card (Animated) */}
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: 200 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-[-20px] right-[30px] z-50 cursor-pointer"
          >
            <div className="bg-white w-[450px] h-[400px] rounded-xl shadow-2xl overflow-hidden p-8 ">
              {/* Folded corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-gray-200 border-l-[80px] border-l-transparent"></div>

              {/* Header */}
              <div className="mb-3">
                <h2 className="text-3xl font-bold text-gray-900">
                  Jacob Smith
                </h2>
                <p className="text-[16px] text-gray-600 font-medium">
                  Marketing Specialist
                </p>
              </div>

              {/* Profile Image + About */}
              <div className="flex gap-6 mt-4">
                <div className="w-[180px] h-[180px] overflow-hidden rounded-md">
                  <img
                    src="/cv.avif"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold text-gray-800 mb-1">
                    About Me
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dedicated marketing professional with over 5 years of
                    experience driving brand growth through data-driven
                    campaigns. Passionate about content, social media, and
                    visual storytelling.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-6">
                <h3 className="text-[17px] font-semibold text-gray-800 mb-1">
                  Professional Experience
                </h3>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="font-semibold text-gray-800">
                    Senior Marketing Manager — BrightEdge
                  </p>
                  <p className="italic text-gray-500 text-xs mb-1">
                    Jan 2020 – Present
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Led multi-channel marketing campaigns increasing revenue
                      by 30%.
                    </li>
                    <li>
                      Managed a team of 6 marketing specialists and designers.
                    </li>
                    <li>
                      Developed strategies that enhanced digital reach by 200%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHITE SECTION */}
      <section className="flex justify-between items-center w-full py-[100px] bg-transparent">
        <div className="flex flex-col justify-center">
          <h1 className="text-[40px] w-[530px] font-semibold text-black leading-tight">
            Translate any PDF in 3 <br /> simple steps
          </h1>
          <p className="text-[18px] w-[650px] font-medium text-gray-700 mt-6 leading-relaxed max-w-[520px]">
            Upload any PDF and translate it instantly — no copy-pasting, no
            formatting hassles. Just select your file, set your target language,
            and receive a polished PDF ready to use.
          </p>
        </div>

        <img
          src="translatepage.png"
          className="w-[591px] h-[756px] mr-10 p-6  "
        />
      </section>
      <div className="flex justify-center items-center gap-40 py-32 bg-transparent  ">
        {/* Upload Box */}
        <motion.div
          className="w-[420px] h-[300px] border-2 border-[#2E5BFF] rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
        >
          {/* Hidden file input */}
          <input
            id="fileInput"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileUpload}
          />

          {/* Decorative wings */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: hover ? 0.5 : 0,
              scaleX: hover ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute left-0 top-0 h-full w-[50%] bg-gray-300 opacity-50 origin-left rounded-l-2xl"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: hover ? 0.5 : 0,
              scaleX: hover ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute right-0 top-0 h-full w-[50%] bg-transparent opacity-50 origin-right rounded-r-2xl "
          ></motion.div>

          {/* PDF Icon & Label */}
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <div className="bg-[#F8F9FB] border border-gray-200 shadow-sm w-[110px] h-[140px] rounded-sm flex items-center justify-center text-gray-800 font-semibold">
                {hover ? "Add your file" : "PDF"}
              </div>
              <span className="absolute top-[-10px] right-[-15px] bg-red-500 text-white text-[10px] px-2 py-[1px] rounded">
                Max 100 MB
              </span>
            </div>

            <div className="mt-3">
              <Download className="w-[32px] h-[32px] text-[#2E5BFF]" />
            </div>

            <p className="mt-4 text-[18px] font-medium">
              <span className="text-[#2E5BFF] font-medium cursor-pointer">
                Click to upload
              </span>{" "}
              or drag & drop your PDF
            </p>
            <p className="text-gray-500 text-[18px] mt-1">
              Supported Format: PDF (100MB){" "}
            </p>
          </div>
        </motion.div>

        {/* Language Selection Box */}
        <div className="w-[400px] h-[300px] border-2 border-[#2E5BFF] rounded-2xl flex flex-col justify-center px-10 text-gray-500">
          <label className="text-sm font-medium mb-2">Language</label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-gray-100 border border-gray-200 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]"
          >
            <option value="">Select Language…</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Start Translation Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            className="relative w-65 h-13 bg-gray-100 border-4 border-white text-black font-medium rounded-[18px] flex items-center justify-center transition group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#F9452C] h-9 mt-1 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"></div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center pl-0.5 z-10">
              <div className="bg-[#F9452C] rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="relative text-sm z-10 group-hover:text-white transition-colors duration-300">
              Start Translation
            </span>
          </button>
        </div>
      </div>

      {/* BLUE SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full h-[900px] flex flex-col items-center justify-between px-2 bg-gradient-to-b from-[#2E5BFF] to-[#000814] rounded-4xl relative overflow-hidden"
      >
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-center items-center text-left pl-[71px] pt-15 text-white/15">
            <motion.h1
              variants={fromTop}
              className="text-[63px] w-[776px] font-medium leading-snug opacity-10 pl-[30px]"
            >
              Upload a PDF or video link and create an e-book that’s truly
              yours.
            </motion.h1>

            <motion.div
              variants={fromBottom}
              className="flex items-center gap-25 mt-12"
            >
              {covers.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`book-${i}`}
                  variants={fromBottom}
                  className={`w-30 h-44 object-cover shadow-lg transform transition-transform duration-500 hover:rotate-30 ${
                    i % 2 === 0 ? "-rotate-6" : "rotate-6"
                  }`}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fromTop}
            className="w-[500px] h-[590px] mr-[10px] mt-2 bg-gradient-to-b from-[#2E5BFF] to-white rounded-2xl shadow-lg flex flex-col justify-between p-8 text-black relative"
          >
            <BookOpenText
              size={173}
              className="text-white/50 relative -right-50"
            />
            <motion.div
              variants={fromTop}
              className="flex justify-between items-end"
            >
              <div>
                <motion.p
                  variants={fromTop}
                  className="text-[18px] font-semibold text-gray-700 mb-2"
                >
                  In few Steps
                </motion.p>
                <motion.h2
                  variants={fromTop}
                  className="text-[42px] w-[320px] font-medium"
                >
                  Create your own E-book
                </motion.h2>
              </div>
              <motion.div variants={fromBottom}>
                <ArrowDown className="w-15 h-15 text-gray-400 relative -bottom-1" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          variants={fromTop}
          className="flex justify-center mb-15 text-[110px] text-white/5 w-full mt-30 font-semibold opacity-10"
        >
          Coming Soon...
        </motion.p>
      </motion.section>
    </motion.div>
  );
};

export default PdfTranslation;
