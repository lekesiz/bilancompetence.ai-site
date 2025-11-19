import { useState } from "react";
import { Calendar, FileText, MessageSquare, User, Download, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import NotificationSettings from "@/components/NotificationSettings";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Demo data (in production, this would come from tRPC)
const demoBilan = {
  id: 1,
  status: "phase2",
  startDate: "2025-01-15",
  phase1Progress: 100,
  phase2Progress: 65,
  phase3Progress: 0,
  advisorName: "Marie Dupont",
  nextAppointment: "2025-12-05 14:00",
};

const demoDocuments = [
  { id: 1, title: "Synthèse Phase 1", fileType: "pdf", uploadedAt: "2025-02-10" },
  { id: 2, title: "Questionnaire d'auto-évaluation", fileType: "pdf", uploadedAt: "2025-01-20" },
  { id: 3, title: "Guide du bilan de compétences", fileType: "pdf", uploadedAt: "2025-01-15" },
];

const demoMessages = [
  { id: 1, senderType: "advisor", content: "Bonjour, votre synthèse de la phase 1 est disponible.", createdAt: "2025-02-10 10:30", isRead: 1 },
  { id: 2, senderType: "client", content: "Merci ! J'ai une question sur les résultats des tests de personnalité.", createdAt: "2025-02-10 14:20", isRead: 1 },
  { id: 3, senderType: "advisor", content: "Bien sûr, nous en discuterons lors de notre prochain entretien.", createdAt: "2025-02-10 15:45", isRead: 1 },
];

export default function Dashboard() {
  const [newMessage, setNewMessage] = useState("");

  const getPhaseStatus = (phase: number) => {
    const progress = phase === 1 ? demoBilan.phase1Progress : phase === 2 ? demoBilan.phase2Progress : demoBilan.phase3Progress;
    if (progress === 100) return { icon: CheckCircle2, color: "text-green-600", label: "Terminée" };
    if (progress > 0) return { icon: Clock, color: "text-blue-600", label: "En cours" };
    return { icon: AlertCircle, color: "text-gray-400", label: "À venir" };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="mb-2 font-serif text-3xl font-bold">
              Mon Tableau de Bord
            </h1>
            <p className="text-muted-foreground">
              Suivez l'avancement de votre bilan de compétences
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Progress Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Notification Settings */}
              <NotificationSettings />

              <Card className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-semibold text-lg">Progression du Bilan</h2>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    Phase 2 en cours
                  </span>
                </div>

                <div className="space-y-6">
                  {[1, 2, 3].map((phase) => {
                    const status = getPhaseStatus(phase);
                    const progress = phase === 1 ? demoBilan.phase1Progress : phase === 2 ? demoBilan.phase2Progress : demoBilan.phase3Progress;
                    return (
                      <div key={phase}>
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <status.icon className={`h-5 w-5 ${status.color}`} />
                            <span className="font-medium">
                              Phase {phase}: {phase === 1 ? "Analyse" : phase === 2 ? "Investigation" : "Conclusion"}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">{status.label}</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <p className="mt-1 text-xs text-muted-foreground">{progress}% complété</p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Documents */}
              <Card className="p-6">
                <h2 className="mb-4 flex items-center gap-2 font-semibold text-lg">
                  <FileText className="h-5 w-5" />
                  Mes Documents
                </h2>
                <div className="space-y-3">
                  {demoDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded bg-primary/10 p-2">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Ajouté le {new Date(doc.uploadedAt).toLocaleDateString("fr-FR")}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Advisor Info */}
              <Card className="p-6">
                <h2 className="mb-4 flex items-center gap-2 font-semibold">
                  <User className="h-5 w-5" />
                  Votre Conseiller
                </h2>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium">{demoBilan.advisorName}</p>
                  <p className="text-sm text-muted-foreground">Conseillère en évolution professionnelle</p>
                </div>
              </Card>

              {/* Next Appointment */}
              <Card className="p-6">
                <h2 className="mb-4 flex items-center gap-2 font-semibold">
                  <Calendar className="h-5 w-5" />
                  Prochain Rendez-vous
                </h2>
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <p className="mb-1 text-2xl font-bold">
                    {new Date(demoBilan.nextAppointment).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(demoBilan.nextAppointment).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Modifier le rendez-vous
                </Button>
              </Card>

              {/* Messages */}
              <Card className="p-6">
                <h2 className="mb-4 flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-5 w-5" />
                  Messages
                </h2>
                <div className="mb-4 max-h-64 space-y-3 overflow-y-auto">
                  {demoMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`rounded-lg p-3 text-sm ${
                        msg.senderType === "advisor"
                          ? "bg-muted"
                          : "bg-primary/10 text-primary-foreground"
                      }`}
                    >
                      <p className="mb-1 font-medium">
                        {msg.senderType === "advisor" ? demoBilan.advisorName : "Vous"}
                      </p>
                      <p className="text-xs opacity-90">{msg.content}</p>
                      <p className="mt-1 text-xs opacity-60">
                        {new Date(msg.createdAt).toLocaleString("fr-FR")}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Votre message..."
                    className="flex-1 rounded-lg border px-3 py-2 text-sm"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <Button size="sm">
                    Envoyer
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
