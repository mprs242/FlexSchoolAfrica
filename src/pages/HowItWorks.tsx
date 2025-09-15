import {
  FaLaptopHouse,
  FaChalkboard,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";

import JoinButton from "../components/JoinButton";

export default function Fonctionnement() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Titre */}
        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
          Comment ça fonctionne ?
        </h3>
        {/* Bouton réutilisable */}
        <JoinButton />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          FlexSchoolAfrica vous offre une expérience d’apprentissage moderne et
          flexible, adaptée à vos besoins et à votre rythme.
        </p>

        {/* Grille des cartes */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Carte 1 : Étudiez chez soi */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaLaptopHouse className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Étudiez chez soi
            </h5>
            <p className="text-sm text-gray-600">
              Suivez vos cours en ligne où que vous soyez, grâce à une
              plateforme simple et accessible depuis votre domicile.
            </p>
          </div>

          {/* Carte 2 : Nos salles de classes connectées */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaChalkboard className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Nos salles de classes connectées
            </h5>
            <p className="text-sm text-gray-600">
              Accédez à des espaces modernes équipés pour suivre les cours en
              direct avec vos enseignants internationaux.
            </p>
          </div>

          {/* Carte 3 : Travail collaboratif */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaUsers className="text-green-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Travail collaboratif
            </h5>
            <p className="text-sm text-gray-600">
              Collaborez avec vos camarades sur des projets, échangez des idées
              et progressez ensemble.
            </p>
          </div>

          {/* Carte 4 : Ressources et suivi */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaBookOpen className="text-pink-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Ressources et suivi
            </h5>
            <p className="text-sm text-gray-600">
              Bénéficiez de supports pédagogiques numériques et d’un suivi
              personnalisé pour assurer votre réussite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
