import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useNavigate, useLocation } from "react-router-dom"; // Add useLocation

// Change the tabList array
const tabList = ["UX/UI Design", "Animation"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/Port_thumbnail_vetpraxis.png", // Keep as fallback
        title: "Veterinary Practice Website",
        meta: "End-to-end UX/UI & Web Development",
        portfolioLink: "/case-study/vet-website",
        video: "/img/portfolio/case-study/Home_Desktop.mp4", // Add video property
      },

      {
        img: "/img/portfolio/Port_thumbnail_Buhdi.png",
        title: "Buhdi – Mindful ADHD Support App",
        meta: " UX Challenges for ADHD Users",
        portfolioLink: "/case-study/buhdi-app",
      },
      {
        img: "/img/portfolio/Port_thumbnail_orbit.png",
        title: "Orbit Health Website Redesign",
        meta: "Designing Website for Complex Digital Products",
        portfolioLink: "/case-study/orbit-website",
      },

      {
        img: "/img/portfolio/Port_thumbnail_Unlimitix.png",
        title: "Unlimitix – AI Nutrition Coach",
        meta: " Beta Version App Redesign for Better UX",
        portfolioLink: "/case-study/unlimitix-app",
      },
    ],
  },
  {
    porftoliItems: [
      // {
      //   img: "/img/portfolio/Neptune_walkthrough0.jpg",
      //   title: "Neptune Apps Demo",
      //   meta: "Motion Design",
      //   portfolioLink: "/case-study/animation01",
      // },
      {
        img: "/img/portfolio/woltad_1.png",
        title: "Social Media Video Ad",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion02",
      },
      {
        img: "/img/portfolio/caspar.png",
        title: "Explainer Videos",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion03",
      },
      {
        img: "/img/portfolio/talon.png",
        title: "Social Media Video Ad",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion04",
      },
      {
        img: "/img/portfolio/trivago2.png",
        title: "Trivago TV Ad",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion05",
      },
      {
        img: "/img/portfolio/filmfest.png",
        title: "Euroshorts 2015 Video Promo",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion06",
      },
    ],
  },
  // Remove the third object (All tab)
];

const Portfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);

  // Set tab based on URL query
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
                  <h3>Selected works</h3>
                </div>
              </div>
            </div>
            {/* End shane_tm_title */}

            <div className="portfolio_filter">
              <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}

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
                              data-aos-delay={val.delayAnimation}
                            >
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <Item
                                    original={val.img}
                                    thumbnail={val.img}
                                    width={1000}
                                    height={1000}
                                  >
                                    {({ ref, open }) => (
                                      <div
                                        onClick={() =>
                                          handlePortfolioClick(
                                            val.portfolioLink
                                          )
                                        }
                                        role="button"
                                        tabIndex={0}
                                      >
                                        {val.video ? (
                                          <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover", // Changed from "cover" to show top left corner
                                              objectPosition: "20% center", // Explicitly position the video
                                              display: "block",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <source
                                              src={val.video}
                                              type="video/mp4"
                                            />
                                            <img
                                              src={val.img}
                                              alt={val.title}
                                              ref={ref}
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "fill", // Match the video style
                                                objectPosition: "top left",
                                                display: "block",
                                              }}
                                            />
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
                                              cursor: "pointer",
                                            }}
                                          />
                                        )}
                                      </div>
                                    )}
                                  </Item>
                                </div>
                                {/* Always show project name and meta below the image */}
                                <div className="portfolio_title_always">
                                  <h5
                                    style={{
                                      margin: "24px 0 0px 0",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {val.title}
                                  </h5>
                                  <span
                                    style={{
                                      color: "#4749ad",
                                      fontSize: "0.95em",
                                    }}
                                  >
                                    {val.meta}
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                    ))}
                  </Gallery>
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
                <div style={{ textAlign: "center", margin: "32px 0 0 0" }}>
                  <button
                    className="shane_tm_button fade-in-delay"
                    style={{
                      opacity: 1,
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      backgroundColor: "transparent",
                    }}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="button-text">Contact</span>
                  </button>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* Add Contact button below portfolio */}
    </div>
  );
};

export default Portfolio;
