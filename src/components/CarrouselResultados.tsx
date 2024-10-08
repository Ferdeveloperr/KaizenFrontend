import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarrouselResultados: React.FC = () => {
  
  const imagenesResultados = [
    {
      src: "https://res.cloudinary.com/dzzec7hzl/image/upload/v1728423411/WhatsApp_Image_2024-10-08_at_6.36.02_PM_q5dgrf.jpg",
      alt: "Resultado Socio 1",
      
    },
    {
      src: "https://res.cloudinary.com/dzzec7hzl/image/upload/v1728423413/WhatsApp_Image_2024-10-08_at_6.36.01_PM_zydg0o.jpg",
      alt: "Resultado Socio 2",
      
    },
    {
      src: "https://via.placeholder.com/400x300?text=Socio+3",
      alt: "Resultado Socio 3",
      
    },
    
  ];

  
  const settings = {
    dots: false,
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
              className="rounded-lg shadow-lg w-full h-90 object-cover"
            />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselResultados;
