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
import Motion02 from "../components/portfolio/case-studies/motion02";
import Motion03 from "../components/portfolio/case-studies/motion03";
import Motion04 from "../components/portfolio/case-studies/motion04";
import Motion05 from "../components/portfolio/case-studies/motion05"; 
import Motion06 from "../components/portfolio/case-studies/motion06"; 
const AllRouter = () => {
  return (
    <>  
      <Routes>
        <Route path="/" element={<HomeTwo />} />

        {/* Case Study Routes */}
        <Route
          path="/case-study/orbit-website"
          element={<MyStoryCaseStudy />}
        />
        <Route
          path="/case-study/buhdi-app"
          element={<DesignTrendCaseStudy />}
        />
        <Route
          path="/case-study/vet-website"
          element={<AnimationProjectCaseStudy />}
        />
        <Route path="/case-study/unlimitix-app" element={<UnlimitixApp />} />
        <Route path="/case-study/motion01" element={<Motion01 />} />
        <Route path="/case-study/motion02" element={<Motion02 />} />
        <Route path="/case-study/motion03" element={<Motion03 />} /> 
        <Route path="/case-study/motion04" element={<Motion04 />} />
        <Route path="/case-study/motion05" element={<Motion05 />} />
        <Route path="/case-study/motion06" element={<Motion06 />} />

        {/* Catch-all route for 404 Not Found */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
