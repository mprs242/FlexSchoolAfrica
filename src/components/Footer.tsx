import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const countries = [
    { name: "Congo", flag: "🇨🇬" },
    { name: "Togo", flag: "🇹🇬" },
    { name: "Sénégal", flag: "🇸🇳" },
    { name: "Côte d'Ivoire", flag: "🇨🇮" },
    { name: "France", flag: "🇫🇷" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Présence internationale */}
        <h4 className="text-2xl font-bold mb-8">Nous sommes déjà présents</h4>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <span className="text-4xl">{country.flag}</span>
              <h5 className="mt-3 font-semibold">{country.name}</h5>
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="mb-12">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105 transform transition"
          >
            Rejoignez-nous
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-110 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/33644037216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 text-2xl hover:scale-110 transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Bas du footer */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FlexSchoolAfrica – Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
