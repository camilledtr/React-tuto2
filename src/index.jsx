import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Freelances from './pages/Freelances';
import Results from './pages/Results';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/survey/:questionNumber" element={<Survey />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

