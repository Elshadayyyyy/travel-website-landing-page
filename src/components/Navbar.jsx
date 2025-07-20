import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Destinations', href: '#' },
    { name: 'Hotels', href: '#' },
    { name: 'Flights', href: '#' },
    { name: 'Bookings', href: '#' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8"
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img src="/jadoo-logo.png" alt="Jadoo Logo" className="h-8 md:h-10" />
        </a>

        <ul className="hidden md:flex items-center space-x-8 lg:space-x-12 text-secondary font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
          <li><a href="#" className="hover:text-primary transition-colors duration-300">Login</a></li>
          <li>
            <a href="#" className="border border-secondary px-6 py-2 rounded-md hover:bg-secondary hover:text-white transition-all duration-300">
              Sign up
            </a>
          </li>
          <li>
            <select className="bg-transparent text-secondary outline-none border-none focus:ring-0 cursor-pointer">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-secondary text-3xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 text-xl"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#" className="text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
            <a href="#" className="border border-secondary px-8 py-3 rounded-md text-secondary hover:bg-secondary hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Sign up</a>
            <select className="bg-transparent text-secondary text-lg outline-none border-none focus:ring-0 cursor-pointer">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;