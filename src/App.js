import React, { useEffect } from "react";
import AllRouter from "./router/AllRouter";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import { CookieManager } from "react-cookie-manager";
import "react-cookie-manager/style.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    document.body.classList.add("loaded");
  }, []);
  return (
     <CookieManager
      translations={{
        title: "Would You Like A Cookie? 🍪",
        message:
          "We value your privacy. Choose which cookies you want to allow. Essential cookies are always enabled as they are necessary for the website to function properly.",
        buttonText: "Accept All",
        declineButtonText: "Decline All",
        manageButtonText: "Manage Cookies",
        privacyPolicyText: "Privacy Policy",
      }}
      showManageButton={true}
      privacyPolicyUrl="/privacy-policy"
      theme="light"
      displayType="popup"
      cookieKitId="" // Optional: Enable CookieKit.io integration
      onManage={(preferences) => {
        if (preferences) {
          console.log("Cookie preferences updated:", preferences);
        }
      }}
      onAccept={() => {
        console.log("User accepted all cookies");
        // Analytics tracking can be initialized here
      }}
      onDecline={() => {
        console.log("User declined all cookies");
        // Handle declined state if needed
      }}
    >
    <div className="shane_tm_all_wrap">
      <ScrollToTop />
      <AllRouter />
    </div>
    </CookieManager>
  );
};

export default App;
