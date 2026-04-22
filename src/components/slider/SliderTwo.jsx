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
      <div className="shane_tm_hero" id="home" data-style="one">
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
              
              
              
              <h1>Bringing <span style={{ textTransform:"lowercase" }}>ideas</span> to live<br />for web and mobile</h1>
              <h3>Kalina Iwaszko</h3>
              <h4>UX/UI & Motion Designer</h4>
              
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
                <span className="button-text">See my work </span>
                {/* <span className="arrow-icon">↓</span> */}
                
              </button>
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
