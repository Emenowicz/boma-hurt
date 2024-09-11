import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
      <ContactPage />
    </div>
  );
};

export default App;