'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/image4.png', '/image5.png', '/image6.png', '/image7.png',
  '/image8.png', '/image9.png', '/image10.png', '/image11.png', '/image12.png',
];

export default function SimpleBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-[80vh] overflow-hidden bg-slate-900 pt-20">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image}
              alt={`Bannière protection nuisibles ${index + 1}`}
              fill
              className="object-cover object-center"
              // sizes indique au navigateur la largeur réelle de l'image à l'écran. 
              // Ici, la bannière prend 100% de la largeur de l'écran (100vw).
              sizes="100vw"
              // Crucial : On met 'priority' UNIQUEMENT sur la toute première image 
              // pour qu'elle s'affiche instantanément (LCP au top).
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Dégradé sombre optionnel */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
}