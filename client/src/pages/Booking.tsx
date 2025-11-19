import { useState } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Get available slots for selected date
  const { data: slotsData, isLoading: slotsLoading } = trpc.booking.getAvailableSlots.useQuery(
    { date: selectedDate },
    { enabled: !!selectedDate }
  );

  // Create appointment mutation
  const createAppointment = trpc.booking.createAppointment.useMutation({
    onSuccess: () => {
      setIsSuccess(true);
      toast.success("Rendez-vous confirmé ! Vous allez recevoir un email de confirmation.");
    },
    onError: (error) => {
      toast.error(error.message || "Une erreur est survenue");
    },
  });

  // Generate next 14 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      toast.error("Veuillez sélectionner une date et un horaire");
      return;
    }
    const timeSlot = selectedSlot ? `${selectedSlot.start.getHours()}:${selectedSlot.start.getMinutes().toString().padStart(2, '0')}` : '';
    createAppointment.mutate({
      ...formData,
      date: selectedDate,
      timeSlot,
    });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 inline-flex items-center justify-center rounded-full bg-green-100 p-6">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
              <h1 className="mb-4 font-serif text-4xl font-bold">
                Rendez-vous Confirmé !
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Nous avons bien reçu votre demande de rendez-vous. Vous allez recevoir un email de confirmation à l'adresse <strong>{formData.email}</strong>.
              </p>
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-left">
                <h2 className="mb-4 font-semibold">Détails du rendez-vous :</h2>
                <div className="space-y-2">
                  <p><strong>Date :</strong> {new Date(selectedDate).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
                  <p><strong>Horaire :</strong> {selectedSlot ? `${selectedSlot.start.getHours()}:${selectedSlot.start.getMinutes().toString().padStart(2, '0')} - ${selectedSlot.end.getHours()}:${selectedSlot.end.getMinutes().toString().padStart(2, '0')}` : ''}</p>
                  <p><strong>Nom :</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Téléphone :</strong> {formData.phone}</p>
                </div>
              </div>
              <div className="mt-8">
                <Button onClick={() => window.location.href = "/"}>
                  Retour à l'accueil
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 font-serif text-4xl font-bold">
                Réserver un Entretien Gratuit
              </h1>
              <p className="text-lg text-muted-foreground">
                Choisissez un créneau qui vous convient pour discuter de votre projet professionnel
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calendar Selection */}
              <div>
                <BookingCalendar
                  onSelectSlot={(start, end) => {
                    setSelectedSlot({ start, end });
                    setSelectedDate(start.toISOString().split('T')[0]);
                  }}
                  bookedSlots={[]}
                />
              </div>

              {/* Original Date & Time Selection (fallback) - Hidden */}
              <div className="hidden">
                <Card className="p-6">
                  <h2 className="mb-4 flex items-center gap-2 font-semibold">
                    <Calendar className="h-5 w-5" />
                    Sélectionnez une date
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {availableDates.map((date) => {
                      const dateStr = date.toISOString().split("T")[0];
                      const isSelected = selectedDate === dateStr;
                      return (
                        <button
                          key={dateStr}
                          onClick={() => {
                            setSelectedDate(dateStr);
                            setSelectedSlot(null);
                          }}
                          className={`rounded-lg border p-3 text-left transition-colors ${
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "hover:border-primary hover:bg-primary/5"
                          }`}
                        >
                          <div className="text-sm font-semibold">
                            {date.toLocaleDateString("fr-FR", { weekday: "short" })}
                          </div>
                          <div className="text-xs">
                            {date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </Card>

                {selectedDate && (
                  <Card className="mt-4 p-6">
                    <h2 className="mb-4 flex items-center gap-2 font-semibold">
                      <Clock className="h-5 w-5" />
                      Horaires disponibles
                    </h2>
                    {slotsLoading ? (
                      <p className="text-sm text-muted-foreground">Chargement...</p>
                    ) : slotsData && slotsData.availableSlots.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {slotsData.availableSlots.map((slot) => {
                          const isSelected = selectedSlot && slot.includes(selectedSlot.start.getHours().toString());
                          return (
                            <button
                              key={slot}
                              onClick={() => {
                                const [hours] = slot.split(':');
                                const start = new Date(selectedDate);
                                start.setHours(parseInt(hours), 0, 0, 0);
                                const end = new Date(start);
                                end.setHours(start.getHours() + 2);
                                setSelectedSlot({ start, end });
                              }}
                              className={`rounded-lg border p-3 text-center transition-colors ${
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "hover:border-primary hover:bg-primary/5"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Aucun créneau disponible pour cette date
                      </p>
                    )}
                  </Card>
                )}
              </div>
              {/* End of hidden fallback */}

              {/* Contact Form */}
              <Card className="p-6">
                <h2 className="mb-4 flex items-center gap-2 font-semibold">
                  <User className="h-5 w-5" />
                  Vos informations
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message (optionnel)
                    </Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      placeholder="Parlez-nous brièvement de votre projet..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!selectedDate || !selectedSlot || createAppointment.isPending}
                  >
                    {createAppointment.isPending ? "Confirmation en cours..." : "Confirmer le Rendez-vous"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    En confirmant ce rendez-vous, vous acceptez d'être contacté par téléphone au numéro indiqué.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
