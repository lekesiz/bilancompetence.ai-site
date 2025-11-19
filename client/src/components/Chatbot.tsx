import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface FAQEntry {
  keywords: string[];
  responses: string[];
  followUp?: string;
}

const ENHANCED_FAQ: FAQEntry[] = [
  {
    keywords: ["bonjour", "salut", "hello", "hey", "coucou"],
    responses: [
      "Bonjour ! 👋 Ravi de vous rencontrer. Je suis là pour répondre à toutes vos questions sur le bilan de compétences. Comment puis-je vous aider ?",
      "Bonjour ! 😊 Bienvenue ! N'hésitez pas à me poser vos questions sur notre bilan de compétences enrichi par l'IA.",
      "Salut ! 👋 Je suis votre assistant virtuel. Que souhaitez-vous savoir sur notre accompagnement professionnel ?",
    ],
  },
  {
    keywords: ["qu'est-ce", "c'est quoi", "définition", "expliquer", "bilan de compétences"],
    responses: [
      "Un bilan de compétences est un accompagnement personnalisé qui vous permet d'analyser vos compétences professionnelles et personnelles, vos aptitudes et vos motivations. Il vous aide à définir un projet professionnel ou un projet de formation adapté à votre profil.",
      "Le bilan de compétences est un processus d'accompagnement sur mesure qui vous permet de faire le point sur votre parcours, identifier vos forces et construire un projet professionnel cohérent avec vos aspirations.",
      "C'est une démarche structurée en 3 phases (analyse, investigation, conclusion) qui vous aide à mieux vous connaître professionnellement et à définir votre projet de carrière ou de formation.",
    ],
    followUp: "Souhaitez-vous en savoir plus sur notre méthodologie en 3 phases ?",
  },
  {
    keywords: ["prix", "coût", "tarif", "combien", "€", "euro"],
    responses: [
      "Nos tarifs varient selon la formule choisie :\n• Essentiel : 990€ (12h d'accompagnement)\n• Avancé : 1490€ (18h + outils IA)\n• Premium : 2490€ (24h + coaching personnalisé)\n\nBonne nouvelle : le bilan peut être financé à 100% par votre CPF !",
      "Nous proposons 3 formules adaptées à vos besoins : Essentiel (990€), Avancé (1490€) et Premium (2490€). La bonne nouvelle ? Vous pouvez utiliser votre CPF pour financer intégralement votre bilan sans débourser un centime.",
      "Le tarif dépend de la formule : de 990€ à 2490€. Mais rassurez-vous, le bilan de compétences est éligible au CPF, vous pouvez donc le financer avec vos droits à la formation !",
    ],
    followUp: "Voulez-vous savoir comment utiliser votre CPF pour financer votre bilan ?",
  },
  {
    keywords: ["cpf", "compte personnel", "formation", "financement", "financer", "payer"],
    responses: [
      "Excellente question ! 🎯 Le bilan de compétences est 100% éligible au CPF. Vous pouvez utiliser vos droits formation pour financer intégralement votre bilan sans avancer d'argent. La démarche est simple : vous créez votre dossier sur MonCompteFormation.gouv.fr et nous vous accompagnons dans toutes les étapes.",
      "Oui, absolument ! Le CPF (Compte Personnel de Formation) peut financer votre bilan à 100%. Chaque salarié cumule environ 500€ par an (plafonné à 5000€). Si vous travaillez depuis quelques années, vous avez probablement assez de droits pour financer votre bilan sans rien payer.",
      "Le CPF est LA solution pour financer votre bilan sans frais ! Connectez-vous sur MonCompteFormation.gouv.fr pour vérifier votre solde. En moyenne, nos clients ont entre 1500€ et 3000€ de droits disponibles, largement suffisant pour nos formules.",
    ],
    followUp: "Besoin d'aide pour vérifier votre solde CPF ou créer votre dossier ?",
  },
  {
    keywords: ["durée", "temps", "combien de temps", "long", "heures"],
    responses: [
      "Un bilan de compétences dure généralement entre 12 et 24 heures réparties sur 2 à 3 mois, selon la formule choisie. C'est un rythme flexible qui s'adapte à votre emploi du temps : séances d'1h30 à 2h par semaine, en présentiel ou en visio.",
      "La durée varie selon votre formule :\n• Essentiel : 12h sur 2 mois\n• Avancé : 18h sur 2-3 mois\n• Premium : 24h sur 3 mois\n\nVous avancez à votre rythme, avec des séances hebdomadaires adaptées à vos disponibilités.",
      "Comptez entre 2 et 3 mois pour un bilan complet, avec des séances régulières d'1h30 à 2h. C'est un investissement temps raisonnable pour un impact majeur sur votre carrière ! Et vous choisissez vos créneaux : matin, midi, soir, ou weekend.",
    ],
  },
  {
    keywords: ["qualiopi", "certification", "certifié", "qualité", "agrément"],
    responses: [
      "Oui, nous sommes certifiés Qualiopi ! 🏆 Cette certification nationale atteste de la qualité de nos processus et garantit que vous pouvez utiliser votre CPF pour financer votre bilan. C'est un gage de sérieux et de professionnalisme reconnu par l'État.",
      "Absolument ! Nous sommes organisme certifié Qualiopi (certificat N° FP 2022/0076-4) pour les catégories 'Actions de Formation' et 'Bilans de compétences'. Cette certification est obligatoire pour mobiliser votre CPF et garantit un accompagnement de qualité.",
      "Oui, nous avons la certification Qualiopi, le label qualité national des organismes de formation. Cela signifie que nos processus sont audités régulièrement et que vous pouvez financer votre bilan avec votre CPF en toute confiance.",
    ],
  },
  {
    keywords: ["ia", "intelligence artificielle", "technologie", "innovation", "outil"],
    responses: [
      "Notre approche unique combine l'expertise humaine de consultants certifiés avec des outils d'IA de pointe ! 🤖 L'IA enrichit l'analyse de vos compétences, identifie des opportunités de carrière auxquelles vous n'auriez pas pensé, et personnalise votre accompagnement. Mais c'est toujours un humain qui vous accompagne et prend les décisions avec vous.",
      "Nous utilisons l'IA comme un outil d'aide à la décision : analyse sémantique de votre CV, matching avec des milliers d'offres d'emploi, identification de compétences transférables, suggestions de formations... Mais votre conseiller humain reste au cœur du processus pour vous guider et personnaliser votre projet.",
      "L'IA nous permet d'aller plus loin dans l'analyse : cartographie de vos compétences, exploration de métiers émergents, simulation de parcours professionnels... C'est un accélérateur qui enrichit votre réflexion, tout en gardant l'humain au centre de l'accompagnement.",
    ],
    followUp: "Curieux de voir comment l'IA peut booster votre bilan ? Demandez une démo !",
  },
  {
    keywords: ["alsace", "strasbourg", "mulhouse", "colmar", "haguenau", "région", "local"],
    responses: [
      "Nous sommes basés à Haguenau (67) et connaissons parfaitement le marché de l'emploi alsacien ! 🏔️ Nous accompagnons des professionnels à Strasbourg, Mulhouse, Colmar, et dans toute la région. Notre expertise locale nous permet de vous orienter vers les secteurs porteurs et les entreprises qui recrutent en Alsace.",
      "Oui, nous sommes implantés en Alsace depuis plusieurs années. Notre connaissance du tissu économique local (industrie, services, santé, digital...) et nos partenariats avec les entreprises régionales sont un vrai plus pour votre projet professionnel en Alsace.",
      "Basés à Haguenau, nous intervenons dans tout le Grand Est, avec une expertise particulière sur l'Alsace. Que vous soyez à Strasbourg, Mulhouse, Colmar ou ailleurs, nous connaissons les spécificités du marché local et les opportunités de carrière dans la région.",
    ],
  },
  {
    keywords: ["contact", "téléphone", "email", "rendez-vous", "appeler", "écrire"],
    responses: [
      "Vous pouvez nous contacter facilement :\n📞 Téléphone : +33 3 67 31 02 01\n📧 Email : contact@netzinformatique.fr\n📅 Ou réservez directement un entretien gratuit sur notre page Rendez-vous\n\nNous vous répondons sous 24h !",
      "Pour nous joindre :\n• Par téléphone : +33 3 67 31 02 01 (du lundi au vendredi, 9h-18h)\n• Par email : contact@netzinformatique.fr\n• Via notre formulaire de contact\n\nNous proposons un premier échange gratuit de 30 minutes pour discuter de votre projet !",
      "N'hésitez pas à nous appeler au +33 3 67 31 02 01 ou à nous écrire à contact@netzinformatique.fr. Vous préférez prendre rendez-vous directement ? Utilisez notre calendrier en ligne pour choisir votre créneau !",
    ],
  },
  {
    keywords: ["reconversion", "changer", "métier", "carrière", "orientation"],
    responses: [
      "Le bilan de compétences est L'OUTIL idéal pour préparer une reconversion professionnelle ! 🚀 Il vous aide à identifier vos compétences transférables, explorer de nouvelles pistes métiers, valider la faisabilité de votre projet et construire un plan d'action concret (formation, réseau, candidatures...).",
      "Vous pensez à une reconversion ? Vous êtes au bon endroit ! Notre bilan vous permet de :\n✓ Faire le point sur vos motivations réelles\n✓ Identifier vos compétences réutilisables\n✓ Explorer des métiers qui vous correspondent\n✓ Construire un plan de transition sécurisé\n\n85% de nos clients en reconversion réussissent leur transition !",
      "La reconversion est une aventure passionnante mais qui demande de la préparation. Notre bilan vous accompagne pas à pas : analyse de vos envies, exploration de pistes réalistes, validation terrain (enquêtes métiers, immersions...), et plan d'action détaillé pour réussir votre transition.",
    ],
    followUp: "Souhaitez-vous télécharger notre guide gratuit 'Réussir sa reconversion après 40 ans' ?",
  },
  {
    keywords: ["témoignage", "avis", "retour", "expérience", "satisfaction", "client"],
    responses: [
      "Nos clients parlent mieux que nous ! 😊 95% de satisfaction, avec des retours comme :\n• 'Le bilan m'a permis de clarifier mon projet et de passer à l'action'\n• 'L'approche IA est vraiment innovante'\n• 'Mon conseiller a été à l'écoute et m'a challengé positivement'\n\nConsultez notre page Témoignages pour en lire plus !",
      "Nous sommes fiers de nos 95% de satisfaction ! Nos clients apprécient particulièrement :\n✓ L'écoute et la bienveillance des conseillers\n✓ L'approche innovante avec l'IA\n✓ Le plan d'action concret et actionnable\n✓ Le suivi post-bilan\n\nDécouvrez leurs témoignages sur notre site !",
      "Nos clients témoignent régulièrement de l'impact du bilan sur leur carrière : reconversions réussies, promotions obtenues, projets de création d'entreprise concrétisés... Consultez la page Témoignages pour lire leurs histoires inspirantes !",
    ],
  },
  {
    keywords: ["merci", "super", "parfait", "génial", "top", "ok"],
    responses: [
      "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider !",
      "Ravi d'avoir pu vous aider ! Si vous avez besoin de plus d'informations, je reste à votre disposition.",
      "Content que ça vous aide ! Pour aller plus loin, n'hésitez pas à nous contacter au +33 3 67 31 02 01 pour un échange gratuit.",
    ],
  },
  {
    keywords: ["test", "évaluation", "questionnaire", "gratuit"],
    responses: [
      "Nous proposons des tests gratuits en ligne pour vous aider à mieux vous connaître ! 🎯\n• Test de personnalité professionnelle\n• Test de compétences\n• Test de motivation\n\nRésultats instantanés et conseils personnalisés. Rendez-vous sur notre page Tests !",
      "Bonne idée de commencer par un test ! Nous avons 3 tests gratuits qui vous donnent un premier aperçu :\n✓ Personnalité (type MBTI)\n✓ Compétences clés\n✓ Motivations professionnelles\n\nC'est un bon point de départ avant un bilan complet !",
    ],
  },
  {
    keywords: ["parrainage", "réduction", "promo", "code", "offre"],
    responses: [
      "Nous avons un programme de parrainage avantageux ! 🎁\n• Parrainez un ami : vous gagnez 50€\n• Votre filleul économise 50€ sur son bilan\n• Parrainages illimités !\n\nConsultez notre page Parrainage pour obtenir votre code promo personnel.",
      "Profitez de notre programme de parrainage : 50€ pour vous, 50€ pour votre filleul ! C'est gagnant-gagnant. Rendez-vous sur la page Parrainage pour générer votre code et inviter vos proches.",
    ],
  },
];

