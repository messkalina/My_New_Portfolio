import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const MyStoryCaseStudy = () => {
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
            <div>
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/unlimitix-app"
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
              <h1>
                Designing Website for Complex Medical Products and Audiences
              </h1>
              <h4>Orbit Health Website Redesign</h4>
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
                src="/img/portfolio/case-study/3_pages_cover_cmp.png"
                alt="App Screens"
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
                          <p className="text">
                            Orbit Health is a Munich-based digital health
                            startup focused on enhancing care for people with
                            Parkinson’s Disease (PD). Its{" "}
                            <strong>AI-powered solutions </strong>
                            use smartwatch data to track motor symptoms, giving
                            patients and neurologists real-time, objectives
                            insights into symptom fluctuations and treatment
                            efficacy.
                            <br />
                            <br />
                            With the product still undergoing clinical trials
                            and awaiting medical device approval in Germany, the
                            website needed to <strong>clearly explain</strong> a
                            sophisticated digital health product—while guiding
                            two very different user groups through complex
                            decision-making and regulatory processes.
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
                                April 2024 – September 2024
                              </span>
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              What I did:{" "}
                            </p>
                            <p className="timeline-fine">
                              UX Research, UX/UI Design, UX writing
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Tools:{" "}
                            </p>
                            <p className="timeline-fine">
                              Figma, Adobe Photoshop, Adobe Illustrator, Lyssna
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

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="challenge">
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
                  <h3>
                    Designing Website for Complex Medical Products and Audiences
                  </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The central challenge was to design a website that clearly
                    and persuasively communicates the value of
                    <strong> AI-enabled medical device apps</strong> that serve
                    the needs of two very different user groups:
                  </p>

                  <ul className="case-study-list">
                    <li>
                      <strong>People living with Parkinson’s Disease </strong>
                      who need support understanding how the product can help
                      them and how to access it as a reimbursable treatment
                      option.
                    </li>
                    <li>
                      <strong>Neurologists</strong> who require detailed
                      clinical context, reimbursement guidance, and a clear
                      value proposition for integrating the solution into their
                      patient care.
                    </li>
                  </ul>
                  <p>
                    The existing site lacked differentiated user flows,
                    conversion-focused messaging and guidance through the
                    complex German healthcare system. My goal was to fix that by
                    aligning UX with product complexity, compliance, and
                    audience needs.
                  </p>
                </div>
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
                    <span className="button-text">Jump to Outcome</span>
                  </a>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Orbit_3_frames_current_sm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Orbit_3_frames_current_sm.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Wireframes of the redesigned Orbit Health website</p>
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
                    src="/img/portfolio/case-study/Home Page wireframe.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Home Page wireframe.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Homepage redesign</p>
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
                  n
                >
                  <span>The Solution</span>
                  <h3>Transforming Strategy into High-Conversion UX</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Guided by <strong>Design Thinking</strong>, I conducted
                    secondary research and stakeholder interviews to navigate
                    the product’s scope, user goals, and{" "}
                    <strong>regulatory constraints</strong>.
                  </p>
                  <p>
                    The discovery phase pointed me to identify the following objectives:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Simplifying Complexity</strong> Explaining AI-driven medical systems without losing clinical depth
                    </li>
                    <li>
                      <strong>Delineating user journeys</strong> Mapping distinct paths for patients versus healthcare professionals.
                    </li>
                    <li>
                      <strong>Guiding Actions:</strong> Streamlining the flow through eligibility, reimbursement, and onboarding.
                    </li>
                  </ul>
                  <p>
                   My role was to translate these <strong>strategic goals</strong> into intuitive <strong>user flows</strong> and a <strong>conversion-oriented site structure</strong> that bridges the gap between deep-tech and user needs.
                  </p>
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
                  <span>Empathize & Define</span>
                  <h3>User Segmentation and Journey Mapping</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Since direct user interviews weren’t possible at this stage,
                    I focused on stakeholder insights and competitive analysis:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>
                        {" "}
                        Conducted interviews with internal stakeholders{" "}
                      </strong>{" "}
                      (product, operations, regulatory) to define business
                      objectives, product functionality, and user pain points
                    </li>
                    <li>
                      <strong>Mapped workflows</strong> from patient onboarding
                      to neurologist prescription and follow-up
                    </li>
                    <li>
                      <strong>Analyzed competitor websites</strong> to benchmark
                      UX patterns, messaging tone, and regulatory handling
                    </li>
                  </ul>
                  <p>
                    From my research, I developed distinct user personas and
                    journeys that helped me identify and define core UX
                    problems: how to <strong>explain </strong> complex medical
                    products, <strong>build trust and credibility</strong> and
                    design <strong>conversion flows</strong> that work within
                    German healthcare regulations.
                  </p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/orbit_persona_patient_journey.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/orbit_persona_patient_journey.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      User persona and journey map for Orbit Health's patient
                      audience
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
      {/* Results Section - Image left, Text right */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/site map_BG.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/site map_BG.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Wireframes of the redesigned Orbit Health website</p>
                  </div>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Ideate & Prototype</span>
                  <h3>Solutions for Content, Navigation, and UX Structure</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I explored multiple approaches and gathered feedback from
                    stakeholders to refine the Information Architecture and
                    onboarding logic and developed:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Modular sitemap </strong>tailored to dual-audience
                      logic
                    </li>
                    <li>
                      <strong>Wireframes </strong>for segmented patient and
                      provider flows
                    </li>
                    <li>
                      <strong>Clickable Figma prototype </strong>showcasing
                      product explainers, testimonials, and conversion paths
                    </li>
                  </ul>
                </div>
                {/* <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Link to="/#portfolio">View More Projects</Link>
                </div> */}
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      {/* --- COPY OF SECTION BELOW --- */}
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
                  <span>Outcome</span>
                  <h3>Key Contributions</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Although the redesigned site was never built due to
                    financial constrains, through my work I:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>
                        Created a clear and scalable information
                        architecture{" "}
                      </strong>
                      based on audience segmentation
                    </li>
                    <li>
                      <strong>Defined enrollment paths</strong> aligned with
                      German healthcare reimbursement requirements
                    </li>
                    <li>
                      <strong>
                        Provided a prototype and content recommendations
                      </strong>{" "}
                      that clarified the company’s value and next steps
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Orbit-website-wireframes_all.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Orbit-website-wireframes_all.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Sitemap with information architecture</p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* --- END COPY --- */}
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
            <Link
              to="/case-study/unlimitix-app"
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
            overflow: "auto", // Enable scrollbars if needed
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxImg}
            alt="Wireframe Full"
            style={{
              display: "block",
              margin: "40px auto", // Optional: add some margin from top
            }}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MyStoryCaseStudy;
