import { useState } from "react";
import { Calendar, FileText, MessageSquare, Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Demo data
const demoAppointments = [
  { id: 1, name: "Jean Dupont", email: "jean@example.com", date: "2025-12-05", time: "14:00", status: "confirmed" },
  { id: 2, name: "Marie Martin", email: "marie@example.com", date: "2025-12-06", time: "10:00", status: "pending" },
  { id: 3, name: "Pierre Bernard", email: "pierre@example.com", date: "2025-12-07", time: "15:30", status: "confirmed" },
];

const demoTestimonials = [
  { id: 1, name: "Sophie Laurent", role: "Chef de projet", content: "Excellente expérience, l'IA m'a aidé à découvrir des compétences insoupçonnées.", rating: 5, status: "pending" },
  { id: 2, name: "Thomas Dubois", role: "Développeur", content: "Très professionnel, je recommande vivement.", rating: 5, status: "pending" },
];

const demoBilans = [
  { id: 1, userName: "Jean Dupont", status: "phase2", progress: 65, startDate: "2025-01-15" },
  { id: 2, userName: "Marie Martin", status: "phase1", progress: 100, startDate: "2025-02-01" },
  { id: 3, userName: "Pierre Bernard", status: "phase3", progress: 30, startDate: "2024-12-10" },
];

export default function Admin() {
  const [appointments, setAppointments] = useState(demoAppointments);
  const [testimonials, setTestimonials] = useState(demoTestimonials);

  const approveTestimonial = (id: number) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    // In production: call API to update status to "approved"
  };

  const rejectTestimonial = (id: number) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    // In production: call API to update status to "rejected"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="mb-2 font-serif text-3xl font-bold">
              Panneau d'Administration
            </h1>
            <p className="text-muted-foreground">
              Gérez les rendez-vous, témoignages et bilans
            </p>
          </div>

          <Tabs defaultValue="appointments" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="appointments">
                <Calendar className="mr-2 h-4 w-4" />
                Rendez-vous
              </TabsTrigger>
              <TabsTrigger value="testimonials">
                <MessageSquare className="mr-2 h-4 w-4" />
                Témoignages
              </TabsTrigger>
              <TabsTrigger value="bilans">
                <Users className="mr-2 h-4 w-4" />
                Bilans
              </TabsTrigger>
            </TabsList>

            {/* Appointments Tab */}
            <TabsContent value="appointments" className="space-y-4">
              <Card className="p-6">
                <h2 className="mb-4 font-semibold text-lg">Rendez-vous à venir</h2>
                <div className="space-y-3">
                  {appointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{apt.name}</p>
                          <p className="text-sm text-muted-foreground">{apt.email}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(apt.date).toLocaleDateString("fr-FR")} à {apt.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            apt.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {apt.status === "confirmed" ? "Confirmé" : "En attente"}
                        </span>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-4">
              <Card className="p-6">
                <h2 className="mb-4 font-semibold text-lg">Témoignages en attente de modération</h2>
                <div className="space-y-4">
                  {testimonials.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      Aucun témoignage en attente
                    </p>
                  ) : (
                    testimonials.map((test) => (
                      <div key={test.id} className="rounded-lg border p-4">
                        <div className="mb-3 flex items-start justify-between">
                          <div>
                            <p className="font-medium">{test.name}</p>
                            <p className="text-sm text-muted-foreground">{test.role}</p>
                            <div className="mt-1 flex gap-1">
                              {Array.from({ length: test.rating }).map((_, i) => (
                                <span key={i} className="text-yellow-500">★</span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="default"
                              onClick={() => approveTestimonial(test.id)}
                            >
                              <CheckCircle className="mr-1 h-4 w-4" />
                              Approuver
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => rejectTestimonial(test.id)}
                            >
                              <XCircle className="mr-1 h-4 w-4" />
                              Rejeter
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm">{test.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </TabsContent>

            {/* Bilans Tab */}
            <TabsContent value="bilans" className="space-y-4">
              <Card className="p-6">
                <h2 className="mb-4 font-semibold text-lg">Bilans en cours</h2>
                <div className="space-y-3">
                  {demoBilans.map((bilan) => (
                    <div key={bilan.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{bilan.userName}</p>
                          <p className="text-sm text-muted-foreground">
                            Démarré le {new Date(bilan.startDate).toLocaleDateString("fr-FR")}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <div className="h-2 w-32 rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${bilan.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">{bilan.progress}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            bilan.status === "phase1"
                              ? "bg-blue-100 text-blue-700"
                              : bilan.status === "phase2"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {bilan.status === "phase1"
                            ? "Phase 1"
                            : bilan.status === "phase2"
                            ? "Phase 2"
                            : "Phase 3"}
                        </span>
                        <Button variant="outline" size="sm">
                          Voir détails
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
