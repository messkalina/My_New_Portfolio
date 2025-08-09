import React, { useState, useEffect, Button } from "react";
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
              <h1>Veterinary Practice Website</h1>
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
              Timeline: <span className="timeline-fine">April – May 2025</span>
            </p>
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
                  <p className="text">
                    Tierarztpraxis Leberberg is a modern veterinary practice in
                    Vienna. They needed their first-ever website to reflect
                    their professional yet warm personality, build client trust,
                    and make it easier for pet owners to contact and book
                    appointments.
                  </p>
                  <br />
                  <p>
                    I led this project end-to-end —{" "}
                    <strong>designing the UX/UI</strong> and fully{" "}
                    <strong>developing the website </strong> from scratch using
                    HTML, CSS, javascript and React js library. I didn’t use any
                    website editors or builders - a deliberate choice to deepen
                    my skills in web development and create a product where{" "}
                    <strong>design and code are tightly connected</strong>.
                  </p>
                </div>
                 <div
                  className="shane_tm_button"
                  style={{ marginTop: "32px" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="https://tierarzt-leberberg.at/" target="_blank" rel="noopener noreferrer">
                    See Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="animationproject-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>
                    Designing and Developing Effective Bussiness Website from
                    Scratch
                  </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The practice had no existing digital presence, so the site
                    had to be designed from the ground up. It needed to feel:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Local</strong> and <strong>trustworthy</strong>
                    </li>
                    <li>
                      Visually <strong>friendly, but professional</strong>
                    </li>
                    <li>
                      <strong>Modern, responsive</strong> yet lightweight and
                      intuitive
                    </li>
                  </ul>
                  <p>
                    It also had to clearly communicate services, introduce the
                    care team, and support mobile users—especially for
                    appointment inquiries.
                  </p>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/case-study/Home_Desktop.mp4"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    // onClick={() =>
                    //   handleImageClick(
                    //     "/img/portfolio/case-study/Home_Desktop.mp4"
                    //   )
                    // }
                    autoPlay
                    loop
                    muted
                    playsInline
                    // controls removed for background effect
                    poster="/img/portfolio/case-study/Home_Desktop.mp4" // Optional: show image before play
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Homepage</p>
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
                    src="/img/portfolio/case-study/Phone _mockup02.mp4"
                    className="clickable-image"
                    style={{ width: "100%"}}
                    // onClick={() =>
                    //   handleImageClick(
                    //     "/img/portfolio/case-study/Phone _mockup02.mp4"
                    //   )
                    // }
                    autoPlay
                    loop
                    muted
                    playsInline
                    // controls removed for background effect
                    poster="/img/portfolio/case-study/Phone _mockup02.mp4" // Optional: show image before play
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Mobile navigation</p>
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
                  <h3>Design and Development Aligned from Day One</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Using the clinic’s brand assets (logo, colors, tone), I
                    created a responsive, emotionally engaging site experience:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Designed the full UX and UI system in{" "}
                      <strong>Figma</strong>
                    </li>
                    <li>
                      Created <strong>high-fidelity mid-fi wireframes</strong>{" "}
                      and a clickable prototype for feedback
                    </li>
                    <li>
                      Developed custom <strong>motion design</strong> in the
                      homepage hero
                    </li>
                    <li>
                      Built the site in <strong>React + React-Bootstrap</strong>
                    </li>
                    <li>
                      Implemented <strong>SEO basics</strong> and{" "}
                      <strong>analytics</strong>
                    </li>
                    <li>
                      Used progressive disclosure to keep the site clear and
                      digestible
                    </li>
                  </ul>
                  <p>
                    This was also my first time delivering a full production
                    build in React for a real client—an experience that
                    sharpened both my frontend skills and my ability to debug
                    design decisions in context.
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
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Contributions</span>
                  <h3>From Design to Development</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>My key work included: </p>
                  <ul className="case-study-list">
                    <li>
                      Led the project from{" "}
                      <strong>discovery to deployment</strong>
                    </li>
                    <li>
                      Designed <strong>responsive</strong> UI/UX and built
                      interactive prototypes
                    </li>
                    <li>
                      <strong>Coded</strong> the site in <strong>React</strong>{" "}
                      without using web editors
                    </li>
                    <li>
                      Created custom <strong>motion design</strong> elements
                    </li>
                    <li>
                      Set up <strong>SEO</strong> and <strong>analytics</strong>{" "}
                      tracking
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Wireframessm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Wireframessm.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Wireframing in Figma</p>
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
                    src="/img/portfolio/case-study/Desktop_3_screens.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Desktop_3_screens.png"
                      )
                    }
                  />
               
                  <div className="image_caption">
                    <p>Desktop screens</p>
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
                  <span>Outcome</span>
                  <h3>A Playful, Professional Site That Clients Love</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The new website launched successfully and received
                    <strong> enthusiastic feedback</strong> from the
                    clinic—especially the animated hero section, which helped
                    visually reinforce their values. The design now enables
                    clear service communication and offers an intuitive
                    experience for both new and returning clients.
                  </p>
                </div>
                 <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="https://tierarzt-leberberg.at/" target="_blank" rel="noopener noreferrer">
                    See Live
                  </a>
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
                  <span>Takeaways</span>
                  <h3>Blending Design & Development for Impact</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    This project underscored the value of small design
                    details—like subtle motion—in shaping perception and trust.
                    More importantly,{" "}
                    <strong>building the product from scratch</strong> taught me
                    how design and development feed into each other, and gave me
                    a <strong>stronger process</strong> for aligning the two
                    from day one.
                  </p>
                </div>
            
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/contact_page_mobile2.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/contact_page_mobile2.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Contact form</p>
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

export default AnimationProjectCaseStudy;
