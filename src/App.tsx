import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ContactMap from "./components/ContactMap";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <Products />
      <ContactMap />
      <ScrollToTopButton/>
    </div>
  );
};

export default App;