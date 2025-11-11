import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashNavbar from "../components/DashNavbar";
import Pdfsbooks from "./Pdfsbooks";
import MyCourses from "./MyCourses";
import Calendar from "./Calender";

export default function StudentDashboard() {
  return (
    <BrowserRouter>
      <DashNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/courses" element={<MyCourses />} />
        <Route path="/pdfsbooks" element={<Pdfsbooks />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </BrowserRouter>
  );
}
