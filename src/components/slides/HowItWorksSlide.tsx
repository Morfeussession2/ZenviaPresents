import { ArrowRight, FileText, Cpu, CheckCircle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorksSlide = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Entrada",
      description: "Usuário cola descrição da tarefa Jira",
      color: "text-blue-500"
    },
    {
      icon: Cpu,
      title: "2. Processamento",
      description: "IA analisa estrutura e conteúdo",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "3. Avaliação",
      description: "Sistema verifica critérios essenciais pré definidos",
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "4. Resultado",
      description: "Feedback instantâneo com sugestões e possiveis testes",
      color: "text-purple-600"
    }
  ];

  const criteria = [
    { name: "Objetivo da tarefa", description: "Verifica se há objetivo claro definido" },
    { name: "Clareza da descrição", description: "Mensura se a descrição está clara, livre de ambiguidades" },
    { name: "Contexto ", description: "Analisa se há contexto suficiente" },
    { name: "Comportamento atual esperado", description: "Analisa se o comportamento atual e desejado estão bem definidos" },
    { name: "Sugestão de teste", description: " Identifica e sugere possíveis testes baseando-se na descrição" },
    { name: "Granularidade e estimativa", description: "Examina divisão em etapas e estimativas realistas" },
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
          COMO FUNCIONA
        </h1>
        <p className="text-xl text-foreground">
          Processo de análise em 4 etapas simples
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="flex items-center">
              <Card className="p-4 matrix-border matrix-glow bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
                <div className="text-center space-y-2">
                  <div className="inline-flex p-3 rounded-full bg-secondary/50 matrix-border">
                    <IconComponent className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white max-w-[120px]">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-primary mx-3 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* Analysis Criteria */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-primary mb-6 font-monox">
          Critérios de Análise
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {criteria.map((criterion, index) => (
            <Card 
              key={index}
              className="p-4 matrix-border bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {criterion.name}
                  </h4>
                  <p className="text-xs text-white">
                    {criterion.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default HowItWorksSlide;
