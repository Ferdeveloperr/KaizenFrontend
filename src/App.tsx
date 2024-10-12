import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Main from './components/Main'; 
import CarrouselResultados from './components/CarrouselResultados';
import Footer from './components/Footer';
import Faq from './components/Faq';
import FormContact from './components/FormContact';
import Information from './components/Information';
import Terminos from './components/Terminos'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={
            <>
              <Navbar />
              <Header 
                bannerImage="https://res.cloudinary.com/dzzec7hzl/image/upload/v1728406138/Portada_mvp_pro_fpq1ul.png"
                altText="Descripción de la imagen del banner"
              />
              <Information />
              <Main />
              <Faq />
              <CarrouselResultados />
              <FormContact />
              <Footer />
            </>
          } />

          {/* Ruta para los términos y condiciones */}
          <Route path="/terminos" element={<Terminos />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
