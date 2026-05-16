export const metadata = {
  title: 'Conditions générales de vente',
  description: 'CGV du site Protection Nuisibles',
}

export default function CGV() {
  return (
    /* 
      - pt-28 : Aligné sur ta page Contact pour passer proprement sous ton Header fixe.
      - pb-20 : Donne de l'air en fin de lecture.
      - max-w-3xl : Légèrement plus serré que la page contact, c'est le standard parfait pour lire du texte long confortablement.
    */
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-100 pb-4">
        Conditions générales de vente (CGV)
      </h1>

      {/* SECTION 1 */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Produits et services
      </h2>
      <p className="text-base sm:text-lg">
        Protection Nuisibles propose des prestations de dératisation, désinsectisation et dépigeonnage.
      </p>

      {/* SECTION 2 */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Tarifs et paiement
      </h2>
      <p className="text-base sm:text-lg">
        Les prix sont indiqués en euros et hors taxes. Le paiement s’effectue selon les modalités précisées au moment de la commande (virement, CB ou espèces).
      </p>

      {/* SECTION 3 */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Délais d'intervention
      </h2>
      <p className="text-base sm:text-lg">
        Les délais sont communiqués lors de la prise de contact et peuvent varier selon les disponibilités et la zone géographique.
      </p>

      {/* SECTION 4 */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Annulation et remboursement
      </h2>
      <p className="text-base sm:text-lg">
        Toute demande d’annulation doit être signalée par email ou téléphone. Les prestations réalisées ne sont pas remboursables si l’intervention a déjà eu lieu.
      </p>

      {/* SECTION 5 */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
        Garanties et responsabilités
      </h2>
      <p className="text-base sm:text-lg">
        Protection Nuisibles s’engage à fournir des prestations conformes aux normes en vigueur. L’entreprise ne pourra être tenue responsable en cas de dommages résultant d’une mauvaise utilisation du service par le client.
      </p>
      
    </main>
  )
}