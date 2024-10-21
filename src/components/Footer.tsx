import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Importa Link
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de flecha

const Footer: React.FC = () => {
  // Función para scroll a la parte superior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2">Contáctanos</h2>
          <p className="mb-1">Email: <a href="mailto:jorgelegui_894@hotmail.com" className="underline hover:text-red-600 transition duration-300">jorgelegui_894@hotmail.com</a></p>
        </div>
        
        <div className="mb-6 md:mb-0 text-center">
          <h2 className="text-lg font-bold mb-2 mt-2">Síguenos</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://www.tiktok.com/@shorch98" className="hover:text-red-600 transition duration-300">
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/jorrge.leguizamon/" className="hover:text-red-600 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-600 transition duration-300">
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5"/>
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 mt-2">Enlaces</h2>
          <Link to="/terminos" className="hover:text-red-600 transition duration-300">Términos y Condiciones</Link>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 Kaizen. Todos los derechos reservados.</p>
        <button onClick={scrollToTop} className="mt-4 text-red-600 hover:text-red-400 transition duration-300">
          <FontAwesomeIcon icon={faChevronUp} className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
