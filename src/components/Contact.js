import React, { Component } from "react";
export default function Contact(props) {
  const { resumeData } = props;
  return (
    <section class="contact-section bg-black" id="contact">
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
  );
}
