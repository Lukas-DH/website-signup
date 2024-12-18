import React, { useState } from "react";

import "../styles.css";
import texts from "./translations";

function Popupspecial() {
  const [language, setLanguage] = useState("en"); // State for managing language

  const currentText = texts[language];

  return (
    <div className="lead-form-container-popup">
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="es">Spanish</option>
        <option value="pt">Portuguese</option>
        <option value="fr">French</option>
      </select>
      <h2>{currentText.specialMessage.offer}</h2>
      <h3>{currentText.specialMessage.title}</h3>
      <p>
        <strong>{currentText.specialMessage.closing.title}</strong>{" "}
        {currentText.specialMessage.closing.message}
      </p>
      {/* Image */}{" "}
      <a
        className="product-item-popup"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image-container">
          <img
            src="./gemscryo.png"
            alt="Descriptive Alt Text"
            className="special-message-image"
          />
        </div>
      </a>
      <strong>
        {currentText.specialMessage.closing.cta}
        <br></br>
      </strong>
      CaringIVF{" "}
    </div>
  );
}

export default Popupspecial;
