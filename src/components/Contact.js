import React from "react";

export default function Contact(props) {
  const { resumeData } = props;
  return (
    <div>
      <section className="contact-section bg-black" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Location</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    Ottawa, Ontario, Canada <span role="img">🇨🇦</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="mailto:dlcoughlin12@gmail.com">
                      dlcoughlin12@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">+1 (343) 364-3342</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href={resumeData.socialLinks[0].url}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="mx-2" href={resumeData.socialLinks[1].url}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer bg-black small text-center text-white-50"></footer>
    </div>
  );
}
