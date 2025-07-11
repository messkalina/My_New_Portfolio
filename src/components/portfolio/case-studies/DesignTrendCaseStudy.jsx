import React from "react";
import { Link } from "react-router-dom";

const DesignTrendCaseStudy = () => {
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
              <span className="category">UX/UI Design</span>
              <h1>Design Trend</h1>
              <p className="description">An exploration of current design trends and their implementation in modern web interfaces.</p>
            </div>
            <div className="hero_image">
              <img src="/img/portfolio/2.jpg" alt="Design Trend" />
            </div>
          </div>

          <div className="project_section">
            <h2>Project Overview</h2>
            <p>This project aimed to identify and implement cutting-edge design trends while maintaining usability and accessibility standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTrendCaseStudy;