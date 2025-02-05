import logoImage from "../assets/logo2.png";
import { useState } from 'react';
// import { useCart } from './CartContext.jsx';///////////////////////////////////

const Navbar = () => {
  // const { cartItems, setIsOrderModalOpen } = useCart();/////////////////////////////////////
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
    setIsMenuOpen(false); // Close the mobile menu
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logoImage} alt="Mamta Kitchen" className="h-16 w-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row absolute md:relative 
          top-full left-0 w-full md:w-auto 
          bg-white md:bg-transparent 
          flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 
          p-4 md:p-0 shadow-md md:shadow-none
        `}>
          <li>
            <a 
              href="#home" 
              onClick={() => handleLinkClick('home')}
              className={`hover:text-primary ${activeLink === 'home' ? 'border-b-2 border-primary' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={() => handleLinkClick('about')}
              className={`hover:text-primary ${activeLink === 'about' ? 'border-b-2 border-primary' : ''}`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              onClick={() => handleLinkClick('menu')}
              className={`hover:text-primary ${activeLink === 'menu' ? 'border-b-2 border-primary' : ''}`}
            >
              Menu
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={() => handleLinkClick('contact')}
              className={`hover:text-primary ${activeLink === 'contact' ? 'border-b-2 border-primary' : ''}`}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#feedback" 
              onClick={() => handleLinkClick('feedback')}
              className={`hover:text-primary ${activeLink === 'feedback' ? 'border-b-2 border-primary' : ''}`}
            >
              Feedback
            </a>
          </li>
        </ul>

        <a 
          href="#order-now" 
          className="hidden md:block bg-primary text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          Order Now
        </a>
        {/* <button 
        onClick={() => setIsOrderModalOpen(true)}
        className="flex items-center"
      >
        Order Now
        {cartItems.length > 0 && (
          <span className="ml-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItems.length}
          </span>
        )}
      </button> */}
      </nav>
    </header>
  );
};

export default Navbar;