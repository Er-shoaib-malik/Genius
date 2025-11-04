import React, { useState } from "react";
import { Search, Clock, FileText } from "lucide-react";
import FilterSection from "../components/FilterSection";
import Tooltip from "../components/ToolTip";

export default function CourseSection() {
  const [filters, setFilters] = useState({
    university: "",
    category: "",
    difficulty: "",
    certification: "",
  });

  const courses = [
    {
      id: 1,
      image: "1.avif",
      title: "AI in Business Applications",
      school: "London School of Economics and Political Science",
      instructor: "Dr. Elaine Park",
      instructorImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      tag: "Artificial Intelligence",
      level: "Intermediate",
      description:
        "Discover how AI is transforming industries worldwide. Learn to spot opportunities, implement tools, and create real business impact with AI.",
      duration: "7h",
      lessons: 9,
    },
    {
      id: 2,
      image: "2.avif",
      title: "Cryptocurrency & Blockchain Basics",
      school: "Saddle River Day School",
      instructor: "Daniel Hayes",
      instructorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      tag: "Finance",
      level: "Beginner",
      description:
        "Learn the basics of crypto and blockchain. Discover how digital money works and make smarter moves today.",
      duration: "7h",
      lessons: 8,
    },
    {
      id: 3,
      image: "3.avif",
      title: "Ethics of Artificial Intelligence",
      school: "University of Oxford ",
      instructor: "Dr. Elaine Park",
      instructorImage:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      tag: "Artificial Intelligence",
      level: "Beginner",
      description:
        "Discover how AI is transforming industries worldwide. Learn to spot opportunities, implement tools, and create real business impact with AI.",
      duration: "4h",
      lessons: 5,
    },
    {
      id: 4,
      image: "4.avif",
      title: "Intro to Machine Learning",
      school: "University of Cambridge",
      instructor: "Sophia Patel",
      instructorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      tag: "Artificial Intelligence",
      level: "Beginner",
      description:
        "Unlock the power of data by learning the fundamentals of machine learning. Build your first models, understand key algorithms, and see how AI is shaping the world around us!",
      duration: "4h 20min",
      lessons: 5,
    },
    {
      id: 5,
      image: "5.avif",
      title: "Investing for Beginners",
      school: "London School of Economics and Political Science",
      instructor: "Sofia Marin",
      instructorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      tag: "Finance",
      level: "Beginner",
      description:
        "Investing doesn’t have to be complicated. Learn the basics of stocks, bonds, and funds to start building wealth and shaping your financial future.",
      duration: "8h",
      lessons: 8,
    },
    {
      id: 6,
      image: "6.avif",
      title: "Leadership in Action",
      school: "London School of Economics and Political Science",
      instructor: "Prof. Ralph Keller",
      instructorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      tag: "Business & Management",
      level: "Advanced",
      description:
        "Develop the confidence and skills to lead teams effectively. Learn leadership styles, communication techniques, and how to handle challenges with clarity and impact.",
      duration: "8h",
      lessons: 10,
    },
    {
      id: 7,
      image: "7.avif",
      title: "Neural Networks Demystified",
      school: "Massachusetts Institute of Technology",
      instructor: "Alexander Hayes",
      instructorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      tag: "Artificial Intelligence",
      level: "Intermediate",
      description:
        "Explore neural networks and discover how machines learn, from perceptrons to deep learning as you build models and understand the backbone of modern AI.",
      duration: "10h",
      lessons: 12,
    },
    {
      id: 8,
      image: "8.avif",
      title: "Personal Finance 101",
      school: "Stanford University",
      instructor: "Sofia Marin",
      instructorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      tag: "Finance",
      level: "Beginner",
      description:
        "Take control of your money with confidence. Learn the essentials of budgeting, saving, and managing personal finances to build a secure future.",
      duration: "5h",
      lessons: 6,
    },
    {
      id: 9,
      image: "9.avif",
      title: "Project Management Essentials",
      school: "Columbia University",
      instructor: "James Rodriguez",
      instructorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      tag: "Business & Management",
      level: "Beginner",
      description:
        "Lead projects successfully. Learn Agile, Scrum, project planning, risk management, and team collaboration strategies.",
      duration: "6h",
      lessons: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter flex justify-center flex-col gap-[100px] pl-20 pr-[100px]">
      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center gap-2.5">
        <div className="text-[15px] text-white ">Home → Courses</div>
        <h1 className="text-[40px] font-semibold mb-5">All Courses</h1>
        <p className="text-white max-w-[766px] text-[15px] leading-[1.1]">
          Explore programs designed for students and young professionals
          worldwide. Each course blends academic excellence with practical
          skills, offering US-accredited certifications you can use to unlock
          new opportunities anywhere in the world.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex gap-15 px-8 pb-16 ">
        {/* Sidebar */}
        <div className="w-[375px] flex flex-col gap-[15px] sticky top-8 self-start">
          <h2 className="text-xl font-light mb-4">Filters</h2>

          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses"
              className="w-[383px] h-[39px] text-sm bg-white text-gray-900 rounded-xl pl-12 pr-4 py-4 "
            />
          </div>

          <FilterSection
            title="University"
            options={["Harvard", "Columbia", "LSE", "Stanford"]}
          />

          <FilterSection
            title="Course Categories"
            options={["Finance", "AI", "Management", "Design"]}
          />

          <FilterSection
            title="Difficulty"
            options={["Beginner", "Intermediate", "Advanced"]}
          />

          <FilterSection
            title="Certification"
            options={["With Certificate", "Without Certificate"]}
          />
        </div>

        {/* Courses Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[45px]">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-[20px] bg-[#0e0e0e84] border border-[#eeeeee27] overflow-hidden w-[404px] px-11 py-4"
              >
                {/* Image */}
                <div className="relative h-50 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Tags */}
                <div className="relative top-4 flex justify-between">
                  <Tooltip text={course.tag}>
                    <span className="bg-[#bbbbbb1c] backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px]">
                      {course.tag}
                    </span>
                  </Tooltip>
                  <Tooltip text={course.level}>
                    <span className="bg-[#bbbbbb1c] backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px]">
                      {course.level}
                    </span>
                  </Tooltip>
                </div>

                {/* Content */}
                <div className="pt-6">
                  <h3 className="text-[20px] font-bold mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] font-medium mb-4">
                    {course.school}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-7.5 h-7.5 rounded-full object-cover"
                    />
                    <span className="text-white text-[15px] font-medium">
                      {course.instructor}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                    <Tooltip text="Course Duration">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </Tooltip>

                    <Tooltip text="Total Lessons">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{course.lessons} Lesson(s)</span>
                      </div>
                    </Tooltip>
                  </div>

                  {/* Button */}
                  <button className="w-full h-[38px] flex justify-center items-center border border-white text-white font-medium rounded-xl py-3 hover:border-blue-500 transition-all duration-300">
                    Find Out More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
