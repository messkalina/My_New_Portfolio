import React, { useState, useEffect } from "react";

const Slider = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1200);

    // Handle resize events to update mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="slider-two">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(/img/hero_animation_new.gif)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="subheading_wrap">
              <div className="subheading">
                <div className="name_wrap">
                  <h3>
                    Smart Design <br />
                    <span> with an edge </span>{" "}
                    <span className="overlay_effect"></span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Mobile-centered content wrapper */}
            <div className="mobile-centered-content">
              <div className="name_wrap">
                <h4
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: isMobile ? "#fff" : "black",
                    textTransform: "none",
                  }}
                  className="mobile-white-text"
                >
                  Kalina Iwaszko
                </h4>
              </div>

              <div
                className="job_wrap"
                style={{ marginTop: "-8px", color: "rgb(124, 58, 237)" }}
              >
                <span className="job">UI/UX & MOTION DESIGNER</span>
              </div>

              <button
                className="shane_tm_button fade-in-delay"
                style={{
                  opacity: showButton ? 1 : 0,
                  transition: "opacity 0.8s ease",

                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  document.getElementById("portfolio").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="button-text">See my work</span>
              </button>
            </div>
          </div>
          {/* End content */}

          <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
