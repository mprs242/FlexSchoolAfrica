export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Notre histoire
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FlexSchoolAfrica est né d’une histoire commune : celle de jeunes
            africains partis étudier en Europe, découvrant des opportunités
            incroyables, mais aussi les barrières financières et géographiques
            qui empêchent tant d’étudiants en Afrique d’accéder à la même
            qualité d’éducation.
          </p>
        </div>

        {/* Histoire + Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Histoire */}
          <div>
            <h4 className="text-2xl font-semibold text-indigo-600 mb-4">
              Notre histoire
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comme beaucoup, nous avons quitté nos familles, traversé des
              frontières et investi des ressources importantes pour poursuivre
              nos études en Europe. Ce parcours, bien que riche en expériences,
              nous a révélé une réalité : le talent et la motivation existent en
              Afrique, mais l’accès à une éducation de qualité reste un
              privilège réservé à quelques-uns.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous avons ressenti une conviction profonde :{" "}
              <span className="font-semibold text-indigo-700">
                il est temps de construire un pont entre l’Afrique et le reste
                du monde, pour que chaque jeune, où qu’il se trouve, ait la
                possibilité de se former et de réaliser son potentiel.
              </span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              FlexSchoolAfrica est ce pont : un espace connecté qui réunit des
              professeurs internationaux et des étudiants africains, pour que le
              savoir circule sans frontières, et que la jeunesse africaine
              devienne actrice de son propre avenir.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h4 className="text-2xl font-semibold text-indigo-600 mb-6">
              Notre vision
            </h4>
            <div className="grid gap-6">
              <div className="p-6 bg-indigo-50 rounded-2xl shadow hover:shadow-md transition">
                <h5 className="text-lg font-bold text-indigo-700 mb-2">
                  10 000 étudiants formés
                </h5>
                <p className="text-gray-600 text-sm">
                  Offrir à la jeunesse africaine un accès direct à une éducation
                  internationale de qualité.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-md transition">
                <h5 className="text-lg font-bold text-green-700 mb-2">
                  Des hubs éducatifs en Afrique
                </h5>
                <p className="text-gray-600 text-sm">
                  Créer des campus connectés dans plusieurs pays africains pour
                  rapprocher le savoir des jeunes.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-2xl shadow hover:shadow-md transition">
                <h5 className="text-lg font-bold text-yellow-700 mb-2">
                  Un réseau mondial
                </h5>
                <p className="text-gray-600 text-sm">
                  Connecter étudiants, professeurs et professionnels de la
                  diaspora pour bâtir un avenir commun.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold text-indigo-600 mb-6">
            Nos valeurs
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h5 className="text-lg font-bold mb-2">Innovation</h5>
              <p className="text-gray-600 text-sm">
                Utiliser les outils numériques pour révolutionner l’accès à
                l’éducation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h5 className="text-lg font-bold mb-2">Accessibilité</h5>
              <p className="text-gray-600 text-sm">
                Offrir à chaque jeune africain, sans distinction, une chance
                d’apprendre.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h5 className="text-lg font-bold mb-2">Excellence</h5>
              <p className="text-gray-600 text-sm">
                Garantir la qualité des cours et des enseignants pour un avenir
                solide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
