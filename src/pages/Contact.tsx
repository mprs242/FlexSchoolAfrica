import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebookMessenger,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Ton logo PNG

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Logo en haut */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo FlexSchoolAfrica"
            className="h-20 w-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-indigo-700">
            FlexSchoolAfrica
          </h2>
        </div>

        {/* Intro */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contactez-nous
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vous êtes étudiant, professeur ou partenaire institutionnel ?
            Rejoignez-nous pour construire ensemble l’éducation de demain en
            Afrique.
          </p>
        </div>

        {/* Formulaire + Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Formulaire */}
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="votremail@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="+242 06 00 00 00"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Sujet"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option value="">Choisissez un domaine</option>
              <option>Gestion de projet</option>
              <option>Management</option>
              <option>Ingénierie mécanique</option>
              <option>Hydraulique industrielle</option>
              <option>Énergie</option>
              <option>Oil & Gas</option>
              <option>Industrie</option>
              <option>Construction</option>
              <option>
                Numérique : Informatique & Intelligence Artificielle
              </option>
            </select>
            <textarea
              rows={4}
              placeholder="Écrivez votre message ici..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() =>
                alert("Fonction d'envoi à connecter (EmailJS ou Formspree)")
              }
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
            >
              Envoyer
            </button>
          </form>

          {/* Vision avec fond dégradé */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg text-white">
            <h4 className="text-2xl font-semibold mb-6">Notre vision</h4>
            <div className="grid gap-6">
              <div className="p-4 bg-white/90 rounded-xl shadow hover:shadow-md transition">
                <h5 className="font-bold text-indigo-700">
                  10 000 étudiants formés
                </h5>
                <p className="text-sm text-gray-700">
                  Offrir à la jeunesse africaine un accès direct à une éducation
                  internationale de qualité.
                </p>
              </div>
              <div className="p-4 bg-white/90 rounded-xl shadow hover:shadow-md transition">
                <h5 className="font-bold text-green-700">
                  Des hubs éducatifs en Afrique
                </h5>
                <p className="text-sm text-gray-700">
                  Créer des campus connectés dans plusieurs pays africains pour
                  rapprocher le savoir des jeunes.
                </p>
              </div>
              <div className="p-4 bg-white/90 rounded-xl shadow hover:shadow-md transition">
                <h5 className="font-bold text-yellow-700">Un réseau mondial</h5>
                <p className="text-sm text-gray-700">
                  Connecter étudiants, professeurs et professionnels de la
                  diaspora pour bâtir un avenir commun.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coordonnées */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-700">
            Vous pouvez aussi nous écrire à :{" "}
            <a
              href="mailto:contact@flexschoolafrica.org"
              className="text-indigo-600 font-semibold hover:underline"
            >
              contact@flexschoolafrica.org
            </a>
          </p>
          <p className="flex items-center justify-center text-gray-700 gap-2">
            <FaPhone className="text-indigo-600" />
            <a href="tel:+242644037216" className="hover:underline">
              +242 06 44 03 72 16
            </a>
          </p>

          {/* Réseaux sociaux */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.instagram.com/direct/t/USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/242644037216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 text-3xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://m.me/PAGE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-3xl"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://youtube.com/channel/CHANNEL_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 text-3xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
