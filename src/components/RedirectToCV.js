// RedirectToCV.js
import { useEffect } from "react";

export default function RedirectToCV() {
  useEffect(() => {
    window.location.href = "/Kalina_Iwaszko_CV_references.pdf";
  }, []);

  return null;
}