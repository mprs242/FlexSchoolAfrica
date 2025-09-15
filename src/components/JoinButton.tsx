import { Link } from "react-router-dom";

export default function JoinButton() {
  return (
    <div className="my-8 text-center">
      <Link
        to="/contact"
        className="inline-block px-10 py-4 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105 transform transition"
      >
        Rejoignez-nous
      </Link>
    </div>
  );
}
