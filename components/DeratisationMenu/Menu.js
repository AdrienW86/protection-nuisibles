import React from 'react'
import Image from 'next/image'

export default function Menu() {
  return (
    /* pt-28 pour passer sous ton Header fixe. max-w-5xl pour une mise en page aérée */
    <section className="pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-slate-700 leading-relaxed" aria-label="Dératisation à Perpignan et dans les Pyrénées-Orientales">
      
      {/* 1. TITRE PRINCIPAL H1 TOUT EN HAUT (Crucial pour le SEO) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center mb-12 border-b border-slate-100 pb-6">
        Dératisation à Perpignan et dans les Pyrénées-Orientales (66)
      </h1>

      {/* 2. SECTION PRÉSENTATION / ACCROCHE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xs border border-slate-200">
          <Image
            src="/image13.png"
            alt="Illustration des dangers des rats et souris"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-base sm:text-lg text-slate-800 font-medium">
          <p>
            Chez <strong className="text-brand-blue font-semibold">Protection Nuisibles</strong>, nous sommes experts en <strong className="text-slate-900 font-bold">dératisation à Perpignan</strong> et dans tout le département 66. 
            Nos interventions ciblées permettent d’<strong className="text-brand-blue font-semibold">éliminer les rats et les souris</strong> de manière rapide, sécurisée et durable.
          </p>
        </div>
      </section>

      {/* 3. LES DANGERS DES RONGEURS */}
      <section aria-labelledby="dangers-rongeurs" className="mb-16">       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white">
          <div className="md:col-span-1 relative w-full h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
            <Image 
              src="/image10.png" 
              alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 id="dangers-rongeurs" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Pourquoi faut-il éliminer les rongeurs rapidement ?
            </h2>
            <div className="space-y-3 text-base">
              <p>
                Les <strong className="text-slate-900 font-semibold">rongeurs comme les rats et les souris</strong> représentent un réel danger pour la santé humaine et l'intégrité des bâtiments. 
                Ils sont porteurs de <strong className="text-slate-900 font-semibold">maladies graves</strong> telles que la leptospirose, la salmonellose ou encore la peste. 
                Leur présence peut contaminer les aliments, les surfaces et l’eau, ce qui pose un risque sanitaire important.
              </p>
              <p>
                En plus des risques pour la santé, les rongeurs provoquent de nombreux <strong className="text-slate-900 font-semibold">dégâts matériels</strong> : 
                câbles électriques rongés (risque d’incendie), isolations détruites, murs et sols endommagés. 
                Une <strong className="text-slate-900 font-semibold">invasion de rats ou de souris</strong> non traitée à temps peut rapidement s’aggraver et entraîner des coûts importants.
              </p>
              <p>
                Pour toutes ces raisons, il est essentiel de faire appel à un professionnel dès les premiers signes d’infestation. 
                <strong className="text-brand-blue font-medium">Protection Nuisibles</strong> intervient rapidement et efficacement pour éliminer le problème à la source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOTRE PROCESSUS D'INTERVENTION (Grille à puces) */}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-8 text-center">
        Notre protocole d'intervention professionnel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* ÉTAPE 1 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image13.png" alt="Inspection" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">1. Inspection & Diagnostic</h3>
            <p className="text-sm text-slate-600">Nous identifions les zones d'infestation, les points d’accès et les traces d’activité afin de vous proposer un traitement sur mesure.</p>
          </div>
        </div>

        {/* ÉTAPE 2 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image16.png" alt="Préparation" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">2. Préparation sécurisée</h3>
            <p className="text-sm text-slate-600">Nous sécurisons les lieux et sélectionnons des technologies homologuées, respectueuses des normes sanitaires et de votre entourage.</p>
          </div>
        </div>

        {/* ÉTAPE 3 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image19.png" alt="Élimination" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">3. Élimination radicale</h3>
            <p className="text-sm text-slate-600">Installation de postes d'appâtage sécurisés, pièges professionnels et traitements ciblés avec un contrôle post-intervention rigoureux.</p>
          </div>
        </div>

        {/* ÉTAPE 4 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image18.png" alt="Prévention" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">4. Suivi & Prévention</h3>
            <p className="text-sm text-slate-600">Colmatage des accès (remontées de tuyaux, fentes), conseils d’hygiène appliqués et pose de systèmes de surveillance à long terme.</p>
          </div>
        </div>

      </div>

      {/* 5. DERNIÈRE SECTION CONSEIL */}
      <section aria-labelledby="conseils-accompagnement" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12">    
        <div className="md:col-span-2">
          <h2 id="conseils-accompagnement" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Conseils et accompagnement personnalisé
          </h2>
          <p className="text-base">
            Protection Nuisibles vous accompagne sur le long terme avec des recommandations adaptées à votre environnement. 
            Notre objectif : vous garantir durablement un espace de vie sain, sans rongeurs.
          </p>
        </div>
        <div className="md:col-span-1 relative w-full h-[150px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
          <Image 
            src="/image17.png" 
            alt="Technicien prodiguant des conseils anti-rongeurs" 
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </div>
      </section>

      {/* 6. CONCLUSION / CALL TO ACTION */}
      <div className="text-center bg-brand-blue text-white p-6 rounded-2xl shadow-xs mt-8">
        <p className="text-base sm:text-lg font-medium leading-relaxed">
          Contactez notre équipe pour toute <strong className="underline">intervention de dératisation à Perpignan</strong>, Canet-en-Roussillon, Saint-Estève, ou ailleurs dans les <strong className="font-bold">Pyrénées-Orientales</strong>.<br className="hidden sm:inline"/>
          Nous sommes disponibles rapidement pour des traitements anti-rats efficaces, discrets et garantis.
        </p>
      </div>

    </section>
  )
}