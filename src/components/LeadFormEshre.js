import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles.css";
import texts from "./translations";
import ProductList from "./ProductListEshre";

function ModuloContattiItalia() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    telephone: "",
    country: "",
    productInterest: [],
  });

  const [formInviato, setFormInviato] = useState(false);
  const [language, setLanguage] = useState("en"); // State for managing language
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // Toggle between English and Italian
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "fr" ? "en" : "fr"));
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, country: value });

    if (value.length > 0) {
      const filtered = countries
        .filter((country) =>
          country.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 10); // Show max 10 suggestions
      setFilteredCountries(filtered);
      setShowCountryDropdown(true);
    } else {
      setShowCountryDropdown(false);
    }
  };

  const selectCountry = (country) => {
    setFormData({ ...formData, country });
    setShowCountryDropdown(false);
  };

  const toggleProductInterest = (prodotto) => {
    setFormData((prevState) => {
      if (prodotto === "All Products") {
        const tuttiSelezionati = prevState.productInterest.length === 10;
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
              "Timelapse",
              "Witnessing",
              "Digital Cameras",
              "identitovigilanza",
              "CareBot",
              "Lenshooke",
              "Cryolock",
              "Culture Media",
              "Leica",
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
    setLoading(true);
    const emailData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      telephone: formData.telephone,
      country: formData.country,
      productInterest: formData.productInterest.join(", "),
    };

    // Send to backend API
    fetch("/api/submit-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Submission successful:", result);
        setFormInviato(true);
        setTimeout(() => {
          window.location.href =
            "https://sea-turtle-app-qfyrw.ondigitalocean.app/eshre";
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error submitting form:", err);
        alert("Error submitting form. Please try again.");
      });

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
            window.location.href =
              "https://sea-turtle-app-qfyrw.ondigitalocean.app/eshre";
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
        {language === "fr" ? texts.en.switchLanguage : texts.fr.switchLanguage}
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
            placeholder={language === "fr" ? "Nom complet..." : "full name..."}
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
            placeholder={
              language === "fr"
                ? "la société que vous représentez..."
                : "the company you are representing..."
            }
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
            placeholder={
              language === "fr"
                ? "Adresse e-mail de travail..."
                : "work email..."
            }
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
            placeholder={
              language === "fr"
                ? "numéro de téléphone préféré..."
                : "prefered phone number..."
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">
            {language === "fr" ? "Pays" : "Country"}
            <span style={{ color: "red" }}>*</span>
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleCountryChange}
              onBlur={() =>
                setTimeout(() => setShowCountryDropdown(false), 200)
              }
              onFocus={() => formData.country && setShowCountryDropdown(true)}
              placeholder={
                language === "fr"
                  ? "Tapez votre pays..."
                  : "Type your country..."
              }
              required
            />
            {showCountryDropdown && filteredCountries.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderTop: "none",
                  borderRadius: "0 0 4px 4px",
                  maxHeight: "200px",
                  overflowY: "auto",
                  zIndex: 1000,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {filteredCountries.map((country, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      borderBottom:
                        index < filteredCountries.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                    onMouseDown={() => selectCountry(country)}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "white")
                    }
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ProductList
          currentText={currentText}
          formData={formData}
          toggleProductInterest={toggleProductInterest}
        />

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? (
            <span className="spinner"></span>
          ) : (
            currentText.inviaButton
          )}
        </button>
        <p className="consent-text">{currentText.consentText}</p>
      </form>
    </div>
  );
}

export default ModuloContattiItalia;
