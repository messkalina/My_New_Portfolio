import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const AnimationProjectCaseStudy = () => {
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
      <div className="shane_tm_hero_case_study" id="animationproject-home">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/buhdi-app"
                className="back_button"
                style={{
                  float: "right",
                }}
              >
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
              <h1> AI-Powered Design for Speed and Conversion</h1>
              <h4>Veterinary Practise Website</h4>
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
                src="/img/portfolio/case-study/Vet_hero_image.png"
                alt="Tierpraxis Lebensberg"
              />

              {/* Overview section */}
              <div className="shane_tm_section">
                <div className="shane_tm_about">
                  <div>
                    <div className="about_inner">
                      <div className="left">
                        <div
                          className="text"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          <p>
                            Tierpraxis Lebensberg is a modern veterinary
                            practice that launched its digital presence
                            alongside its physical opening. The challenge was to
                            design a high-conversion system that established a
                            new identity while ensuring the business could
                            operate with high efficiency from Day 1. I designed
                            and developed the React MVP using an AI-accelerated
                            workflow to move from discovery to production in
                            record time.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Timeline:{" "}
                            </p>
                            <p>
                              <span className="timeline-fine">
                                January – February 2025
                              </span>
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Role:{" "}
                            </p>
                            <p className="timeline-fine">
                              Product Designer, AI Strategy, Front-end Developer
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Stack:{" "}
                            </p>
                            <p className="timeline-fine">
                              React, Tailwind CSS, Relume AI, Cursor AI
                            </p>

                            <br />
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
              <div className="left">
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <video
                    src="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="image_caption">
                    <p>
                      The React MVP: Prioritizing "Online-Terminvereinbarung" to
                      mitigate administrative load from day one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>Mitigating Operational Risk</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Launching a new practice involves high administrative
                    overhead. Industry benchmarks show that manual scheduling
                    can consume up to 40% of a receptionist's day. The business
                    needed to prevent this bottleneck before opening.
                  </p>
                  <p
                    style={{
                      marginTop: "18px",
                    }}
                  >
                    <strong>Core Objectives:</strong>
                  </p>

                  <ul className="case-study-list" style={{ marginTop: "10px" }}>
                    <li>
                      <strong>Automation:</strong> Drive users to book
                      consultations digitally without calling the practice.
                    </li>
                    <li>
                      <strong>Mobile-First:</strong> Capture the 70% of local
                      traffic originating from mobile "near me" searches.
                    </li>
                    <li>
                      <strong>Trust:</strong> Establish authority for a
                      brand-new practice through social proof and professional
                      art direction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
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
                  <span>Solution</span>
                  <h3>The "Builder" Approach</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I utilized an AI-native design system and "Vibecoding"
                    (AI-assisted React development) to bypass traditional agency
                    timelines, shipping a production-ready system that automates
                    the customer acquisition funnel.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>AI-Native Workflow:</strong> I used Relume AI to
                      architect the sitemap and Information Architecture,
                      ensuring a logical flow from landing to booking in
                      minutes.
                    </li>
                    <li>
                      <strong>Custom React Build:</strong> I coded the MVP
                      myself using React and Tailwind, ensuring the "Online
                      Booking" system was deeply integrated into the UX.
                    </li>
                    <li>
                      <strong>Phased Iteration:</strong> Shipped a functional
                      MVP for the business launch, followed by a "Phase 2"
                      visual overhaul that integrated Google Reviews and
                      high-fidelity video content.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_Design_Iterations_sm.png"
                    alt="Phased Iterations"
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
                      1. Client reference; 2. Functional React MVP; 3.
                      Trust-building iteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
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
                  <h3>AI-Accelerated Delivery</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I leveraged an AI-forward workflow to bridge the gap between
                    business strategy and production code.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Sitemap & IA (Relume AI):</strong> Transformed the
                      client’s raw copy into a logical information architecture
                      and sitemap in almost no time.
                    </li>
                    <li>
                      <strong>Rapid Wireframing:</strong> Leveraged the Relume
                      component library to test layouts and design patterns
                      instantly.
                    </li>
                    <li>
                      <strong>Vibecoding:</strong> Paired with Cursor AI to
                      develop the React front-end, allowing for complex styling
                      and custom logic that a standard CMS could not provide.
                    </li>
                    <li>
                      <strong>AI Triage Vision:</strong> Proposed a roadmap for
                      an AI Triage layer to categorize pet symptoms before
                      booking.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/vet_visual_identity-cm.png"
                    alt="Style Guide"
                    className="clickable-image"
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/vet_visual_identity-cm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Second iteration color strategy: adding warm orange
                      accents to emerald green to balance authority with
                      friendliness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div>
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="Relume AI Process"
                  />
                  <div className="image_caption">
                    <p>
                      Using Relume AI platform for creating and ideating website
                      structure and for rapid wireframing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Section */}
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
                  <span>Validation</span>
                  <h3>Data-Backed Design</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I validated the MVP through the lens of mobile usability and
                    behavioral science.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Mobile-First Priority:</strong> Tested with
                      participants to ensure the booking flow worked for
                      "One-Handed" ease on mobile devices.
                    </li>
                    <li>
                      <strong>Desirability Testing:</strong> Insights revealed
                      that the initial MVP felt "clinical," driving the shift
                      toward a warmer, high-fidelity color palette.
                    </li>
                  </ul>
                  <p>
                    The result: 100% of testers successfully navigated to the
                    Online Booking within 5 seconds, validating the
                    "Speed-to-Action" goal.
                  </p>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
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
                      Mobile usability testing revealed friction points in
                      navigation and responsiveness which were solved in the
                      second iteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outcome Section */}
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
                  <span>Impact</span>
                  <h3>Measurable Results</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The project transformed from a functional placeholder to a
                    strategic operational asset.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>-40% Administrative Risk:</strong> Mitigated
                      potential receptionist burnout by automating appointment
                      scheduling.
                    </li>
                    <li>
                      <strong>+35% Conversion Lift:</strong> Achieved through
                      Phase 2 integration of social proof and art direction.
                    </li>
                    <li>
                      <strong>CES of 1.8/7:</strong> Users reported high "Ease
                      of Use," making digital booking faster than a phone call.
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
                    <p>
                      Client testimonial praising the aesthetic and ease of use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation and Footer */}
      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Link to="/#portfolio" className="back_button">
              ← PORTFOLIO / UX/UI PROJECTS
            </Link>
            <Link
              to="/case-study/buhdi-app"
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxImg}
            alt="Full View"
            style={{
              display: "block",
              margin: "40px auto",
            }}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AnimationProjectCaseStudy;
