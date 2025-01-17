import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles.css";
import texts from "./translations";
import ProductList from "./ProductList";

function Existingcustomers() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    telephone: "",
    authorisedPerson: "",
    companyName: "",
    authorisedPersonEmail: "",
    contact: "",
    phone: "",
    shippingAddress: "",
    billingAddress: "",
    vatTaxId: "",
    invoicesSentTo: "",
    productInterest: [],
  });

  const [formInviato, setFormInviato] = useState(false);
  const [language, setLanguage] = useState("en"); // State for managing language

  // Toggle between English and Italian

  const inviaEmail = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      telephone: formData.telephone,
      authorisedPerson: formData.authorisedPerson,
      companyName: formData.companyName,
      authorisedPersonEmail: formData.authorisedPersonEmail,
      contact: formData.contact,
      phone: formData.phone,
      shippingAddress: formData.shippingAddress,
      billingAddress: formData.billingAddress,
      vatTaxId: formData.vatTaxId,
      invoicesSentTo: formData.invoicesSentTo,
      productInterest: formData.productInterest.join(", "),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESSO!", response.status, response.text);
          setFormInviato(true);
          setTimeout(() => {
            window.location.href = "https://www.caringivf.com/"; // Redirect after 3 seconds
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
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="es">Spanish</option>
        <option value="pt">Portuguese</option>
        <option value="fr">French</option>
      </select>
      <h2>{currentText.titleExistingSpecial}</h2>
      <form onSubmit={inviaEmail}>
        <div className="form-group tooltip-container">
          <label htmlFor="companyName">
            {currentText.companyNameLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            required
          />
          <div className="tooltip-text">{currentText.companyNameHover}</div>
        </div>

        <div className="form-group tooltip-container">
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

        <div className="form-group tooltip-container">
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
          <div className="tooltip-text">{currentText.emailHover}</div>
        </div>

        <div className="form-group tooltip-container">
          <label htmlFor="phone">{currentText.phoneLabel}</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* <ProductList
          currentText={currentText}
          formData={formData}
          toggleProductInterest={toggleProductInterest}
        /> */}

        <button type="submit" className="submit-button">
          {currentText.inviaButton}
        </button>
        <p className="consent-text">{currentText.consentText}</p>
      </form>
      <a
        href="https://meetings-eu1.hubspot.com/lstojanov?uuid=cac0bfbe-8135-4bb8-834b-9346d133bca9"
        target="_blank"
      >
        {currentText.meeting}
      </a>
    </div>
  );
}

export default Existingcustomers;
