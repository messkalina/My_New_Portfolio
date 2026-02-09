import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section" style={{ marginTop: "-100px" }}>
        <div className="shane_tm_skills"
        style={{ backgroundColor: "#fff" }}
        >
          <div className="container"
         data-aos="fade-up"
                    data-aos-duration="1200"
                   
          >
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h3>My Skills</h3>
            </div>

            {/* Skills Icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "40px",
                marginBottom: "32px"
              }}
            >
              {/* Skill 1 */}
              <div style={{ textAlign: "center", width: "150px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/browser-ui-svgrepo-com.svg"
                    alt="UX Design"
                    style={{ height: "42px", width: "42px" }}
                  />
                </div>
                <h6>UX Design</h6>
              </div>

              {/* Skill 2 */}
              <div style={{ textAlign: "center", width: "150px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/vector-svgrepo-com.svg"
                    alt="UI Design"
                     style={{ height: "42px", width: "42px" }}
                  />
                </div>
                <h6>UI Design</h6>
              </div>

              {/* Skill 3 */}
         

              {/* Skill 4 */}
              <div style={{ textAlign: "center", width: "150px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/animation-svgrepo-com.svg"
                    alt="Motion Design"
                     style={{ height: "42px", width: "42px" }}
                  />
                </div>
                <h6>Motion Design</h6>
              </div>
              <div style={{ textAlign: "center", width: "150px", marginBottom: "32px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src="/img/svg/laptop-web-development.svg"
                    alt="Frontend Development"
                    style={{ height: "42px", width: "42px" }}
                  />
                </div>
                <h6>Frontend Fundamentals</h6>
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
