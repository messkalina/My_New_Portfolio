import React from "react";
import Social from "../Social";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/about/profile_pic_kal.png" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/about/profile_pic_kal.png)",
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Creative Ui & Ux Designer based in New York, USA</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I’m a UX/UI and Motion Designer with a background in visual
                    storytelling and product design. I create intuitive and
                    engaging user experiences for web and mobile applications,
                    combining strong visual design with user research and
                    accessibility principles.</p>
                    <p>I bring experience from fast-paced
                    startups, where I’ve contributed across the entire design
                    process — from research and wireframing to high-fidelity
                    prototyping and motion-enhanced UI.</p>
                    <br />
                    <p>My background in motion
                    design helps me shape seamless, expressive interactions. I
                    also have a solid understanding of frontend technologies
                    like HTML, CSS, JavaScript, and React, which I use to better
                    collaborate with developers and design with implementation
                    in mind.
                  </p>

                  <div
                    className="text"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <Social />
                  </div>
                </div>

                {/* <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/resume.jpg" download>
                    Download CV
                  </a>
                </div> */}
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* <ContactForm /> */}
    </>
  );
};

export default AboutTwo;
