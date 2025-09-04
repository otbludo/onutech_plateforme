import React from 'react';
import { motion } from 'framer-motion';

export const Button_contact = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <motion.button
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
        animate={{ scale: [1, 1.2, 1] }} // zoom puis dézoom
        transition={{
          duration: 1.5,       // durée d'une boucle
          ease: "easeInOut",    // transition fluide
          repeat: Infinity,     // répéter indéfiniment
        }}
      >
        <img src="./assets/img/whatsapp.png" alt="WhatsApp" />
      </motion.button>
    </div>
  );
};
