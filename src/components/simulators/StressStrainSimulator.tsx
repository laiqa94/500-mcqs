import React, { useState } from 'react';
import { RotateCcw, Info } from 'lucide-react';

export const StressStrainSimulator: React.FC = () => {
  const [loadPercent, setLoadPercent] = useState<number>(35); // 0 to 100%
  const [materialType, setMaterialType] = useState<'ductile' | 'brittle'>('ductile');

  // Stages along ductile curve:
  // 0 - 25%: Linear Elastic OA (Hooke's Law obeyed)
  // 25 - 40%: Non-linear Elastic AB (Elastic limit / Yield point B reached at ~40%)
  // 40 - 80%: Plastic Deformation BC (Work hardening up to UTS C at ~80%)
  // 80 - 100%: Necking & Fracture CD (Fracture D occurs at 100%)

  // For brittle:
  // 0 - 45%: Linear Elastic OA
  // 45 - 50%: Breaks suddenly at point B!

  const getStageInfo = () => {
    if (materialType === 'brittle') {
      if (loadPercent < 45) {
        return {
          region: 'Region OA: Linear Elastic (Hooke\'s Law)',
          behavior: 'Atoms displace reversibly from equilibrium positions. Strain is strictly proportional to stress.',
          recoverable: true,
          status: 'Elastic (Fully Recoverable)'
        };
      } else {
        return {
          region: 'Point D: Catastrophic Cleavage Fracture',
          behavior: 'Brittle substance snaps suddenly right after reaching the elastic limit without plastic elongation (Page 93).',
          recoverable: false,
          status: 'Fractured (Snapped in Two)'
        };
      }
    }

    if (loadPercent <= 25) {
      return {
        region: 'Region OA: Proportional Limit (Hooke\'s Law Obeyed)',
        behavior: 'Stress is directly proportional to strain. Slope is Young\'s Modulus (Y). Complete elastic recovery.',
        recoverable: true,
        status: 'Elastic (Linear)'
      };
    } else if (loadPercent <= 40) {
      return {
        region: 'Region AB: Elastic Limit & Yield Point (Point B, σ_y)',
        behavior: 'Non-linear deformation. If load is removed, the wire still returns 100% to its original state (Page 92).',
        recoverable: true,
        status: 'Elastic (Non-linear)'
      };
    } else if (loadPercent <= 80) {
      return {
        region: 'Region BC: Plastic Flow & UTS (Point C, σ_m)',
        behavior: 'Dislocations glide along slip planes. Permanent set forms. Work hardening increases strength up to UTS (Page 93).',
        recoverable: false,
        status: 'Plastic Deformation (Permanent Set)'
      };
    } else {
      return {
        region: 'Region CD: Necking & Fracture Stress (Point D, σ_f)',
        behavior: 'Localized necking thins the specimen cross section. Microvoids coalesce into final cup-and-cone fracture at D.',
        recoverable: false,
        status: 'Necking / Rupturing'
      };
    }
  };

  const stage = getStageInfo();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Stress-Strain Curve & Tensile Testing Simulator
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Demonstrating Section 5.5 (Fig. 5.5: Proportional Limit $\sigma_p$, Yield Point B, UTS C, Fracture D)
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
            <button
              onClick={() => { setMaterialType('ductile'); setLoadPercent(35); }}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                materialType === 'ductile' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ductile (Steel/Cu)
            </button>
            <button
              onClick={() => { setMaterialType('brittle'); setLoadPercent(30); }}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                materialType === 'brittle' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Brittle (Glass/High-C)
            </button>
          </div>
          <button
            onClick={() => setLoadPercent(10)}
            className="p-1.5 text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Reset Load"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Graphical Display */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Stress Strain Graph Canvas */}
        <div className="p-4 bg-slate-900 rounded-xl relative overflow-hidden flex flex-col justify-between h-[230px]">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Stress-Strain Curve (Fig. 5.5)</span>
            <span className="font-mono text-cyan-400">Applied Strain: {(loadPercent * 0.05).toFixed(2)}%</span>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 280 140" className="w-full h-32 select-none">
              {/* Axes */}
              <line x1="30" y1="120" x2="265" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="120" x2="30" y2="15" stroke="#64748b" strokeWidth="1.5" />
              <text x="260" y="134" fill="#94a3b8" fontSize="10">Strain (ε)</text>
              <text x="5" y="20" fill="#94a3b8" fontSize="10">Stress (σ)</text>

              {materialType === 'ductile' ? (
                <>
                  {/* Ductile Curve: O(30,120) -> A(80,60) -> B(100,50) -> C(190,25) -> D(245,65) */}
                  <path
                    d="M 30 120 L 80 60 Q 90 52 105 50 Q 150 25 195 25 Q 225 35 245 65"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                  />
                  {/* Point Labels */}
                  <circle cx="80" cy="60" r="3" fill="#ffffff" />
                  <text x="80" y="52" fill="#e2e8f0" fontSize="10" fontWeight="bold">A (σ_p)</text>

                  <circle cx="105" cy="50" r="3" fill="#facc15" />
                  <text x="105" y="42" fill="#facc15" fontSize="10" fontWeight="bold">B (Yield)</text>

                  <circle cx="195" cy="25" r="3" fill="#f97316" />
                  <text x="195" y="18" fill="#f97316" fontSize="10" fontWeight="bold">C (UTS)</text>

                  <circle cx="245" cy="65" r="3" fill="#ef4444" />
                  <text x="248" y="75" fill="#ef4444" fontSize="10" fontWeight="bold">D (Fracture)</text>

                  {/* Dynamic Marker Position */}
                  {(() => {
                    let cx = 30 + (loadPercent / 100) * 215;
                    let cy = 120;
                    if (loadPercent <= 23) {
                      cy = 120 - (loadPercent / 23) * 60;
                    } else if (loadPercent <= 35) {
                      cy = 60 - ((loadPercent - 23) / 12) * 10;
                    } else if (loadPercent <= 77) {
                      cy = 50 - ((loadPercent - 35) / 42) * 25;
                    } else {
                      cy = 25 + ((loadPercent - 77) / 23) * 40;
                    }
                    return (
                      <circle cx={cx} cy={cy} r="5" fill="#ec4899" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                    );
                  })()}
                </>
              ) : (
                <>
                  {/* Brittle Curve: O(30,120) -> A(90,35) -> Snaps abruptly at D(95,33) */}
                  <path
                    d="M 30 120 L 95 33"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="2.5"
                  />
                  <circle cx="95" cy="33" r="3.5" fill="#ef4444" />
                  <text x="100" y="32" fill="#ef4444" fontSize="10" fontWeight="bold">B & D (Snaps!)</text>

                  {/* Marker */}
                  {(() => {
                    const cx = 30 + Math.min(1, loadPercent / 45) * 65;
                    const cy = 120 - Math.min(1, loadPercent / 45) * 87;
                    return (
                      <circle cx={cx} cy={cy} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                    );
                  })()}
                </>
              )}
            </svg>
          </div>

          <div className="text-[11px] text-center text-slate-300 bg-slate-800/80 py-1 rounded font-medium">
            Active: <span className="text-cyan-300">{stage.region}</span>
          </div>
        </div>

        {/* Tensile Specimen Necking Visualizer */}
        <div className="p-4 bg-slate-900 rounded-xl flex flex-col justify-between h-[230px]">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Physical Wire Deformation</span>
            <span className={`font-semibold ${stage.recoverable ? 'text-emerald-400' : 'text-amber-400'}`}>
              {stage.status}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 200 100" className="w-56 h-24">
              {/* Grips at left and right */}
              <rect x="10" y="25" width="20" height="50" fill="#475569" stroke="#94a3b8" rx="2" />
              <rect x="170" y="25" width="20" height="50" fill="#475569" stroke="#94a3b8" rx="2" />

              {/* Tensile Specimen Geometry */}
              {loadPercent >= 98 && materialType === 'ductile' ? (
                // Broken specimen!
                <>
                  <path d="M 30 38 L 85 38 L 95 48 L 85 62 L 30 62 Z" fill="#94a3b8" />
                  <path d="M 170 38 L 115 38 L 105 48 L 115 62 L 170 62 Z" fill="#94a3b8" />
                  <text x="100" y="85" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">Cup & Cone Fracture at D</text>
                </>
              ) : loadPercent >= 48 && materialType === 'brittle' ? (
                // Brittle snap
                <>
                  <rect x="30" y="40" width="60" height="20" fill="#f43f5e" />
                  <rect x="110" y="40" width="60" height="20" fill="#f43f5e" />
                  <text x="100" y="85" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">Brittle Cleavage Snap</text>
                </>
              ) : (
                // Continuous specimen with necking at high loads
                (() => {
                  const neckThick = loadPercent > 70 ? Math.max(6, 20 - (loadPercent - 70) * 0.45) : 20;
                  const neckYTop = 50 - neckThick / 2;
                  const neckYBot = 50 + neckThick / 2;
                  return (
                    <>
                      <path
                        d={`M 30 40 L 80 40 Q 100 ${neckYTop} 120 40 L 170 40 L 170 60 L 120 60 Q 100 ${neckYBot} 80 60 L 30 60 Z`}
                        fill={materialType === 'ductile' ? '#38bdf8' : '#fb7185'}
                      />
                      {loadPercent > 70 && (
                        <text x="100" y="78" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
                          Necking localized at C-D
                        </text>
                      )}
                    </>
                  );
                })()
              )}

              {/* Force arrows on grips */}
              <path d="M 15 50 L 5 50" stroke="#ef4444" strokeWidth="2" />
              <path d="M 185 50 L 195 50" stroke="#ef4444" strokeWidth="2" />
            </svg>
          </div>

          <div className="text-[11px] text-slate-400 text-center truncate">
            {stage.behavior}
          </div>
        </div>
      </div>

      {/* Load Slider Control */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between text-xs font-medium text-slate-700">
          <span>Applied Tensile Load / Extension</span>
          <span className="font-mono tabular-nums text-slate-900 font-bold">{loadPercent}% Maximum Load</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={loadPercent}
          onChange={(e) => setLoadPercent(Number(e.target.value))}
          className="w-full accent-cyan-600 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-400 font-mono">
          <span>0 (Origin)</span>
          <span>A (Proportional 25%)</span>
          <span>B (Yield 40%)</span>
          <span>C (UTS 80%)</span>
          <span>D (Fracture 100%)</span>
        </div>
      </div>

      {/* Physics Callout Box */}
      <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-medium text-slate-800">
            Textbook Principles (Sec 5.5, Page 92-93):
          </p>
          <ul className="list-disc list-inside space-y-0.5 text-slate-600">
            <li><strong>Region OA:</strong> Hooke's law strictly obeyed (σ ∝ ε). Slope = Young's Modulus (Y).</li>
            <li><strong>Region OB:</strong> Elastic limit (σ_y). Wire retraces curve back to zero if load removed.</li>
            <li><strong>Region BC:</strong> Plasticity! Dislocations move; permanent deformation set is formed.</li>
            <li><strong>Point C:</strong> Ultimate Tensile Strength (UTS, σ_m), the maximum nominal stress capacity.</li>
            <li><strong>Point D:</strong> Breaking/fracture stress (σ_f) following localized necking.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
