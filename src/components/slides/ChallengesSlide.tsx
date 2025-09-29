import { Cloud, Zap, BookOpen, Clock, AlertTriangle, RefreshCcw } from "lucide-react";
import { Card } from "@/components/ui/card";

const ChallengesSlide = () => {
  const challenges = [
    {
      icon: Cloud,
      title: "Configuração do Amazon Bedrock",
      description: "Configurar agentes avançados de IA garantindo escalabilidade e eficiência.",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Entrega rápida com impacto real",
      description: "Garantir que as soluções implementadas gerem valor imediato para os usuários.",
      color: "text-yellow-500"
    }
  ];

  const learnings = [
    {
      icon: BookOpen,
      title: "Clareza no fluxo é essencial",
      description: "Definir claramente os passos do processo para evitar ambiguidades.",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Monitoramento salva tempo",
      description: "Possibilitar o acompanhamento do processo a partir de logs estruturados",
      color: "text-primary"
    },
    {
      icon: RefreshCcw,
      title: "Tratamento de erros e retries",
      description: "Implementar mecanismos robustos para lidar com falhas e garantir resiliência.",
      color: "text-red-500"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary matrix-text-glow font-monox">
          DESAFIOS
        </h1>
        {/* <p className="text-2xl text-foreground">
          Lições valiosas e obstáculos enfrentados
        </p> */}
      </div>

      {/* Challenges */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {challenges.map((challenge, index) => {
          const IconComponent = challenge.icon;
          return (
            <Card 
              key={index}
              className="p-6 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/30 matrix-border">
                  <IconComponent className={`w-8 h-8 ${challenge.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {challenge.title}
                </h3>
                <p className="text-white text-sm">
                  {challenge.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-primary matrix-text-glow font-monox">
          APRENDIZADOS
        </h1>
      </div>

      {/* Learnings */}
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {learnings.map((learning, index) => {
          const IconComponent = learning.icon;
          return (
            <Card 
              key={index}
              className="p-6 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/30 matrix-border">
                  <IconComponent className={`w-8 h-8 ${learning.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {learning.title}
                </h3>
                <p className="text-white text-sm">
                  {learning.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengesSlide;