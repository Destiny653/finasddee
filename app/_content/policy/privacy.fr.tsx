import React from 'react'
import Link from 'next/link'

export default function PrivacyFr() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Collecte et utilisation des informations personnelles</h3>

      <h4 className="text-xl font-bold mt-8 mb-3">Nous collectons les informations personnelles suivantes</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Coordonnées telles que le nom, le titre, l'adresse e-mail, l'adresse postale, le numéro de téléphone</li>
        <li>Preuves de votre identité (par exemple informations de passeport). Informations sur vos profils de réseaux sociaux mises à notre disposition via vos interactions avec nous sur des sites comme Facebook ou X/Twitter</li>
        <li>Identifiants uniques comme nom d'utilisateur, numéro de compte, mot de passe</li>
        <li>Informations de facturation telles que numéro de carte de crédit et adresse de facturation</li>
        <li>Date de naissance</li>
        <li>Données démographiques telles que l'âge, le niveau d'études, le genre, les centres d'intérêt et le code postal</li>
      </ul>

      <h4 className="text-xl font-bold mt-8 mb-3">Nous utilisons ces informations pour</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Vous enregistrer et créer un compte</li>
        <li>
          Fournir les Services tels que décrits dans nos{' '}
          <Link href="/user-agreement" className="text-gold-dark hover:underline">conditions générales</Link>.
        </li>
        <li>Traiter vos demandes de transaction/recharge de crédit (Airtime Top Up)</li>
        <li>Vous envoyer une confirmation</li>
        <li>Vous envoyer les informations de service demandées</li>
        <li>Améliorer votre expérience en ligne et notre site/service</li>
        <li>Respecter nos obligations légales et réglementaires</li>
      </ul>

      <p>Nous conservons également des enregistrements de vos transactions ainsi que, le cas échéant, des détails de carte et de compte bancaire.</p>

      <p>
        <strong>Choix/Désinscription</strong> Vous pouvez choisir d'arrêter de recevoir notre newsletter ou nos e-mails marketing en suivant les instructions de désinscription
        incluses dans ces e-mails ou en nous contactant via{' '}
        <Link href="/contact" className="text-gold-dark hover:underline">ce formulaire</Link>. Nous pouvons aussi vous envoyer, de manière exceptionnelle, des e-mails liés au service lorsque cela est nécessaire (par exemple, si notre service est temporairement suspendu pour maintenance). Vous ne pouvez pas vous désinscrire de ces e-mails non promotionnels.
      </p>

      <p>
        <strong>Informations obtenues sur des tiers</strong> Vous pouvez nous fournir des informations personnelles concernant d'autres personnes, telles que le nom et les identifiants du bénéficiaire, son adresse, son numéro de téléphone, ses coordonnées bancaires ou son adresse e-mail. Le cas échéant, vous confirmez disposer de l'autorisation appropriée pour nous fournir ces informations et nous permettre de les utiliser. Nous les utiliserons uniquement pour la finalité spécifique pour laquelle elles nous ont été communiquées.
      </p>

      <p>
        <strong>Partage des informations</strong> Nous ne partagerons vos informations personnelles avec des tiers que de la manière décrite dans la présente politique de confidentialité ou dans les conditions générales, par exemple avec des agences de référence de crédit pour vérifier votre identité ou avec les bénéficiaires des fonds transférés via le Service. Nous pouvons partager vos informations avec certains tiers susceptibles de vous intéresser, lorsque vous y avez consenti.
      </p>
      <p>
        Nous pouvons transmettre vos informations personnelles à des entreprises qui nous fournissent des services pour nous aider dans nos activités ou assurer le service client, comme des banques locales, des bureaux de change, des prestataires informatiques ou de marketing digital. Ces entreprises sont autorisées à utiliser vos informations personnelles uniquement dans la mesure nécessaire pour fournir ces services. En cas de doute, veuillez{' '}
        <Link href="/contact" className="text-gold-dark hover:underline">nous contacter</Link>.
      </p>

      <h4 className="text-xl font-bold mt-8 mb-3">Nous pouvons également divulguer vos informations personnelles</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>lorsque la loi l'exige (ordonnance du tribunal, assignation ou procédure similaire),</li>
        <li>lorsque nous estimons de bonne foi que la divulgation est nécessaire pour protéger nos droits, remplir nos obligations légales/compliance, protéger votre sécurité ou celle d'autrui, enquêter sur une fraude ou répondre à une demande d'une autorité gouvernementale ou réglementaire,</li>
        <li>si Finasddee Ltd est impliquée dans une fusion, acquisition ou cession de tout ou partie de ses actifs : vous serez averti(e) par e-mail et/ou par un avis visible sur notre site de tout changement de propriété ou d'utilisation de vos informations personnelles, ainsi que des choix dont vous disposez à ce sujet,</li>
        <li>à tout autre tiers avec votre accord préalable.</li>
      </ul>

      <p>
        Nous pouvons transférer vos informations personnelles à l'étranger vers des juridictions qui peuvent offrir un niveau de protection juridique ne répondant pas aux normes européennes. Dans ce cas, nous prenons des mesures pour protéger vos informations et n'effectuons de tels transferts que conformément à la Data Protection Act 1998.
      </p>

      <p>
        <strong>Cookies et autres technologies de suivi</strong> Des technologies telles que les cookies, pixels, balises et scripts sont utilisées par Finasddee Ltd et nos partenaires marketing, affiliés ou prestataires d'analytique et de services. Ces technologies servent à analyser les tendances, administrer le site, suivre les mouvements des utilisateurs sur le site et recueillir des informations démographiques sur notre base d'utilisateurs dans son ensemble. Nous pouvons recevoir des rapports, individuels ou agrégés, basés sur l'utilisation de ces technologies par ces sociétés.
      </p>
      <p>
        Des technologies de collecte de données tierces sont utilisées au sein de l'application Finasddee par Finasddee Ltd et nos partenaires marketing. Elles servent à suivre l'utilisation de l'application et les événements in-app. Les informations issues de ces technologies peuvent être communiquées de manière individuelle ou agrégée.
      </p>
      <p>
        Nous utilisons des cookies pour mémoriser les paramètres des utilisateurs, pour l'authentification et pour améliorer l'expérience utilisateur. Les utilisateurs peuvent contrôler l'utilisation des cookies au niveau de chaque navigateur. Si vous refusez les cookies, vous pourrez toujours utiliser notre site, mais certaines fonctionnalités ou zones du site pourraient être limitées. Veuillez consulter notre{' '}
        <Link href="/cookie-policy" className="text-gold-dark hover:underline">Politique de cookies</Link> pour plus d'informations et savoir comment vous désinscrire.
      </p>

      <p>
        <strong>Fichiers journaux (Log files)</strong> Comme la plupart des sites web, nous recueillons automatiquement certaines informations et les stockons dans des fichiers journaux. Ces informations peuvent inclure des adresses IP, le type de navigateur, le fournisseur d'accès à Internet (FAI), les pages de provenance/sortie, le système d'exploitation, l'horodatage et/ou les données de parcours de navigation. Nous pouvons combiner ces informations collectées automatiquement avec d'autres informations que nous recueillons à votre sujet pour améliorer les services que nous vous proposons et les fonctionnalités du site.
      </p>

      <p>
        <strong>Objets de stockage local (HTML5)</strong> Nous utilisons des objets de stockage local (LSO) tels que HTML5 pour stocker des informations de contenu et des préférences. Des tiers avec lesquels nous collaborons pour fournir certaines fonctionnalités sur notre site ou pour afficher des publicités basées sur votre activité de navigation utilisent également des LSO (HTML5). Différents navigateurs peuvent proposer leurs propres outils de gestion pour supprimer ces LSO HTML5.
      </p>

      <p>
        <strong>Ciblage comportemental / Retargeting</strong> Nous travaillons avec un tiers pour afficher des publicités sur notre site ou gérer notre publicité sur d'autres sites. Notre partenaire tiers peut utiliser des technologies telles que les cookies pour recueillir des informations sur vos activités sur ce site et sur d'autres, afin de vous proposer des publicités basées sur vos intérêts. Si vous ne souhaitez pas que ces informations soient utilisées pour vous proposer des publicités ciblées, vous pouvez vous désinscrire en{' '}
        <a href="http://www.google.com/settings/ads/anonymous" target="_blank" rel="noreferrer" className="text-gold-dark hover:underline">cliquant ici</a>. Vous continuerez à recevoir des publicités génériques.
      </p>

      <p>
        <strong>Liens vers d'autres sites web</strong> Notre site contient des liens vers d'autres sites dont les pratiques en matière de confidentialité peuvent différer de celles de Finasddee Ltd. Si vous soumettez des informations personnelles à l'un de ces sites, vos informations seront régies par leurs politiques de confidentialité. Nous vous encourageons à lire attentivement la politique de confidentialité de tout site que vous visitez.
      </p>

      <p>
        <strong>Sécurité</strong> La sécurité de vos informations personnelles est importante pour nous. Lorsque vous saisissez certaines informations, comme un numéro de carte bancaire, sur nos formulaires de commande, nous chiffrons la transmission de ces informations à l'aide de la technologie SSL (Secure Socket Layer).
      </p>
      <p>
        Nous suivons les normes de l'industrie généralement reconnues pour protéger les informations personnelles soumises, tant pendant leur transmission qu'une fois reçues. Aucun mode de transmission sur Internet ou de stockage électronique n'est totalement sûr. Par conséquent, nous ne pouvons en garantir la sécurité absolue. Pour toute question concernant la sécurité sur notre site web, vous pouvez nous contacter via{' '}
        <Link href="/contact" className="text-gold-dark hover:underline">ce formulaire</Link>.
      </p>

      <p>
        <strong>Widgets de réseaux sociaux</strong> Notre site inclut des widgets ou fonctionnalités de réseaux sociaux, tels que le bouton « J'aime » de Facebook et le bouton X/Twitter, qui sont des mini-programmes interactifs fournis par une autre société (ex. affichage de nouvelles, d'opinions, de musique, etc.). Des informations personnelles, comme votre adresse e-mail, peuvent être collectées via ces widgets. Des cookies peuvent également être déposés par ces widgets pour assurer leur bon fonctionnement. Les informations recueillies par ces widgets sont régies par la politique de confidentialité de la société qui les fournit.
      </p>

      <p>
        <strong>Témoignages</strong> Nous affichons des témoignages de clients satisfaits sur notre site, en plus d'autres recommandations, lorsque vous avez donné votre accord via un site d'avis tiers. Si vous souhaitez mettre à jour ou supprimer votre témoignage, veuillez nous contacter via{' '}
        <Link href="/contact" className="text-gold-dark hover:underline">ce formulaire</Link>.
      </p>

      <p>
        <strong>Correction et mise à jour de vos informations personnelles</strong> Vous pouvez demander à consulter, supprimer ou mettre à jour vos informations personnelles afin d'en garantir l'exactitude en nous contactant via{' '}
        <Link href="/contact" className="text-gold-dark hover:underline">ce formulaire</Link>. Nous visons à répondre à votre demande d'accès dans un délai de 30 jours.
      </p>
      <p>
        Nous conserverons vos informations aussi longtemps que votre compte est actif ou selon les besoins pour vous fournir nos services, y compris un enregistrement de vos transactions sur notre site. Si vous souhaitez fermer votre compte ou demander que nous n'utilisions plus vos informations pour vous fournir des services, contactez-nous via{' '}
        <Link href="/contact" className="text-gold-dark hover:underline">ce formulaire</Link>. Nous conserverons et utiliserons vos informations si nécessaire pour respecter nos obligations légales, résoudre des litiges et faire appliquer nos accords, et nous supprimerons vos informations de manière sécurisée lorsque nous n'aurons plus de raison de les conserver.
      </p>

      <p>
        <strong>Notification des modifications de la politique de confidentialité</strong> Nous pouvons mettre à jour cette politique de confidentialité pour refléter les évolutions de nos pratiques en matière d'information. Si nous apportons des modifications importantes, nous vous en informerons par e-mail (envoyé à l'adresse spécifiée dans votre compte) ou au moyen d'un avis sur ce site web ou via un lien depuis votre application mobile, avant l'entrée en vigueur du changement. Nous vous encourageons à consulter périodiquement cette page pour obtenir les informations les plus récentes sur nos pratiques.
      </p>

      <h4 className="text-xl font-bold mt-8 mb-3">Coordonnées</h4>
      <p>Vous pouvez nous contacter à propos de cette politique de confidentialité par courrier ou par e-mail à l'adresse ci-dessous :</p>
      <address className="not-italic">
        <p>
          Finasddee Ltd
          <br />
          74 West street, Sittingbourne Kent
          <br />
          ME10 1AN
          <br />
          E-mail : <a href="mailto:support@Finasddee.com" className="text-gold-dark hover:underline">support@Finasddee.com</a>
          <br />
          Téléphone : <a href="tel:+447441426016" className="text-gold-dark hover:underline">+447441426016</a>
          <br />
          Fax : +447441426016
        </p>
      </address>
    </div>
  )
}
