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
              <div className="subtitle-container">
            <div className="subtitle-content">
              <h1>Driving Growth through Tailored User Journeys</h1>
              </div>
              </div>
              <div>
                {" "}
                <h4>Orbit Health Website Redesign</h4>
              </div>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How replacing a "one-size-fits-all" website with distinct
                    paths for key users helps improving value proposition and conversion.
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
               <video
                    src="/img/portfolio/case-study/Orbit_Hero_Animcm.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Orbit_Hero_Animcm.mp4"
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
                            Orbit Health is a Munich-based digital healthcare
                            startup improving Parkinson’s Disease care through
                            AI-powered technology. Their apps turn users data
                            into objective, continuous insights helping
                            neurologists and patients move toward data-backed
                            symptom management.
                            <br />
                            <br />
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
                              Role:{" "}
                            </p>
                            <p className="timeline-fine">
                              Sole UX/UI Designer (UX Research, UX/UI Design, UX
                              writing)
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Scope:{" "}
                            </p>
                            <p className="timeline-fine">
                              Discovery, stakeholder alignment, content and IA
                              strategy, mid‑fidelity wireframes for full
                              website, interactive prototype
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
                  <span>The Problem</span>
                  <h3>Low engagement and few sign‑ups via website</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The company develeped medical apps that were still going
                    through clinical trials. Users (both clinicians and people
                    with Parkinson’s) were needed to join an early access
                    program for products validation and driving early adoption.
                    The website needed to be a conversion channel for both users
                    groups.
                  </p>
                  <br />
                  <p>
                    <strong>
                      The existing site lacked effective user flows,
                      conversion-focused messaging and guidance through complex
                      eligibility, regulatory and reimbursement processes for
                      medical applications in Germany ("DiGA").
                    </strong>
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
                    <span className="button-text">Jump to Impact</span>
                  </a>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/case-study/Orbit_old_home_scroll.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Orbit_old_home_scroll.mp4"
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      How to present complex medical applications still under
                      development? Both doctors and patients needed to easily
                      comprehend what is it, what's the value for them and how
                      to get access. Existing website lacked this clarity.
                      Simple downloading the app wouldn't work because user
                      needed an account created by the company, after meeting
                      eligibility criteria.
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
                  <video
                    src="/img/portfolio/case-study/Patient_Flow.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Patient_Flow.mp4"
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Doctors and patients needed to be guided through user
                      flows that remove user frictions and lead to conversion.
                      Who’s Orbit? Can I trust this company? → What does Orbit
                      offer? → Does it concern me? → Can I benefit from it? →
                      How can I get it?
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
                  n
                >
                  <span>The Solution</span>
                  <h3>A strategic roadmap for clarity and trust </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    My goal was to stop the "guessing game" for visitors. I
                    redesigned the website structure to act as a guide, leading
                    different users down their own specific paths.
                  </p>
                  <p>Key design decisions included:</p>
                  <ul className="case-study-list">
                    <li>
                      <strong>A "Fork in the Road" Homepage: </strong>
                      homepage acts as a routing station. A visitor can quickly
                      self–identify as either a "Professional" or a "Patient."
                      Moving users quickly to relevant user flow should reduce
                      bounce rate.
                    </li>
                    <li>
                      <strong>
                        Clear, audience‑specific value proposition for each
                        product:{" "}
                      </strong>{" "}
                      demonstrating clinical relevance in terms of insights and
                      time-optimisation for neurologists and simple explanations
                      of benefits, eligibility, and funding guidance for
                      patients.
                    </li>

                    <li>
                      <strong>The "How–To" Guide for Funding: </strong>{" "}
                      dedicated sections to explain the German healthcare
                      reimbursement process. By breaking down the steps to get
                      the app covered by insurance, we removed the biggest
                      conversion obstable (information gap) for patients and
                      physicians.
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
                  <span>Key Performance Indicators</span>
                  <h3>How I defined success</h3>
                  <ul className="case-study-list">
                    <li>
                      <strong>Primary KPI:</strong> Min.{" "}
                      <string className="highlight">15%</string>{" "}
                      <string className="highlight_label">increase</string> in
                      <string className="highlight_label">
                        {" "}
                        demo requests{" "}
                      </string>
                      and{" "}
                      <string className="highlight_label">
                        eligibility-related contact
                      </string>{" "}
                      within 3 months post-launch. This is direct signal that
                      the website
                      <strong>
                        {" "}
                        drives patients and neurologists toward adoption.
                      </strong>
                    </li>
                    <li>
                      <strong>Secondary KPI:</strong>{" "}
                      <string className="highlight_label">
                        Reduced homepage bounce{" "}
                      </string>
                      rate and{" "}
                      <string className="highlight_label">
                        increased time on the product pages,
                      </string>{" "}
                      benchmarked against current Google Analytics data. This
                      would signal <strong>increased engagement.</strong>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/case-study/HCP_Flow.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/HCP_Flow.mp4"
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Data showed that majority of site visitors came from
                      organic Google traffic, via blog articles. Therefore the
                      main user flow targets both user groups but prioritises
                      patients as primary visitors and key influencers of
                      doctors’ decisions.
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
                    src="/img/portfolio/case-study/Orbit_Homepage_comparison_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{
                      width: "100%",
                      maxHeight: "100vh",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Orbit_Homepage_comparison_cm.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Redesigned Homepage user flow was designed to guide both
                      target user groups to signing up for eligibility call
                    </p>
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
                  <span>Highlights</span>
                  <h3>
                    Better usability through clear structure and rich content
                  </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Based on insights from discovery, I defined the UX strategy
                    for the new site around three principles:
                  </p>
                  <br />
                  <strong>1. Separate, but connected, journeys:</strong>
                  <ul className="case-study-list">
                    <li>
                      Clear entry points and tailored content for people with
                      Parkinson’s and for neurologists.
                    </li>
                    <li>
                      Shared sections only where goals overlap (e.g. what is
                      Orbit, what they do, blog)
                    </li>
                  </ul>

                  <strong>2. Anchor UX in real decision points:</strong>
                  <ul className="case-study-list">
                    <li>
                      Structure pages around the exact questions users have at
                      each step (eligibility, reimbursement, evidence, next
                      steps).
                    </li>
                    <li>
                      Make it always clear “what to do next” for each audience.
                    </li>
                  </ul>
                  <strong>
                    For patients, I designed flows and page layouts that:
                  </strong>
                  <ul className="case-study-list">
                    <li>
                      Explain what solutions do in everyday language and how
                      they can help in daily life.
                    </li>
                    <li>
                      Show the steps to access the solution in the German
                      healthcare system.
                    </li>
                    <li>
                      Provide clear calls to action and expectations (talking to
                      a doctor, collecting necessary information, next steps).
                    </li>
                  </ul>
                  <strong>For neurologists, the UX focuses on:</strong>

                  <ul className="case-study-list">
                    <li>
                      Clinical context and how Orbit fits into existing
                      diagnostic and treatment workflows.
                    </li>
                    <li>
                      Evidence, data visualisations, and key indicators relevant
                      to clinical decisions.
                    </li>
                    <li>
                      Guidance on reimbursement and integration into practice,
                      without overwhelming with marketing copy.
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
                  <span>Impact</span>
                  <h3>A guess-free blueprint</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Since this project focused on the discovery and design
                    phase, my goal was to give Orbit a rock–solid foundation to
                    build on. By bringing together the clinical, business, and
                    regulatory needs into one plan, I created a roadmap that
                    made the next steps faster and much more certain.
                  </p>
                  <p
                    style={{
                      marginTop: "18px",
                    }}
                  >
                    <strong>Key Outcomes:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Shared mental model: </strong> the redesign was
                      built on researched-based empathy for the users and
                      bussiness objectives and insights of the company
                      stakeholders. That faciliated shared understanding of the
                      website strategy and made later development work faster
                      and more concrete.
                    </li>

                    <li>
                      <strong>Decision‑ready mid‑fidelity prototype: </strong>{" "}
                      the full‑site mid‑fi wireframes and prototype created a
                      ready‑to‑use foundation for high‑fidelity visual design,
                      motion, and future usability testing with patients and
                      clinicians.
                    </li>
                    <li>
                      <strong>Content structure and recommendations: </strong>I
                      simplified the content strategy by defining which messages
                      belonged on the website and which belonged in deeper
                      medical documents. This cleared up the "what to say where"
                      confusion that had been slowing the team down.
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

                  <div className="image_caption">
                    <p>
                      Clarity is the best form of Empathy. When dealing with a
                      complex disease like Parkinson’s, a designer’s most
                      important job is to remove the noise so that life–changing
                      technology can actually reach the people who need it.
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
