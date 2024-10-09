import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarrouselResultados: React.FC = () => {
  const imagenesResultados = [
    {
      src: "https://res.cloudinary.com/dzzec7hzl/image/upload/v1728423411/WhatsApp_Image_2024-10-08_at_6.36.02_PM_q5dgrf.jpg",
      alt: "Gustavo queria empezar a entrenar pero no tenia tiempo por su trabajo, pero logro bajar 40 kilos gracias a la rutina que le adapte para el  ",
    },
    {
      src: "https://res.cloudinary.com/dzzec7hzl/image/upload/v1728423413/WhatsApp_Image_2024-10-08_at_6.36.01_PM_zydg0o.jpg",
      alt: "Leonel es mi hermano, empezo a entrenar conmigo y hoy en dia logro bajar 40 kilos ",
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
    adaptiveHeight: true,
  };

  return (
    <div className="carrousel-container mx-auto mt-10 max-w-lg w-auto bg-white border-4 border-cream rounded-lg p-6 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">
        Resultados de nuestros socios
      </h2>
      <Slider {...settings}>
        {imagenesResultados.map((imagen, index) => (
          <div key={index} className="px-4">
            <div className="relative group">
              <img 
                src={imagen.src} 
                alt={imagen.alt} 
                className="rounded-lg shadow-xl w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center">
                  {imagen.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselResultados;
