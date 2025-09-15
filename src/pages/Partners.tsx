export default function Partners() {
  const partenaires: string[] = [
    "Ministères de l’Éducation",
    "Grandes écoles françaises",
    "Diaspora africaine",
    "Entreprises industrielles & agences de développement",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h3 className="text-3xl font-bold mb-8 text-center">Nos partenaires</h3>
      <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-center">
        {partenaires.map((partenaire, i) => (
          <li key={i} className="p-4 bg-white rounded-2xl shadow">
            {partenaire}
          </li>
        ))}
      </ul>
    </section>
  );
}
