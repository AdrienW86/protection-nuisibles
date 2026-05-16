import React from 'react'
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-blue text-white py-12 px-6 border-t border-white/10 flex flex-col items-center justify-center gap-8">
      
      {/* CONTENEUR DU LOGO (Retour au logo normal) */}
      <div className="transition-transform duration-200 hover:scale-105">
        <Image
          src="/logo.png"
          alt="Logo Protection Nuisibles"
          width={100}
          height={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain" // Le logo s'affiche avec ses couleurs d'origine
        />
      </div>

      {/* LIENS JURIDIQUES */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-slate-200">
        <a href="/mentions-legales" className="hover:text-white transition-colors duration-150">
          Mentions légales
        </a>
        <span className="hidden sm:inline text-white/20">|</span>
        <a href="/politique-confidentialite" className="hover:text-white transition-colors duration-150">
          Politique de confidentialité
        </a>
        <span className="hidden sm:inline text-white/20">|</span>
        <a href="/cgv" className="hover:text-white transition-colors duration-150">
          CGV
        </a>
      </div>

      {/* SIGNATURE CRÉATEUR */}
      <a 
        className="text-xs tracking-wide text-white/40 hover:text-white transition-colors duration-150" 
        href="https://code-v.fr" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Réalisé par <span className="font-bold text-white hover:underline">Codev</span>
      </a>

      {/* COPYRIGHT */}
      <p className="text-xs text-white/30 font-normal">
        © {currentYear} Protection Nuisibles. Tous droits réservés.
      </p>
      
    </footer>
  )
}