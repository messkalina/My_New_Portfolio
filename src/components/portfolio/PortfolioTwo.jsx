import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useNavigate } from "react-router-dom"; // Add this import

const tabList = ["UX/UI Design", "Motion Design", "All"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/1.jpg",
        title: "My Story",
        meta: "UX/UI Design",
        portfolioLink: "/case-study/my-story", // Changed from Instagram link
      },
      {
        img: "/img/portfolio/2.jpg",
        title: "Design Trend",
        meta: "UX/UI Design",
        portfolioLink: "/case-study/design-trend", // Changed from Dribbble link
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/3.jpg",
        title: "Animation Project",
        meta: "Motion Design",
        portfolioLink: "/case-study/animation-project", // Changed from Behance link
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/1.jpg",
        title: "My Story",
        meta: "UX/UI Design",
        portfolioLink: "/case-study/my-story", // Changed
      },
      {
        img: "/img/portfolio/2.jpg",
        title: "Design Trend",
        meta: "UX/UI Design",
        portfolioLink: "/case-study/design-trend", // Changed
      },
      {
        img: "/img/portfolio/3.jpg",
        title: "Animation Project",
        meta: "Motion Design",
        portfolioLink: "/case-study/animation-project", // Changed
      },
      {
        img: "/img/portfolio/14.jpg",
        title: "Soft Cream",
        meta: "Photography",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/22.jpg",
        title: "Shane Design",
        meta: "Design",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/7.jpg",
        title: " Sweet Cherry",
        meta: "Photography",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/3.jpg",
        title: "Behance Shoot",
        meta: "Branding",
        portfolioLink: "https://www.behance.net/ib-themes",
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
                                      <img
                                        src={val.img}
                                        alt="portfolio"
                                        role="button"
                                        ref={ref}
                                        onClick={() =>
                                          handlePortfolioClick(
                                            val.portfolioLink
                                          )
                                        } // Change this line
                                      />
                                    )}
                                  </Item>
                                </div>
                                <div className="mobile_title">
                                  <h3>
                                    <a
                                      href={val.portfolioLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {val.title}
                                    </a>
                                  </h3>
                                  <span>{val.meta}</span>
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
