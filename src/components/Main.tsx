import React, { useState } from 'react';

const Main: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    activo: false,
    plus: false,
    pro: false,
  });

  const toggleExpand = (plan: string) => {
    setExpanded((prev) => ({ ...prev, [plan]: !prev[plan] }));
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5491126629808'; 
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <main className="p-6 font-roboto">
      <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Servicios</h2>
      <h3 className="text-1xl font-semibold mb-4 text-center">Aqui podras ver los beneficios de cada uno de nuestros planes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-center">Plan Activo</h3>
          <p className="text-black mb-4 text-center">
            Ideal para quienes buscan comenzar con un entrenamiento estructurado y eficaz.
          </p>
          <ul className={`list-disc list-inside mb-4 text-black text-center ${expanded.activo ? '' : 'hidden'}`}>
            <li>Adminision 100% bonificada</li>
            <li>1 videollamada de seguimiento bonificada al renovar</li>
            <li>Plan de entrenamiento personalizado.</li>
            <li>Guia de nutricion básica</li>
            <li>Acceso a la comunidad</li>
            
          </ul>
          <button className="text-red-600 mb-4" onClick={() => toggleExpand('activo')}>
            {expanded.activo ? 'Ver menos' : 'Ver beneficios'}
          </button>
          <div>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded mb-2"
              onClick={() => openWhatsApp("Hola, quiero solicitar el plan Activo y tener más información de cómo empezar!")}
            >
              Voy a empezar!
            </button>
          </div>
        </div>
       

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-center">Plan Plus</h3>
          <h5 className='text-black font-semibold mb-2 text-center'>5 cupos disponibles</h5>
          <p className="text-black mb-2 text-center">
            Perfecto para quienes desean un nivel adicional de personalización y seguimiento.
          </p>
          <ul className={`list-disc list-inside mb-4 text-black text-center ${expanded.plus ? '' : 'hidden'}`}>
            <li>Adminision 100% bonificada </li>
            <li>Videollamada de seguimiento cada 15 dias</li>
            <li>Consultas ilimitadas por WhatsApp: soporte directo con el entrenador</li>
            <li>Guia de nutricion avanzado </li>
            <li>Incluye 2 clases de HIT.</li>
            <li>Incluye 2 clases de ABS</li>
            <li>Soporte técnico prioritario</li>
            <li>(2) Reajustes del plan de entrenamiento</li>
            <li>Acceso a la comunidad</li>
          </ul>
          <button className="text-red-600 mb-4" onClick={() => toggleExpand('plus')}>
            {expanded.plus ? 'Ver menos' : 'Ver beneficios'}
          </button>
          <div>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded mb-2"
              onClick={() => openWhatsApp("Hola, quiero solicitar el plan Plus y tener más información de cómo empezar!")}
            >
              Es para mí!
            </button>
          </div>
        </div>
       
       
        <div className="relative bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-center">Plan Pro</h3>
          <p className="text-black mb-4 text-center">
            Para quienes buscan un entrenamiento de nivel profesional con el máximo de beneficios.
          </p>
          <ul className={`list-disc list-inside mb-4 text-black text-center ${expanded.pro ? '' : 'hidden'}`}>
            <li>Rutinas personalizadas semanales, ajustadas continuamente a tus necesidades y progreso.</li>
            <li>Seguimiento intensivo con sesiones 1 a 1 por Google Meet cada semana para evaluar tu progreso.</li>
            <li>Consultas ilimitadas por WhatsApp con respuestas prioritarias y asistencia continua.</li>
            <li>Plan de alimentación premium, con un enfoque en rendimiento y bienestar integral.</li>
            <li>3 sesiones 1 a 1 presenciales gratis para entrenar con el entrenador.</li>
            <li>Soporte técnico premium para cualquier inconveniente relacionado con la rutina o el seguimiento.</li>
            <li>Este plan te ofrece la máxima personalización, atención directa y todos los recursos necesarios para alcanzar tus metas de manera eficiente.</li>
          </ul>
          <button className="text-red-600 mb-4" onClick={() => toggleExpand('pro')}>
            {expanded.pro ? 'Ver menos' : 'Ver beneficios'}
          </button>
          <div>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded mb-2"
              onClick={() => openWhatsApp("Hola, quiero solicitar el plan Pro y tener más información de cómo empezar!")}
            >
              Lo quiero!
            </button>
          </div>

          
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center rounded-lg">
            <span className="text-red-500 text-3xl  font-semibold">Próximamente</span>
          </div>
        </div>

        
      </div>
    </main>
  );
};

export default Main;
