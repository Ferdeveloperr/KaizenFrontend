import React from 'react';

interface HeaderProps {
  bannerImage: string;
  altText?: string;
}

const Header: React.FC<HeaderProps> = ({ bannerImage, altText = 'Banner' }) => {
  const whatsappLink =
    "https://wa.me/5491126629808?text=¡Hola!%20Me%20gustaría%20consultar%20más%20información%20sobre%20los%20servicios%20de%20coaching%20que%20ofrecen.";

  return (
    <header className="relative">
      <div className="banner">
        <img
          src={bannerImage}
          alt={altText}
          className="w-full h-90 object-cover"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-end pb-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-700 text-white  px-4 py-2 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-600 hover:text-white duration-300
                     md:px-6 md:py-3 md:text-base sm:px-4 sm:py-2 sm:text-sm"
        >
          ¡Entrenemos!
        </a>
      </div>
    </header>
  );
};

export default Header;
