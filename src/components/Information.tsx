import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardCheck, faComments, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

const Information: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  
  const whatsappNumber = '1164813469';
  
  const message = 'Hola, me gustaria agendar una admision!';
  
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight drop-shadow-lg mb-4">
        Entrenamiento Personalizado Online
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-center text-gray-700 tracking-normal drop-shadow-md mb-8">
        Alcanza tus objetivos con un entrenamiento a medida, sin importar dónde estés.
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <div className="mr-3 text-red-600">
              <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            </div>
            <span className="text-xl font-bold">1. Agenda tu admisión</span>
          </div>
          <p className="text-gray-700">
            Contáctanos para agendar tu admisión, la cual tendrá una duración de 20-30 minutos para conocer o definir tus objetivos.
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <div className="mr-3 text-red-600">
              <FontAwesomeIcon icon={faClipboardCheck} size="2x" />
            </div>
            <span className="text-xl font-bold">2. Asesoría individual</span>
          </div>
          <p className="text-gray-700">
            Te asesoraremos en base a tus objetivos y empezaremos a trabajar juntos de manera 100% personalizada.
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <div className="mr-3 text-red-600">
              <FontAwesomeIcon icon={faComments} size="2x" />
            </div>
            <span className="text-xl font-bold">3. Herramientas para el éxito</span>
          </div>
          <p className="text-gray-700">
            Te brindaremos todas las herramientas necesarias para que logres tus metas mientras te acompañamos en el proceso.
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <div className="mr-3 text-red-600">
              <FontAwesomeIcon icon={faUserCheck} size="2x" />
            </div>
            <span className="text-xl font-bold">4. Seguimiento</span>
          </div>
          <p className="text-gray-700">
            Iremos evaluando tu desarrollo, resolviendo tus dudas e inquietudes y ajustando de manera progresiva tu rutina para acompañar tu crecimiento.
          </p>
        </div>
      </div>
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="w-full">
        <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 mb-6">
          Contáctanos por WhatsApp
        </button>
      </a>

      <div className="text-center mt-8 mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
          Opiniones de Nuestros Socios
        </h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 tracking-normal drop-shadow-md">
          Lo que dicen nuestros usuarios sobre su experiencia con nosotros
        </h3>
      </div>




        <div className=''>
      <Slider {...settings}>
        <div>
          <img src="" alt="Comentario 1"  />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dzzec7hzl/image/upload/v1730422027/WhatsApp_Image_2024-10-31_at_9.45.55_PM_2_b7a8cf.jpg" alt="Comentario 2" className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src="" alt="Comentario 3" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Information;
