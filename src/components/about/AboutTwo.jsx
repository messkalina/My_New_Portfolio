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
                  <h3>Designing for impact</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  {/* <p> <strong>I focus on turning complex topics and user journeys into clear, engaging user experience.</strong> </p> */}
                  <p>
                    I’m a hands-on product and motion designer. My background in
                    animation and video production taught me how to recognize
                    what’s actually working and the most effective way to build
                    it.
                  </p>
                  <p>
                    I bring experience from fast-paced startups, where I’ve
                    worked across the entire design process: from research and
                    ideation to testing and validation. I also have a solid
                    working knowledge of frontend development (HTML, CSS, React)
                    and "vibe coding" skills. Being able to build what I design
                    makes collaborating with developers straightforward and
                    ensures that nothing gets lost in translation.
                  </p>

                  <p>
                    I see my job as turning complex topics and user journeys
                    into thoughtful, engaging experiences. My approach combines
                    a genuine curiosity about human behavior with the technical
                    fluency to actually build what I imagine.
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
