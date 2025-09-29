import { UserCheck, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const CostSlide = () => {
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
          CUSTOS
        </h1>
      </div>

      {/* Topics */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-white/20 w-full text-center text-white rounded-lg">
          <thead>
            <tr className="text-primary">
              <th className="border border-white/20 px-6 py-4 text-2xl">Chamadas por mês</th>
              <th className="border border-white/20 px-6 py-4 text-2xl">Custo IA Bedrock (Claude Sonnet 4)</th>
              <th className="border border-white/20 px-6 py-4 text-2xl">Infra (Lambda + API + Logs)</th>
              <th className="border border-white/20 px-6 py-4 text-2xl">Total aproximado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary/30">
              <td className="border border-white/20 px-6 py-4 text-2xl">300 (10/dia)</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 3,90</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 1,00</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 5,00</td>
            </tr>
            <tr className="bg-secondary/40">
              <td className="border border-white/20 px-6 py-4 text-2xl">1500 (50/dia)</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 19,50</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 1,50</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 21,00</td>
            </tr>
            <tr className="bg-secondary/50">
              <td className="border border-white/20 px-6 py-4 text-2xl">3000 (100/dia)</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 39,00</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 2,00</td>
              <td className="border border-white/20 px-6 py-4 text-2xl">~US$ 41,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xl text-center text-white">O custo é quase todo da IA. Infra (Lambda, API Gateway e CloudWatch) representa apenas alguns centavos a poucos dólares, mesmo em cenários maiores.
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div> */}
    </div>
  );
};

export default CostSlide;