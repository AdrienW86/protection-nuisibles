// components/GoogleReviews.js
"use client"; // important pour le script côté client
import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    // Charger le script Elfsight une seule fois
    const scriptId = "elfsight-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "20px auto" }}>
      <div
        className="elfsight-app-110013b9-5b7c-40dd-bdc7-66f19abadb94"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}