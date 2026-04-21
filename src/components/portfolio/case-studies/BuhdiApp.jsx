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
            > <div className="subtitle-container">
              
              <h1>Solving behavioral barriers<br />to drive engagement</h1>
              </div>
              <h4>Buhdi – Mindful ADHD Support App</h4>
               <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How turning overwhelming to-do list into a gamified Quest helps people with ADHD beat procrastination.
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
                loop
                muted
                playsInline
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
                > <span>Overview</span>
                          <p>
                            Buhdi is an{" "}
                            <strong>AI-powered productivity app</strong>{" "}
                            accomodating the needs of users with{" "}
                            <strong>ADHD</strong> (Attention Deficit
                            Hyperactivity Disorder). It offers a{" "}
                            <strong>gamified experience</strong> guided by a
                            reassuring <strong>AI coach</strong>, to help users
                            deal with inconsistent motivation and emotional
                            overwhelm. I joined the project in the post-MVP
                            phase to focus on user activation - ensuring that
                            users didn't just download the app, but understood
                            how the app works and tested its value proposition.
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
                           Lead UX/UI Designer</p>

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
                    For many people (especially those with <strong>ADHD</strong>
                    ), the biggest obstacle to "getting things done" "getting
                    things done" is not a lack of to-do list. It is{" "}
                    <strong>Task Paralysis</strong> - knowing exactly what you
                    need to do, but feeling mentally stuck and unable to start.
                    This is often caused by a struggle to plan, a fear of doing
                    it wrong, or simply a lack of interest.
                  </p>

                  <p>
                    Our early data showed that many users were downloading the
                    app but dropping off almost immediately. We believed this
                    churn was caused by two specific challenges:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>The Dopamine Gap: </strong> without immediate
                      gratification the neurodivergent mind quickly becomes
                      bored.If an app doesn't feel stimulating or rewarding
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
                      missing. For that reason we incorporated gamification
                      design patterns such as statistics and badges into Buhdi.
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
          style={{ width: "100%" }}
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
                    To help users stay motivated, we moved away from the cold
                    tone of traditional apps. We leaned into the "wise master"
                    archetype found in films like Star Wars or The Karate Kid.
                    The goal was to create a personality that feels like a
                    trusted mentor – someone who understands your struggles but
                    encourages you to keep climbing. Also reframing working on
                    task by adding "taking a break" and reflection as task
                    actions is intended to combat task paralysis.
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
                      By removing small "micro-frustrations" discovered in
                      testing, we ensured that the behavioral logic of the app
                      supported the user's focus rather than distracting from
                      it. Doing self-reflection activities and taking a break
                      from a task so that the user can recharge and come back
                      later is reframed as intentional actions user is rewarded
                      for. That should decrease the frustration and shame users
                      may feel when not completing a task as planned.
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
                    Users don't need another to-do list app. They need a partner
                    to help them actually start and keep going. We believed that
                    by using AI to break down complex goals into "micro-wins"
                    steps and provide positive reinforcement for staying on
                    track we would tackle task paralysis and increase app{" "}
                    <strong>activation rate</strong>. The more users would
                    experience app value during the free trial, the higher the
                    chance of <strong>conversion</strong> to paid subscription
                    and <strong>retention.</strong>
                  </p>

                  <p>
                    <strong>Key UX decisions:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>A vertical "climbing" path:</strong> to make
                      progress feel like an achievement, I designed a
                      bottom–to–top trail. Users start at the base of the
                      mountain and move upward as they complete tasks. This
                      linear path removes "choice paralysis" by showing the user
                      exactly what the next step is on their climb.
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
                      <strong>Master Buhdi (The AI Coach):</strong> I designed a
                      calming AI coach persona (Master Buhdi) to offer emotional
                      support and reduce the "failure shame" leading to
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
                    signals. Rather than just gathering data, I used these KPIs
                    to validate if we successfully communicated the value
                    propositions and prompted users to define their goal and
                    take first step toward action aka battling task paralysis.
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
                      metaphor for Quest Tab and added Activity Points rewarding
                      users for taking actions in the app, for example Purpose
                      Reflection exercise. These features – along with our
                      psychological aid cards – were designed to lower anxiety
                      and provide the immediate stimulation required to bypass
                      task paralysis.
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
                      screen → Strenghtening mountain metaphor by adding clearer
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
                    We anticipated this challenge: for a neurodivergent
                    audience, the struggle isn't starting—it’s staying
                    consistent. This data confirms that while our "Value-First"
                    onboarding works, our next phase must focus on building even
                    stronger long-term incentives to help users turn their
                    initial "Quest" momentum into a lasting habit.
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

                  <p>
                    <strong>Strategic insight: </strong>
                    Current design is successful at communicating value and
                    getting users started, but we need more incentives for users
                    to achieve their goals in the long term.
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
                      loop
                      muted
                      playsInline
                      controls
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
