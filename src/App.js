import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <body id="page-top">
        <Navbar />
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        {/* <!-- Projects--> */}
        <section class="projects-section bg-light" id="projects">
          <div class="container">
            {/* <!-- Featured Project Row--> */}
            <div class="row align-items-center no-gutters mb-4 mb-lg-5">
              <div class="col-xl-8 col-lg-7">
                <img
                  class="img-fluid mb-3 mb-lg-0"
                  src="assets/img/bg-masthead.jpg"
                  alt=""
                />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h4>Projects</h4>
                  <p class="text-black-50 mb-0">
                    Please look through the list of personal projects. Each is
                    linked to the Github Repository where you can view more
                    screenshots and review the code.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Project One Row--> */}
            <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="assets/img/demo-image-01.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left">
                      <h4 class="text-white">Misty</h4>
                      <p class="mb-0 text-white-50">
                        An example of where you can put an image of a project,
                        or anything else, along with a description.
                      </p>
                      <hr class="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Project Two Row--> */}
            <div class="row justify-content-center no-gutters">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="assets/img/demo-image-02.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-right">
                      <h4 class="text-white">Mountains</h4>
                      <p class="mb-0 text-white-50">
                        Another example of a project with its respective
                        description. These sections work well responsively as
                        well, try this theme on a small screen!
                      </p>
                      <hr class="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Signup--> */}
        <section class="signup-section" id="signup">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 mx-auto text-center">
                <i class="fas fa-laptop-code fa-2x mb-2 text-white"></i>
                <h2 class="text-white mb-5">Technical Skills</h2>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact--> */}
        <section class="contact-section bg-black">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Location</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      Ottawa, Ontario, Canada 🇨🇦
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-envelope text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="mailto:dlcoughlin12@gmail.com">
                        dlcoughlin12@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">+1 (343) 364-3342</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="social d-flex justify-content-center">
              <a class="mx-2" href={resumeData.socialLinks[0].url}>
                <i class="fab fa-linkedin"></i>
              </a>
              <a class="mx-2" href={resumeData.socialLinks[1].url}>
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="footer bg-black small text-center text-white-50">
          {/* <div class="container">Copyright © Your Website 2020</div> */}
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="./js/scripts.js"></script>

        <div className="App">
          <Resume resumeData={resumeData} />
          <Portfolio resumeData={resumeData} />
          {/* <Testimonials resumeData={resumeData} /> */}
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </div>
      </body>
    );
  }
}
export default App;
