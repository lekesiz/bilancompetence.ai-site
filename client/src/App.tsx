import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
// Lazy load Chatbot (not critical for initial render)
const Chatbot = lazy(() => import("./components/Chatbot").then(module => ({ default: module.Chatbot })));
import { Loader2 } from "lucide-react";

// Eager load critical pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy load secondary pages for better performance
const BilanDefinition = lazy(() => import("./pages/BilanDefinition"));
const ApprocheIA = lazy(() => import("./pages/ApprocheIA"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const FinancementCPF = lazy(() => import("./pages/FinancementCPF"));
const Tarifs = lazy(() => import("./pages/Tarifs"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const CGV = lazy(() => import("./pages/CGV"));
const Methodologie = lazy(() => import("./pages/Methodologie"));
const Recherche = lazy(() => import("./pages/Recherche"));
const ExpertiseAlsace = lazy(() => import("./pages/ExpertiseAlsace"));
const AutresAides = lazy(() => import("./pages/AutresAides"));
const Merci = lazy(() => import("./pages/Merci"));
const Temoignages = lazy(() => import("./pages/Temoignages"));
const APropos = lazy(() => import("./pages/APropos"));
const Booking = lazy(() => import("./pages/Booking"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Admin = lazy(() => import("./pages/Admin"));
const Tests = lazy(() => import("./pages/Tests"));
const Parrainage = lazy(() => import("./pages/Parrainage"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bilan-de-competences/definition"} component={BilanDefinition} />
      <Route path={"/bilan-de-competences/approche-ia"} component={ApprocheIA} />
        <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path={"/financement/cpf"} component={FinancementCPF} />
      <Route path={"/financement/tarifs"} component={Tarifs} />
      <Route path={"/mentions-legales"} component={MentionsLegales} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/confidentialite"} component={Confidentialite} />
      <Route path={"/cgv"} component={CGV} />
      <Route path={"/methodologie"} component={Methodologie} />
      <Route path={"/bilan-de-competences/recherche"} component={Recherche} />
      <Route path={"/expertise-alsace"} component={ExpertiseAlsace} />
      <Route path={"/financement/autres-aides"} component={AutresAides} />
      <Route path={"/merci"} component={Merci} />
       <Route path="/temoignages" component={Temoignages} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/rendez-vous" component={Booking} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/admin" component={Admin} />
      <Route path="/tests" component={Tests} />
      <Route path="/parrainage" component={Parrainage} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >

        <TooltipProvider>
          <Toaster />
          <Header />
          <Router />
          <Footer />
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
