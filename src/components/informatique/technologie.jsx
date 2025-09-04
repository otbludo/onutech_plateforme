import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "React", src: "./assets/img/react.png", bg: "bg-blue-500", size: "w-16 h-16", imgSize: "w-16 h-16"  },
  { name: "Python", src: "./assets/img/python.png", bg: "bg-white", size: "w-16 h-16", imgSize: "w-10 h-10" },
  { name: "Node.js", src: "./assets/img/nodejs.png", bg: "bg-white", size: "w-16 h-16", imgSize: "w-10 h-10" },
  { name: "Tailwind", src: "./assets/img/tailwind.svg", bg: "bg-white", size: "w-16 h-16", imgSize: "w-10 h-10" },
  { name: "JavaScript", src: "./assets/img/javascript.png", bg: "bg-yellow-600", size: "w-16 h-16", imgSize: "w-16 h-16" },
  { name: "TypeScript", src: "./assets/img/typescript.png", bg: "bg-blue-700", size: "w-16 h-16", imgSize: "w-16 h-16" },
  { name: "MongoDB", src: "./assets/img/mongodb.png", bg: "bg-white", size: "w-16 h-16", imgSize: "w-10 h-10" },
  { name: "Docker", src: "./assets/img/docker.png", bg: "bg-blue-500", size: "w-16 h-16", imgSize: "w-10 h-10" },
  { name: "Fastapi", src: "./assets/img/fastapi.png", bg: "bg-white", size: "w-16 h-16", imgSize: "w-full" },
  { name: "Django", src: "./assets/img/django.png", bg: "bg-white", size: "w-16 h-16", imgSize: "w-10 h-10" },
];

export const Technologie = () => {
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const item = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="overflow-x-auto w-full pt-4">
      <motion.div
        className="flex gap-4 max-w-full py-4 justify-between px-16 "
        variants={container}
        animate="animate"
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} className="flex flex-col items-center" variants={item}>
            <div className={`${tech.size} ${tech.bg} rounded-full flex items-center justify-center mb-2 shadow-lg`}>
              <img src={tech.src} alt={tech.name} className={`${tech.imgSize} rounded-full `} />
            </div>
            <span className="text-xs text-center font-[600]">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
