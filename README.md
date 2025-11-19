# bilancompetence.ai - Site Web Officiel

> **Bilan de Compétences Nouvelle Génération avec Intelligence Artificielle en Alsace**

Site web professionnel pour bilancompetence.ai, plateforme de bilan de compétences certifiée Qualiopi utilisant l'intelligence artificielle pour accompagner les professionnels dans leur évolution de carrière.

🌐 **Site en production**: [https://bilancompetence.ai](https://bilancompetence.ai)

---

## 📋 Table des Matières

- [À Propos](#à-propos)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Développement](#développement)
- [Optimisations Performance](#optimisations-performance)
- [Déploiement](#déploiement)
- [Structure du Projet](#structure-du-projet)
- [SEO & Analytics](#seo--analytics)
- [Licence](#licence)

---

## 🎯 À Propos

**bilancompetence.ai** est une plateforme innovante de bilan de compétences qui combine méthodologie scientifique éprouvée et intelligence artificielle pour offrir un accompagnement personnalisé aux professionnels en reconversion ou évolution de carrière.

### Caractéristiques Principales

- ✅ **Certifié Qualiopi** (2025-2028) - Gage de qualité et de sérieux
- 🤖 **Intelligence Artificielle** - Analyse avancée des compétences et recommandations personnalisées
- 💰 **100% Finançable CPF** - Accessible sans débourser d'argent
- 📍 **Expertise Locale Alsace** - Connaissance approfondie du marché local (Strasbourg, Mulhouse, Colmar)
- 📊 **Méthodologie Scientifique** - Basée sur 7 théories académiques reconnues
- 🎯 **Accompagnement Personnalisé** - Suivi individuel par des consultants certifiés

---

## 🛠️ Technologies

### Frontend

- **React 19** - Bibliothèque UI moderne avec Server Components
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS 4** - Framework CSS utility-first avec architecture moderne (@property)
- **shadcn/ui** - Composants UI accessibles et personnalisables
- **Wouter** - Router léger et performant
- **Vite** - Build tool ultra-rapide avec HMR

### Backend

- **Node.js 22** - Runtime JavaScript moderne
- **Express** - Framework web minimaliste
- **tRPC** - API type-safe end-to-end
- **Drizzle ORM** - ORM TypeScript-first performant
- **PostgreSQL (Neon)** - Base de données serverless

### Outils & Services

- **Google Analytics** - Tracking et analytics
- **Manus Analytics (Umami)** - Analytics privacy-friendly
- **Stripe** - Paiements en ligne (test & production)
- **Resend** - Service d'envoi d'emails transactionnels
- **Dicebear** - Génération d'avatars
- **Google Fonts** - Typographie (Inter + Playfair Display)

---

## 🏗️ Architecture

### Stack Technique

```
┌─────────────────────────────────────────┐
│           Frontend (React 19)           │
│  ┌─────────────────────────────────┐   │
│  │  Pages & Components (TSX)       │   │
│  │  - Home, Blog, Tests, Booking   │   │
│  │  - shadcn/ui Components         │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Styling (Tailwind CSS 4)       │   │
│  │  - Utility-first approach       │   │
│  │  - Custom theme (@theme)        │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                    ↕
┌─────────────────────────────────────────┐
│         API Layer (tRPC)                │
│  - Type-safe API calls                  │
│  - Automatic TypeScript inference       │
└─────────────────────────────────────────┘
                    ↕
┌─────────────────────────────────────────┐
│       Backend (Node.js + Express)       │
│  ┌─────────────────────────────────┐   │
│  │  Business Logic                 │   │
│  │  - User management              │   │
│  │  - Booking system               │   │
│  │  - Tests & results              │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                    ↕
┌─────────────────────────────────────────┐
│    Database (PostgreSQL/Neon)           │
│  - Users, Bookings, Tests, Results      │
│  - Drizzle ORM for type-safe queries    │
└─────────────────────────────────────────┘
```

### Patterns de Design

- **Component-Based Architecture** - Composants réutilisables et modulaires
- **Type-Safe API** - tRPC pour garantir la cohérence des types
- **Server-Side Rendering** - Rendu côté serveur pour SEO optimal
- **Lazy Loading** - Chargement différé des composants lourds
- **Code Splitting** - Séparation du bundle en chunks optimisés

---

## ✨ Fonctionnalités

### Pages Principales

1. **Homepage** (`/`)
   - Hero section avec proposition de valeur
   - Statistiques de transformation (670+ professionnels, 95% satisfaction)
   - Présentation de la méthodologie
   - Témoignages clients
   - Certification Qualiopi
   - CTA (Call-to-Action) multiples

2. **Blog** (`/blog`)
   - Articles SEO-optimisés sur la reconversion professionnelle
   - Catégories: Reconversion, Orientation, Compétences, Financement
   - Markdown rendering avec Streamdown
   - Articles connexes
   - Rich snippets (ArticleSchema)

3. **Tests Interactifs** (`/tests`)
   - Test de Personnalité (5 questions)
   - Test de Compétences (5 domaines)
   - Test de Motivation (5 questions)
   - Résultats instantanés avec visualisations (Recharts)
   - Recommandations personnalisées

4. **Réservation** (`/rendez-vous`)
   - Calendrier interactif (react-big-calendar)
   - Formulaire de contact
   - Sélection de créneaux disponibles
   - Confirmation par email

5. **Méthodologie** (`/methodologie`)
   - Présentation des 3 phases du bilan
   - 7 théories académiques
   - Approche IA
   - Garanties et certifications

6. **Financement** (`/financement`)
   - Guide CPF complet
   - Autres dispositifs (OPCO, Pôle Emploi, Transition Pro)
   - Calculateur de financement
   - FAQ financement

### Fonctionnalités Techniques

- **SEO Avancé**
  - Meta tags dynamiques
  - Open Graph & Twitter Cards
  - Sitemap.xml automatique
  - Robots.txt
  - Schema.org (Organization, LocalBusiness, Article)
  - Canonical URLs

- **Performance**
  - Bundle JavaScript optimisé (755 KB)
  - Lazy loading images + dimensions explicites
  - Code splitting (recharts, calendar, markdown)
  - Font-display: swap
  - Preconnect pour ressources critiques
  - Core Web Vitals optimisés (LCP, CLS, FID, TBT)

- **Accessibilité**
  - Composants shadcn/ui accessibles (ARIA)
  - Navigation clavier
  - Focus visible
  - Alt text sur toutes les images
  - Contraste suffisant

- **Responsive Design**
  - Mobile-first approach
  - Breakpoints Tailwind (sm, md, lg, xl, 2xl)
  - Touch-friendly (boutons 44x44px minimum)

---

## 🚀 Installation

### Prérequis

- **Node.js** 22.x ou supérieur
- **pnpm** 9.x ou supérieur
- **PostgreSQL** (ou compte Neon)
- **Git**

### Étapes d'Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/lekesiz/bilancompetence.ai-site.git
cd bilancompetence.ai-site
```

2. **Installer les dépendances**

```bash
pnpm install
```

3. **Configurer les variables d'environnement**

Créer un fichier `.env` à la racine du projet:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# JWT
JWT_SECRET=your-secret-key-here

# OAuth
OAUTH_SERVER_URL=https://oauth.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im

# Stripe (Test)
STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend (Emails)
RESEND_API_KEY=re_...

# Analytics
VITE_ANALYTICS_WEBSITE_ID=your-website-id
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com

# App Config
VITE_APP_TITLE=bilancompetence.ai
VITE_APP_ID=your-app-id
VITE_APP_LOGO=/logo.svg
OWNER_NAME=NETZ Informatique
OWNER_OPEN_ID=your-owner-id

# Forge API (Manus)
BUILT_IN_FORGE_API_KEY=your-api-key
BUILT_IN_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your-frontend-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
```

4. **Initialiser la base de données**

```bash
pnpm db:push
```

5. **Lancer le serveur de développement**

```bash
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`

---

## ⚙️ Configuration

### Base de Données

Le projet utilise **Drizzle ORM** avec PostgreSQL (Neon serverless).

**Commandes utiles**:

```bash
# Générer les migrations
pnpm db:generate

# Appliquer les migrations
pnpm db:migrate

# Pousser le schéma (dev)
pnpm db:push

# Studio Drizzle (interface graphique)
pnpm db:studio
```

### Stripe

Le projet est configuré avec Stripe pour les paiements:

- **Mode Test**: Utilisez les clés `sk_test_...` et `pk_test_...`
- **Mode Production**: Utilisez les clés `sk_live_...` et `pk_live_...`

**Webhook**: Configuré sur `/api/stripe/webhook`

### Emails (Resend)

Les emails transactionnels sont envoyés via Resend:

- Confirmations de réservation
- Notifications administrateur
- Résultats de tests

---

## 💻 Développement

### Scripts Disponibles

```bash
# Développement
pnpm dev              # Lancer le serveur de développement

# Build
pnpm build            # Build pour production
pnpm preview          # Prévisualiser le build de production

# Database
pnpm db:push          # Pousser le schéma en base de données
pnpm db:generate      # Générer les migrations
pnpm db:migrate       # Appliquer les migrations
pnpm db:studio        # Ouvrir Drizzle Studio

# Linting & Formatting
pnpm lint             # Linter le code (si configuré)
pnpm format           # Formatter le code (si configuré)
```

### Structure des Composants

```
client/src/
├── components/
│   ├── ui/              # Composants shadcn/ui (Button, Card, Dialog, etc.)
│   ├── sections/        # Sections réutilisables (Hero, Footer, Header, etc.)
│   ├── ErrorBoundary.tsx
│   ├── Map.tsx          # Google Maps integration
│   └── ...
├── pages/               # Pages de l'application
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Tests.tsx
│   ├── Booking.tsx
│   └── ...
├── contexts/            # React contexts (ThemeContext, etc.)
├── hooks/               # Custom React hooks
├── lib/                 # Utilitaires et helpers
├── data/                # Données statiques (blogPosts, etc.)
├── App.tsx              # Point d'entrée avec routing
├── main.tsx             # Montage React
└── index.css            # Styles globaux + Tailwind
```

### Ajouter une Nouvelle Page

1. Créer le composant dans `client/src/pages/`
2. Ajouter la route dans `client/src/App.tsx`
3. Ajouter le lien dans le header/footer si nécessaire
4. Mettre à jour le sitemap dans `client/src/lib/sitemap.ts`

### Ajouter un Article de Blog

1. Ajouter l'article dans `client/src/data/blogPosts.ts`
2. Ajouter l'image dans `client/public/` (WebP recommandé)
3. L'article sera automatiquement disponible sur `/blog/{slug}`

---

## ⚡ Optimisations Performance

### Bundle JavaScript

**Optimisations appliquées**:

- ✅ **Manual chunks** (vite.config.ts)
  - `recharts`: Graphiques (isolé)
  - `calendar`: react-big-calendar (isolé)
  - `markdown`: Streamdown + syntax highlighting (isolé)

- ✅ **Lazy loading**
  - Chatbot lazy loaded (-23 KB)
  - Pages secondaires lazy loaded
  - Composants lourds en Suspense

- ✅ **Minification**
  - esbuild en production
  - Tree-shaking automatique

**Résultat**: Bundle principal réduit de **804 KB → 755 KB** (-49 KB, -6.1%)

### Images

- ✅ **Formats modernes**: WebP avec fallback PNG
- ✅ **Lazy loading**: `loading="lazy"` sur images below-the-fold
- ✅ **fetchPriority**: `fetchPriority="high"` sur images hero (LCP)
- ✅ **Dimensions explicites**: width/height pour éviter CLS
- ✅ **Compression**: Optimisation qualité/taille

### Fonts

- ✅ **font-display: swap**: Éviter FOIT (Flash Of Invisible Text)
- ✅ **Preload async**: Chargement non-bloquant
- ✅ **Weights optimisés**: 4 weights Inter + 1 weight Playfair (minimum nécessaire)

### CSS

- ✅ **Tailwind CSS 4**: Tree-shaking automatique
- ✅ **Architecture moderne**: @property (CSS Houdini)
- ✅ **Minification**: Production build

### Core Web Vitals

- ✅ **LCP** (Largest Contentful Paint): fetchPriority + gradient CSS hero
- ✅ **CLS** (Cumulative Layout Shift): Dimensions explicites sur toutes les images
- ✅ **FID** (First Input Delay): JavaScript réduit, chatbot lazy loaded
- ✅ **TBT** (Total Blocking Time): Bundle principal réduit de 49 KB

### Resource Hints

- ✅ **Preconnect**: fonts.gstatic.com, googletagmanager.com, manus-analytics.com, api.dicebear.com
- ✅ **DNS-prefetch**: Ressources secondaires

### Analytics

- ✅ **Google Analytics**: defer (non-bloquant)
- ✅ **Manus Analytics**: Léger et privacy-friendly

**Performance Attendue** (après republication):
- 📱 **Mobile**: 55-60 (objectif réaliste)
- 💻 **Desktop**: 90+
- ♿ **Accessibility**: 90
- ✅ **Best Practices**: 95
- 🔍 **SEO**: 100

---

## 🚢 Déploiement

### Plateforme: Manus

Le site est déployé sur la plateforme **Manus** (https://manus.space).

**Processus de déploiement**:

1. Créer un checkpoint via `webdev_save_checkpoint`
2. Cliquer sur le bouton **"Publish"** dans l'interface Management UI
3. Le site est automatiquement déployé sur `https://bilanskill-xxx.manus.space`
4. Configurer le domaine custom `bilancompetence.ai` dans Settings → Domains

### Variables d'Environnement

Toutes les variables d'environnement sont gérées via l'interface **Settings → Secrets** de Manus.

**Secrets automatiquement injectés**:
- `DATABASE_URL`
- `JWT_SECRET`
- `STRIPE_SECRET_KEY`
- `RESEND_API_KEY`
- Etc.

### Base de Données

La base de données PostgreSQL est hébergée sur **Neon** (serverless).

**Connexion**:
- Host: Disponible dans Settings → Database
- SSL: **Obligatoire** (enable SSL dans les clients)
- Connection pooling: Activé

### Domaine Custom

**Configuration DNS**:

```
Type: CNAME
Name: @
Value: bilanskill-xxx.manus.space
```

**SSL/TLS**: Automatiquement géré par Manus (Let's Encrypt)

---

## 📁 Structure du Projet

```
bilancompetence.ai-site/
├── client/                      # Frontend React
│   ├── public/                  # Assets statiques
│   │   ├── logo.svg
│   │   ├── favicon.svg
│   │   ├── qualiopi-logo.webp
│   │   └── qualiopi-logo.png
│   ├── src/
│   │   ├── components/          # Composants réutilisables
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   ├── sections/        # Sections (Hero, Footer, etc.)
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx
│   │   ├── pages/               # Pages de l'application
│   │   │   ├── Home.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── Tests.tsx
│   │   │   ├── TestResults.tsx
│   │   │   ├── Booking.tsx
│   │   │   └── ...
│   │   ├── contexts/            # React contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/               # Custom hooks
│   │   ├── lib/                 # Utilitaires
│   │   │   ├── sitemap.ts
│   │   │   ├── seo.tsx
│   │   │   └── utils.ts
│   │   ├── data/                # Données statiques
│   │   │   ├── blogPosts.ts
│   │   │   ├── testimonials.ts
│   │   │   └── ...
│   │   ├── const.ts             # Constantes (APP_LOGO, APP_TITLE)
│   │   ├── App.tsx              # Routing principal
│   │   ├── main.tsx             # Point d'entrée React
│   │   └── index.css            # Styles globaux + Tailwind
│   └── index.html               # Template HTML
├── server/                      # Backend Node.js
│   ├── routes.ts                # Routes Express
│   ├── auth.ts                  # Authentification
│   ├── storage.ts               # S3 storage helpers
│   └── index.ts                 # Point d'entrée serveur
├── shared/                      # Code partagé client/serveur
│   ├── types.ts                 # Types TypeScript
│   └── const.ts                 # Constantes partagées
├── db/                          # Base de données
│   ├── schema.ts                # Schéma Drizzle
│   └── index.ts                 # Client DB
├── package.json                 # Dépendances npm
├── pnpm-lock.yaml               # Lock file pnpm
├── tsconfig.json                # Configuration TypeScript
├── vite.config.ts               # Configuration Vite
├── drizzle.config.ts            # Configuration Drizzle ORM
├── .gitignore                   # Fichiers ignorés par Git
├── todo.md                      # Suivi des tâches
└── README.md                    # Ce fichier
```

---

## 📊 SEO & Analytics

### SEO

**Optimisations appliquées**:

- ✅ **Meta tags dynamiques** (title, description, keywords)
- ✅ **Open Graph** (Facebook, LinkedIn)
- ✅ **Twitter Cards**
- ✅ **Canonical URLs** (éviter duplicate content)
- ✅ **Sitemap.xml** (29 pages indexées)
- ✅ **Robots.txt**
- ✅ **Schema.org** (Organization, LocalBusiness, Article)
- ✅ **Alt text** sur toutes les images
- ✅ **Semantic HTML** (h1, h2, h3, nav, article, section)
- ✅ **URL structure** (/blog/{slug}, /tests/{type})

**Mots-clés ciblés**:
- Bilan de compétences Alsace
- Reconversion professionnelle Strasbourg
- CPF bilan de compétences
- Qualiopi Alsace
- Intelligence artificielle orientation professionnelle

### Analytics

**Outils utilisés**:

1. **Google Analytics 4**
   - Tracking pageviews
   - Events (CTA clicks, form submissions)
   - Conversions
   - Demographics

2. **Manus Analytics (Umami)**
   - Privacy-friendly
   - RGPD compliant
   - Pas de cookies
   - Statistiques en temps réel

**Événements trackés**:
- Clics CTA "Commencer Mon Bilan"
- Soumissions formulaires (contact, newsletter, booking)
- Téléchargements (si applicable)
- Clics téléphone/email
- Navigation blog

---

## 🐛 Bugs Résolus

### Bug Critique: RangeError sur Pages Blog

**Problème**: Erreur `RangeError: Invalid time value` sur 3 pages blog (reconversion-apres-40-ans, bilan-vs-coaching, soft-skills-2025)

**Cause**: Dates françaises ("5 décembre 2025") non parsables par `new Date()`

**Solution**: Fonction `parseFrenchDate()` dans `BlogPost.tsx` avec 3 niveaux de fallback:
1. Parsing ISO natif (prioritaire)
2. Parsing format français avec regex + mapping mois
3. Date actuelle (fallback ultime)

**Statut**: ✅ Résolu (3/3 pages fonctionnent parfaitement)

---

## 📝 Changelog

### Version 1.0.0 (2025-11-19)

**Fonctionnalités**:
- ✅ Site complet avec 29 pages
- ✅ Blog avec 15+ articles SEO-optimisés
- ✅ Tests interactifs (Personnalité, Compétences, Motivation)
- ✅ Système de réservation avec calendrier
- ✅ Intégration Stripe (test & production)
- ✅ Chatbot IA
- ✅ Responsive design (mobile, tablette, desktop)

**Optimisations**:
- ✅ Bundle JavaScript: 804 KB → 755 KB (-6.1%)
- ✅ Images: Lazy loading + dimensions + fetchPriority
- ✅ Fonts: font-display: swap
- ✅ Core Web Vitals optimisés
- ✅ SEO avancé (sitemap, schema.org, meta tags)

**Bugs Corrigés**:
- ✅ RangeError sur pages blog (dates françaises)

---

## 📄 Licence

**Propriétaire**: NETZ Informatique  
**Copyright**: © 2025 bilancompetence.ai - Tous droits réservés

Ce projet est la propriété exclusive de NETZ Informatique. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.

---

## 📞 Contact

**NETZ Informatique**  
📧 Email: [contact@netzinformatique.fr](mailto:contact@netzinformatique.fr)  
📱 Téléphone: [+33 3 67 31 02 01](tel:+33367310201)  
🌐 Site: [https://bilancompetence.ai](https://bilancompetence.ai)  
📍 Adresse: Alsace, France (Strasbourg, Mulhouse, Colmar)

---

## 🙏 Remerciements

- **Manus Platform** - Hébergement et infrastructure
- **Neon** - Base de données PostgreSQL serverless
- **Vercel** - Inspiration pour les best practices
- **shadcn/ui** - Composants UI accessibles
- **Tailwind Labs** - Framework CSS moderne

---

**Fait avec ❤️ en Alsace, France**
