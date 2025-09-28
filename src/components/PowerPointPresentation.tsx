import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import TitleSlide from "@/components/slides/TitleSlide";
// import DefinitionSlide from "@/components/slides/Definition";
import ProblemSlide from "@/components/slides/ProblemSlide";
import SolutionSlide from "@/components/slides/SolutionSlide";
import HowItWorksSlide from "@/components/slides/HowItWorksSlide";
import BenefitsSlide from "@/components/slides/BenefitsSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import BackgroundAnimadoMatrix from "@/components/BackgroundAnimadoMatrix";
import BackgroundEstatico from "@/components/BackgroundEstatico";

const PowerPointPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  
  const slides = [
    { component: TitleSlide, title: "Task Refinement Agent" },
    // { component: DefinitionSlide, title: "Definição Necessaria" },
    { component: ProblemSlide, title: "O Problema" },
    { component: SolutionSlide, title: "A Solução" },
    { component: HowItWorksSlide, title: "Como Funciona" },
    { component: BenefitsSlide, title: "Benefícios" },
    { component: DemoSlide, title: "Demonstração" },
    { component: ConclusionSlide, title: "Conclusão" }
  ];
  
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);
  
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "Escape") {
      setIsAutoPlay(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const CurrentSlideComponent = slides[currentSlide].component;
  
  return (
    <div className="h-screen flex flex-col bg-background relative overflow-hidden ">
      {/* Header with navigation */}
      <header className="relative z-20 flex items-center justify-between p-4 border-b border-primary/20">
        <div className="flex items-center gap-4">
            <img src="/logo_zenvia.svg" alt="Task Refinement Agent" style={{ height: '2em', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}/>
          <h1 className="text-lg font-monox text-primary matrix-text-glow">
            Task Refinement Agent - Apresentação
          </h1>
          <div
            className="text-sm font-monox"
            style={{ color: "#B983FF" }}
          >
            Slide {currentSlide + 1} de {slides.length}
          </div>

        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="matrix-border"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="matrix-border"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="matrix-border"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Progress bar */}
      <div className="relative z-20 h-1 bg-secondary">
        <div 
          className="h-full bg-primary transition-all duration-300 matrix-glow"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <main className="max-h-screen overflow-y-auto flex-1 relative z-10 p-8 custom-scrollbar">
        {currentSlide === 0 && <BackgroundAnimadoMatrix />}
        <div
          className="max-w-6xl mx-auto"
          style={currentSlide === 0 ? { display: 'contents' } : undefined}
        >
          <CurrentSlideComponent />
        </div>
      </main>
      {currentSlide > 1 && <BackgroundEstatico />}



      {/* Footer with slide indicators */}
      <footer className="relative z-20 flex items-center justify-center p-4 border-t border-primary/20">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary matrix-glow-intense" 
                  : "bg-secondary hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default PowerPointPresentation;