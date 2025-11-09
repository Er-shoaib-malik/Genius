import React from "react";
import HomePage from "./pages/HomePage";
import SignUpButton from "./assets/SwipeLettersButton";
import CMSCarousel from "./pages/CMSCarousel";
import PaperTransition from "./assets/PaperTransition";
import SignUpPage from "./pages/SignUp";
import CourseSection from "./pages/CourseSection";
import Navbar from "./pages/Navbar";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import ContactForCompany from "./pages/ContactForCompany";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import DashNavbar from "./components/DashNavbar";
import Calender from "./pages/Calender";
import MyCourses from "./pages/MyCourses";
import AwardsCertificates from "./pages/AwardsCertificates";
import ScrollImageSequence from "./components/ScrollImageSequence";
import Library from "./pages/Library";
import BookScrollSection from "./components/BookScrollSection";
import Pdfsbooks from "./pages/Pdfsbooks";
function App() {
  return (
    <div className="poppins-light">
      {/* <Navbar /> */}
      {/* <HomePage/> */}

      {/* <SignUpPage/> */}
      {/* <CourseSection/> */}
      {/* <ContactUs/> */}
      {/* <ContactForCompany/> */}
      {/* <Login/> */}

      {/* <DashBoard/> */}
      {/* <Calender/>
      <MyCourses/>
      <AwardsCertificates/> */}
      {/* <ScrollImageSequence/> */}
      {/* <Library/> */}
      {/* <BookScrollSection/> */}

      <Pdfsbooks/>

      {/* <HomePage/>
    <SignUpButton/>
    <div style={{ width: 200, height: 300, margin: "50px auto" }}>
      <PaperTransition
        image1={{ src: "https://picsum.photos/200/300?grayscale" }}
        image2={{ src: "https://picsum.photos/200/300" }}
        springDuration={1.5}
        bounce={0.3}
        enableClickSpin={true}
      />
    </div> */}
    </div>
  );
}

export default App;
