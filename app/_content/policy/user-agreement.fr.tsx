import React from 'react'
import Link from 'next/link'

export default function UserAgreementFr() {
  return (
    <div className="text-gray-900">
      {/* 1. FORMATION DU CONTRAT ET APERÇU */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Formation du contrat et aperçu</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        1.1 Les « Conditions générales » régissent les modalités selon lesquelles vous pouvez accéder et utiliser ce site web et les services qui y sont associés (ensemble, le « Service »). En accédant au Service, en vous y inscrivant et en l’utilisant, vous acceptez d’être lié par ces Conditions générales. Si vous ne souhaitez pas être lié par celles-ci, n’accédez pas, ne vous inscrivez pas et n’utilisez pas le Service. La langue de ces Conditions générales est l’anglais et l’ensemble des Services, instructions et transactions effectuées dans ce cadre seront en anglais.
      </p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        1.2 Dans les présentes Conditions générales, les termes « Finasddee », « nous », « notre » et « nos » désignent AGPAYTECH Limited exerçant sous le nom Finasddee, ainsi que ses employés, directeurs, affiliés, successeurs et ayants droit. AGPAYTECH Limited est une société immatriculée en Angleterre et au Pays de Galles sous le numéro 7952651, dont le siège social est situé au 3rd Floor, 86-90 Paul Street, London EC2A 4NE, Royaume-Uni. Elle est agréée et réglementée par la Financial Conduct Authority (FCA) en vertu du Payment Service Regulations 2009 pour la fourniture de services de paiement. Numéro d’enregistrement : 585091.
      </p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        1.3 Les termes « vous » et « votre » désignent les utilisateurs du Service, qu’ils soient expéditeurs, bénéficiaires ou simples visiteurs du site.
      </p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        1.4 Ces Conditions générales sont en vigueur depuis le 7 décembre 2015. Elles peuvent être modifiées ponctuellement, mais toute modification ne produira effet qu’à compter de sa date d’entrée en vigueur et ne changera pas les conditions d’utilisation antérieures du Service.
      </p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        1.5 Le Service a été créé pour aider les clients à envoyer de l’argent à leur famille et à leurs amis, et à en recevoir de leur part, dans le monde entier. Pour des raisons de sécurité, nous vous recommandons de n’envoyer de l’argent qu’à des personnes que vous connaissez personnellement. Vous ne devez pas utiliser le Service pour envoyer de l’argent à des inconnus (par ex. vendeurs de biens ou services).
      </p>

      {/* 2. DÉFINITIONS */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Définitions</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">Dans les présentes Conditions générales&nbsp;:</p>
      <ul className="list-disc pl-6 text-base md:text-lg leading-relaxed space-y-2">
        <li><strong>« Pays de destination »</strong> désigne le pays dans lequel le bénéficiaire reçoit l’argent via le Service.</li>
        <li><strong>« Taxes locales »</strong> désigne toute taxe ou charge exigible dans le pays de destination.</li>
        <li><strong>« Instrument de paiement »</strong> désigne un moyen de paiement valide tel qu’un compte bancaire, une carte de débit ou de crédit.</li>
        <li><strong>« Montant versé »</strong> désigne le montant payé au bénéficiaire, après conversion éventuelle et hors taxes locales.</li>
        <li><strong>« Bénéficiaire »</strong> désigne la personne qui reçoit l’argent via le Service.</li>
        <li><strong>« Expéditeur »</strong> désigne la personne qui utilise le Service pour envoyer de l’argent.</li>
        <li><strong>« Frais de service »</strong> désigne les frais et charges applicables à chaque transaction.</li>
        <li><strong>« Partenaire de service »</strong> désigne une banque locale, une maison de change ou tout autre prestataire tiers dans le pays de destination avec lequel Finasddee collabore pour fournir le Service.</li>
        <li><strong>« Transaction »</strong> désigne une instruction spécifique d’envoi d’argent via le Service.</li>
        <li><strong>« Montant de la transaction »</strong> désigne le montant que l’expéditeur souhaite envoyer au bénéficiaire, hors frais et avant toute conversion.</li>
      </ul>

      {/* 3. NOS OBLIGATIONS */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Nos obligations</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">3.1 Sous réserve des présentes Conditions générales, nous convenons de vous fournir le Service avec une diligence raisonnable. Le Service peut ne pas être disponible en tout ou partie dans certaines régions ou juridictions.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">3.2 Nous ne sommes pas tenus de traiter une transaction particulière. En soumettant une transaction, vous nous demandez de la traiter en votre nom. Nous pouvons, à notre seule discrétion, accepter ou refuser cette demande. En cas de refus, nous vous en informerons rapidement et vous rembourserons les fonds versés.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">3.3 Finasddee se réserve le droit de modifier ou d’interrompre le Service (en tout ou partie) sans préavis. Nous pouvons refuser toute transaction ou limiter les montants transférés, par transaction ou globalement, et ce par compte individuel ou comptes liés.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">3.4 Nous pouvons refuser des transactions de certains expéditeurs ou vers certains bénéficiaires (p. ex. personnes/entités figurant sur des listes restreintes publiées par le gouvernement britannique ou l’UE). Tous les instruments de paiement ne sont pas disponibles à tout moment pour tous les clients.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">3.5 Nous tenterons de traiter rapidement les transactions, mais des retards/annulations peuvent survenir (vérifications d’identité, validation d’instructions, conformité légale, horaires, disponibilité des devises, etc.).</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">3.6 Nous tenterons de fournir des informations à jour sur les partenaires de service (localisation, horaires) via notre site. Vous acceptez que Finasddee ne soit pas responsable d’éventuelles inexactitudes ou pertes y afférentes.</p>

      {/* 4. VOS OBLIGATIONS */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Vos obligations</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">Vous acceptez que&nbsp;:</p>
      <ol className="list-decimal pl-6 text-base md:text-lg leading-relaxed space-y-2">
        <li className="mb-4">Vous n’utiliserez pas le Service en tant qu’expéditeur si vous avez moins de 18 ans et devez avoir la capacité légale de contracter.</li>
        <li className="mb-4">Pour chaque transaction, vous payez les frais de service en plus du montant de la transaction. Le paiement est dû au moment de la soumission. Si votre transaction entraîne des frais (chargeback, etc.), vous nous en rembourserez le montant.</li>
        <li className="mb-4">
          Dans le cadre de l’inscription et de l’utilisation du Service, vous devez&nbsp;:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Nous fournir des informations d’identité sincères, exactes, à jour et complètes et les mettre à jour en cas de changement ;</li>
            <li>Fournir au marchand les détails d’un ou plusieurs instruments de paiement ;</li>
            <li>Nous fournir des informations sincères, exactes, à jour et complètes pour toutes les transactions.</li>
          </ul>
          <p className="mt-2">Nous déclinons toute responsabilité pour les dommages résultant d’un non-paiement ou d’un retard de paiement au bénéficiaire pour les raisons susmentionnées.</p>
        </li>
        <li className="mb-4">En cas de conversion de devises, la différence entre le taux d’achat et le taux communiqué peut générer un léger profit pour Finasddee/partenaires. Des frais supplémentaires peuvent réduire le montant reçu en cas d’informations inexactes.</li>
        <li className="mb-4">Vous êtes responsable de l’exactitude des détails de la transaction avant soumission. Une fois soumise, une modification n’est généralement pas possible. Vous disposez d’un écran de confirmation.</li>
        <li className="mb-4">Finasddee n’est pas responsable des frais liés à l’utilisation d’un instrument de paiement particulier (découvert non autorisé, frais de « cash advance » sur carte, etc.).</li>
        <li className="mb-4">Vous n’utiliserez le Service que pour envoyer de l’argent à des personnes que vous connaissez ; ne l’utilisez pas pour payer des biens ou services. En cas de non-respect, vous assumez tous les risques (qualité, sécurité, légalité, livraison). Finasddee peut annuler la/les transaction(s) si un tel usage est suspecté.</li>
        <li className="mb-4">Vous et les bénéficiaires agissez uniquement en votre nom propre. Pas d’opération pour un tiers sans accord préalable et informations complémentaires.</li>
        <li className="mb-4">Vous respecterez les lois et règlements applicables. Il est interdit d’utiliser le Service pour des activités illégales (blanchiment, fraude, financement du terrorisme). Finasddee peut signaler aux autorités compétentes.</li>
        <li className="mb-4">
          Lorsque vous utilisez le site ou le Service, vous ne devez pas&nbsp;:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Violer les présentes ou tout autre accord avec Finasddee ;</li>
            <li>Ouvrir plus d’un compte sans autorisation écrite ;</li>
            <li>Fournir des informations fausses ou trompeuses ;</li>
            <li>Donner à quiconque l’accès à vos identifiants ;</li>
            <li>Refuser de confirmer des informations ou de coopérer à une enquête ;</li>
            <li>Utiliser un proxy anonymisant ;</li>
            <li>Copier/surveiller le site par robot/araignée ou autre outil sans autorisation écrite.</li>
          </ul>
        </li>
        <li className="mb-4">Finasddee peut stocker, si nécessaire, les informations requises d’un bénéficiaire pour prouver son identité (pièce valide, numéro de suivi, PIN, mot de passe, mot secret, etc.).</li>
      </ol>

      {/* 5. ANNULATION ET REMBOURSEMENTS */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Annulation et remboursements</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">5.1 Pour tout problème lié au Service, contactez-nous via les canaux indiqués à la fin des présentes.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">5.2 Vous disposez d’un droit légal de rétractation après soumission d’une transaction jusqu’à 14 jours ou jusqu’au paiement du montant au bénéficiaire (le premier des deux). Des frais d’annulation peuvent s’appliquer.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">5.3 Pour exercer ce droit, envoyez une demande écrite (nom/adresse/téléphone de l’expéditeur, numéro de suivi, montant et motif).</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">5.4 Les remboursements sont crédités sur le même instrument de paiement et dans la même devise. Aucune correction pour fluctuations de change.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">5.5 Les demandes de remboursement dues à un refus/incapacité de fournir des informations complémentaires peuvent être soumises à des frais d’annulation.</p>

      {/* 6. COLLECTE D’INFORMATIONS */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Collecte d’informations</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">6.1 Programme d’identification client. Les lois britanniques et européennes exigent des institutions financières qu’elles obtiennent, vérifient et enregistrent les informations d’identification des clients pour lutter contre le blanchiment et le financement du terrorisme.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">6.2 Vérifications. Nous vérifierons votre adresse et vos informations personnelles. Nous pouvons transmettre ces informations à une agence de référence de crédit, sans impact sur votre score, uniquement pour confirmer votre identité (traitement conforme au Data Protection Act 1998).</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">6.3 En acceptant les présentes, vous nous autorisez à effectuer les vérifications nécessaires (informations supplémentaires, vérification de propriété d’instrument de paiement/adresse e‑mail, bases de données tierces, etc.).</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">6.4 Politique de confidentialité des données. Vous consentez au traitement de vos données personnelles pour fournir le Service (incluant les vérifications), pour communiquer avec vous et à des fins légales/comptables/archivistiques. Vous reconnaissez avoir lu et accepté la <Link href="/privacy-policy" className="text-gold-dark hover:underline">Politique de confidentialité</Link> de Finasddee.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">6.5 <strong>Divulgations gouvernementales.</strong> Nous pouvons être légalement tenus de fournir des informations sur vous et vos transactions aux autorités compétentes, tel que décrit dans la Politique de confidentialité.</p>

      {/* 7. PROPRIÉTÉ INTELLECTUELLE */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Propriété intellectuelle</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">7.1 Le site et le Service Finasddee, leur contenu et l’ensemble des droits de propriété intellectuelle associés (droits d’auteur, brevets, bases de données, marques, etc.) appartiennent à nous, à nos affiliés ou à des tiers. Tous droits réservés.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">7.2 Le site/Service peuvent être utilisés uniquement selon ces Conditions ou tel que décrit sur le site. Vous pouvez consulter et conserver une copie des pages pour usage personnel. Sans autorisation écrite, vous ne pouvez pas dupliquer, publier, modifier, créer des œuvres dérivées, transférer, vendre, publier en ligne ou distribuer le site/Service ou une partie de ceux‑ci à des fins publiques/commerciales, ni utiliser de robot/araignée/scraper pour y accéder, ni retirer/altérer les mentions de propriété. Les noms et marques Finasddee sont nos marques exclusives ; d’autres noms peuvent être des marques de leurs propriétaires respectifs.</p>

      {/* 8. GARANTIES ET RESPONSABILITÉ */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Garanties et responsabilité</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.1 Nous vous rembourserons tout avantage perçu résultant d’une violation de notre accord (par ex. remboursement du montant de la transaction et des frais si un transfert a échoué dans ces circonstances).</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.2 En cas de retard/échec d’un transfert, vous pouvez avoir droit à un remboursement/indemnisation selon la loi. Contactez‑nous pour les détails.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.3 Toute demande d’indemnisation doit être étayée par des justificatifs pertinents.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.4 Si votre perte (ou celle d’un bénéficiaire non inscrit) n’est pas couverte par la loi visée au 8.2, notre responsabilité est limitée au plus élevé entre (a) le montant de nos frais et (b) 200.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.5 Nous n’acceptons notamment aucune responsabilité pour&nbsp;: (i) un manquement dû à des circonstances raisonnablement hors de notre contrôle ; (ii) des dysfonctionnements de communications hors de notre contrôle ; (iii) des pertes/retards liés à des FAI/navigateurs/logiciels hors de notre contrôle ; (iv) des erreurs dues à des informations incomplètes/inexactes fournies par vous ou un tiers.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4 mt-4">8.6 Aucune disposition n’exclut/limite notre responsabilité en cas de décès/blessure corporelle causés par notre négligence, ni en cas de fraude.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.7 Si vous envoyez de l’argent à un bénéficiaire non inscrit, vous acceptez ces dispositions en votre nom et au sien.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.8 Votre relation contractuelle est avec Finasddee uniquement ; aucun affilié/agent n’a envers vous d’obligation de diligence.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">8.9 Vous acceptez d’indemniser/tenir quittes Finasddee et ses affiliés/employés/agents/partenaires, de toute perte/préjudice/réclamation (y compris frais juridiques raisonnables) découlant d’un usage abusif du site/Service, d’activités sous votre mot de passe/adresse e‑mail, d’une violation des présentes ou des droits d’autrui.</p>

      {/* 9. COMMUNICATIONS ÉLECTRONIQUES */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Communications électroniques</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">9.1 Vous reconnaissez que ces Conditions sont conclues par voie électronique et que les catégories d’informations suivantes (« Communications ») peuvent être fournies par voie électronique&nbsp;:</p>
      <ul className="list-disc pl-6 text-base md:text-lg leading-relaxed space-y-2">
        <li>Les présentes Conditions et leurs modifications.</li>
        <li>Vos relevés de transactions.</li>
        <li>Toutes divulgations/notifications requises en lien avec le Service.</li>
        <li>Toutes communications du service client (erreurs, usage non autorisé, etc.).</li>
        <li>Toute autre communication relative au Service ou à Finasddee.</li>
      </ul>
      <p className="text-base md:text-lg leading-relaxed mb-4 mt-4">9.2 Le Service ne permet pas de fournir les communications sur support papier. Vous pouvez retirer votre consentement, mais cela mettra fin à votre utilisation du Service.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">9.3 Pour accéder et conserver ces communications, vous devez disposer d’un navigateur prenant en charge le chiffrement 128‑bits, d’un compte e‑mail, d’un ordinateur et d’une connexion Internet adéquats, d’un espace de stockage suffisant et d’une imprimante. Tenez à jour votre adresse e‑mail dans votre profil sur <Link href="/" className="text-gold-dark hover:underline">www.Finasddee.com</Link>.</p>

      {/* 10. RÉSILIATION */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Résiliation</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">10.1 Chaque partie peut résilier les présentes avec un préavis écrit d’un jour.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">10.2 Nous pouvons résilier immédiatement si&nbsp;: (i) vous devenez/risquez de devenir insolvable ; (ii) vous violez une disposition ; (iii) votre utilisation perturbe nos clients/porte atteinte à notre réputation ; (iv) vous violez/tentez de violer la sécurité du site (accès non autorisé, modification/suppression de données, interférence avec le système, rétro‑ingénierie, spam, logiciels malveillants, tests intrusifs, etc.).</p>

      {/* 11. RÉCLAMATIONS */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Réclamations</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">11.1 Pour toute réclamation concernant le service Finasddee, envoyez‑la par écrit à l’adresse figurant sur la page Contact ou par e‑mail à <a href="mailto:support@Finasddee.com" className="text-gold-dark hover:underline">support@Finasddee.com</a>.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">11.2 Accusé de réception sous 2 jours ouvrables. Réponse sous 7 jours ouvrables. En cas d’insatisfaction, vous pouvez saisir le Financial Ombudsman Service, South Quay Plaza, 183 Marsh Wall, London E14 9SR, Tél. 0800 0234 567, E‑mail&nbsp;: complaint.info@financial-ombudsman.org.uk.</p>

      {/* 12. DISPOSITIONS GÉNÉRALES */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">12. Dispositions générales</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">12.1 Droit applicable&nbsp;: droit anglais ; juridiction exclusive des tribunaux anglais.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">12.2 Absence de renonciation&nbsp;: le fait pour Finasddee de ne pas exercer/appliquer un droit ne vaut pas renonciation.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">12.3 Modification&nbsp;: nous pouvons modifier ces Conditions conformément à la loi. Vous pouvez cesser d’utiliser le Service si vous n’acceptez pas une modification. L’usage postérieur vaut acceptation. Vous ne pouvez pas modifier unilatéralement ces Conditions.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">12.4 Intégralité de l’accord&nbsp;: ces Conditions constituent l’accord complet entre les parties et remplacent tout accord antérieur relatif à leur objet.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">12.5 Divisibilité&nbsp;: si une disposition est jugée invalide, le tribunal doit en préserver l’intention dans la mesure du possible ; les autres dispositions demeurent en vigueur.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">12.6 Les liens externes vers des sites tiers sont fournis à titre de commodité. Nous n’en contrôlons pas le contenu et vous y accédez à vos risques.</p>

      {/* Sécurité */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Sécurité</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        Chez Finasddee, la sécurité est primordiale. Nous utilisons des mesures de pointe pour protéger vos informations. Le Service Finasddee est un moyen sûr et pratique d’envoyer de l’argent à des proches. Soyez toutefois très vigilant avant d’envoyer de l’argent à des personnes que vous ne connaissez pas. Si vous constatez un usage inapproprié du Service, contactez‑nous via notre <Link href="/contact" className="text-gold-dark hover:underline">formulaire de contact</Link>. Si vous recevez des e‑mails semblant provenir de Finasddee et que vous soupçonnez un « phishing », transférez‑les via le <Link href="/contact" className="text-gold-dark hover:underline">formulaire de contact</Link>.
      </p>

      {/* Coordonnées */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Coordonnées</h2>
      <p className="text-base md:text-lg leading-relaxed mb-4">Questions, notifications et demandes de remboursement ou d’informations supplémentaires&nbsp;: <Link href="/contact" className="text-gold-dark hover:underline">en ligne</Link>.</p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        Par téléphone&nbsp;: +447441426016<br />
        Par fax&nbsp;: +447441426016<br />
        Par e‑mail&nbsp;: <a href="mailto:support@Finasddee.com" className="text-gold-dark hover:underline">support@Finasddee.com</a><br />
        Par courrier&nbsp;: Finasddee, attn: Customer Service, 3rd Floor, 86-90 Paul Street, London EC2A 4NE, Royaume‑Uni.
      </p>
    </div>
  )
}
