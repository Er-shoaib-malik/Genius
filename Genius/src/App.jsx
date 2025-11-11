import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/ToDoContext";
import DashNavbar from "./components/DashNavbar";
import DashBoard from "./pages/DashBoard";
import Calendar from "./pages/Calender";
import MyCourses from "./pages/MyCourses";
import Pdfsbooks from "./pages/Pdfsbooks";
import AwardsCertificates from "./pages/AwardsCertificates";

function App() {
  return (
    <div className="poppins-light">
      <TodoProvider>
        <BrowserRouter>
          <DashNavbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/courses" element={<MyCourses />} />
            <Route path="/pdfsbooks" element={<Pdfsbooks />} />
            <Route path="/awards" element={<AwardsCertificates />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>
  );
}

export default App;
