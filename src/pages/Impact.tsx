export default function Impact() {
  const impacts: string[] = [
    "ODD 4 : Éducation de qualité",
    "ODD 8 : Travail décent et croissance économique",
    "ODD 9 : Innovation et infrastructures",
    "ODD 10 : Réduction des inégalités",
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">
        Impact & Objectifs de Développement Durable
      </h3>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {impacts.map((impact, i) => (
          <div key={i} className="p-6 bg-green-50 rounded-2xl shadow">
            <p className="font-medium">{impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
