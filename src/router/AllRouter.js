import React from "react";
import HomeTwo from "../views/all-home-version/HomeTwo";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

// Import case study components
import MyStoryCaseStudy from "../components/portfolio/case-studies/MyStoryCaseStudy";
import DesignTrendCaseStudy from "../components/portfolio/case-studies/DesignTrendCaseStudy";
import AnimationProjectCaseStudy from "../components/portfolio/case-studies/AnimationProjectCaseStudy";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTwo />} />

        {/* Case Study Routes */}
        <Route path="/case-study/my-story" element={<MyStoryCaseStudy />} />
        <Route path="/case-study/design-trend" element={<DesignTrendCaseStudy />} />
        <Route path="/case-study/animation-project" element={<AnimationProjectCaseStudy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
