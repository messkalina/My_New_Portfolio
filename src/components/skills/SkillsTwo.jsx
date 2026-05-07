import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills"
        style={{ backgroundColor: "#f9f9f9" }}
        >
          <div className="container"
         data-aos="fade-up"
                    data-aos-duration="1200"
                   
          >
            <div style={{ textAlign: "center", marginBottom: "80px"}}>
              <h3>My Skills</h3>
            </div>

            {/* Skills Icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "32px"
              }}
            >
              {/* Skill 1 */}
              <div style={{ textAlign: "center", width: "200px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/UX_icon.svg"
                    alt="UX Design"
                     style={{ height: "84px", width: "84px", border: "1px solid #000", borderRadius: "8px", padding: "12px" }}
                  />
                </div>
                <div className="portfolio-meta-description">
               UX Design
                </div>
                <div className="icon_label" >Turning insights into intuitive solutions.</div>
              </div>

              {/* Skill 2 */}
              <div style={{ textAlign: "center", width: "200px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/UI_icon.svg"
                    alt="UI Design"
                     style={{ height: "84px", width: "84px", border: "1px solid #000", borderRadius: "8px", padding: "12px" }}
                  />
                </div>
                <div className="portfolio-meta-description">
            UI Design
                </div>
                <div className="icon_label" >Creating compeling interfaces.</div>
              </div>

              {/* Skill 3 */}
         

              {/* Skill 4 */}
              <div style={{ textAlign: "center", width: "200px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/motion_icon.svg"
                    alt="Motion Design"
                     style={{ height: "84px", width: "84px", border: "1px solid #000", borderRadius: "8px", padding: "12px" }}
                  />
                </div>
                <div className="portfolio-meta-description">
                Motion Design
                </div>
                <div className="icon_label" >Adding animation for more engagement and meaning.</div>
              </div>
              <div style={{ textAlign: "center", width: "200px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/Dev.svg"
                    alt="Frontend Development"
                    style={{ height: "84px", width: "84px", border: "1px solid #000", borderRadius: "8px", padding: "12px" }}
                  />
                </div>
                <div className="portfolio-meta-description">
                Frontend Fundamentals
                
                </div>
                <div className="icon_label" >Designing and building for seamless delivery.</div>
              </div>

            </div>
          </div>
          {/* End .container */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
