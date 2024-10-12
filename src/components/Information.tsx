import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardCheck, faComments, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

const Information: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Número de WhatsApp
  const whatsappNumber = '1126629808';
  // Mensaje predeterminado
  const message = 'Hola, me gustaria agendar una admision!';
  // URL de WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Así trabajamos</h2>
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
            <span className="text-xl font-bold">2. Asesoría personalizada</span>
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
      <Slider {...settings}>
        <div>
          <img src="/path/to/image1.jpg" alt="Comentario 1" />
        </div>
        <div>
          <img src="/path/to/image2.jpg" alt="Comentario 2" />
        </div>
        <div>
          <img src="/path/to/image3.jpg" alt="Comentario 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Information;
