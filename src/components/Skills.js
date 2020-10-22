import React from "react";

export default function Skills(props) {
  return (
    <section className="signup-section" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="fas fa-laptop-code fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Technical Skills</h2>
            <div className="text-white mb-5">
              <p>
                <strong>Languages: </strong>Javascript (ES6), Ruby, HTML5, CSS3
              </p>
              <p>
                <strong>Frameworks, Libraries and Environments: </strong>{" "}
                NodeJS, React Native, Express, EJS, ERB, JQuery, Axios, Ajax,
                Bootstrap, SASS, Ruby on Rails, WebSockets
              </p>
              <p>
                <strong>Systems and Databases: </strong> PostgreSQL, MongoDB,
                Git
              </p>
              <p>
                <strong>Testing: </strong> Jest, Mocha, Chai, Cypress,
                Storybook, RSpec, capybara
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
