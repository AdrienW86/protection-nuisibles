'use client';

import { useEffect, useState } from 'react';

const images = [
  '/image4.png', '/image5.png', '/image6.png', '/image7.png',
  '/image8.png', '/image9.png', '/image10.png', '/image11.png', '/image12.png',
];

export default function SimpleBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // 3.5 secondes par image pour laisser le temps de voir le fondu

    return () => clearInterval(interval); 
  }, []);

  return (
    /* 
      - pt-16 ou pt-20 : Permet de décaler le carrousel pour qu'il commence 
        juste en dessous de ton Header fixe sans passer dessous.
    */
    <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-[80vh] overflow-hidden bg-slate-900 pt-20">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Un petit dégradé sombre optionnel en bas du carrousel pour faire une jolie transition avec le texte */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
}