import React, { Component } from "react";

export default function About(props) {
  const { resumeData } = props;

  return (
    <section class="about-section text-center" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">A Little Bit About Me</h2>
            <p class="text-white-50">{resumeData.aboutme}</p>
          </div>
        </div>
        <img class="img-fluid" src="assets/img/ipad.png" alt="" />
      </div>
    </section>
  );
}
