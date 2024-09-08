import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Usa Routes invece di Switch
import Header from './components/Header/Header';
import MeditationTimer from './components/MeditationTimer/MeditationTimer';
import MeditationResources from './components/MeditationResources/MeditationResources';
import { Helmet } from 'react-helmet';
import './App.scss';

const App = () => {
  return (
    <Router basename="/meditation">
      <Helmet>
        <title>Meditation App</title>
      </Helmet>
      <div className="app">
        <Header />
        <Routes> {/* Routes */}
          <Route path="/" element={<MeditationTimer />} /> 
          <Route path="/resources" element={<MeditationResources />} />
          <Route path="*" element={<MeditationTimer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
