import React, { useState } from 'react';
import { RotateCcw, Info } from 'lucide-react';

interface ObjectType {
  name: string;
  density: number; // kg/m^3
  volume: number; // m^3
  isSubmarine?: boolean;
}

export const ArchimedesTankSimulator: React.FC = () => {
  const [fluidDensity, setFluidDensity] = useState<number>(1000); // Water (1000 kg/m^3)
  const [objectChoice, setObjectChoice] = useState<string>('wood');
  const [ballastPercent, setBallastPercent] = useState<number>(20); // 0 to 100% for submarine

  // Fixed volume of object: 0.001 m^3 (1 Litre = 10x10x10 cm, Example 5.2 cube!)
  const objVolume = 0.001; // m^3
  const g = 9.8;

  const getObjectProps = (): { density: number; name: string } => {
    switch (objectChoice) {
      case 'wood':
        return { density: 700, name: 'Wooden Cube (ρ = 700 kg/m³)' };
      case 'ice':
        return { density: 917, name: 'Ice Block (ρ = 917 kg/m³)' };
      case 'iron':
        return { density: 7800, name: 'Iron Block (ρ = 7800 kg/m³)' };
      case 'submarine': {
        // Submarine base density 850 kg/m^3, fills ballast with water up to 1150 kg/m^3
        const subDensity = 850 + (ballastPercent / 100) * 300;
        return { density: subDensity, name: `Submarine (Ballast: ${ballastPercent}%)` };
      }
      default:
        return { density: 700, name: 'Wood' };
    }
  };

  const obj = getObjectProps();
  const objMass = obj.density * objVolume;
  const trueWeightN = objMass * g;

  // Max upthrust if 100% submerged:
  const maxUpthrustN = fluidDensity * g * objVolume;

  // Equilibrium state:
  const isFloating = obj.density <= fluidDensity;
  const submergedFraction = isFloating ? obj.density / fluidDensity : 1.0;
  const actualUpthrustN = isFloating ? trueWeightN : maxUpthrustN;
  const apparentWeightN = isFloating ? 0 : trueWeightN - maxUpthrustN;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Archimedes' Principle & Submarine Floatation Tank
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Demonstrating Section 5.7 (Upthrust $F_b = \rho g V$, Example 5.2 & Submarine Ballast Mechanics Page 96-97)
          </p>
        </div>
        <button
          onClick={() => {
            setFluidDensity(1000);
            setObjectChoice('wood');
            setBallastPercent(20);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Tank
        </button>
      </div>

      {/* Visual Tank Canvas */}
      <div className="my-6 p-4 bg-slate-900 rounded-xl relative overflow-hidden flex flex-col justify-between h-[240px]">
        <div className="flex justify-between items-center text-xs text-slate-400 z-10">
          <span>Tank Liquid: Density ρ = {fluidDensity} kg/m³</span>
          <span className={`font-semibold ${isFloating ? 'text-emerald-400' : 'text-rose-400'}`}>
            State: {isFloating ? `Floating (${(submergedFraction * 100).toFixed(0)}% Submerged)` : 'Sunk to Bottom'}
          </span>
        </div>

        {/* Tank SVG Graphic */}
        <div className="flex-1 flex items-center justify-center relative">
          <svg viewBox="0 0 300 160" className="w-72 h-40">
            {/* Glass Tank Container */}
            <rect x="50" y="20" width="200" height="130" fill="#0f172a" stroke="#64748b" strokeWidth="3" rx="4" />

            {/* Water Fill (water level at y = 50) */}
            <rect x="52" y="50" width="196" height="98" fill="#0284c7" opacity="0.6" />
            <line x1="52" y1="50" x2="248" y2="50" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,2" />

            {/* Submerged Object Position */}
            {(() => {
              const waterSurfaceY = 50;
              const tankBottomY = 145;
              const objH = 40;
              const objW = 50;
              const objX = 125;

              let objY = 0;
              if (isFloating) {
                // Floating: part above, part below water surface
                const submergedH = objH * submergedFraction;
                objY = waterSurfaceY - (objH - submergedH);
              } else {
                // Sunk to the bottom!
                objY = tankBottomY - objH;
              }

              return (
                <>
                  {/* Object Body */}
                  {objectChoice === 'submarine' ? (
                    // Submarine shape
                    <g transform={`translate(${objX - 10}, ${objY})`}>
                      <rect x="0" y="8" width="70" height="24" rx="12" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
                      <rect x="25" y="0" width="16" height="12" fill="#334155" stroke="#94a3b8" rx="2" />
                      <circle cx="58" cy="20" r="3" fill="#38bdf8" />
                      {/* Ballast water level inside sub */}
                      <rect x="15" y="20" width="40" height="8" fill="#0284c7" opacity={ballastPercent / 100} />
                    </g>
                  ) : (
                    // Cube Block
                    <rect
                      x={objX}
                      y={objY}
                      width={objW}
                      height={objH}
                      fill={objectChoice === 'wood' ? '#b45309' : objectChoice === 'ice' ? '#93c5fd' : '#64748b'}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      rx="3"
                    />
                  )}

                  {/* Force Vectors */}
                  {/* Weight Vector Downward (mg) */}
                  <line x1="150" y1={objY + 20} x2="150" y2={objY + 55} stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRedTank)" />
                  <text x="158" y={objY + 52} fill="#fca5a5" fontSize="10" fontWeight="bold">W = {trueWeightN.toFixed(1)} N</text>

                  {/* Upthrust Vector Upward (Fb) */}
                  <line x1="150" y1={objY + 20} x2="150" y2={objY - 15} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowGreenTank)" />
                  <text x="158" y={objY - 5} fill="#6ee7b7" fontSize="10" fontWeight="bold">F_b = {actualUpthrustN.toFixed(1)} N</text>
                </>
              );
            })()}

            <defs>
              <marker id="arrowRedTank" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
              </marker>
              <marker id="arrowGreenTank" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
              </marker>
            </defs>
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 font-medium z-10 bg-slate-800/80 p-1.5 rounded">
          <span>Object: <strong className="text-white">{obj.name}</strong></span>
          <span>True Weight: <strong className="text-rose-400">{trueWeightN.toFixed(2)} N</strong></span>
          <span>Upthrust ($F_b$): <strong className="text-emerald-400">{actualUpthrustN.toFixed(2)} N</strong></span>
          <span>Apparent Weight: <strong className="text-amber-400">{apparentWeightN.toFixed(2)} N</strong></span>
        </div>
      </div>

      {/* Control Configuration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Object Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-700">Select Test Specimen (1.0 Litre Volume)</label>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setObjectChoice('wood')}
              className={`p-2 text-xs rounded border text-left transition-colors cursor-pointer ${
                objectChoice === 'wood' ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              Wood (700 kg/m³)
            </button>
            <button
              onClick={() => setObjectChoice('ice')}
              className={`p-2 text-xs rounded border text-left transition-colors cursor-pointer ${
                objectChoice === 'ice' ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              Ice (917 kg/m³)
            </button>
            <button
              onClick={() => setObjectChoice('iron')}
              className={`p-2 text-xs rounded border text-left transition-colors cursor-pointer ${
                objectChoice === 'iron' ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              Iron (7800 kg/m³)
            </button>
            <button
              onClick={() => setObjectChoice('submarine')}
              className={`p-2 text-xs rounded border text-left transition-colors cursor-pointer ${
                objectChoice === 'submarine' ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              Submarine (Ballast)
            </button>
          </div>
        </div>

        {/* Fluid Density Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-700">
            <span>Liquid Density (ρ_fluid)</span>
            <span className="font-mono tabular-nums text-cyan-600 font-bold">{fluidDensity} kg/m³</span>
          </div>
          <input
            type="range"
            min="600"
            max="1400"
            step="20"
            value={fluidDensity}
            onChange={(e) => setFluidDensity(Number(e.target.value))}
            className="w-full accent-cyan-600 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>Oil (800)</span>
            <span>Water (1000)</span>
            <span>Sea/Glycerin (1025-1260)</span>
          </div>
        </div>

        {/* Submarine Ballast Slider (only if submarine selected) or Calculation Summary */}
        <div className="space-y-2">
          {objectChoice === 'submarine' ? (
            <>
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>Submarine Ballast Tank Flood</span>
                <span className="font-mono tabular-nums text-slate-900 font-bold">{ballastPercent}% Seawater</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={ballastPercent}
                onChange={(e) => setBallastPercent(Number(e.target.value))}
                className="w-full accent-cyan-600 cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block">
                {ballastPercent < 50 ? 'Low ballast: Submarine floats on surface!' : 'High ballast: Weight > Upthrust $\\implies$ Submarine dives!'}
              </span>
            </>
          ) : (
            <>
              <label className="block text-xs font-medium text-slate-700">Floatation Analysis</label>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 space-y-1">
                <div>Max Upthrust: <span className="font-mono font-semibold">{maxUpthrustN.toFixed(2)} N</span></div>
                <div>Density Ratio: <span className="font-mono font-semibold">{(obj.density / fluidDensity).toFixed(2)}</span></div>
                <div className="text-[11px] text-slate-500">
                  {isFloating ? 'Displaces liquid having weight = its own weight.' : 'Weight exceeds upthrust; sinks with net downward force.'}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Physics Callout Box */}
      <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-medium text-slate-800">
            Textbook Principles (Sec 5.7, Page 95-97):
          </p>
          <ul className="list-disc list-inside space-y-0.5 text-slate-600">
            <li><strong>Upthrust:</strong> F_b = ρ · g · V_sub, equal to the weight of displaced liquid (Example 5.2 gives 9.8 N for a 10 cm cube).</li>
            <li><strong>Floatation Condition:</strong> An object floats if ρ_object ≤ ρ_fluid, submerging fraction V_sub / V_total = ρ_solid / ρ_liquid.</li>
            <li><strong>Submarines (Page 96-97):</strong> Ballast tanks fill with seawater to dive (Weight &gt; Upthrust) and blow water out with compressed air to surface (Weight ≤ Upthrust).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
