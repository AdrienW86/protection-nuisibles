import Gallery from '@/components/Gallery/Gallery'

export const metadata = {
  title: 'Nos interventions en images – Protection Nuisibles',
  description: "Découvrez en images nos interventions de lutte contre les nuisibles dans le département des Pyrénées-Orientales.",
}

export default function PicturesPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* TITRE PRINCIPAL UNIFIÉ */}
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-12 border-b border-slate-100 pb-4">  
        Nos interventions en images
      </h2>
      
      <Gallery />   
    </main>
  )
}