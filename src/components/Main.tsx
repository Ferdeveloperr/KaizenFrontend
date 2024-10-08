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

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Tarjeta para el Plan Activo */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Plan Activo</h3>
          <p className="text-black mb-4">
            Ideal para quienes buscan comenzar con un entrenamiento estructurado y eficaz.
          </p>
          <ul className={`list-disc list-inside mb-4 text-black ${expanded.activo ? '' : 'hidden'}`}>
            <li>Rutinas de entrenamiento personalizadas entregadas cada mes.</li>
            <li>Consultas vía WhatsApp: resolución de dudas con el entrenador, disponible de lunes a viernes.</li>
            <li>Plan de alimentación básico para complementar tus entrenamientos.</li>
            <li>Este plan te ofrece lo esencial para empezar a mejorar tu rendimiento físico desde la comodidad de tu hogar o gimnasio.</li>
          </ul>
          <button className="text-red-600 mb-4" onClick={() => toggleExpand('activo')}>
            {expanded.activo ? 'Ver menos' : 'Ver beneficios'}
          </button>
          <div>
            <button className="bg-red-600 text-white py-2 px-4 rounded mb-2">
                Voy a empezar!
            </button>
        </div>
        </div>
       

        {/* Tarjeta para el Plan Plus */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Plan Plus</h3>
          <p className="text-black mb-4">
            Perfecto para quienes desean un nivel adicional de personalización y seguimiento.
          </p>
          <ul className={`list-disc list-inside mb-4 text-black ${expanded.plus ? '' : 'hidden'}`}>
            <li>Rutinas de entrenamiento avanzadas actualizadas cada dos semanas, ajustadas a tu progreso.</li>
            <li>Seguimiento de la rutina mediante sesiones grupales por Google Meet cada mes.</li>
            <li>Consultas ilimitadas por WhatsApp: soporte directo con el entrenador, de lunes a viernes.</li>
            <li>Plan de alimentación personalizado para cumplir con tus objetivos nutricionales.</li>
            <li>Soporte técnico en caso de problemas con la rutina o acceso a los materiales.</li>
            <li>El Plan Plus está diseñado para ofrecerte un acompañamiento más cercano y un enfoque más detallado en tu progreso.</li>
          </ul>
          <button className="text-red-600 mb-4" onClick={() => toggleExpand('plus')}>
            {expanded.plus ? 'Ver menos' : 'Ver beneficios'}
          </button>
            <div>
                <button className="bg-red-600 text-white py-2 px-4 rounded mb-2">
                    Es para mi!
                </button>
            </div>
        </div>
       

        {/* Tarjeta para el Plan Pro */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Plan Pro</h3>
          <p className="text-black mb-4">
            Para quienes buscan un entrenamiento de nivel profesional con el máximo de beneficios.
          </p>
          <ul className={`list-disc list-inside mb-4 text-black ${expanded.pro ? '' : 'hidden'}`}>
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
                <button className="bg-red-600 text-white py-2 px-4 rounded mb-2">
                    Lo quiero!
                </button>
            </div>
        </div>
        
      </div>
    </main>
  );
};

export default Main;
