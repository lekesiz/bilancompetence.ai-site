import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Users, Euro } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Yapay Zeka Destekli{" "}
            <span className="gradient-text">Bilan de Compétences</span> ile
            Kariyerinize Alsace'da Yeni Bir Yön Verin
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Yeteneklerinizi keşfedin, potansiyelinizi ortaya çıkarın ve size en
            uygun kariyer yolunu bilimsel metodoloji ve yerel uzmanlıkla çizin.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact?source=hero">
                Ücretsiz Ön Görüşme Randevusu Alın
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/financement/cpf">CPF Uygunluğumu Sorgula</Link>
            </Button>
          </div>

          {/* Value Propositions */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                AI Destekli Analiz
              </h3>
              <p className="text-sm text-muted-foreground">
                Gizli potansiyelinizi ortaya çıkaran, tarafsız ve derinlemesine
                bir yetkinlik analizi.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary/10 p-3">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                Sertifikalı Danışmanlar
              </h3>
              <p className="text-sm text-muted-foreground">
                Alsace pazarını tanıyan, size özel destek sunan deneyimli
                kariyer uzmanları.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <Euro className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                CPF ile %100 Finansman
              </h3>
              <p className="text-sm text-muted-foreground">
                Kariyer yatırımınızı devlet desteğiyle, cebinizden para
                çıkmadan gerçekleştirin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
