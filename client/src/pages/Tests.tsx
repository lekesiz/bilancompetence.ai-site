import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";
import { personalityTest, skillsTest, motivationTest, personalityResults, type TestQuestion } from "@/data/tests";
import { Brain, Target, Lightbulb, ArrowRight, Download } from "lucide-react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/Breadcrumbs";

type TestType = "personality" | "skills" | "motivation";

export default function Tests() {
  const [selectedTest, setSelectedTest] = useState<TestType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");

  const tests = {
    personality: { data: personalityTest, title: "Test de Personnalité", icon: Brain },
    skills: { data: skillsTest, title: "Test de Compétences", icon: Target },
    motivation: { data: motivationTest, title: "Test de Motivation", icon: Lightbulb },
  };

  const currentTestData = selectedTest ? tests[selectedTest].data : [];
  const progress = selectedTest ? ((currentQuestion + 1) / currentTestData.length) * 100 : 0;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < currentTestData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    if (selectedTest === "personality") {
      const scores: Record<string, number> = {};
      Object.values(answers).forEach((value) => {
        scores[value] = (scores[value] || 0) + 1;
      });
      
      const dominantTraits = Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 4)
        .map(([trait]) => trait)
        .join("");
      
      return personalityResults[dominantTraits] || personalityResults.DEFAULT;
    }
    
    return {
      type: "Résultats",
      title: "Votre Profil",
      description: "Merci d'avoir complété le test ! Vos résultats sont prêts.",
      recommendations: [
        "Consultez un conseiller pour approfondir votre analyse",
        "Explorez nos formations adaptées à votre profil",
        "Téléchargez votre rapport détaillé",
      ],
    };
  };

  const handleDownloadReport = () => {
    if (!email) {
      toast.error("Veuillez entrer votre email pour télécharger le rapport");
      return;
    }
    toast.success("Rapport envoyé par email !");
    // In production: send email with PDF report
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEmail("");
  };

  if (!selectedTest) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEOHead
          title="Tests Gratuits : Personnalité, Compétences, Motivation"
          description="Découvrez votre profil professionnel avec nos tests gratuits : personnalité, compétences et motivation. Résultats instantanés et conseils personnalisés."
          keywords="test personnalité, test compétences, test motivation, bilan gratuit, orientation professionnelle"
          canonical="https://bilancompetence.ai/tests"
        />
      <Breadcrumbs items={[{ label: "Tests Gratuits" }]} />
        
        <main className="flex-1 py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                Tests Gratuits d'Orientation
              </h1>
              <p className="text-lg text-muted-foreground">
                Découvrez votre profil professionnel en quelques minutes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Personality Test */}
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedTest("personality")}>
                <div className="mb-4 inline-flex rounded-full bg-blue-100 p-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold">
                  Test de Personnalité
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Identifiez votre type de personnalité professionnelle et découvrez les métiers qui vous correspondent
                </p>
                <ul className="mb-6 space-y-2 text-sm">
                  <li>✓ 5 questions rapides</li>
                  <li>✓ Résultats instantanés</li>
                  <li>✓ Métiers recommandés</li>
                </ul>
                <Button className="w-full">
                  Commencer le test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Skills Test */}
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedTest("skills")}>
                <div className="mb-4 inline-flex rounded-full bg-green-100 p-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold">
                  Test de Compétences
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Évaluez vos compétences clés et identifiez vos points forts professionnels
                </p>
                <ul className="mb-6 space-y-2 text-sm">
                  <li>✓ 5 domaines évalués</li>
                  <li>✓ Score détaillé</li>
                  <li>✓ Axes de développement</li>
                </ul>
                <Button className="w-full">
                  Commencer le test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Motivation Test */}
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedTest("motivation")}>
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold">
                  Test de Motivation
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Comprenez ce qui vous motive vraiment dans votre carrière professionnelle
                </p>
                <ul className="mb-6 space-y-2 text-sm">
                  <li>✓ 5 questions ciblées</li>
                  <li>✓ Profil motivationnel</li>
                  <li>✓ Conseils personnalisés</li>
                </ul>
                <Button className="w-full">
                  Commencer le test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <Card className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-6">
                    {selectedTest === "personality" && <Brain className="h-12 w-12 text-primary" />}
                    {selectedTest === "skills" && <Target className="h-12 w-12 text-primary" />}
                    {selectedTest === "motivation" && <Lightbulb className="h-12 w-12 text-primary" />}
                  </div>
                  <h2 className="mb-2 font-serif text-3xl font-bold">{results.type}</h2>
                  <p className="text-xl text-muted-foreground">{results.title}</p>
                </div>

                <div className="mb-8 rounded-lg bg-muted/30 p-6">
                  <p className="text-center">{results.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-semibold text-lg">Recommandations :</h3>
                  <ul className="space-y-3">
                    {results.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {idx + 1}
                        </span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 rounded-lg border bg-card card-hover-subtle p-6">
                  <h3 className="mb-4 font-semibold">Recevez votre rapport détaillé par email</h3>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="flex-1 rounded-lg border px-4 py-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button onClick={handleDownloadReport}>
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={resetTest} className="flex-1">
                    Faire un autre test
                  </Button>
                  <Button asChild className="flex-1">
                    <a href="/contact">Demander un bilan complet</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const question = currentTestData[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-lg">{tests[selectedTest].title}</h2>
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} / {currentTestData.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="p-8">
              <h3 className="mb-8 font-serif text-2xl font-bold">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full rounded-lg border p-4 text-left transition-all hover:border-primary hover:bg-primary/5"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </Card>

            <div className="mt-6 text-center">
              <Button variant="ghost" onClick={resetTest}>
                Annuler le test
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
