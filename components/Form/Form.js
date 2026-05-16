"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSended, setIsSended] = useState(false);
 
  const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  const onSubmit = async(data) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      await response.json();
      setIsLoading(false);

      if (!response.ok) {
          alert("Le formulaire n'a pas pu être envoyé")
      } else {
          reset();
          setIsSended(true);
          alert("Le formulaire a été envoyé avec succès")
      }
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto mt-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
        {isSended && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-fade-in"> 
              <p className="text-emerald-800 font-medium leading-relaxed">
                Votre message a bien été envoyé. <br/>
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
        )}
        
        {!isSended && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">           
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 text-center mb-6"> 
                Une question ? Nous vous répondrons dans les meilleurs délais 
              </h3>    
              
              <div className="space-y-4">
                {/* CHAMP NOM */}
                <div>
                  <input 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-brand-blue focus:bg-white transition-all duration-200 text-sm sm:text-base" 
                    placeholder="Nom" 
                    {...register('name', {required: true})} 
                  />
                  {errors.name && <span className="text-xs text-rose-600 font-medium mt-1 block pl-1">Ce champ est requis.</span>}          
                </div>

                {/* CHAMP EMAIL */}
                <div>
                  <input 
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-brand-blue focus:bg-white transition-all duration-200 text-sm sm:text-base" 
                    placeholder="Email" 
                    {...register('email', {required: true})} 
                  />
                  {errors.email && <span className="text-xs text-rose-600 font-medium mt-1 block pl-1">Ce champ est requis.</span>}          
                </div>

                {/* CHAMP SUJET */}
                <div>
                  <input 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-brand-blue focus:bg-white transition-all duration-200 text-sm sm:text-base" 
                    placeholder="Sujet de votre demande" 
                    {...register('subject', {required: true})} 
                  />
                  {errors.subject && <span className="text-xs text-rose-600 font-medium mt-1 block pl-1">Ce champ est requis.</span>}           
                </div>

                {/* CHAMP MESSAGE */}
                <div>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-brand-blue focus:bg-white transition-all duration-200 text-sm sm:text-base resize-y min-h-[120px]" 
                    placeholder="Votre message..."  
                    {...register('message', {required: true})} 
                  />
                  {errors.message && <span className="text-xs text-rose-600 font-medium mt-1 block pl-1">Ce champ est requis.</span>}     
                </div>
              </div>

              {/* BOUTON D'ENVOI */}
              <div className="pt-2">
                <button 
                  disabled={isLoading}
                  className="w-full bg-brand-blue hover:bg-opacity-90 disabled:bg-slate-300 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-xs text-center flex items-center justify-center gap-2"
                  type="submit"
                >
                  {isLoading ? (
                    <>
                      {/* Petit effet de chargement natif en CSS */}
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : "Envoyer le message"}
                </button>
              </div>     
            </form>
        )}
    </section>
  );
}