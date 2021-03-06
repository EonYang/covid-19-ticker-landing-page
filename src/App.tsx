import React from 'react';
import './scss/App.scss';
import NavBar from './Components/NavBar';
import LaotopMockup from './Components/LaptopMockup';
import FeatureSection from './Components/FeatureSection';
import Footer from './Components/Footer';
const App = () => {
  const navData = {
    brand: {
      name: " ",
      link: "#"
    },
    links: [{
      name: "Download",
      link: "#"
    }, {
      name: "Github",
      link: "https://github.com/EonYang/CoronavirusTicker"
    }, {
      name: "About",
      link: "#footer"
    }]
  }

  return (
    <div className="App ">
      <NavBar navData={navData} />
      <div className="bg-image"></div>
      <LaotopMockup />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
