import { useState } from 'react';
import logo from '../../assets/solverous_logo.png';
import Button from '../Buttons/button';

function Navbar() {
  // Opening of hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  // For nav links
  const navLinks = ["Home", "Services", "Clients", "About Us", "FAQs"];

  return (
    <header className='flex flex-row items-center w-fit my-[1rem] mx-[2.063rem] md:my-4 md:mx-[7.438rem] relative'>
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className='w-[17%] md:w-[10%]' />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden text-[0.93rem] md:flex cursor-pointer text-[#003058] flex-row items-center space-x-12 w-full">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:font-bold hover:underline transition-all duration-200 active:scale-95"
          >
            {link}
          </a>
        ))}

        <Button title="Contact Us" type="none" />
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-6 h-6 text-[#003058]"
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
        className={`absolute top-12 left-0 w-full bg-white md:hidden shadow-lg overflow-hidden transition-all duration-500 ease-in-out py-4 space-y-4`}
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
              className=" hover:font-bold hover:underline transition-all duration-200 text-[#003058] text-[1.25rem] active:scale-95 "
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button title="Contact Us" type="none" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
