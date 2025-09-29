import { UserCheck, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const AutonomySlide = () => {
  const topics = [
    {
      icon: UserCheck,
      title: "Mínima Interferência Humana",
      description: "Processos automatizados que reduzem ao máximo a necessidade de intervenção manual.",
      color: "text-green-500"
    },
    {
      icon: Code,
      title: "Refinamento Técnico Automático",
      description: "Interpretação autônoma de tasks para gerar refinamentos técnicos precisos e imediatos.",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox">
          AUTONOMIA E REFINAMENTO TÉCNICO
        </h1>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {topics.map((topic, index) => {
          const IconComponent = topic.icon;
          return (
            <Card 
              key={index}
              className="p-8 matrix-border matrix-glow hover:matrix-glow-intense transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl animate-matrix-fade flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 rounded-full bg-secondary/30 matrix-border mb-4">
                <IconComponent className={`w-12 h-12 ${topic.color}`} />
              </div>
              <h3 className="text-3xl font-semibold text-foreground mb-6">
                {topic.title}
              </h3>
              <p className="text-white text-xl">
                {topic.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AutonomySlide;