import React from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Impressum = () => {
  return (
    <div className="shane_tm_all_wrap">
      <Header />

      <div className="shane_tm_hero_case_study">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/" className="back_button">
                ← BACK
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>Impressum</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="container">
          <div
            className="hero_description"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "60px",
              }}
            >
              Last Updated:{" "}
              <span className="timeline-fine">August 9, 2025</span>
            </p>
          </div>
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right" style={{ width: "100%" }}>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Information According to § 5 TMG</h3>
                  <p>Kalina Iwaszko Rupprechtstr. 28 10317 Berlin Germany</p>

                  <h3>Contact</h3>
                  <p>Email: kalina.iwaszko@gmail.com</p>

                  <h3>Professional Information</h3>
                  <p>Professional Title: Digital Designer</p>

                  {/* <h3>EU Dispute Resolution</h3>
                  <p>
                    The European Commission provides a platform for online
                    dispute resolution (ODR):
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    . Our email address can be found in the Impressum above.
                  </p>

                  <h3>
                    Consumer Dispute Resolution/Universal Arbitration Board
                  </h3>
                  <p>
                    We are not willing or obliged to participate in dispute
                    resolution proceedings before a consumer arbitration board.
                  </p>

                  <h3>Liability for Contents</h3>
                  <p>
                    As a service provider, we are responsible for our own
                    contents on these pages according to § 7 paragraph 1 TMG.
                    However, according to §§ 8 to 10 TMG, we are not obligated
                    to monitor transmitted or stored foreign information or to
                    investigate circumstances that indicate illegal activity.
                  </p>

                  <h3>Liability for Links</h3>
                  <p>
                    Our offer contains links to external websites of third
                    parties, on whose contents we have no influence. Therefore,
                    we cannot assume any liability for these external contents.
                    The respective provider or operator of the pages is always
                    responsible for the contents of the linked pages. The linked
                    pages were checked for possible legal violations at the time
                    of linking. Illegal contents were not recognizable at the
                    time of linking.
                  </p> */}

                  <h3>Copyright</h3>
                  <p>
                    The contents and works created by the site operators on
                    these pages are subject to German copyright law. The
                    reproduction, processing, distribution, and any kind of
                    exploitation outside the limits of copyright require the
                    written consent of the respective author or creator.
                    Downloads and copies of this site are only permitted for
                    private, non-commercial use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impressum;
