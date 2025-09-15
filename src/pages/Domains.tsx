import { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";

type Domaine = {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  preview: string[];
};

const domaines: Domaine[] = [
  {
    id: "gestion-projet",
    name: "Gestion de projet",
    description:
      "Développez vos compétences pour planifier, organiser et gérer des projets complexes.",
    icon: (
      <FaProjectDiagram className="text-indigo-600 text-4xl mb-4 mx-auto" />
    ),
    preview: ["Méthodes Agile & Scrum", "Planification avancée", "Leadership"],
  },
  {
    id: "management",
    name: "Management",
    description:
      "Apprenez à diriger des équipes et à optimiser la performance des organisations.",
    icon: <FaBuilding className="text-green-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "Management interculturel",
      "Gestion des ressources humaines",
      "Stratégie d’entreprise",
    ],
  },
  {
    id: "mecanique",
    name: "Ingénierie mécanique",
    description:
      "Maîtrisez les outils et méthodes de la conception et de la production mécanique.",
    icon: <FaCogs className="text-yellow-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "CAO & modélisation 3D",
      "Fabrication additive",
      "Maintenance industrielle",
    ],
  },
  {
    id: "hydraulique",
    name: "Hydraulique industrielle",
    description:
      "Formez-vous aux systèmes hydrauliques utilisés dans l’industrie et les grands chantiers.",
    icon: <FaIndustry className="text-blue-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "Bases des circuits hydrauliques",
      "Maintenance et diagnostic",
      "Applications en BTP",
    ],
  },
  {
    id: "energie",
    name: "Énergie",
    description:
      "Explorez les énergies renouvelables et fossiles pour contribuer à un avenir durable.",
    icon: <FaBolt className="text-yellow-500 text-4xl mb-4 mx-auto" />,
    preview: [
      "Énergies solaires & éoliennes",
      "Stockage d’énergie",
      "Gestion des réseaux électriques",
    ],
  },
  {
    id: "oilgas",
    name: "Oil & Gas",
    description:
      "Spécialisez-vous dans l’exploration, la production et la gestion pétrolière et gazière.",
    icon: <FaOilCan className="text-red-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "Forage & exploration",
      "Transport & stockage",
      "Marchés pétroliers",
    ],
  },
  {
    id: "industrie",
    name: "Industrie",
    description:
      "Découvrez les procédés industriels modernes et leurs applications dans l’économie africaine.",
    icon: <FaIndustry className="text-purple-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "Automatisation & robotique",
      "Lean manufacturing",
      "Gestion de la qualité",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    description:
      "Formez-vous aux techniques modernes de construction et d’urbanisation.",
    icon: <FaHardHat className="text-orange-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "Gestion de chantier",
      "Matériaux innovants",
      "Urbanisme durable",
    ],
  },
  {
    id: "numerique",
    name: "Numérique & IA",
    description:
      "Plongez dans l’informatique, le développement et l’intelligence artificielle.",
    icon: <FaLaptopCode className="text-pink-600 text-4xl mb-4 mx-auto" />,
    preview: [
      "Développement web & mobile",
      "IA & Machine Learning",
      "Cybersécurité",
    ],
  },
];

export default function Domaines() {
  const [selected, setSelected] = useState<Domaine | null>(null);

  // Fermer automatiquement après 6s
  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => setSelected(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [selected]);

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
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
          {domaines.map((domaine) => (
            <div
              key={domaine.id}
              onClick={() => setSelected(domaine)}
              className="cursor-pointer p-6 bg-white rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1"
            >
              {domaine.icon}
              <h5 className="text-lg font-bold text-gray-800 mb-2">
                {domaine.name}
              </h5>
              <p className="text-sm text-gray-600">{domaine.description}</p>
            </div>
          ))}
        </div>

        {/* Aperçu (popup animé) */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative transform transition-all duration-500 scale-95 opacity-0 animate-fadeZoom"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {selected.name}
              </h4>
              <p className="text-gray-600 mb-4">{selected.description}</p>

              <h5 className="text-lg font-semibold text-gray-800 mb-2">
                Aperçu des cours :
              </h5>
              <ul className="list-disc pl-5 text-left text-gray-600 space-y-1 mb-4">
                {selected.preview.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
                >
                  Rejoignez-nous
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
