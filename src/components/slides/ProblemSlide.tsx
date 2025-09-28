import { AlertTriangle, Clock, Bug, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Videobg from "@/components/Videobg.tsx";

const ProblemSlide = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Tarefas mal definidas",
      description: "Descrições vagas levam a interpretações diferentes e retrabalho.",
      // impact: "40% dos bugs"
    },
    {
      icon: Clock,
      title: "Perda de tempo",
      description: "Múltiplas reuniões de refinamento consomem horas preciosas da equipe.",
      // impact: "8h/semana"
    },
    {
      icon: Bug,
      title: "Critérios Ausentes",
      description: "Falta de critérios e objetivos claros gera ambiguidade.",
      // impact: "60% das tarefas"
    },
    {
      icon: Users,
      title: "Desalinhamento",
      description: "Equipes não compreendem o contexto completo das demandas.",
      // impact: "30% de retrabalho"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center relative">
      {/* Video segue fixo no fundo */}
      <Videobg />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
            O PROBLEMA
          </h1>
          <p className="text-2xl text-foreground max-w-4xl mx-auto">
            Estamos automatizando o desafio do discovery
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card
                key={index}
                className="p-4 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-300
                  bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/20 matrix-border">
                    <IconComponent className="w-8 h-8 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="mb-3 text-[#fff]">
                      {problem.description}
                    </p>
                    {problem.impact && (<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 matrix-border">
                        <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                        <span className="text-sm font-monox text-destructive">
                          {problem.impact}
                        </span>
                      </div>)}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <p className="text-2xl text-foreground max-w-4xl mx-auto">Treinado para conhecer o escopo de cada projeto que o webhook for cadastrado</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
