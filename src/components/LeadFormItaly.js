import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles.css';

function ModuloContattiItalia() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    telephone: '',
    productInterest: []
  });

  const [formInviato, setFormInviato] = useState(false);
  const [language, setLanguage] = useState('it'); // State for managing language

  // Toggle between English and Italian
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'it' ? 'en' : 'it'));
  };

  const toggleproductInterest = (prodotto) => {
    setFormData((prevState) => {
      if (prodotto === 'All Products') {
        const tuttiSelezionati = prevState.productInterest.length === 6;
        if (tuttiSelezionati) {
          return {
            ...prevState,
            productInterest: []
          };
        } else {
          return {
            ...prevState,
            productInterest: ['All Products', 'Digital Cameras', 'identitovigilanza', 'Genea Caring Cryokit', 'S-Cryolock', 'Cryolock']
          };
        }
      }
      const èSelezionato = prevState.productInterest.includes(prodotto);
      if (èSelezionato) {
        return {
          ...prevState,
          productInterest: prevState.productInterest.filter((item) => item !== prodotto),
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
      productInterest: formData.productInterest.join(', '),
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      emailData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (response) => {
        console.log('SUCCESSO!', response.status, response.text);
        setFormInviato(true);
        setTimeout(() => {
          window.location.href = 'https://sea-turtle-app-qfyrw.ondigitalocean.app/';
        }, 10000);
      },
      (error) => {
        console.error('FALLITO...', error);
        alert('Errore nell\'invio dei dati. Riprova.');
      }
    );
  };

  const texts = {
    it: {
      title: "Iscriviti per informazioni sui prodotti",
      nameLabel: "Nome completo:",
      companyLabel: "Centro, Clinica, Ospedale:",
      emailLabel: "Email:",
      telephoneLabel: "Telefono (Facoltativo):",
      inviaButton: "Invia",
      consentText: "Cliccando su \"Invia\", accetto la raccolta e il trattamento dei miei dati personali in conformità con la Privacy Policy di Caring IVF. Acconsento inoltre a ricevere comunicazioni di marketing da Caring IVF.",
      thankYouMessage: "Grazie! La tua richiesta è stata ricevuta. Verrai reindirizzato a breve.",
      allProducts: "Tutti i prodotti",
      product1: "Fotocamere digitali",
      hover1: "Fotocamere Wifi compatibili con montaggio C e microscopio a inversione",
      product2: "Genea Caring Cryokit",
      hover2: "Ottimizza il prezzo con un pacchetto Gems+Cryolock",
      product3: "S-Cryolock",
      hover3: "Dimensioni ridotte",
      product4: "Cryolock",
      hover4: "Dimensioni regolari"
    }
,
    en: {
      title: "Subscribe for product information",
      nameLabel: "Full Name:",
      companyLabel: "Center, Clinic, Hospital:",
      emailLabel: "Email:",
      telephoneLabel: "telephone (Optional):",
      inviaButton: "Send",
      consentText: "By clicking \"Send\", I agree to the collection and processing of my personal data in accordance with Caring IVF's Privacy Policy. I also consent to receiving marketing communications from Caring IVF.",
      thankYouMessage: "Thank you! Your request has been received. You will be redirected shortly.",
      allProducts:"All Products",
      product1:"Digital Cameras",
      hover1:"Wifi cameras C-mount and invertion microscope compatible",
      product2:"Genea Caring Cryokit",
      hover2:"Optimise pricing with a Gems+Cryolock bundle",
      product3:"S-Cryolock",
      hover3:"Slimmer size",
      product4:"Cryolock",
      hover4:"Regular size"
    }
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
        {language === 'it' ? 'Switch to English' : 'Passa a Italiano'}
      </button>

      <h2>{currentText.title}</h2>
      <form onSubmit={inviaEmail}>
        <div className="form-group">
          <label htmlFor="name">{currentText.nameLabel}<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">{currentText.companyLabel}<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{currentText.emailLabel}<span style={{ color: 'red' }}>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">{currentText.telephoneLabel}</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Interesse Prodotti:</label>
          <div className="product-selection">

            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('All Products') ? 'selected' : ''}`}
              onClick={() => toggleproductInterest('All Products')}
            >
              <img src="/caring-logo.png" alt="Logo All Products" className="product-logo" />
              <span>{currentText.allProducts}</span>
              <div className="tooltip-text">Click to select all products</div>
            </button>

            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Cryolock') ? 'selected' : ''}`}
              onClick={() => toggleproductInterest('Cryolock')}
            >
              <img src="/cryolock.jpeg" alt="cryolock" className="product-logo" />
              <span>{currentText.product4}</span>
              <div className="tooltip-text">{currentText.hover4}</div>
            </button>

            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('S-Cryolock') ? 'selected' : ''}`}
              onClick={() => toggleproductInterest('S-Cryolock')}
            >
              <img src="/s-cryolock.jpg" alt="s-cryolock" className="product-logo" />
              <span>{currentText.product3}</span>
              <div className="tooltip-text">{currentText.hover3}</div>
            </button>
            
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Digital Cameras') ? 'selected' : ''}`}
              onClick={() => toggleproductInterest('Digital Cameras')}
            >
              <img src="/geri.jpeg" alt="Geri" className="product-logo" />
              <span>{currentText.product1}</span>
              <div className="tooltip-text">{currentText.hover1}</div>
            </button>


            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Genea Caring Cryokit') ? 'selected' : ''}`}
              onClick={() => toggleproductInterest('Genea Caring Cryokit')}
            >
              <img src="/gems.jpeg" alt="Gems" className="product-logo" />
              <span>{currentText.product2}</span>
              <div className="tooltip-text">{currentText.hover2}</div>
            </button>


          </div>
        </div>

        <button type="submit" className="submit-button">{currentText.inviaButton}</button>
        <p className="consent-text">
          {currentText.consentText}
        </p>
      </form>
    </div>
  );
}

export default ModuloContattiItalia;













