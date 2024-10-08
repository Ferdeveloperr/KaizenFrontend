import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold mb-2">Contáctanos</h2>
          <p className="mb-1">Email: contacto@kaizen.com</p>
          <p>Teléfono: +549 11-2662-9808</p>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-2">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-600 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-red-600 transition duration-300">Instagram</a>
            <a href="#" className="hover:text-red-600 transition duration-300">Twitter</a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Enlaces</h2>
          <a href="/terminos" className="hover:text-red-600 transition duration-300">Términos y Condiciones</a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>© 2024 Kaizen. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
