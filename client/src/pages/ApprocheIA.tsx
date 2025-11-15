import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/CTA";
import { Brain, Zap, Target, Shield } from "lucide-react";

export default function ApprocheIA() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Derinlemesine CV Analizi",
      description:
        "DeepSeek AI, CV'nizdeki her satırı analiz eder. Sadece ne yaptığınızı değil, nasıl yaptığınızı ve hangi transferable skills'e sahip olduğunuzu ortaya çıkarır.",
    },
    {
      icon: Zap,
      title: "Beklenmedik Kariyer Yolları",
      description:
        "AI, geleneksel danışmanların gözden kaçırabileceği niş sektörleri ve yükselen meslekleri tespit eder. Sizi şaşırtacak önerilerle karşılaşabilirsiniz.",
    },
    {
      icon: Target,
      title: "Yetkinlik-Meslek Eşleştirmesi",
      description:
        "Test sonuçlarınız ve notlarınız AI tarafından işlenerek, yeteneklerinizle en uyumlu meslekler ve sektörler belirlenir.",
    },
    {
      icon: Shield,
      title: "Objektif ve Tarafsız",
      description:
        "AI, önyargılardan arındırılmış bir analiz sunar. Sadece veriye dayalı, matematiksel bir değerlendirme.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary-foreground">
              <Zap className="h-4 w-4" />
              <span>Innovation Technologique</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Yapay Zeka ile Güçlendirilmiş{" "}
              <span className="gradient-text">Bilan de Compétences</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Geleneksel danışmanlığın insan dokunuşunu, yapay zekanın analitik
              gücüyle birleştiriyoruz. Gizli potansiyelinizi ortaya çıkaran,
              tarafsız ve derinlemesine bir kariyer analizi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">
                İnsan + Makine: Geleceğin Bilan Yaklaşımı
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bir bilan de compétences'in kalbi, danışman ile danışan
                  arasındaki güven ilişkisidir. Bu gerçeği değiştirmiyoruz.
                  Ancak, bu ilişkiyi yapay zekanın sunduğu objektif, veri
                  odaklı analizlerle zenginleştiriyoruz.
                </p>
                <p>
                  <strong>bilancompetence.ai</strong> olarak, DeepSeek gibi en
                  gelişmiş dil modellerini kullanarak, CV'niz, test
                  sonuçlarınız ve bilan sürecindeki notlarınızı derinlemesine
                  analiz ediyoruz. Sonuç? Sadece "ne yapabileceğinizi" değil,
                  aynı zamanda "nerede parlamaya devam edeceğinizi" gösteren bir
                  kariyer haritası.
                </p>
              </div>
            </div>

            {/* AI Features */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Yapay Zeka Analizimiz Nasıl Çalışır?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {aiFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real Example */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Gerçek Bir Örnek
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Durum:</strong> 15 yıllık deneyime sahip bir muhasebe
                  müdürü, kariyerinde değişiklik yapmak istiyor ancak hangi
                  yönde ilerleyeceğinden emin değil.
                </p>
                <p>
                  <strong>Geleneksel Yaklaşım:</strong> Danışman, muhasebeyle
                  ilgili diğer rolleri (CFO, denetçi) önerir.
                </p>
                <p>
                  <strong>AI Destekli Yaklaşım:</strong> DeepSeek, danışanın
                  CV'sinde sıkça kullandığı "süreç optimizasyonu", "veri analizi"
                  ve "ekip eğitimi" ifadelerini tespit eder. AI, bu yetkinliklerin
                  "Operasyonel Mükemmellik Danışmanı" veya "Veri Analisti" gibi
                  mesleklerde de değerli olduğunu gösterir. Danışan, hiç
                  düşünmediği bu yeni kariyer yollarını keşfeder.
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Verileriniz Güvende
              </h2>
              <p className="text-muted-foreground">
                Yapay zeka analizimiz, verilerinizi tamamen gizli ve güvenli bir
                şekilde işler. Hiçbir kişisel bilginiz üçüncü taraflarla
                paylaşılmaz veya AI modellerinin eğitiminde kullanılmaz. Analiz
                tamamlandıktan sonra, tüm verileriniz güvenli bir şekilde
                saklanır ve sadece sizin erişiminize açıktır.
              </p>
            </div>

            {/* Academic Foundation */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Teknoloji + Bilim
              </h3>
              <p className="mb-6 text-muted-foreground">
                AI yaklaşımımız, uluslararası kariyer gelişimi araştırmalarına
                dayanan bilimsel bir metodoloji üzerine kuruludur. Teknoloji,
                sadece bir araçtır; gerçek güç, onu doğru şekilde kullanmaktır.
              </p>
              <Button asChild size="lg">
                <Link href="/bilan-de-competences/recherche">
                  Akademik Temellerimiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
