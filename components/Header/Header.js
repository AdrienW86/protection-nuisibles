"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/pictures', label: 'Photos' },
    { href: '/desinsectisation', label: 'Désinsectisation' },
    { href: '/deratisation', label: 'Dératisation' },
    { href: '/frelons', label: 'Nids de guêpes / frelons' },
    { href: '/savoir-faire', label: 'Qui sommes-nous ?' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <Link href="/">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.logoWrapper}
        >
          <Image
            src="/logo.png"
            alt="Logo de l'entreprise - protection contre les nuisibles"
            title="Accueil - Protection Nuisibles"
            width={80}
            height={80}
            priority
            className={styles.logo}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </Link>

      <Image
        src="/garantie.png"
        alt="Garantie certibiocide contre les nuisibles"
        title="Garantie Certibiocide"
        width={160}
        height={120}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={styles.image}
      />

      <div className={styles.buttonBox}>
       <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`}
          onClick={handleMenuToggle}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation" 
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
      <nav id="main-navigation" aria-label="Menu principal">
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        className={styles.menu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ul className={styles.ul}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={styles.li}
                href={link.href}
                onClick={handleMenuToggle}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

    </header>
  );
}