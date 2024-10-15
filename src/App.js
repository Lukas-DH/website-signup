import React, { useEffect } from "react";
import HomePage from "./Homepage";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Italy from "./pages/italync";
import Spain from "./pages/spainnc";
import France from "./pages/france";
import Portugal from "./pages/portugalnc";
import Existingcustomers from "./pages/existingcustomers";
import ExistingcustomersFrance from "./pages/existingcustomersFrance";

function RedirectToCaring() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/company/caring-ivf";
  }, []);

  return null;
}

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<RedirectToCaring />} />
      <Route path="/italync-88" element={<Italy />} />
      <Route path="/italy" element={<Italy />} />
      <Route path="/onboarding" element={<Existingcustomers />} />
      <Route
        path="/existingcustomersfrance"
        element={<ExistingcustomersFrance />}
      />
      <Route path="/spainnc-33" element={<Spain />} />
      <Route path="/spain" element={<Spain />} />
      <Route path="/france" element={<France />} />
      <Route path="/portugalnc-43" element={<Portugal />} />
      <Route path="/portugal" element={<Portugal />} />
    </Routes>
  );
}

export default App;
