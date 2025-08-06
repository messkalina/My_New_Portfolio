import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/kalina-iwaszko/",
  },
  { iconName: "behance", link: "https://www.behance.net/kalinaiwaszko2" },
  {
    iconName: "github",
    link: "https://github.com/messkalina",
  },
  // { iconName: "dribbble", link: "https://dribbble.com/" },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];
const Social = () => {
  return (
    <div className="share">
      
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>

      {/* END social */}
    </div>
  );
};

export default Social;
