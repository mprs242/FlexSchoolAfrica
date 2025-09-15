import logo from "../assets/logo.png"; // ✅ import du logo

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo + nom */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo FlexSchoolAfrica"
            className="h-20 w-auto" // ← encore plus grand dans le footer
          />{" "}
          <span className="font-semibold text-white">FlexSchoolAfrica</span>
        </div>

        {/* Mentions */}
        <p className="text-sm">
          © {new Date().getFullYear()} FlexSchoolAfrica – Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
