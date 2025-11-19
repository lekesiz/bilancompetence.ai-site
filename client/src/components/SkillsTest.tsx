import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Target, ChevronRight, ChevronLeft } from 'lucide-react';
import { Slider } from './ui/slider';

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

interface Skill {
  id: string;
  name: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'communication',
    name: 'Communication',
    skills: [
      { id: 'oral', name: 'Communication orale', description: 'Capacité à s\'exprimer clairement à l\'oral' },
      { id: 'written', name: 'Communication écrite', description: 'Rédaction claire et structurée' },
      { id: 'presentation', name: 'Présentation', description: 'Capacité à présenter devant un public' },
      { id: 'listening', name: 'Écoute active', description: 'Comprendre et reformuler les besoins' },
      { id: 'negotiation', name: 'Négociation', description: 'Trouver des accords gagnant-gagnant' },
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership & Management',
    skills: [
      { id: 'team_management', name: 'Gestion d\'équipe', description: 'Animer et motiver une équipe' },
      { id: 'decision_making', name: 'Prise de décision', description: 'Décider rapidement et efficacement' },
      { id: 'delegation', name: 'Délégation', description: 'Confier des responsabilités' },
      { id: 'conflict_resolution', name: 'Gestion de conflits', description: 'Résoudre les tensions' },
      { id: 'coaching', name: 'Coaching', description: 'Développer les compétences des autres' },
    ],
  },
  {
    id: 'organization',
    name: 'Organisation & Gestion',
    skills: [
      { id: 'planning', name: 'Planification', description: 'Organiser et prioriser les tâches' },
      { id: 'time_management', name: 'Gestion du temps', description: 'Optimiser son temps de travail' },
      { id: 'project_management', name: 'Gestion de projet', description: 'Piloter des projets complexes' },
      { id: 'multitasking', name: 'Multitâche', description: 'Gérer plusieurs activités simultanément' },
      { id: 'resource_management', name: 'Gestion de ressources', description: 'Optimiser les ressources disponibles' },
    ],
  },
  {
    id: 'analytical',
    name: 'Analyse & Résolution de Problèmes',
    skills: [
      { id: 'critical_thinking', name: 'Pensée critique', description: 'Analyser objectivement les situations' },
      { id: 'problem_solving', name: 'Résolution de problèmes', description: 'Trouver des solutions créatives' },
      { id: 'data_analysis', name: 'Analyse de données', description: 'Interpréter les données chiffrées' },
      { id: 'strategic_thinking', name: 'Pensée stratégique', description: 'Vision à long terme' },
      { id: 'attention_to_detail', name: 'Attention aux détails', description: 'Précision et rigueur' },
    ],
  },
  {
    id: 'technical',
    name: 'Compétences Techniques',
    skills: [
      { id: 'it_tools', name: 'Outils informatiques', description: 'Maîtrise des logiciels bureautiques' },
      { id: 'digital_tools', name: 'Outils numériques', description: 'Utilisation des outils digitaux' },
      { id: 'specialized_software', name: 'Logiciels spécialisés', description: 'Maîtrise d\'outils métier' },
      { id: 'technical_expertise', name: 'Expertise technique', description: 'Connaissances techniques spécifiques' },
      { id: 'continuous_learning', name: 'Apprentissage continu', description: 'Capacité à apprendre rapidement' },
    ],
  },
  {
    id: 'interpersonal',
    name: 'Relations Interpersonnelles',
    skills: [
      { id: 'teamwork', name: 'Travail d\'équipe', description: 'Collaboration efficace' },
      { id: 'empathy', name: 'Empathie', description: 'Comprendre les émotions des autres' },
      { id: 'adaptability', name: 'Adaptabilité', description: 'S\'adapter aux changements' },
      { id: 'networking', name: 'Réseautage', description: 'Créer et entretenir un réseau' },
      { id: 'customer_service', name: 'Service client', description: 'Satisfaire les besoins clients' },
    ],
  },
];

interface SkillsTestProps {
  onComplete: (results: SkillsResults) => void;
}

export interface SkillsResults {
  selectedSkills: string[];
  skillLevels: Record<string, number>;
  topSkills: Array<{ skill: string; level: number; category: string }>;
}

