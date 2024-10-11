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
    invoicesSentTo: "",
    productInterest: [],
  });

  const [formInviato, setFormInviato] = useState(false);
  const [language, setLanguage] = useState("en"); // State for managing language

  // Toggle between English and Italian
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "it" ? "en" : "it"));
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
              "Genea Caring Cryokit",
              "S-Cryolock",
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

      <h2>{currentText.titleExisting}</h2>
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
          <label htmlFor="authorisedPerson">
            {currentText.authorisedPersonLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="authorisedPerson"
            value={formData.authorisedPerson}
            onChange={(e) =>
              setFormData({ ...formData, authorisedPerson: e.target.value })
            }
            required
          />
          <div className="tooltip-text tooltip-container">
            {currentText.authorisedPersonHover}
          </div>
        </div>
        <div className="form-group tooltip-container">
          <label htmlFor="authorisedPersonEmail">
            {currentText.authorisedPersonEmailLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            name="authorisedPersonEmail"
            value={formData.authorisedPersonEmail}
            onChange={(e) =>
              setFormData({
                ...formData,
                authorisedPersonEmail: e.target.value,
              })
            }
            required
          />
          <div className="tooltip-text">
            {currentText.authorisedPersonEmailHover}
          </div>
        </div>
        <div className="form-group tooltip-container">
          <label htmlFor="contact">
            {currentText.contactLabel}
            <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
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
          <label htmlFor="phone">
            {currentText.phoneLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="form-group tooltip-container">
          <label htmlFor="shippingAddress">
            {currentText.shippingAddressLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={(e) =>
              setFormData({ ...formData, shippingAddress: e.target.value })
            }
            required
          />
          <div className="tooltip-text">{currentText.emailHover}</div>
        </div>
        <div className="form-group tooltip-container">
          <label htmlFor="billingAddress">
            {currentText.billingAddressLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={(e) =>
              setFormData({ ...formData, billingAddress: e.target.value })
            }
            required
          />
          <div className="tooltip-text">{currentText.emailHover}</div>
        </div>
        <div className="form-group tooltip-container">
          <label htmlFor="vatTaxId">
            {currentText.vatTaxIdLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="vatTaxId"
            value={formData.vatTaxId}
            onChange={(e) =>
              setFormData({ ...formData, vatTaxId: e.target.value })
            }
            required
          />
          <div className="tooltip-text">{currentText.emailHover}</div>
        </div>
        <div className="form-group tooltip-container">
          <label htmlFor="invoicesSentTo">
            {currentText.invoicesSentToLabel}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="invoicesSentTo"
            value={formData.invoicesSentTo}
            onChange={(e) =>
              setFormData({ ...formData, invoicesSentTo: e.target.value })
            }
            required
          />
          <div className="tooltip-text">{currentText.emailHover}</div>
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

export default Existingcustomers;
