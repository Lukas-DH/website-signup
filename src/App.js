import React, { useEffect } from 'react';
import HomePage from './Homepage';
import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Italy from './italy';

function RedirectToCaring() {
  useEffect(() => {
    window.location.href = 'https://www.caringivf.com';
  }, []);

  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/redirect-to-caring" element={<RedirectToCaring />} />
      <Route path="/italy" element={<Italy />} />
    </Routes>
  );
}

export default App;
