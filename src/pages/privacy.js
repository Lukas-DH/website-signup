export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6">
        Politique de Confidentialité
      </h1>
      <p className="text-sm text-gray-600 text-center mb-6">
        Dernière mise à jour : [Date]
      </p>

      <section className="mb-6">
        <p>
          Bienvenue sur <strong>[Nom de l'Application]</strong> ("nous",
          "notre", "nos"). Nous attachons une grande importance à la protection
          de vos données personnelles et à votre vie privée. Cette Politique de
          Confidentialité explique comment nous collectons, utilisons et
          protégeons vos informations conformément au Règlement Général sur la
          Protection des Données (RGPD).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Informations Collectées
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <strong>Données personnelles :</strong> Nom, adresse e-mail, numéro
            de téléphone, etc.
          </li>
          <li>
            <strong>Données de connexion :</strong> Adresse IP, type d'appareil,
            version de l'OS, pages consultées.
          </li>
          <li>
            <strong>Cookies :</strong> Historique de navigation, préférences
            d'utilisation.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Finalités du Traitement des Données
        </h2>
        <p>Vos données sont collectées pour :</p>
        <ul className="list-disc ml-5">
          <li>Fournir, maintenir et améliorer notre application.</li>
          <li>Gérer votre compte utilisateur.</li>
          <li>Envoyer des notifications importantes.</li>
          <li>Améliorer votre expérience utilisateur.</li>
          <li>Se conformer aux obligations légales et réglementaires.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Partage et Transfert des Données
        </h2>
        <p>
          Nous ne vendons ni ne louons vos données personnelles. Nous pouvons
          partager vos informations avec :
        </p>
        <ul className="list-disc ml-5">
          <li>
            <strong>Prestataires tiers :</strong> Hébergement, analytique,
            services essentiels.
          </li>
          <li>
            <strong>Autorités légales :</strong> En cas d'obligation légale ou
            pour prévenir une fraude.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Durée de Conservation des Données
        </h2>
        <p>
          Nous conservons vos données aussi longtemps que nécessaire pour
          remplir les finalités mentionnées, sauf obligation légale contraire.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Vos Droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc ml-5">
          <li>
            <strong>Droit d'accès :</strong> Obtenir une copie de vos données.
          </li>
          <li>
            <strong>Droit de rectification :</strong> Corriger des informations
            inexactes.
          </li>
          <li>
            <strong>Droit à l'effacement :</strong> Supprimer vos données.
          </li>
          <li>
            <strong>Droit à la portabilité :</strong> Recevoir vos données sous
            un format structuré.
          </li>
        </ul>
        <p>
          Pour exercer vos droits, contactez-nous à :{" "}
          <strong>[Adresse e-mail de contact]</strong>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Sécurité des Données</h2>
        <p>
          Nous mettons en place des mesures de sécurité techniques et
          organisationnelles pour protéger vos données contre l'accès non
          autorisé.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Cookies et Technologies Similaires
        </h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience. Vous
          pouvez gérer vos préférences via votre navigateur.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Modification de la Politique de Confidentialité
        </h2>
        <p>
          Nous pouvons modifier cette politique à tout moment. Toute
          modification sera publiée sur cette page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
        <p>
          Pour toute question, contactez-nous à :{" "}
          <strong>[Adresse e-mail de contact]</strong>
        </p>
      </section>
    </div>
  );
}
