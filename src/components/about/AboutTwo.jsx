import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about" style={{ backgroundColor: "#f9f9f9" }}>
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
                  <h3>Designing Digital Experiences with Impact</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I’m a UX/UI and Motion Designer with a background in visual
                    storytelling and video production. I create{" "}
                    <strong>intuitive</strong> and
                    <strong> engaging user experiences</strong> for web and
                    mobile applications, combining strong visual design with{" "}
                    <strong>user research</strong> and accessibility principles.
                  </p>
                  <p>
                    I bring experience from fast-paced startups, where I’ve
                    contributed across the entire design process — from research
                    and wireframing to high-fidelity prototyping and
                    motion-enhanced UI.
                  </p>

                  <p>
                    {" "}
                    I also have a solid grasp of{" "}
                    <strong>frontend technologies</strong> such as
                    <strong> HTML, CSS, JavaScript,</strong> and{" "}
                    <strong>React</strong>, which helps me collaborate
                    effectively with developers and design with implementation
                    in mind.
                  </p>

                  <div
                    className="text"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    {/* <Social /> */}
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
