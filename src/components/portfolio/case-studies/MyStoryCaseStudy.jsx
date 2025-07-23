import React from "react";
import { Link } from "react-router-dom";

const MyStoryCaseStudy = () => {
  return (
    <div className="shane_tm_all_wrap">
      {/* Back Navigation */}
      <div className="shane_tm_topbar">
        <div className="topbar_inner">
          <div className="logo">
            <Link to="/#portfolio" className="back_button">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="shane_tm_hero_case_study" id="home">
        <div className="container">
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <p>
                <span>Project Overview</span>
              </p>
              <h1>Creating Digital Stories</h1>
            </div>

            <div className="hero_description">
              <div className="top">
                <p className="text">
                  A comprehensive UX/UI design project focused on storytelling
                  through digital interfaces, creating an immersive narrative
                  experience that guides users through personal storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview Section - Image left, Text right */}
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/case-study/2.jpg)",
                    }}
                  ></div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Initial concept sketches and user journey mapping for the
                      storytelling platform
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
                  <span>Project Overview</span>
                  <h3>Creating Digital Stories</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    This project explores the intersection of personal narrative
                    and user experience design. The challenge was to create an
                    intuitive interface that guides users through compelling
                    stories while maintaining excellent usability principles.
                  </p>
                  <p>
                    The primary goal was to develop a platform where users could
                    share their personal experiences in an engaging, interactive
                    format that combines visual storytelling with seamless
                    navigation.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="#research">View Research Process</a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      {/* Research Section - Text left, Image right */}
      <div className="shane_tm_section" id="research">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Research Phase</span>
                  <h3>Understanding User Needs</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    We conducted extensive user research to understand how
                    people consume and share personal stories online. Through
                    interviews with 25 participants, we discovered key pain
                    points in existing storytelling platforms.
                  </p>
                  <p>
                    The research revealed that users wanted more control over
                    their narrative flow, better integration of multimedia
                    elements, and clearer visual hierarchy to guide readers
                    through their stories.
                  </p>
                  <p>
                    Based on these insights, we developed user personas and
                    journey maps that would inform our design decisions
                    throughout the project lifecycle.
                  </p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/portfolio/1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/case-study/3.jpg)",
                    }}
                  ></div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      User interview sessions and persona development workshop
                      results
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
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/case-study/4.jpg)",
                    }}
                  ></div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Low-fidelity wireframes showing information architecture
                      and user flow progression
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
                  <span>Design Process</span>
                  <h3>From Wireframes to High-Fidelity</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The design process began with low-fidelity wireframes that
                    focused on information architecture and user flow. We tested
                    these early concepts with users to validate our approach
                    before moving to visual design.
                  </p>
                  <p>
                    Multiple iterations were created, each building upon user
                    feedback and usability testing results. The final design
                    features a clean, minimalist aesthetic that puts the user's
                    story at the center of attention.
                  </p>
                  <p>
                    Typography plays a crucial role in the design, with
                    carefully selected typefaces that enhance readability while
                    maintaining visual interest throughout long-form content.
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
                  <span>Visual Design</span>
                  <h3>Creating Emotional Connection</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The visual design system was crafted to evoke emotion and
                    create a strong connection between the storyteller and their
                    audience. We used a warm color palette and subtle animations
                    to enhance the reading experience.
                  </p>
                  <p>
                    Interactive elements were designed to feel natural and
                    intuitive, with hover states and transitions that provide
                    clear feedback without overwhelming the content.
                  </p>
                  <p>
                    The layout system is fully responsive, ensuring that stories
                    look beautiful and remain readable across all device sizes,
                    from mobile phones to large desktop displays.
                  </p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/portfolio/1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/case-study/5.jpg)",
                    }}
                  ></div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      High-fidelity mockups showcasing the final color palette
                      and typography system
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
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/case-study/6.jpg)",
                    }}
                  ></div>
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                      Analytics dashboard showing improved user engagement and
                      story completion rates
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
                  <span>Results & Impact</span>
                  <h3>Measuring Success</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The final product exceeded our initial success metrics, with
                    user engagement increasing by 150% compared to previous
                    storytelling platforms. Time spent reading stories increased
                    significantly, indicating improved user experience.
                  </p>
                  <p>
                    Post-launch surveys showed that 89% of users found the new
                    interface more intuitive and engaging than existing
                    alternatives. The clear visual hierarchy and improved
                    navigation resulted in better story completion rates.
                  </p>
                  <p>
                    This project demonstrates how thoughtful UX design can
                    transform the way people share and consume personal
                    narratives in digital spaces.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Link to="/#portfolio">View More Projects</Link>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </div>
  );
};

export default MyStoryCaseStudy;
