import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Main from './components/Main'; 
import CarrouselResultados from './components/CarrouselResultados';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header 
        bannerImage="https://res.cloudinary.com/dzzec7hzl/image/upload/v1728406138/Portada_mvp_pro_fpq1ul.png"
        altText="Descripción de la imagen del banner"
      />
      <Main />
      <CarrouselResultados />
    </div>
  );
};

export default App;

