import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles.css";
import texts from "./translations";
import ProductList from "./ProductList";

function ModuloContattiItalia() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    telephone: "",
    productInterest: [],
  });

  const [formInviato, setFormInviato] = useState(false);
  const [language, setLanguage] = useState("pt"); // State for managing language

  // Toggle between English and Italian
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
  };

  const toggleProductInterest = (prodotto) => {
    setFormData((prevState) => {
      if (prodotto === "All Products") {
        const tuttiSelezionati = prevState.productInterest.length === 6;
        if (tuttiSelezionati) {
          return {
            ...prevState,
            productInterest: [],
          };
        } else {
          return {
            ...prevState,
            productInterest: [
              "All Products",
              "Digital Cameras",
              "identitovigilanza",
              "Caring Genea Cryokit",
              "Lenshooke",
              "Cryolock",
            ],
          };
        }
      }
      const èSelezionato = prevState.productInterest.includes(prodotto);
      if (èSelezionato) {
        return {
          ...prevState,
          productInterest: prevState.productInterest.filter(
            (item) => item !== prodotto
          ),
        };
      } else {
        return {
          ...prevState,
          productInterest: [...prevState.productInterest, prodotto],
        };
      }
    });
  };

  const inviaEmail = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      telephone: formData.telephone,
      productInterest: formData.productInterest.join(", "),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_NEW,
        emailData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESSO!", response.status, response.text);
          setFormInviato(true);
          setTimeout(() => {
            window.location.href = "https://www.caringivf.com/";
          }, 3000);
        },
        (error) => {
          console.error("FALLITO...", error);
          alert("Errore nell'invio dei dati. Riprova.");
        }
      );
  };

  const currentText = texts[language];

  if (formInviato) {
    return (
      <div className="thank-you-message">
        <h1>{currentText.thankYouMessage}</h1>
      </div>
    );
  }

  return (
    <div className="lead-form-container">
      <button onClick={toggleLanguage}>
        {language === "pt" ? texts.en.switchLanguage : texts.pt.switchLanguage}
      </button>

      <h2>{currentText.title}</h2>
      <form onSubmit={inviaEmail}>
        <div className="form-group">
          <label htmlFor="name">
            {currentText.nameLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">
            {currentText.companyLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            {currentText.emailLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">{currentText.telephoneLabel}</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={(e) =>
              setFormData({ ...formData, telephone: e.target.value })
            }
          />
        </div>

        <ProductList
          currentText={currentText}
          formData={formData}
          toggleProductInterest={toggleProductInterest}
        />

        <button type="submit" className="submit-button">
          {currentText.inviaButton}
        </button>
        <p className="consent-text">{currentText.consentText}</p>
      </form>
    </div>
  );
}

export default ModuloContattiItalia;
