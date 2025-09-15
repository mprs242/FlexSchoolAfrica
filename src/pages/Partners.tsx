import { FaBuilding, FaUsersCog, FaGlobeAfrica } from "react-icons/fa";
import JoinButton from "../components/JoinButton";

export default function Partenaires() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Titre */}
        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
          Nos partenaires
        </h3>

        {/* Bouton CTA */}
        <JoinButton />

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Rejoindre FlexSchoolAfrica en tant que partenaire, c’est investir dans
          l’avenir de la jeunesse africaine tout en renforçant vos actions de
          formation et de responsabilité sociétale.
        </p>

        {/* Cartes partenaires */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Carte 1 : Entreprises */}
          <div className="p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <FaBuilding className="text-indigo-600 text-5xl mb-6 mx-auto" />
            <h5 className="text-2xl font-bold text-gray-800 mb-4">
              Entreprises
            </h5>
            <p className="text-gray-600 text-base">
              Développez les compétences de vos collaborateurs grâce à des
              formations continues adaptées aux besoins du marché africain et
              international.
            </p>
          </div>

          {/* Carte 2 : Institutions */}
          <div className="p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <FaUsersCog className="text-green-600 text-5xl mb-6 mx-auto" />
            <h5 className="text-2xl font-bold text-gray-800 mb-4">
              Institutions
            </h5>
            <p className="text-gray-600 text-base">
              Collaborez pour renforcer l’accès à l’éducation, améliorer
              l’employabilité des jeunes et promouvoir le développement durable.
            </p>
          </div>

          {/* Carte 3 : ONG & Organisations internationales */}
          <div className="p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <FaGlobeAfrica className="text-purple-600 text-5xl mb-6 mx-auto" />
            <h5 className="text-2xl font-bold text-gray-800 mb-4">
              ONG & Organisations
            </h5>
            <p className="text-gray-600 text-base">
              Contribuez à la démocratisation de l’éducation en Afrique et
              soutenez des initiatives à fort impact social et humain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
