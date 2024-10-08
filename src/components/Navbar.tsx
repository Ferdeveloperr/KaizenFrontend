import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full  bg-black text-white p-2 flex justify-between items-center z-20"> 
      <div className="logo flex items-center">
        <img 
            src="https://res.cloudinary.com/dzzec7hzl/image/upload/v1728408679/Modern_Black_Beige_Initial_Fashion_Logo_mhuntu.png" 
            alt="Logo" 
            className="h-20 w-auto"  
        />
      </div>


      
      <ul className="hidden md:flex list-none p-0 space-x-6 px-6">
        <li>
          <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300">Inicio</a>
        </li>
        <li>
          <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300">Acerca</a>
        </li>
        <li>
          <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300">Servicios</a>
        </li>
        <li>
          <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300">Contacto</a>
        </li>
      </ul>

     
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
         
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-center space-y-4 md:hidden z-10">
          <li>
            <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Inicio</a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Acerca</a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Servicios</a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:text-red-600 transition duration-300 block py-2">Contacto</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
