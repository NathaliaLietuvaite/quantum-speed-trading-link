
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

const ROICalculator = () => {
  const [marketPenetration, setMarketPenetration] = useState([50]);
  const [tradingVolume, setTradingVolume] = useState(1000);
  const [latencyAdvantage, setLatencyAdvantage] = useState([1]);
  
  // Basis-Investitionskosten in Mio. USD
  const baseInvestment = {
    satellites: 4200,
    groundStations: 980,
    quantumGPS: 1750,
    integration: 320,
    total: 7250
  };

  // Berechnung der jährlichen Gewinne
  const calculateReturns = () => {
    const penetration = marketPenetration[0] / 100;
    const volume = tradingVolume;
    const advantage = latencyAdvantage[0];
    
    // Basis-Gewinnpotenzial pro Jahr in Mio. USD
    const arbitrageGain = 4200 * penetration * (volume / 1000) * advantage;
    const securityGain = 1800 * penetration * (volume / 1000);
    const syncGain = 3100 * penetration * (volume / 1000);
    
    const totalAnnualGain = arbitrageGain + securityGain + syncGain;
    const roi = ((totalAnnualGain - baseInvestment.total) / baseInvestment.total) * 100;
    const paybackMonths = (baseInvestment.total / totalAnnualGain) * 12;
    
    return {
      arbitrageGain,
      securityGain,
      syncGain,
      totalAnnualGain,
      roi,
      paybackMonths
    };
  };

  const results = calculateReturns();

  return (
    <div className="space-y-6">
      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ROI-Kalkulator für PQMS-Implementierung
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Parameters */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Parameter anpassen</h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Marktdurchdringung: {marketPenetration[0]}%</Label>
                  <Slider
                    value={marketPenetration}
                    onValueChange={setMarketPenetration}
                    max={100}
                    min={10}
                    step={5}
                    className="mt-2"
                  />
                  <div className="text-sm text-gray-400 mt-1">
                    Anteil der Finanzmärkte, die PQMS nutzen
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300">Handelsvolumen-Faktor</Label>
                  <Input
                    type="number"
                    value={tradingVolume}
                    onChange={(e) => setTradingVolume(Number(e.target.value))}
                    className="mt-2 bg-black/20 border-gray-600 text-white"
                    min="100"
                    max="5000"
                  />
                  <div className="text-sm text-gray-400 mt-1">
                    Relativer Handelsvolumen-Multiplikator (Basis: 1000)
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300">Latenz-Vorteil: {latencyAdvantage[0]}ms</Label>
                  <Slider
                    value={latencyAdvantage}
                    onValueChange={setLatencyAdvantage}
                    max={5}
                    min={0.1}
                    step={0.1}
                    className="mt-2"
                  />
                  <div className="text-sm text-gray-400 mt-1">
                    Durchschnittlicher Latenz-Vorteil gegenüber Konkurrenz
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Berechnete Ergebnisse</h3>
              
              <div className="space-y-4">
                <div className="bg-black/20 rounded-lg p-4 border border-green-500/30">
                  <div className="text-sm text-gray-400">Jährlicher Gesamtgewinn</div>
                  <div className="text-2xl font-bold text-green-400">
                    ${results.totalAnnualGain.toFixed(1)}B
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-sm text-gray-400">Return on Investment</div>
                  <div className="text-2xl font-bold text-purple-400">
                    {results.roi.toFixed(1)}%
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-sm text-gray-400">Amortisationszeit</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {results.paybackMonths.toFixed(1)} Monate
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-600" />

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-200">Gewinnaufschlüsselung</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Arbitrage-Gewinne</span>
                    <span className="text-green-400">${results.arbitrageGain.toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sicherheitsgewinne</span>
                    <span className="text-green-400">${results.securityGain.toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Synchronisationsgewinne</span>
                    <span className="text-green-400">${results.syncGain.toFixed(1)}M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-xl">Investitionsaufschlüsselung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-black/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">${baseInvestment.satellites}M</div>
              <div className="text-sm text-gray-300">PQMS-Satelliten (12)</div>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">${baseInvestment.groundStations}M</div>
              <div className="text-sm text-gray-300">Bodenstationen (8)</div>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">${baseInvestment.quantumGPS}M</div>
              <div className="text-sm text-gray-300">Quanten-GPS</div>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-lg">
              <div className="text-2xl font-bold text-green-400">${baseInvestment.integration}M</div>
              <div className="text-sm text-gray-300">Börsen-Integration</div>
            </div>
          </div>
          <div className="text-center mt-4 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
            <div className="text-3xl font-bold text-white">${baseInvestment.total}M</div>
            <div className="text-gray-300">Gesamtinvestition</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;
