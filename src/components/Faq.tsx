import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Faq: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-nunito">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 tracking-tight drop-shadow-lg mb-6">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-4">
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleQuestion(0)}
          >
            <h3 className="text-lg font-semibold">¿Cómo funciona el plan de entrenamiento?</h3>
            <FontAwesomeIcon icon={openQuestion === 0 ? faChevronUp : faChevronDown} />
          </div>
          {openQuestion === 0 && (
            <p className="mt-4 text-gray-700">
              Nuestro plan de entrenamiento se adapta a tus necesidades, brindándote rutinas bien estructuradas o personalizadas al 100% que pueden ajustarse según tus objetivos. Contamos con diferentes niveles de seguimiento y soporte.
            </p>
          )}
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleQuestion(1)}
          >
            <h3 className="text-lg font-semibold">¿Como funciona el seguimiento desde el primer dia?</h3>
            <FontAwesomeIcon icon={openQuestion === 1 ? faChevronUp : faChevronDown} />
          </div>
          {openQuestion === 1 && (
            <p className="mt-4 text-gray-700">
              Iremos siguiendo tu progreso en el entrenamiento y te proporcionaremos feedback constantemente para que puedas mejorar tu rendimiento y alcanzar tus objetivos.
              Dependiendo el plan que elijas tendras un seguimiento por wsp o a través de videollamadas con el entrenador.
            </p>
          )}
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleQuestion(2)}
          >
            <h3 className="text-lg font-semibold">¿Cuántas veces puedo consultar al entrenador?</h3>
            <FontAwesomeIcon icon={openQuestion === 2 ? faChevronUp : faChevronDown} />
          </div>
          {openQuestion === 2 && (
            <p className="mt-4 text-gray-700">
              Dependiendo del plan que elijas, puedes tener acceso ilimitado a consultas con el entrenador vía WhatsApp, o también consultas mas exclusivas por videollamadas en el caso del Plan Plus.
            </p>
          )}
        </div>

       
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleQuestion(3)}
          >
            <h3 className="text-lg font-semibold">¿Puedo cambiar de plan después de haberme suscrito?</h3>
            <FontAwesomeIcon icon={openQuestion === 3 ? faChevronUp : faChevronDown} />
          </div>
          {openQuestion === 3 && (
            <p className="mt-4 text-gray-700">
              ¡Sí! Puedes cambiar de plan en cualquier momento. Simplemente contáctanos y te ayudaremos a realizar el cambio para que puedas disfrutar de los nuevos beneficios de inmediato. Solo disponible en el Plan Plus.
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleQuestion(2)}
          >
            <h3 className="text-lg font-semibold">¿Aceptan todos los medios de pago?</h3>
            <FontAwesomeIcon icon={openQuestion === 2 ? faChevronUp : faChevronDown} />
          </div>
          {openQuestion === 2 && (
            <p className="mt-4 text-gray-700">
              Si, aceptamos todos los medios de pago. Puedes pagar con tarjeta de crédito, debito o transferencia desde tu celular.
            </p>
          )}
        </div>
    </div>
  );
};

export default Faq;
