import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'

export const metadata = {
  title: 'Contact – Protection Nuisibles',
  description: "Contactez Protection Nuisibles pour une intervention rapide contre les nuisibles dans les Pyrénées-Orientales. Demandez un devis gratuit.",
}

export default function Contact() {
  return (
    /* 
      CHANGEMENT ICI : 
      - Passé de pt-12 à pt-28 (ou pt-32) pour donner assez d'espace.
      - Si ton header est très grand, pt-32 (128px) garantit que le titre descend en dessous.
    */
    <main className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      
      {/* TITRE */}
      <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center mb-10">
        Nous contacter
      </h2>     
      <Map />
        <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center mb-10">
          Demandez votre devis gratuit à domicile
        </h2>
      <Form />  
    </main>
  )
}