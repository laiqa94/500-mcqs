import { MCQ, ModuleInfo } from '../../types/physics';
import { mcqsModuleA_E } from './moduleA_E';
import { mcqsModuleF_J } from './moduleF_J';
import { mcqsModuleK_O } from './moduleK_O';
import { mcqsModuleP_T } from './moduleP_T';

export const allMCQs: MCQ[] = [
  ...mcqsModuleA_E,
  ...mcqsModuleF_J,
  ...mcqsModuleK_O,
  ...mcqsModuleP_T
];

export const modulesList: ModuleInfo[] = [
  {
    code: 'A',
    name: 'Crystalline Solids & Crystal Lattice',
    topicRange: 'Classification of solids, periodic 3D arrangement, XRD, TEM, unit cell & NaCl lattice',
    startId: 1,
    endId: 25,
    count: 25,
    summary: 'Long-range order, sharp melting point, X-ray diffraction (XRD), transmission electron microscopy (TEM), lattice vibrations, cohesive forces, anisotropy.'
  },
  {
    code: 'B',
    name: 'Amorphous Solids, Glasses & Polymers',
    topicRange: 'Disordered structure, supercooled liquids, glass transition, plastics, nylon & natural rubber',
    startId: 26,
    endId: 50,
    count: 25,
    summary: 'Disordered glassy structure, lack of definite melting point, softening at 800 °C, (C5H8)n natural rubber, high strength-to-weight ratio, isotropy.'
  },
  {
    code: 'C',
    name: 'Mechanical Properties & Deformation',
    topicRange: 'External forces, elasticity, restoring forces, rubber ball, steel vs rubber comparison',
    startId: 51,
    endId: 75,
    count: 25,
    summary: 'Deformation mechanisms, elasticity, interatomic cohesive restoring forces, Brain Teaser: steel vs rubber elasticity, Poisson ratio, elastic hysteresis & fatigue.'
  },
  {
    code: 'D',
    name: 'Stress: Tensile, Volume, Shear & Units',
    topicRange: 'Force per unit area, Pa/N m⁻², [M L⁻¹ T⁻²], normal vs shear stress, Example 5.1 tractor problem',
    startId: 76,
    endId: 100,
    count: 25,
    summary: 'Stress definition (σ = F/A), Pascal (Pa), tensile stress, volume stress, shear stress, Example 5.1 numerical calculation (88.46 × 10⁶ N/m²).'
  },
  {
    code: 'E',
    name: 'Strain: Tensile, Volumetric & Shear Angle',
    topicRange: 'Fractional change, dimensionless [M⁰ L⁰ T⁰], ΔL/L₀, ΔV/V₀, γ = tanθ ≈ θ in radians',
    startId: 101,
    endId: 125,
    count: 25,
    summary: 'Dimensionless strain, tensile strain (ΔL/L₀), volumetric strain (ΔV/V₀), shear strain (γ = tanθ ≈ θ rad), Example 5.1 elongation calculation (4.84 mm).'
  },
  {
    code: 'F',
    name: 'Moduli of Elasticity & Hooke\'s Law',
    topicRange: 'Young\'s (Y), Bulk (K), Shear (G), Table 5.1 values (Steel, Diamond, Water, Mercury)',
    startId: 126,
    endId: 150,
    count: 25,
    summary: 'Young\'s modulus Y = (F/A)/(ΔL/L₀), Table 5.1 elastic constants, Bulk modulus K = -ΔP/(ΔV/V₀), Shear modulus G = τ/θ, Hooke\'s law region OA, slope of graph.'
  },
  {
    code: 'G',
    name: 'Searle\'s Apparatus & Experimental Method',
    topicRange: 'Reference wire, test wire, spirit level, micrometer screw, slotted weights & Young\'s graph',
    startId: 151,
    endId: 175,
    count: 25,
    summary: 'Searle\'s apparatus design, eliminating thermal error via reference wire, spirit level bubble leveling, micrometer screw reading, stress-strain plotting.'
  },
  {
    code: 'H',
    name: 'Stress-Strain Curve, Yield Point & UTS',
    topicRange: 'Proportional limit (A), yield point (B), UTS (C), fracture (D), necking & work hardening',
    startId: 176,
    endId: 200,
    count: 25,
    summary: 'Universal testing machine curve, proportional limit σ_p, elastic limit / yield stress σ_y, ultimate tensile strength σ_m, fracture stress σ_f, necking.'
  },
  {
    code: 'I',
    name: 'Ductile vs Brittle Materials & Plasticity',
    topicRange: 'Lead, copper, wrought iron vs glass, high-carbon steel, beryllium, bismuth & chromium',
    startId: 201,
    endId: 225,
    count: 25,
    summary: 'Ductile substances (undergo plastic flow before breaking: Cu, Pb, Fe), Brittle substances (break right after elastic limit: glass, high-C steel, Be, Bi, Cr).'
  },
  {
    code: 'J',
    name: 'Strain Energy in Deformed Materials',
    topicRange: 'W = ½ F x = ½ k x², area under force-extension graph, spring work & energy density',
    startId: 226,
    endId: 250,
    count: 25,
    summary: 'Average force ½ F, work done W = ½ F x, Hooke\'s law energy E = ½ k x², area under triangle OPQ, strain energy density u = ½ σ ε = σ²/(2Y).'
  },
  {
    code: 'K',
    name: 'Archimedes\' Principle & Buoyancy',
    topicRange: 'Upthrust = ρ g V = ρ g A h, apparent loss in weight, Example 5.2 wooden cube calculation',
    startId: 251,
    endId: 275,
    count: 25,
    summary: 'Archimedes\' principle, derivation of upthrust F_b = ρ g V, apparent weight W_app = W - F_b, Example 5.2 numerical (9.8 N), hydrometer principle.'
  },
  {
    code: 'L',
    name: 'Floatation: Ships, Submarines & Balloons',
    topicRange: 'Floating condition, hollow steel ships, submarine ballast tanks, Example 5.3 weather balloon',
    startId: 276,
    endId: 300,
    count: 25,
    summary: 'Principle of floatation (displaces fluid equal to its weight), why steel ships float, submarine ballast tanks, Example 5.3 hydrogen balloon lift (38.58 N).'
  },
  {
    code: 'M',
    name: 'Fluid Dynamics, Streamlines & Ideal Fluids',
    topicRange: 'Laminar flow, turbulent flow, eddies/whirlpools, non-viscous, incompressible, steady flow',
    startId: 301,
    endId: 325,
    count: 25,
    summary: 'Steady streamline flow, streamlines cannot cross, turbulent flow with eddies, 4 ideal fluid conditions (non-viscous, incompressible, steady, irrotational).'
  },
  {
    code: 'N',
    name: 'Flow Rate & Equation of Continuity',
    topicRange: 'Q = A v (m³/s), A₁v₁ = A₂v₂, conservation of mass, squeezing rubber hose & Example 5.4',
    startId: 326,
    endId: 350,
    count: 25,
    summary: 'Rate of flow Q = Av, mass conservation ρ₁A₁v₁ = ρ₂A₂v₂, incompressible form A₁v₁ = A₂v₂, squeezing garden hose, tap water stream narrowing, Example 5.4.'
  },
  {
    code: 'O',
    name: 'Bernoulli\'s Equation & Energy Conservation',
    topicRange: 'P + ½ρv² + ρgh = const, work-energy theorem, speed-pressure trade-off & aerodynamic lift',
    startId: 351,
    endId: 375,
    count: 25,
    summary: 'Bernoulli statement, pressure + KE/vol + PE/vol = const, conservation of energy, horizontal pipe relation P + ½ρv² = const ("where speed is high, pressure is low").'
  },
  {
    code: 'P',
    name: 'Torricelli\'s Theorem & Efflux Speed',
    topicRange: 'v = √(2g(h₁ - h₂)), orifice efflux velocity, vertical fountain height & projectile range',
    startId: 376,
    endId: 400,
    count: 25,
    summary: 'Torricelli\'s theorem v₂ = √(2g(h₁ - h₂)), speed equal to free-fall velocity, orifice A and upward fountain orifice B, range formula R = 2√(y(H-y)).'
  },
  {
    code: 'Q',
    name: 'Venturi Meter & Venturi Relation',
    topicRange: 'P₁ - P₂ = ½ρ(v₂² - v₁²), P₁ - P₂ = ½ρv₂², U-tube manometer liquid height difference h',
    startId: 401,
    endId: 425,
    count: 25,
    summary: 'Venturi relation Eq 5.23 & 5.24, manometer pressure difference P₁ - P₂ = ρ_m g h, flow meter equation, constriction speed-pressure conversion, cavitation.'
  },
  {
    code: 'R',
    name: 'Real-World Bernoulli Applications',
    topicRange: 'Carburetor (Fig 5.21), paint sprayer/atomizer (Fig 5.22), chimney draft & Magnus effect',
    startId: 426,
    endId: 450,
    count: 25,
    summary: 'Carburetor venturi drawing petrol vapor, paint sprayer/perfume atomizer air jet, tall chimney draft, Magnus effect on spinning balls, blood flow acoustics.'
  },
  {
    code: 'S',
    name: 'Viscosity, Viscous Drag & Stokes\' Law',
    topicRange: 'Internal friction, coefficient η (N s m⁻²), Stokes\' F = 6πηrv, Table of Viscosities',
    startId: 451,
    endId: 475,
    count: 25,
    summary: 'Viscosity definition, Greek letter η, retarding drag force, Stokes\' law F = 6πηrv, table of viscosities (air 0.019, water 0.801, glycerin 6.29, plasma 1.6).'
  },
  {
    code: 'T',
    name: 'Terminal Velocity & Superfluids (He-4)',
    topicRange: 'v_t = 2gr²ρ/(9η), net force zero, fog droplets, liquid He-4 at <4 K, zero viscosity, wall creep',
    startId: 476,
    endId: 500,
    count: 25,
    summary: 'Terminal velocity derivation v_t = (2gr²ρ)/(9η), net force zero, Example 5.5 (1.1 m/s), parachute operation, Superfluids (liquid He-4 at <4 K, zero viscosity, climbs walls, superconducting magnets).'
  }
];

