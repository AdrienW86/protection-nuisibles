import React from 'react'

export default function Menu() {
  return (
    /* py-16 : Espacement idéal entre le carrousel d'images du haut et ton footer */
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full text-slate-700 leading-relaxed" aria-label="Destruction de nids de guêpes et frelons dans les Pyrénées-Orientales">
        
        {/* TITRE PRINCIPAL H1 */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-6">
          L'elimination des nids de guêpes et frelons avec Protection Nuisibles
        </h1>
        
        {/* PARAGRAPHE D'ACCROCHE */}
        <p className="text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Chez <strong className="text-brand-blue font-semibold">Protection Nuisibles</strong>, nous intervenons rapidement et en toute sécurité pour détruire 
          les nids de guêpes et frelons. Protégez votre famille, vos clients ou vos employés grâce à notre expertise professionnelle.
        </p>

        {/* STRUCTURE DES ÉTAPES (Cartes modernes Tailwind v4) */}
        <div className="space-y-6 mb-16">
          
          {/* ÉTAPE 1 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">1</span>
              Évaluation de la situation
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous réalisons une inspection complète pour localiser précisément le ou les nids 
              (toitures, arbres, combles, murs, etc.) et évaluer le niveau de danger. 
              Un devis clair vous est remis avant toute intervention.
            </p>    
          </div>

          {/* ÉTAPE 2 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">2</span>
              Préparation sécurisée de l'intervention
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Avant d'agir, nous sécurisons la zone d'intervention pour protéger les habitants et 
              limitons les risques de piqûres. Nos techniciens utilisent des équipements de protection individuelle adaptés.
            </p> 
          </div>

          {/* ÉTAPE 3 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">3</span>
              Destruction du nid
            </h2>
            <div className="sm:pl-11 space-y-4">
              <ul className="list-disc pl-5 space-y-1 text-base text-slate-600">
                <li>Traitement spécifique pour guêpes et frelons européens ou asiatiques</li>
                <li>Utilisation d'insecticides professionnels homologués</li>
                <li>Destruction complète du nid ou enlèvement sécurisé</li>
                <li>Intervention rapide et efficace</li>
              </ul>
              <p className="text-base text-slate-600 font-medium">
                Nos méthodes garantissent une élimination totale du nid, limitant le risque de reformation et assurant votre sécurité.
              </p>
            </div>
          </div>

          {/* ÉTAPE 4 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">4</span>
              Conseils de prévention
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Après la destruction, nous vous donnons des conseils pour éviter le retour des guêpes ou frelons : 
              fermeture des accès, surveillance des zones sensibles, entretien régulier.
            </p>
          </div>

          {/* ÉTAPE 5 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">5</span>
              Nettoyage et vérification
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous nous assurons que la zone est totalement sécurisée après notre intervention 
              et procédons à un nettoyage si nécessaire. Nous réalisons un dernier contrôle avant de quitter les lieux.
            </p>
          </div>

        </div>

        {/* ENCADRÉ BLOC DE FIN */}
        <div className="bg-brand-blue text-white p-6 rounded-2xl text-center shadow-xs">
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            Avec <strong className="underline">Protection Nuisibles</strong>, éliminez en toute sécurité les nids de guêpes et frelons grâce à des professionnels qualifiés 
            et des interventions rapides dans tout le département des Pyrénées-Orientales (66).
          </p>
        </div>

    </section>
  )
}