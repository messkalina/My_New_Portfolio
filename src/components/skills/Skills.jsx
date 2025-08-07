import React from "react";
import ContactForm from "../ContactForm";

const Skills = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div className="left">
                <div className="shane_tm_title">
                  <h3>Get in Touch</h3>
                  <ContactForm />
                </div>
              </div>
              {/* End .left */}

              <div className="right">
                <div className="tokyo_progress">
                  <img
                    src="/img/Contact_Animation_4.gif" // <-- Place your image in public/img/ and use this path
                    alt="Mailbox illustration"
                    style={{
                      width: "200%",
                      // maxWidth: 340,
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  {/* End .progress_inner */}
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default Skills;
