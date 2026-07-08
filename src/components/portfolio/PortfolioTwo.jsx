import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useNavigate, useLocation } from "react-router-dom";

const tabList = ["UX/UI Design", "Motion Graphics"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/Port_thumbnail_Buhdi.png",
        title: "Buhdi – Mindful ADHD Support",
        meta: "Gamifying a to-do list to help people get things done",
        portfolioLink: "/case-study/buhdi-app",
      },
        {
        img: "/img/portfolio/case-study/neptune thumbnail.png",
        title: "Clinical Screening Feature Design",
        meta: "Enabling Neurologists to identify advanced therapy candidates faster",
        portfolioLink: "/case-study/neptune-feature",
      },
      {
        img: "/img/portfolio/Port_thumbnail_orbit.png",
        title: "Orbit Health Website Redesign",
        meta: "Simplifying journey to the latest Parkinson’s care",
        portfolioLink: "/case-study/orbit-website",
      },
     
      {
        img: "/img/portfolio/case-study/Vet_hero_image03cm.png",
        title: "Veterinary Practice Website",
        meta: "Building automation and trust for a fast-launch website",
        portfolioLink: "/case-study/vet-website",
      },
       {
        img: "/img/portfolio/caspar.png",
        title: "Caspar Health Educational Videos",
        meta: "Boosting retention through video design",
                  
        portfolioLink: "/case-study/motion03",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/trivago2.png",
        title: "Trivago TV Ad",
        meta: "Motion graphics and post-production for Trivago’s national TV campaign",
        portfolioLink: "/case-study/motion05",
      },
      {
        img: "/img/portfolio/wolt5.png",
        title: "Social Media Video Ad",
        meta: "Mixed media animation for maximum impact in crowded social feeds",
        portfolioLink: "/case-study/motion02",
      },
      {
        img: "/img/portfolio/talon.png",
        title: "Social Media Video Ad",
        meta: "Story-driven motion graphics that cut through crowded social feeds",
        portfolioLink: "/case-study/motion04",
      },
      {
        img: "/img/portfolio/filmfest.png",
        title: "Euroshorts 2015 promo video",
        meta: "Homage to classic cinema through vintage footage and 2D animation",
        portfolioLink: "/case-study/motion06",
      },
    ],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "motion") setTabIndex(1);
    else setTabIndex(0);
  }, [location.search]);

  const handlePortfolioClick = (portfolioLink) => {
    if (portfolioLink.startsWith("http")) {
      window.open(portfolioLink, "_blank");
    } else {
      navigate(portfolioLink);
    }
  };

  return (
    <div className="shane_tm_section" id="portfolio">
      <div className="shane_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="shane_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Selected work</h3>
                </div>
              </div>
            </div>

            <div className="portfolio_filter">
              <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>

                <div className="portfolio_list has-effect">
                  <Gallery>
                    {tabListContent.map((tabContent, i) => (
                      <TabPanel key={i}>
                        <ul className="gallery_zoom">
                          {tabContent.porftoliItems.map((val, i) => (
                            <li
                              key={i}
                              data-aos="fade-right"
                              data-aos-duration="1200"
                            >
                              <div className="inner">
                                <Item
                                  original={val.img}
                                  thumbnail={val.img}
                                  width={1000}
                                  height={1000}
                                >
                                  {({ ref }) => (
                                    /* 
                                      WRAPPER START: 
                                      This div now contains BOTH the image and the text 
                                    */
                                    <div
                                      onClick={() => handlePortfolioClick(val.portfolioLink)}
                                      role="button"
                                      tabIndex={0}
                                      style={{ cursor: "pointer", outline: "none" }}
                                    >
                                      <div className="entry shane_tm_portfolio_animation_wrap">
                                        {val.video ? (
                                          <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              objectPosition: "20% center",
                                              display: "block",
                                            }}
                                          >
                                            <source src={val.video} type="video/mp4" />
                                            <img src={val.img} alt={val.title} ref={ref} />
                                          </video>
                                        ) : (
                                          <img
                                            src={val.img}
                                            alt={val.title}
                                            ref={ref}
                                            style={{
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              display: "block",
                                            }}
                                          />
                                        )}
                                      </div>

                                      {/* Descriptions are now inside the clickable div */}
                                      <div className="portfolio_title_always">
                                        <h6 style={{ margin: "24px 0 2px 0" }}>
                                          {val.title}
                                        </h6>
                                        <p>{val.meta}</p>
                                      </div>
                                    </div>
                                  )}
                                </Item>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                    ))}
                  </Gallery>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;