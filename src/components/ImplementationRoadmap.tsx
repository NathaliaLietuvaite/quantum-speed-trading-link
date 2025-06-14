
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const ImplementationRoadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Kernnetz",
      period: "2026-2028",
      status: "In Planung",
      progress: 0,
      color: "bg-blue-500",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      locations: ["New York", "London", "Frankfurt", "Tokio"],
      keyTech: "Quantenspeicher mit 1h Kohärenzzeit",
      profit: "$4.8B/Jahr",
      milestones: [
        "Satelliten-Deployment",
        "Bodenstationen-Installation", 
        "Erste Quanten-Links",
        "Börsen-Integration"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Globales Mesh",
      period: "2029-2031",
      status: "Geplant",
      progress: 0,
      color: "bg-purple-500",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      locations: ["12 weitere Finanzzentren", "Singapore", "Hong Kong", "Sydney", "Toronto"],
      keyTech: "Fehlertolerante Quantenrepeater",
      profit: "$5.2B/Jahr zusätzlich",
      milestones: [
        "Mesh-Netzwerk-Aufbau",
        "Redundante Links",
        "Globale Synchronisation",
        "24/7 Betrieb"
      ]
    },
    {
      phase: "Phase 3",
      title: "Quanten-Cloud",
      period: "ab 2032",
      status: "Vision",
      progress: 0,
      color: "bg-green-500",
      badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
      locations: ["Direkter Marktzugang", "Institutionelle Kunden", "Retail-Zugang"],
      keyTech: "Quantenspeicher mit >24h Kohärenz",
      profit: "$2.8B/Jahr Servicegebühren",
      milestones: [
        "Cloud-Infrastruktur",
        "API-Integration",
        "Skalierbare Services",
        "Marktöffnung"
      ]
    }
  ];

  const risks = [
    {
      risk: "Technologische Reife",
      probability: "Mittel",
      impact: "Hoch",
      mitigation: "Parallelentwicklung klassischer Backups",
      color: "text-orange-400"
    },
    {
      risk: "Regulatorische Hürden", 
      probability: "Hoch",
      impact: "Mittel",
      mitigation: "Lobbying durch Finanzkonsortium",
      color: "text-yellow-400"
    },
    {
      risk: "Quantendekohärenz",
      probability: "Hoch", 
      impact: "Kritisch",
      mitigation: "Redundante Link-Pools (5-fach Überprovisionierung)",
      color: "text-red-400"
    },
    {
      risk: "Cyberangriffe",
      probability: "Mittel",
      impact: "Hoch", 
      mitigation: "Quanten-gehärtete Verschlüsselung",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            PQMS Implementierungsfahrplan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}
                
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{phase.phase}: {phase.title}</h3>
                        <p className="text-gray-300">{phase.period}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={phase.badgeColor}>
                          {phase.status}
                        </Badge>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">{phase.profit}</div>
                          <div className="text-sm text-gray-400">Gewinnpotenzial</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-black/20 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-200 mb-2">Standorte/Umfang</h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.locations.map((location, idx) => (
                              <Badge key={idx} variant="outline" className="text-gray-300 border-gray-600">
                                {location}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-black/20 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-200 mb-2">Schlüsseltechnologie</h4>
                          <p className="text-gray-300 text-sm">{phase.keyTech}</p>
                        </div>
                      </div>

                      <div className="bg-black/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-200 mb-3">Meilensteine</h4>
                        <div className="space-y-2">
                          {phase.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                              <span className="text-gray-300 text-sm">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Fortschritt</span>
                        <span className="text-sm text-gray-400">{phase.progress}%</span>
                      </div>
                      <Progress value={phase.progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-xl">Risikoanalyse und Gegenmaßnahmen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {risks.map((risk, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-4 border-l-4 border-l-red-500/50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-400">Risiko</div>
                    <div className={`font-semibold ${risk.color}`}>{risk.risk}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Wahrscheinlichkeit</div>
                    <div className="text-white">{risk.probability}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Auswirkung</div>
                    <div className="text-white">{risk.impact}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Gegenmaßnahme</div>
                    <div className="text-gray-300 text-sm">{risk.mitigation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-xl">Prognose bis 2040</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400">78%</div>
              <div className="text-gray-300 mt-2">Marktanteil HFT bis 2030</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg border border-green-500/30">
              <div className="text-3xl font-bold text-green-400">$120B</div>
              <div className="text-gray-300 mt-2">Marktkapitalisierung führender PQMS-Anbieter</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400">$189-302B</div>
              <div className="text-gray-300 mt-2">Kumulierter Mehrwert 2026-2040</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImplementationRoadmap;
