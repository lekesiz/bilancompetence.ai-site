import { useState, useEffect } from "react";
import { Bell, BellOff } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { requestNotificationPermission, sendNotification, NotificationTypes } from "@/lib/notifications";
import { toast } from "sonner";

export default function NotificationSettings() {
  const [permission, setPermission] = useState<NotificationPermission>("default");

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const handleEnableNotifications = async () => {
    const result = await requestNotificationPermission();
    setPermission(result);
    
    if (result === "granted") {
      toast.success("Notifications activées !");
      sendNotification("Notifications Activées", {
        body: "Vous recevrez désormais des notifications importantes",
      });
    } else {
      toast.error("Notifications refusées");
    }
  };

  const handleTestNotification = () => {
    sendNotification(NotificationTypes.NEW_MESSAGE.title, {
      body: NotificationTypes.NEW_MESSAGE.body,
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          {permission === "granted" ? (
            <Bell className="h-6 w-6 text-primary" />
          ) : (
            <BellOff className="h-6 w-6 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="mb-2 font-semibold text-lg">Notifications Push</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Recevez des notifications pour les nouveaux messages, documents et rappels de rendez-vous
          </p>
          
          {permission === "default" && (
            <Button onClick={handleEnableNotifications}>
              <Bell className="mr-2 h-4 w-4" />
              Activer les Notifications
            </Button>
          )}
          
          {permission === "granted" && (
            <div className="flex gap-2">
              <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                ✓ Activées
              </div>
              <Button variant="outline" size="sm" onClick={handleTestNotification}>
                Tester
              </Button>
            </div>
          )}
          
          {permission === "denied" && (
            <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              Les notifications sont bloquées. Veuillez les autoriser dans les paramètres de votre navigateur.
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
