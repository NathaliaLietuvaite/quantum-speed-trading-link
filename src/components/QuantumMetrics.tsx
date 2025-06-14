
import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

const QuantumMetrics = () => {
  const [metrics, setMetrics] = useState({
    latencyReduction: 0,
    securityLevel: 0,
    profitGain: 0,
    marketPenetration: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics({
        latencyReduction: 99.99,
        securityLevel: 100,
        profitGain: 1200,
        marketPenetration: 78
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const MetricCard = ({ title, value, suffix, color, progress }: {
    title: string;
    value: number;
    suffix: string;
    color: string;
    progress: number;
  }) => (
    <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        <span className={`text-2xl font-bold ${color}`}>
          {value.toFixed(value >= 100 ? 0 : 2)}{suffix}
        </span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-gray-700"
      />
      <div className="text-xs text-gray-400 mt-1">
        {progress.toFixed(1)}% der Zielwerte erreicht
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <MetricCard
        title="Latenz-Reduktion"
        value={metrics.latencyReduction}
        suffix="%"
        color="text-cyan-400"
        progress={metrics.latencyReduction}
      />
      <MetricCard
        title="Sicherheitslevel"
        value={metrics.securityLevel}
        suffix="%"
        color="text-green-400"
        progress={metrics.securityLevel}
      />
      <MetricCard
        title="ROI"
        value={metrics.profitGain}
        suffix="%"
        color="text-purple-400"
        progress={Math.min(metrics.profitGain / 12, 100)}
      />
      <MetricCard
        title="Marktdurchdringung 2030"
        value={metrics.marketPenetration}
        suffix="%"
        color="text-blue-400"
        progress={metrics.marketPenetration}
      />
    </div>
  );
};

export default QuantumMetrics;
