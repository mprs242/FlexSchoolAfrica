export default function Domains() {
  const domaines: string[] = [
    "Gestion de projet",
    "Management",
    "Ingénierie mécanique",
    "Énergie",
    "Oil & Gas",
    "Autres filières à venir",
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">
        Domaines d’enseignement
      </h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {domaines.map((domaine, i) => (
          <div key={i} className="p-6 bg-indigo-50 rounded-2xl shadow">
            <p className="font-semibold text-lg">{domaine}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
