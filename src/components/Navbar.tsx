import React, { useState, useEffect } from 'react';

interface NavbarProps {
  infoRef: React.RefObject<HTMLDivElement>;
  mainRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  carrouselRef: React.RefObject<HTMLDivElement>;
  formContactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ infoRef, mainRef, formContactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 left-0 w-full flex justify-between items-center z-50 shadow-md font-nunito transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-100'}`}>
      <div className="logo flex items-center">
        <img
          src="https://res.cloudinary.com/dzzec7hzl/image/upload/v1728421136/Modern_Black_Beige_Initial_Fashion_Logo_3_uxhhqo.png"
          alt="Logo"
          className="h-20 w-auto"
        />
      </div>

      <ul className="hidden md:flex list-none p-0 space-x-6 px-6">
        <li>
          <button onClick={() => scrollToRef(infoRef)} className="text-white no-underline hover:text-red-600 transition duration-300">Inicio</button>
        </li>
        <li>
          <button onClick={() => scrollToRef(infoRef)} className="text-white no-underline hover:text-red-600 transition duration-300">Como trabajamos</button>
        </li>
        <li>
          <button onClick={() => scrollToRef(mainRef)} className="text-white no-underline hover:text-red-600 transition duration-300">Servicios</button>
        </li>
        <li>
          <button onClick={() => scrollToRef(formContactRef)} className="text-white no-underline hover:text-red-600 transition duration-300">Contacto</button>
        </li>
      </ul>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div className={`absolute top-16 left-0 w-full text-center space-y-4 z-40 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} ${isScrolled ? 'bg-black bg-opacity-70' : 'bg-black'}`}>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <button onClick={() => scrollToRef(infoRef)} className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Inicio</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(infoRef)} className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Como trabajamos</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(mainRef)} className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Servicios</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(formContactRef)} className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Contacto</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