function findBestMatch(userMessage: string, conversationHistory: Message[]): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check if user is greeting
  const isGreeting = conversationHistory.length <= 2 && 
    (lowerMessage.includes("bonjour") || lowerMessage.includes("salut") || lowerMessage.includes("hello"));
  
  // Find matching FAQ entry
  for (const faq of ENHANCED_FAQ) {
    const hasMatch = faq.keywords.some(keyword => lowerMessage.includes(keyword));
    if (hasMatch) {
      // Return a random response variant for variety
      const responses = faq.responses;
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Add follow-up if exists and not a greeting
      if (faq.followUp && !isGreeting && Math.random() > 0.5) {
        return `${randomResponse}\n\n${faq.followUp}`;
      }
      
      return randomResponse;
    }
  }
  
  // Context-aware default responses
  const defaultResponses = [
    "Je ne suis pas sûr d'avoir bien compris votre question. Vous pouvez me demander des informations sur :\n• Les tarifs et le financement CPF\n• La durée et le déroulement du bilan\n• Notre certification Qualiopi\n• Notre approche avec l'IA\n• Comment nous contacter\n\nOu appelez-nous au +33 3 67 31 02 01 pour une réponse personnalisée !",
    "Hmm, je n'ai pas de réponse précise à cette question. Mais je peux vous renseigner sur nos tarifs, le CPF, notre méthodologie, ou comment prendre rendez-vous. Que souhaitez-vous savoir ?",
    "Je ne trouve pas d'information sur ce sujet spécifique. Pour une réponse détaillée, je vous invite à nous contacter directement au +33 3 67 31 02 01 ou à contact@netzinformatique.fr. Nous serons ravis de vous aider !",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Bonjour ! 👋 Je suis votre assistant virtuel. Je peux répondre à vos questions sur le bilan de compétences, les tarifs, le CPF, notre approche IA, et bien plus encore. Comment puis-je vous aider ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time (variable for realism)
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: findBestMatch(inputValue, messages),
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[380px] flex-col rounded-lg border bg-card card-hover-subtle shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-lg bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Assistant IA</h3>
                <p className="text-xs opacity-90">En ligne • Répond en quelques secondes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-primary-foreground/20"
              aria-label="Fermer le chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="mt-1 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="max-w-[75%] rounded-lg bg-muted px-4 py-2">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground text-center">
              💡 Essayez : "Combien coûte un bilan ?" ou "Comment utiliser mon CPF ?"
            </p>
          </div>
        </div>
      )}
    </>
  );
}
