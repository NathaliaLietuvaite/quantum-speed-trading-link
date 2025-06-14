
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const LatencyComparison = () => {
  const technologies = [
    {
      name: "Glasfaser",
      connectionSetup: 5,
      totalLatency: 59,
      security: "Mittel",
      color: "bg-orange-500",
      securityColor: "text-orange-400",
      description: "Aktuelle Standard-Technologie"
    },
    {
      name: "Herkömmliche QKD",
      connectionSetup: 540000, // 9 min in ms
      totalLatency: 540059,
      security: "Hoch",
      color: "bg-red-500",
      securityColor: "text-red-400",
      description: "Unbrauchbar für HFT"
    },
    {
      name: "PQMS",
      connectionSetup: 0,
      totalLatency: 59,
      security: "Maximal",
      color: "bg-green-500",
      securityColor: "text-green-400",
      description: "Revolutionäre Lösung"
    }
  ];

  const maxLatency = Math.max(...technologies.map(tech => tech.totalLatency));

  return (
    <div className="space-y-6">
      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latenzvergleich: NY-LON Verbindung
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${tech.color}`}></div>
                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      {tech.description}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">Gesamtlatenz</div>
                    <div className="text-xl font-bold text-white">
                      {tech.totalLatency > 1000 ? `${(tech.totalLatency/1000).toFixed(0)}s` : `${tech.totalLatency}ms`}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400">Verbindungsaufbau</div>
                    <div className="text-lg font-semibold text-white">
                      {tech.connectionSetup > 1000 ? `${(tech.connectionSetup/60000).toFixed(0)} min` : `${tech.connectionSetup} ms`}
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400">Sicherheit</div>
                    <div className={`text-lg font-semibold ${tech.securityColor}`}>
                      {tech.security}
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400">HFT-Tauglichkeit</div>
                    <div className={`text-lg font-semibold ${tech.name === 'PQMS' ? 'text-green-400' : tech.name === 'Glasfaser' ? 'text-orange-400' : 'text-red-400'}`}>
                      {tech.name === 'PQMS' ? 'Optimal' : tech.name === 'Glasfaser' ? 'Begrenzt' : 'Unbrauchbar'}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Latenz-Visualisierung</span>
                    <span className="text-sm text-gray-400">
                      {((tech.totalLatency / maxLatency) * 100).toFixed(1)}% des Maximums
                    </span>
                  </div>
                  <Progress 
                    value={(tech.totalLatency / maxLatency) * 100} 
                    className="h-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-xl">Wirtschaftliche Auswirkung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Wertgenerierungsmechanismen</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sofortige Arbitrage-Nutzung</span>
                  <span className="text-green-400 font-bold">$4.2B/Jahr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Quanten-sichere Orderausführung</span>
                  <span className="text-green-400 font-bold">$1.8B/Jahr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Globale Marktsynchronisation</span>
                  <span className="text-green-400 font-bold">$3.1B/Jahr</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Kosteneinsparungen</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Vermiedene Quantenangriffe</span>
                  <span className="text-blue-400 font-bold">$1.8B/Jahr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Timezone-Arbitrage Eliminierung</span>
                  <span className="text-blue-400 font-bold">$3.1B/Jahr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Reduzierte Infrastrukturkosten</span>
                  <span className="text-blue-400 font-bold">$0.9B/Jahr</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatencyComparison;
