import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ import du logo

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + nom */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo FlexSchoolAfrica"
              className="h-20 w-auto" // ← agrandi (16 au lieu de 10)
            />

            <span className="font-bold text-indigo-600 text-lg hidden sm:block">
              FlexSchoolAfrica
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-indigo-600">
              Accueil
            </Link>
            <Link to="/about" className="hover:text-indigo-600">
              Qui sommes-nous
            </Link>
            <Link to="/how" className="hover:text-indigo-600">
              Fonctionnement
            </Link>
            <Link to="/domains" className="hover:text-indigo-600">
              Domaines
            </Link>
            <Link to="/partners" className="hover:text-indigo-600">
              Partenaires
            </Link>
            <Link to="/impact" className="hover:text-indigo-600">
              Impact
            </Link>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </nav>

          {/* Mobile button */}
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

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600"
            >
              Qui sommes-nous
            </Link>
            <Link
              to="/how"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600"
            >
              Fonctionnement
            </Link>
            <Link
              to="/domains"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600"
            >
              Domaines
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
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
