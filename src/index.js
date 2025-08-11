import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/style.scss";
import { CookieManager } from "react-cookie-manager";
import "react-cookie-manager/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode
  
  >
  <CookieManager
    enableFloatingButton={true}
  theme="light"
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookieManager>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
