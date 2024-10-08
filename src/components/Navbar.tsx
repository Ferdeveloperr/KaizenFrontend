
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Mi Navbar</h1>
      <ul className="flex list-none p-0">
        <li className="mr-4">
          <a href="#" className="text-white no-underline">Inicio</a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white no-underline">Acerca</a>
        </li>
        <li>
          <a href="#" className="text-white no-underline">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

