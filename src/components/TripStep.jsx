import React from 'react';
import { motion } from 'framer-motion';

const TripStep = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
      className="flex items-start space-x-6"
    >
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <div>
        <h3 className="font-bold text-secondary text-lg mb-1">{title}</h3>
        <p className="text-textGray leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TripStep;