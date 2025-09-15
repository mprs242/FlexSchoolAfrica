export default function Contact() {
  return (
    <section className="bg-indigo-600 text-white py-16 px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Rejoindre FlexSchoolAfrica</h3>
      <p className="mb-6 max-w-2xl mx-auto">
        Vous êtes étudiant, professeur ou partenaire institutionnel ?
        Contactez-nous pour construire ensemble l’éducation de demain.
      </p>
      <a
        href="mailto:contact@flexschoolafrica.org"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
      >
        Contactez-nous
      </a>
    </section>
  );
}
