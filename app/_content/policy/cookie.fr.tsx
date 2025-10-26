import React from 'react'
import Link from 'next/link'

export default function CookieFr() {
  return (
    <div>
      <p>
        Finasddee utilise des cookies pour mémoriser vos préférences et informations de profil. Les cookies sont des chaînes de texte et de nombres contenant
        de petites quantités d'informations, que votre ordinateur ou appareil mobile télécharge lorsque vous visitez un site web.
      </p>

      <h4 className="text-xl font-bold mt-8 mb-3"><u>Finasddee utilise les cookies pour :</u></h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Vous identifier lorsque vous vous connectez à notre site.</li>
        <li>Mémoriser vos préférences de pays et de langue.</li>
        <li>Mémoriser les réglages essentiels nécessaires pour réaliser une transaction.</li>
        <li>Reconnaître si vous avez visité certaines pages de notre site.</li>
      </ol>

      <p className="mt-6">
        Si vous avez autorisé votre navigateur à accepter les cookies, cela nous indique que vous consentez à notre utilisation des cookies telle que décrite dans cette politique.
      </p>
      <p>
        Vous pouvez contrôler les sites pour lesquels vous acceptez les cookies en modifiant les paramètres de votre navigateur. Vous pouvez également supprimer les cookies déjà enregistrés par votre navigateur.
        Reportez-vous au menu d'aide de votre navigateur pour savoir comment procéder.
      </p>
      <p>
        Nos pages web peuvent également contenir d'autres technologies similaires qui reconnaissent les pages que vous avez visitées. Cela nous aide à analyser l'utilisation de notre site et à améliorer l'expérience utilisateur.
        Nous pouvons aussi utiliser cette technologie dans certains e-mails pour savoir quels e-mails et liens ont été ouverts, afin de comprendre l'efficacité de nos communications.
      </p>

      <h4 className="text-xl font-bold mt-8 mb-3"><u>Publicité sur Internet</u></h4>
      <p>
        Nous affichons des bannières sur d'autres sites via des réseaux publicitaires. Si votre navigateur accepte les cookies tiers, vous pouvez voir des publicités basées sur vos centres d'intérêt lorsque vous
        visitez d'autres sites. Ces publicités peuvent être basées sur vos interactions précédentes avec notre site pour afficher des annonces plus pertinentes.
      </p>
      <p>
        Nous ne fournissons aucune information personnellement identifiable aux annonceurs ni aux sites tiers affichant nos publicités ciblées.
      </p>
      <p>
        Vous pouvez vous désinscrire des publicités du réseau Google{' '}
        <a href="http://www.google.com/settings/ads/anonymous" target="_blank" rel="noreferrer" className="text-gold-dark hover:underline">ici</a>.
      </p>

      <div className="mt-10 text-center">
        <Link href="/send-money" className="inline-block bg-gold-dark text-white px-6 py-3 font-semibold transition-colors hover:opacity-90">
          Envoyer de l'argent maintenant
        </Link>
      </div>
    </div>
  )
}
