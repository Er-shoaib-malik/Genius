import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/ToDoContext";
import DashNavbar from "./components/DashNavbar";
import DashBoard from "./pages/DashBoard";
import Calendar from "./pages/Calender";
import MyCourses from "./pages/MyCourses";
import Pdfsbooks from "./pages/Pdfsbooks";
import AwardsCertificates from "./pages/AwardsCertificates";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CourseSection from "./pages/CourseSection";
import Library from './pages/Library'

function App() {
  return (
    <div className="poppins-light">
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />

            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<CourseSection />} />
            <Route path="/library" element={<Library />} />

            <Route path="/" element={<DashBoard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/pdfsbooks" element={<Pdfsbooks />} />
            <Route path="/awards" element={<AwardsCertificates />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>
  );
}

export default App;
