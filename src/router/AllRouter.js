import React from "react";
import HomeTwo from "../views/all-home-version/HomeTwo";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

// Import case study components
import MyStoryCaseStudy from "../components/portfolio/case-studies/OrbitWebsite";
import DesignTrendCaseStudy from "../components/portfolio/case-studies/BuhdiApp";
import AnimationProjectCaseStudy from "../components/portfolio/case-studies/VeterinaryWebsite";
import UnlimitixApp from "../components/portfolio/case-studies/UnlimitixApp";
import Animation01 from "../components/portfolio/case-studies/Animation01";
import Motion02 from "../components/portfolio/case-studies/motion02";
import Motion03 from "../components/portfolio/case-studies/motion03";
import Motion04 from "../components/portfolio/case-studies/motion04";
import Motion05 from "../components/portfolio/case-studies/motion05";
import Motion06 from "../components/portfolio/case-studies/motion06";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Impressum from "../components/Impressum";
   import RedirectToCV from "../components/RedirectToCV";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTwo />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />

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
        <Route path="/case-study/animation01" element={<Animation01 />} />
        <Route path="/case-study/motion02" element={<Motion02 />} />
        <Route path="/case-study/motion03" element={<Motion03 />} />
        <Route path="/case-study/motion04" element={<Motion04 />} />
        <Route path="/case-study/motion05" element={<Motion05 />} />
        <Route path="/case-study/motion06" element={<Motion06 />} />
     

<Route path="/cv" element={<RedirectToCV />} />
        
     

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
