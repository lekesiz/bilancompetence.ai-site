import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from "@/const";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - in production, this would send to a backend
    toast.success("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Ücretsiz Ön Görüşme İçin İletişime Geçin
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Kariyer hedeflerinizi konuşmak, sorularınızı yanıtlamak ve size en
              uygun bilan programını önermek için buradayız. Hiçbir bağlayıcılık
              yok.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Mesaj Gönderin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Adınız Soyadınız *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    E-posta Adresiniz *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Telefon Numaranız
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Kariyer hedefleriniz, sorularınız veya özel durumunuz hakkında bize kısaca bilgi verin..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Mesajı Gönder
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold">
                  İletişim Bilgileri
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Adres</h3>
                      <p className="text-sm text-muted-foreground">
                        {COMPANY_ADDRESS}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Telefon</h3>
                      <a
                        href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {COMPANY_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">E-posta</h3>
                      <a
                        href={`mailto:${COMPANY_EMAIL}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {COMPANY_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/30 p-6">
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  Çalışma Saatleri
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma:</span>
                    <span className="font-medium text-foreground">
                      09:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi:</span>
                    <span className="font-medium text-foreground">
                      Sur rendez-vous
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar:</span>
                    <span className="font-medium text-foreground">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  Hızlı Yanıt Garantisi
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tüm mesajlarınıza <strong>48 saat içinde</strong> yanıt
                  veriyoruz. Acil durumlar için lütfen doğrudan telefon ile
                  iletişime geçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
