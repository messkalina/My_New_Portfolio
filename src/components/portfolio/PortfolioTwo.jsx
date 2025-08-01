import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useNavigate } from "react-router-dom"; // Add this import

const tabList = ["UX/UI Design", "Motion Design", "All"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/case-study/Orbit_covr_2_pages.png",
        title: "Orbit Health Website Redesign",
        meta: "Designing Website for Complex Digital Products",
        portfolioLink: "/case-study/my-story",
      },
      {
        img: "/img/portfolio/2.jpg",
        title: "Buhdi – Mindful ADHD Support App",
        meta: " UX Challenges for ADHD Users",
        portfolioLink: "/case-study/design-trend",
      },
      {
        img: "/img/portfolio/3.jpg",
        title: "Unlimitix – AI Nutrition Coach",
        meta: " Beta version app redesign for better UX",
        portfolioLink: "/case-study/animation-project",
      },
      {
        img: "/img/portfolio/case-study/AnimationProject_1.png",
        title: "Veterinary Practice Website",
        meta: "End-to-end UX/UI & React Development",
        portfolioLink: "/case-study/unlimitix-app",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/3.jpg",
        title: "Animation Project",
        meta: "Motion Design",
        portfolioLink: "/case-study/animation-project",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/1.jpg",
        title: "My Story",
        meta: "UX/UI Design",
        portfolioLink: "/case-study/my-story",
      },
      {
        img: "/img/portfolio/2.jpg",
        title: "Design Trend",
        meta: "UX/UI Design",
        portfolioLink: "/case-study/design-trend",
      },
      {
        img: "/img/portfolio/3.jpg",
        title: "Animation Project",
        meta: "Motion Design",
        portfolioLink: "/case-study/animation-project",
      },
      {
        img: "/img/portfolio/case-study/AnimationProject_1.png",
        title: "Veterinary Practice Website",
        meta: "End-to-end UX/UI & React Development",
        portfolioLink: "/case-study/unlimitix-app",
      },
    ],
  },
];

const Portfolio = () => {
  const navigate = useNavigate(); // Add this hook

  const handlePortfolioClick = (portfolioLink) => {
    if (portfolioLink.startsWith("http")) {
      // External link - open in new tab
      window.open(portfolioLink, "_blank");
    } else {
      // Internal link - navigate using React Router
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
                  <h3>Creative Portfolio</h3>
                </div>
              </div>
            </div>
            {/* End shane_tm_title */}

            <div className="portfolio_filter">
              <Tabs>
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
                                        onClick={() => handlePortfolioClick(val.portfolioLink)}
                                        role="button"
                                        tabIndex={0}
                                      
                                      >
                                        <img
                                          src={val.img}
                                          alt="portfolio"
                                          ref={ref}
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            cursor: "pointer",
                                          }}
                                        />
                                      </div>
                                    )}
                                  </Item>
                                </div>
                                {/* Always show project name and meta below the image */}
                                <div className="portfolio_title_always">
                                  <h6 style={{ margin: "12px 0 0px 0", fontWeight: "600" }}>{val.title}</h6>
                                  <span style={{ color: "#888", fontSize: "0.95em" }}>{val.meta}</span>
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
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
