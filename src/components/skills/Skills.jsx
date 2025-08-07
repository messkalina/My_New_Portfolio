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
              

                      <div className="right" style={{ position: "relative", minHeight: "350px" }}>
                      <div className="tokyo_progress" style={{ position: "absolute", bottom: "100px", left: "30%", transform: "translateX(-50%)" }}>
                        <img
                        src="/img/Contact_Animation_4.gif"
                        alt="Mailbox illustration"
                        style={{
                          width: "800px", minWidth: "800px", maxWidth: "none",
                          // maxWidth: "100%",
                          display: "block",
                        }}
                        />
                        
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
