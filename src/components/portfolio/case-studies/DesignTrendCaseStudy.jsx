import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const DesignTrendCaseStudy = () => {
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
      <div className="shane_tm_hero_case_study" id="designtrend-home">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/orbit-website"
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
              <h1>From Task Paralysis to 82% Activation Rate</h1>
              <h4>Buhdi – Mindful ADHD Support App</h4>
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
                src="/img/portfolio/case-study/Mockup_3_screens.png"
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
                          <p>
                            Buhdi is an <strong>AI-poweredtask
                            management app</strong>  designed for adults with <strong>ADHD</strong> ( Attention Deficit Hyperactivity Disorder).
                            It offers a flexible, <strong>gamified
                            experience</strong>{" "} guided by a reassuring AI coach, to help
                            users complete goals by tackling "task paralysis"
                            and emotional overwhelm.
                          </p>
                          <br />
                          <p>
                            I designed Buhdi's AI-powered <strong>Quest Mode</strong> to break
                            overwhelming tasks into dopamine-friendly
                            micro-steps for ADHD users, then validated it
                            through post-launch usability testing with 5 real
                            users. The result: <strong>82% Quest activation rate </strong> and <strong>2x
                            task completion</strong> vs. baseline.​
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
                                December 2024 – March 2025
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
                              Lead UX/UI Designer (MVP phase)
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
                              Quest Mode design, onboarding UX, post-launch
                              usability testing
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
      <div className="shane_tm_section" id="designtrend-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3> ADHD Users Know What to Do, But Can't Start</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Buhdi helps adults with ADHD <strong>overcome "task paralysis"</strong>—when even simple goals feel emotionally overwhelming due to executive dysfunction and poor working memory.​
                  </p>
                  <br />
                  <p>Traditional to-do apps usually fail because:</p>
                  <ul className="case-study-list">
                    
                    <li>
                       To-do lists feels more like intimidating chores
                    </li>
                    <li>
                      Lack of immediate rewards hinders motivation (ADHD brains need dopamine now, not later)
                    </li>
                    <li>
                      Users need to feel calm and reassured to start a task (emotional scaffolding)
                    </li>
                  </ul>
                  <p>
                    Core challenge: Designing experience that turns "The Wall of Awful" into <strong>motivating micro-steps</strong>, while making onboarding and first experience intuitive enough to convert trial users.
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

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/hand_buhdi_stats_col.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/hand_buhdi_stats_col.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p> Incorporating gamification patterns</p>
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
      <div className="shane_tm_section" id="solution">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Gamification_System.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Gamification_System.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Gamification elements</p>
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
                  <span>Discovery</span>
                  <h3> ADHD Is a Performance Problem, Not a Knowledge Problem</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    {" "}
                    I combined behavioral science, user research, and competitor analysis to understand what actually helps ADHD users act.​
                  </p>
                  <br />
                  <p>
                   Key insights:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      From 4 ADHD interviews + Reddit survey: Users need <strong>"emotional scaffolding"</strong> alongside task lists
                    </li>
                    <li>
                     From research papers: ADHD is mostly about <strong>executive dysfunction</strong> - users know what to do but struggle to initiate
                    </li>
                    <li>
                      From benchmarking (Duolingo, Inflow, Calm): <strong>Gamification + sensory UX + performance streaks </strong> work better than checklists
                    </li>
                    <p>This shaped <strong>Quest Mode as a "cognitive bypass"</strong>: AI decomposes tasks into small, rewarding steps with a calming AI coach (Master Buhdi).</p>
                  </ul>

                
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
                    src="/img/portfolio/case-study/Buhdi_Onboarding_Flowcm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Buhdi_Onboarding_Flowcm.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p> Iterations of the user onboarding flow</p>
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
                  <span>STRATEGY</span>
                  <h3> Quest Mode as Dopamine-Friendly Task Breakdown</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                   Quest Mode is Buhdi's core differentiator: users input an <string className="highlight_label">overwhelming goal</string> → AI generates a <string className="highlight_label">gamified sequence of micro-steps</string> → users earn <string className="highlight_label">micro-rewards</string> along with progress and self-reflection cues as they progress.​
                  </p>
                  <br />
                    <p>3 key UX decisions:</p>
                  <ul className="case-study-list">
                  
                    <li>
                      Vertical path UI over non-linear layouts for clear progression
                    </li>

                    <li>
                     Skeleton loaders + status animations to manage AI latency perception
                    </li>
                     <li>
                     Immediate micro‑rewards (points, stats, reflections) tied to completion
                    </li>
                    <li>Onboarding that clearly communicate value proposition and gives preview of the Quest generation before hitting free trial/paywall </li>
                  </ul>
                </div>
              </div>
              {/* End right */}
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
                  <span>Key Performance Indicators</span>
                  <h3>How I defined success</h3>
                  <ul className="case-study-list">
                    <li>
                      <strong>Primary KPI:</strong> Min.{" "}
                      <string className="highlight">75%</string>{" "}
                      <string className="highlight_label"> Quest activation</string>  ( creating first quest - direct measure of value understanding)
                    
                    </li>
                    <li>
                      <strong>Secondary KPI:</strong> <string className="highlight_label">Reduced drop‑off at paywall/onboarding,</string>
                      benchmarked against pre‑test analytics
                    </li>
                  </ul>
                </div>
                
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/buhdi_testing_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/buhdi_testing_cm.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      By removing small "micro-frustrations" discovered in testing, we ensured that the behavioral logic of the app supported the user's focus rather than distracting from it.
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
                  <span>Validation</span>
                  <h3>Post-Launch Usability Testing with 5 Real Users
</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    After MVP launch, I ran moderated tests focusing on first‑time experience, onboarding, paywall, home navigation, Quest Mode, and Buhdi chatbot.​
                  </p>
                  <br />
                    <p>Key findings:</p>
                  <ul className="case-study-list">
                  
                    <li>
                      Onboarding: Unclear benefits before paywall → Clear value proposition and feature previews, +30% trial‑to‑paid

                    </li>
                    <li>
                     Home screen: Confusing navigation → Dashboard layout + onboarding tour, 40% faster time‑to‑task
                    </li>
                    <li>
                      Quest Mode: Mixed understanding → More explanations, clearer visual cues
                    </li>
                    <li>Chatbot: Well‑received but voice input errors → Faster responses, better error handling</li>
                    <li>General: Need for customization (icons, avatars) noted for future development</li>
                  </ul>
                  <p>
                    Test metrics tracked: <strong> Time‑to‑task, error rates, completion rates, confusion frequency
                      </strong>
                  </p>
                  <p>These insights drove targeted iterations that made the MVP more intuitive without major rewrites.</p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Quest_Screens_Iterations.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Quest_Screens_Iterations.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Quest screen iterations</p>
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
                  <span>Impact</span>
                  <h3>Stakeholder Alignment + Live Metrics</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>The app was successfully{" "}
                  <strong>launched on the App Store</strong> and secured its
                  first paying users in 2025. By grounding the design in
                  scientific research and iterative testing, Buhdi achieved
                  significant growth metrics during the MVP phase, validated by
                  post-launch research.</p>
                
                  
                   <br />
                   <p>Strategic outcomes:</p>
                  <ul className="case-study-list">
                   
                    <li>
                      <strong>Aligned team</strong> around Quest Mode as core differentiator and testing focus
                    </li>
                     <li>
                      Designed onboarding experience that substantially <strong>increased readiness to start a free trial</strong> (according to qualitative feedback from post-launch user interviews)
                    </li>
                    <li>
                      Created UX gamification patterns (Quest architecture, badges, animated visual feedback, progress indicators) that <strong>improved user activation, retention and task completions rates </strong>
                    </li>
                    
                  </ul>
                  <p>Live app results (post‑iteration):</p>
                  <ul className="case-study-list">
                    
                    <li>
                     <string className="highlight">82% </string> <string className="highlight_label">Quest activation rate</string> (users completing first AI breakdown)​
                    </li>
                    <li>
                      <string className="highlight">+22%</string>  <string className="highlight_label">D30 user retention</string> (within 30 days after first-time use of the app)
                    </li>
                    <li>
                      <string className="highlight">2x</string> <string className="highlight_label">task completion vs. pre‑Buhdi baseline</string> for &gt;50% of researched active users​ 
                    </li>
                    
                  </ul>
                </div>
                {/* <div
                 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <button
                    className="shane_tm_button fade-in-delay"
                    style={{
                      // marginTop: "32px",
                      backgroundColor: "#fff",
                      border: "1px solid #6e41e2",
                      padding: 0,
                      color: "#6e41e2",
                      cursor: "pointer",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    onClick={() =>
                      window.open(
                        "https://buhdi.com/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <span className="button-text">See Live</span>
                  </button>
                </div> */}
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Mockup_2_screens.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Mockup_2_screens.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Task management interfaces</p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
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
              ← PORTFOLIO / UX/UI PROJECTS
            </Link>
            <Link
              to="/case-study/orbit-website"
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

export default DesignTrendCaseStudy;
