import React from "react";
import DashNavbar from "../components/DashNavbar";
import ProgressChartLockedNoInputs from "../components/ProgressChartLockedNoInputs";
import StudentProfileCard from "../components/StudentProfileCard"
import XPProgressCompact from "../components/XPProgressCompact";
import TodoList from "../components/TodoList";
import { FlaskConical, CircleQuestionMarkIcon } from "lucide-react";
import { motion } from "framer-motion";

const newsItem = [
  {
    img: "11.webp",
    category: "Finance",
    date: "Oct 22, 2025",
    title: "UniCredit CEO: ‘Not given up’ on Commerzbank takeover",
  },
  {
    img: "12.webp",
    category: "Finance",
    date: "Oct 22, 2025",
    title: "Why Asia is leading the way in stablecoin adoption",
  },
  {
    img: "13.webp",
    category: "Finance",
    date: "Oct 22, 2025",
    title: "Gold’s frenzied rally ends with largest sell-off in over a decade",
  },
  {
    img: "14.webp",
    category: "Finance",
    date: "Oct 22, 2025",
    title:
      "Is AI really making electricity bills higher? Here’s what the experts say",
  },
];

const CourseImages = [
  { img: "4.avif", label: "Design Principles" },
  { img: "6.avif", label: "Creative Thinking" },
  { img: "5.avif", label: "AI for Beginners" },
];

const DashBoard = () => {
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    let start = 10;
    const end = 38;
    const duration = 1000; // 1 second
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <DashNavbar />

      <div className="bg-gray-100">
        <div className="rounded-[70px] px-10 py-8 bg-white flex flex-col gap-[39px]">
          {/* ─── News Section ─────────────────────────────────────────────── */}
          <section className="bg-gray-100 rounded-3xl p-5 mt-8">
            <h2 className="text-3xl font-normal mb-3 text-gray-900">News</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
              {newsItem.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-full h-46 rounded-xl overflow-hidden mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs font-medium text-black mb-1">
                    {item.category} <span className="mx-2">|</span> {item.date}
                  </div>
                  <h3 className="text-[20px] font-medium leading-snug text-gray-900 hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Profile / XP / Todo Section ──────────────────────────────── */}
          <section className="h-[494px] flex justify-between">
            <StudentProfileCard />

            <div className="h-[494px] w-[463px] flex flex-col bg-gray-100 rounded-3xl p-5 gap-[44px]">
              <div className="font-medium flex flex-col gap-3">
                Performance :
                <ProgressChartLockedNoInputs />
              </div>
              <XPProgressCompact />
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-gray-100 rounded-3xl p-2 text-xl flex flex-col">
                <span className="font-medium">Points:</span>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-3xl font-semibold">{count}</span>
                    <FlaskConical size={22} className="text-blue-600" />
                  </div>

                  {/* ─── Tooltip on Hover ─────────────────────────────── */}
                  <motion.div
                    className="relative inline-flex items-center"
                    initial="initial"
                    whileHover="hover"
                  >
                    <CircleQuestionMarkIcon
                      size={18}
                      className="text-gray-500 cursor-pointer"
                    />

                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: -10, visibility: "hidden" },
                        hover: {
                          opacity: 1,
                          y: 0,
                          visibility: "visible",
                          transition: { duration: 0.3, ease: "easeOut" },
                        },
                      }}
                      className="absolute right-0 top-6 bg-white border border-gray-200 shadow-md rounded-md p-3 text-xs text-gray-700 w-60 z-10"
                    >
                      <strong>Points:</strong> Points show your learning
                      progress and unlock rewards.
                      <br />
                      <br />
                      <strong>How to earn:</strong>
                      <br />
                      +20 XP → Finish a lesson
                      <br />
                      +15 XP → Pass a quiz
                      <br />
                      +5 XP → Study for 30 mins
                      <br />
                      +2 XP → Daily check-in
                      <br />
                      <br />
                      Collect Points to unlock discounts, free ebooks, and more.
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <TodoList />
            </div>
          </section>

          {/* ─── Course Section ──────────────────────────────────────────── */}
          <section className="h-[406px] w-[812px]">
            <span className="block mb-3 font-medium">
              Courses we think you might enjoy:
            </span>

            <div className="flex gap-5">
              {CourseImages.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative h-[159px] w-[264px] rounded-2xl overflow-hidden cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Image */}
                  <motion.img
                    src={item.img}
                    alt={item.label}
                    className="h-full w-full object-cover"
                    variants={{
                      rest: { opacity: 1, scale: 1 },
                      hover: {
                        opacity: 0,
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      },
                    }}
                  />

                  {/* Label on Hover */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0, scale: 0.95 },
                      hover: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="absolute inset-0 bg-linear-to-b from-black to-violet-900 border-none text-white flex items-center justify-center font-semibold text-lg rounded-2xl"
                  >
                    {item.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <span className="block mt-6 font-medium">
              The courses you finished
            </span>
            <img
              src="7.avif"
              alt=""
              className="h-[159px] w-[264px] rounded-2xl object-cover overflow-hidden"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
