export default function SocialProof() {
  const stats = [
    { value: "670+", label: "Bilan Gerçekleştirildi" },
    { value: "95%", label: "Memnuniyet Oranı" },
    { value: "20+ Yıl", label: "Sektör Deneyimi" },
    { value: "Qualiopi", label: "Devlet Onaylı Kalite" },
  ];

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">
          Alsace'da Yüzlerce Profesyonelin Kariyer Dönüşümüne Tanıklık Ettik
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
