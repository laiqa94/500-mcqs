import React, { useState } from 'react';
import { RotateCcw, Info } from 'lucide-react';

interface MediumInfo {
  name: string;
  viscosity: number; // Pa s (N s / m^2)
  density: number; // kg/m^3
}

const mediums: MediumInfo[] = [
  { name: 'Air (30 °C)', viscosity: 0.000019, density: 1.2 },
  { name: 'Water (30 °C)', viscosity: 0.000801, density: 1000 },
  { name: 'Blood Plasma', viscosity: 0.001600, density: 1025 },
  { name: 'Glycerin (30 °C)', viscosity: 0.006290, density: 1260 }
];

export const TerminalVelocitySimulator: React.FC = () => {
  const [radiusMicrons, setRadiusMicrons] = useState<number>(100); // 100 microns = 0.10 mm (Example 5.5!)
  const [dropletDensity, setDropletDensity] = useState<number>(1000); // water droplet: 1000 kg/m^3
  const [selectedMediumIdx, setSelectedMediumIdx] = useState<number>(0); // Air by default

  const medium = mediums[selectedMediumIdx];
  const rMeters = radiusMicrons * 1e-6; // meters
  const g = 9.8;

  // Mass of droplet: 4/3 * pi * r^3 * rho
  const volume = (4 / 3) * Math.PI * Math.pow(rMeters, 3);
  const massKg = volume * dropletDensity;
  const weightN = massKg * g;

  // Terminal velocity from Eq 5.29: vt = (2 * g * r^2 * (rho_drop - rho_medium)) / (9 * eta)
  const effDensity = Math.max(0, dropletDensity - medium.density);
  const vt = (2 * g * Math.pow(rMeters, 2) * effDensity) / (9 * medium.viscosity);

  // Time constant tau = mass / (6 * pi * eta * r)
  const stokesK = 6 * Math.PI * medium.viscosity * rMeters;
  const timeConstTau = massKg / stokesK;

  const resetValues = () => {
    setRadiusMicrons(100);
    setDropletDensity(1000);
    setSelectedMediumIdx(0);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Stokes' Law & Terminal Velocity Simulator
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Demonstrating Section 5.13 & 5.14 (F = 6πηrv and v_t = 2gr²ρ/(9η), Example 5.5)
          </p>
        </div>
        <button
          onClick={resetValues}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Defaults
        </button>
      </div>

      {/* Physics Visualization Canvas */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Falling droplet visual */}
        <div className="p-4 bg-slate-900 rounded-xl relative overflow-hidden flex flex-col justify-between h-[230px]">
          <div className="flex justify-between items-center text-xs text-slate-400 z-10">
            <span>Droplet in {medium.name}</span>
            <span className="text-cyan-400 font-mono">Radius: {(radiusMicrons / 1000).toFixed(3)} mm ({radiusMicrons} μm)</span>
          </div>

          {/* Droplet & Force Vector SVG */}
          <div className="flex-1 flex items-center justify-center relative">
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Droplet Body */}
              <circle cx="100" cy="70" r={Math.min(28, Math.max(8, radiusMicrons / 8))} fill="#38bdf8" stroke="#bae6fd" strokeWidth="2" />

              {/* Gravity Vector Downward (Weight mg) */}
              <line x1="100" y1="70" x2="100" y2="120" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowRed)" />
              <text x="110" y="115" fill="#fca5a5" fontSize="11" fontWeight="bold">W = mg</text>

              {/* Drag Force Vector Upward (Stokes Force) */}
              <line x1="100" y1="70" x2="100" y2="20" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowGreen)" />
              <text x="110" y="32" fill="#6ee7b7" fontSize="11" fontWeight="bold">F_d = 6πηrv</text>

              <defs>
                <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                </marker>
                <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="text-center text-xs text-slate-300 font-medium z-10 bg-slate-800/80 py-1 rounded">
            At equilibrium: <span className="text-emerald-400 font-bold">F_d = W</span> → Net Force = 0 → <span className="text-cyan-300 font-bold">v_t = {vt.toFixed(2)} m/s</span>
          </div>
        </div>

        {/* Velocity-Time Curve Graph */}
        <div className="p-4 bg-slate-900 rounded-xl relative flex flex-col justify-between h-[230px]">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Velocity-Time Profile: v(t) = v_t [1 - exp(-t/τ)]</span>
            <span className="text-amber-400 font-mono">Time const: {(timeConstTau * 1000).toFixed(2)} ms</span>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 240 120" className="w-full h-28">
              {/* Axes */}
              <line x1="30" y1="105" x2="225" y2="105" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="105" x2="30" y2="15" stroke="#64748b" strokeWidth="1.5" />
              <text x="220" y="118" fill="#94a3b8" fontSize="10">t</text>
              <text x="15" y="20" fill="#94a3b8" fontSize="10">v</text>

              {/* Asymptote vt line */}
              <line x1="30" y1="35" x2="225" y2="35" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
              <text x="35" y="30" fill="#f59e0b" fontSize="10" fontWeight="bold">v_t = {vt.toFixed(2)} m/s</text>

              {/* Asymptotic curve */}
              <path
                d="M 30 105 Q 65 37 225 35"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          <div className="text-[11px] text-slate-400 text-center">
            Acceleration starts at a = g = 9.8 m/s² and decreases exponentially to 0.
          </div>
        </div>
      </div>

      {/* Control Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Droplet Radius */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-700">
            <span>Droplet Radius ($r$)</span>
            <span className="font-mono tabular-nums text-cyan-600 font-bold">{radiusMicrons} μm ({(radiusMicrons/1000).toFixed(2)} mm)</span>
          </div>
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            value={radiusMicrons}
            onChange={(e) => setRadiusMicrons(Number(e.target.value))}
            className="w-full accent-cyan-600 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>10 μm (Fog drop)</span>
            <span>100 μm (Ex. 5.5)</span>
            <span>300 μm (Rain)</span>
          </div>
        </div>

        {/* Medium Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-700">Surrounding Fluid Medium</label>
          <select
            value={selectedMediumIdx}
            onChange={(e) => setSelectedMediumIdx(Number(e.target.value))}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-800 cursor-pointer focus:ring-1 focus:ring-cyan-500"
          >
            {mediums.map((m, idx) => (
              <option key={m.name} value={idx}>
                {m.name} (η = {(m.viscosity * 1000).toFixed(3)} mPa·s)
              </option>
            ))}
          </select>
          <span className="text-[11px] text-slate-400 block">
            Viscosity η = {(medium.viscosity * 1e6).toFixed(1)} × 10⁻⁶ Pa·s
          </span>
        </div>

        {/* Droplet Substance / Density */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-700">
            <span>Droplet Material Density</span>
            <span className="font-mono tabular-nums text-slate-900">{dropletDensity} kg/m³</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setDropletDensity(1000)}
              className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                dropletDensity === 1000 ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              Water (1000)
            </button>
            <button
              onClick={() => setDropletDensity(800)}
              className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                dropletDensity === 800 ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              Oil (800)
            </button>
            <button
              onClick={() => setDropletDensity(7800)}
              className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                dropletDensity === 7800 ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              Steel (7800)
            </button>
          </div>
          <span className="text-[11px] text-slate-400 block">Mass: {(massKg * 1e9).toFixed(3)} micrograms</span>
        </div>
      </div>

      {/* Numerical Callout Matching Example 5.5 */}
      <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-medium text-slate-800">
            Textbook Benchmark (Example 5.5, Page 107):
          </p>
          <p className="text-slate-600 leading-relaxed">
            For a water droplet of radius r = 0.010 cm = 100 μm falling in air with η = 19 × 10⁻⁶ Pa·s and ρ = 1000 kg/m³:
            <br />
            <span className="font-mono font-semibold text-slate-800 block my-1">
              v_t = [2 × 9.8 × (10⁻⁴)² × 1000] / [9 × 19 × 10⁻⁶] = 1.1 m/s
            </span>
            Notice that because <strong className="text-slate-800">v_t ∝ r²</strong>, microscopic fog droplets (r ~ 10 μm) fall at just <strong className="text-slate-800">0.01 m/s (1 cm/s)</strong>, giving the appearance of floating in mid-air!
          </p>
        </div>
      </div>
    </div>
  );
};
