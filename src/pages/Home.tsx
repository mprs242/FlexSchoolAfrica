import {
  FaQuoteLeft,
  FaUserGraduate,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Bienvenue à <span className="text-indigo-600">FlexSchoolAfrica</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          La plateforme éducative qui connecte l’Afrique au savoir mondial.
          Étudiez auprès de professeurs internationaux, où que vous soyez.
        </p>

        {/* Avantages */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi nous rejoindre ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Étudiants */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <FaUserGraduate className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pour les étudiants
              </h3>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-2">
                <li>Accès à des professeurs internationaux</li>
                <li>Formations flexibles et hybrides</li>
                <li>Frais de scolarité réduits par rapport à l’étranger</li>
                <li>Compétences recherchées sur le marché de l’emploi</li>
              </ul>
            </div>

            {/* Professionnels */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <FaBriefcase className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pour les professionnels
              </h3>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-2">
                <li>Opportunité de transmettre son expertise</li>
                <li>Réseau avec la diaspora africaine</li>
                <li>
                  Contribuer à l’éducation et au développement du continent
                </li>
                <li>Visibilité et reconnaissance internationale</li>
              </ul>
            </div>

            {/* Partenaires */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <FaHandshake className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pour les partenaires
              </h3>
              <ul className="list-disc pl-6 text-gray-600 text-sm space-y-2">
                <li>Montée en compétence des salariés et collaborateurs</li>
                <li>Programmes de formation continue adaptés</li>
                <li>Renforcement de la responsabilité sociétale (RSE)</li>
                <li>Contribuer au développement durable de l’Afrique</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105 transform transition"
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ils nous font confiance
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {/* Congo */}
            <SwiperSlide>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-indigo-600 text-2xl mb-3 mx-auto" />
                <p className="text-gray-700 text-sm italic mb-4">
                  “FlexSchoolAfrica m’a permis d’apprendre l’ingénierie sans
                  quitter Brazzaville. Une chance unique !”
                </p>
                <div>
                  <h5 className="font-bold text-gray-900">Jean M.</h5>
                  <span className="text-indigo-600 text-sm">Congo</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Togo */}
            <SwiperSlide>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-indigo-600 text-2xl mb-3 mx-auto" />
                <p className="text-gray-700 text-sm italic mb-4">
                  “Une éducation de qualité à moindre coût. FlexSchoolAfrica est
                  l’avenir de la formation en Afrique.”
                </p>
                <div>
                  <h5 className="font-bold text-gray-900">Awa K.</h5>
                  <span className="text-green-600 text-sm">Togo</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Côte d’Ivoire */}
            <SwiperSlide>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-indigo-600 text-2xl mb-3 mx-auto" />
                <p className="text-gray-700 text-sm italic mb-4">
                  “Grâce à FlexSchoolAfrica, j’ai accès à des professeurs
                  internationaux depuis Abidjan.”
                </p>
                <div>
                  <h5 className="font-bold text-gray-900">Yao D.</h5>
                  <span className="text-orange-600 text-sm">Côte d’Ivoire</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Sénégal */}
            <SwiperSlide>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-indigo-600 text-2xl mb-3 mx-auto" />
                <p className="text-gray-700 text-sm italic mb-4">
                  “Un pont entre l’Afrique et le monde. Je recommande à tous les
                  étudiants sénégalais.”
                </p>
                <div>
                  <h5 className="font-bold text-gray-900">Fatou S.</h5>
                  <span className="text-pink-600 text-sm">Sénégal</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
