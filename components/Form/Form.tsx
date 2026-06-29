"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Loader2 } from "lucide-react";

// Interface pour les types du formulaire
interface IFormInput {
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSended, setIsSended] = useState<boolean>(false);
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      });

      if (response.ok) {
          reset();
          setIsSended(true);
      } else {
          alert("Le formulaire n'a pas pu être envoyé");
      }
    } catch (err) {
      alert("Erreur réseau");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto mt-4 bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
        {isSended ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center"> 
              <p className="text-emerald-800 font-medium">Message bien reçu. Nous vous recontactons vite.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input 
                {...register('name', { required: true })} 
                className="w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm" 
                placeholder="Nom" 
              />
              <input 
                {...register('phone', { required: true })} 
                className="w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm" 
                placeholder="Téléphone" 
              />
              <input 
                {...register('email', { required: true })} 
                type="email"
                className="w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm" 
                placeholder="Email" 
              />
              <input 
                {...register('city', { required: true })} 
                className="w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm" 
                placeholder="Ville" 
              />
              <input 
                {...register('subject', { required: true })} 
                className="w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm" 
                placeholder="Sujet" 
              />
              <textarea 
                {...register('message', { required: true })} 
                rows={4}
                className="w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm" 
                placeholder="Votre message..." 
              />

              <button 
                disabled={isLoading}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                type="submit"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Envoyer"}
              </button>
            </form>
        )}
    </section>
  );
}