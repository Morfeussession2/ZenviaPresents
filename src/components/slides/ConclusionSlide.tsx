import { CheckCircle, Rocket, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConclusionSlide = () => {
  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Análise N3 e NPS",
      description: "Solução para análise de nível 3 e redução de NPS negativo."
    },
    {
      icon: TrendingUp,
      title: "Refinamento com IA",
      description: "IA automatiza refinamento, cortando reuniões."
    },
    {
      icon: Users,
      title: "Agente por Produto",
      description: "Criar agentes específicos para cada produto."
    },
    {
      icon: Rocket,
      title: "Disponibilidade Automática",
      description: "IA aloca tarefas conforme disponibilidade."
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-8">
          PRÓXIMOS PASSOS E VISÃO DE FUTURO
        </h1>
      </div>

      {/* Key Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {keyPoints.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <Card 
              key={index}
              className="p-8 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-4 rounded-full bg-primary/20 matrix-border mb-4">
                <IconComponent className="w-12 h-12 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-white text-sm">
                {point.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ConclusionSlide;
