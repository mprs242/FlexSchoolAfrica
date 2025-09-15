import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h2 className="text-4xl font-bold mb-4">
        L’école connectée qui ouvre l’Afrique au savoir mondial
      </h2>
      <p className="mb-6 max-w-2xl mx-auto">
        FlexSchoolAfrica rapproche les étudiants africains des meilleurs
        professeurs internationaux grâce à des salles de classe connectées et au
        travail collaboratif en ligne.
      </p>
      <Link
        to="/about"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
      >
        En savoir plus
      </Link>
    </section>
  );
}
