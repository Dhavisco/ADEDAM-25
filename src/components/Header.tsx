import { useState, useEffect } from 'react';
import menuIcon from '../assets/menu.png';

import { FC } from 'react';


interface HeaderProps {
  onRSVPClick: () => void;
}

const Header: FC<HeaderProps> = ({ onRSVPClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full flex justify-between items-center p-4 md:p-8 z-50 transition-all ${
      scrolled ? 'bg-opacity-80 backdrop-blur-sm bg-gray-200' : 'bg-white'
    } shadow-sm`}>
      <img src={menuIcon} alt="Menu" className="h-8 w-8 md:h-10 md:w-10 cursor-pointer" />
      <div className="text-4xl md:text-6xl font-clicker">A + R</div>
      <button 
        onClick={onRSVPClick}
        className="bg-black text-white px-4 py-2 md:px-8 md:py-4 font-jost hover:bg-opacity-90 transition-all"
      >
        RSVP
      </button>
    </header>
  );
};

export default Header;