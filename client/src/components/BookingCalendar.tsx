import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays, setHours, setMinutes, isBefore, isAfter, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState, useMemo, useCallback } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';

const locales = {
  'fr': fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface BookingEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  isBooked: boolean;
  consultantName?: string;
}

interface BookingCalendarProps {
  onSelectSlot: (start: Date, end: Date) => void;
  bookedSlots?: BookingEvent[];
}

export default function BookingCalendar({ onSelectSlot, bookedSlots = [] }: BookingCalendarProps) {
  const [view, setView] = useState<View>('week');
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null);

  // Générer les créneaux disponibles (Lundi-Vendredi, 9h-18h, créneaux de 2h)
  const availableSlots = useMemo(() => {
    const slots: BookingEvent[] = [];
    const today = new Date();
    
    // Générer créneaux pour les 30 prochains jours
    for (let i = 0; i < 30; i++) {
      const currentDate = addDays(today, i);
      const dayOfWeek = getDay(currentDate);
      
      // Seulement Lundi-Vendredi (1-5)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Créneaux: 9h-11h, 11h-13h, 14h-16h, 16h-18h
        const timeSlots = [
          { start: 9, end: 11 },
          { start: 11, end: 13 },
          { start: 14, end: 16 },
          { start: 16, end: 18 },
        ];

        timeSlots.forEach(({ start: startHour, end: endHour }) => {
          const slotStart = setMinutes(setHours(currentDate, startHour), 0);
          const slotEnd = setMinutes(setHours(currentDate, endHour), 0);

          // Ne pas afficher les créneaux passés
          if (isAfter(slotStart, new Date())) {
            // Vérifier si le créneau est déjà réservé
            const isBooked = bookedSlots.some(
              (booked) =>
                isSameDay(booked.start, slotStart) &&
                booked.start.getHours() === startHour
            );

            slots.push({
              id: `${format(slotStart, 'yyyy-MM-dd-HH')}`,
              title: isBooked ? 'Réservé' : 'Disponible',
              start: slotStart,
              end: slotEnd,
              isBooked,
            });
          }
        });
      }
    }

    return slots;
  }, [bookedSlots]);

  // Combiner créneaux disponibles et réservés
  const allEvents = useMemo(() => {
    return [...availableSlots, ...bookedSlots];
  }, [availableSlots, bookedSlots]);

  const handleSelectSlot = useCallback(
    (slotInfo: { start: Date; end: Date }) => {
      // Vérifier si le créneau est disponible
      const isAvailable = availableSlots.some(
        (slot) =>
          isSameDay(slot.start, slotInfo.start) &&
          slot.start.getHours() === slotInfo.start.getHours() &&
          !slot.isBooked
      );

      if (isAvailable) {
        setSelectedSlot(slotInfo);
      }
    },
    [availableSlots]
  );

  const handleConfirmBooking = useCallback(() => {
    if (selectedSlot) {
      onSelectSlot(selectedSlot.start, selectedSlot.end);
      setSelectedSlot(null);
    }
  }, [selectedSlot, onSelectSlot]);

  const eventStyleGetter = useCallback((event: BookingEvent) => {
    let backgroundColor = '#10b981'; // Vert pour disponible
    let color = 'white';

    if (event.isBooked) {
      backgroundColor = '#ef4444'; // Rouge pour réservé
    }

    if (selectedSlot && isSameDay(event.start, selectedSlot.start) && event.start.getHours() === selectedSlot.start.getHours()) {
      backgroundColor = '#3b82f6'; // Bleu pour sélectionné
    }

    return {
      style: {
        backgroundColor,
        color,
        border: 'none',
        borderRadius: '4px',
        opacity: event.isBooked ? 0.6 : 1,
        cursor: event.isBooked ? 'not-allowed' : 'pointer',
      },
    };
  }, [selectedSlot]);

  const messages = {
    allDay: 'Toute la journée',
    previous: 'Précédent',
    next: 'Suivant',
    today: "Aujourd'hui",
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    agenda: 'Agenda',
    date: 'Date',
    time: 'Heure',
    event: 'Événement',
    noEventsInRange: 'Aucun créneau disponible dans cette période.',
    showMore: (total: number) => `+ ${total} de plus`,
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Réservez Votre Entretien Préalable Gratuit
          </CardTitle>
          <CardDescription>
            Sélectionnez un créneau de 2 heures pour votre entretien préalable gratuit.
            Nos consultants sont disponibles du lundi au vendredi, de 9h à 18h.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-green-500"></div>
              <span className="text-sm">Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-red-500 opacity-60"></div>
              <span className="text-sm">Réservé</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-blue-500"></div>
              <span className="text-sm">Sélectionné</span>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <Calendar
              localizer={localizer}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
              view={view}
              onView={setView}
              date={date}
              onNavigate={setDate}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={(event) => {
                if (!event.isBooked) {
                  handleSelectSlot({ start: event.start, end: event.end });
                }
              }}
              eventPropGetter={eventStyleGetter}
              messages={messages}
              min={setHours(setMinutes(new Date(), 0), 9)}
              max={setHours(setMinutes(new Date(), 0), 18)}
              step={60}
              timeslots={1}
              culture="fr"
            />
          </div>
        </CardContent>
      </Card>

      {selectedSlot && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Confirmer Votre Réservation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <CalendarIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Date</p>
                <p className="text-sm text-muted-foreground">
                  {format(selectedSlot.start, 'EEEE d MMMM yyyy', { locale: fr })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Horaire</p>
                <p className="text-sm text-muted-foreground">
                  {format(selectedSlot.start, 'HH:mm')} - {format(selectedSlot.end, 'HH:mm')}
                  <Badge variant="secondary" className="ml-2">
                    2 heures
                  </Badge>
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleConfirmBooking} className="flex-1">
                Confirmer la Réservation
              </Button>
              <Button variant="outline" onClick={() => setSelectedSlot(null)}>
                Annuler
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
