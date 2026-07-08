import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import Social from "../Social";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="shane_tm_topbar">
        <div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
          <div className="logo">
            <NavLink to="/">
              <img
                src="/img/logo/new/Personal_Logo_black_name.svg"
                alt="Kalina Iwaszko Portfolio"
                style={{ height: "24px", width: "auto", display: "block" }} // Adjust height as needed to match nav buttons
              />
            </NavLink>
          </div>
          {/* End logo */}
          <div className="menu ">
            <Scrollspy
              className="anchor_nav"
              items={["home", "about", "portfolio", "contact"]}
              currentClassName="current"
              offset={-200}
            >
              <li>
                <NavLink to="/#home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/#about">About me</NavLink>
              </li>
              <li>
                <NavLink to="/#portfolio">Portfolio</NavLink>
              </li>

              <li>
                <NavLink to="/#contact">Contact</NavLink>
              </li>
            </Scrollspy>
          </div>
          <div className="logo">
            <img
              src="/img/logo/new/Personal_Logo_black_name.svg"
              alt="Personal logo"
              style={{
                height: "24px",
                width: "auto",
                display: "block",
                visibility: "hidden",
              }} // Adjust height as needed to match nav buttons
            />
          </div>
          {/* End menu */}
        </div>
      </div>
      {/* End shane_tm_topbar */}

      {/* Start shane mobile menu */}
      <div className="shane_tm_mobile_menu">
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <div className="logo">
                <NavLink to="/">
                  <img
                    src="/img/logo/new/Personal_Logo_black_name.svg"
                    alt="partners brand"
                    style={{ height: "24px", width: "auto" }}
                  />
                </NavLink>
              </div>
              {/* End logo */}
              <div className="my_trigger" onClick={handleClick}>
                <div
                  className={
                    click
                      ? "hamburger hamburger--collapse-r is-active"
                      : "hamburger"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
                {/* End hamburger menu */}
              </div>
            </div>
          </div>
        </div>
        <div className={click ? "dropdown active" : "dropdown"}>
          <div className="container">
            <div
              className="dropdown_header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                padding: "15px 0",
              }}
            >
              <div className="logo">
                <NavLink to="/">
                  <img
                    src="/img/logo/new/Personal_Logo_white_name.svg"
                    alt="Kalina Iwaszko Portfolio"
                    style={{ height: "24px", width: "auto" }}
                  />
                </NavLink>
              </div>
              <span className="close_menu" onClick={handleClick}>
                close
              </span>
            </div>
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleClick}>
                    About me
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={handleClick}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleClick}>
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a
                    className="white-fill-bg btn-outline btn_sm"
                    target="_blank"
                    rel="noreferrer"
                    href="https://themeforest.net/"
                  >
                    Buy Now
                  </a>
                </li> */}
              </ul>
              <div className="social-menu">
                <Social />
              </div>
              {/* End social share */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* End shane mobile menu */}
    </>
  );
};

export default Header;