export const textbookFormulas = [
  { name: 'Mechanical Stress', formula: '\\sigma = \\frac{F}{A}', unit: '\\text{N m}^{-2} \\text{ (Pa)}', ref: 'Eq. 5.1, Page 90' },
  { name: 'Tensile Strain', formula: '\\varepsilon = \\frac{\\Delta L}{L_0}', unit: '\\text{Dimensionless}', ref: 'Eq. 5.2, Page 90' },
  { name: 'Volumetric Strain', formula: '\\varepsilon_v = \\frac{\\Delta V}{V_0}', unit: '\\text{Dimensionless}', ref: 'Eq. 5.3, Page 90' },
  { name: 'Shear Strain', formula: '\\gamma = \\tan\\theta = \\frac{\\Delta x}{y} \\approx \\theta', unit: '\\text{Radian}', ref: 'Eq. 5.4-5.5, Page 90-91' },
  { name: 'Young\'s Modulus', formula: 'Y = \\frac{\\sigma}{\\varepsilon} = \\frac{F/A}{\\Delta L/L_0}', unit: '\\text{N m}^{-2}', ref: 'Eq. 5.6, Page 91' },
  { name: 'Bulk Modulus', formula: 'K = -\\frac{\\Delta P}{\\Delta V/V_0}', unit: '\\text{N m}^{-2}', ref: 'Sec 5.3, Page 91' },
  { name: 'Shear Modulus', formula: 'G = \\frac{\\tau}{\\gamma} = \\frac{F/A}{\\theta}', unit: '\\text{N m}^{-2}', ref: 'Sec 5.3, Page 91' },
  { name: 'Strain Energy', formula: 'W = \\frac{1}{2} F x = \\frac{1}{2} k x^2', unit: '\\text{Joule (J)}', ref: 'Eq. 5.7-5.8, Page 94' },
  { name: 'Archimedes\' Upthrust', formula: 'F_b = \\rho g V', unit: '\\text{Newton (N)}', ref: 'Eq. 5.11, Page 95' },
  { name: 'Rate of Volume Flow', formula: 'Q = A v = \\frac{\\text{Volume}}{t}', unit: '\\text{m}^3 \\text{s}^{-1}', ref: 'Eq. 5.12, Page 99' },
  { name: 'Equation of Continuity', formula: 'A_1 v_1 = A_2 v_2', unit: '\\text{Mass Conserved}', ref: 'Eq. 5.16, Page 100' },
  { name: 'Bernoulli\'s Equation', formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{Constant}', unit: '\\text{Energy Conserved}', ref: 'Sec 5.11, Page 101' },
  { name: 'Venturi Relation', formula: 'P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)', unit: '\\text{Pascal (Pa)}', ref: 'Eq. 5.23, Page 104' },
  { name: 'Torricelli\'s Theorem', formula: 'v_2 = \\sqrt{2g(h_1 - h_2)}', unit: '\\text{m s}^{-1}', ref: 'Eq. 5.25, Page 105' },
  { name: 'Stokes\' Law Drag', formula: 'F = 6 \\pi \\eta r v', unit: '\\text{Newton (N)}', ref: 'Eq. 5.26, Page 106' },
  { name: 'Terminal Velocity', formula: 'v_t = \\frac{2 g r^2 \\rho}{9 \\eta}', unit: '\\text{m s}^{-1}', ref: 'Eq. 5.29, Page 107' }
];

export const elasticConstantsTable = [
  { material: 'Aluminium', youngs: 70, bulk: 70, shear: 30 },
  { material: 'Bone (compact)', youngs: 15, bulk: null, shear: 80 },
  { material: 'Brass', youngs: 91, bulk: 61, shear: 36 },
  { material: 'Concrete', youngs: 25, bulk: null, shear: null },
  { material: 'Copper', youngs: 110, bulk: 140, shear: 44 },
  { material: 'Diamond', youngs: 1120, bulk: 540, shear: 450 },
  { material: 'Glass', youngs: 55, bulk: 31, shear: 23 },
  { material: 'Ice', youngs: 14, bulk: 8, shear: 3 },
  { material: 'Lead', youngs: 15, bulk: 7.7, shear: 5.6 },
  { material: 'Mercury', youngs: 0, bulk: 27, shear: 0 },
  { material: 'Steel', youngs: 200, bulk: 160, shear: 84 },
  { material: 'Tungsten', youngs: 390, bulk: 200, shear: 150 },
  { material: 'Water', youngs: 0, bulk: 2.2, shear: 0 }
];

export const viscositiesTable = [
  { material: 'Air', viscosity: 0.019 },
  { material: 'Acetone', viscosity: 0.295 },
  { material: 'Methanol', viscosity: 0.510 },
  { material: 'Benzene', viscosity: 0.564 },
  { material: 'Water', viscosity: 0.801 },
  { material: 'Ethanol', viscosity: 1.000 },
  { material: 'Blood Plasma', viscosity: 1.6 },
  { material: 'Glycerin', viscosity: 6.29 }
];
