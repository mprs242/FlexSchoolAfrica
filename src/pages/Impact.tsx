import { FaBookOpen, FaBriefcase, FaIndustry, FaEquals } from "react-icons/fa";

export default function Impact() {
  const impacts = [
    {
      title: "ODD 4 : Éducation de qualité",
      icon: <FaBookOpen className="h-10 w-10 text-red-600" />,
      description:
        "Assurer l'accès de tous à une éducation de qualité, sur un pied d'égalité, et promouvoir les possibilités d’apprentissage tout au long de la vie.",
      color: "bg-red-50 hover:shadow-red-200",
    },
    {
      title: "ODD 8 : Travail décent et croissance économique",
      icon: <FaBriefcase className="h-10 w-10 text-purple-600" />,
      description:
        "Promouvoir une croissance économique soutenue, inclusive et durable, le plein emploi productif et un travail décent pour tous.",
      color: "bg-purple-50 hover:shadow-purple-200",
    },
    {
      title: "ODD 9 : Industrie, innovation et infrastructures",
      icon: <FaIndustry className="h-10 w-10 text-orange-600" />,
      description:
        "Bâtir une infrastructure résiliente, promouvoir une industrialisation durable et encourager l’innovation.",
      color: "bg-orange-50 hover:shadow-orange-200",
    },
    {
      title: "ODD 10 : Réduction des inégalités",
      icon: <FaEquals className="h-10 w-10 text-pink-600" />,
      description:
        "Réduire les inégalités à l'intérieur des pays et d'un pays à l'autre, en favorisant l’inclusion sociale et économique.",
      color: "bg-pink-50 hover:shadow-pink-200",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Impact & Objectifs de Développement Durable
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FlexSchoolAfrica contribue activement aux Objectifs de Développement
            Durable définis par les Nations Unies, en transformant l’éducation
            et en renforçant le développement socio-économique en Afrique.
          </p>
        </div>

        {/* Grille des ODD */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-8 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 ${impact.color}`}
            >
              <div className="mb-4">{impact.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {impact.title}
              </h4>
              <p className="text-gray-600 text-sm text-center">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
