import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    telephone: '',
    productInterest: []
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // New state to handle form submission

  const toggleProductInterest = (product) => {
    setFormData((prevState) => {
      // Check if the first product is clicked
      if (product === 'All products') {
        const allSelected = prevState.productInterest.length === 6; // Assuming there are 6 products
        if (allSelected) {
          return {
            ...prevState,
            productInterest: [] // Deselect all
          };
        } else {
          return {
            ...prevState,
            productInterest: ['All products', 'Timelapse', 'identitovigilence', 'milieux de culture', 'Microscopie', 'Cryolock'] // Select all
          };
        }
      }
  
      // Normal toggle logic for individual items
      const isSelected = prevState.productInterest.includes(product);
      if (isSelected) {
        return {
          ...prevState,
          productInterest: prevState.productInterest.filter((item) => item !== product),
        };
      } else {
        return {
          ...prevState,
          productInterest: [...prevState.productInterest, product],
        };
      }
    });
  };
  

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      telephone: formData.telephone,
      productInterest: formData.productInterest.join(', '), // Convert array to a string
    };

    emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Access service ID from env
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Access template ID from env
  emailData,                                  // Form data
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // Access public key from env
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true); // Set form submission state to true
        setTimeout(() => {
          window.location.href = 'https://sea-turtle-app-qfyrw.ondigitalocean.app/'; // Redirect after 10 seconds
        }, 10000); // 10000ms = 10 seconds
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to submit lead data. Please try again.');
      }
    );
  };

  // Show thank you message after form is submitted1
  if (formSubmitted) {
    return (
      <div className="thank-you-message">
        <h1>Merci!</h1>
        <p>Votre soumission a bien été reçue. Vous allez être redirigé sous peu.</p>
      </div>
    );
  }

  return (
    <div className="lead-form-container">
      <h2>Inscrivez-vous pour obtenir des informations sur les produits</h2>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Nom complet:<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Centre, clinique, hôpital:<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
          <label htmlFor="telephone">Telephone (Optional):</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
          />
        </div>

        {/* Product Interest Section */}
        <div className="form-group">
          <label>Product Interest:</label>
          <div className="product-selection">


            <button
              type="button"
            //   className={`product-item ${formData.productInterest.includes('Product 1') ? 'selected' : ''}`}
            className={`product-item ${formData.productInterest.includes('All products') ? 'selected' : ''}`}

              onClick={() => toggleProductInterest('All products')}
            >
              <img src="/caring-logo.png" alt="Product 1 Logo" className="product-logo" />
              <span>All products</span>
            </button>

            <button
              type="button"
            //   className={`product-item ${formData.productInterest.includes('Product 1') ? 'selected' : ''}`}
            className={`product-item ${formData.productInterest.includes('Timelapse') ? 'selected' : ''}`}

              onClick={() => toggleProductInterest('Timelapse')}
            >
              <img src="/geri.jpeg" alt="Geri" className="product-logo" />
              <span>Timelapse</span>
            </button>

            <button
              type="button"
            //   className={`product-item ${formData.productInterest.includes('Product 1') ? 'selected' : ''}`}
            className={`product-item ${formData.productInterest.includes('identitovigilence') ? 'selected' : ''}`}

              onClick={() => toggleProductInterest('identitovigilence')}
            >
              <img src="/gidget.jpeg" alt="gidget" className="product-logo" />
              <span>Identito-vigilence</span>
            </button>

            <button
              type="button"
            //   className={`product-item ${formData.productInterest.includes('Product 1') ? 'selected' : ''}`}
            className={`product-item ${formData.productInterest.includes('milieux de culture') ? 'selected' : ''}`}

              onClick={() => toggleProductInterest('milieux de culture ')}
            >
              <img src="/gems.jpeg" alt="Gems" className="product-logo" />
              <span>Milieux de culture </span>
            </button>



            <button
              type="button"
            //   className={`product-item ${formData.productInterest.includes('Product 2') ? 'selected' : ''}`}
            className={`product-item ${formData.productInterest.includes('Microscopie') ? 'selected' : ''}`}

              onClick={() => toggleProductInterest('Microscopie')}
            >
              <img src="/product2-logo.png" alt="Product 2 Logo" className="product-logo" />
              <span>Microscopie</span>
            </button>
            <button
              type="button"
            //   className={`product-item ${formData.productInterest.includes('Product 3') ? 'selected' : ''}`}
            className={`product-item ${formData.productInterest.includes('Cryolock') ? 'selected' : ''}`}

              onClick={() => toggleProductInterest('Cryolock')}
            >
              <img src="/cryolock.jpeg" alt="cryolock" className="product-logo" />
              <span>Cryolock</span>
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
        <p className="consent-text">
    By clicking "Submit," I agree to the collection and processing of my personal data in accordance with Caring IVF's Privacy Policy. I also consent to receive marketing communications from Caring IVF.
  </p>
      </form>
    </div>
  );
}

export default LeadForm;
