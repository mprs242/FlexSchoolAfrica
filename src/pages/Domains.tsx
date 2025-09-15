import {
  FaBriefcase,
  FaUserTie,
  FaCogs,
  FaIndustry,
  FaOilCan,
  FaBolt,
  FaTint,
  FaRobot,
  FaBuilding,
} from "react-icons/fa";

export default function Domains() {
  const domaines = [
    {
      title: "Gestion de projet",
      icon: <FaBriefcase className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Management",
      icon: <FaUserTie className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Ingénierie mécanique",
      icon: <FaCogs className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Hydraulique industrielle",
      icon: <FaTint className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Énergie",
      icon: <FaBolt className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Oil & Gas",
      icon: <FaOilCan className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Industrie",
      icon: <FaIndustry className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Construction",
      icon: <FaBuilding className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Numérique : Informatique & Intelligence Artificielle",
      icon: <FaRobot className="h-10 w-10 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Domaines d’enseignement
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos formations couvrent des secteurs stratégiques pour le
            développement de l’Afrique, en alliant excellence académique et
            expertise industrielle.
          </p>
        </div>

        {/* Grille de domaines */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {domaines.map((domaine, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="mb-4">{domaine.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 text-center">
                {domaine.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
