import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Kaizen Active</h3>
          <p className="text-black mb-4">Descripción breve de la tarjeta 1.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            Llamar a la acción
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Kaizen Plus</h3>
          <p className="text-black mb-4">Descripción breve de la tarjeta 2.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            Llamar a la acción
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Kaizen Pro</h3>
          <p className="text-black mb-4">Descripción breve de la tarjeta 3.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            Llamar a la acción
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
