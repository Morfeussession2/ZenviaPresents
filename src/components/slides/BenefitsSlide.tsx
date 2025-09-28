import { Clock, TrendingUp, Users, Target, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const BenefitsSlide = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      metric: "80%",
      description: "Redução no tempo de revisão manual de tarefas",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Melhoria na Qualidade",
      metric: "65%",
      description: "Redução de bugs causados por tarefas mal definidas",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Alinhamento da Equipe",
      metric: "90%",
      description: "Melhoria na compreensão das tarefas pela equipe",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Precisão",
      metric: "95%",
      description: "Acurácia na identificação de problemas",
      color: "text-primary"
    }
  ];

  const impacts = [
    { label: "Projetos Analisados", value: "10.000+", icon: Shield },
    { label: "Horas Economizadas", value: "5.000h", icon: Clock },
    { label: "Bugs Evitados", value: "2.500", icon: Zap }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
          BENEFÍCIOS
        </h1>
        <p className="text-2xl text-foreground">
          Resultados mensuráveis em produtividade e qualidade
        </p>
      </div>

      {/* Main Benefits */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <Card 
              key={index}
              className="p-6 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/30 matrix-border">
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary matrix-text-glow font-monox">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Impact Statistics */}
      

      
    </div>
  );
};

export default BenefitsSlide;
