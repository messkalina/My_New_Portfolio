import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
              <div className="footer_content">
                <p>
                  &copy; {new Date().getFullYear()} by Kalina Iwaszko. All
                  rights reserved.
                </p>
                <div className="footer_links">
                  <Link to="/privacy-policy">Privacy Policy</Link>
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
