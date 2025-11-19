import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Download, Share2, Brain, Target, TrendingUp, Award } from 'lucide-react';
import type { PersonalityResults } from '@/components/PersonalityTest';
import type { SkillsResults } from '@/components/SkillsTest';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';

interface TestResultsProps {
  personalityResults?: PersonalityResults;
  skillsResults?: SkillsResults;
}

export default function TestResults({ personalityResults, skillsResults }: TestResultsProps) {
  const [activeTab, setActiveTab] = useState<'personality' | 'skills'>('personality');

  // Données pour le graphique radar de personnalité
  const personalityData = personalityResults
    ? [
        { dimension: 'Ouverture', value: personalityResults.openness },
        { dimension: 'Conscienciosité', value: personalityResults.conscientiousness },
        { dimension: 'Extraversion', value: personalityResults.extraversion },
        { dimension: 'Agréabilité', value: personalityResults.agreeableness },
        { dimension: 'Stabilité', value: 100 - personalityResults.neuroticism },
      ]
    : [];

  // Données pour le graphique de compétences
  const skillsData = skillsResults?.topSkills.map((skill) => ({
    name: skill.skill,
    niveau: skill.level,
    category: skill.category,
  })) || [];

  const getPersonalityInsights = (results: PersonalityResults) => {
    const insights = [];

    if (results.openness > 70) {
      insights.push({
        title: 'Très ouvert(e) aux nouvelles expériences',
        description: 'Vous êtes curieux(se), créatif(ve) et aimez explorer de nouvelles idées.',
        icon: Brain,
      });
    }

    if (results.conscientiousness > 70) {
      insights.push({
        title: 'Très organisé(e) et méthodique',
        description: 'Vous êtes fiable, planifiez bien et terminez ce que vous commencez.',
        icon: Target,
      });
    }

    if (results.extraversion > 70) {
      insights.push({
        title: 'Très extraverti(e)',
        description: 'Vous êtes sociable, énergique et aimez être entouré(e) de gens.',
        icon: TrendingUp,
      });
    } else if (results.extraversion < 30) {
      insights.push({
        title: 'Plutôt introverti(e)',
        description: 'Vous préférez les interactions en petit groupe et avez besoin de temps seul(e) pour vous ressourcer.',
        icon: Brain,
      });
    }

    if (results.agreeableness > 70) {
      insights.push({
        title: 'Très empathique et coopératif(ve)',
        description: 'Vous êtes attentif(ve) aux autres, évitez les conflits et aimez aider.',
        icon: Award,
      });
    }

    if (results.neuroticism < 30) {
      insights.push({
        title: 'Très stable émotionnellement',
        description: 'Vous gérez bien le stress et restez calme dans les situations difficiles.',
        icon: Target,
      });
    }

    return insights;
  };

  const getCareerSuggestions = (results: PersonalityResults) => {
    const suggestions = [];

    // Ouverture élevée
    if (results.openness > 70) {
      suggestions.push({
        title: 'Métiers créatifs et innovants',
        careers: ['Designer', 'Consultant', 'Chercheur', 'Entrepreneur', 'Artiste'],
      });
    }

    // Conscienciosité élevée
    if (results.conscientiousness > 70) {
      suggestions.push({
        title: 'Métiers structurés et organisés',
        careers: ['Chef de projet', 'Comptable', 'Analyste', 'Gestionnaire', 'Ingénieur'],
      });
    }

    // Extraversion élevée
    if (results.extraversion > 70) {
      suggestions.push({
        title: 'Métiers relationnels',
        careers: ['Commercial', 'Formateur', 'Manager', 'RH', 'Événementiel'],
      });
    }

    // Agréabilité élevée
    if (results.agreeableness > 70) {
      suggestions.push({
        title: 'Métiers d\'aide et de service',
        careers: ['Soignant', 'Éducateur', 'Conseiller', 'Médiateur', 'Travailleur social'],
      });
    }

    return suggestions;
  };

  const handleDownloadPDF = () => {
    // TODO: Implémenter génération PDF
    alert('Fonctionnalité de téléchargement PDF à venir');
  };

  const handleShare = () => {
    // TODO: Implémenter partage
    alert('Fonctionnalité de partage à venir');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Résultats de vos Tests - bilancompetence.ai"
        description="Découvrez les résultats détaillés de vos tests de personnalité et de compétences avec des analyses et recommandations personnalisées."
      />

      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Tests', href: '/tests' },
                { label: 'Résultats', href: '/test-results' },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Vos Résultats Détaillés
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              Découvrez votre profil de personnalité et vos compétences clés avec des analyses détaillées
              et des recommandations personnalisées.
            </p>
          </div>
        </div>

        <div className="container py-12">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <Button
              variant={activeTab === 'personality' ? 'default' : 'outline'}
              onClick={() => setActiveTab('personality')}
              className="flex-1"
            >
              <Brain className="mr-2 h-4 w-4" />
              Personnalité
            </Button>
            <Button
              variant={activeTab === 'skills' ? 'default' : 'outline'}
              onClick={() => setActiveTab('skills')}
              className="flex-1"
            >
              <Target className="mr-2 h-4 w-4" />
              Compétences
            </Button>
          </div>

          {/* Personality Results */}
          {activeTab === 'personality' && personalityResults && (
            <div className="space-y-8">
              {/* Radar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Votre Profil de Personnalité (Big Five)</CardTitle>
                  <CardDescription>
                    Visualisation de vos 5 dimensions de personnalité
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={personalityData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="dimension" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name="Votre profil"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>

                  {/* Scores détaillés */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {personalityData.map((item) => (
                      <div key={item.dimension} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.dimension}</span>
                          <span className="text-muted-foreground">{item.value}%</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Points Forts de Votre Personnalité</CardTitle>
                  <CardDescription>
                    Ce que votre profil révèle sur vous
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {getPersonalityInsights(personalityResults).map((insight, index) => (
                      <div key={index} className="flex gap-4 rounded-lg border p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <insight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{insight.title}</p>
                          <p className="text-sm text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle>Pistes de Carrière Adaptées</CardTitle>
                  <CardDescription>
                    Métiers en adéquation avec votre profil de personnalité
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {getCareerSuggestions(personalityResults).map((suggestion, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-3">{suggestion.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {suggestion.careers.map((career) => (
                            <Badge key={career} variant="secondary">
                              {career}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Skills Results */}
          {activeTab === 'skills' && skillsResults && (
            <div className="space-y-8">
              {/* Top Skills Bar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Vos 10 Compétences Principales</CardTitle>
                  <CardDescription>
                    Classées par niveau de maîtrise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={skillsData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="niveau"
                        fill="hsl(var(--primary))"
                        name="Niveau de maîtrise (%)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Skills by Category */}
              <Card>
                <CardHeader>
                  <CardTitle>Répartition par Catégorie</CardTitle>
                  <CardDescription>
                    Vos compétences organisées par domaine
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {Array.from(new Set(skillsResults.topSkills.map((s) => s.category))).map(
                      (category) => {
                        const categorySkills = skillsResults.topSkills.filter(
                          (s) => s.category === category
                        );
                        const avgLevel =
                          categorySkills.reduce((sum, s) => sum + s.level, 0) /
                          categorySkills.length;

                        return (
                          <div key={category} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold">{category}</h3>
                              <Badge variant="outline">{Math.round(avgLevel)}% moyen</Badge>
                            </div>
                            <div className="space-y-2">
                              {categorySkills.map((skill) => (
                                <div key={skill.skill} className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>{skill.skill}</span>
                                    <span className="text-muted-foreground">{skill.level}%</span>
                                  </div>
                                  <Progress value={skill.level} className="h-2" />
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommandations de Développement</CardTitle>
                  <CardDescription>
                    Compétences à renforcer pour progresser
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 bg-primary/5">
                      <h4 className="font-semibold mb-2">Compétences à fort potentiel</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ces compétences sont déjà solides et pourraient devenir des expertises:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillsResults.topSkills
                          .filter((s) => s.level >= 60 && s.level < 90)
                          .slice(0, 5)
                          .map((skill) => (
                            <Badge key={skill.skill} variant="default">
                              {skill.skill}
                            </Badge>
                          ))}
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h4 className="font-semibold mb-2">Axes d'amélioration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ces compétences méritent d'être renforcées pour élargir votre profil:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillsResults.topSkills
                          .filter((s) => s.level < 60)
                          .slice(0, 5)
                          .map((skill) => (
                            <Badge key={skill.skill} variant="secondary">
                              {skill.skill}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Actions */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDownloadPDF} className="flex-1 sm:flex-none">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger le PDF
                </Button>
                <Button variant="outline" onClick={handleShare} className="flex-1 sm:flex-none">
                  <Share2 className="mr-2 h-4 w-4" />
                  Partager
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = '/contact')}
                  className="flex-1 sm:flex-none"
                >
                  Prendre Rendez-vous
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
