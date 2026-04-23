export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6">
        Politique de Confidentialité
      </h1>
      <p className="text-sm text-gray-600 text-center mb-6">
        Dernière mise à jour : 23 avril 2026
      </p>

      <section className="mb-6">
        <p>
          Bienvenue sur <strong>open IVF</strong> ("nous", "notre", "nos"). Nous
          attachons une grande importance à la protection de vos données
          personnelles et à votre vie privée. Cette Politique de Confidentialité
          explique comment nous collectons, utilisons et protégeons vos
          informations conformément au Règlement Général sur la Protection des
          Données (RGPD – Règlement UE 2016/679).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Responsable du Traitement
        </h2>
        <p>Le responsable du traitement de vos données personnelles est :</p>
        <ul className="list-none ml-5 mt-2">
          <li>
            <strong>Société :</strong> Caring IVF
          </li>
          <li>
            <strong>Site web :</strong> www.caringivf.com
          </li>
          <li>
            <strong>Contact :</strong>{" "}
            <a
              href="mailto:privacy@open-ivf.com"
              className="text-blue-600 underline"
            >
              privacy@open-ivf.com
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Données Personnelles Collectées
        </h2>
        <p>Nous collectons les catégories de données suivantes :</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            <strong>Données d'identification :</strong> Nom, prénom, nom de
            l'entreprise.
          </li>
          <li>
            <strong>Données de contact :</strong> Adresse e-mail, numéro de
            téléphone.
          </li>
          <li>
            <strong>Données commerciales :</strong> Produits et services
            d'intérêt sélectionnés dans notre formulaire.
          </li>
          <li>
            <strong>Données de navigation :</strong> Adresse IP, type
            d'appareil, système d'exploitation, pages consultées, cookies.
          </li>
        </ul>
        <p className="mt-2">
          Nous ne collectons pas de catégories particulières de données
          sensibles (données de santé, opinions politiques, etc.) via ce
          formulaire.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Finalités et Bases Légales du Traitement
        </h2>
        <table className="w-full border-collapse mt-2 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Finalité</th>
              <th className="border border-gray-300 p-2 text-left">
                Base légale (RGPD)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Traitement de votre demande via le formulaire de contact
              </td>
              <td className="border border-gray-300 p-2">
                Exécution de mesures précontractuelles (Art. 6(1)(b))
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Envoi de communications marketing et d'informations sur nos
                produits
              </td>
              <td className="border border-gray-300 p-2">
                Consentement (Art. 6(1)(a))
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Amélioration de notre site et de nos services
              </td>
              <td className="border border-gray-300 p-2">
                Intérêt légitime (Art. 6(1)(f))
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Respect des obligations légales et réglementaires
              </td>
              <td className="border border-gray-300 p-2">
                Obligation légale (Art. 6(1)(c))
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Partage et Transfert des Données
        </h2>
        <p>
          Nous ne vendons ni ne louons vos données personnelles à des tiers.
          Nous pouvons partager vos informations avec :
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            <strong>Prestataires de services tiers :</strong> hébergement, envoi
            d'e-mails (EmailJS), analyses d'utilisation — uniquement dans le
            cadre de l'exécution de leurs services et sous contrat de traitement
            de données.
          </li>
          <li>
            <strong>Autorités compétentes :</strong> en cas d'obligation légale
            ou pour prévenir une fraude.
          </li>
        </ul>
        <p className="mt-2">
          Certains de nos prestataires peuvent être établis en dehors de
          l'Espace Économique Européen (EEE). Dans ce cas, nous veillons à ce
          que des garanties appropriées soient en place (clauses contractuelles
          types de la Commission européenne ou décision d'adéquation).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Durée de Conservation des Données
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <strong>Données de prospects :</strong> 3 ans à compter du dernier
            contact ou de la dernière interaction.
          </li>
          <li>
            <strong>Données comptables et contractuelles :</strong> 10 ans
            conformément aux obligations légales.
          </li>
          <li>
            <strong>Données de navigation / cookies :</strong> 13 mois maximum.
          </li>
        </ul>
        <p className="mt-2">
          Au-delà de ces durées, vos données sont supprimées ou anonymisées.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Vos Droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            <strong>Droit d'accès (Art. 15) :</strong> Obtenir une copie de vos
            données personnelles que nous traitons.
          </li>
          <li>
            <strong>Droit de rectification (Art. 16) :</strong> Corriger des
            informations inexactes ou incomplètes.
          </li>
          <li>
            <strong>Droit à l'effacement (Art. 17) :</strong> Demander la
            suppression de vos données dans les cas prévus par la loi.
          </li>
          <li>
            <strong>Droit à la limitation du traitement (Art. 18) :</strong>{" "}
            Demander la suspension temporaire du traitement de vos données.
          </li>
          <li>
            <strong>Droit à la portabilité (Art. 20) :</strong> Recevoir vos
            données dans un format structuré et lisible par machine.
          </li>
          <li>
            <strong>Droit d'opposition (Art. 21) :</strong> Vous opposer au
            traitement de vos données, notamment à des fins de prospection
            commerciale.
          </li>
          <li>
            <strong>Droit de retrait du consentement :</strong> Retirer votre
            consentement à tout moment, sans que cela affecte la licéité du
            traitement effectué avant ce retrait.
          </li>
          <li>
            <strong>
              Droit de ne pas faire l'objet d'une décision automatisée :
            </strong>{" "}
            Nous n'utilisons pas de prise de décision entièrement automatisée ni
            de profilage produisant des effets juridiques significatifs.
          </li>
        </ul>
        <p className="mt-3">
          Pour exercer vos droits, contactez-nous à :{" "}
          <a
            href="mailto:privacy@open-ivf.com"
            className="text-blue-600 underline"
          >
            privacy@open-ivf.com
          </a>
          . Nous répondrons dans un délai d'un mois à compter de la réception de
          votre demande (délai pouvant être prolongé de deux mois en cas de
          demandes complexes).
        </p>
        <p className="mt-2">
          Vous avez également le droit d'introduire une réclamation auprès de
          l'autorité de contrôle compétente. En France, il s'agit de la{" "}
          <strong>CNIL</strong> (Commission Nationale de l'Informatique et des
          Libertés) :{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.cnil.fr
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Sécurité des Données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et
          organisationnelles appropriées pour protéger vos données personnelles
          contre tout accès non autorisé, divulgation, altération ou destruction
          (chiffrement des transmissions, accès restreint aux données,
          procédures de sauvegarde).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Cookies et Technologies Similaires
        </h2>
        <p>
          Nous utilisons des cookies et technologies similaires pour améliorer
          votre expérience de navigation et analyser l'utilisation de notre
          site. Les cookies strictement nécessaires sont déposés sans
          consentement préalable ; les cookies analytiques et marketing
          nécessitent votre accord. Vous pouvez gérer ou retirer votre
          consentement à tout moment via les paramètres de votre navigateur ou
          notre bannière de gestion des cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          9. Modification de la Politique de Confidentialité
        </h2>
        <p>
          Nous nous réservons le droit de modifier la présente politique à tout
          moment. Toute modification substantielle vous sera notifiée par e-mail
          ou via un avis visible sur notre site. La version en vigueur est
          toujours disponible sur cette page avec la date de dernière mise à
          jour.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
        <p>
          Pour toute question relative à la présente politique ou au traitement
          de vos données personnelles, contactez-nous à :{" "}
          <a
            href="mailto:privacy@open-ivf.com"
            className="text-blue-600 underline"
          >
            privacy@open-ivf.com
          </a>
        </p>
      </section>
    </div>
  );
}
