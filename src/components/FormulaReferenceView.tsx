import React, { useState } from 'react';
import { textbookFormulas, elasticConstantsTable, viscositiesTable } from '../data/mcqs';
import { BookOpen, Search, Copy, Check, Table, Calculator, Bookmark, Sparkles, HelpCircle } from 'lucide-react';

export const FormulaReferenceView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const handleCopy = (formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormula(formulaText);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const filteredFormulas = textbookFormulas.filter((f) => {
    const q = search.toLowerCase();
    return (
      f.name.toLowerCase().includes(q) ||
      f.formula.toLowerCase().includes(q) ||
      f.unit.toLowerCase().includes(q) ||
      f.ref.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 border border-indigo-900/40 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              Complete Reference Guide (A to Z)
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Physics Formulas, Elastic Constants & Viscosity Tables</h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
              Standard formulas from Class 11 Physics (Solids & Fluids) with SI units, dimensional formulas, and experimental data from Table 5.1 & Viscosity tables.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search formulas or units..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* SECTION 1: Key Formulas Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-600" />
            <h3 className="text-lg font-bold text-slate-900">Key Chapter Equations (A to Z)</h3>
          </div>
          <span className="text-xs text-slate-500">Showing {filteredFormulas.length} formulas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFormulas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-cyan-300 hover:shadow-md transition relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {item.ref}
                  </span>
                </div>

                <div className="bg-slate-900 text-cyan-300 p-3 rounded-lg font-mono text-sm tracking-wide my-2 flex items-center justify-between group">
                  <span>{item.formula}</span>
                  <button
                    onClick={() => handleCopy(`${item.name}: ${item.formula} (${item.unit})`)}
                    className="text-slate-400 hover:text-white transition p-1"
                    title="Copy formula"
                  >
                    {copiedFormula?.includes(item.name) ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Unit:</span>
                <span className="font-semibold text-slate-700 font-mono">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Table 5.1 Elastic Constants */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Table className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">Table 5.1: Moduli of Elasticity (10⁹ N m⁻² or GPa)</h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Directly referenced from Page 91 of the textbook. Values are given in units of 10⁹ N m⁻² (Gigapascals).
            </p>
          </div>
          <div className="text-xs bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded-lg font-medium border border-indigo-200 self-start sm:self-auto">
            1 GPa = 10⁹ N/m² = 10⁹ Pa
          </div>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Material</th>
                <th className="py-3 px-4 text-right">Young's Modulus Y (10⁹ N/m²)</th>
                <th className="py-3 px-4 text-right">Bulk Modulus K (10⁹ N/m²)</th>
                <th className="py-3 px-4 text-right">Shear Modulus G (10⁹ N/m²)</th>
                <th className="py-3 px-4 text-center">Material Character</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {elasticConstantsTable.map((row, idx) => {
                let character = 'Solid';
                if (row.material === 'Water' || row.material === 'Mercury') character = 'Fluid (Y=0, G=0)';
                if (row.material === 'Diamond') character = 'Highest Rigidity (Hardest)';
                if (row.material === 'Steel') character = 'High Tensile Strength';

                return (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-2.5 px-4 font-semibold text-slate-900 flex items-center gap-1.5">
                      {row.material}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-medium">
                      {row.youngs !== null ? row.youngs : '—'}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-medium">
                      {row.bulk !== null ? row.bulk : '—'}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-medium">
                      {row.shear !== null ? row.shear : '—'}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                        character.includes('Fluid') ? 'bg-amber-100 text-amber-800' :
                        character.includes('Hardest') ? 'bg-purple-100 text-purple-800 font-bold' :
                        character.includes('High') ? 'bg-cyan-100 text-cyan-800' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {character}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Viscosities Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Table className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900">Coefficient of Viscosity (η)</h3>
            </div>
            <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold border border-emerald-200">
              Page 106
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Units: 10⁻³ N s m⁻² (mPa·s or centipoise). Notice Glycerin has the highest viscosity while Air has the lowest.
          </p>

          <div className="overflow-hidden border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold uppercase">
                <tr>
                  <th className="py-2.5 px-4">Substance</th>
                  <th className="py-2.5 px-4 text-right">Viscosity η (10⁻³ N s/m²)</th>
                  <th className="py-2.5 px-4 text-right">Relative Drag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {viscositiesTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-800">{row.material}</td>
                    <td className="py-2.5 px-4 text-right font-mono font-medium text-slate-900">
                      {row.viscosity}
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden inline-block align-middle ml-2">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${Math.min(100, (row.viscosity / 6.29) * 100)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: High-Yield Revision Summary (A to Z) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-slate-900">A-to-Z High Yield Revision Nuggets</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Crucial textbook points frequently tested in entrance exams and board papers:
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-bold text-cyan-700 shrink-0">1. Steel vs Rubber:</span>
                <span>Steel is more elastic than rubber because for the same deforming force, steel develops a much larger restoring stress (Y_steel &gt;&gt; Y_rubber).</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-bold text-cyan-700 shrink-0">2. Fluid Moduli:</span>
                <span>Fluids (liquids & gases) have only Bulk Modulus ($K$). Their Young's Modulus ($Y$) and Shear Modulus ($G$) are zero because they cannot sustain shear strain.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-bold text-cyan-700 shrink-0">3. Bernoulli Principle:</span>
                <span>Where fluid velocity is high, pressure is low ($P \propto 1/v$). Explains atomizer/carburetor action, chimney draft, and aerodynamic lift.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-bold text-cyan-700 shrink-0">4. Stokes' Law & vt:</span>
                <span>Terminal velocity is directly proportional to $r^2$ ($v_t \propto r^2$). Doubling droplet radius increases terminal velocity by a factor of 4!</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-bold text-cyan-700 shrink-0">5. Superfluid He-4:</span>
                <span>Below 2.17 K, liquid Helium-4 has zero viscosity ($\eta = 0$), climbs container walls, and flows through microscopic capillaries without friction.</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-center gap-2 mt-4">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              Tip: In Roman Urdu explanations inside the practice mode, look for the 💡 reasoning cards explaining why distractors are incorrect!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
