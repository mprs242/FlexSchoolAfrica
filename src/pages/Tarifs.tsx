import { Link } from "react-router-dom";

export default function Tarifs() {
  // Fonction de conversion Euro → CFA
  const toCFA = (price: number) => price * 655;
  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Titre */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Nos Tarifs
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          FlexSchoolAfrica propose des formations accessibles et de qualité,
          adaptées à vos besoins. Découvrez nos formules et choisissez celle qui
          vous correspond.
        </p>

        {/* Grille des tarifs */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Gratuit */}
          <div className="p-8 bg-white border-2 border-green-500 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Module Découverte
              </h3>
              <p className="text-gray-600 mb-6">
                Initiez-vous gratuitement au numérique et aux compétences du
                futur. Un module offert pour découvrir notre pédagogie.
              </p>
              <p className="text-4xl font-extrabold text-green-600 mb-6">0 €</p>
              <p className="text-4xl font-extrabold text-indigo-600 mb-6">
                (~{toCFA(0).toLocaleString()} FCFA)
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
            >
              Commencez Gratuitement
            </Link>
          </div>

          {/* Module seul */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                Module seul
              </h3>
              <p className="text-gray-600 mb-6">
                Suivez un module dans le domaine de votre choix (IA, mécanique,
                énergie…).
              </p>
              <p className="text-4xl font-extrabold text-indigo-600 mb-6">
                49 €
              </p>
              <p className="text-4xl font-extrabold text-indigo-600 mb-6">
                (~{toCFA(50).toLocaleString()} FCFA)
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Rejoignez-nous
            </Link>
          </div>

          {/* Pack 3 modules */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between border-2 border-purple-500 relative">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              POPULAIRE
            </span>
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                Pack 3 modules
              </h3>
              <p className="text-gray-600 mb-6">
                Progressez rapidement avec un parcours combinant 3 modules
                complémentaires.
              </p>
              <p className="text-4xl font-extrabold text-purple-600 mb-6">
                124 €
              </p>
              <p className="text-4xl font-extrabold text-indigo-600 mb-6">
                (~{toCFA(125).toLocaleString()} FCFA)
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Rejoignez-nous
            </Link>
          </div>

          {/* Pass illimité */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-pink-600 mb-2">
                Pass illimité 1 an
              </h3>
              <p className="text-gray-600 mb-6">
                Accédez à tous nos modules dans tous les domaines pendant 12
                mois, sans limite.
              </p>
              <p className="text-4xl font-extrabold text-pink-600 mb-6">
                249 €
              </p>
              <p className="text-4xl font-extrabold text-indigo-600 mb-6">
                (~{toCFA(250).toLocaleString()} FCFA)
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>

        {/* Note */}
        <p className="mt-12 text-gray-500 italic">
          Tous nos tarifs s’appliquent à l’ensemble des domaines : Numérique,
          Industrie, Hydraulique, Construction, Énergie, Management, et plus.
        </p>
      </div>
    </section>
  );
}
