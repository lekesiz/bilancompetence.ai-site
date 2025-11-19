import { Users, Briefcase, TrendingUp, Rocket } from "lucide-react";

export default function TargetAudience() {
  const audiences = [
    {
      icon: Users,
      title: "Salariés en Questionnement",
      description:
        "Vous êtes en poste mais vous ressentez le besoin d'évoluer, de changer de métier ou de donner un nouveau sens à votre carrière.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Briefcase,
      title: "Demandeurs d'Emploi",
      description:
        "Vous cherchez à rebondir après une période de chômage et souhaitez identifier le bon projet professionnel pour votre retour à l'emploi.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Cadres et Managers",
      description:
        "Vous visez une évolution de carrière, une promotion ou une mobilité interne et avez besoin de clarifier vos compétences et vos objectifs.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Rocket,
      title: "Entrepreneurs et Indépendants",
      description:
        "Vous envisagez de créer votre entreprise ou de réorienter votre activité et souhaitez valider la cohérence de votre projet.",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Le Bilan de Compétences, Pour Qui ?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Quel que soit votre situation professionnelle, le bilan de compétences s'adapte à vos besoins et vous accompagne dans votre réflexion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={index}
                  className="group rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft transition-all hover:shadow-medium"
                >
                  <div className={`mb-4 inline-flex rounded-lg p-3 ${audience.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Bon à savoir :</strong> Le bilan de compétences est accessible à tous les actifs, quel que soit leur statut (CDI, CDD, intérimaire, indépendant) et peut être financé par le CPF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
