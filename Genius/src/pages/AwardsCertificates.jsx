import React from "react";
import DashNavbar from "../components/DashNavbar";
import { Trophy } from "lucide-react";

export default function AwardsCertificates() {
  const achievements = [
    {
      img: "achievement1.avif",
      title: "First Course Completed",
      desc: "Description",
    },
    {
      img: "achievement2.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992703.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992699.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992705.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992702.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992704.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992706.png",
      title: "Name of achievement",
      desc: "",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/992/992707.png",
      title: "Name of achievement",
      desc: "",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen poppins-regular">
      <div className="rounded-[70px] px-[55px] pt-[34px] bg-black flex flex-col items-center min-h-screen gap-5">
        <section className="w-[1500px] mt-[35px] py-10  text-white border border-gray-500  flex flex-col md:flex-row items-center justify-center gap-16 px-8 rounded-2xl">
          {/* Left Section */}
          <div className="md:w-1/2 h-[581px] ml-3 flex flex-col justify-center ">
            {/* SVG Trophy Icon */}
            <Trophy className="w-20 h-20 text-[#C8F560] mb-3" />

            <h2 className="text-[40px] w-[391px] font-bold leading-snug">
              Awards & Certificates
            </h2>
            <p className="text-gray-300 w-[391px] text-lg max-w-md">
              Celebrate your progress with certificates and rewards earned
              through learning.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 h-[581px] flex flex-col justify-center items-center">
            <img src="certificate.png" alt="" />
          </div>
        </section>
        <section className="text-[40px] text-white flex justify-center items-center">
          Achievements
        </section>
        <section className="w-full bg-black text-white py-10 px-10 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl text-center">
            {achievements.slice(0, 9).map((a, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-32 h-32 object-contain bg-white rounded-md"
                />
                <h3 className="text-xl font-semibold">{a.title}</h3>
                {a.desc && <p className="text-gray-400">{a.desc}</p>}
              </div>
            ))}
          </div>
        </section>
        <section className="text-[40px] text-white flex justify-center items-center">
          Certificates
        </section>

        <section className="flex gap-10">
          <div className="min-w-[588px] min-h-[383px] rounded-2xl bg-white text-[30px] font-medium text-black flex flex-col justify-center items-center">
            <span className="flex justify-center">Certificate</span>
            <span className="w-[432px] flex justify-center items-center">
              Cryptocurrency & Blockchain Basics
            </span>
          </div>
          <div className="min-w-[588px] min-h-[383px] rounded-2xl bg-white text-[30px] font-medium text-black flex flex-col justify-center items-center">
            <span className="flex justify-center">Certificate</span>
            <span className="w-[432px] flex justify-center items-center">
              Cryptocurrency & Blockchain Basics
            </span>
            <span className="w-[432px] flex justify-center items-center">
              Complete Module 3 to unlock this certificate.{" "}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
