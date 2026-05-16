'use client';

import React from 'react';

export default function GoogleMap() {
  const address = {
    name: "Protection Nuisibles",
    phone: "07 57 51 64 14",
    fullAddress: "Pyrénées-Orientales",
  };

  return (
    /* 
      CONTENEUR PRINCIPAL : 
      Structure en grille (1 colonne sur mobile, 2 colonnes sur ordi à partir de md:)
    */
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 items-stretch">
       
       {/* BLOC INFOS (Prend 1 colonne sur 3 sur grand écran) */}
       <div className="md:col-span-1 bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-center">
        <h3 className="text-xl font-black text-brand-blue tracking-tight mb-4">
          {address.name}
        </h3>
        
        <div className="space-y-3 text-slate-700">
          <p className="text-sm sm:text-base leading-relaxed">
            <strong className="block text-slate-900 font-semibold mb-0.5">Zone d'intervention :</strong> 
            {address.fullAddress}
          </p>
          
          <p className="text-sm sm:text-base leading-relaxed">
            <strong className="block text-slate-900 font-semibold mb-0.5">Téléphone :</strong> 
            <a href={`tel:${address.phone.replace(/\s/g, '')}`} className="text-brand-blue hover:underline font-medium">
              {address.phone}
            </a>
          </p>
        </div>
      </div>

      {/* CONTENEUR DE LA CARTE (Prend 2 colonnes sur 3 sur grand écran) */}
      <div className="md:col-span-2 w-full h-[300px] sm:h-[350px] rounded-xl overflow-hidden shadow-xs border border-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d2.863226134086672!3d42.69910031702662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1745486342047!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>     

    </div>
  );
}