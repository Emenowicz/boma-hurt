import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import Map from './components/Map'

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <Products />
      <Map/>
      <Contact />
    </div>
  );
};

export default App;