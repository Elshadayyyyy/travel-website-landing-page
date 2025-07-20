import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ image, location, price, days }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      <img src={image} alt={location} className="w-full h-64 object-cover rounded-t-3xl" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg text-secondary">{location}</h3>
          <p className="text-gray-700">{price}</p>
        </div>
        <p className="text-gray-500 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {days} Days Trip
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;