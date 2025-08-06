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
        portfolioLink: "/case-study/orbit-website",
      },
      {
        img: "/img/portfolio/case-study/Buhdi_Coversm.png",
        title: "Buhdi – Mindful ADHD Support App",
        meta: " UX Challenges for ADHD Users",
        portfolioLink: "/case-study/buhdi-app",
      },
      {
        img: "/img/portfolio/case-study/un_Hero.png",
        title: "Unlimitix – AI Nutrition Coach",
        meta: " Beta Version App Redesign for Better UX",
        portfolioLink: "/case-study/unlimitix-app",
      },
      {
        img: "/img/portfolio/case-study/home_screen_team7.png",
        title: "Veterinary Practice Website",
        meta: "End-to-end UX/UI & Web Development",
        portfolioLink: "/case-study/vet-website",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/3.jpg",
        title: "Neptune Apps Demo",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion01",
      },
         {
        img: "/img/portfolio/3.jpg",
        title: "Social Media Video Ad",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion02",
      },
       {
        img: "/img/portfolio/3.jpg",
        title: "Animation Project",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion03",
      },
         {
        img: "/img/portfolio/3.jpg",
        title: "Explainer Videos",
        meta: "Motion Design",
        portfolioLink: "/case-study/motion04",
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
        meta: "End-to-end UX/UI & Web Development",
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
                                        onClick={() =>
                                          handlePortfolioClick(
                                            val.portfolioLink
                                          )
                                        }
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
                                  <h6
                                    style={{
                                      margin: "12px 0 0px 0",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {val.title}
                                  </h6>
                                  <span
                                    style={{
                                      color: "#888",
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
                <div style={{ textAlign: "center", margin: "0px 0 0 0" }}>
        <button
          className="white-fill-bg btn-outline"
           data-aos="fade-in"
                              data-aos-duration="1200"
                            
          // style={{
          //   padding: "12px px",
          //   fontSize: "1.1em",
        
          //   border: "2px solid #222",
          //   background: "transparent",
          //   color: "#222",
          //   cursor: "pointer",
          //   fontWeight: 600,
          //   transition: "background 0.2s, color 0.2s",
          // }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          CONTACT
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