export default function SkillsTest({ onComplete }: SkillsTestProps) {
  const [currentStep, setCurrentStep] = useState(0); // 0 = selection, 1+ = rating per category
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [skillLevels, setSkillLevels] = useState<Record<string, number>>({});

  const totalSteps = 1 + skillCategories.length; // Selection + rating per category
  const progress = (currentStep / totalSteps) * 100;

  const handleSkillToggle = (skillId: string) => {
    const newSelected = new Set(selectedSkills);
    if (newSelected.has(skillId)) {
      newSelected.delete(skillId);
    } else {
      newSelected.add(skillId);
    }
    setSelectedSkills(newSelected);
  };

  const handleSkillLevel = (skillId: string, level: number) => {
    setSkillLevels({
      ...skillLevels,
      [skillId]: level,
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Calculer les top skills
    const topSkills = Array.from(selectedSkills)
      .map((skillId) => {
        const category = skillCategories.find((cat) =>
          cat.skills.some((s) => s.id === skillId)
        );
        const skill = category?.skills.find((s) => s.id === skillId);
        return {
          skill: skill?.name || '',
          level: skillLevels[skillId] || 0,
          category: category?.name || '',
        };
      })
      .sort((a, b) => b.level - a.level)
      .slice(0, 10);

    onComplete({
      selectedSkills: Array.from(selectedSkills),
      skillLevels,
      topSkills,
    });
  };

  // Step 0: Skill Selection
  if (currentStep === 0) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-6 w-6 text-primary" />
            <CardTitle>Évaluation des Compétences</CardTitle>
          </div>
          <CardDescription>
            Sélectionnez toutes les compétences que vous possédez. Vous pourrez ensuite évaluer votre niveau pour chacune.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Étape {currentStep + 1} sur {totalSteps}</span>
              <span>{selectedSkills.size} compétences sélectionnées</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.id} className="space-y-3">
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-accent cursor-pointer"
                      onClick={() => handleSkillToggle(skill.id)}
                    >
                      <Checkbox
                        id={skill.id}
                        checked={selectedSkills.has(skill.id)}
                        onCheckedChange={() => handleSkillToggle(skill.id)}
                      />
                      <div className="flex-1">
                        <Label
                          htmlFor={skill.id}
                          className="cursor-pointer font-medium"
                        >
                          {skill.name}
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-end pt-4">
            <Button
              onClick={handleNext}
              disabled={selectedSkills.size === 0}
            >
              Évaluer mes compétences
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Steps 1+: Skill Level Rating per Category
  const categoryIndex = currentStep - 1;
  const currentCategory = skillCategories[categoryIndex];
  const categorySkills = currentCategory.skills.filter((skill) =>
    selectedSkills.has(skill.id)
  );

  if (categorySkills.length === 0) {
    // Skip empty categories
    if (currentStep < totalSteps - 1) {
      setTimeout(() => handleNext(), 0);
    } else {
      setTimeout(() => handleComplete(), 0);
    }
    return null;
  }

  const allRated = categorySkills.every((skill) => skillLevels[skill.id] !== undefined);
  const isLastCategory = currentStep === totalSteps - 1;

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Target className="h-6 w-6 text-primary" />
          <CardTitle>Évaluez Votre Niveau</CardTitle>
        </div>
        <CardDescription>
          Pour chaque compétence en <strong>{currentCategory.name}</strong>, évaluez votre niveau de maîtrise.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Étape {currentStep + 1} sur {totalSteps}</span>
            <span>{categorySkills.filter((s) => skillLevels[s.id] !== undefined).length}/{categorySkills.length} évaluées</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Skill Ratings */}
        <div className="space-y-6">
          {categorySkills.map((skill) => {
            const level = skillLevels[skill.id] || 50;
            const levelLabel =
              level < 25
                ? 'Débutant'
                : level < 50
                ? 'Intermédiaire'
                : level < 75
                ? 'Avancé'
                : 'Expert';

            return (
              <div key={skill.id} className="space-y-3 rounded-lg border p-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {levelLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Slider
                    value={[level]}
                    onValueChange={(value) => handleSkillLevel(skill.id, value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Débutant</span>
                    <span>Intermédiaire</span>
                    <span>Avancé</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={handlePrevious}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>

          {isLastCategory ? (
            <Button onClick={handleComplete} disabled={!allRated}>
              Voir les Résultats
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!allRated}>
              Suivant
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
