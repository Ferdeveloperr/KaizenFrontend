import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarrouselResultados: React.FC = () => {
  
  const imagenesResultados = [
    {
      src: "https://via.placeholder.com/400x300?text=Socio+1",
      alt: "Resultado Socio 1",
      nombre: "Socio 1",
    },
    {
      src: "https://via.placeholder.com/400x300?text=Socio+2",
      alt: "Resultado Socio 2",
      nombre: "Socio 2",
    },
    {
      src: "https://via.placeholder.com/400x300?text=Socio+3",
      alt: "Resultado Socio 3",
      nombre: "Socio 3",
    },
    {
      src: "https://via.placeholder.com/400x300?text=Socio+4",
      alt: "Resultado Socio 4",
      nombre: "Socio 4",
    },
  ];

  // Configuraciones del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className="carrousel-container mx-auto mt-10 max-w-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Resultados de nuestros socios</h2>
      <Slider {...settings}>
        {imagenesResultados.map((imagen, index) => (
          <div key={index} className="px-4">
            <img 
              src={imagen.src} 
              alt={imagen.alt} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <p className="text-center mt-4 font-semibold">{imagen.nombre}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselResultados;
