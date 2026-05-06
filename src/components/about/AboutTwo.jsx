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
                  <h3>Building digital experience with impact</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    <strong>I focus on turning complex topics and user journeys into clear, engaging user experience.</strong> 
                    I’m a hands-on product designer who bridges the gap between high-level strategy and technical implementation. With a background in motion and video production, I’ve developed a strong visual judgment—knowing exactly what "good" looks like and how to get there efficiently.
                    
                    My approach combines strong visual judgment with genuine curiosity about human behaviour.
                  </p>
                  <p>
                    I bring experience from fast-paced startups, where I’ve
                   worked across the entire design process — from research, ideation and to testing and validation. I’m comfortable working at all levels of fidelity, from low-fi wireframes and sketches to high-fidelity prototypes and motion-enhanced UI.

                   to high-fidelity prototyping and
                    motion-enhanced UI.
                  </p>

                  <p>
                    {" "}
                    I also have a solid grasp of{" "}
                    <strong>frontend technologies</strong> such as
                    <strong> HTML, CSS, JavaScript,</strong> and{" "}
                    <strong>React</strong>. I can build my designs and collaborate
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
