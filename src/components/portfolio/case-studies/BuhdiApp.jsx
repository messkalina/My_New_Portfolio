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
            <div className="navigation-wrapper">
              <Link to="/case-study/motion06" className="back_button">
                ← PREVIOUS PROJECT
              </Link>
              <Link to="/case-study/neptune-feature" className="back_button">
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
                <h1>Gamifying a to-do list to help people get things done</h1>
              </div>
              <h4>Buhdi – Mindful ADHD Support</h4>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How I turned overwhelming to-do lists into a motivating
                    “Quest” experience that reduces task paralysis and boosts
                    user activation.
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
                src="/img/portfolio/case-study/Buhdi_App_Slider_sm.mp4"
                style={{ width: "100%" }}
                autoPlay             
                muted
                playsInline
                loop
                controlscontrolsList="nodownload"
                controls
                poster="/img/portfolio/case-study/Buhdi_App_Slider_sm.mp4"
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
                            Buhdi is an{" "}
                            <strong>AI-powered productivity app</strong>{" "}
                            accommodating the needs of users with{" "}
                            <strong>ADHD</strong> (Attention Deficit
                            Hyperactivity Disorder).
                          </p>
                          <p>
                            I joined the project post-MVP to solve a critical
                            bottleneck: users were downloading the app but
                            dropping off before completing their first task. My
                            goal was to drive user activation by transforming a
                            standard to-do list into a motivating, gamified
                            experience.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p>
                              <strong>Timeline:</strong>
                              <br />
                              December 2024 – March 2025
                            </p>

                            <p>
                              <strong>Role:</strong>
                              <br />
                              Lead UX/UI Designer
                            </p>

                            <p>
                              <strong>Scope:</strong>
                              <br />
                              Quest Mode design, onboarding design, UX/UI
                              design, user interviews and usability testing
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
                    Many users downloaded the app but{" "}
                    <strong>dropped off quickly. </strong>
                    The main barriers were <strong>task paralysis</strong>:
                    knowing what to do but feeling unable to actually start
                    working on it (executive disfunction).
                  </p>

                  <p>
                    Through user interviews and research, I identified most
                    probable causes:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>The Dopamine Gap: </strong> without immediate
                      gratification the neurodivergent mind quickly becomes
                      bored. If an app doesn't feel stimulating or rewarding
                      right away, users often abandon it to find something more
                      engaging.
                    </li>
                    <li>
                      <strong>Emotional Dysregulation:</strong> when facing with
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
                      To save our retention numbers we needed to design a way to
                      give users the dopamine and structure the brain was
                      missing.
                    </p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
        <div
          className="full-image-section"
          style={{ width: "100%", pointerEvents: "none" }}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="container">
            <div className="content">
              <div>
                <img
                  src="/img/portfolio/case-study/Todoist_comparison.png"
                  alt="Redesign Pages Comparison"
                  className="clickable-image"
                  style={{
                    cursor: "pointer",
                    marginTop: "4em",

                    Height: "110vh",
                    width: "auto",
                  }}
                  onClick={() =>
                    handleImageClick(
                      "/img/portfolio/case-study/Todoist_comparison.png",
                    )
                  }
                />

                <div className="image_caption">
                  <p>
                    The to-do list does not increase motivation in ADHD users.
                    To help users stay motivated, we leaned into the "wise
                    master" idea - a supportive mentor that provides positive
                    reinforcement and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    src="/img/portfolio/case-study/Buhdi_Main_Flowcm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Buhdi_Main_Flowcm.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Self-reflection activities and taking a break from a task
                      was reframed as intentional actions a user is rewarded
                      for. The result: a decrease of the frustration and shame
                      users may feel when not completing a task as planned.
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
                  <h3> Turning chores into a mountain–climbing "Quest"</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Since typical to-do lists often feel like a way too much to
                    take on, I designed the core experience as gamified "Quest
                    Mode". The focus was on immediate rewards and AI-assisted
                    task break-down. That should tackle task paralysis and
                    increase
                    <strong> user activation rate</strong>.
                  </p>

                  <p>
                    <strong>Key UX decisions:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>A vertical "climbing" path:</strong> the Quest is
                      presented as a as a mountain route where next steps are
                      trail flags. This bottom-to-top path turns progress into
                      an achievement and removes choice paralysis by
                      highlighting the clear next step.
                    </li>
                    <li>
                      <strong>Designing for dopamine:</strong> A reward system –
                      including points, stats, badges and progress trackers –
                      integrated into into the task flow. By providing immediate
                      gratification for every small step, we reframed boring
                      chores as rewarding "wins," which lowered the chance of
                      users dropping off.
                    </li>
                    <li>
                      <strong>Master Buhdi (The AI Coach):</strong> A reassuring
                      AI coach persona (Master Buhdi) offers emotional support
                      and reduce the "failure shame" leading to
                      procrastination.{" "}
                    </li>
                    <li>
                      <strong>Proof of value before the paywall:</strong> to
                      reduce the stress of committing to a subscription (even
                      with a free trial), I designed the onboarding to show
                      users a preview of their first generated "Quest" before
                      they hit the paywall. This "Aha!" moment gave them
                      immediate proof that the app worked before they were asked
                      to pay.{" "}
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
                  <h3>From paralysis to action</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    To measure if the redesign effectively solved for
                    ADHD-specific behaviors, I established three primary success
                    signals. Validation was crucial from the bussiness
                    perspective - the more users would experience app value
                    during the free trial, the higher the chance of{" "}
                    <strong>conversion</strong> to paid subscription and{" "}
                    <strong>retention.</strong>
                  </p>

                  <p>
                    KPI 1:
                    <strong> Onboarding Completion (&gt;80% Target)</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Why:</strong> Ensure the "Boredom Threshold"
                      wasn't hit before the user saw the core value,
                      successfully prompting users to test "Quest" feature
                      before free trial decision.
                    </li>
                  </ul>
                  <p>
                    KPI 2:
                    <strong> Quest Activation (&gt;60% Target)</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Why:</strong> To prove that the AI goal breakdown
                      effectively bypassed "Task Paralysis" by prompting user to
                      define their goal and receive step-by-step breakdown
                      making starting action easier.
                    </li>
                  </ul>
                  <p>
                    KPI 3:
                    <strong> D14 Retention (25% Benchmark)</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Why:</strong> To validate the stickiness of the
                      dopamine-reward loop design and prove that the app
                      provides enough value to users for long-term use while
                      still staying within free trial.
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Buhdi_timer.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Buhdi_timer.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      The visual task timer was design to accomodate
                      "time-blindness" trait common among people with ADHD.
                      Studies confirms that visualising passing time is more
                      effective than just reading the digits on the timer.
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
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Gamifying_to_do_list.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Gamifying_to_do_list.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Based on our usability tests we strengthened the mountain
                      metaphor for Quest Tab and added Activity Points. The
                      result: less anxiety and more immediate stimulation
                      required to bypass task paralysis.
                    </p>
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
                  <span>Validation</span>
                  <h3>Value of a dopamine-first strategy</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I ran moderated usability tests with 5 users with ADHD. I
                    focused on first‑time experience, onboarding, paywall, home
                    navigation, Quest Mode, and experience with Buhdi
                    chatbot.​Their feedback helped me sharpen the product
                    experience:
                  </p>
                  <p>
                    Test metrics tracked:{" "}
                    <strong>
                      {" "}
                      Time‑to‑task, error rates, completion rates, confusion
                      frequency
                    </strong>
                  </p>

                  <strong>
                    <p>Key findings:</p>
                  </strong>
                  <ul className="case-study-list">
                    <li>
                      Onboarding: Unclear benefits before paywall → Clear value
                      proposition and feature previews
                    </li>

                    <li>
                      Quest Mode: Confusing bottom–to–top direction of the Quest
                      screen → strengthening mountain metaphor by adding clearer
                      visual clues (flags and trail markers to guide the eye
                      upward) → framing progress as rewarding feeling of
                      climbing the mountain.
                    </li>
                    <li>
                      Chatbot: Well‑received but voice input errors → Faster
                      responses, better error handling
                    </li>
                    <li>
                      Lagging Task Generation: improved visual feedback with
                      "skeleton loaders" and humorous progress captions. This
                      made the app feel faster and more engaging while the AI
                      was generating the task breakdown.
                    </li>
                  </ul>

                  <p>
                    These insights drove targeted iterations that made the app
                    more intuitive without major rewrites.
                  </p>
                </div>
              </div>
              {/* End left */}
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
                  <h3>Validating the first "Aha!" moment</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Buhdi successfully launched on the App Store in 2025,
                    securing its first paying users and validating our core
                    "Quest" strategy. While our onboarding and activation rates
                    are exceptionally high, we’ve observed that mid-term
                    retention (21% at Day 14) currently sits just below the
                    industry benchmark.
                  </p>

                   <p>
                    <strong>Strategic insight: </strong>
                    Current design is successful at communicating value and
                    getting users started. In the next phase we should shift
                    focus toward long-term incentive loops and habit-stacking
                    features to sustain engagement after the initial excitement
                    fades.
                  </p>

                  <strong>
                    <p className="list_title ">Strategic outcomes:</p>
                  </strong>
                  <ul className="case-study-list">
                    <li>
                      <span className="highlight">73% </span>{" "}
                      <span className="highlight_label">
                        Quest activation rate
                      </span>{" "}
                      (users creating their first Quest - goal breakdown into
                      sequence of steps)​
                    </li>
                    <li>
                      <span className="highlight">21%</span>{" "}
                      <span className="highlight_label">
                        D14 user retention
                      </span>{" "}
                      (percent of users re-used the app within 14 days after
                      first-time use)
                    </li>
                    <li>
                      <span className="highlight">82%</span>{" "}
                      <span className="highlight_label">
                        onboarding completion
                      </span>{" "}
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center", // Centers horizontally
                      alignItems: "center", // Centers vertically
                      minHeight: "100vh", // Ensures the parent is at least full screen height
                      width: "100%",
                    }}
                  >
                    <video
                      src="/img/portfolio/case-study/Buhdi_onboarding_after.mp4"
                      style={{
                        maxHeight: "80vh",
                        width: "auto",

                        maxWidth: "100%",
                        height: "auto",
                      }}
                      autoPlay
                    
                      muted
                      playsInline
                      controls
                      controlsList="nodownload"
                      poster="/img/portfolio/case-study/Buhdi_onboarding_after.mp4"
                    />
                  </div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      {" "}
                      To reduce the stress of committing to a subscription (even
                      with a free trial), I designed the onboarding to show
                      users a preview of their first generated "Quest" before
                      they hit the paywall. This "Aha!" moment gave them
                      immediate proof that the app worked before they were asked
                      to pay.
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
            <Link to="/case-study/orbit-website" className="back_button">
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
