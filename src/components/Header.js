import React from "react";
import "./Header.scss";

export default function Header(props) {
  const { resumeData } = props;
  return (
    <React.Fragment>
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">{resumeData.name}</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              {/* I am a {resumeData.role}. {resumeData.roleDescription} */}
              Full-Stact Web Developer, thriving on innovation. I enjoy building
              creative applications that solve complex problems.
            </h2>
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name} className="eachButton">
                      <a href={item.url} target="blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
