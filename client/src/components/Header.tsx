import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_LOGO, COMPANY_PHONE } from "@/const";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Le Bilan de Compétences",
      items: [
        { name: "Qu'est-ce que c'est ?", href: "/bilan-de-competences/definition" },
        { name: "Notre Approche IA", href: "/bilan-de-competences/approche-ia" },
        { name: "Fondements Académiques", href: "/bilan-de-competences/recherche" },
      ],
    },
    { name: "Méthodologie", href: "/methodologie" },
    {
      name: "Financement",
      items: [
        { name: "CPF", href: "/financement/cpf" },
        { name: "Autres Aides", href: "/financement/autres-aides" },
        { name: "Tarifs", href: "/financement/tarifs" },
      ],
    },
    { name: "Expertise Alsace", href: "/expertise-alsace" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src={APP_LOGO} alt="bilancompetence.ai" className="h-10 w-auto" width="40" height="40" />
          <span className="hidden font-serif text-xl font-bold text-primary md:inline-block">
            bilancompetence.ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 lg:flex">
          {navigation.map((item) =>
            item.items ? (
              <div key={item.name} className="group relative">
                <button className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                  {item.name}
                </button>
                <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                  <div className="rounded-lg border bg-popover p-2 shadow-lg">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-md px-4 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href!}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center space-x-4 lg:flex">
          <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`} className="flex items-center space-x-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            <Phone className="h-4 w-4" />
            <span>{COMPANY_PHONE}</span>
          </a>
          <Button asChild>
            <Link href="/contact">Commencer Mon Bilan</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t lg:hidden">
          <div className="container space-y-1 py-4">
            {navigation.map((item) =>
              item.items ? (
                <div key={item.name} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    {item.name}
                  </div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block rounded-md px-6 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="space-y-2 pt-4">
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>{COMPANY_PHONE}</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Commencer Mon Bilan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
