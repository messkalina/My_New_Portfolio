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
              <h4>UX/UI & Motion Designer</h4>
              <h5>Kalina Iwaszko</h5>
              {/* <h6>Smart design with an edge</h6> */}
              <h1>Bringing ideas to live for web and mobile</h1>
              
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
