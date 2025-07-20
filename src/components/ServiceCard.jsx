import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
      className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
    >
      
      <img
        src="/service-orange-thing.svg"
        alt="Decorative shape"
        className="absolute bottom-1 left-0 w-24 h-24 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ transform: 'translateY(50%) translateX(-20%)' }}
      />
      <div className="mb-6 flex justify-center relative z-10"> 
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="font-semibold text-xl text-secondary mb-3 relative z-10">{title}</h3> 
      <p className="text-textGray leading-relaxed relative z-10">{description}</p> 
    </motion.div>
  );
};

export default ServiceCard;