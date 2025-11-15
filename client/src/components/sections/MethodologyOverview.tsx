import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function MethodologyOverview() {
  const phases = [
    {
      number: "01",
      title: "Phase Préliminaire",
      duration: "2-3 heures",
      description:
        "Hedeflerinizi tanımlayın, beklentilerinizi netleştirin ve bilan sürecinin yol haritasını birlikte çizelim.",
    },
    {
      number: "02",
      title: "Phase d'Investigation",
      duration: "12-15 heures",
      description:
        "Yeteneklerinizi, motivasyonlarınızı ve değerlerinizi derinlemesine keşfedin. AI destekli testler ve birebir görüşmelerle.",
    },
    {
      number: "03",
      title: "Phase de Conclusion",
      duration: "6-8 heures",
      description:
        "Kariyer projenizi somutlaştırın, eylem planınızı oluşturun ve sentez dokümanınızı alın. Artık yol haritanız hazır!",
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Yasal Çerçevede, Bilimsel Metodoloji ile
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Bilan de compétences, Fransız iş hukuku tarafından tanımlanmış,
            toplam 24 saatlik yapılandırılmış bir süreçtir. İşte sizinle
            birlikte atacağımız adımlar:
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-serif text-2xl font-bold text-primary">
                    {phase.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-serif text-xl font-semibold">
                      {phase.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-card p-8 text-center text-card-foreground shadow-sm">
          <div className="mb-4 flex justify-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-semibold">
            Toplam 24 Saat, Ömür Boyu Etki
          </h3>
          <p className="mb-6 text-muted-foreground">
            Yasal olarak tanımlanmış bu süreç, kariyerinizde kalıcı bir değişim
            yaratmak için tasarlanmıştır. Detaylı metodolojimizi keşfedin.
          </p>
          <Button asChild>
            <Link href="/methodologie">Metodolojimizi İnceleyin</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
