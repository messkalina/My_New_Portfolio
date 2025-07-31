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
                ← BACK
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>Buhdi – Mindful ADHD Support App</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="shane_tm_section">
        <div className="container">
          <div
            className="hero_description"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "60px",
              }}
            >
              Timeline:{" "}
              <span className="timeline-fine"> December 2024 – March 2025</span>
            </p>
          </div>
        </div>
      </div>

      {/* Example full-width image section */}
      {/* <div className="container">
        <div className="content">
          <div className="shane_tm_section">
            <div
              className="full-image-section"
              style={{ width: "100%" }}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="/img/portfolio/case-study/DesignTrend_wireframes.png"
                alt="Design Trend Wireframes"
              />
            </div>
          </div>
        </div>
      </div> */}

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
                  <p className="text" style={{ color: "#767676b9" }}>
                    Buhdi is a mindful, AI-powered task management app designed
                    for adults with ADHD. Traditional productivity tools often
                    fail neurodivergent users due to overwhelming interfaces,
                    rigid systems, and lack of emotional support. Buhdi offers a
                    flexible, gamified experience—guided by a calming AI
                    coach—to help users complete meaningful goals at their own
                    pace.
                  </p>
                  <br />
                  <p className="text" style={{ color: "#767676b9" }}>
                    I joined the project early in MVP development and worked closely with the founder to shape both the core product experience and branding. My goal was to design an experience that was not just functional, but emotionally supportive and truly tailored to ADHD users' needs.
                  </p>
                
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
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>The Challenge</span>
                  <h3>Turning Disengagement into Motivation
</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>Designing a digital experience for ADHD users meant overcoming specific behavioral barriers:</p>
                  <ul className="case-study-list">
                    <li>
                      Low <strong>motivation</strong> and difficulty with 
                      <strong>focus</strong>
                    </li>
                    <li>
                      Frustration with rigid or overwhelming to-do list apps
                    </li>
                  </ul>
                  <p>In addition, the app was offered behind a paywall with a free trial, which meant we had to clearly communicate the app’s value before users could test it—placing even greater importance on the onboarding flow.</p>
                <p>Our UX goals were to:</p>
                <ul className="case-study-list">
                  <li>
                    Create a compelling onboarding experience that builds trust and clarity before account creation
                  </li>
                  <li>
                    Differentiate Buhdi from other productivity tools through a unique brand and experience
                  </li>
                  <li>
                    Incorporate gamification elements to boost motivation
                  </li>
                </ul>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/DesignTrend_1.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/DesignTrend_1.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                    src="/img/portfolio/case-study/DesignTrend_2.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/DesignTrend_2.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                  <span>The Process</span>
                  <h3> A User-Centered Design Approach Rooted in Empathy</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>To deeply understand the target audience, I:</p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Created behavioral user scenarios</strong> to reflect real-world ADHD challenges
                    </li>
                    <li>
                      Conducted <strong>1:1 user interviews</strong> with first-time users to observe pain points and cognitive friction
                    </li>
                    <li>
                      <strong>Created user journey maps</strong> to visualize the end-to-end experience
                    </li>
                  </ul>
                  <p>The design was shaped by ideas from the founder, who was inspired by Acceptance and Commitment Therapy (ACT) and mindfulness principles. I worked to thoughtfully incorporate these concepts into the product’s flow and tone—ensuring the experience felt calming, supportive, and aligned with therapeutic practices.</p>
                <br />
                  <p>Users were guided by a gentle AI avatar, Master Buhdi, who helped them define and break down goals into manageable, values-based steps.</p>
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
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>UX Validation</span>
                  <h3>Validating and Improving the First-Time Journey</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>To validate the MVP and improve core flows, I designed and ran a structured user testing round focused on:</p>
                  <ul className="case-study-list">
                    <li>
                      <strong>First-time user experience</strong>
                    </li>
                    <li>
                      <strong>Onboarding content comprehension</strong>
                    </li>
                    <li>
                      <strong>Cognitive load during Quest setup</strong>
                    </li>
                  </ul>
                  <p>From testing insights, I identified friction in the original onboarding (too long, too text-heavy) and proposed a simplified, more linear flow that prioritized bite-sized interactions and visual clarity.</p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/DesignTrend_3.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/DesignTrend_3.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                    src="/img/portfolio/case-study/DesignTrend_4.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/DesignTrend_4.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                  <h3>Designing Motivation Through Structure and Story</h3>
                  <p>I designed Quest Mode, a guided task flow that breaks down goals into small, rewarding steps with visual progress, points, and mindfulness pauses—customized around therapeutic, values-based goals. I also created a value-focused onboarding experience and a cohesive brand system using calming visuals, Buddhist-inspired design, and a supportive AI coach persona to convey emotional clarity and purpose.</p>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>[Ideate & Prototype description goes here.]</p>
                  <ul className="case-study-list">
                    <li>
                      <strong>[Prototype 1]</strong>
                    </li>
                    <li>
                      <strong>[Prototype 2]</strong>
                    </li>
                    <li>
                      <strong>[Prototype 3]</strong>
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

      {/* Outcome Section */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Outcome</span>
                  <h3>Validated by Users, Live in the App Store</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>[Outcome summary goes here.]</p>
                  <ul className="case-study-list">
                    <li>The MVP launched on the App Store and secured its first paying users
                    
                    </li>
                    <li>
                      User testing confirmed that Quest Mode felt engaging, calming, and motivating
                    </li>
                    <li>
                      Onboarding was simplified based on feedback, improving clarity and reducing drop-off.
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/DesignTrend_5.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/DesignTrend_5.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
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
