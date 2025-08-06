import React from "react";
import HomeTwo from "../views/all-home-version/HomeTwo";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

// Import case study components
import MyStoryCaseStudy from "../components/portfolio/case-studies/MyStoryCaseStudy";
import DesignTrendCaseStudy from "../components/portfolio/case-studies/DesignTrendCaseStudy";
import AnimationProjectCaseStudy from "../components/portfolio/case-studies/AnimationProjectCaseStudy";
import UnlimitixApp from "../components/portfolio/case-studies/UnlimitixApp";
import Motion01 from "../components/portfolio/case-studies/motion01";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTwo />} />

        {/* Case Study Routes */}
        <Route path="/case-study/orbit-website" element={<MyStoryCaseStudy />} />
        <Route path="/case-study/buhdi-app" element={<DesignTrendCaseStudy />} />
        <Route path="/case-study/vet-website" element={<AnimationProjectCaseStudy />} />
        <Route path="/case-study/unlimitix-app" element={<UnlimitixApp />} />
        <Route path="/case-study/motion01" element={<Motion01 />} />

        {/* Catch-all route for 404 Not Found */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
