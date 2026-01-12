import { useState, useEffect } from 'react';
import logo from '../../assets/solverous_logo.png';
import Button from '../Buttons/button';

function Navbar() {
  // Opening of hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  // Scrolled effect 
  const [scrolled, setScrolled] = useState(false);
  // For nav links
  const navLinks = ["Home", "Services", "Clients", "About Us", "FAQs"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='flex items-center justify-between sticky top-0 bg-white z-50 '>
      {/* Logo */}
      <a href='#home' className='my-[1rem] ml-[2.063rem] md:my-3 md:ml-[7.438rem] w-fit active:scale-95'>
        <img src={logo} alt="Solverous logo" className='w-12 md:w-10 lg:w-12' />
      </a>

      {/* Desktop Navigation */}
      <div className='w-fit'>
        <nav className={scrolled ? "hidden md:flex cursor-pointer p_white_bg flex-row items-center space-x-12 md:space-x-8 lg:space-x-12 w-full my-[1rem] md:my-3 mr-[2.063rem] md:mr-[7.438rem]" : "hidden md:flex cursor-pointer p_white_bg flex-row items-center space-x-12 md:space-x-8 lg:space-x-12 w-full my-[1rem] md:my-3 mr-[2.063rem] md:mr-[7.438rem]"}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:font-bold hover:underline transition-all duration-200 active:scale-95 "
            >
              {link}
            </a>
          ))}

          <a href="#contact-us" className='text-[#007EE6] bg-transparent border border-[#007EE6] hover:bg-[#007EE6] hover:text-white py-4 px-[30%] md:py-2 md:px-4 rounded-lg'>
            <Button
              title="Contact Us"
              type="none"
              buttonCustomStyle=""
            />
          </a>
        </nav>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-auto my-[1rem] mr-[2.063rem] md:my-3 md:mr-[7.438rem]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-7 h-7 text-[#003058]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-16 left-0 w-full bg-white md:hidden shadow-lg overflow-hidden transition-all duration-500 ease-in-out py-4 space-y-4`}
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className=" hover:font-bold hover:underline transition-all duration-200 p_white_bg active:scale-95 "
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact-us" className='text-[#007EE6] bg-transparent border border-[#007EE6] hover:bg-[#007EE6] hover:text-white py-4 px-[30%] md:py-2 md:px-4 rounded-xl'>
            <Button
              title="Contact Us"
              type="none"
              buttonCustomStyle=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
