export default function SocialProof() {
  const stats = [
    { value: "670+", label: "Bilans Réalisés" },
    { value: "95%", label: "Taux de Satisfaction" },
    { value: "20+ Ans", label: "Expérience Sectorielle" },
    { value: "Qualiopi", label: "Certifié Qualité d'État" },
  ];

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">
          Témoins de la Transformation Professionnelle de Centaines d'Alsaciens
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
