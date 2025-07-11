import React from "react";
import { Link } from "react-router-dom";

const AnimationProjectCaseStudy = () => {
  return (
    <div className="shane_tm_section">
      <div className="shane_tm_case_study">
        <div className="container">
          <div className="case_study_nav">
            <Link to="/#portfolio" className="back_button">
              ← Back to Portfolio
            </Link>
          </div>

          <div className="case_study_hero">
            <div className="hero_content">
              <span className="category">Motion Design</span>
              <h1>Animation Project</h1>
              <p className="description">A dynamic motion design project showcasing smooth animations and interactive elements.</p>
            </div>
            <div className="hero_image">
              <img src="/img/portfolio/3.jpg" alt="Animation Project" />
            </div>
          </div>

          <div className="project_section">
            <h2>Project Overview</h2>
            <p>This animation project focuses on creating engaging motion graphics that enhance user experience through smooth transitions and interactive elements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationProjectCaseStudy;