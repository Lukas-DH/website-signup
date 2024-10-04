import { Link } from 'react-router-dom';
import LeadForm from './LeadForm';
import './styles.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="caring-logo.png" alt="Company Logo" />
        <h1>Bienvenus à la FFER</h1>
        <p>Apprenez-en plus sur nos produits et inscrivez-vous pour recevoir des mises à jour!</p>
      </header>
      <main>
        <LeadForm />
        <Link to="/second-page">Go to the Second Page</Link>
      </main>
      <footer className="App-footer">
        <p>Powered by OpenIVF</p>
      </footer>
    </div>
  );
}

export default HomePage
