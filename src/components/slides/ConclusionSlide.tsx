import { CheckCircle, Rocket, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConclusionSlide = () => {
  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Problema Solucionado",
      description: "Análise automatizada de qualidade de tarefas"
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "80% menos tempo, 65% menos bugs"
    },
    {
      icon: Users,
      title: "Equipes Alinhadas",
      description: "Comunicação clara e objetivos bem definidos"
    },
    {
      icon: Rocket,
      title: "Pronto para Usar",
      description: "Implementação imediata, sem complexidade"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
          CONCLUSÃO
        </h1>
        <p className="text-2xl text-foreground max-w-4xl mx-auto">
          Task Refinement Agent: O futuro da gestão de projetos chegou
        </p>
      </div>

      {/* Key Points */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {keyPoints.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <Card 
              key={index}
              className="p-6 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20 matrix-border">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-white text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <Card className="inline-block p-8 matrix-border matrix-glow-intense bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
          <h2 className="text-3xl font-bold text-primary matrix-text-glow font-monox mb-4">
            EXPERIMENTE AGORA!
          </h2>
          <p className="text-lg text-white mb-6">
            Revolucione sua gestão de projetos hoje mesmo
          </p>
          
          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-monox matrix-glow-intense px-8"
            >
              🚀 Começar Agora
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="matrix-border font-monox px-8"
            >
              📋 Ver Demo
            </Button>
          </div>
        </Card>
      </div>

      {/* Footer Quote */}
      
    </div>
  );
};

export default ConclusionSlide;
