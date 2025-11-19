export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications");
    return "denied";
  }

  if (Notification.permission === "granted") {
    return "granted";
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission;
  }

  return Notification.permission;
}

export function sendNotification(title: string, options?: NotificationOptions) {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification(title, {
      icon: "/logo.svg",
      badge: "/logo.svg",
      ...options,
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, {
          icon: "/logo.svg",
          badge: "/logo.svg",
          ...options,
        });
      }
    });
  }
}

// Notification types for the app
export const NotificationTypes = {
  NEW_MESSAGE: {
    title: "Nouveau Message",
    body: "Vous avez reçu un nouveau message de votre conseiller",
  },
  NEW_DOCUMENT: {
    title: "Nouveau Document",
    body: "Un nouveau document est disponible dans votre espace",
  },
  APPOINTMENT_REMINDER: {
    title: "Rappel de Rendez-vous",
    body: "Votre rendez-vous est dans 24 heures",
  },
  BILAN_UPDATE: {
    title: "Mise à Jour du Bilan",
    body: "Votre bilan a progressé à la phase suivante",
  },
} as const;
