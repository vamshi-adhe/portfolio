import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const headerClasses = isScrolled 
    ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-lg' 
    : 'bg-transparent';
  
  const logoColor = isScrolled ? 'text-primary' : 'text-gray-800 dark:text-white';
  const linkColor = 'text-gray-800 dark:text-white';
  const hamburgerColor = 'bg-gray-800 dark:bg-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold tracking-wider">
          <span className={`${logoColor} transition-colors duration-300`}>Vamshi</span>
        </a>

        <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-medium ${linkColor} hover:text-primary transition-colors duration-300`}
                >
                {link.name}
                </a>
            ))}
            </nav>

            <button 
                onClick={toggleTheme} 
                className="relative ml-6 p-2 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300" 
                aria-label="Toggle theme"
            >
                <div className={`absolute transition-all duration-500 ease-in-out ${theme === 'dark' ? 'transform rotate-0 scale-100' : 'transform -rotate-90 scale-0'}`}>
                    <SunIcon />
                </div>
                <div className={`absolute transition-all duration-500 ease-in-out ${theme === 'light' ? 'transform rotate-0 scale-100' : 'transform rotate-90 scale-0'}`}>
                    <MoonIcon />
                </div>
            </button>

            <button
                className="md:hidden z-50 ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                <div className="space-y-2">
                    <span className={`block w-6 h-0.5 ${hamburgerColor} transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 ${hamburgerColor} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 ${hamburgerColor} transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
            </button>
        </div>


        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-dark-bg/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-800 dark:text-white text-2xl font-medium hover:text-primary transition-colors duration-300"
                >
                {link.name}
                </a>
            ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;