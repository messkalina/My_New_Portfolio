import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social";

const Footer = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
              <div className="">
                {/* Invert icon colors using a wrapper with CSS filter */}
                <div style={{ filter: "invert(1)", marginBottom: "16px" }}>
                  <Social />
                </div>
                <div className="footer_links">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <span style={{ margin: "0px 16px" }}>|</span>
                  <Link to="/impressum">Impressum</Link>
                  <p style={{ marginTop: "16px" }}>
                    &copy; {new Date().getFullYear()} by Kalina Iwaszko. All
                    rights reserved.
                  </p>
                </div>
              </div>
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End shane_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
