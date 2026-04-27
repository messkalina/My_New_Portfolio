import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion03 = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };
  return (
    <div className="shane_tm_all_wrap">
      <Header />

      {/* Hero section */}
      <div className="shane_tm_hero_case_study">
        <div></div>
        <div className="container">
          <div>
            <div className="navigation-wrapper">
              <Link to="/?tab=motion#portfolio" className="back_button">
                ← PORTFOLIO / ANIMATION
              </Link>
              <Link to="/case-study/motion04" className="back_button">
                NEXT PROJECT →
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {" "}
              <div className="subtitle-container">
                <h1>Boosting Retention with Video Design</h1>
              </div>
              <h4>Caspar Health</h4>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How to transform educational videos for patients into an
                    engaging and effective learning experience.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="full-image-section"
        style={{ width: "100%" }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="content">
            <div>
              <img
                src="/img/portfolio/stylesframes/wolt/Wolt_verA_16_9_ENG02_1.gif"
                alt="Wireframe"
                style={{ width: "100%" }}
              />

              {/* Overview section */}
              <div className="shane_tm_section">
                <div className="shane_tm_about">
                  <div>
                    <div className="about_inner">
                      <div className="left">
                        <div
                          className="shane_tm_title"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          {" "}
                          <span>Overview</span>
                          <p>
                            Caspar Health is a Berlin-based digital healthcare
                            company providing remote rehabilitation and
                            physiotherapy programs for patients recovering from
                            surgery or managing chronic conditions. It is a
                            medical product ("Diga") subjected to restrictive
                            regulations and requirements for such products in
                            Germany. The app offers access to educational and
                            exercise videos created by medical professionals for
                            patients.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p>
                              <strong>Timeline:</strong>
                              <br />
                              2019 - 2022
                            </p>

                            <p>
                              <strong>Role:</strong>
                              <br />
                              Sole motion graphics designer, creative video
                              producer
                            </p>

                            <p>
                              <strong>Scope:</strong>
                              <br />
                              Art direction, visual design, motion graphics
                              design, video editing, sound design
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Challenge section */}
      <div className="shane_tm_section" id="animationproject-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>Making information-heavy educational videos engaging</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    When I joined Caspar Health, the video content was
                    functional but not user-friendly: long, static, and heavily
                    animated medical lectures that caused viewers to drop off
                    early. My goal was to redesign and optimize the video
                    experience to make it more engaging, digestible, and aligned
                    with user behavior — effectively applying UX thinking to
                    content design. Users were dropping off after a few minutes
                    of video play, and internal metrics showed low completion
                    rates and high churn.
                  </p>
                  <p
                    style={{
                      marginTop: "18px",
                    }}
                  >
                    <strong>Requirements:</strong>
                  </p>

                  <div
                    className="shane_tm_button"
                    // style={{ marginTop: "20px" }}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <a
                      href="#outcome"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <span className="button-text">Jump to Impact</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="left">
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <video
                    src="/img/portfolio/case-study/Phone _mockup02.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="image_caption">
                    <p>
                      The first version of the website (MVP) focused on user
                      flow to online-booking to mitigate administrative load
                      from day one. Industry benchmarks show that manual
                      scheduling can consume up to 40% of a receptionist's day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section - Headline and Content Swapped */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_Design_Iterations_sm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_Design_Iterations_sm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      1. Website reference that client provided; 2. MVP version;
                      3. Second iteration of the design. Since user testing
                      revealed the MVP felt too "clinical" and cold I moved
                      toward a warmer, high-fidelity color palette and more
                      sophisticated typographic choices in the refinement phase.
                    </p>
                  </div>
                </div>
              </div>
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Solution</span>
                  <h3> Leveraging human factor</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I approached the project like a UX problem, focusing on
                    improving user retention and motivation by:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Video series over long content:</strong> Spliting
                      new and existing long-format videos into shorter, modular
                      segments based on the hypothesis that users prefer
                      shorter, more focused lessons and would be more likely to
                      return regularly.
                    </li>
                    <li>
                      <strong>
                        Designing for clarity and emotional impact:
                      </strong>{" "}
                      Positive emotional response to the content was key to
                      improving retention and motivation. Rhythmic editing and
                      selective motion graphics made the content more engaging
                      and easier to follow. Including positive, encouraging
                      messaging and visual cues to motivate users and create a
                      more supportive learning environment.Adding humor and
                      lightness to the content was a key strategy to make it
                      more engaging and less intimidating for patients who were
                      often dealing with stressful health issues.
                    </li>
                    <li>
                      <strong>Hybrid content production model:</strong> filming
                      live speakers delivering the medical webinars, combined
                      with targeted motion graphics for key moments. This
                      reduced production time dramatically and allowed for more
                      human, relatable communication.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/stylesframes/wolt/Wolt_verA_16_9_ENG04_cm.gif"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p></p>
                  </div>
                </div>
              </div>
              {/* End right */}
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/stylesframes/wolt/Wolt_verA_16_9_ENG05cm.gif"
                    alt="Wireframe"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {/* End left */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Process</span>
                  <h3> Leveraging human factor</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <ul className="case-study-list">
                    <li>
                      <strong>Iterative Workflow:</strong> I focused on shipping
                      a functional "Minimum Viable Product" to quickly get the
                      business website live and validate it via user testing. In
                      the next itaration I focused on communicating brand values
                      of trust and warmth. The goal was to meet bussiness
                      requirements, gather insights and move to design
                      iterations that then would be easily implemented by
                      external developer.
                    </li>
                    <li>
                      <strong>Community Testing:</strong> I validated the MVP
                      via the Career Foundry and Google UX communities.
                    </li>
                    <li>
                      <strong>Custom Build:</strong> I coded the website in
                      React.js bypassing subscription-based website builders
                      such as Wix or heavy Wordpress CMS.The site was deployed
                      via Netlify, ensuring a cost-effective and
                      high-performance hosting solution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_Design_Iterations_sm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_Design_Iterations_sm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      1. Website reference that client provided; 2. MVP version;
                      3. Second iteration of the design. Since user testing
                      revealed the MVP felt too "clinical" and cold I moved
                      toward a warmer, high-fidelity color palette and more
                      sophisticated typographic choices in the refinement phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shane_tm_hero_case_study">
        <div className="container">
          <div className="content">
            <div className="shane_tm_section">
              <div
                className="case-study-intro-section"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="top">
                  <div
                    className="case-study-video"
                    style={{
                      marginTop: "56px",
                      marginBottom: "56px",
                      textAlign: "center",
                    }}
                  >
                    <iframe
                      width="800"
                      height="450"
                      src="https://www.youtube.com/embed/7i5AQkFl30I"
                      title="Social Media Video Ad"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ maxWidth: "100%" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Outcome Section */}
      <div className="shane_tm_section" id="outcome">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Impact</span>
                  <h3>From MVP to growth</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The project moved beyond a foundational MVP to become
                    high-converting digital presence.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>
                        {" "}
                        <string className="highlight">-40%</string>
                      </strong>{" "}
                      <string className="highlight_label">
                        Administrative Risk
                      </string>{" "}
                      Mitigated potential receptionist workload by automating
                      appointment scheduling.
                    </li>
                    <li>
                      <strong>
                        {" "}
                        <string className="highlight">+35%</string>
                      </strong>{" "}
                      <string className="highlight_label">
                        Customer Conversion Lift{" "}
                      </string>{" "}
                      Achieved after integrating social proof (Google Rating
                      Score and Google Reviews widgets).
                    </li>
                    <li>
                      <strong>
                        <string className="highlight">1.8/7 </string>
                      </strong>{" "}
                      <string className="highlight_label">
                        Customer Effort Score
                      </string>{" "}
                      Users reported high "Ease of Use," making digital booking
                      faster than a phone call.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Testimonial.png"
                    style={{ width: "100%" }}
                    alt="Client Testimonial"
                  />
                  <div className="image_caption">
                    {/* <p>
                      Client testimonial praising the aesthetic and ease of use.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shane_tm_section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <Link to="/#portfolio" className="back_button">
              ← PORTFOLIO / ANIMATION
            </Link>
            <Link
              to="/case-study/motion03"
              className="back_button"
              style={{
                float: "right",
              }}
            >
              NEXT PROJECT →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Motion03;
