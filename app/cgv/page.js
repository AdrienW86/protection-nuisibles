import styles from '@/app/legalPages.module.css';

export const metadata = {
  title: 'Conditions générales de vente',
  description: 'CGV du site Protection Nuisibles',
}

export default function CGV() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Conditions générales de vente (CGV)</h1>

      <h2 className={styles.subtitle}>Produits et services</h2>
      <p className={styles.text}>
        Protection Nuisibles propose des prestations de dératisation, désinsectisation et dépigeonnage.
      </p>

      <h2 className={styles.subtitle}>Tarifs et paiement</h2>
      <p className={styles.text}>
        Les prix sont indiqués en euros et hors taxes. Le paiement s’effectue selon les modalités précisées au moment de la commande (virement, CB ou espèces).
      </p>

      <h2 className={styles.subtitle}>Délais d'intervention</h2>
      <p className={styles.text}>
        Les délais sont communiqués lors de la prise de contact et peuvent varier selon les disponibilités et la zone géographique.
      </p>

      <h2 className={styles.subtitle}>Annulation et remboursement</h2>
      <p className={styles.text}>
        Toute demande d’annulation doit être signalée par email ou téléphone. Les prestations réalisées ne sont pas remboursables si l’intervention a déjà eu lieu.
      </p>

      <h2 className={styles.subtitle}>Garanties et responsabilités</h2>
      <p className={styles.text}>
        Protection Nuisibles s’engage à fournir des prestations conformes aux normes en vigueur. L’entreprise ne pourra être tenue responsable en cas de dommages résultant d’une mauvaise utilisation du service par le client.
      </p>
    </main>
  )
}
