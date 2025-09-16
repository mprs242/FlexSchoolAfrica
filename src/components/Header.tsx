import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + nom */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo FlexSchoolAfrica"
              className="h-14 w-auto"
            />
            <span className="font-bold text-indigo-600 text-lg hidden sm:block">
              FlexSchoolAfrica
            </span>
          </Link>

          {/* Desktop nav (pages principales visibles + hamburger pour secondaires) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-indigo-600">
              Accueil
            </Link>
            <Link to="/domains" className="hover:text-indigo-600">
              Domaines
            </Link>
            <Link to="/how" className="hover:text-indigo-600">
              Fonctionnement
            </Link>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>

            {/* Tarifs bouton spécial */}
            <Link
              to="/tarifs"
              className="px-5 py-2 font-bold text-white rounded-full shadow bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105 transform transition"
            >
              Tarifs
            </Link>

            {/* Hamburger desktop = seulement secondaires */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Hamburger mobile = toutes les pages */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu déroulant */}
      {isOpen && (
        <nav className="bg-white shadow-lg border-t">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            {/* Mobile = toutes les pages */}
            <div className="md:hidden flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Accueil
              </Link>
              <Link
                to="/domains"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Domaines
              </Link>
              <Link
                to="/how"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Fonctionnement
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Contact
              </Link>
              <Link
                to="/tarifs"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Tarifs
              </Link>
              <hr className="border-gray-200" />
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Qui sommes-nous
              </Link>
              <Link
                to="/partners"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Partenaires
              </Link>
              <Link
                to="/impact"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Impact
              </Link>
            </div>

            {/* Desktop = seulement secondaires */}
            <div className="hidden md:flex flex-col space-y-4">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Qui sommes-nous
              </Link>
              <Link
                to="/partners"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Partenaires
              </Link>
              <Link
                to="/impact"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600"
              >
                Impact
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
