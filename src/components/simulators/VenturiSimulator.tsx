import React, { useState } from 'react';
import { Play, RotateCcw, Info } from 'lucide-react';

export const VenturiSimulator: React.FC = () => {
  const [d1, setD1] = useState<number>(40); // mm
  const [d2, setD2] = useState<number>(20); // mm
  const [v1, setV1] = useState<number>(1.2); // m/s
  const [fluidDensity, setFluidDensity] = useState<number>(1000); // kg/m^3 (water)

  // Calculations:
  const r1 = (d1 / 2) / 1000; // m
  const r2 = (d2 / 2) / 1000; // m
  const a1 = Math.PI * r1 * r1;
  const a2 = Math.PI * r2 * r2;

  // v2 from continuity: A1 v1 = A2 v2
  const v2 = (a1 * v1) / a2;

  // Flow rate Q = A1 v1
  const Q = a1 * v1; // m^3/s
  const QLitres = Q * 1000; // L/s

  // Delta P from Venturi relation: P1 - P2 = 0.5 * rho * (v2^2 - v1^2)
  const deltaP = 0.5 * fluidDensity * (v2 * v2 - v1 * v1); // Pascals

  // Manometer height h in cm of water column: deltaP = rho * g * h => h = deltaP / (rho * g)
  const g = 9.8;
  const hManometerCm = Math.max(0, (deltaP / (fluidDensity * g)) * 100);

  const resetValues = () => {
    setD1(40);
    setD2(20);
    setV1(1.2);
    setFluidDensity(1000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Continuity & Venturi Meter Interactive Simulator
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Demonstrating Section 5.9 (Continuity $A_1v_1 = A_2v_2$) & Section 5.11 (Venturi Relation $P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$)
          </p>
        </div>
        <button
          onClick={resetValues}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Parameters
        </button>
      </div>

      {/* Pipe Visualization Canvas */}
      <div className="my-6 p-4 bg-slate-900 rounded-xl overflow-hidden relative">
        <div className="text-xs font-medium text-slate-400 mb-2 flex items-center justify-between">
          <span>Flow Velocity Profile & Manometer Levels</span>
          <span className="text-cyan-400">Flow Rate: {QLitres.toFixed(2)} L/s ({(Q * 3600).toFixed(1)} m³/h)</span>
        </div>

        <svg viewBox="0 0 600 240" className="w-full h-auto select-none">
          {/* Background Grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect width="600" height="240" fill="#0f172a" />
          <rect width="600" height="240" fill="url(#grid)" />

          {/* Symmetrical Pipe Shape */}
          {/* Centerline is at y = 140 */}
          {/* Inlet width: 40px to 180px, Throat width: 260px to 340px, Outlet width: 420px to 560px */}
          {(() => {
            const centerY = 140;
            const topY1 = centerY - (d1 * 1.5);
            const botY1 = centerY + (d1 * 1.5);
            const topY2 = centerY - (d2 * 1.5);
            const botY2 = centerY + (d2 * 1.5);

            return (
              <>
                {/* Fluid Fill */}
                <path
                  d={`M 30 ${topY1} L 180 ${topY1} Q 220 ${topY1} 260 ${topY2} L 340 ${topY2} Q 380 ${topY2} 420 ${topY1} L 570 ${topY1} L 570 ${botY1} L 420 ${botY1} Q 380 ${botY1} 340 ${botY2} L 260 ${botY2} Q 220 ${botY2} 180 ${botY1} L 30 ${botY1} Z`}
                  fill="url(#waterGrad)"
                />

                {/* Pipe Outline Walls */}
                <path
                  d={`M 30 ${topY1} L 180 ${topY1} Q 220 ${topY1} 260 ${topY2} L 340 ${topY2} Q 380 ${topY2} 420 ${topY1} L 570 ${topY1}`}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d={`M 30 ${botY1} L 180 ${botY1} Q 220 ${botY1} 260 ${botY2} L 340 ${botY2} Q 380 ${botY2} 420 ${botY1} L 570 ${botY1}`}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Streamlines inside pipe */}
                <path
                  d={`M 30 ${centerY - 10} L 180 ${centerY - 10} Q 220 ${centerY - 10} 260 ${centerY - (d2*0.6)} L 340 ${centerY - (d2*0.6)} Q 380 ${centerY - (d2*0.6)} 420 ${centerY - 10} L 570 ${centerY - 10}`}
                  fill="none"
                  stroke="#e0f2fe"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                  className="animate-pulse"
                />
                <path
                  d={`M 30 ${centerY} L 570 ${centerY}`}
                  fill="none"
                  stroke="#bae6fd"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                <path
                  d={`M 30 ${centerY + 10} L 180 ${centerY + 10} Q 220 ${centerY + 10} 260 ${centerY + (d2*0.6)} L 340 ${centerY + (d2*0.6)} Q 380 ${centerY + (d2*0.6)} 420 ${centerY + 10} L 570 ${centerY + 10}`}
                  fill="none"
                  stroke="#e0f2fe"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                  className="animate-pulse"
                />

                {/* Manometer vertical standpipes */}
                {/* Manometer 1 at inlet (x = 110) */}
                <rect x="105" y="20" width="12" height={topY1 - 20} fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                <rect x="107" y={Math.max(25, 45)} width="8" height={topY1 - Math.max(25, 45)} fill="#38bdf8" />
                
                {/* Manometer 2 at throat (x = 300) */}
                {/* Height is lower due to low pressure! h drop proportional to deltaP */}
                {(() => {
                  const throatLevelY = Math.min(topY2 - 10, 45 + Math.min(topY2 - 55, hManometerCm * 1.5));
                  return (
                    <>
                      <rect x="294" y="20" width="12" height={topY2 - 20} fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                      <rect x="296" y={throatLevelY} width="8" height={topY2 - throatLevelY} fill="#38bdf8" />
                      
                      {/* Delta h indicator line */}
                      <line x1="120" y1="45" x2="290" y2="45" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="120" y1={throatLevelY} x2="290" y2={throatLevelY} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="205" y1="45" x2="205" y2={throatLevelY} stroke="#f59e0b" strokeWidth="2" />
                      <text x="215" y={(45 + throatLevelY) / 2 + 4} fill="#f59e0b" fontSize="11" fontWeight="bold">
                        Δh = {hManometerCm.toFixed(1)} cm
                      </text>
                    </>
                  );
                })()}

                {/* Text annotations */}
                <text x="110" y={centerY + 4} textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">
                  v₁ = {v1.toFixed(2)} m/s
                </text>
                <text x="300" y={centerY + 4} textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
                  v₂ = {v2.toFixed(2)} m/s
                </text>
                <text x="110" y={botY1 + 20} textAnchor="middle" fill="#94a3b8" fontSize="11">
                  Wide Pipe A₁ (D = {d1} mm)
                </text>
                <text x="300" y={botY2 + 20} textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  Throat A₂ (D = {d2} mm)
                </text>
              </>
            );
          })()}
        </svg>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-slate-300">Inlet Speed $v_1$: <strong className="text-white">{v1.toFixed(2)} m/s</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-slate-300">Throat Speed $v_2$: <strong className="text-amber-300 font-bold">{v2.toFixed(2)} m/s</strong> ({(v2/v1).toFixed(1)}× faster!)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
            <span className="text-slate-300">Pressure Drop $\Delta P$: <strong className="text-rose-300">{deltaP.toFixed(0)} Pa</strong> ({ (deltaP/1000).toFixed(2) } kPa)</span>
          </div>
        </div>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-700">
            <span>Inlet Diameter ($D_1$)</span>
            <span className="font-mono tabular-nums text-slate-900">{d1} mm</span>
          </div>
          <input
            type="range"
            min="30"
            max="60"
            step="1"
            value={d1}
            onChange={(e) => setD1(Number(e.target.value))}
            className="w-full accent-cyan-600 cursor-pointer"
          />
          <span className="text-[11px] text-slate-400">Area A₁ = {(a1 * 1e4).toFixed(2)} cm²</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-700">
            <span>Throat Diameter (D₂)</span>
            <span className="font-mono tabular-nums text-cyan-600 font-semibold">{d2} mm</span>
          </div>
          <input
            type="range"
            min="10"
            max="28"
            step="1"
            value={d2}
            onChange={(e) => setD2(Number(e.target.value))}
            className="w-full accent-cyan-600 cursor-pointer"
          />
          <span className="text-[11px] text-slate-400">Area A₂ = {(a2 * 1e4).toFixed(2)} cm²</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-700">
            <span>Inlet Fluid Speed (v₁)</span>
            <span className="font-mono tabular-nums text-slate-900">{v1.toFixed(1)} m/s</span>
          </div>
          <input
            type="range"
            min="0.4"
            max="3.0"
            step="0.1"
            value={v1}
            onChange={(e) => setV1(Number(e.target.value))}
            className="w-full accent-cyan-600 cursor-pointer"
          />
          <span className="text-[11px] text-slate-400">Vol. flow Q = {QLitres.toFixed(2)} L/s</span>
        </div>
      </div>

      {/* Physical Explanation Box */}
      <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-medium text-slate-800">
            Key Rule (Page 105): "Where speed is high, pressure will be low."
          </p>
          <p className="text-slate-600 leading-relaxed">
            Because fluid mass is conserved (A₁ v₁ = A₂ v₂), water speeds up in the constriction (v₂ = {v2.toFixed(2)} m/s). 
            By Bernoulli's principle (P + ½ρv² = Constant), the extra kinetic energy comes directly at the expense of internal pressure. 
            The throat static pressure drops by <span className="font-semibold text-rose-600">{deltaP.toFixed(0)} Pa</span>, creating a manometer difference of <span className="font-semibold text-amber-600">{hManometerCm.toFixed(1)} cm</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
