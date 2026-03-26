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
              <h1>Solving Behavioral Barriers to Drive Engagement</h1>
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
                            Buhdi is an{" "}
                            <strong>AI-powered productivity app</strong>{" "}
                            accomodating the needs of users with{" "}
                            <strong>ADHD</strong> (Attention Deficit
                            Hyperactivity Disorder). It offers a{" "}
                            <strong>gamified experience</strong> guided by a
                            reassuring AI coach, to help users deal with
                            inconsistent motivation and emotional overwhelm. I
                            joined the project in the post-MVP phase to focus on
                            user activation - ensuring that users didn't just
                            download the app, but understood how the app works
                            and tested it's value proposition.
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
                            <p className="timeline-fine">Lead UX/UI Designer</p>
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
                              Quest Mode design, onboarding design, UX/UI
                              design, user interviews and usability testing
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
                  <h3> Starting is hard, consistency is even harder</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    For many users (especially with ADHD) the big obstacle to
                    "getting things done" is not a lack of to-do list. It is{" "}
                    <strong>Task Paralysis</strong> - when you know what you
                    need to do, but you feel mentally stuck and unable to
                    initiate action. The common causes are: problems with task
                    planning and prioritazation, fear of doing it wrong and
                    boredom (lack of stimulation).
                  </p>
                  <br />
                  <p>
                    Our early data showed that users were downloading the app
                    but dropping off soon after. We hyphotesised that it could
                    be explained by the following neuropsychological concepts:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>The Dopamine Gap </strong> Without immediate
                      gratification, the neurodivergent mind easily experiences
                      boredom and disengages. That leads to high churn as users
                      abandon the app in search of a more stimulating
                      experience.
                    </li>
                    <li>
                      <strong>Emotional Dysregulation:</strong> When faced with
                      a large, undefined task, the resulting emotional overwhelm
                      leads to procrastination. The user doesn't just "forget"
                      the task; they experience a paralyzing avoidant response
                      to the anxiety of starting.
                    </li>
                  </ul>

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
                    <p>
                      {" "}
                      1{")"} The to-do list does not increase motivation in ADHD
                      users (Todoist App). 2{")"}To combat executive disfunction
                      users need reward system providing constant micro
                      gratifications. Here comes gamification (Duolingo,
                      Habitica)
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
                    <p>
                      Doing self-reflection activities and taking a break from a
                      task so that the user can recharge and come back later was
                      framed as an intentional actions rewarded in the app.That
                      should decrease the frustration and shame users may feel
                      when they can't complete task as planned.
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
                  <span>Solution</span>
                  <h3> Task Breakdown as Dopamine-Friendly Quest Mode</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Users din't need another app to store tasks - they needed a
                    partner to help them start and persist with their tasks. Our
                    educated guess was that by using AI to break down complex
                    goals into "micro-wins" steps and provide positive
                    reinforcement for staying on track we would tackle task
                    paralysis and increase app <strong>activation rate</strong>.
                    The more users would experience app value during the free
                    trial the chance of{" "}
                    <strong>
                      convertion to paid subscription and retention.
                    </strong>
                  </p>
                  <br />
                  <p>
                    <strong>Key UX decisions:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Gamification design</strong> A reward
                      system—points, stats, progress indications and
                      self-reflection prompts— tied to the task completion flow.
                      By providing immediate gratification for every micro-step,
                      we reframed chores as micro-wins, lowering the drop-off
                      rate.
                    </li>
                    <li>
                      <strong>The AI Coach support</strong> I designed a calming
                      AI coach persona (Master Buhdi) to provide emotional
                      support and reduce the procrastination and "failure
                      shame".{" "}
                    </li>
                    <li>
                      <strong>The "Value-First" Onboarding</strong> To reduce
                      the anxiety and "commitment-shutdown" common at paywalls,
                      I designed an onboarding flow that provides a clear value
                      proposition and a preview of a generated Quest before the
                      user is asked to start a free trial. This provides
                      immediate proof of value and leads to user
                      activation.{" "}
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
                  <span>Solution</span>
                  <h3> Task Breakdown as Dopamine-Friendly Quest Mode</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Quest Mode is Buhdi's core differentiator: users input an{" "}
                    <span className="highlight_label">overwhelming goal</span> →
                    AI generates a{" "}
                    <span className="highlight_label">
                      gamified sequence of micro-steps
                    </span>{" "}
                    → users earn{" "}
                    <span className="highlight_label">micro-rewards</span> along
                    with progress and self-reflection cues as they progress.​
                  </p>
                  <br />
                  <p>3 key UX decisions:</p>
                  <ul className="case-study-list">
                    <li>
                      Vertical path UI over non-linear layouts for clear
                      progression
                    </li>

                    <li>
                      Skeleton loaders + status animations to manage AI latency
                      perception
                    </li>
                    <li>
                      Immediate micro‑rewards (points, stats, reflections) tied
                      to completion
                    </li>
                    <li>
                      Onboarding that clearly communicate value proposition and
                      gives preview of the Quest generation before hitting free
                      trial/paywall{" "}
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
                  <span>Defining Success</span>
                  <h3>From Paralysis to Action</h3></div>
                   <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    To measure if the redesign effectively solved for
                    ADHD-specific behaviors, I established three primary success
                    signals. Rather than just gathering data, I used these KPIs
                    to validate if we successfully communicated the value propositions and prompted users to define their goal and take first step toward action aka battling task paralysis.
                  </p>
                  <br />
                  <p>
                    KPI 1:
                    <strong> Onboarding Completion (&gt;80% Target)</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Why:</strong> Ensure the "Boredom Threshold" wasn't hit before the
                      user saw the core value, successfully prompting users to test "Quest" feature before free trial decision. 
                    </li>
                  </ul>
                  <p>
                    KPI 2:
                    <strong> Quest Activation (&gt;60% Target)</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Why:</strong> To prove that the AI goal breakdown effectively bypassed
                      "Task Paralysis" by prompting user to define their goal and receive step-by-step breakdown making starting action easier.
                    </li>
                  </ul>
                  <p>
                    KPI 3:
                    <strong> D14 Retention (25% Benchmark)</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Why:</strong> To validate the stickiness of the
                      dopamine-reward loop design and prove that the app provides enough value to users for long-term use
                     while still staying within free trial. 
                
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
                      By removing small "micro-frustrations" discovered in
                      testing, we ensured that the behavioral logic of the app
                      supported the user's focus rather than distracting from
                      it.
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
                  <h3>Value of a Dopamine-First Strategy</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    After MVP launch, I ran moderated usability tests with 5
                    neurodivergent users focusing on first‑time experience,
                    onboarding, paywall, home navigation, Quest Mode, and Buhdi
                    chatbot.​
                  </p>
                  <br />
                  <strong>
                    <p>Key findings:</p>
                  </strong>
                  <ul className="case-study-list">
                    <li>
                      Onboarding: Unclear benefits before paywall → Clear value
                      proposition and feature previews
                    </li>
                    <li>
                      Home screen: Confusing navigation → Dashboard layout +
                      onboarding tour, 32% faster time‑to‑task score
                    </li>
                    <li>
                      Quest Mode: Mixed understanding → More explanations,
                      clearer visual cues
                    </li>
                    <li>
                      Chatbot: Well‑received but voice input errors → Faster
                      responses, better error handling
                    </li>
                    <li>
                      General: Need for customization (icons, avatars) noted for
                      future development
                    </li>
                  </ul>
                  <p>
                    Test metrics tracked:{" "}
                    <strong>
                      {" "}
                      Time‑to‑task, error rates, completion rates, confusion
                      frequency
                    </strong>
                  </p>
                  <p>
                    These insights drove targeted iterations that made the MVP
                    more intuitive without major rewrites.
                  </p>
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
                  <p>
                    The app was successfully{" "}
                    <strong>launched on the App Store</strong> and secured its
                    first paying users in 2025. 
                  </p>
<br />
                  <strong><p className="list_title ">Strategic outcomes:</p></strong>
                  <ul className="case-study-list">
                    <li>
                      <span className="highlight">73% </span>{" "}
                      <span className="highlight_label">
                        Quest activation rate
                      </span>{" "}
                      (users creating their first Quest - goal breakdown into sequence of steps)​
                    </li>
                    <li>
                      <span className="highlight">21%</span>{" "}
                      <span className="highlight_label">
                        D14 user retention
                      </span>{" "}
                      (percent of users re-used the app within 14 days after first-time use)
                    </li>
                    <li>
                      <span className="highlight">82%</span>{" "}
                      <span className="highlight_label">
                        onboarding completion
                      </span>{" "}
        
                    </li>
                  
                  </ul>

                   <p>
                    <strong>Strategic insight:{" "}</strong>
                    <br />
                    
                      User onboarding completion and activation rates are high but mid term retention is sligtly lower that the
                      industry benchmark for productivity apps (25-30%). It can be partially explained by the target user group profile - people with ADHD generally struggle with consistency.
                     <strong>Current design is
                    successful at communicating value and getting users started, but we need more
                    incentives for users to achieve their goals in the long term.</strong>
                  </p>

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
