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
      <div className="shane_tm_hero_case_study" id="designtrend-home">
        <div className="shane_tm_hero" id="home">
          {/* End .background */}

          <div className="container">
            <div className="content">
              <div
                className="shane_tm_title"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {/* <div className=".shane_tm_title">
              <span>UX/UI & Motion Designer </span>
              </div> */}
     <h3>Kalina Iwaszko</h3>
                <h4>UX/UI & Motion Designer</h4>
                <h1>
                  Bringing{" "}
                  <span style={{ textTransform: "lowercase" }}>ideas</span> to
                  life for web and mobile</h1>
                 
                  
              
           
              </div>
              <button
                className="shane_tm_button fade-in-delay"
                style={{
                  opacity: showButton ? 1 : 0,
                  transition: "opacity 0.8s ease",
                  marginTop: "0rem",

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
                <span className="button-text">See my work </span>
                {/* <span className="arrow-icon">↓</span> */}
              </button>
            </div>
            <div className="container">
              <div className="content">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/new_hero_illustration white_3cm.gif"
                    alt="hero illustration"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      maxHeight: "350px",
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End content */}
          <div>
            <div></div>
          </div>

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
