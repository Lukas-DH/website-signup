import { Link } from "react-router-dom";
import LeadForm from "./components/FormExistingcustomeFrance";
import "./styles.css";

function Italian() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="caring-logo.png" alt="Logo dell'azienda" />
        {/* <h1>Benvenuti alla FFER</h1>
        <p>Scopri di più sui nostri prodotti e iscriviti per ricevere aggiornamenti!</p> */}
      </header>
      <main>
        <LeadForm />
        {/* <Link to="/second-page">Vai alla Seconda Pagina</Link> */}
      </main>
      <footer className="App-footer">
        <p>Powered by OpenIVF</p>
      </footer>
    </div>
  );
}

export default Italian;
