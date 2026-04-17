import React, { useState, useEffect } from "react";
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
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/buhdi-app"
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
              <h1>Delivering fast launch and strategic growth</h1>
              <h4>Veterinary Practise Website</h4>
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
                src="/img/portfolio/case-study/Tierpraxis_Desktop_website_scroll.mp4"
                style={{ width: "100%" }}
                autoPlay
                loop
                muted
                playsInline
                poster="/img/portfolio/case-study/Tierpraxis_Desktop_website_scroll.mp4"
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
                            Tierpraxis Lebensberg is a veterinary practice in
                            Vienna, Austria that launched its digital presence
                            alongside its physical opening. <br />
                            <br />I adopted a two-phase delivery strategy to
                            balance business velocity with long-term growth.
                            First I designed an Minimal Viable Product (MVP)
                            version of the website to meet the immediate launch
                            deadline and drive conversions through an automated
                            booking channel. In the second iteration I focused
                            on expressing its business values of trust,
                            credibility, and warmth.
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
                                January – February 2025
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
                              Product Designer,Motion Designer, Front-end
                              Developer
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
                              Figma, React.js, CSS, Adobe After Effects, Relume
                              AI, Cursor AI
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

      {/* Challenge section */}
      <div className="shane_tm_section" id="animationproject-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <video
                    src="/img/portfolio/case-study/Phone _mockup02.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="image_caption">
                    <p>
                      The first version of the website (MVP) focused on user flow to online-booking to mitigate administrative load from day one. Industry benchmarks show that manual scheduling can consume
                    up to 40% of a receptionist's day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>Balancing speed and quality of project</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Launching a new veterinary clinic comes with a tight deadline. The goal was to build a professional website that was ready to go the moment the doors opened. We needed a site that introduced the medical team and services clearly, but most importantly, handled the "admin heavy lifting."
                  </p>
                  <p
                    style={{
                      marginTop: "18px",
                    }}
                  >
                    <strong>Requirements:</strong>
                  </p>

                  <ul className="case-study-list" style={{ marginTop: "10px" }}>
                    <li>
                      <strong>Saving time through automation:</strong> Moving as many bookings as possible to a digital system so the team could focus on the animals, not the phone.
                    </li>
                    <li>
                      <strong>Mobile-first experience for local search:</strong> Over 70% of local traffic comes from "near me" searches on phones, so the mobile experience had to be seamless.
                    </li>
                    <li>
                      <strong>Values:</strong> The website needed to feel like a trusted neighbor—warm and welcoming for pet owners, but professional enough to show they are medical experts.
                    </li>
                    <li>
                      <strong>Simple to manage:</strong> Tech must be scalable and easy to maintain.

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
                      <span className="button-text">Jump to Outcome</span>
                    </a>
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
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Solution</span>
                  <h3> Lean UX + the "Builder" Approach</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                
                  <ul className="case-study-list">
                    <li>
                      <strong>Iterative Workflow:</strong> I focused on shipping a
                    functional "Minimum Viable Product" to quickly get the
                    business website live and validate it via user testing. In the next itaration I focused on communicating brand values of trust and warmth. The
                    goal was to meet bussiness requirements, gather insights and
                    move to design iterations that then would be easily
                    implemented by external developer.
                    </li>
                    <li>
                      <strong>Community Testing:</strong> I validated the MVP
                      via the Career Foundry and Google UX communities.
                    </li>
                    <li>
                      <strong>Custom Build:</strong> I coded the website in
                      React.js bypassing subscription-based website builders
                      such as Wix or heavy Wordpress CMS.The site was deployed
                      via Netlify, ensuring a cost-effective and
                      high-performance hosting solution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_Design_Iterations_sm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_Design_Iterations_sm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      1. Website reference that client provided; 2. MVP version;
                      3. Second iteration of the design.
                      <br />
                      Since user testing revealed the MVP felt too "clinical"
                      and cold I moved toward a warmer, high-fidelity color
                      palette and more sophisticated typographic choices in the
                      refinement phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Process Section */}
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
                  <span>Process</span>
                  <h3>The AI-powered workflow for effective delivery</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Instead of starting from a blank canvas I used an
                    AI-powered workflow to move from client brief to a Minimal
                    Viable Product (MVP) in a quick, efficient way. The goal was
                    to validate the design quickly via user testing and moving
                    to iterations.
                  </p>
                  
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/vet_visual_identity-cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    // style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/vet_visual_identity-cm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Style Guide was designed to match the aesthetic and
                      branding of the practise. My initial choice was a cool
                      color pallette based on the brand emerald color. In the
                      second iteration I added an orange accent color that
                      visual pop and a touch of warmth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content" style={{ marginTop: "5em" }}>
              <div>
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="App Screens"
                  />
                  <div className="image_caption">
                    <p>
                      I was able to move from discovery to production quickly
                      thanks to an AI-accelerated workflow, ensuring the
                      business could operate with high efficiency from the
                      start. I used Relume AI platform for creating and ideating
                      website site map and structure and for rapid wireframing
                      design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Section */}
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
                  <h3>Data-Backed Design</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I validated the MVP through two rounds of testing to
                    identify friction points and emotional resonance.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Round 1 (Functionality):</strong> Tested with
                      peers in the Career Foundry and Google UX communities.
                      Users flagged minor mobile responsiveness issues which
                      were fixed before the launch.
                    </li>
                    <li>
                      <strong>Round 2 (Desirability):</strong> Testing revealed
                      the MVP felt "clinical." This insight drove the decision
                      to move toward a warmer, high-fidelity color palette and
                      more sophisticated typographic choices.
                    </li>
                  </ul>
                  <p>
                    <strong>The result: 100%</strong> of testers successfully
                    navigated to the Online Booking within 5 seconds, validating
                    the "Speed-to-Action" goal.
                  </p>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_final_screens_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_final_screens_cm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Mobile usability testing revealed friction points in
                      navigation and responsiveness which were solved in the
                      second iteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Refinement Section */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                        src="/img/portfolio/case-study/Vet_Mobile_Terminbuchungsm.mp4"
                        style={{
                          width: "100%",
                          maxHeight: "80vh",
                          objectFit: "contain",
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="image_caption">
                        <p>
                          <strong>Main user flow</strong> leads visitors to an
                          automated booking system to save time. By pairing this
                          with a video tour of the practice, we made the
                          experience feel more personal and trustworthy, leading
                          to a higher number of confirmed appointments.{" "}
                        </p>
                      </div>
                </div>
              </div>

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Refinement</span>
                  <h3>Iterating for Human Connection</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Once the MVP was live and receiving positive feedback, I moved to a
                    high-fidelity iteration to maximize "the pop factor" and
                    trust.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Color Palette:</strong> I evolved the palette from a simple Green
                      (Primary)/ White (neutral) to a more sophisticated Green
                      (Primary), Orange (Action/CTA) and pastel gradients to
                      balance authority with friendliness and less steryle look.
                    </li>
                    <li>
                      <strong>Social Proof:</strong> Integrated Google Review widgets and
                      testimonials to capitalize on the practice’s early
                      success.
                    </li>
                    <li>
                      <strong>Art Direction:</strong> I provided creative direction for new
                      photography and a video tour to ensure the digital space
                      felt as premium as the physical venue.
                    </li>
                  </ul>
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
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Impact</span>
                  <h3>From MVP to growth</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The project moved beyond a foundational MVP to become high-converting digital presence.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>
                        {" "}
                        <string className="highlight">-40%</string>
                      </strong>{" "}
                      <string className="highlight_label">
                        Administrative Risk
                      </string>{" "}
                      Mitigated potential receptionist workload by automating
                      appointment scheduling.
                    </li>
                    <li>
                      <strong>
                        {" "}
                        <string className="highlight">+35%</string>
                      </strong>{" "}
                      <string className="highlight_label">
                        Customer Conversion Lift{" "}
                      </string>{" "}
                      Achieved after integrating social proof (Google Rating
                      Score and Google Reviews widgets).
                    </li>
                    <li>
                      <strong>
                        <string className="highlight">1.8/7 </string>
                      </strong>{" "}
                      <string className="highlight_label">
                        Customer Effort Score
                      </string>{" "}
                      Users reported high "Ease of Use," making digital booking
                      faster than a phone call.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Testimonial.png"
                    style={{ width: "100%" }}
                    alt="Client Testimonial"
                  />
                  <div className="image_caption">
                    {/* <p>
                      Client testimonial praising the aesthetic and ease of use.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation and Footer */}
      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Link to="/#portfolio" className="back_button">
              ← PORTFOLIO / UX/UI PROJECTS
            </Link>
            <Link
              to="/case-study/buhdi-app"
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
            alt="Full View"
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
