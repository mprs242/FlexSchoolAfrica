export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h3 className="text-3xl font-bold mb-6 text-center">
        Notre fonctionnement
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow rounded-2xl">
          <h4 className="font-semibold text-xl mb-2">
            Salle de classe connectée
          </h4>
          <p>
            Interaction en direct entre étudiants et professeurs étrangers grâce
            aux technologies de visioconférence.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl">
          <h4 className="font-semibold text-xl mb-2">Travail collaboratif</h4>
          <p>
            Espaces numériques pour projets de groupe, brainstorming virtuels et
            feedback instantané.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl">
          <h4 className="font-semibold text-xl mb-2">Ressources & suivi</h4>
          <p>
            Accès à des ressources éducatives en ligne et évaluation
            personnalisée des progrès.
          </p>
        </div>
      </div>
    </section>
  );
}
