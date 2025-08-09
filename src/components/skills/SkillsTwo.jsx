import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="contact">
        <div className="shane_tm_skills"
        style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
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
              }}
            >
              {/* Skill 1 */}
              <div style={{ textAlign: "center", width: "150px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <img
                    src="/img/svg/browser-ui-svgrepo-com.svg"
                    alt="UX Design"
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <h4 style={{ margin: "0", fontSize: "18px" }}>UX Design</h4>
              </div>

              {/* Skill 2 */}
              <div style={{ textAlign: "center", width: "150px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <img
                    src="/img/svg/vector-svgrepo-com.svg"
                    alt="UI Design"
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <h4 style={{ margin: "0", fontSize: "18px" }}>UI Design</h4>
              </div>

              {/* Skill 3 */}
         

              {/* Skill 4 */}
              <div style={{ textAlign: "center", width: "150px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <img
                    src="/img/svg/animation-svgrepo-com.svg"
                    alt="Motion Design"
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <h4 style={{ margin: "0", fontSize: "18px" }}>Motion Design</h4>
              </div>
                   <div style={{ textAlign: "center", width: "150px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <img
                    src="/img/svg/laptop-web-development.svg"
                    alt="Frontend Development"
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <h4 style={{ margin: "0", fontSize: "18px" }}>Basic Frontend</h4>
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
