import { useState, useEffect } from "react";

const TitleSlide = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Task Refinement Agent";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
      <div className="relative">
        <h1 className="text-8xl font-bold text-primary matrix-text-glow font-monox tracking-wider mb-4">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent blur-2xl -z-10" />
      </div>
      
      <div className="space-y-6 max-w-4xl">
        <h2 className="text-3xl text-foreground font-semibold">
          Traduzindo o refinamento em código
        </h2>
        <p>by <em>Taskrunnerz</em></p>
        
        <div
            className="text-lg font-monox"
            style={{ color: "#B983FF" }}
          >
          <p>Pedro Silva • João Silva • Guilherme Oliveira • Vyctor Silva</p>
        </div>
        
        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 px-6 py-3 rounded-lg matrix-border matrix-gradient">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-primary font-monox">Eficiência técnica</span>
          </div>
          
          <div className="flex items-center gap-2 px-6 py-3 rounded-lg matrix-border matrix-gradient">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-primary font-monox">Visão integrada</span>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ color: "#B983FF" }}>
        <div className="text-sm font-monox"
            style={{ color: "#B983FF" }}>
          Bem-vindo ao futuro da gestão de tarefas
        </div>
      </div> */}
    </div>
  );
};

export default TitleSlide;