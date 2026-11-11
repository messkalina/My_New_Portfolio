import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const PROTOTYPES = {
  desktop: {
    link: "https://www.figma.com/proto/lnr4Ifju2ibh70Ovj7JpNH/Lebi-Website?node-id=12508-603&viewport=52%2C341%2C0.13&t=kmQ4A1C0ltUppTB1-9&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12508%3A603&show-proto-sidebar=1",
    embed:
      "https://embed.figma.com/proto/lnr4Ifju2ibh70Ovj7JpNH/Lebi-Website?node-id=12508-603&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12508%3A603&show-proto-sidebar=0&embed-host=share",
  },
  mobile: {
    link: "https://www.figma.com/proto/lnr4Ifju2ibh70Ovj7JpNH/Lebi-Website?node-id=12595-4931&viewport=52%2C341%2C0.13&t=kmQ4A1C0ltUppTB1-9&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12595%3A4931&show-proto-sidebar=1",
    embed:
      "https://embed.figma.com/proto/lnr4Ifju2ibh70Ovj7JpNH/Lebi-Website?node-id=12595-4931&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=12595%3A4931&show-proto-sidebar=0&embed-host=share",
  },
};
const LEBI_WEBSITE_URL = "https://lebi.care/en";

const ADS = {
  de: [
    {
      src: "/img/portfolio/lebi/lebi_ad_versus_ads_de.jpg",
      alt: "Lebi Meta ad: reception without and with Lebi (German)",
      caption: "Before / after: a split-screen of an overwhelmed reception vs. a team focused on patients.",
    },
    {
      src: "/img/portfolio/lebi/lebi_ad_busy_reception_de.jpg",
      alt: "Lebi Meta ad: overloaded reception (German)",
      caption: "Pain point for practice staff: the phone that never stops ringing.",
    },
    {
      src: "/img/portfolio/lebi/lebi_ad_busy_line_square_de.jpg",
      alt: "Lebi Meta ad: busy line (German)",
      caption: "Pain point for patients: not getting through to the practice.",
    },
  ],
  nl: [
    {
      src: "/img/portfolio/lebi/lebi_ad_versus_ads_nl.jpg",
      alt: "Lebi Meta ad: reception without and with Lebi (Dutch)",
      caption: "Before / after: a split-screen of an overwhelmed reception vs. a team focused on patients.",
    },
    {
      src: "/img/portfolio/lebi/lebi_ad_busy_reception_nl.jpg",
      alt: "Lebi Meta ad: overloaded reception (Dutch)",
      caption: "Pain point for practice staff: the phone that never stops ringing.",
    },
    {
      src: "/img/portfolio/lebi/lebi_ad_busy_line_square_nl.jpg",
      alt: "Lebi Meta ad: busy line (Dutch)",
      caption: "Pain point for patients: not getting through to the practice.",
    },
  ],
};

