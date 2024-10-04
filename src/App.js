import React from 'react';
import HomePage from './Homepage'
import LeadForm from './LeadForm';
import './styles.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/second-page" element={<SecondPage />} /> */}
    </Routes>
  );
}

export default App;
