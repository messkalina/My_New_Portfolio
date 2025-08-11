import React, { useState, useEffect } from "react";
import Social from "../SocialTwo";

const Slider = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1200); // 1200ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slider-two">
      <div className="shane_tm_hero" id="home" data-style="three">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(/img/new_hero_illustration.png)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="subheading_wrap">
              <div className="subheading">
                <h3>
                  Intuitive design with a creative twist
                  <span className="overlay_effect"></span>
                </h3>
              </div>
            </div>
            <div className="name_wrap">
              <h4>
                <span>Kalina</span>
                <br />
                <span>Iwaszko</span>
                {/* <span className="overlay_effect"></span> */}
              </h4>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                UI/UX & Motion Designer
                {/* <span className="overlay_effect"></span> */}
              </span>
            </div>
            {/* End designation */}

            {/* Button with fade-in effect */}
            <div
              className="shane_tm_button fade-in-delay"
              style={{
                opacity: showButton ? 1 : 0,
                transition: "opacity 0.8s ease",
                marginTop: "32px", // Add top margin here (adjust as needed)
              }}
            >
              <a href="#portfolio">See my work</a>
            </div>
            {/* ...existing code... */}
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
