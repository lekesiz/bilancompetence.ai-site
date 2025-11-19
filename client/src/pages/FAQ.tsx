import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { FAQSchema } from "@/components/StructuredData";
import CTA from "@/components/sections/CTA";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Généralités",
      questions: [
        {
          question: "Qu'est-ce qu'un bilan de compétences exactement ?",
          answer:
            "Le bilan de compétences est un dispositif encadré par la loi française (articles L6313-1 et suivants du Code du travail) qui permet d'analyser vos compétences professionnelles et personnelles, vos aptitudes et vos motivations. L'objectif est de définir un projet professionnel réaliste et, si nécessaire, un projet de formation. C'est un processus structuré en 3 phases (Préliminaire, Investigation, Conclusion) qui dure 24 heures réparties sur 8 à 12 semaines.",
        },
        {
          question: "Combien de temps dure un bilan de compétences ?",
          answer:
            "La durée légale d'un bilan de compétences est de 24 heures d'accompagnement, réparties sur une période de 2 à 3 mois (8 à 12 semaines). Ces 24 heures incluent les entretiens individuels, les tests, les recherches documentaires et la rédaction du document de synthèse. Le rythme est flexible et s'adapte à vos contraintes professionnelles et personnelles.",
        },
        {
          question: "Qui peut faire un bilan de compétences ?",
          answer:
            "Toute personne active peut réaliser un bilan de compétences : salariés du secteur privé (CDI, CDD), agents de la fonction publique, demandeurs d'emploi, travailleurs indépendants et chefs d'entreprise. Il n'y a pas de condition d'âge ou d'ancienneté. Le bilan est particulièrement recommandé en cas de questionnement professionnel, de projet de reconversion, d'évolution de carrière ou de retour à l'emploi.",
        },
        {
          question: "Mon employeur sera-t-il informé si je fais un bilan ?",
          answer:
            "Non, si vous utilisez votre CPF et réalisez le bilan en dehors de vos heures de travail. Le bilan de compétences est une démarche personnelle et confidentielle. Votre employeur n'a pas besoin d'être informé et ne le sera pas automatiquement. En revanche, si vous souhaitez réaliser le bilan pendant vos heures de travail dans le cadre du Plan de Développement des Compétences (PDC), vous devrez obtenir l'accord de votre employeur.",
        },
      ],
    },
    {
      category: "Financement",
      questions: [
        {
          question: "Combien coûte un bilan de compétences ?",
          answer:
            "Nos tarifs varient selon la formule choisie : Essentiel (1 790€), Avancé IA (2 190€) et Premium (2 890€). Cependant, dans la majorité des cas, le bilan est 100% pris en charge par le CPF ou d'autres dispositifs de financement (Pôle Emploi, Transition Pro, OPCO). Vous ne payez de votre poche que si votre solde CPF est insuffisant, et uniquement la différence.",
        },
        {
          question: "Comment utiliser mon CPF pour financer le bilan ?",
          answer:
            "C'est très simple : 1) Connectez-vous sur Mon Compte Formation (moncompteformation.gouv.fr) pour vérifier votre solde. 2) Contactez-nous pour un entretien préliminaire gratuit. 3) Nous vous enverrons un lien direct vers notre formation sur la plateforme CPF. 4) Inscrivez-vous en ligne, votre CPF sera automatiquement débité. Tout se fait en 10 minutes, sans paperasse.",
        },
        {
          question: "Quelles sont les autres options de financement ?",
          answer:
            "Si votre CPF est insuffisant, plusieurs options existent : Plan de Développement des Compétences (PDC) financé par votre employeur, Pôle Emploi via l'Aide Individuelle à la Formation (AIF) pour les demandeurs d'emploi, Transition Pro pour les projets de reconversion, OPCO (Opérateurs de Compétences) pour certains secteurs, ou abondement de votre CPF par votre employeur ou Pôle Emploi.",
        },
        {
          question: "Puis-je me rétracter après l'inscription ?",
          answer:
            "Oui, absolument. Vous disposez d'un délai légal de rétractation de 14 jours calendaires après validation de votre inscription sur Mon Compte Formation. Si vous changez d'avis pendant ce délai, aucun frais ne vous sera facturé et votre CPF sera re-crédité automatiquement.",
        },
      ],
    },
    {
      category: "Déroulement",
      questions: [
        {
          question: "Comment se déroule concrètement un bilan de compétences ?",
          answer:
            "Le bilan se déroule en 3 phases : 1) Phase Préliminaire (2-3h) : entretien initial, analyse de vos besoins, signature du contrat. 2) Phase d'Investigation (16-18h) : tests de personnalité, analyse de votre parcours, identification de vos compétences, exploration de pistes professionnelles, analyse IA de votre profil. 3) Phase de Conclusion (4-6h) : synthèse des résultats, validation de votre projet, plan d'action détaillé, remise du document de synthèse.",
        },
        {
          question: "Puis-je faire mon bilan en télétravail / visioconférence ?",
          answer:
            "Oui, totalement ! Nous proposons des séances en présentiel à Haguenau ou en visioconférence (Zoom, Teams, Google Meet). La plupart de nos clients choisissent un format hybride : quelques séances en présentiel pour créer la relation, et le reste en visio pour plus de flexibilité. L'efficacité du bilan est la même, quel que soit le format.",
        },
        {
          question: "Quels tests vais-je passer pendant le bilan ?",
          answer:
            "Nous utilisons des tests validés scientifiquement : test RIASEC de Holland (intérêts professionnels), tests de personnalité (Big Five, MBTI), tests d'aptitudes cognitives, questionnaires de valeurs et motivations. Nous utilisons également l'intelligence artificielle (DeepSeek) pour analyser votre CV et vos résultats de tests, identifier des patterns et suggérer des pistes professionnelles que vous n'auriez peut-être pas envisagées.",
        },
        {
          question: "Vais-je recevoir un document à la fin du bilan ?",
          answer:
            "Oui, vous recevez un document de synthèse complet et personnalisé (30 à 50 pages) qui vous appartient exclusivement. Ce document est strictement confidentiel et ne peut être communiqué à un tiers (y compris votre employeur) sans votre accord écrit. Il contient : analyse de votre parcours, synthèse de vos compétences, résultats des tests, projet professionnel validé, plan d'action détaillé, et pistes de formation.",
        },
      ],
    },
    {
      category: "Résultats et Suivi",
      questions: [
        {
          question: "Que se passe-t-il après le bilan ?",
          answer:
            "À la fin du bilan, vous repartez avec votre document de synthèse et un plan d'action concret. Vous êtes libre de mettre en œuvre votre projet à votre rythme. Nous proposons également un entretien de suivi optionnel à 6 mois pour faire le point sur l'avancement de votre projet, ajuster votre stratégie si nécessaire, et vous accompagner dans les démarches (candidatures, formations, création d'entreprise).",
        },
        {
          question: "Le bilan garantit-il que je trouverai un nouvel emploi ?",
          answer:
            "Le bilan de compétences n'est pas un service de placement. Son objectif est de vous aider à clarifier votre projet professionnel, identifier vos atouts et construire un plan d'action réaliste. C'est un outil d'aide à la décision et de développement personnel. La mise en œuvre du projet (recherche d'emploi, formation, reconversion) reste de votre responsabilité, mais vous serez mieux armé(e) et plus confiant(e) pour réussir.",
        },
        {
          question: "Puis-je refaire un bilan de compétences plusieurs fois ?",
          answer:
            "Oui, il n'y a pas de limite légale au nombre de bilans que vous pouvez réaliser dans votre vie. Cependant, il est recommandé d'espacer les bilans d'au moins 5 ans, sauf en cas de changement majeur (licenciement, maladie, changement de vie). Votre CPF se recharge chaque année, vous pouvez donc utiliser vos nouveaux droits pour un nouveau bilan si nécessaire.",
        },
      ],
    },
    {
      category: "Spécificités Alsace",
      questions: [
        {
          question: "Pourquoi choisir un organisme local en Alsace ?",
          answer:
            "Un organisme local connaît parfaitement le marché du travail alsacien, les secteurs en tension (industrie, santé, tourisme, numérique, logistique), les entreprises qui recrutent, et les opportunités transfrontalières (Allemagne, Suisse). Nous avons des partenariats avec des acteurs locaux (Pôle Emploi, CCI, chambres de métiers) et pouvons vous orienter vers des formations et des employeurs de la région. De plus, nous parlons allemand et comprenons les spécificités du marché frontalier.",
        },
        {
          question: "Proposez-vous des bilans pour les frontaliers ?",
          answer:
            "Oui, absolument ! Nous accompagnons régulièrement des frontaliers (Allemagne, Suisse) qui souhaitent évoluer professionnellement ou changer de pays de travail. Nous connaissons les spécificités des marchés allemand et suisse, les équivalences de diplômes, et les opportunités de chaque côté de la frontière. Nos consultants parlent allemand et peuvent vous conseiller sur les démarches administratives transfrontalières.",
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  // Flatten all FAQs for schema
  const allFAQs = faqs.flatMap(category => 
    category.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  );

  return (
    <div className="min-h-screen">
      <FAQSchema faqs={allFAQs} />
      <SEOHead
        title="FAQ : Questions Fréquentes sur le Bilan de Compétences"
        description="Toutes les réponses à vos questions sur le bilan de compétences : durée, financement CPF, déroulement, confidentialité, résultats. Guide 2025 50+ questions."
        keywords="FAQ bilan compétences, questions fréquentes, durée bilan, financement CPF, confidentialité, résultats"
        canonical="https://bilancompetence.ai/faq"
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              <HelpCircle className="h-4 w-4" />
              <span>Questions Fréquentes</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Foire Aux Questions
            </h1>
            <p className="text-lead text-muted-foreground">
              Toutes les réponses à vos questions sur le bilan de compétences.
              Vous ne trouvez pas votre réponse ? Contactez-nous !
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="mb-6 font-serif text-2xl font-bold">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => {
                    const currentIndex = questionIndex++;
                    const isOpen = openIndex === currentIndex;

                    return (
                      <div
                        key={currentIndex}
                        className="overflow-hidden rounded-lg border bg-card card-hover-subtle text-card-foreground shadow-soft"
                      >
                        <button
                          onClick={() => toggleQuestion(currentIndex)}
                          className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-muted/30"
                        >
                          <span className="font-semibold">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="border-t bg-muted/10 p-6">
                            <p className="text-muted-foreground">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Vous Avez D'Autres Questions ?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              N'hésitez pas à nous contacter pour un entretien préliminaire
              gratuit. Nous répondrons à toutes vos questions et vous
              expliquerons en détail comment se déroule le bilan.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact?source=faq_page">
                  Prendre Rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/financement/cpf">Financement CPF</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
