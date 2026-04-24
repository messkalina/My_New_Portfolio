import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/kalina-iwaszko/",
    title: "LinkedIn",
  },
  {
    iconName: "behance",
    link: "https://www.behance.net/kalinaiwaszko2",
    title: "Behance",
  },
  {
    iconName: "github",
    link: "https://github.com/messkalina",
    title: "GitHub",
  },
  // { iconName: "dribbble", link: "https://dribbble.com/", title: "Dribbble" },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  //   title: "TikTok"
  // },
];

const Social = () => {
  return (
    <div className="share">
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i} className="social-item">
            <a
              href={`${val.link}`}
              target="_blank"
              rel="noreferrer"
              title={val.title}
              className="social-link"
            >
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt={val.title}
                style={{ width: "36px", height: "36px" }}
              />
              <span className="tooltip">{val.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;

// Responsive CSS for centering social icons on mobile
// Add this to your main SCSS/CSS file if not already present
// If you want it scoped, you can use a styled component or CSS module instead

// Add the following CSS to your main stylesheet (e.g., style.scss or Social.scss):
/*
.share {
  display: flex;
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .share {
    justify-content: center;
  }
}
*/
