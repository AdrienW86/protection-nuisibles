export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Protection Nuisibles',
}

export default function MentionsLegales() {
  return (
    /* 
      - pt-28 : Même hauteur pour passer sous ton Header fixe.
      - max-w-3xl : Garde le même confort de lecture que les CGV.
    */
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-100 pb-4">
        Mentions légales
      </h1>
      
      {/* ÉDITEUR DU SITE */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Éditeur du site
      </h2>
      <p className="text-base sm:text-lg space-y-1">
        <span className="block"><strong>Nom :</strong> GREGORY ROBLES</span>
        <span className="block"><strong>Forme juridique :</strong> Auto-entrepreneur</span>
        <span className="block"><strong>Dénomination commerciale :</strong> Protection Nuisibles</span>
        <span className="block"><strong>Adresse :</strong> 88 chemin des charettes, 66000 Perpignan, France</span>
        <span className="block">
          <strong>Téléphone :</strong>{' '}
          <a href="tel:+33757516414" className="text-brand-blue hover:underline font-medium">
            +33 7 57 51 64 14
          </a>
        </span>
        <span className="block">
          <strong>Email :</strong>{' '}
          <a href="mailto:contact@protection-nuisibles.fr" className="text-brand-blue hover:underline font-medium">
            contact@protection-nuisibles.fr
          </a>
        </span>
        <span className="block"><strong>Directeur de publication :</strong> Gregory ROBLES</span>
        <span className="block"><strong>SIREN :</strong> 834799751</span>
        <span className="block"><strong>SIRET :</strong> 83479975100013</span>
        <span className="block"><strong>TVA Intracom :</strong> FR87838906659</span>
      </p>

      {/* HÉBERGEUR */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Hébergeur
      </h2>
      <p className="text-base sm:text-lg">
        <strong>Nom :</strong> Vercel Inc.<br/>
        <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br/>
        <strong>Site web :</strong>{' '}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">
          https://vercel.com
        </a>
      </p>

      {/* CONDITIONS D'UTILISATION */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Conditions d'utilisation
      </h2>
      <p className="text-base sm:text-lg">
        Le site Protection Nuisibles est accessible à l'URL : <span className="font-medium text-slate-900">https://protection-nuisibles.fr</span>.<br/>
        Son utilisation est régie par les présentes conditions. En utilisant le site, vous acceptez ces conditions. Elles peuvent être modifiées à tout moment sans préavis.
      </p>

      {/* LIMITATION DE RESPONSABILITÉ */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Limitation de responsabilité
      </h2>
      <p className="text-base sm:text-lg">
        Les informations présentes sur ce site sont fournies de bonne foi, mais peuvent contenir des inexactitudes ou omissions. L'entreprise Protection Nuisibles ne saurait être tenue responsable de toute utilisation ou interprétation erronée.
      </p>

      {/* LITIGES */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Litiges
      </h2>
      <p className="text-base sm:text-lg">
        Les présentes conditions sont régies par la loi française et tout litige relève des tribunaux français. La langue de référence pour tout contentieux est le français.
      </p>
      
    </main>
  )
}