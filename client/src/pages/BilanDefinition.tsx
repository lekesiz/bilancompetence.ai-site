import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/CTA";
import { CheckCircle2, Users, FileText, TrendingUp } from "lucide-react";

export default function BilanDefinition() {
  const benefits = [
    "Mevcut yetkinliklerinizi ve potansiyelinizi objektif bir şekilde değerlendirin",
    "Kariyer hedeflerinizi netleştirin ve gerçekçi bir plan oluşturun",
    "Meslek değişikliği, terfi veya yeniden yönelme kararlarınızı sağlam temellere dayandırın",
    "Motivasyonlarınızı, değerlerinizi ve kişiliğinizi derinlemesine anlayın",
    "İş piyasasındaki fırsatları ve size uygun sektörleri keşfedin",
  ];

  const whoIsItFor = [
    {
      icon: Users,
      title: "Maaşlı Çalışanlar",
      description:
        "Kariyerinde yeni bir yön arayan, terfi hedefleyen veya şirket içi mobilitesini planlayan profesyoneller.",
    },
    {
      icon: FileText,
      title: "İş Arayanlar",
      description:
        "İşe dönüş sürecinde doğru hedefi belirlemek ve rekabette öne çıkmak isteyen adaylar.",
    },
    {
      icon: TrendingUp,
      title: "Girişimciler ve Serbest Çalışanlar",
      description:
        "Yeni bir iş fikri geliştiren veya mevcut faaliyetlerini yeniden değerlendiren profesyoneller.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Bilan de Compétences Nedir?
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Fransız iş hukuku tarafından tanımlanmış, devlet destekli bir
              kariyer gelişim hizmeti. Yeteneklerinizi keşfetmek, kariyer
              hedeflerinizi netleştirmek ve profesyonel geleceğinizi
              şekillendirmek için bilimsel bir süreç.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Definition */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Yasal Tanım ve Çerçeve
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bilan de compétences, 1991 yılından beri Fransız İş Kanunu'nda
                  (Code du Travail, Article L6313-1) yer alan bir haktır. Bu
                  süreç, bir bireyin profesyonel ve kişisel yetkinliklerini,
                  yeteneklerini ve motivasyonlarını analiz etmek amacıyla
                  tasarlanmış, toplam <strong>24 saatlik</strong> yapılandırılmış
                  bir danışmanlık hizmetidir.
                </p>
                <p>
                  Bilan, sadece bir test veya değerlendirme değildir. Aksine,
                  sertifikalı bir danışmanla birebir çalışarak, kariyerinizin
                  geçmişini, bugününü ve geleceğini derinlemesine inceleyen bir
                  yolculuktur. Sonunda, size özel bir{" "}
                  <strong>sentez dokümanı</strong> ve somut bir{" "}
                  <strong>eylem planı</strong> ile donatılırsınız.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Bir Bilan de Compétences Size Ne Kazandırır?
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who is it for */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Bilan de Compétences Kimin İçin?
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {whoIsItFor.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Confidentiality */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Gizlilik ve Bağımsızlık Garantisi
              </h3>
              <p className="text-muted-foreground">
                Bilan sürecinin sonuçları tamamen <strong>gizlidir</strong> ve
                sadece size aittir. İşvereniniz, Pôle Emploi veya başka bir kurum,
                sizin izniniz olmadan bilan içeriğinize veya sentez dokümanınıza
                erişemez. Bu, size tam bir özgürlük ve dürüstlük ortamı sağlar.
                Danışmanınızla paylaştığınız her şey, profesyonel gizlilik
                kurallarıyla korunur.
              </p>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Sonraki Adımlar
              </h3>
              <p className="mb-6 text-muted-foreground">
                Bilan de compétences'in nasıl çalıştığını öğrendiniz. Şimdi,
                bizim yaklaşımımızın sizi nasıl farklılaştıracağını keşfedin.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/bilan-de-competences/approche-ia">
                    Yapay Zeka Yaklaşımımız
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/methodologie">Metodolojimiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
