import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Brain, ChevronRight, ChevronLeft } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  dimension: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';
  reverse?: boolean;
}

const questions: Question[] = [
  // Ouverture (Openness)
  { id: 'o1', text: "J'aime découvrir de nouvelles idées et concepts", dimension: 'openness' },
  { id: 'o2', text: "Je préfère les routines établies aux nouvelles expériences", dimension: 'openness', reverse: true },
  { id: 'o3', text: "J'apprécie l'art, la musique et la créativité", dimension: 'openness' },
  { id: 'o4', text: "Je suis curieux(se) et j'aime apprendre", dimension: 'openness' },
  { id: 'o5', text: "J'ai une imagination vive", dimension: 'openness' },

  // Conscienciosité (Conscientiousness)
  { id: 'c1', text: "Je suis organisé(e) et méthodique", dimension: 'conscientiousness' },
  { id: 'c2', text: "Je termine toujours ce que je commence", dimension: 'conscientiousness' },
  { id: 'c3', text: "Je laisse souvent les choses en désordre", dimension: 'conscientiousness', reverse: true },
  { id: 'c4', text: "Je planifie mes activités à l'avance", dimension: 'conscientiousness' },
  { id: 'c5', text: "Je suis ponctuel(le) et respecte les délais", dimension: 'conscientiousness' },

  // Extraversion
  { id: 'e1', text: "J'aime être entouré(e) de gens", dimension: 'extraversion' },
  { id: 'e2', text: "Je préfère travailler seul(e) plutôt qu'en équipe", dimension: 'extraversion', reverse: true },
  { id: 'e3', text: "Je me sens énergisé(e) dans les situations sociales", dimension: 'extraversion' },
  { id: 'e4', text: "Je prends facilement la parole en public", dimension: 'extraversion' },
  { id: 'e5', text: "Je suis plutôt réservé(e) et discret(ète)", dimension: 'extraversion', reverse: true },

  // Agréabilité (Agreeableness)
  { id: 'a1', text: "Je suis empathique et attentif(ve) aux autres", dimension: 'agreeableness' },
  { id: 'a2', text: "Je cherche à éviter les conflits", dimension: 'agreeableness' },
  { id: 'a3', text: "Je critique facilement les autres", dimension: 'agreeableness', reverse: true },
  { id: 'a4', text: "J'aide volontiers les personnes dans le besoin", dimension: 'agreeableness' },
  { id: 'a5', text: "Je fais confiance aux autres facilement", dimension: 'agreeableness' },

  // Neuroticisme (Neuroticism)
  { id: 'n1', text: "Je m'inquiète souvent", dimension: 'neuroticism' },
  { id: 'n2', text: "Je reste calme dans les situations stressantes", dimension: 'neuroticism', reverse: true },
  { id: 'n3', text: "Mes émotions changent rapidement", dimension: 'neuroticism' },
  { id: 'n4', text: "Je me sens souvent anxieux(se)", dimension: 'neuroticism' },
  { id: 'n5', text: "Je gère bien le stress", dimension: 'neuroticism', reverse: true },
];

const scaleLabels = [
  "Pas du tout d'accord",
  "Plutôt pas d'accord",
  "Neutre",
  "Plutôt d'accord",
  "Tout à fait d'accord",
];

interface PersonalityTestProps {
  onComplete: (results: PersonalityResults) => void;
}

export interface PersonalityResults {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export default function PersonalityTest({ onComplete }: PersonalityTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: parseInt(value),
    };
    setAnswers(newAnswers);

    // Auto-advance si pas dernière question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1 && answers[questions[currentQuestion].id]) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResults = (): PersonalityResults => {
    const dimensions = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    const counts = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer !== undefined) {
        const score = question.reverse ? 6 - answer : answer;
        dimensions[question.dimension] += score;
        counts[question.dimension]++;
      }
    });

    // Normaliser sur 100
    return {
      openness: Math.round((dimensions.openness / (counts.openness * 5)) * 100),
      conscientiousness: Math.round((dimensions.conscientiousness / (counts.conscientiousness * 5)) * 100),
      extraversion: Math.round((dimensions.extraversion / (counts.extraversion * 5)) * 100),
      agreeableness: Math.round((dimensions.agreeableness / (counts.agreeableness * 5)) * 100),
      neuroticism: Math.round((dimensions.neuroticism / (counts.neuroticism * 5)) * 100),
    };
  };

  const handleComplete = () => {
    const results = calculateResults();
    onComplete(results);
  };

  const currentQuestionData = questions[currentQuestion];
  const isAnswered = answers[currentQuestionData.id] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-6 w-6 text-primary" />
          <CardTitle>Test de Personnalité</CardTitle>
        </div>
        <CardDescription>
          Répondez honnêtement à ces {questions.length} questions pour découvrir votre profil de personnalité
          selon le modèle des Big Five.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} sur {questions.length}</span>
            <span>{Math.round(progress)}% complété</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="space-y-4">
          <div className="rounded-lg bg-primary/5 p-6">
            <p className="text-lg font-medium">{currentQuestionData.text}</p>
          </div>

          {/* Answer Options */}
          <RadioGroup
            value={answers[currentQuestionData.id]?.toString()}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {scaleLabels.map((label, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-accent cursor-pointer"
              >
                <RadioGroupItem value={(index + 1).toString()} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer font-normal"
                >
                  {label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>

          {isLastQuestion && allAnswered ? (
            <Button onClick={handleComplete}>
              Voir les Résultats
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!isAnswered || isLastQuestion}
            >
              Suivant
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Dimension Indicator */}
        <div className="text-center text-sm text-muted-foreground">
          Dimension évaluée:{' '}
          <span className="font-medium text-foreground">
            {currentQuestionData.dimension === 'openness' && 'Ouverture'}
            {currentQuestionData.dimension === 'conscientiousness' && 'Conscienciosité'}
            {currentQuestionData.dimension === 'extraversion' && 'Extraversion'}
            {currentQuestionData.dimension === 'agreeableness' && 'Agréabilité'}
            {currentQuestionData.dimension === 'neuroticism' && 'Stabilité Émotionnelle'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
