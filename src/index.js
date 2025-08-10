import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/style.scss";
import { CookieManager } from "react-cookie-manager";
import "react-cookie-manager/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
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
    enableFloatingButton={true}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookieManager>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
