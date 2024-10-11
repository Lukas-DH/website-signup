import React, { useEffect } from "react";
import HomePage from "./Homepage";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Italy from "./pages/italync";
import Spain from "./pages/spainnc";
import France from "./france";
import Portugal from "./pages/portugalnc";
import Existingcustomers from "./existingcustomers";

function RedirectToCaring() {
  useEffect(() => {
    window.location.href = "https://www.caringivf.com";
  }, []);

  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/redirect-to-caring" element={<RedirectToCaring />} />
      <Route path="/italync-88" element={<Italy />} />
      <Route path="/existingcustomers" element={<Existingcustomers />} />
      <Route path="/spainnc-33" element={<Spain />} />
      <Route path="/france" element={<France />} />
      <Route path="/portugalnc-43" element={<Portugal />} />
    </Routes>
  );
}

export default App;
