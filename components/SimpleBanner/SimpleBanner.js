'use client';

import { useEffect, useState } from 'react';
import styles from './simpleBanner.module.css';

const images = [
  '/image4.png',
  '/image5.png',
  '/image6.png',
  '/image7.png',
  '/image8.png',
  '/image9.png',
  '/image10.png',
  '/image11.png',
  '/image12.png',
];

export default function SimpleBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '85vh', 
            }}
          />
        ))}
      </div>   
    </div>
  );
}