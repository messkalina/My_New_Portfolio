import React from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="shane_tm_all_wrap">
      <Header />

      <div className="shane_tm_hero_case_study" id="privacy-policy-home">
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
              <h1>Privacy Policy</h1>
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
                  <h3>Overview</h3>
                  <p>
                    This Privacy Policy describes how your personal information
                    is collected, used, and shared when you visit this portfolio
                    website (the "Site").
                  </p>

                  <h3>Personal Information I Collect</h3>
                  <p>
                    When you visit the Site, I automatically collect certain
                    information about your device, including information about
                    your web browser, IP address, time zone, and some of the
                    cookies that are installed on your device.
                  </p>
                  <p>
                    Additionally, as you browse the Site, I collect information
                    about the individual web pages that you view, what websites
                    or search terms referred you to the Site, and information
                    about how you interact with the Site. I refer to this
                    automatically-collected information as "Device Information."
                  </p>

                  <h3>Contact Form Information</h3>
                  <p>
                    When you submit the contact form on my website, I collect
                    the information you provide, which may include your name,
                    email address, and any message content you share. This
                    information is used solely to respond to your inquiries.
                  </p>

                  <h3>How I Use Your Information</h3>
                  <p>
                    I use the Device Information that I collect to help me
                    screen for potential risk and fraud, and more generally to
                    improve and optimize my Site.
                  </p>
                  <p>
                    I use contact information you provide to respond to your
                    inquiries and to maintain a record of our communications.
                  </p>

                  <h3>Sharing Your Information</h3>
                  <p>
                    I do not share your Personal Information with third parties
                    except as described in this Privacy Policy or when I have
                    your permission.
                  </p>
                  <p>
                    I may share your Personal Information to comply with
                    applicable laws and regulations, to respond to a subpoena,
                    search warrant or other lawful request for information I
                    receive, or to otherwise protect my rights.
                  </p>

                  <h3>Data Retention</h3>
                  <p>
                    When you submit information through the contact form, I will
                    maintain that information for my records unless and until
                    you ask me to delete this information.
                  </p>

                  <h3>Your Rights</h3>
                  <p>
                    If you are a European resident, you have the right to access
                    personal information I hold about you and to ask that your
                    personal information be corrected, updated, or deleted. If
                    you would like to exercise this right, please contact me
                    through the contact information below.
                  </p>

                  <h3>Changes</h3>
                  <p>
                    I may update this privacy policy from time to time in order
                    to reflect, for example, changes to my practices or for
                    other operational, legal or regulatory reasons.
                  </p>

                  <h3>Contact Me</h3>
                  <p>
                    For more information about my privacy practices, if you have
                    questions, or if you would like to make a complaint, please
                    contact me by e-mail at{" "}
                    <a href="mailto:contact@kalinaiwaszko.com">
                      contact@kalinaiwaszko.com
                    </a>
                    .
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

export default PrivacyPolicy;
