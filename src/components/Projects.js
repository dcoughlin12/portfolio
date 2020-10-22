import React from "react";

export default function Projects(props) {
  let side = true;
  const { resumeData } = props;
  return (
    <div>
      <section className="projects-section bg-light" id="projects">
        <div className="container">
          {/* <!-- Featured Project Row--> */}
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                // src="assets/img/bg-masthead.jpg"
                src="assets/img/lake_mountains.jpeg"
                alt=""
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Projects</h4>
                <p className="text-black-50 mb-0">
                  Please look through the list of personal projects. Each is
                  linked to the Github Repository where you can view more
                  screenshots and review the code.
                </p>
              </div>
            </div>
          </div>
          {resumeData.projects &&
            resumeData.projects.map((item) => {
              if (side) {
                side = false;
                return (
                  <div
                    key={item.key}
                    className="row justify-content-center no-gutters mb-5 mb-lg-0"
                  >
                    <div className="col-lg-6">
                      <img
                        className="img-fluid"
                        src="assets/img/demo-image-01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                          <div className="project-text w-100 my-auto text-center text-lg-left">
                            <h4 className="text-white">
                              <a href={item.url} target="blank">
                                {item.name}
                              </a>
                            </h4>
                            <p className="mb-0 text-white-50">
                              {item.description}
                            </p>
                            <hr className="d-none d-lg-block mb-0 ml-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (!side) {
                side = true;
                return (
                  <div
                    key={item.key}
                    className="row justify-content-center no-gutters"
                  >
                    <div className="col-lg-6">
                      <img
                        className="img-fluid"
                        src="assets/img/demo-image-02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 order-lg-first">
                      <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                          <div className="project-text w-100 my-auto text-center text-lg-right">
                            <h4 className="text-white">
                              <a href={item.url} target="blank">
                                {item.name}
                              </a>
                            </h4>
                            <p className="mb-0 text-white-50">
                              {item.description}
                            </p>
                            <hr className="d-none d-lg-block mb-0 mr-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </section>
    </div>
  );
}
