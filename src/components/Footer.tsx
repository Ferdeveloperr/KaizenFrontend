import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2">Contáctanos</h2>
          <p className="mb-1">Email: <a href="mailto:contacto@kaizen.com" className="underline hover:text-red-600 transition duration-300">contacto@kaizen.com</a></p>
        </div>
        
        <div className="mb-6 md:mb-0 text-center">
          <h2 className="text-lg font-bold mb-2 mt-2">Síguenos</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-red-600 transition duration-300">
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-600 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-600 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 mt-2">Enlaces</h2>
          <a href="/terminos" className="hover:text-red-600 transition duration-300">Términos y Condiciones</a>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 Kaizen. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
