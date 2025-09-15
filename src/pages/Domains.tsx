import {
  FaCogs,
  FaProjectDiagram,
  FaBuilding,
  FaIndustry,
  FaHardHat,
  FaBolt,
  FaOilCan,
  FaLaptopCode,
} from "react-icons/fa";

export default function Domaines() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Titre */}
        <h3 className="text-4xl font-extrabold text-white mb-4">
          Nos Domaines de Formation
        </h3>
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
          FlexSchoolAfrica propose des parcours adaptés aux enjeux actuels et
          futurs de l’Afrique, en mettant l’accent sur l’innovation, la pratique
          et l’employabilité.
        </p>

        {/* Grille des domaines */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Gestion de projet */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaProjectDiagram className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Gestion de projet
            </h5>
            <p className="text-sm text-gray-600">
              Développez vos compétences pour planifier, organiser et gérer des
              projets complexes.
            </p>
          </div>

          {/* Management */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaBuilding className="text-green-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">Management</h5>
            <p className="text-sm text-gray-600">
              Apprenez à diriger des équipes et à optimiser la performance des
              organisations.
            </p>
          </div>

          {/* Ingénierie mécanique */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaCogs className="text-yellow-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Ingénierie mécanique
            </h5>
            <p className="text-sm text-gray-600">
              Maîtrisez les outils et méthodes de la conception et de la
              production mécanique.
            </p>
          </div>

          {/* Hydraulique industrielle */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaIndustry className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Hydraulique industrielle
            </h5>
            <p className="text-sm text-gray-600">
              Formez-vous aux systèmes hydrauliques utilisés dans l’industrie et
              les grands chantiers.
            </p>
          </div>

          {/* Énergie */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaBolt className="text-yellow-500 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">Énergie</h5>
            <p className="text-sm text-gray-600">
              Explorez les énergies renouvelables et fossiles pour contribuer à
              un avenir durable.
            </p>
          </div>

          {/* Oil & Gas */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaOilCan className="text-red-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">Oil & Gas</h5>
            <p className="text-sm text-gray-600">
              Spécialisez-vous dans l’exploration, la production et la gestion
              pétrolière et gazière.
            </p>
          </div>

          {/* Industrie */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaIndustry className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">Industrie</h5>
            <p className="text-sm text-gray-600">
              Découvrez les procédés industriels modernes et leurs applications
              dans l’économie africaine.
            </p>
          </div>

          {/* Construction */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaHardHat className="text-orange-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Construction
            </h5>
            <p className="text-sm text-gray-600">
              Formez-vous aux techniques modernes de construction et
              d’urbanisation.
            </p>
          </div>

          {/* Numérique */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaLaptopCode className="text-pink-600 text-4xl mb-4 mx-auto" />
            <h5 className="text-lg font-bold text-gray-800 mb-2">
              Numérique & IA
            </h5>
            <p className="text-sm text-gray-600">
              Plongez dans l’informatique, le développement et l’intelligence
              artificielle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
