import React from 'react';


interface HeaderProps {
  bannerImage: string; 
  altText?: string;   
}

const Header: React.FC<HeaderProps> = ({ bannerImage, altText = 'Banner' }) => {
  return (
    <header className="relative">
      
      <div className="banner">
        <img 
          src={bannerImage} 
          alt={altText} 
          className="w-full h-90 object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
