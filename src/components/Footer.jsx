import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="col-span-full lg:col-span-2 text-center md:text-left">
          <a href="/">
            <img src="/jadoo-logo.png" alt="Jadoo Logo" className="h-10 mx-auto md:mx-0 mb-4" />
          </a>
          <p className="text-textGray leading-relaxed">Book your trip in minute, get full control for much longer.</p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-secondary text-xl mb-6">Company</h4>
          <ul className="space-y-3 text-textGray">
            <li><a href="#" className="hover:text-primary transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Mobile</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-secondary text-xl mb-6">Contact</h4>
          <ul className="space-y-3 text-textGray">
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Help/FAQ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Press</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Affilates</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-secondary text-xl mb-6">More</h4>
          <ul className="space-y-3 text-textGray">
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Airlinefees</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Airline</a></li>
            <li><a href="#" className="hover:text-primary transition-colors duration-200">Low fare tips</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-8 md:space-y-0">
        <div className="flex space-x-6">
         
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <p className="text-textGray">Discover our app</p>
          <div className="flex space-x-3">
            <a href="#">
              <img src="/Google Play.png" alt="Google Play" className="h-10 object-contain hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="#">
              <img src="/app-store.png" alt="Apple Store" className="h-10 object-contain hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-16">
        All rights reserved@jadoo.co
      </div>
    </motion.footer>
  );
};

export default Footer;