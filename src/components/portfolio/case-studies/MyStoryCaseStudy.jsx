import React from "react";
import { Link } from "react-router-dom";

const MyStoryCaseStudy = () => {
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
              <h1>My Story</h1>
              <p className="description">A comprehensive UX/UI design project focused on storytelling through digital interfaces.</p>
            </div>
            <div className="hero_image">
              <img src="/img/portfolio/1.jpg" alt="My Story" />
            </div>
          </div>

          <div className="project_section">
            <h2>Project Overview</h2>
            <p>This project explores the intersection of personal narrative and user experience design. The goal was to create an intuitive interface that guides users through a compelling story while maintaining excellent usability principles.</p>
          </div>

          <div className="project_gallery">
            <h2>Project Gallery</h2>
            <div className="gallery_grid">
              <div className="gallery_item">
                <img src="/img/portfolio/case-study/my-story-1.jpg" alt="My Story Process" />
              </div>
              <div className="gallery_item">
                <img src="/img/portfolio/case-study/my-story-2.jpg" alt="My Story Wireframes" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStoryCaseStudy;