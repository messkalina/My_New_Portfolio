import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const NeptuneFeature = () => {
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
      <div className="shane_tm_hero_case_study" id="home">
        <div></div>
        <div className="container">
          <div>
            <div className="navigation-wrapper">
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link to="/case-study/motion03" className="back_button">
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
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h1>Fast-Tracking Advanced Parkinson’s Care</h1>
                </div>
              </div>
              <div>
                {" "}
                <h4>Clinical Screening Feature Design</h4>
              </div>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    Enabling Neurologists to identify advanced therapy candidates faster.
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
                src="/img/portfolio/case-study/neptune_hero.png"
                style={{ width: "100%" }}
                alt="Neptune Feature Hero Image"
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
                            Orbit Health’s Neptune software utilizes smartwatch data to personalize Parkinson’s Disease management. However, busy neurologists navigating short clinical consultations struggled to systematically spot when a patient was transitioning into the advanced stage of the disease. I designed a built-in decision-support tool using the clinical "5-2-1" framework to streamline manual data exploration into an efficient screening flow.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p>
                              <strong>Timeline: </strong>
                              <br />
                              June 2024 – September 2024
                            </p>

                            <p>
                              <strong>Role: </strong> UX/UI Designer
                               
                            </p>

                            <p>
                              <strong>Scope:</strong>
                              <br />
                              Research, UX/UI Design, data visualization, clinical workflow optimization
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

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="problem">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>The Challenge</span>
                  <h3>The Consultation Bottleneck</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Neurologists face intense time pressures during patient appointments. Sifting through months of historical motor-state timelines to see if a patient met eligibility standards for advanced clinical procedures was too labor-intensive, meaning optimal treatment adjustment windows were frequently missed.
                  </p>
                  <p>
                    To fix this, my strategy was to translate the complex clinical "5-2-1" rule (5 daily levodopa doses, 2 hours of off-time, 1 hour of troublesome dyskinesia) into an instantly scannable metric. The design benchmark was to completely minimize cognitive strain so doctors could make accurate screening determinations in a glance.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
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

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/neptune_logic.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/neptune_logic.png",
                      )
                    }
                  />

                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      The original site lacked efficient user flows for both specialists and patients. For example, the site prompted patients to download the app without explaining that a company-verified account is required to sync their data.
                    </p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* Design Process Section - Image left, Text right */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Neptune_all_screens.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Neptune_all_screens.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Doctors and patients needed to be guided through user
                      flows that remove user frictions and lead to conversion. I
                      moved links to downloading patient's app from Home paged
                      to Access page so that user is won't get frustrated not
                      being able to get access to the app without completing
                      enrollment process.
                    </p>
                  </div>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  id="solution"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>The Solution</span>
                  <h3>The 5-2-1 Screening Flow</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I introduced an automated screening pattern directly inside the digital dashboard, allowing the app to act as an active assistant during check-ins.
                  </p>
                  <p>Key feature implementations included:</p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Instant Status Triggers: </strong>
                      Color-coded system alerts that visually flag when a patient reaches the established 5-2-1 threshold parameters.
                    </li>
                    <li>
                      <strong>Progressive Data Disclosure: </strong>
                      A simplified overview layer displays high-level trends first, letting specialists hover or expand fields to explore granular smartwatch graphs only when clinically necessary.
                    </li>
                    <li>
                      <strong>Frictionless Referral Path: </strong>
                      A contextual single-click action module built into the screen layout to instantly trigger advanced therapy application protocols.
                    </li>
                    <li>
                      <strong>Implementation-Minded UI Layouts: </strong>
                      Optimized components mapped alongside strict front-end performance practices, guaranteeing fast loading times for complex metrics inside demanding healthcare screen systems.
                    </li>
                  </ul>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* Visual Design Section - Text left, Image right */}
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
                  <span>Design Benchmarks</span>
                  <h3>Defining Strategic Success</h3>
                  <ul className="case-study-list">
                    <li>
                      <strong>Primary Objective:</strong> Drastically reduce critical assessment time during visits. The interface was engineered to transform tedious historical data review into a rapid status confirmation loop.
                    </li>
                    <li>
                      <strong>Workflow Engagement:</strong> Successfully move the platform experience away from manual, secondary tool tracking into an embedded, high-value clinical companion doctors trust.
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                        <img
                    src="/img/portfolio/case-study/Neptune_Ideation.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Neptune_Ideation.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      <strong> Doctor's journey: </strong> Just like the patient
                      flow, the goal here was to make conversion as simple as
                      possible. However, healthcare professionals have different
                      priorities. While patients need to learn the eligibility
                      and enrollment process, doctors need to see medical proof
                      and understand how the insurance process works.
                    </p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
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
                  <span>Outcomes & Strategic Value</span>
                  <h3>A seamless diagnostic companion</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    By anchoring product functionality within an industry-accepted clinical practice rule, the feature safely removes cognitive steps from medical checkups.
                  </p>
                  <p
                    style={{
                      marginTop: "18px",
                    }}
                  >
                    <strong>Key Strategic Deliverables:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Streamlined Clinical Decisions: </strong> Specialists evaluate criteria validation instantaneously, maximizing evaluation accuracy inside narrow schedule constraints.
                    </li>
                    <li>
                      <strong>Indispensable Application Workflow: </strong> Positioning the 5-2-1 metrics naturally within core views transitioned the platform away from a disconnected logger toward an intuitive workflow hub.
                    </li>
                    <li>
                      <strong>Product Portfolio Alignment: </strong> Successfully lowering time-to-decision bottlenecks helps drive physician product satisfaction, aligning cleanly with B2B healthcare market expansion.
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <div data-aos="fade-up" data-aos-duration="1200">
                    <img
                      src="/img/portfolio/case-study/doctor_screen_sm.jpg"
                      alt="Redesign Pages Comparison"
                      className="clickable-image"
                      style={{
                        width: "100%",
                        cursor: "pointer",
                        marginTop: "4em",
                      }}
                      onClick={() =>
                        handleImageClick(
                          "/img/portfolio/case-study/doctor_screen_sm.jpg",
                        )
                      }
                    />
                  </div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      The most important goal of the redesign
                      was to remove cognitive and emotional obstacles so that
                      life–changing technology can actually reach the people who
                      need it.
                    </p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      {/* Navigation Footer links */}
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
              ← PORTFOLIO / UX/UI PROJECTS
            </Link>
            <Link to="/case-study/motion03" className="back_button">
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
            alt="Wireframe Full"
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

export default NeptuneFeature;
