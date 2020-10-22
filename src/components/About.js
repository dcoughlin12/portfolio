import React from "react";

export default function About(props) {
  const { resumeData } = props;

  return (
    <section className="about-section text-center" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">A Little Bit About Me</h2>
            <p className="text-white-50">{resumeData.aboutme}</p>
          </div>
        </div>
        <img className="img-fluid" src="assets/img/ipad.png" alt="" />
      </div>
    </section>
  );
}
