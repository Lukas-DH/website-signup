import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles.css';

function ModuloContattiItalia() {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    interesseProdotto: []
  });

  const [formInviato, setFormInviato] = useState(false); // Nuovo stato per gestire l'invio del modulo

  const toggleInteresseProdotto = (prodotto) => {
    setFormData((prevState) => {
      // Verifica se il primo prodotto è selezionato
      if (prodotto === 'Tutti i prodotti') {
        const tuttiSelezionati = prevState.interesseProdotto.length === 6; // Supponiamo ci siano 6 prodotti
        if (tuttiSelezionati) {
          return {
            ...prevState,
            interesseProdotto: [] // Deseleziona tutti
          };
        } else {
          return {
            ...prevState,
            interesseProdotto: ['Tutti i prodotti', 'Digital Cameras', 'identitovigilanza', 'Genea Caring Cryokit', 'S-Cryolock', 'Cryolock'] // Seleziona tutti
          };
        }
      }

      // Logica di toggle normale per gli elementi individuali
      const èSelezionato = prevState.interesseProdotto.includes(prodotto);
      if (èSelezionato) {
        return {
          ...prevState,
          interesseProdotto: prevState.interesseProdotto.filter((item) => item !== prodotto),
        };
      } else {
        return {
          ...prevState,
          interesseProdotto: [...prevState.interesseProdotto, prodotto],
        };
      }
    });
  };

  const inviaEmail = (e) => {
    e.preventDefault();

    const emailData = {
      nome: formData.nome,
      azienda: formData.azienda,
      email: formData.email,
      telefono: formData.telefono,
      interesseProdotto: formData.interesseProdotto.join(', '), // Converte l'array in una stringa
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Accesso all'ID del servizio dall'ambiente
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Accesso all'ID del template dall'ambiente
      emailData,                                  // Dati del modulo
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // Accesso alla chiave pubblica dall'ambiente
    ).then(
      (response) => {
        console.log('SUCCESSO!', response.status, response.text);
        setFormInviato(true); // Imposta lo stato dell'invio del modulo a true
        setTimeout(() => {
          window.location.href = 'https://sea-turtle-app-qfyrw.ondigitalocean.app/'; // Reindirizza dopo 10 secondi
        }, 10000); // 10000ms = 10 secondi
      },
      (error) => {
        console.error('FALLITO...', error);
        alert('Errore nell\'invio dei dati. Riprova.');
      }
    );
  };

  // Mostra messaggio di ringraziamento dopo l'invio del modulo
  if (formInviato) {
    return (
      <div className="thank-you-message">
        <h1>Grazie!</h1>
        <p>La tua richiesta è stata ricevuta. Verrai reindirizzato a breve.</p>
      </div>
    );
  }

  return (
    <div className="lead-form-container">
      <h2>Iscriviti per ottenere informazioni sui prodotti</h2>
      <form onSubmit={inviaEmail}>
        <div className="form-group">
          <label htmlFor="nome">Nome completo:<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="azienda">Centro, clinica, ospedale:<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="azienda"
            value={formData.azienda}
            onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:<span style={{ color: 'red' }}>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono (Opzionale):</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          />
        </div>

        {/* Sezione di Interesse per i Prodotti */}
        <div className="form-group">
          <label>Interesse Prodotti:</label>
          <div className="product-selection">

            <button
              type="button"
              className={`product-item ${formData.interesseProdotto.includes('Tutti i prodotti') ? 'selected' : ''}`}
              onClick={() => toggleInteresseProdotto('Tutti i prodotti')}
            >
              <img src="/caring-logo.png" alt="Logo Tutti i Prodotti" className="product-logo" />
              <span>Tutti i prodotti</span>
              <p>This paragraph is below the span.</p>
            </button>

            <button
              type="button"
              className={`product-item ${formData.interesseProdotto.includes('Digital Cameras') ? 'selected' : ''}`}
              onClick={() => toggleInteresseProdotto('Digital Cameras')}
            >
              <img src="/geri.jpeg" alt="Geri" className="product-logo" />
              <span>Digital Cameras</span>
            </button>


            <button
              type="button"
              className={`product-item ${formData.interesseProdotto.includes('Genea Caring Cryokit') ? 'selected' : ''}`}
              onClick={() => toggleInteresseProdotto('Genea Caring Cryokit')}
            >
              <img src="/gems.jpeg" alt="Gems" className="product-logo" />
              <span>Genea Caring Cryokit</span>
            </button>

            <button
              type="button"
              className={`product-item ${formData.interesseProdotto.includes('S-Cryolock') ? 'selected' : ''}`}
              onClick={() => toggleInteresseProdotto('S-Cryolock')}
            >
              <img src="/s-cryolock.jpg" alt="s-cryolock" className="product-logo" />
              <span>S-Cryolock</span>
            </button>

            <button
              type="button"
              className={`product-item ${formData.interesseProdotto.includes('Cryolock') ? 'selected' : ''}`}
              onClick={() => toggleInteresseProdotto('Cryolock')}
            >
              <img src="/cryolock.jpeg" alt="cryolock" className="product-logo" />
              <span>Cryolock</span>
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button">Invia</button>
        <p className="consent-text">
          Cliccando "Invia", accetto la raccolta e il trattamento dei miei dati personali in conformità con la Privacy Policy di Caring IVF. Acconsento inoltre a ricevere comunicazioni di marketing da Caring IVF.
        </p>
      </form>
    </div>
  );
}

export default ModuloContattiItalia;
