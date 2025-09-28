import { Brain, Zap, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const DefinitionSlide = () => {
  const features = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "IA analisa automaticamente descrições de tarefas",
      color: "text-white-500"
    },
    {
      icon: Zap,
      title: "Análise em Tempo Real",
      description: "Feedback instantâneo durante a criação da tarefa",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      title: "Critérios Específicos",
      description: "Verifica objetivos, contexto e critérios de aceitação",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Sugere melhorias antes da tarefa entrar em desenvolvimento",
      color: "text-purple-600"
    }
  ];

  return (
      <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
          Definições Necessárias
        </h1>
        <p className="text-2xl text-foreground max-w-4xl mx-auto">
          Task Refinement Agent: Análise inteligente inspirada no universo Matrix
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={index}
              className="p-6 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500
                bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/30 matrix-border">
                  <IconComponent className={`w-10 h-10 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="leading-relaxed text-[#fff]">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DefinitionSlide;