const LebiAICaseStudy = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");
  const [adLang, setAdLang] = useState("de");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };

  const renderPrototype = (view, heading, caption, showLiveLink) => (
    <div className="lebi_prototype" id={`prototype-${view}`}>
      <div className="shane_tm_title">
        <h3>{heading}</h3>
      </div>
      <div className={`prototype_frame ${view === "mobile" ? "is_mobile" : ""}`}>
        <iframe
          title={`Lebi website ${view} Figma prototype`}
          src={PROTOTYPES[view].embed}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="image_caption" style={{ marginTop: "14px" }}>
        <p>{caption}</p>
      </div>
      <div className="prototype_actions">
        <a
          href={PROTOTYPES[view].link}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary_button"
        >
          Open Prototype in Figma ↗
        </a>
        {showLiveLink && (
          <a
            href={LEBI_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary_button"
          >
            Visit Live Website: lebi.care ↗
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="shane_tm_all_wrap case_study_page lebi_ai_page">
      <Header />

      {/* Hero section */}
      <div className="shane_tm_hero_case_study" id="home">
        <div></div>
        <div className="container">
          <div>
            <div className="navigation-wrapper">
              <Link to="/case-study/buhdi-app" className="back_button">
                ← PREVIOUS PROJECT
              </Link>
              <Link to="/case-study/neptune-feature" className="back_button">
                NEXT PROJECT →
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h1>Building trust in an AI office assistant for medical practices</h1>
                </div>
              </div>
              <div>
                <h4>Lebi AI Website &amp; Meta Ads</h4>
              </div>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    Designing the desktop and mobile website, and the first
                    Meta ad campaign, for a startup that helps medical practices with answering
                    patient calls.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Ads (above the fold) */}
      <div className="shane_tm_section" id="ads" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="shane_tm_title">
            <h3>Meta Ads Designs</h3>
          </div>
          <div className="lebi_ads" data-aos="fade-up" data-aos-duration="1200">
            <div className="ads_toggle" role="tablist" aria-label="Ad language">
              <button
                type="button"
                className={adLang === "de" ? "active" : ""}
                onClick={() => setAdLang("de")}
              >
                Deutsch
              </button>
              <button
                type="button"
                className={adLang === "nl" ? "active" : ""}
                onClick={() => setAdLang("nl")}
              >
                Nederlands
              </button>
            </div>
            <div className="ads_grid">
              {ADS[adLang].map((ad) => (
                <figure key={ad.src}>
                  <img
                    src={ad.src}
                    alt={ad.alt}
                    loading="lazy"
                    onClick={() => handleImageClick(ad.src)}
                  />
                  <figcaption>{ad.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="image_caption" style={{ marginTop: "14px" }}>
            <p>
              Six static ads (3 concepts &times; 2 languages) for Lebi&rsquo;s
              first Meta campaign, aimed at the German and Dutch markets. Each
              ad uses one emotional trigger and a short headline in the brand
              green.
            </p>
          </div>
        </div>
      </div>


      {/* Prototype + overview */}
      <div
        className="full-image-section"
        style={{ width: "100%" }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="content">
            <div>
              <div className="shane_tm_section">
                <div className="shane_tm_about">
                  <div>
                    <div className="about_inner">
                      <div className="left">
                        <div
                          className="shane_tm_title"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          <span>Overview</span>
                          <p>
                            Lebi is a Berlin-based startup with an AI
                            administrative assistant for outpatient practices
                            (GPs, dentists, physiotherapists and more). Lebi
                            answers recurring patient calls, follows the
                            workflows each practice defines, and hands anything
                            complex to the team. I designed the company website
                            in Figma for desktop and mobile, and created the
                            static Meta ads for Lebi's first marketing
                            campaign.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p>
                              <strong>Role:</strong>
                              <br />
                              UX/UI &amp; visual designer
                            </p>

                            <p>
                              <strong>Scope:</strong>
                              <br />
                              Website design (desktop &amp; mobile), clickable
                              prototype, design iteration after user feedback,
                              Meta static ads (DE &amp; NL)
                            </p>

                            <p>
                              <strong>Tools:</strong>
                              <br />
                              Figma, Google Stitch, Meta Ads
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Figma prototype: desktop */}
              {renderPrototype(
                "desktop",
                "Desktop website prototype",
                "Desktop prototype (post user-feedback version). Click through the interactive screens or open in Figma to see all flows.",
                true
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div className="shane_tm_section" id="problem">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>The Challenge</span>
                  <h3>Make doctors comfortable letting AI talk to their patients</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The buyers are practice owners and managers, not tech
                    people. They are curious about AI but sceptical of the
                    hype, and care about workload, reliability, privacy and
                    control. The website had to generate qualified demo
                    bookings while building enough trust for a doctor to
                    consider it.
                  </p>
                  <ul className="case-study-list" style={{ marginTop: "10px" }}>
                    <li>
                      <strong>Practical before impressive:</strong> the product
                      had to feel calm and trustworthy, not like a chatbot gimmick.
                    </li>
                    <li>
                      <strong>Three languages:</strong> German, Dutch and
                      English, so layouts had to survive longer German text.
                    </li>
                    <li>
                      <strong>Several audiences:</strong> GPs, dentists and
                      specialised care providers, each with different
                      recurring-call situations.
                    </li>
                  </ul>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="#outcome" style={{ textDecoration: "none" }}>
                    <span className="button-text">Jump to Outcome</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile prototype */}
      <div className="shane_tm_section" id="mobile-prototype">
        <div className="container">
          {renderPrototype(
            "mobile",
            "Mobile website prototype",
            "Mobile prototype (post user-feedback version). Click through the interactive screens or open in Figma to see all flows.",
            false
          )}
        </div>
      </div>

      {/* Solution */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>The Solution</span>
                  <h3>The voice is the interface, the workflow is the product</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I started from the English content master and a visual
                    brief, then designed the page around one idea: Lebi is an
                    operational layer between patient calls and practice
                    workflows. Key design decisions:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Lead with the problem: </strong>
                      the hero and the &ldquo;phone gets busiest when your team
                      is busiest&rdquo; section start from a moment every
                      practice recognises, before explaining the product.
                    </li>
                    <li>
                      <strong>Make the product tangible: </strong>
                      a live call card, a booked-appointment notification and a
                      &ldquo;no more busy lines&rdquo; view of simultaneous calls
                      show what Lebi does without jargon.
                    </li>
                    <li>
                      <strong>Answer the objections: </strong>
                      a dedicated Control &amp; Safety section (EEA data, GDPR,
                      transparent AI, team stays in control), a 16-question FAQ
                      and logos of supporting institutions.
                    </li>
                    <li>
                      <strong>Clear conversion path: </strong>
                      one primary &ldquo;Book a free demo&rdquo; action,
                      repeated consistently on desktop and mobile, with
                      &ldquo;Talk to Lebi&rdquo; as the secondary action.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Outcome */}
      <div className="shane_tm_section" id="outcome">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Impact</span>
                  <h3>A live, multilingual presence for a young startup</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <ul className="case-study-list">
                    <li>
                      <strong>Live website: </strong>
                      the design shipped as{" "}
                      <a
                        href={LEBI_WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        lebi.care
                      </a>{" "}
                      in English, German and Dutch.
                    </li>
                    <li>
                      <strong>Consistent system: </strong>
                      one design language across desktop, mobile and ads, so a
                      patient or doctor recognises Lebi everywhere.
                    </li>
                    <li>
                      <strong>Campaign-ready: </strong>
                      six ad creatives (3 concepts &times; 2 languages) for
                      Lebi&rsquo;s first Meta campaign, driving to the demo
                      booking page.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="shane_tm_section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <Link to="/#portfolio" className="back_button">
              ← PORTFOLIO / UX/UI PROJECTS
            </Link>
            <Link to="/case-study/neptune-feature" className="back_button">
              NEXT PROJECT →
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxImg}
            alt="Full View"
            style={{ display: "block", margin: "40px auto", maxWidth: "95vw" }}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LebiAICaseStudy;
