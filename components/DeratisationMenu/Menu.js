import React from 'react'
import Image from 'next/image'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container} aria-label="Dératisation à Perpignan et dans les Pyrénées-Orientales">
      <section className={styles.presentation}>
        <Image
          src="/image13.png"
          alt="Illustration des dangers des rats et souris"
          width={600} 
          height={338} 
          sizes="(max-width: 600px) 100vw, 600px"
          className={styles.image}
        />
        <div className={styles.description}>
          <p className={styles.pDescription}>
            Chez <strong className={styles.strong}>Protection Nuisibles</strong>, nous sommes experts en <strong className={styles.strong}>dératisation à Perpignan</strong> et dans tout le département 66. 
            Nos interventions ciblées permettent d’<strong className={styles.strong}>éliminer les rats et les souris</strong> de manière rapide, sécurisée et durable.
          </p>
        </div>
      </section>
        <h1 className={styles.title}>
          Dératisation à Perpignan et dans les Pyrénées-Orientales (66)
        </h1>
      <section aria-labelledby="dangers-rongeurs" className={styles.intro}>       
        <div className={styles.box}>
          <Image 
            src="/image10.png" 
            alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
            width={800} 
            height={450} 
            className={styles.image}
            priority 
          />
          <h2 id="dangers-rongeurs" className={styles.h2}>
          Pourquoi faut-il éliminer les rongeurs rapidement ?
        </h2>
        </div>
        <p className={styles.p}>
          Les <strong className={styles.strong}>rongeurs comme les rats et les souris</strong> représentent un réel danger pour la santé humaine et l'intégrité des bâtiments. 
          Ils sont porteurs de <strong className={styles.strong}>maladies graves</strong> telles que la leptospirose, la salmonellose ou encore la peste. 
          Leur présence peut contaminer les aliments, les surfaces et l’eau, ce qui pose un risque sanitaire important.
        </p>
        <p className={styles.p}>
          En plus des risques pour la santé, les rongeurs provoquent de nombreux <strong className={styles.strong}>dégâts matériels</strong> : 
          câbles électriques rongés (risque d’incendie), isolations détruites, murs et sols endommagés. 
          Une <strong className={styles.strong}>invasion de rats ou de souris</strong> non traitée à temps peut rapidement s’aggraver et entraîner des coûts importants.
        </p>
        <p className={styles.p}>
          Pour toutes ces raisons, il est essentiel de faire appel à un professionnel de la <strong className={styles.strong}>dératisation à Perpignan</strong> dès les premiers signes d’infestation. 
          <strong className={styles.strong}>Protection Nuisibles</strong> intervient rapidement et efficacement pour éliminer le problème à la source.
        </p>
      </section>

      <section aria-labelledby="inspection-diagnostic">
        <h2 id="inspection-diagnostic" className={styles.h2}>Inspection et diagnostic précis</h2>
        <Image 
          src="/image13.png" 
          alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
          width={800} 
          height={450} 
          className={styles.image}
          priority 
        />
        <p className={styles.p}>
          Chaque intervention commence par une inspection minutieuse de votre logement, local ou entreprise. 
          Nous identifions les <strong className={styles.strong}>zones d'infestation</strong>, les points d’accès et les traces d’activité afin de vous proposer un <strong className={styles.strong}>traitement adapté</strong>.
        </p>
      </section>

      <section aria-labelledby="preparation-intervention">
        <h2 id="preparation-intervention" className={styles.h2}>Préparation de l’intervention</h2>
        <Image 
          src="/image16.png" 
          alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
          width={800} 
          height={450} 
          className={styles.image}
          priority 
        />
        <p className={styles.p}>
          Avant le traitement, nous <strong className={styles.strong}>sécurisons les lieux</strong> et sélectionnons les techniques les plus efficaces selon le niveau d'infestation. 
          Nous utilisons des produits <strong className={styles.strong}>homologués</strong>, respectueux des normes sanitaires et de l’environnement.
        </p>
      </section>

      <section aria-labelledby="elimination-rongeurs">
        <h2 id="elimination-rongeurs" className={styles.h2}>Élimination des rats et souris</h2>
        <Image 
          src="/image19.png" 
          alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
          width={800} 
          height={450} 
          className={styles.image}
          priority // optionnel, si tu veux que l'image soit chargée en priorité
        />
        <ul className={styles.ul}>
          <li className={styles.li}>Installation de pièges et appâts professionnels</li>
          <li className={styles.li}>Utilisation de produits certifiés et sécurisés</li>
          <li className={styles.li}>Traitement ciblé contre les rongeurs dans les zones sensibles</li>
          <li className={styles.li}>Contrôle post-intervention pour garantir l’efficacité</li>
        </ul>
        <p className={styles.p}>
          Nos techniciens qualifiés assurent une <strong className={styles.strong}>dératisation rapide et efficace</strong>, avec un suivi rigoureux pour éviter toute récidive.
        </p>
      </section>

      <section aria-labelledby="suivi-prevention">
        <h2 id="suivi-prevention" className={styles.h2}>Suivi et prévention</h2>
         <Image 
          src="/image18.png" 
          alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
          width={800} 
          height={450} 
          className={styles.image}
          priority 
        />
        <p className={styles.p}>
          Une fois le traitement terminé, nous mettons en place des <strong className={styles.strong}>mesures de prévention</strong> : 
          colmatage des accès, conseils d’hygiène, installation de dispositifs de surveillance si nécessaire.
        </p>
      </section>

      <section aria-labelledby="conseils-accompagnement">    
        <h2 id="conseils-accompagnement" className={styles.h2}>Conseils et accompagnement personnalisé</h2>
         <Image 
          src="/image17.png" 
          alt="Illustration des dangers des rats et souris pour la santé et les bâtiments" 
          width={800} 
          height={450} 
          className={styles.image}
          priority 
        />
        <p className={styles.p}>
          Protection Nuisibles vous accompagne sur le long terme avec des recommandations adaptées à votre situation. 
          Notre objectif : vous garantir un environnement sain, sans rongeurs.
        </p>
      </section>

      <p className={styles.p}>
        Contactez notre équipe pour toute <strong className={styles.strong}>intervention de dératisation à Perpignan</strong>, Canet-en-Roussillon, Saint-Estève, ou ailleurs dans les <strong>Pyrénées-Orientales</strong>.
        Nous sommes disponibles rapidement pour des <strong className={styles.strong}>traitements anti-rats efficaces et discrets</strong>.
      </p>
    </section>
  )
}
