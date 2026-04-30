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
              <Link to="/case-study/vet-website" className="back_button">
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
                <h1>Boosting retention with video design</h1>
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
              <video
                src="/img/portfolio/stylesframes/caspar/Anxiety_wiederholungcm.mp4"
                style={{ width: "100%" }}
                autoPlay
                loop
                muted
                playsInline
                controls
                poster="/img/portfolio/stylesframes/caspar/Anxiety_wiederholungcm.mp4"
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
                            surgery or managing chronic conditions. They provide
                            software and medical support for evidence-based
                            digital prevention, rehabilitation, and aftercare.
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
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>
                    Decreasing in-app drop-off rates of information-heavy
                    educational videos
                  </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    When I joined Caspar Health, their video content was
                    functional but particularly user-friendly: long and
                    unengaging medical lectures that caused viewers to drop off
                    early. My goal was to produce video content that would
                    significantly improve user retention and motivation. I focused on
                    creating shorter, more engaging videos with a mix of
                    live-action and motion graphics, while also incorporating
                    positive, encouraging messaging to motivate users and create
                    a more supportive learning environment. 
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
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/stylesframes/caspar/old_framescm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/caspar/old_framescm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Frames from the video content before I joined Caspar
                      Health. Long and visually generic medical lectures that
                      caused viewers to drop off early.
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
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/stylesframes/caspar/Anxiety_live_graphicbl_2sm.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    poster="/img/portfolio/stylesframes/caspar/Anxiety_live_graphicbl_2sm.mp4"
                  />
                  <div className="image_caption">
                    <p>
                      Frames from the newly designedvideo content. Shorter, more
                      engaging videos with a mix of live-action and motion
                      graphics that significantly improved user retention and
                      motivation. Speaker blurred for legal reasons.
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
                    improving user retention and motivation through content
                    design. Key strategies included:
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
                      <strong>Hybrid content production model:</strong> Filming
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
                      src="https://www.youtube.com/embed/9F-EWAQiF8g"
                      title="Explainer Videos"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ maxWidth: "100%", borderRadius: "2px" }}
                    ></iframe>
                  </div>
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
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Design strategy</span>
                  <h3> Test, iterate, test</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The UX researcher tested both content types — animated vs.
                    live- action — with users. Results showed:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Users preferred live-action videos for authenticity and
                      emotional connection.
                    </li>
                    <li>
                      Viewer preference correlated with the speaker’s persona —
                      older, empathetic female speakers received higher
                      engagement scores than younger, “perfect” looking hosts.
                    </li>
                    <li>
                      These findings helped us define new casting and content
                      guidelines to ensure ongoing viewer engagement.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/stylesframes/caspar/caspar_exercises.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/caspar/caspar_exercises.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
Acting as a creative producer, I was responsible for designing the set and art direction for the video content. Since the previous video style applied clean, minimalistic style that was not performing well in UX research, we shifted towards a more relatable and diverse representation of exercise models to better connect with the target audience. I also developed a warmer, more inviting color palette and set design to create a more supportive learning environment.
                    </p>
                  </div>
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
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/stylesframes/caspar/Caspar_Health_before.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/caspar/Caspar_Health_before.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Metrics showed low completion rates and high churn of the viewership of the original video content. This was a key motivator for redesigning visual and content strategy to better align with user behavior and preferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/stylesframes/caspar/Caspar_Health_after.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/caspar/Caspar_Health_after.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      As Content Production team we put a strong emphasis on testing and iteration. I worked closely with a UX researcher to test different content formats and styles with users, and iterated based on feedback to optimize for engagement and retention.
                    </p>
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
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/stylesframes/caspar/Nutrition_Log_videocm.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/stylesframes/caspar/Nutrition_Log_videocm.mp4"
                  />
                  {/* <div className="image_caption"> */}
                  {/* <p>
                      Client testimonial praising the aesthetic and ease of use.
                    </p> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Impact</span>
                  <h3>Video design influences user engagement</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>The final video content strategy delivered:</p>
                  <ul className="case-study-list">
                    <li>
                      Significant{" "}
                      <string className="highlight_label">increase</string> in{" "}
                      <string className="highlight_label">
                        user watch time
                      </string>{" "}
                      and{" "}
                      <string className="highlight_label">
                        repeat sessions.
                      </string>
                    </li>
                    <li>
                      <string className="highlight_label">
                        Positive feedback{" "}
                      </string>
                      from patients and medical staff for clarity and
                      motivation.
                    </li>
                    <li>
                      <string className="highlight_label">
                        Reduced production time
                      </string>{" "}
                      per video.
                    </li>
                  </ul>
                  <p>
                    The new video format significantly improved user engagement
                    and retention, contributing to the overall success of the
                    Caspar Health app and its mission to support patients in
                    their recovery journeys.
                  </p>
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
              to="/case-study/vet-website"
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

export default Motion03;
