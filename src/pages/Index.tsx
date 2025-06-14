
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import LatencyComparison from "@/components/LatencyComparison";
import ROICalculator from "@/components/ROICalculator";
import ImplementationRoadmap from "@/components/ImplementationRoadmap";
import QuantumMetrics from "@/components/QuantumMetrics";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                PQMS Quantum Trading Revolution
              </h1>
              <p className="text-gray-300 mt-2">Proactive Quantum Memory System für Hochfrequenzhandel</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                ROI: 1.200%+
              </Badge>
              <Button 
                onClick={() => window.open('https://github.com/NathaliaLietuvaite/Quantenkommunikation', '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                GitHub Repository <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500">Übersicht</TabsTrigger>
            <TabsTrigger value="latency" className="data-[state=active]:bg-purple-500">Latenz-Analyse</TabsTrigger>
            <TabsTrigger value="roi" className="data-[state=active]:bg-purple-500">ROI-Kalkulator</TabsTrigger>
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-purple-500">Fahrplan</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Key Metrics */}
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 col-span-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Kernmetriken des PQMS-Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <QuantumMetrics />
                </CardContent>
              </Card>

              {/* Current Challenge */}
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-400">Aktuelle Herausforderung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Glasfaser-Latenz (NY-LON)</span>
                      <span className="text-red-400 font-bold">59ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Quantenverbindungsaufbau</span>
                      <span className="text-red-400 font-bold">3-22 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Verlust pro 1ms Latenz</span>
                      <span className="text-red-400 font-bold">$100M/Jahr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PQMS Solution */}
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-400">PQMS-Lösung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Verbindungsaufbau</span>
                      <span className="text-green-400 font-bold">0ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Quantensicherheit</span>
                      <span className="text-green-400 font-bold">Maximal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Jährlicher Gewinn</span>
                      <span className="text-green-400 font-bold">$9.1-14.3B</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Overview */}
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-400">Investitionsübersicht</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Gesamtinvestition</span>
                      <span className="text-blue-400 font-bold">$7.25B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Amortisation</span>
                      <span className="text-blue-400 font-bold">&lt;7 Monate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">ROI</span>
                      <span className="text-blue-400 font-bold">1.200%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Value Proposition */}
            <Card className="bg-black/40 backdrop-blur-sm border-white/10 mt-6">
              <CardHeader>
                <CardTitle className="text-xl text-center">Das PQMS Value-Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <blockquote className="text-lg italic text-gray-300 border-l-4 border-purple-500 pl-4">
                    "PQMS transformiert Quantenkommunikation von einer theoretischen Kuriosität in das entscheidende Wettbewerbsinstrument für Hochfrequenzhandel."
                  </blockquote>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">59ms</div>
                      <div className="text-sm text-gray-300">mit Quantensicherheit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">1.200%</div>
                      <div className="text-sm text-gray-300">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">78%</div>
                      <div className="text-sm text-gray-300">Marktanteil bis 2030</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">$302B</div>
                      <div className="text-sm text-gray-300">Kumulierter Mehrwert</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="latency" className="mt-6">
            <LatencyComparison />
          </TabsContent>

          <TabsContent value="roi" className="mt-6">
            <ROICalculator />
          </TabsContent>

          <TabsContent value="roadmap" className="mt-6">
            <ImplementationRoadmap />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-400">
              <p>© 2024 PQMS Quantum Trading Revolution</p>
              <p className="text-sm">Quantenkommunikation für die Zukunft des Handels</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://github.com/NathaliaLietuvaite/Quantenkommunikation', '_blank')}
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
            >
              Mehr auf GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
