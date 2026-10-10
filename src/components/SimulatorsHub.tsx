import React, { useState } from 'react';
import { VenturiSimulator } from './simulators/VenturiSimulator';
import { TerminalVelocitySimulator } from './simulators/TerminalVelocitySimulator';
import { StressStrainSimulator } from './simulators/StressStrainSimulator';
import { ArchimedesTankSimulator } from './simulators/ArchimedesTankSimulator';
import { Activity, Gauge, Droplet, Anchor, Info, ExternalLink } from 'lucide-react';

interface SimulatorsHubProps {
  onGoToMCQsByTopic: (moduleCode: string) => void;
}

export const SimulatorsHub: React.FC<SimulatorsHubProps> = ({ onGoToMCQsByTopic }) => {
  const [activeLab, setActiveLab] = useState<'venturi' | 'stokes' | 'stress' | 'archimedes'>('venturi');

  const labTabs = [
    {
      id: 'venturi',
      title: 'Venturi Meter & Continuity',
      icon: Gauge,
      topic: 'Eq. 5.16 & Eq. 5.23 (Continuity & Bernoulli)',
      moduleCode: 'N',
      badge: 'Fluid Dynamics',
      desc: 'Investigate volume flow rate conservation, narrow throat speedup, and pressure drop.'
    },
    {
      id: 'stokes',
      title: 'Stokes’ Law & Terminal Velocity',
      icon: Droplet,
      topic: 'Eq. 5.26 & Eq. 5.29 (Viscous Drag & vt)',
      moduleCode: 'S',
      badge: 'Fluid Friction',
      desc: 'Simulate sphere falling in viscous media (Air, Water, Glycerin) with live drag curve.'
    },
    {
      id: 'stress',
      title: 'Stress-Strain & Elasticity',
      icon: Activity,
      topic: 'Sec 5.2 - 5.5 (Hooke’s Law, Young’s Modulus)',
      moduleCode: 'G',
      badge: 'Solid Mechanics',
      desc: 'Tensile testing curve with proportional limit, yield point, necking & fracture.'
    },
    {
      id: 'archimedes',
      title: 'Archimedes’ Buoyancy Tank',
      icon: Anchor,
      topic: 'Sec 5.6 - 5.8 (Upthrust, Floatation, Submarine)',
      moduleCode: 'K',
      badge: 'Hydrostatics',
      desc: 'Explore displaced liquid weight, floatation criteria, and submarine ballast flood.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 border border-cyan-800/40 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              Interactive Physics Laboratories
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Virtual Physics Experiments & Real-Time Simulators</h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
              Explore dynamic mathematical models of the textbook principles. Adjust pipe sizes, droplet radiuses, tensile loads, and fluid densities to see real-time graphical changes.
            </p>
          </div>
        </div>

        {/* Lab Navigation Pill Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {labTabs.map((lab) => {
            const Icon = lab.icon;
            const isActive = activeLab === lab.id;
            return (
              <button
                key={lab.id}
                onClick={() => setActiveLab(lab.id as any)}
                className={`text-left p-3.5 rounded-xl transition border relative ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg ring-1 ring-cyan-400'
                    : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-cyan-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900/60 text-slate-300 border border-slate-700">
                    {lab.badge}
                  </span>
                </div>
                <div className="font-bold text-sm">{lab.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-2 mt-1">{lab.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulator Viewer */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        {activeLab === 'venturi' && <VenturiSimulator />}
        {activeLab === 'stokes' && <TerminalVelocitySimulator />}
        {activeLab === 'stress' && <StressStrainSimulator />}
        {activeLab === 'archimedes' && <ArchimedesTankSimulator />}

        {/* Related MCQs Quick Jump Button */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>
              Want to test your mastery of this concept with textbook numericals and conceptual questions?
            </span>
          </div>

          <button
            onClick={() => {
              const currentLab = labTabs.find((l) => l.id === activeLab);
              if (currentLab) {
                onGoToMCQsByTopic(currentLab.moduleCode);
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 font-semibold text-cyan-800 bg-cyan-100 hover:bg-cyan-200 rounded-lg transition whitespace-nowrap"
          >
            Practice MCQs for this topic <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
