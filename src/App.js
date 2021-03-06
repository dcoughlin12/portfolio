import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import resumeData from "./resumeData";

export default function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Projects resumeData={resumeData} />
      <Skills />
      <Contact resumeData={resumeData} />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Third party plugin JS--> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="./js/scripts.js"></script>
    </div>
  );
}
