import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Award, TrendingUp } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Sparkles,
      title: "Yapay Zeka ile Güçlendirilmiş",
      description:
        "DeepSeek AI teknolojisi ile CV'niz, test sonuçlarınız ve notlarınız derinlemesine analiz edilir. Beklenmedik kariyer yolları ve niş sektör önerileri keşfedin.",
      link: "/bilan-de-competences/approche-ia",
    },
    {
      icon: MapPin,
      title: "Alsace Pazarı Uzmanlığı",
      description:
        "Strasbourg, Mulhouse, Colmar ve tüm Grand-Est bölgesindeki iş fırsatlarını, şirketleri ve sektörel trendleri ilk elden biliyoruz. Projeniz yerel gerçeklere dayanır.",
      link: "/expertise-alsace",
    },
    {
      icon: Award,
      title: "Akademik Temelli Metodoloji",
      description:
        "Uluslararası kariyer gelişimi araştırmalarına dayanan, bilimsel olarak kanıtlanmış yöntemlerle çalışıyoruz. Sadece sezgi değil, veri ve bilim.",
      link: "/bilan-de-competences/recherche",
    },
    {
      icon: TrendingUp,
      title: "Sonuç Odaklı Yaklaşım",
      description:
        "Amacımız sadece bir rapor vermek değil, sizi somut bir eylem planıyla donatmak. 6 aylık takip görüşmesi ile hedeflerinize ulaşmanızı sağlıyoruz.",
      link: "/methodologie",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Neden{" "}
            <span className="gradient-text">bilancompetence.ai</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Teknoloji, yerel uzmanlık ve bilimsel metodolojinin buluştuğu
            noktada, size özel kariyer çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border bg-card p-8 text-card-foreground shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {feature.description}
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href={feature.link}>En savoir plus →</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
