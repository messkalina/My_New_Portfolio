import React from "react";
import Social from "../SocialTwo";

const Slider = () => {
  return (
    <div className="slider-two">
      <div className="shane_tm_hero" id="home" data-style="three">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/bg2.png)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="subheading_wrap">
              <div className="subheading">
                <h3>
                  Creating beautiful design for web and mobile
                  <span className="overlay_effect"></span>
                </h3>
              </div>
            </div>
            <div className="name_wrap">
              <h3>
                <span>Kalina</span>
                <br />
                Iwaszko<span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                UI/UX & Motion Designer
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}

            <div className="job_wrap sociallo">
              <span className="job">
                <Social />
                <span className="overlay_effect"></span>
              </span>
            </div>

            {/* Add subheading AFTER social media icons */}
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
