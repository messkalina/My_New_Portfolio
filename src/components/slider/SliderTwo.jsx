import React, { useState, useEffect } from "react";

const Slider = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1200);

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
      <div className="shane_tm_hero" id="home">
        <div className="container">
          <div
            className="content"
            style={{ paddingTop: isMobile ? "60px" : "90px" }}
          >
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/* <p
                style={{
                  fontSize: "0.8em",
                  color: "#6a6969",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  letterSpacing: "0.6px",
                  marginBottom: "10px",
                }}
              >
                Portfolio
              </p> */}
              <h3 style={{ fontWeight: "600" }}>
                Kalina Iwaszko <span>UX/UI & Motion Designer</span>
              </h3>
              <h1>
                Turning <span style={{ textTransform: "lowercase" }}>data</span>{" "}
                into <span style={{ textTransform: "lowercase" }}>smart</span>{" "}
                user experience
              </h1>
            </div>
            {!isMobile && (
              <>
                <button
                  className="shane_tm_button fade-in-delay"
                  style={{
                    opacity: showButton ? 1 : 0,
                    transition: "opacity 0.8s ease",
                    marginTop: "1rem",
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
                  <span className="button-text">See my Portfolio </span>
                </button>
                <a
                  href="#about"
                  className="tertiary-link-button fade-in-delay"
                  style={{
                    display: "inline-block",
                    marginTop: "0.5rem",
                    color: "#7C3AED", // brand violet
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    opacity: showButton ? 1 : 0,
                    transition: "opacity 0.8s ease",
                    border: "2px solid #7C3AED",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    marginLeft: "16px",
                  }}
                >
                  Learn more
                </a>
              </>
            )}
          </div>
          <div className="content" data-aos="fade-up" data-aos-duration="1200">
            <img
              src="/img/new_hero_illustration white_3cm.gif"
              alt="hero illustration"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "350px",
                display: "block",
                margin: "20px auto 0",
              }}
            />
            {isMobile && (
              <button
                className="shane_tm_button fade-in-delay"
                style={{
                  opacity: showButton ? 1 : 0,
                  transition: "opacity 0.8s ease",
                  marginTop: "1.5rem",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  backgroundColor: "transparent",
                  width: "100%",
                }}
                onClick={() => {
                  document.getElementById("portfolio").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="button-text">See selected work </span>
              </button>
            )}
          </div>
        </div>

        <div className="shane_tm_down loaded">
          <div className="line_wrapper">
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
