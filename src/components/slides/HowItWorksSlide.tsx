import { Zap, FileText, Cpu, CheckCircle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

// Array com propriedades de cada card, fácil de editar/expandir
const diagramCards = [
  {
    icon: Zap,
    title: "Amazon API Gateway",
    color: "text-white",
    top: "70%", left: "-10%",      // posição %
    width: 170, height: 100,
    iconColor: "border-pink-400 bg-[#27113f]/70",
    zIndex: 10,
    transform: "translateY(-50%)",
  },
  {
    icon: Zap,
    title: "Jira Webhook",
    color: "text-white",
    top: "70%", left: "-50%",      // posição %
    width: 170, height: 100,
    iconColor: "border-pink-400 bg-[#27113f]/70",
    zIndex: 10,
    transform: "translateY(-50%)",
  },
  {
    icon: FileText,
    title: "Create Comment",
    color: "text-white",
    top: "0%", left: "50%",
    width: 170, height: 100,
    iconColor: "border-purple-400 bg-[#27113f]/80",
    zIndex: 10,
    transform: "translateX(-50%)",
  },
  {
    icon: FileText,
    title: "Amazon CloudWatch",
    subtitle: "Logs",
    color: "text-white",
    top: "110%", left: "50%",
    width: 170, height: 100,
    iconColor: "border-purple-400 bg-[#27113f]/80",
    zIndex: 10,
    transform: "translateX(-50%)",
  },
  {
    icon: Cpu,
    title: "Lambda Function",
    color: "text-white",
    top: "70%", left: "50%",
    width: 220, height: 110,
    iconColor: "border-purple-400 bg-[#27113f]/80",
    zIndex: 20,
    transform: "translate(-50%,-50%)",
  },
  {
    icon: TrendingUp,
    title: "Claude Sonnet 4",
    color: "text-white",
    top: "70%", left: "110%",
    width: 170, height: 100,
    iconColor: "border-purple-400 bg-[#27113f]/80",
    zIndex: 10,
    transform: "translate(-100%,-50%)",
  },
];

// Parâmetros para ajustar a posição da seta
const arrowPosition1 = {
  left: "-16%",     // ajuste para a posição horizontal desejada
  top: "70%",      // ajuste para a posição vertical desejada
  transform: "translate(-50%, -50%)", // controlando centralização
  zIndex: 30,      // ajuste se quiser sobrepor/ficar abaixo dos cards
};
const arrowPosition2 = {
  left: "25%",     // ajuste para a posição horizontal desejada
  top: "70%",      // ajuste para a posição vertical desejada
  transform: "translate(-50%, -50%)", // controlando centralização
  zIndex: 30,      // ajuste se quiser sobrepor/ficar abaixo dos cards
};
const arrowPosition3 = {
  left: "76%",     // ajuste para a posição horizontal desejada
  top: "70%",      // ajuste para a posição vertical desejada
  transform: "translate(-50%, -50%)", // controlando centralização
  zIndex: 30,      // ajuste se quiser sobrepor/ficar abaixo dos cards
};
const arrowPosition9 = {
  left: "74%",     // ajuste para a posição horizontal desejada
  top: "70%",      // ajuste para a posição vertical desejada
  transform: "translate(-50%, -50%) rotate(-180deg)", // controlando centralização
  zIndex: 30,      // ajuste se quiser sobrepor/ficar abaixo dos cards
};
const arrowPosition4 = {
  left: "50%",     // ajuste para a posição horizontal desejada
  top: "42%",      // ajuste para a posição vertical desejada
  transform: "translate(-50%, -50%) rotate(-90deg)", // controlando centralização
  zIndex: 30,      // ajuste se quiser sobrepor/ficar abaixo dos cards
};
const arrowPosition5 = {
  left: "50%",     // ajuste para a posição horizontal desejada
  top: "99%",      // ajuste para a posição vertical desejada
  transform: "translate(-50%, -50%) rotate(-90deg)", // controlando centralização
  zIndex: 30,      // ajuste se quiser sobrepor/ficar abaixo dos cards
};

const HowItWorksSlide = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold matrix-text-glow font-monox">
          ARQUITETURA DA SOLUÇÃO
        </h1>
      </div>
      <div className="relative mx-auto min-h-[320px] w-[600px]">
        {/* SVG setinha neon ajustável */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-neon-blue animate-pulse"
          style={{
            position: "absolute",
            left: arrowPosition1.left,
            top: arrowPosition1.top,
            transform: arrowPosition1.transform,
            zIndex: arrowPosition1.zIndex
          }}
        >
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFE1" />
              <stop offset="1" stopColor="#8FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M20 40H64M64 40L50 26M64 40L50 54"
            stroke="url(#arrow-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0px 0px 8px #00ffe1aa)"
          />
        </svg>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-neon-blue animate-pulse"
          style={{
            position: "absolute",
            left: arrowPosition2.left,
            top: arrowPosition2.top,
            transform: arrowPosition2.transform,
            zIndex: arrowPosition2.zIndex
          }}
        >
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFE1" />
              <stop offset="1" stopColor="#8FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M20 40H64M64 40L50 26M64 40L50 54"
            stroke="url(#arrow-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0px 0px 8px #00ffe1aa)"
          />
        </svg>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-neon-blue animate-pulse"
          style={{
            position: "absolute",
            left: arrowPosition3.left,
            top: arrowPosition3.top,
            transform: arrowPosition3.transform,
            zIndex: arrowPosition3.zIndex
          }}
        >
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFE1" />
              <stop offset="1" stopColor="#8FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M20 40H64M64 40L50 26M64 40L50 54"
            stroke="url(#arrow-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0px 0px 8px #00ffe1aa)"
          />
        </svg>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-neon-blue animate-pulse"
          style={{
            position: "absolute",
            left: arrowPosition9.left,
            top: arrowPosition9.top,
            transform: arrowPosition9.transform,
            zIndex: arrowPosition9.zIndex
          }}
        >
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFE1" />
              <stop offset="1" stopColor="#8FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M20 40H64M64 40L50 26M64 40L50 54"
            stroke="url(#arrow-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0px 0px 8px #00ffe1aa)"
          />
        </svg>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-neon-blue animate-pulse"
          style={{
            position: "absolute",
            left: arrowPosition4.left,
            top: arrowPosition4.top,
            transform: arrowPosition4.transform,
            zIndex: arrowPosition4.zIndex
          }}
        >
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFE1" />
              <stop offset="1" stopColor="#8FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M20 40H64M64 40L50 26M64 40L50 54"
            stroke="url(#arrow-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0px 0px 8px #00ffe1aa)"
          />
        </svg>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-neon-blue animate-pulse"
          style={{
            position: "absolute",
            left: arrowPosition5.left,
            top: arrowPosition5.top,
            transform: arrowPosition5.transform,
            zIndex: arrowPosition5.zIndex
          }}
        >
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFE1" />
              <stop offset="1" stopColor="#8FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M20 40H64M64 40L50 26M64 40L50 54"
            stroke="url(#arrow-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0px 0px 8px #00ffe1aa)"
          />
        </svg>

        {diagramCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: card.top,
                left: card.left,
                width: card.width,
                height: card.height,
                zIndex: card.zIndex,
                transform: card.transform,
              }}
            >
              <Card className="flex flex-col items-center justify-center rounded-xl shadow matrix-border matrix-glow bg-gradient-to-br from-black/70 via-[#322143]/80 to-[#24223f]/50 border border-white/20 backdrop-blur-lg h-full w-full">
                <div className={`inline-flex p-2 mb-1 rounded-full ${card.iconColor}`}>
                  <IconComponent className={`w-5 h-5 ${card.color}`} />
                </div>
                <h3 className={`text-sm font-bold ${card.color}`}>{card.title}</h3>
                <p className="text-[11px] text-white text-center">{card.subtitle}</p>
                {card.footer && (
                  <>
                    <h4 className="text-xs font-bold text-yellow-300 mt-1">{card.footer}</h4>
                    <p className="text-[11px] text-white text-center">{card.description}</p>
                  </>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorksSlide;
