export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Protection Nuisibles',
}

export default function PolitiqueConfidentialite() {
  return (
    /* 
      - pt-28 : Alignement identique sous le Header fixe.
      - max-w-3xl : Largeur confortable pour le texte juridique.
    */
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-100 pb-4">
        Politique de confidentialité
      </h1>

      {/* COLLECTE DES DONNÉES */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Collecte des données personnelles
      </h2>
      <p className="text-base sm:text-lg mb-3">
        Nous collectons des informations personnelles via :
      </p>
      <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg mb-6">
        <li>Formulaires de contact : nom, prénom, email, téléphone</li>
        <li>Inscription à la newsletter : email</li>
      </ul>

      {/* UTILISATION DES DONNÉES */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Utilisation des données
      </h2>
      <p className="text-base sm:text-lg mb-3">
        Les informations collectées sont utilisées exclusivement pour :
      </p>
      <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg mb-6">
        <li>Répondre aux demandes des utilisateurs</li>
        <li>Envoyer des newsletters si consentement donné</li>
      </ul>

      {/* DUREE DE CONSERVATION */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Durée de conservation
      </h2>
      <p className="text-base sm:text-lg">
        Les données sont conservées pendant 2 ans à compter du dernier contact.
      </p>

      {/* DROITS DES UTILISATEURS */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Droits des utilisateurs
      </h2>
      <p className="text-base sm:text-lg mb-3">
        Conformément à la loi RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression :
      </p>
      <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg mb-6">
        <li>
          Par email :{' '}
          <a href="mailto:contact@protection-nuisibles.fr" className="text-brand-blue hover:underline font-medium">
            contact@protection-nuisibles.fr
          </a>
        </li>
        <li>Par courrier : 88 chemin des charettes, 66000 Perpignan, France</li>
      </ul>

      {/* COOKIES */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Cookies
      </h2>
      <p className="text-base sm:text-lg">
        Nous utilisons des cookies essentiels, de performance et de publicité ciblée. Vous pouvez gérer votre consentement via l'outil prévu sur le site. Pour plus d'informations :{' '}
        <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">
          CNIL – Cookies
        </a>.
      </p>
      
    </main>
  )
}