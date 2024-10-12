import React, { useRef } from 'react';
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
  const infoRef = useRef<null | HTMLDivElement>(null);
  const mainRef = useRef<null | HTMLDivElement>(null);
  const faqRef = useRef<null | HTMLDivElement>(null);
  const carrouselRef = useRef<null | HTMLDivElement>(null);
  const formContactRef = useRef<null | HTMLDivElement>(null);

  return (
    <Router>
      <div className="App">
        <Navbar 
          infoRef={infoRef}
          mainRef={mainRef}
          faqRef={faqRef}
          carrouselRef={carrouselRef}
          formContactRef={formContactRef}
        />
        <Routes>
          
          <Route path="/" element={
            <>
              <Header 
                bannerImage="https://res.cloudinary.com/dzzec7hzl/image/upload/v1728406138/Portada_mvp_pro_fpq1ul.png"
                altText="Descripción de la imagen del banner"
              />
              <div ref={infoRef}><Information /></div>
              <div ref={mainRef}><Main /></div>
              <div ref={faqRef}><Faq /></div>
              <div ref={carrouselRef}><CarrouselResultados /></div>
              <div ref={formContactRef}><FormContact /></div>
              <Footer />
            </>
          } />
  
          <Route path="/Information" element={<Information />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/FormContact" element={<FormContact />} />
          <Route path="/terminos" element={<Terminos />} /> 
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
