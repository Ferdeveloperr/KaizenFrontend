import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Faq: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Preguntas Frecuentes</h2>
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
              Nuestro plan de entrenamiento se adapta a tus necesidades, brindándote rutinas personalizadas que pueden ajustarse según tus objetivos. Contamos con diferentes niveles de seguimiento y soporte.
            </p>
          )}
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleQuestion(1)}
          >
            <h3 className="text-lg font-semibold">¿Qué incluye el plan de alimentación?</h3>
            <FontAwesomeIcon icon={openQuestion === 1 ? faChevronUp : faChevronDown} />
          </div>
          {openQuestion === 1 && (
            <p className="mt-4 text-gray-700">
              Los planes de alimentación están diseñados para complementar tu rutina de ejercicios. Incluyen recomendaciones personalizadas basadas en tus metas, ya sea que quieras perder peso, ganar músculo o mejorar tu salud en general.
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
              Dependiendo del plan que elijas, puedes tener acceso ilimitado a consultas con el entrenador vía WhatsApp, o también consultas más frecuentes por videollamadas en el caso del Plan Pro.
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
              ¡Sí! Puedes cambiar de plan en cualquier momento. Simplemente contáctanos y te ayudaremos a realizar el cambio para que puedas disfrutar de los nuevos beneficios de inmediato.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
