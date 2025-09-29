import React from "react";
import { Clock, Users, AlertTriangle, CheckCircle, BarChart } from "lucide-react";

const ExpectationsSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary matrix-text-glow font-monox mb-4">
          EXPECTATIVA DE GANHO
        </h1>
        <p className="text-xl text-foreground">
          Comparação entre o cenário atual e o novo cenário com Task Refinement Agent
        </p>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Current Pain Points */}
        <div className="p-8 bg-white/10 backdrop-blur-lg border border-yellow-500 rounded-xl matrix-border matrix-glow flex flex-col items-center text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Dores (sem Task Refinement Agent)</h2>
          <ul className="p-2 text-white text-lg space text-left list-disc">
            <li>
              Tempo médio de refinamento: 2 horas
            </li>
            <li>
              <p>Estimativa de esforço:</p>
              <ul className="ml-8 list-disc">
                <li>Quantos desenvolvedores e quantas sprints serão necessárias</li>
              </ul>
            </li>
            <li>
              <p>Tarefas com <strong>aging</strong> de 30+ dias:</p>
              <ul className="ml-8 list-disc">
                <li>Retrabalho, impedimentos, idas e vindas entre os times</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* New Scenario */}
        <div className="p-8 bg-white/10 backdrop-blur-lg border border-green-500 rounded-xl matrix-border matrix-glow flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-3xl font-bold text-green-500 mb-6">Novo cenário (com Task Refinement Agent)</h2>
          <ul className="p-2 text-white text-lg space text-left list-disc">
            <li>
              Em ~30 segundos, o agente gera avaliação estruturada
            </li>
            <li>
              Especifica os devs necessários e estima tempo
            </li>
            <li>
              <p>Redução do <strong>aging</strong> de tarefas em 50%:</p>
              <ul className="ml-8 list-disc">
                <li>O agente funciona como avaliador técnico imediato e sugere pontos de atenção a serem debatidos</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpectationsSlide;