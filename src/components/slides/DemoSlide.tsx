import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const DemoSlide = () => {
  const [demoText, setDemoText] = useState("Como usuário administrador, eu quero poder criar novos usuários no sistema");
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleDemo = () => {
    setShowAnalysis(true);
  };

  // Simulate analysis
  const analysis = {
    criteria: [
      { name: "Objetivo", status: "Detectado", color: "bg-primary" },
      { name: "Critérios de Aceitação", status: "Ausente", color: "bg-destructive" },
      { name: "Contexto", status: "Parcial", color: "bg-orange-500" },
      { name: "Dependências", status: "Ausente", color: "bg-destructive" }
    ],
    score: 2,
    suggestions: [
      "Adicione critérios de aceite específicos",
      "Inclua contexto sobre tipos de usuários",
      "Defina permissões necessárias"
    ]
  };

  return (
    <div className="h-full flex flex-col justify-center space-y-6">
      
      <div className="text-center mb-4">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
          DEMONSTRAÇÃO
        </h1>
        <p className="text-xl text-foreground">
          Veja a Task Refinement Agent em ação
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto h-[500px]">
        {/* Input Section */}
        <Card className="p-6 matrix-border matrix-glow bg-gradient-to-br from-secondary/30 to-transparent">
          <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
              <h2 className="text-lg font-semibold text-primary font-monox">
                Input: Descrição da Tarefa
              </h2>
            </div>
            
            <Textarea
              value={demoText}
              onChange={(e) => setDemoText(e.target.value)}
              className="flex-1 bg-secondary/50 border-primary/30 text-foreground font-monox text-sm"
              placeholder="Digite a descrição da sua tarefa aqui..."
            />
            
            <Button 
              onClick={handleDemo}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-monox matrix-glow"
            >
              🔍 Analisar Tarefa
            </Button>
          </div>
        </Card>

        {/* Output Section */}
        <Card className="p-6 matrix-border matrix-glow bg-gradient-to-br from-primary/10 to-transparent">
          <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
              <h2 className="text-lg font-semibold text-primary font-monox">
                Output: Análise Matrix
              </h2>
            </div>

            {showAnalysis ? (
              <div className="space-y-4 flex-1">
                {/* Criteria Analysis */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-primary">🟢 Critérios Analisados:</h3>
                  {analysis.criteria.map((criterion, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-white">- {criterion.name}:</span>
                      <Badge className={`${criterion.color} text-white text-xs matrix-glow`}>
                        {criterion.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Score */}
                <div className="p-3 rounded-lg matrix-border bg-secondary/30 text-center">
                  <div className="text-lg font-bold text-orange-500">
                    🔺 Precisa Melhorar
                  </div>
                  <div className="text-xs text-white font-monox">
                    Pontuação: {analysis.score}/4
                  </div>
                </div>

                {/* Suggestions */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-primary">Sugestões da IA:</h3>
                  {analysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2" />
                      <span className="text-white">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-white text-center font-monox">
                  Aguardando análise...<br />
                  <span className="animate-pulse">●●●</span>
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DemoSlide;
