import { useEffect, useState } from "react";
import { Brain, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    // icon: Brain,
    title: "Monitora issues criadas no Jira via webhooks",
    color: "text-destructive",
  },
  {
    // icon: Zap,
    title: "Estima recursos necessários",
    description: "Nº de desenvolvedores e sprints",
    color: "text-destructive",
  },
  {
    // icon: Target,
    title: "Identifica aplicações impactadas dentro da arquitetura do projeto",
    color: "text-destructive",
  },
  {
    title: "Retorna feedback estruturado instantâneo diretamente no comentário do Jira",
    color: "text-destructive",
  },
];

const commentText = 
`
 IMPACTO: ads-bff e ads-centralizer (rotas de configuração CustomData)
RECURSOS: 2 devs (1 backend, 1 frontend) - 1-2 sprints
RISCOS: 
Definição de requisitos (quando duplicar é necessário)
Impacto em fluxos existentes de migração
Possível refatoração da lógica de permissões de edição
RECOMENDAÇÃO: Priorizar levantamento de requisitos com stakeholders antes do desenvolvimento`;

const SolutionSlide = () => {
  const safeText = commentText.trimEnd(); // agora use safeText abaixo!
  const [typed, setTyped] = useState("");
  useEffect(() => {
    setTyped(""); // reset ao montar
    let current = 0;
    const interval = setInterval(() => {
      if (current < safeText.length) {
        setTyped((prev) => prev + safeText[current]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);
  // ...restante do componente
  return (
    <div className="h-full flex flex-col justify-center space-y-10 px-4">
      <div className="text-center mb-4">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox">
          A SOLUÇÃO 
        </h1>
      </div>
      <div className="flex flex-row gap-8 max-w-7xl mx-auto w-full">
        {/* Cards da esquerda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`
                  p-4 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-300
                  bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-sm
                  min-h-[180px] flex flex-col justify-center
                `}
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <div className="flex items-start gap-4">
                  {feature.icon && (
                    <div className="p-3 rounded-lg bg-destructive/20 matrix-border">
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="mb-3 text-[#fff]">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Seta estilizada */}
        <div className="hidden lg:flex items-center justify-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-neon-blue animate-pulse"
          >
            <defs>
              <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FFE1"/>
                <stop offset="1" stopColor="#8FE8FF"/>
              </linearGradient>
            </defs>
            <path d="M20 40H64M64 40L50 26M64 40L50 54" 
              stroke="url(#arrow-gradient)" 
              strokeWidth="7" 
              strokeLinecap="round"
              strokeLinejoin="round" 
              filter="drop-shadow(0px 0px 8px #00ffe1aa)" 
            />
          </svg>
        </div>

        {/* Card do comentário do Jira */}
        <div className="flex flex-col justify-center flex-shrink-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <Card
            className="
              min-h-[340px] flex flex-col justify-start items-start bg-gradient-to-br from-black/80 via-[#18202b]/90 to-[#23233f]/70
              border-2 border-cyan-500 hover:border-pink-400 hover:shadow-[0_0_32px_0_#0fffc080]
              rounded-2xl backdrop-blur-xl transition-all duration-500 matrix-glow animate-matrix-fade px-6 py-5
              relative overflow-hidden
            "
            style={{ animationDelay: `${features.length * 0.22}s` }}
          >
            <div className="flex items-center mb-2">
              <img
                src="/jira-1.svg"
                alt="Jira Logo"
                className="w-7 h-7 text-cyan-400 mr-2"
              />
              <span className="text-base text-cyan-300 font-semibold">Comentário do Jira</span>
            </div>
            <div className="bg-[#0b141f]/80 rounded-xl p-4 w-full border border-cyan-900 shadow-inner min-h-[120px]">
              <span className="text-[#e9faff] font-mono whitespace-pre-line">
                {typed}
                <span className="animate-pulse blink">|</span>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;
