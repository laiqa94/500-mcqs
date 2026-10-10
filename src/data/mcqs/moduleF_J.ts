import { MCQ } from '../../types/physics';

export const mcqsModuleF_J: MCQ[] = [
  // ==========================================
  // MODULE F: Moduli of Elasticity (Young's, Bulk, Shear) & Table 5.1 (MCQs 126-150)
  // ==========================================
  {
    id: 126,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Young\'s Modulus Definition',
    question: 'How is Young\'s modulus ($Y$) defined in Section 5.3 on page 91 of the textbook?',
    options: [
      'The stress applied per unit strain: $Y = \\frac{\\text{Tensile stress}}{\\text{Tensile strain}}$',
      'The product of stress and strain',
      'The ratio of force to original length',
      'The volume displaced per second'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91 defines: "The stress applied per unit strain is called Young\'s modulus. i.e., $Y = \\frac{\\text{Tensile stress}}{\\text{Tensile strain}} = \\frac{F/A}{\\Delta L / L_0}$."',
    reasonUrdu: 'Wajah: Page 91 ke mutabiq Tensile stress aur Tensile strain ke ratio ko Young\'s modulus kehte hain.',
    formula: 'Y = \\frac{F/A}{\\Delta L / L_0}',
    textbookRef: 'Sec 5.3, Eq 5.6, Page 91'
  },
  {
    id: 127,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'SI Unit of Young\'s Modulus',
    question: 'What is the SI unit of Young\'s modulus, Bulk modulus, and Shear modulus?',
    options: [
      '$\\text{N m}^{-2}$ or Pascal (Pa)',
      '$\\text{N m}$ (Joule)',
      'Dimensionless',
      '$\\text{kg m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91 states: "It has the same unit as that of stress i.e., $\\text{N m}^{-2}$." Because strain is dimensionless, the modulus of elasticity has identical units to stress.',
    reasonUrdu: 'Wajah: Strain dimensionless hoti hai, is liye Young\'s modulus ka unit bhi stress wala (N m^-2 ya Pascal) hota hai.',
    formula: '[Y] = \\text{N m}^{-2} = \\text{Pa}',
    textbookRef: 'Sec 5.3, Page 91'
  },
  {
    id: 128,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Historical Context of Young\'s Modulus',
    question: 'According to the "For Your Information" box on page 91, although named after the 19th-century British scientist Thomas Young, who originally developed the concept in 1727?',
    options: [
      'Leonhard Euler',
      'Robert Hooke',
      'Daniel Bernoulli',
      'George Gabriel Stokes'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91 notes: "Although it is named after the 19th century British Scientist Thomas Young, the concept was developed in 1727 by Leonhard Euler."',
    reasonUrdu: 'Wajah: Book ke mutabiq Young\'s modulus ka concept 1727 ma Leonhard Euler ne develop kiya tha.',
    formula: 'N/A',
    textbookRef: 'For your info, Page 91'
  },
  {
    id: 129,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Young\'s Modulus of Steel vs Copper',
    question: 'According to Table 5.1 on page 91, what are the values of Young\'s modulus for Steel and Copper?',
    options: [
      'Steel: $200 \\times 10^9\\text{ N m}^{-2}$; Copper: $110 \\times 10^9\\text{ N m}^{-2}$',
      'Steel: $70 \\times 10^9\\text{ N m}^{-2}$; Copper: $91 \\times 10^9\\text{ N m}^{-2}$',
      'Steel: $1120 \\times 10^9\\text{ N m}^{-2}$; Copper: $15 \\times 10^9\\text{ N m}^{-2}$',
      'Steel: $390 \\times 10^9\\text{ N m}^{-2}$; Copper: $25 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 lists: Steel = $200 \\times 10^9\\text{ N m}^{-2}$ and Copper = $110 \\times 10^9\\text{ N m}^{-2}$. Steel is almost twice as stiff as copper.',
    reasonUrdu: 'Wajah: Table 5.1 ma Steel ka Young\'s modulus 200 x 10^9 N/m^2 aur Copper ka 110 x 10^9 N/m^2 darj hai.',
    formula: 'Y_{steel} = 200 \\times 10^9, \\quad Y_{copper} = 110 \\times 10^9',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 130,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Elastic Constants of Liquids (Water & Mercury)',
    question: 'According to Table 5.1 on page 91, what are the values of Young\'s modulus ($Y$) and Shear modulus for Water and Mercury?',
    options: [
      '$Y = 0$ and Shear Modulus = $0$, because static liquids cannot sustain tensile or shear stresses',
      '$Y = 200 \\times 10^9\\text{ N m}^{-2}$',
      '$Y = 1120 \\times 10^9\\text{ N m}^{-2}$',
      'They are infinite'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 explicitly lists Young\'s Modulus = 0 and Shear Modulus = 0 for both Water and Mercury. Liquids have no fixed shape and cannot resist shear or tensile loads, but they do have a Bulk Modulus (Water: $2.2 \\times 10^9$, Mercury: $27 \\times 10^9\\text{ N m}^{-2}$).',
    reasonUrdu: 'Wajah: Liquids tension ya shear bardasht nahi kar saktay, is liye unka Young\'s aur Shear modulus 0 hota hai; sirf Bulk modulus hota hai.',
    formula: 'Y_{liquid} = 0, \\quad G_{liquid} = 0',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 131,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Bulk Modulus of Water vs Mercury',
    question: 'According to Table 5.1, the Bulk Modulus of mercury ($27 \\times 10^9\\text{ N m}^{-2}$) compared to water ($2.2 \\times 10^9\\text{ N m}^{-2}$) is approximately:',
    options: [
      'About 12 times larger, meaning mercury is far less compressible than water',
      'Identical',
      '100 times smaller',
      'Zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Bulk modulus measures resistance to compression. $K_{Hg} / K_{water} = 27 / 2.2 \\approx 12.3$. Mercury is over 12 times more resistant to compression than water.',
    reasonUrdu: 'Wajah: Mercury ka Bulk modulus 27 x 10^9 hai jab ke water ka 2.2 x 10^9 hai; mercury ko dabana 12 guna mushkil hai.',
    formula: 'K = -\\frac{\\Delta P}{\\Delta V / V_0}',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 132,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Bulk Modulus Definition',
    question: 'How is the Bulk Modulus ($K$) of a substance defined mathematically?',
    options: [
      '$K = -\\frac{\\text{Volumetric stress}}{\\text{Volumetric strain}} = -\\frac{\\Delta P}{\\Delta V / V_0}$',
      '$K = \\frac{\\text{Tensile stress}}{\\text{Tensile strain}}$',
      '$K = \\frac{\\text{Shear stress}}{\\text{Shear strain}}$',
      '$K = \\Delta P \\times \\Delta V$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Bulk modulus relates uniform change in pressure (volumetric stress $\\Delta P$) to fractional change in volume (volumetric strain $\\Delta V/V_0$). The negative sign accounts for volume decrease under pressure.',
    reasonUrdu: 'Wajah: Bulk modulus volumetric stress aur volumetric strain ka ratio hota hai: K = -\\Delta P / (\\Delta V / V0).',
    formula: 'K = -\\frac{\\Delta P}{\\Delta V / V_0}',
    textbookRef: 'Sec 5.3, Table 5.1, Page 91'
  },
  {
    id: 133,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Compressibility Definition',
    question: 'The reciprocal of the Bulk Modulus of a substance ($k = 1/K$) is termed its:',
    options: ['Compressibility', 'Young\'s modulus', 'Viscosity', 'Poisson\'s ratio'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Compressibility is defined as the fractional change in volume per unit increase in pressure: $k = \\frac{1}{K} = -\\frac{\\Delta V / V_0}{\\Delta P}$.',
    reasonUrdu: 'Wajah: Bulk modulus ke reciprocal (1/K) ko Compressibility kehte hain.',
    formula: 'k = \\frac{1}{K}',
    textbookRef: 'Sec 5.3, Page 91'
  },
  {
    id: 134,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Shear Modulus (Modulus of Rigidity)',
    question: 'The ratio of tangential shear stress ($\\tau = F/A$) to shear strain ($\\gamma = \\tan\\theta$) is defined as:',
    options: [
      'Shear Modulus (or Modulus of Rigidity, $G$ or $\\eta$)',
      'Young\'s modulus',
      'Bulk modulus',
      'Torricelli coefficient'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Shear modulus $G = \\frac{\\tau}{\\gamma} = \\frac{F/A}{\\theta}$, measuring the resistance of an elastic body to shape change under pure shear.',
    reasonUrdu: 'Wajah: Shear stress aur shear strain ke ratio ko Shear Modulus ya Modulus of Rigidity kehte hain.',
    formula: 'G = \\frac{F/A}{\\theta}',
    textbookRef: 'Sec 5.3, Table 5.1, Page 91'
  },
  {
    id: 135,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Tungsten in Table 5.1',
    question: 'According to Table 5.1, what is the Young\'s modulus of Tungsten?',
    options: [
      '$390 \\times 10^9\\text{ N m}^{-2}$',
      '$70 \\times 10^9\\text{ N m}^{-2}$',
      '$15 \\times 10^9\\text{ N m}^{-2}$',
      '$25 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 explicitly lists Tungsten with Young\'s modulus $390 \\times 10^9\\text{ N m}^{-2}$, Bulk modulus $200 \\times 10^9\\text{ N m}^{-2}$, and Shear modulus $150 \\times 10^9\\text{ N m}^{-2}$.',
    reasonUrdu: 'Wajah: Table 5.1 ke mutabiq Tungsten ka Young\'s modulus 390 x 10^9 N/m^2 hai.',
    formula: 'Y_{tungsten} = 390 \\times 10^9 \\text{ N m}^{-2}',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 136,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Aluminium in Table 5.1',
    question: 'According to Table 5.1, what is the Young\'s modulus of Aluminium?',
    options: [
      '$70 \\times 10^9\\text{ N m}^{-2}$',
      '$200 \\times 10^9\\text{ N m}^{-2}$',
      '$1120 \\times 10^9\\text{ N m}^{-2}$',
      '$14 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 lists Aluminium: Young\'s Modulus = $70 \\times 10^9\\text{ N m}^{-2}$, Bulk Modulus = $70 \\times 10^9\\text{ N m}^{-2}$, Shear Modulus = $30 \\times 10^9\\text{ N m}^{-2}$.',
    reasonUrdu: 'Wajah: Table 5.1 ma Aluminium ka Young\'s modulus 70 x 10^9 N/m^2 diya gaya hai.',
    formula: 'Y_{Al} = 70 \\times 10^9 \\text{ N m}^{-2}',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 137,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Bone and Concrete Moduli in Table 5.1',
    question: 'According to Table 5.1, what are the Young\'s moduli of Bone and Concrete?',
    options: [
      'Bone: $15 \\times 10^9\\text{ N m}^{-2}$; Concrete: $25 \\times 10^9\\text{ N m}^{-2}$',
      'Bone: $200 \\times 10^9\\text{ N m}^{-2}$; Concrete: $390 \\times 10^9\\text{ N m}^{-2}$',
      'Bone: $0$; Concrete: $0$',
      'Bone: $1120 \\times 10^9\\text{ N m}^{-2}$; Concrete: $110 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 lists Bone = $15 \\times 10^9\\text{ N m}^{-2}$ and Concrete = $25 \\times 10^9\\text{ N m}^{-2}$.',
    reasonUrdu: 'Wajah: Table 5.1 ma Bone ka modulus 15 x 10^9 aur Concrete ka 25 x 10^9 N/m^2 hai.',
    formula: 'Y_{bone} = 15 \\times 10^9, \\quad Y_{concrete} = 25 \\times 10^9',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 138,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Ice and Glass Moduli in Table 5.1',
    question: 'According to Table 5.1, what are the Young\'s moduli of Ice and Glass?',
    options: [
      'Ice: $14 \\times 10^9\\text{ N m}^{-2}$; Glass: $55 \\times 10^9\\text{ N m}^{-2}$',
      'Ice: $0$; Glass: $200 \\times 10^9\\text{ N m}^{-2}$',
      'Ice: $1120 \\times 10^9\\text{ N m}^{-2}$; Glass: $14 \\times 10^9\\text{ N m}^{-2}$',
      'Ice: $70 \\times 10^9\\text{ N m}^{-2}$; Glass: $91 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 explicitly lists Ice = $14 \\times 10^9\\text{ N m}^{-2}$ and Glass = $55 \\times 10^9\\text{ N m}^{-2}$.',
    reasonUrdu: 'Wajah: Table 5.1 ke mutabiq Ice ka modulus 14 x 10^9 aur Glass ka 55 x 10^9 N/m^2 hai.',
    formula: 'Y_{ice} = 14 \\times 10^9, \\quad Y_{glass} = 55 \\times 10^9',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 139,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Lead Modulus in Table 5.1',
    question: 'According to Table 5.1, what is the Young\'s modulus of Lead?',
    options: [
      '$15 \\times 10^9\\text{ N m}^{-2}$',
      '$200 \\times 10^9\\text{ N m}^{-2}$',
      '$91 \\times 10^9\\text{ N m}^{-2}$',
      '$390 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 lists Lead: Young\'s modulus = $15 \\times 10^9\\text{ N m}^{-2}$, Bulk modulus = $7.7 \\times 10^9\\text{ N m}^{-2}$, Shear modulus = $5.6 \\times 10^9\\text{ N m}^{-2}$. Lead is a very soft, ductile metal.',
    reasonUrdu: 'Wajah: Table 5.1 ma Lead ka Young\'s modulus 15 x 10^9 N/m^2 diya gaya hai.',
    formula: 'Y_{lead} = 15 \\times 10^9 \\text{ N m}^{-2}',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 140,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Formula for Wire Elongation',
    question: 'From the definition of Young\'s modulus ($Y = \\frac{F L_0}{A \\Delta L}$), the elongation $\\Delta L$ of a wire of radius $r$ when loaded by mass $m$ is:',
    options: [
      '$\\Delta L = \\frac{m g L_0}{\\pi r^2 Y}$',
      '$\\Delta L = \\frac{\\pi r^2 Y}{m g L_0}$',
      '$\\Delta L = \\frac{m g Y}{\\pi r^2 L_0}$',
      '$\\Delta L = \\frac{m g L_0 r^2}{\\pi Y}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since $F = mg$ and $A = \\pi r^2$, substituting into $Y = \\frac{F L_0}{A \\Delta L}$ gives $\\Delta L = \\frac{F L_0}{A Y} = \\frac{mg L_0}{\\pi r^2 Y}$.',
    reasonUrdu: 'Wajah: Y = (F L0)/(A \\Delta L) se rearrange karne par \\Delta L = (mg L0)/(\\pi r^2 Y) banta hai.',
    formula: '\\Delta L = \\frac{m g L_0}{\\pi r^2 Y}',
    textbookRef: 'Sec 5.3 & 5.4, Page 91-92'
  },
  {
    id: 141,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Numerical Calculation of Wire Extension',
    question: 'A steel wire of length $2.0\\text{ m}$ and cross-sectional area $1.0 \\times 10^{-6}\\text{ m}^2$ is stretched by a force of $200\\text{ N}$. Given $Y_{steel} = 2.0 \\times 10^{11}\\text{ N m}^{-2}$, what is the extension $\\Delta L$?',
    options: [
      '$2.0 \\times 10^{-3}\\text{ m}$ ($2.0\\text{ mm}$)',
      '$1.0 \\times 10^{-3}\\text{ m}$ ($1.0\\text{ mm}$)',
      '$4.0 \\times 10^{-4}\\text{ m}$ ($0.4\\text{ mm}$)',
      '$5.0 \\times 10^{-2}\\text{ m}$ ($5.0\\text{ cm}$)'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$\\Delta L = \\frac{F L_0}{A Y} = \\frac{200 \\times 2.0}{(1.0 \\times 10^{-6}) \\times (2.0 \\times 10^{11})} = \\frac{400}{2.0 \\times 10^5} = 2.0 \\times 10^{-3}\\text{ m} = 2.0\\text{ mm}$.',
    reasonUrdu: 'Wajah: \\Delta L = (200 x 2.0) / (10^-6 x 2x10^11) = 400 / 200,000 = 2.0 x 10^-3 m = 2.0 mm.',
    formula: '\\Delta L = \\frac{F L_0}{A Y}',
    textbookRef: 'Sec 5.3 & 5.4, Page 91'
  },
  {
    id: 142,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Dependence on Wire Dimensions',
    question: 'Does the Young\'s modulus of a steel wire depend on its length or thickness?',
    options: [
      'No, Young\'s modulus is an intrinsic material property that depends only on the nature of the material, not on its dimensions',
      'Yes, longer wires have higher Young\'s modulus',
      'Yes, thicker wires have higher Young\'s modulus',
      'Yes, it doubles if length is doubled'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Young\'s modulus is an intensive material constant dictated by interatomic bond strength. While stiffness ($k = AY/L$) depends on dimensions, $Y$ itself is strictly independent of length and cross section!',
    reasonUrdu: 'Wajah: Young\'s modulus material ki intrinsic property hai jo wire ki length ya thickness par depend nahi karti.',
    formula: 'Y = \\text{Material Constant}',
    textbookRef: 'Sec 5.3 & 5.4, Page 91'
  },
  {
    id: 143,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Ratio of Elongations of Steel and Copper',
    question: 'Two wires of equal length and equal cross-sectional area, one made of steel ($Y = 200\\text{ GPa}$) and one of copper ($Y = 100\\text{ GPa}$), are loaded with the same tensile force. What is the ratio $\\Delta L_{steel} / \\Delta L_{copper}$?',
    options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$\\Delta L = \\frac{F L_0}{A Y} \\implies \\Delta L \\propto \\frac{1}{Y}$. Therefore $\\frac{\\Delta L_{steel}}{\\Delta L_{copper}} = \\frac{Y_{copper}}{Y_{steel}} = \\frac{100}{200} = \\frac{1}{2}$. Steel stretches half as much because it is twice as stiff.',
    reasonUrdu: 'Wajah: \\Delta L Young\'s modulus ke inversely proportional hoti hai; Steel ka modulus double hai to extension aadhi hogi (1:2).',
    formula: '\\frac{\\Delta L_1}{\\Delta L_2} = \\frac{Y_2}{Y_1}',
    textbookRef: 'Sec 5.3, Table 5.1, Page 91'
  },
  {
    id: 144,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Interatomic Force Constant ($k_a$)',
    question: 'If the average equilibrium interatomic spacing in a crystal is $r_0$ and its Young\'s modulus is $Y$, what is the microscopic interatomic spring force constant $k_a$?',
    options: ['$k_a = Y \\cdot r_0$', '$k_a = \\frac{Y}{r_0}$', '$k_a = Y \\cdot r_0^2$', '$k_a = \\frac{r_0}{Y}$'],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Considering a single atomic chain of cross-sectional area $r_0^2$ and length $r_0$, spring constant $k_a = \\frac{F}{\\Delta r} = \\frac{\\sigma r_0^2}{\\varepsilon r_0} = \\frac{\\sigma}{\\varepsilon} r_0 = Y r_0$.',
    reasonUrdu: 'Wajah: Microscopic level par atomic spring constant ka formula ka = Y x r0 hota hai.',
    formula: 'k_a = Y \\cdot r_0',
    textbookRef: 'Sec 5.3, Page 91'
  },
  {
    id: 145,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Bulk Modulus of Ideal Incompressible Fluid',
    question: 'For a perfectly incompressible substance (whose volume cannot change under any pressure, $\\Delta V = 0$), what is its Bulk Modulus?',
    options: ['Infinity ($\\infty$)', 'Zero ($0$)', '$1.0\\text{ Pa}$', '$-1.0\\text{ Pa}$'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$K = -\\frac{\\Delta P}{\\Delta V / V_0}$. If $\\Delta V = 0$ for any non-zero $\\Delta P$, the denominator is zero, so $K = \\infty$ and compressibility $k = 1/K = 0$.',
    reasonUrdu: 'Wajah: Agar volume tabdeel na ho sakay (\\Delta V = 0), to Bulk Modulus K = \\Delta P / 0 = infinity hota hai.',
    formula: 'K = \\infty, \\quad k = 0',
    textbookRef: 'Sec 5.3 & 5.8, Page 91, 98'
  },
  {
    id: 146,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Relation Between Elastic Constants',
    question: 'For an isotropic homogenous elastic solid, which relation correctly links Young\'s modulus ($Y$), Bulk modulus ($K$), and Poisson\'s ratio ($\\nu$)?',
    options: [
      '$Y = 3K(1 - 2\\nu)$',
      '$Y = K(1 + \\nu)$',
      '$Y = 9K(1 - \\nu)$',
      '$Y = \\frac{3K}{1 - 2\\nu}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'In the theory of linear elasticity, the exact relationship is $Y = 3K(1 - 2\\nu)$ and also $Y = 2G(1 + \\nu)$.',
    reasonUrdu: 'Wajah: Theory of elasticity ma Young\'s aur Bulk modulus ka relation Y = 3K(1 - 2\\nu) hota hai.',
    formula: 'Y = 3K(1 - 2\\nu)',
    textbookRef: 'Sec 5.3, Page 91'
  },
  {
    id: 147,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Shear and Bulk Modulus Interconnection',
    question: 'Which relation correctly expresses Young\'s modulus ($Y$) in terms of Bulk modulus ($K$) and Shear modulus ($G$)?',
    options: [
      '$\\frac{9}{Y} = \\frac{3}{G} + \\frac{1}{K}$ (or $Y = \\frac{9KG}{3K + G}$)',
      '$Y = 3K + G$',
      '$Y = \\frac{K + G}{2}$',
      '$Y = 9KG$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Eliminating Poisson\'s ratio $\\nu$ between $Y = 3K(1 - 2\\nu)$ and $Y = 2G(1 + \\nu)$ gives $\\frac{9}{Y} = \\frac{3}{G} + \\frac{1}{K}$, which rearranges to $Y = \\frac{9KG}{3K + G}$.',
    reasonUrdu: 'Wajah: Y, K aur G ke darmiyan standard relation Y = (9KG) / (3K + G) hota hai.',
    formula: 'Y = \\frac{9KG}{3K + G}',
    textbookRef: 'Sec 5.3, Page 91'
  },
  {
    id: 148,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Compressibility of Water Calculation',
    question: 'Given the Bulk Modulus of water is $2.2 \\times 10^9\\text{ N m}^{-2}$ (Table 5.1), what pressure increase is required to compress a volume of water by $0.1\\%$ ($\\Delta V / V_0 = 1.0 \\times 10^{-3}$)?',
    options: [
      '$2.2 \\times 10^6\\text{ N m}^{-2}$ ($2.2\\text{ MPa}$ or $\\approx 22\\text{ atm}$)',
      '$2.2 \\times 10^3\\text{ N m}^{-2}$',
      '$2.2 \\times 10^9\\text{ N m}^{-2}$',
      '$1.0 \\times 10^5\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$\\Delta P = K \\times \\frac{\\Delta V}{V_0} = (2.2 \\times 10^9\\text{ N/m}^2) \\times (1.0 \\times 10^{-3}) = 2.2 \\times 10^6\\text{ N/m}^2 = 2.2\\text{ MPa}$. This proves why water is treated as practically incompressible in everyday hydraulics!',
    reasonUrdu: 'Wajah: \\Delta P = K x (\\Delta V / V0) = 2.2 x 10^9 x 0.001 = 2.2 x 10^6 Pa (taqreeban 22 atmospheres dabao).',
    formula: '\\Delta P = K \\frac{\\Delta V}{V_0}',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 149,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Elastic Limit as Upper Bound for Hooke\'s Law',
    question: 'Hooke\'s Law ($\\{Stress\\} \\propto \\{Strain\\}$) is valid strictly within:',
    options: [
      'The proportional limit of the material',
      'The plastic yield region',
      'The ultimate tensile strength point',
      'The fracture point'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92 explicitly states: "Hooke\'s law which states that the strain (deformation) is directly proportional to stress (force or load) is obeyed in the region OA (proportional limit)."',
    reasonUrdu: 'Wajah: Hooke\'s law sirf proportional limit (region OA) tak lagu hota hai jahan stress-strain graph seedhi line hota hai.',
    formula: '\\sigma \\propto \\varepsilon \\quad (\\text{region } OA)',
    textbookRef: 'Sec 5.5, Page 92'
  },
  {
    id: 150,
    module: 'F',
    moduleName: 'Moduli of Elasticity & Hooke\'s Law',
    topic: 'Young\'s Modulus from Stress-Strain Graph',
    question: 'On a standard stress-strain graph plotted within the elastic proportional region, what does the slope of the straight line represent?',
    options: [
      'Young\'s Modulus of the material ($Y = \\Delta\\sigma / \\Delta\\varepsilon$)',
      'The strain energy stored',
      'The ultimate tensile strength',
      'The density of the wire'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92: "The value of slope is equal to Young\'s modulus of wire: $\\text{Slope } Y = \\frac{\\text{Stress}}{\\text{Strain}}$."',
    reasonUrdu: 'Wajah: Stress-strain graph ki slope Young\'s modulus ke barabar hoti hai (Slope = Stress / Strain = Y).',
    formula: '\\text{Slope} = \\frac{\\sigma}{\\varepsilon} = Y',
    textbookRef: 'Sec 5.4 & 5.5, Page 92'
  },

  // ==========================================
  // MODULE G: Searle's Apparatus & Experimental Determination (MCQs 151-175)
  // ==========================================
  {
    id: 151,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Purpose of Searle\'s Apparatus',
    question: 'According to Section 5.4 on page 91, Searle\'s apparatus is an experimental setup specifically designed to determine:',
    options: [
      'The Young\'s modulus of a wire',
      'The terminal velocity of falling droplets',
      'The viscosity of motor oil',
      'The speed of efflux from an orifice'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91 explicitly states: "There are various methods to determine the Young\'s modulus of a wire. One of the method is Searle\'s method."',
    reasonUrdu: 'Wajah: Searle\'s apparatus wire ka Young\'s modulus experimentally maloom karne ke liye use hota hai.',
    formula: 'Y = \\frac{F L_0}{A \\Delta L}',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 152,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Why Two Wires are Used in Searle\'s Apparatus',
    question: 'In Searle\'s apparatus, why are TWO identical wires (reference wire and test wire) suspended side by side from the same rigid support?',
    options: [
      'To automatically eliminate experimental errors due to thermal expansion and sagging of the main support',
      'To double the maximum breaking tension',
      'So that one wire can carry electrical current',
      'To measure Stokes drag force'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Both wires have equal length and material. Any temperature change or support yielding elongates both equally. The spirit level tilts ONLY due to extension produced by weights added to the test wire!',
    reasonUrdu: 'Wajah: Do aik jaisi wires use karne se temperature badalne aur support jhukne ka asar dono par barabar hota hai aur error eliminate ho jata hai.',
    formula: '\\Delta L_{thermal, 1} = \\Delta L_{thermal, 2}',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 153,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Components of Searle\'s Apparatus',
    question: 'According to Section 5.4 (Fig. 5.4, page 91), what is attached to the lower ends of the two vertical wires?',
    options: [
      'Two horizontal frames connected to a spirit level, a micrometer screw, and slotted weight hangers',
      'A Venturi tube and manometer',
      'A spherical droplet dropper',
      'A rotating cylinder and tachometer'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91: "Both wires are connected to horizontal bars (frames $F_1$ and $F_2$)... a spirit level... micrometer screw... constant weight... and a hanger with slotted weights."',
    reasonUrdu: 'Wajah: Fig 5.4 ke mutabiq frames F1 aur F2, spirit level, micrometer screw aur slotted weights lagaye jatay hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Fig 5.4, Page 91'
  },
  {
    id: 154,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Function of the Constant Weight Slab',
    question: 'In Searle\'s apparatus, what is the purpose of hanging a constant weight slab from the reference wire frame?',
    options: [
      'To keep the reference wire taut and free from kinks throughout the experiment',
      'To break the reference wire',
      'To measure atmospheric pressure',
      'To generate heat'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91: "Hang a constant weight to the hook of horizontal bar of reference wire and hanger on test wire so that wire remains stretched and free from kinks."',
    reasonUrdu: 'Wajah: Constant weight latkane ka maqsad wire ko seedha aur kinks (mor) se paak rakhna hota hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 155,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Measuring Wire Diameter in Searle\'s Method',
    question: 'In the experimental procedure on page 91, which instrument is used to measure the diameter $d$ of the wire, and how should the measurement be performed?',
    options: [
      'A screw gauge (micrometer), measured at several different points along the wire and averaged in mutually perpendicular directions',
      'A meter scale, measured only once at the top',
      'A Venturi meter',
      'A stopwatch'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91-92, step 2 & 3: "Measure the diameter \'d\' of the wire using a screw guage... at several different points along the wire and take average."',
    reasonUrdu: 'Wajah: Wire ka diameter Screw Gauge se mukhtalif jagaho par naap kar average liya jata hai.',
    formula: 'd_{avg} = \\frac{1}{n}\\sum d_i',
    textbookRef: 'Sec 5.4, Page 91-92'
  },
  {
    id: 156,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'How Extension $\\Delta L$ is Measured',
    question: 'When an additional weight is loaded onto the test wire in Searle\'s apparatus, how is the extension $\\Delta L$ determined?',
    options: [
      'The spirit level tilts; turning the micrometer screw restores the spirit level bubble to center; the difference in micrometer readings gives $\\Delta L$',
      'By reading a mercury barometer',
      'By timing the oscillation period with a stopwatch',
      'By weighing displaced water in a beaker'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 92, steps 4-5: Loading tilts the spirit level. The micrometer screw is turned until the spirit level bubble returns to horizontal center. Subtracting the initial reading gives extension $\\Delta L$.',
    reasonUrdu: 'Wajah: Wazan dalne se spirit level tilt hota hai; micrometer screw ko ghuma kar bubble ko wapis center ma laya jata hai aur readings ka farq extension deta hai.',
    formula: '\\Delta L = R_2 - R_1',
    textbookRef: 'Sec 5.4, Page 92'
  },
  {
    id: 157,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Calculating Stress from Load in Searle\'s Method',
    question: 'According to page 92, what formula is used to calculate stress from the suspended slotted weights?',
    options: [
      '$\\text{Stress} = \\frac{\\text{Weight}}{\\text{Area of wire}} = \\frac{F}{A} = \\frac{mg}{\\pi r^2}$',
      '$\\text{Stress} = mg \\times \\pi r^2$',
      '$\\text{Stress} = \\frac{\\Delta L}{L_0}$',
      '$\\text{Stress} = \\frac{mg}{L_0}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92, step 6 explicitly states: "$\\text{Stress} = \\frac{\\text{Weight}}{\\text{Area of wire}} = \\frac{F}{A} = \\frac{mg}{\\pi r^2}$."',
    reasonUrdu: 'Wajah: Page 92 step 6 ke mutabiq Stress = Weight / Area = mg / (\\pi r^2).',
    formula: '\\sigma = \\frac{m g}{\\pi r^2}',
    textbookRef: 'Sec 5.4, Page 92'
  },
  {
    id: 158,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Strain Formula in Searle\'s Method',
    question: 'According to page 92, what formula is used to calculate strain from the micrometer extension?',
    options: [
      '$\\text{Strain} = \\frac{\\Delta L}{L_0} = \\frac{\\text{Change in length}}{\\text{Original length}}$',
      '$\\text{Strain} = \\Delta L \\times L_0$',
      '$\\text{Strain} = \\frac{mg}{\\Delta L}$',
      '$\\text{Strain} = \\frac{\\pi r^2}{\\Delta L}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92, step 6: "$\\text{Strain} = \\frac{\\Delta L}{L_0} = \\frac{\\text{Change in length}}{\\text{Original length}}$."',
    reasonUrdu: 'Wajah: Page 92 par Strain ka formula \\Delta L / L0 likha gaya hai.',
    formula: '\\varepsilon = \\frac{\\Delta L}{L_0}',
    textbookRef: 'Sec 5.4, Page 92'
  },
  {
    id: 159,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Determining Young\'s Modulus from Graph Slope',
    question: 'In Searle\'s method (page 92, step 8), when stress is plotted against strain on a graph, what shape is obtained, and what is its slope equal to?',
    options: [
      'A straight line passing through origin; the slope is equal to Young\'s modulus $Y$',
      'A parabola; the slope is equal to mass',
      'A horizontal flat line; the slope is zero',
      'A hyperbola; the slope is equal to viscosity'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92, step 8 states: "Plot the above values on stress strain graph, it should be straight line. Now determine the value of slope $Y$. The value of slope is equal to Young\'s modulus of wire."',
    reasonUrdu: 'Wajah: Stress vs strain graph seedhi line banta hai aur iski slope Young\'s modulus Y ke barabar hoti hai.',
    formula: 'Y = \\text{Slope} = \\frac{y_2 - y_1}{x_2 - x_1}',
    textbookRef: 'Sec 5.4, Page 92'
  },
  {
    id: 160,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Unloading Precautions in Searle\'s Method',
    question: 'In Searle\'s experiment, readings are taken both during loading (adding weights) and unloading (removing weights). Why?',
    options: [
      'To verify that the wire returns to its original length without exceeding the elastic limit, and to average out any mechanical hysteresis',
      'To make the experiment take twice as long',
      'To heat up the wire',
      'To check the viscosity of the weights'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Taking readings during both loading and unloading confirms that the wire stays within its elastic limit and cancels any slight friction or lag in the micrometer screw.',
    reasonUrdu: 'Wajah: Loading aur unloading dono time reading lene se confirm hota hai ke wire elastic limit ke andar rahi aur lag/friction ka error average ho jaye.',
    formula: '\\Delta L_{avg} = \\frac{\\Delta L_{load} + \\Delta L_{unload}}{2}',
    textbookRef: 'Sec 5.4, Page 91-92'
  },
  {
    id: 161,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Dead Weight / Zero Load Precaution',
    question: 'Before recording the baseline zero-extension reading in Searle\'s apparatus, why must an initial tensioning weight be left on the hanger?',
    options: [
      'To eliminate any initial slackness, curvature, or kinks in the test wire',
      'To immediately stretch the wire past its yield point',
      'To calibrate the timer',
      'To measure buoyancy'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'An initial dead load straightens out any minor bends, ensuring the wire behaves as an ideal straight cylinder so that subsequent load increments produce purely elastic elongation.',
    reasonUrdu: 'Wajah: Initial dead load lagane se wire ke mor aur dheel mukammal seedhi ho jati hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 162,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Pitch and Least Count of Micrometer Screw',
    question: 'If the micrometer screw on Searle\'s apparatus advances $0.5\\text{ mm}$ for one complete rotation of 50 circular scale divisions, what is its least count?',
    options: ['$0.01\\text{ mm}$', '$0.05\\text{ mm}$', '$0.10\\text{ mm}$', '$0.001\\text{ mm}$'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$\\text{Least Count} = \\frac{\\text{Pitch}}{\\text{Number of circular divisions}} = \\frac{0.5\\text{ mm}}{50} = 0.01\\text{ mm} = 10^{-5}\\text{ m}$.',
    reasonUrdu: 'Wajah: Least Count = Pitch / Total Divisions = 0.5 mm / 50 = 0.01 mm.',
    formula: 'LC = \\frac{\\text{Pitch}}{N}',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 163,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Error Analysis in Searle\'s Method',
    question: 'In determining Young\'s modulus $Y = \\frac{4 M g L_0}{\\pi d^2 \\Delta L}$, which measured parameter introduces the GREATEST percentage uncertainty if measured with a given percentage error?',
    options: [
      'The diameter $d$ of the wire (because it is squared: error is multiplied by 2)',
      'The length $L_0$ of the wire',
      'The suspended mass $M$',
      'The acceleration due to gravity $g$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since $Y \\propto d^{-2}$, fractional uncertainty is $\\frac{\\Delta Y}{Y} = 2\\frac{\\Delta d}{d} + \\frac{\\Delta L_0}{L_0} + \\frac{\\Delta(\\Delta L)}{\\Delta L} + \\dots$. The power of 2 doubles the percentage error from the diameter measurement.',
    reasonUrdu: 'Wajah: Diameter ka square formula ma aata hai (d^2), is liye diameter ki measurement ma aane wala error double ho kar Young\'s modulus par asar daalta hai.',
    formula: '\\frac{\\Delta Y}{Y} = 2 \\frac{\\Delta d}{d} + \\dots',
    textbookRef: 'Sec 5.4, Page 91-92'
  },
  {
    id: 164,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Measuring Initial Length $L_0$',
    question: 'In Searle\'s experiment, what instrument is typically used to measure the original initial length $L_0$ of the wire (about 2 to 3 meters long)?',
    options: ['A metre scale or steel measuring tape', 'A screw gauge', 'A vernier caliper', 'A micrometer'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 91, step 1: "Measure the initial length $L_0$ of the wire using a metre scale." Wire length is ~2-3 m, well suited for a metre scale.',
    reasonUrdu: 'Wajah: Wire ki lambi length (2-3 meter) naapne ke liye meter scale use kiya jata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 165,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Backlash Error in Micrometer',
    question: 'How is "backlash error" prevented when rotating the micrometer screw in Searle\'s apparatus?',
    options: [
      'By always rotating the screw in the same single direction when setting the bubble to center',
      'By heating the screw with a flame',
      'By lubricating the spirit level with mercury',
      'By removing the test wire'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Backlash error arises from play between screw threads when the rotation direction is reversed. Rotating always in the same direction ensures continuous thread contact.',
    reasonUrdu: 'Wajah: Screw ko hamesha ek hi direction ma ghuma kar bubble set karne se backlash error khatam hota hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91-92'
  },
  {
    id: 166,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Graph of Load vs Extension',
    question: 'If load $M$ (in kg) is plotted on the y-axis and extension $\\Delta L$ (in m) is plotted on the x-axis, what is the formula for Young\'s modulus from the slope $S = M / \\Delta L$?',
    options: [
      '$Y = \\frac{S \\cdot g L_0}{A}$',
      '$Y = \\frac{S}{g L_0 A}$',
      '$Y = S \\cdot g L_0 A$',
      '$Y = \\frac{g L_0}{S A}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since $F = Mg$ and $\\Delta L = \\frac{Mg L_0}{A Y} \\implies \\frac{M}{\\Delta L} = \\frac{AY}{g L_0} = S$. Therefore $Y = \\frac{S g L_0}{A}$.',
    reasonUrdu: 'Wajah: Slope S = M / \\Delta L = AY / (g L0); rearrange karne par Y = (S g L0) / A banta hai.',
    formula: 'Y = \\frac{S g L_0}{A}',
    textbookRef: 'Sec 5.4, Page 92'
  },
  {
    id: 167,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Material of Choice for Reference Wire',
    question: 'Why MUST the reference wire and test wire in Searle\'s apparatus be made of the EXACT same material?',
    options: [
      'So that their coefficients of thermal expansion ($\\alpha$) are identical, ensuring equal expansion when room temperature changes',
      'To make them look identical aesthetically',
      'To ensure equal electrical resistance',
      'Because only one metal wire can exist'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'If they were made of different metals (e.g. copper and steel), changing ambient temperature would expand one more than the other, causing a false tilt of the spirit level.',
    reasonUrdu: 'Wajah: Ek hi material hone se dono wires ka thermal expansion coefficient barabar hota hai, taake room temperature badalne par dono barabar phailain.',
    formula: '\\alpha_1 = \\alpha_2',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 168,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Leveling the Spirit Level',
    question: 'What is inside the glass tube of the spirit level in Searle\'s apparatus?',
    options: [
      'A volatile liquid with low viscosity (such as ethanol or ether) and an air bubble',
      'Mercury only',
      'Heavy viscous engine grease',
      'Compressed air only'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'A spirit level contains a low-viscosity, low-surface-tension liquid (alcohol/spirit) so that the air bubble moves rapidly and sensitively to indicate horizontal alignment.',
    reasonUrdu: 'Wajah: Spirit level ma alcohol/ether hota hai jiski viscosity kam hoti hai taake air bubble foran center ma aa sakay.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 169,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Searle\'s Apparatus Calculation',
    question: 'In a Searle\'s experiment, a wire of length $L_0 = 2.0\\text{ m}$ and radius $r = 0.5\\text{ mm}$ stretches by $\\Delta L = 1.0\\text{ mm}$ when loaded with a mass of $8.0\\text{ kg}$. (Take $g = 9.8\\text{ m/s}^2$, $\\pi = 3.14$). What is the calculated Young\'s modulus?',
    options: [
      '$2.0 \\times 10^{11}\\text{ N m}^{-2}$',
      '$1.0 \\times 10^{10}\\text{ N m}^{-2}$',
      '$5.0 \\times 10^{11}\\text{ N m}^{-2}$',
      '$3.14 \\times 10^9\\text{ N m}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Area $A = \\pi (0.5 \\times 10^{-3})^2 = 3.14 \\times 2.5 \\times 10^{-7} = 7.85 \\times 10^{-7}\\text{ m}^2$. Force $F = 8.0 \\times 9.8 = 78.4\\text{ N}$. $Y = \\frac{78.4 \\times 2.0}{(7.85 \\times 10^{-7}) \\times (1.0 \\times 10^{-3})} = \\frac{156.8}{7.85 \\times 10^{-10}} \\approx 2.0 \\times 10^{11}\\text{ N/m}^2$. (This is standard steel!)',
    reasonUrdu: 'Wajah: Y = (F L0) / (A \\Delta L) = (78.4 x 2.0) / (7.85x10^-7 x 10^-3) = 2.0 x 10^11 N/m^2.',
    formula: 'Y = \\frac{F L_0}{\\pi r^2 \\Delta L}',
    textbookRef: 'Sec 5.4, Page 91-92'
  },
  {
    id: 170,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Significance of Slotted Weights',
    question: 'Why are slotted disc weights used in Searle\'s apparatus instead of solid spherical weights?',
    options: [
      'Slotted weights slide securely onto the central hanger stem with their center of gravity staying aligned vertically along the wire axis',
      'They produce higher magnetic fields',
      'They reduce air resistance to zero',
      'They prevent the wire from rusting'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Slotted weights stack concentrically onto the hanger rod so the line of action of gravity passes directly through the wire axis, avoiding bending moments.',
    reasonUrdu: 'Wajah: Slotted weights hanger par center ma rehtay hain taake wazan seedha wire ke axis ke sath lage aur koi jhook na paida ho.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 171,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Effect of Yielding Support',
    question: 'If the ceiling support flexes downward by $0.2\\text{ mm}$ when weight is added, how does Searle\'s apparatus handle this?',
    options: [
      'Both wires drop by $0.2\\text{ mm}$ simultaneously, so the relative difference across the spirit level remains zero, preventing any error',
      'It causes an error of $200\\%$ in Young\'s modulus',
      'The micrometer screw breaks',
      'The spirit level bubble bursts'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Because both wires hang from the common support bracket, support yielding lowers both wires equally, leaving the spirit level untilted.',
    reasonUrdu: 'Wajah: Support jhukne se dono wires aik sath 0.2 mm niche aati hain, is liye spirit level par koi farq nahi parta.',
    formula: '\\Delta L_{rel} = \\Delta L_{test} - \\Delta L_{ref}',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 172,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Kink Elimination in Searle\'s Method',
    question: 'If a wire tested in Searle\'s apparatus has small kinks, what happens to the apparent reading as the first few weights are added?',
    options: [
      'The wire straightens out rapidly, giving an artificially large extension and a falsely low Young\'s modulus',
      'The wire becomes stiffer',
      'The Young\'s modulus becomes infinite',
      'The wire melts'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Straightening a kink produces uncoiling displacement that is NOT elastic elongation. Hence initial readings are discarded until the wire is taut.',
    reasonUrdu: 'Wajah: Kink khulne se extension bohot zyada nazar aati hai jis se Young\'s modulus ghalat aur kam nikalta hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 173,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Sensitivity of Searle\'s Apparatus',
    question: 'The sensitivity of Searle\'s apparatus in detecting tiny extensions $\\Delta L$ is fundamentally determined by:',
    options: [
      'The pitch and circular scale division count of the micrometer screw together with the radius of curvature of the spirit level',
      'The color of the hanger',
      'The room lighting',
      'The barometric pressure'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'A fine micrometer pitch ($0.5\\text{ mm} / 100\\text{ div} = 0.005\\text{ mm}$) combined with a sensitive, large-radius spirit level vial allows sub-micrometer detection.',
    reasonUrdu: 'Wajah: Micrometer ka fine pitch aur spirit level ki curvature sensitivity decide kartay hain.',
    formula: 'LC = \\frac{\\text{Pitch}}{N}',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 174,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Why Long Wires are Preferred',
    question: 'Why are test wires in Searle\'s apparatus chosen to be quite long ($L_0 \\approx 2\\text{ to }3\\text{ m}$)?',
    options: [
      'Because extension $\\Delta L = \\frac{F L_0}{A Y}$ is proportional to length; a longer wire produces a larger, more accurately measurable elongation',
      'Because short wires cannot conduct gravity',
      'To reduce the weight of the apparatus',
      'Because long wires have lower density'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Since $\\Delta L \\propto L_0$, a $3\\text{ m}$ wire produces 3 times more elongation than a $1\\text{ m}$ wire for the same load, drastically cutting percentage measurement error.',
    reasonUrdu: 'Wajah: Lambi wire ma extension zyada paida hoti hai (\\Delta L \\propto L0), jisay naapna aasan aur accurate hota hai.',
    formula: '\\Delta L \\propto L_0',
    textbookRef: 'Sec 5.4, Page 91'
  },
  {
    id: 175,
    module: 'G',
    moduleName: 'Searle\'s Apparatus & Measurements',
    topic: 'Why Thin Wires are Preferred',
    question: 'Why are thin wires of small radius $r$ preferred over thick rods in Searle\'s apparatus?',
    options: [
      'Because cross-sectional area $A = \\pi r^2$ is small, producing large measurable tensile stresses and extensions with modest slotted weights ($<10\\text{ kg}$)',
      'Because thick rods cannot be gripped',
      'Because thin wires have higher melting points',
      'Because thin wires repel air'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$\\Delta L \\propto 1/r^2$. A thin wire needs only a few kilograms to produce several millimeters of extension, easily and precisely measured by the micrometer.',
    reasonUrdu: 'Wajah: Patli wire ka area kam hota hai, is liye thode se wazan se bhi wazeh extension paida hoti hai jo aasani se naapi ja sakti hai.',
    formula: '\\Delta L \\propto \\frac{1}{r^2}',
    textbookRef: 'Sec 5.4, Page 91'
  },

  // ==========================================
  // MODULE H: Stress-Strain Curve, Yield Point & UTS (MCQs 176-200)
  // ==========================================
  {
    id: 176,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Force-Elongation Testing Machine',
    question: 'According to Section 5.5 on page 92, what machine is used to continuously measure and plot the stress-strain curve of a metal wire?',
    options: [
      'Tensile test machine (or Universal Testing Machine, UTM) fitted with an electronic recording device',
      'Venturi meter',
      'Hydrometer',
      'Calorimeter'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92: "In a tensile test machine, metal wire is extended at a specified deformation rate, and stresses generated in the wire during deformation are continuously measured by a suitable electronic device... plotted automatically on X-Y chart recorder."',
    reasonUrdu: 'Wajah: Page 92 par bataya gaya hai ke Tensile Test Machine stress-strain curve ko electronic chart recorder par plot karti hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 92'
  },
  {
    id: 177,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Proportional Limit ($\\sigma_p$)',
    question: 'According to page 92, what is the Proportional Limit (Point A, $\\sigma_p$) on the stress-strain curve?',
    options: [
      'The greatest stress that a material can withstand without losing straight-line proportionality between stress and strain (Hooke\'s law)',
      'The point where the wire fractures into two pieces',
      'The point where the wire turns liquid',
      'The point of maximum possible stress'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92 explicitly defines: "In the initial stage of deformation, stress is increased linearly with the strain till we reach point A on the stress-strain curve. This is called proportional limit ($\\sigma_p$). It is defined as the greatest stress that a material can withstand without losing straight line proportionality between stress and strain."',
    reasonUrdu: 'Wajah: Point A (Proportional limit) wo aakhri hadd hai jahan tak stress aur strain bilkul linear (seedhi line) rehte hain aur Hooke\'s law lagu hota hai.',
    formula: '\\sigma \\propto \\varepsilon \\quad (\\text{Region } OA)',
    textbookRef: 'Sec 5.5, Page 92'
  },
  {
    id: 178,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Hooke\'s Law Region',
    question: 'On the typical stress-strain curve shown in Fig. 5.5 on page 92, in which region is Hooke\'s law strictly obeyed?',
    options: ['Region OA', 'Region AB', 'Region BC', 'Region CD'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92 states: "Hooke\'s law which states that the strain (deformation) is directly proportional to stress (force or load) is obeyed in the region OA. From A to B, stress and strain are not proportional."',
    reasonUrdu: 'Wajah: Hooke\'s law sirf region OA ma obey hota hai; A sy B tak graph seedha nahi rehta.',
    formula: '\\sigma = Y \\varepsilon \\quad (OA)',
    textbookRef: 'Sec 5.5, Page 92'
  },
  {
    id: 179,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Elastic Limit & Yield Point (Point B, $\\sigma_y$)',
    question: 'According to page 92-93, what is Point B on the stress-strain curve?',
    options: [
      'The elastic limit or yield point: the maximum stress beyond which the material will not return to its original state when load is removed',
      'The ultimate tensile strength',
      'The fracture point',
      'The proportional limit'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 92-93: "If the load is removed at any point between O and B, the curve will be retraced and the material will return to its original state. In the region OB, the material is said to be elastic. The point B is called the yield point. The value of stress at B is known as elastic limit $\\sigma_y$."',
    reasonUrdu: 'Wajah: Point B Elastic limit ya Yield point hai; yahan tak load hatane par material 100% original state ma wapis aa jata hai.',
    formula: '\\sigma_y = \\text{Yield Stress}',
    textbookRef: 'Sec 5.5, Page 92-93'
  },
  {
    id: 180,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Behavior in Region AB',
    question: 'How does the material behave in the region between Point A and Point B (Fig. 5.5)?',
    options: [
      'The deformation is still fully elastic (recoverable), but stress is no longer proportional to strain',
      'The material is permanently deformed into plastic state',
      'The material has completely fractured',
      'Hooke\'s law is strictly obeyed'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 92: "From A to B, stress and strain are not proportional... If the load is removed at any point between O and B, the material will return to its original state." Thus region AB is elastic but non-linear!',
    reasonUrdu: 'Wajah: Region AB ma deformation abhi bhi elastic (recoverable) hoti hai, magar stress aur strain aapas ma proportional nahi hotay.',
    formula: '\\text{Elastic, Non-linear}',
    textbookRef: 'Sec 5.5, Page 92'
  },
  {
    id: 181,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Plastic Deformation Definition',
    question: 'According to page 93, what occurs when stress is increased beyond the yield point (Point B)?',
    options: [
      'Plastic deformation: the specimen becomes permanently changed and does not recover its original shape or dimension when stress is removed',
      'The wire regains its original shape faster',
      'The wire converts into diamond',
      'The temperature drops to absolute zero'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93 states: "Plastic Deformation: If the stress is increased beyond the yield stress or elastic limit of the material, the specimen becomes permanently changed and does not recover its original shape or dimension after the stress is removed. This kind of behaviour is called plasticity."',
    reasonUrdu: 'Wajah: Yield point B se aage plastic deformation shuru hoti hai jahan material permanent deform ho jata hai.',
    formula: '\\text{Region } BC = \\text{Plasticity}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 182,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Ultimate Tensile Strength (Point C, $\\sigma_m$)',
    question: 'According to page 93, what does Point C on the stress-strain curve represent?',
    options: [
      'The Ultimate Tensile Strength (UTS, $\\sigma_m$): the maximum nominal stress that a material can withstand before necking and failure',
      'The proportional limit',
      'The zero stress origin',
      'The point where Hooke\'s law begins'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93: "The point C in Fig. 5.5 represents the ultimate tensile strength (UTS) $\\sigma_m$ of the material. The UTS is defined as the maximum stress that a material can withstand, and can be regarded as the nominal strength of the material."',
    reasonUrdu: 'Wajah: Point C Ultimate Tensile Strength (UTS) hai jo maximum stress hota hai jo material bardasht kar sakta hai.',
    formula: '\\sigma_m = \\sigma_{UTS}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 183,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Fracture Stress (Point D, $\\sigma_f$)',
    question: 'According to page 93, what happens once Point C (UTS) is crossed, and what is Point D?',
    options: [
      'The material forms a neck, narrows down, and breaks at Point D, which represents the fracture stress ($\\sigma_f$)',
      'The material becomes permanently unbreakable',
      'The material enters the proportional elastic region again',
      'The material expands in all directions without force'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93: "Once point C corresponding to UTS is crossed, the material breaks at point D, responding the fracture stress ($\\sigma_f$)."',
    reasonUrdu: 'Wajah: UTS cross karne ke baad wire neck banati hai aur Point D par toot jati hai, jisay Fracture Stress (\\sigma_f) kehte hain.',
    formula: '\\sigma_f = \\text{Fracture Stress}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 184,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Necking Phenomenon',
    question: 'Between Point C (UTS) and Point D (Fracture), why does the nominal engineering stress curve turn downward even while strain increases?',
    options: [
      'Localized thinning (necking) occurs, drastically reducing the cross-sectional area at one spot so a smaller total force causes fracture',
      'The material gains infinite strength',
      'The temperature increases by thousands of degrees',
      'The gravitational field decreases'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Beyond UTS in ductile metals, plastic deformation localizes into a narrow "neck". Because engineering stress uses initial area $A_0$ ($F/A_0$), the dropping tensile load makes the curve drop.',
    reasonUrdu: 'Wajah: UTS ke baad wire ek jagah sy patli (neck) hone lagti hai, is liye kam force par bhi strain barhti hai aur engineering curve niche jhukta hai.',
    formula: '\\sigma_{eng} = \\frac{F}{A_0}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 185,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Work Hardening (Strain Hardening)',
    question: 'In the plastic region between Point B (Yield) and Point C (UTS), the stress required to produce further deformation increases. This strengthening phenomenon is called:',
    options: ['Work hardening (strain hardening)', 'Elastic fatigue', 'Thermal creep', 'Superfluidity'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'As plastic deformation proceeds, crystal dislocations multiply and entangle with one another, making further dislocation slip harder and increasing required stress until UTS.',
    reasonUrdu: 'Wajah: Plastic deformation ke doran dislocations aapas ma ulajh jati hain jis se material mazboot hota hai; isay Work Hardening kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 186,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Yield Strength of Structural Steel',
    question: 'For typical structural mild steel, the yield strength $\\sigma_y$ is approximately:',
    options: ['$250\\text{ MPa}$', '$250\\text{ GPa}$', '$2.5\\text{ kPa}$', '$10\\text{ Pa}$'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Mild steel commonly has a yield strength of $250\\text{ MPa}$ ($2.5 \\times 10^8\\text{ N/m}^2$) and an ultimate tensile strength of around $400-500\\text{ MPa}$.',
    reasonUrdu: 'Wajah: Structural mild steel ka yield stress aam tor par 250 MPa hota hai.',
    formula: '\\sigma_y \\approx 250\\text{ MPa}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 187,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Upper and Lower Yield Points',
    question: 'In mild steel specimens, the stress-strain curve exhibits two distinct yield points before the plastic plateau: an upper yield point and a lower yield point. What causes this?',
    options: [
      'Cottrell atmospheres of carbon/nitrogen interstitial atoms pinning dislocations until stress exceeds the breakaway threshold',
      'Phase transformation from solid to liquid',
      'The creation of magnetic monopoles',
      'Superfluid flow along grain boundaries'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Interstitial carbon/nitrogen atoms diffuse to dislocations (Cottrell atmospheres), locking them in place. Once stress unpins them, dislocations move at lower stress (lower yield point).',
    reasonUrdu: 'Wajah: Carbon ke atoms dislocations ko lock rakhte hain; unse azaad hone ke baad kam stress par slip hoti hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 92-93'
  },
  {
    id: 188,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Engineering Stress vs True Stress at Fracture',
    question: 'How does true stress ($\\sigma_{true} = F / A_{actual}$) at fracture compare to engineering stress ($\\sigma_{eng} = F / A_0$)?',
    options: [
      '$\\sigma_{true}$ is much higher than $\\sigma_{eng}$ because the actual cross-sectional area $A_{actual}$ is much smaller due to necking',
      '$\\sigma_{true}$ is lower than $\\sigma_{eng}$',
      'They are strictly equal',
      '$\\sigma_{true}$ is zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Because necking reduces the local area ($A_{actual} \\ll A_0$), the true stress $\\sigma_{true} = F/A_{actual}$ continues rising monotonically up to the fracture point.',
    reasonUrdu: 'Wajah: Necking ki wajah sy actual area bohot kam ho jata hai, is liye True Stress engineering stress se bohot zyada hota hai.',
    formula: '\\sigma_{true} = \\sigma_{eng}(1 + \\varepsilon_{eng})',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 189,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Toughness of a Material',
    question: 'The total area under the COMPLETE stress-strain curve up to the fracture point (Point D) is a quantitative measure of the material\'s:',
    options: ['Toughness (energy absorbed before fracture)', 'Hardness only', 'Young\'s modulus', 'Viscosity'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Toughness is the work done per unit volume to deform and fracture the material, represented by the entire area under the stress-strain curve from origin to point D.',
    reasonUrdu: 'Wajah: Fracture point tak stress-strain curve ke niche ka poora area Toughness (energy absorption capacity) ko zahir karta hai.',
    formula: '\\text{Toughness} = \\int_0^{\\varepsilon_f} \\sigma \\, d\\varepsilon',
    textbookRef: 'Sec 5.5 & 5.6, Page 93-94'
  },
  {
    id: 190,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Resilience of a Material',
    question: 'The capacity of a material to absorb energy when deformed elastically and release that energy upon unloading (area under curve up to elastic limit Point B) is called:',
    options: ['Modulus of resilience', 'Ultimate strength', 'Plastic flow', 'Terminal velocity'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Modulus of resilience is the maximum elastic strain energy per unit volume: $U_r = \\frac{\\sigma_y^2}{2Y}$, represented by the triangular area under the curve up to the yield point.',
    reasonUrdu: 'Wajah: Elastic limit tak energy absorb karne ki salahiyat ko Modulus of Resilience kehte hain: Ur = \\sigma_y^2 / (2Y).',
    formula: 'U_r = \\frac{\\sigma_y^2}{2Y}',
    textbookRef: 'Sec 5.5 & 5.6, Page 92, 94'
  },
  {
    id: 191,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Offset Yield Strength ($0.2\\%$ Proof Stress)',
    question: 'For materials like aluminium that do not have a sharp, well-defined yield point, how is the yield strength conventionally determined?',
    options: [
      'By drawing a line parallel to the initial linear slope at an offset strain of $0.2\\%$ ($0.002$)',
      'By taking the boiling point temperature',
      'By dividing mass by volume',
      'By measuring the speed of sound'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The $0.2\\%$ offset yield strength (proof stress) is found by constructing a parallel line offset by $\\varepsilon = 0.002$ on the strain axis; its intersection with the curve defines the yield stress.',
    reasonUrdu: 'Wajah: Jin metals ka sharp yield point nahi hota unka yield point 0.2% (0.002) offset line draw kar ke nikala jata hai.',
    formula: '\\varepsilon_{offset} = 0.002',
    textbookRef: 'Sec 5.5, Page 92-93'
  },
  {
    id: 192,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Dislocation Slip Mechanism',
    question: 'At the microscopic atomic level, what physical mechanism enables plastic deformation in crystalline metals without breaking all bonds simultaneously?',
    options: [
      'The glide and movement of linear crystal defects called dislocations along slip planes',
      'The evaporation of electron clouds',
      'The fission of atomic nuclei',
      'The formation of Bernoulli streamlines'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Dislocations allow one atomic row to slip at a time with very low activation energy, explaining why real metals yield at stresses 100 times lower than theoretical bond strength.',
    reasonUrdu: 'Wajah: Crystal ke andar dislocations slip planes par move karti hain jis se metal bina toote shape badalta hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 193,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Ductile Fracture Morphology',
    question: 'When a ductile metal rod undergoes tensile fracture, what characteristic fracture geometry is observed at the broken ends?',
    options: [
      'Cup-and-cone fracture with central fibrous dimples and shear lips at $45^\\circ$',
      'Completely flat mirror-like cleavage planes',
      'A sharp needle with zero radius',
      'Spiraling superfluid vortices'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Ductile fracture initiates by microvoid coalescence at the neck center and shears outward at $45^\\circ$ (maximum shear stress angle), creating the classic "cup-and-cone" shape.',
    reasonUrdu: 'Wajah: Ductile metal tootne par cup-and-cone shape banata hai jahan edges 45 degree shear angle par toot te hain.',
    formula: '\\theta_{shear} = 45^\\circ',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 194,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Brittle Fracture Morphology',
    question: 'In contrast to ductile materials, how does a brittle material fracture under tensile stress?',
    options: [
      'It snaps suddenly with almost zero necking or plastic deformation, producing a flat, shiny cleavage surface perpendicular to the tensile axis',
      'It stretches to ten times its length',
      'It twists into a spiral coil',
      'It flows like honey'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Brittle materials (like glass or cast iron) fail by rapid crack propagation across atomic planes perpendicular to normal tensile stress with virtually no plastic deformation.',
    reasonUrdu: 'Wajah: Brittle material bina stretch huye achanak flat cleavage plane ke sath toot jata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 195,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Effect of Temperature on Stress-Strain Curve',
    question: 'As the ambient temperature of a ductile steel wire is increased, how does its stress-strain curve shift?',
    options: [
      'Yield strength and UTS decrease, while ductility (plastic strain to fracture) increases',
      'Yield strength increases to infinity',
      'The material becomes completely brittle',
      'Young\'s modulus doubles'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Thermal energy assists dislocation motion (thermal activation), lowering the yield stress and ultimate strength while allowing greater plastic deformation before fracture.',
    reasonUrdu: 'Wajah: Temperature barhne se yield strength aur UTS kam hoti hain jab ke metal zyada ductile ho jata hai.',
    formula: '\\sigma_y \\downarrow, \\quad \\varepsilon_f \\uparrow \\text{ as } T \\uparrow',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 196,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Ductile-to-Brittle Transition Temperature',
    question: 'Some body-centered cubic (BCC) metals (like carbon steel used in ships) transition abruptly from ductile to catastrophically brittle when cooled below the:',
    options: ['Ductile-to-brittle transition temperature (DBTT)', 'Curie temperature', 'Superfluid transition temperature', 'Dew point'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Below the DBTT, thermal activation is insufficient for dislocation motion in BCC metals, so impact causes rapid brittle cleavage fracture (e.g. Titanic hull failure in icy waters).',
    reasonUrdu: 'Wajah: DBTT se niche temperature girne par metal achanak ductile se brittle ban jata hai aur asani se toot jata hai.',
    formula: 'T < T_{DBTT}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 197,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Creep in Materials',
    question: 'The slow, progressive, time-dependent permanent deformation of a material under a constant stress maintained over a long period (especially at high temperatures) is called:',
    options: ['Creep', 'Elastic rebound', 'Cavitation', 'Viscous drag'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Creep occurs in steam turbine blades and jet engine components where steady mechanical stress and high temperatures cause ongoing plastic strain over time.',
    reasonUrdu: 'Wajah: Constant stress aur high temperature par waqt ke sath aahista aahista permanent deform hone ko Creep kehte hain.',
    formula: '\\varepsilon(t)',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 198,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Residual Stress',
    question: 'Stresses that remain inside a solid body after all external loads have been removed (e.g., after welding, bending, or uneven cooling) are called:',
    options: ['Residual stresses', 'Hydrostatic pressures', 'Viscous stresses', 'Bernoulli forces'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Residual stresses are locked-in internal stresses caused by non-uniform plastic deformation or thermal gradients during manufacturing.',
    reasonUrdu: 'Wajah: External load hatne ke baad bhi material ke andar mojood locked-in stress ko Residual Stress kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 199,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Stress Concentration at Cracks',
    question: 'Near the sharp tip of a microscopic notch or crack of length $a$ and tip radius $\\rho$ under remote tensile stress $\\sigma_0$, the local stress is magnified by Inglis factor:',
    options: [
      '$\\sigma_{tip} = \\sigma_0 \\left(1 + 2\\sqrt{\\frac{a}{\\rho}}\\right)$',
      '$\\sigma_{tip} = \\sigma_0$',
      '$\\sigma_{tip} = \\frac{\\sigma_0}{2}$',
      '$\\sigma_{tip} = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Sharp cracks concentrate stress drastically because the radius $\\rho \\to 0$, causing local stress to easily exceed theoretical strength and propagate brittle cracks (Griffith theory).',
    reasonUrdu: 'Wajah: Barik crack ki nok par stress bohot zyada barh jata hai (Stress Concentration), jis se crack achanak phailta hai.',
    formula: '\\sigma_{tip} \\approx 2\\sigma_0 \\sqrt{\\frac{a}{\\rho}}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 200,
    module: 'H',
    moduleName: 'Stress-Strain Curve & Failure',
    topic: 'Comparative Graph: Two Materials',
    question: 'Material X has a steep initial slope and breaks immediately after Point A with almost no plastic region. Material Y has a lower initial slope but extends through a very large plastic region before breaking. Which is correct?',
    options: [
      'Material X is more brittle and has higher Young\'s modulus; Material Y is ductile and tough',
      'Material X is ductile; Material Y is brittle',
      'Both have identical ductility',
      'Material Y has zero Young\'s modulus'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Steeper slope = higher Young\'s modulus. Breaking right after the elastic limit = brittle. Large plastic strain before fracture = ductile and capable of absorbing energy (tough).',
    reasonUrdu: 'Wajah: Steep slope aur plastic region na hona Brittle material ki pehchan hai; lambi plastic extension Ductile material ki pehchan hai.',
    formula: 'Y_X > Y_Y, \\quad \\varepsilon_{p, Y} \\gg \\varepsilon_{p, X}',
    textbookRef: 'Sec 5.5, Page 92-93'
  },

  // ==========================================
  // MODULE I: Ductile vs Brittle Materials & Plasticity (MCQs 201-225)
  // ==========================================
  {
    id: 201,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Definition of Ductile Substances',
    question: 'According to page 93 of the textbook, how are "ductile substances" defined?',
    options: [
      'Substances which undergo plastic deformation until they break',
      'Substances which break just after the elastic limit is reached',
      'Substances that have zero viscosity',
      'Substances that cannot be compressed'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93 explicitly defines: "Ductile substances: Substances which undergo plastic deformation until they break, are known as ductile substances."',
    reasonUrdu: 'Wajah: Page 93 ke mutabiq jo cheezain tootne se pehle plastic deformation se guzarti hain unhe Ductile substances kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 202,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Examples of Ductile Substances',
    question: 'Which examples of ductile substances are explicitly listed in the textbook on page 93?',
    options: [
      'Lead, copper, and wrought iron',
      'Glass, high carbon steel, and beryllium',
      'Diamond, quartz, and calcite',
      'Ice, bone, and concrete'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93 states: "For example, Lead, copper and wrought iron are ductile substances."',
    reasonUrdu: 'Wajah: Kitab ma Lead, Copper aur Wrought Iron ko ductile substances ki misalain bataya gaya hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 203,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Definition of Brittle Substances',
    question: 'According to page 93 of the textbook, how are "brittle substances" defined?',
    options: [
      'The substances which break just after the elastic limit is reached',
      'Substances which undergo extensive plastic deformation before breaking',
      'Substances which can be drawn into long wires',
      'Substances that float on water'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93 explicitly defines: "Brittle Substances: The substances which break just after the elastic limit is reached, are known as brittle substances."',
    reasonUrdu: 'Wajah: Page 93 ke mutabiq jo cheezain elastic limit aate hi foran toot jati hain unhe Brittle substances kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 204,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Examples of Brittle Substances',
    question: 'Which examples of brittle substances and brittle metals are explicitly listed in the textbook on page 93?',
    options: [
      'Glass, high carbon steel, Beryllium, Bismuth, and Chromium',
      'Lead, copper, and wrought iron',
      'Polythene, nylon, and rubber',
      'Water, glycerin, and mercury'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93 explicitly names: "For example, glass and high carbon steel are brittle. Moreover, Beryllium, Bismuth, Chromium are also brittle metals."',
    reasonUrdu: 'Wajah: Page 93 par Glass, High carbon steel, Beryllium, Bismuth aur Chromium ko brittle substances bataya gaya hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 205,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Malleability Definition',
    question: 'The mechanical property of a solid that allows it to be hammered or rolled into thin sheets without fracturing is called:',
    options: ['Malleability', 'Ductility', 'Viscosity', 'Superfluidity'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Malleability refers to a material\'s ability to undergo extensive plastic deformation under compressive stress (e.g. gold beaten into ultra-thin foil).',
    reasonUrdu: 'Wajah: Kisi cheez ko koot kar patli sheets ma tabdeel karne ki khusosiyat ko Malleability kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.1 & 5.5, Page 88, 93'
  },
  {
    id: 206,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Ductility Mechanical Meaning',
    question: 'The mechanical property of a solid that allows it to be drawn out under tension into thin wires without breaking is called:',
    options: ['Ductility', 'Malleability', 'Brittleness', 'Turbulence'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Ductility specifically denotes the ability to sustain substantial plastic elongation under tensile loading, allowing wire drawing.',
    reasonUrdu: 'Wajah: Khainch kar lambi wires banane ki salahiyat ko Ductility kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 207,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'High Carbon Steel Brittleness',
    question: 'Why is high carbon steel brittle while low carbon wrought iron is ductile?',
    options: [
      'High carbon content forms brittle iron carbide (cementite, Fe₃C) precipitates that block dislocation motion, drastically reducing plastic deformation',
      'High carbon steel has lower density than air',
      'Wrought iron contains mercury',
      'High carbon steel has zero Young\'s modulus'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Carbon atoms lock dislocation pathways by forming hard cementite phases. Dislocations cannot glide, so stress rises until catastrophic brittle fracture occurs.',
    reasonUrdu: 'Wajah: Zyada carbon dislocations ki movement ko block kar deta hai, is liye high carbon steel achanak toot jati hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 208,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Stress-Strain Curve Comparison',
    question: 'On a stress-strain graph, how can you immediately identify a brittle substance compared to a ductile one?',
    options: [
      'A brittle substance breaks immediately near its elastic limit with almost no plastic curve (no BC region)',
      'A brittle substance has a curve ten times longer than a ductile substance',
      'A brittle substance never reaches the elastic limit',
      'A brittle substance has a negative slope at the origin'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'For brittle materials, the fracture point D coincides almost directly with the yield point B. There is no extended plastic plateau or necking region BC.',
    reasonUrdu: 'Wajah: Brittle material ka fracture point elastic limit ke foran baad aa jata hai aur iska koi plastic curve nahi hota.',
    formula: '\\text{Point } D \\approx \\text{Point } B',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 209,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Ductile-to-Brittle Transition',
    question: 'A wrought iron anchor chain is tough and ductile at $25\\,^\\circ\\text{C}$. In sub-zero arctic waters at $-40\\,^\\circ\\text{C}$, it shatters like glass when struck. Why?',
    options: [
      'It dropped below its ductile-to-brittle transition temperature (DBTT)',
      'It became an ideal fluid',
      'Its mass decreased by half',
      'Its Young\'s modulus dropped to zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'At very low temperatures, thermal energy is insufficient to assist dislocation movement across Peierls barriers in BCC iron, turning ductile iron dangerously brittle.',
    reasonUrdu: 'Wajah: Low temperature par BCC metals ka DBTT cross ho jata hai aur wo glass ki tarah brittle ban jatay hain.',
    formula: 'T < T_{DBTT}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 210,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Hardness vs Toughness',
    question: 'A diamond is the hardest natural material known, yet hitting it sharply with an ordinary steel hammer can shatter it. Why?',
    options: [
      'Diamond has extreme hardness (resists scratching) but low fracture toughness along its cleavage planes (it is brittle)',
      'Diamond is actually an amorphous plastic',
      'Diamond has zero density',
      'The hammer turns into a superfluid'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Hardness is resistance to surface indentation/scratching. Toughness is energy absorption before fracture. Diamond is extremely hard but brittle along octahedral {111} cleavage planes.',
    reasonUrdu: 'Wajah: Diamond sakht tareen (hard) zaroor hai magar brittle hai, is liye zor se maarne par cleavage planes par toot jata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.1 & 5.5, Page 88, 93'
  },
  {
    id: 211,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Most Ductile Metal',
    question: 'Which precious metal is famously recognized as the most ductile and malleable of all elements (a single gram can be drawn into a wire over $2\\text{ km}$ long)?',
    options: ['Gold (Au)', 'Chromium (Cr)', 'Bismuth (Bi)', 'Beryllium (Be)'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Gold is exceptionally malleable and ductile; a single gram can be drawn into a wire 2,000 meters long or beaten into gold leaf only a few nanometers thick without cracking.',
    reasonUrdu: 'Wajah: Gold (sona) dunya ka sab se ductile aur malleable metal hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 212,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Annealing and Ductility',
    question: 'When a work-hardened piece of copper wire is heated to redness and allowed to cool slowly (annealing), what happens to its mechanical properties?',
    options: [
      'Internal stresses are relieved, new strain-free grains form, and ductility is restored',
      'It permanently turns into brittle cast iron',
      'It becomes completely liquid forever',
      'Its density drops to that of air'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Annealing promotes recrystallization: tangled dislocations are annihilated and new defect-free grains grow, softening the metal and restoring full ductility.',
    reasonUrdu: 'Wajah: Annealing karne se internal defects khatam hote hain aur copper dobara narm aur ductile ban jata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 213,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Compressive vs Tensile Strength in Concrete',
    question: 'Concrete (Table 5.1) is famously strong in compression but very weak and brittle in tension. How do civil engineers overcome this weakness in buildings?',
    options: [
      'By embedding high-tensile ductile steel reinforcing bars (rebar) inside the concrete',
      'By mixing liquid helium into the cement',
      'By painting the concrete with paint sprayers',
      'By boiling the concrete'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Reinforced concrete combines concrete\'s high compressive strength with ductile steel\'s exceptional tensile strength ($Y_{steel} = 200\\text{ GPa}$ vs $Y_{concrete} = 25\\text{ GPa}$).',
    reasonUrdu: 'Wajah: Concrete compression ma mazboot magar tension ma kamzor hota hai, is liye andar ductile steel bars (sariya) daale jatay hain.',
    formula: 'Y_{steel} \\gg Y_{concrete}',
    textbookRef: 'Sec 5.3 & 5.5, Table 5.1, Page 91, 93'
  },
  {
    id: 214,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Beryllium, Bismuth, Chromium in Metallurgy',
    question: 'Why are brittle metals like Beryllium, Bismuth, and Chromium (named on page 93) rarely used as pure structural framing beams?',
    options: [
      'They lack ductility, meaning sudden impacts or stress concentrations cause catastrophic shattering without prior plastic warning',
      'They evaporate instantly at room temperature',
      'They are lighter than helium gas',
      'They dissolve in plain water'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Brittle metals shatter abruptly without visible plastic deformation or yielding, making them hazardous for load-bearing structures that require impact toughness.',
    reasonUrdu: 'Wajah: Brittle metals achanak bina kisi warning ke toot jatay hain, is liye unhe structural beams ma use nahi kiya ja sakta.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 215,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Warning Before Failure',
    question: 'Why do structural engineers overwhelmingly prefer ductile materials (like structural steel) over brittle materials for bridges, cranes, and buildings?',
    options: [
      'Ductile materials undergo large visible plastic deformation (yielding and sagging) before breaking, giving clear advance warning of impending collapse',
      'Ductile materials cost nothing',
      'Ductile materials have zero weight',
      'Ductile materials are transparent'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Ductile yielding allows excessive deflection or sagging that alerts inspectors before catastrophic fracture, while also redistributing peak stresses around joints.',
    reasonUrdu: 'Wajah: Ductile material tootne se pehle wazeh tor par jhuk kar (deform ho kar) warning deta hai, jab ke brittle material achanak gir jata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 216,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Energy Absorption in Car Crash',
    question: 'Why are modern automobile crumple zones engineered from ductile steel and aluminum alloys instead of ultra-hard brittle metals?',
    options: [
      'Ductile crumple zones undergo extensive plastic deformation, absorbing massive kinetic energy during an impact and cushioning passengers',
      'To make cars bounce off walls like rubber balls',
      'To prevent cars from rusting',
      'To make cars float on rivers'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Work done during plastic deformation ($W = \\int \\sigma \\, d\\varepsilon \\times V$) converts fatal crash kinetic energy into permanent metallurgical deformation heat.',
    reasonUrdu: 'Wajah: Ductile metal accident ma khud crumple (plastic deform) ho kar crash ki saari energy absorb kar leta hai aur musafiron ko bachata hai.',
    formula: 'W_{absorbed} = \\text{Area under plastic curve}',
    textbookRef: 'Sec 5.5 & 5.6, Page 93-94'
  },
  {
    id: 217,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Impact of Grain Size on Ductility',
    question: 'According to the Hall-Petch relationship, reducing the average crystal grain size in a polycrystalline metal:',
    options: [
      'Increases both yield strength and hardness by providing more grain boundaries that impede dislocation glide',
      'Decreases the density to zero',
      'Turns the metal into a superfluid',
      'Eliminates the Young\'s modulus'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Grain boundaries act as barriers to dislocation motion. Finer grains mean smaller dislocation pile-ups, requiring higher applied stress to propagate slip: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$.',
    reasonUrdu: 'Wajah: Chotay grains ma grain boundaries zyada hoti hain jo dislocations ko rokti hain, is se metal ki yield strength barhti hai.',
    formula: '\\sigma_y = \\sigma_0 + k_y d^{-1/2}',
    textbookRef: 'Sec 5.1 & 5.5, Page 88, 93'
  },
  {
    id: 218,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Cast Iron vs Wrought Iron',
    question: 'Wrought iron (page 93) contains $<0.08\\%$ carbon and is ductile. Cast iron contains $2-4\\%$ carbon and is:',
    options: ['Brittle', 'A superfluid', 'An ideal fluid', 'A polymer'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Cast iron has high carbon content forming brittle graphite flakes or cementite networks, making it brittle with low tensile strength despite high compressive strength.',
    reasonUrdu: 'Wajah: Cast iron ma carbon zyada hota hai, is liye yeh brittle hota hai aur chot lagne par toot jata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 219,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Plastic Flow in Glaciers',
    question: 'Ice is normally brittle under sudden hammer blows (Table 5.1 lists $Y = 14\\text{ GPa}$). Yet massive mountain glaciers flow down valleys over years like a viscous fluid. Why?',
    options: [
      'Under steady high hydrostatic pressure over long time periods, ice undergoes continuous plastic creep deformation and basal slip',
      'The entire glacier turns into liquid helium-4',
      'The glacier has zero mass',
      'Friction between ice and rock is zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Under prolonged pressure, dislocation climb and pressure-melting at grain contacts allow crystalline ice to undergo steady-state plastic creep flow.',
    reasonUrdu: 'Wajah: Ziyada dabao aur waqt ke sath ice ke crystal layers creep deformation ke zariye aahista aahista flow karti hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.1 & 5.5, Table 5.1, Page 91, 93'
  },
  {
    id: 220,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Tensile vs Compressive Strength Ratio',
    question: 'For typical brittle materials like stone, brick, and glass, the compressive strength is typically:',
    options: [
      '5 to 10 times GREATER than their tensile strength',
      'Much smaller than their tensile strength',
      'Exactly zero',
      'Equal to the speed of light'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Brittle materials contain microscopic surface cracks. Tensile stress pulls crack faces apart (opening cracks catastrophically), whereas compressive stress pushes crack faces together, giving high compressive resistance.',
    reasonUrdu: 'Wajah: Compression ma cracks band hotay hain jab ke tension ma khul jatay hain; is liye brittle materials compression ma 5-10 guna zyada mazboot hotay hain.',
    formula: '\\sigma_{comp} \\gg \\sigma_{tensile}',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 221,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Plasticity vs Elasticity',
    question: 'Which statement accurately contrasts elasticity and plasticity?',
    options: [
      'Elasticity is temporary, reversible deformation; plasticity is permanent, non-recoverable deformation',
      'Elasticity is permanent; plasticity is temporary',
      'Both disappear when load is applied',
      'Neither occurs in solids'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Elastic deformation involves stretching interatomic bonds reversibly. Plastic deformation involves permanent rearrangement and slippage of atomic planes via dislocations.',
    reasonUrdu: 'Wajah: Elasticity aarzi (temporary) tabdeeli hai jo foran wapis aa jati hai; Plasticity mustaqil (permanent) tabdeeli hai jo wapis nahi aati.',
    formula: 'N/A',
    textbookRef: 'Sec 5.2 & 5.5, Page 89, 93'
  },
  {
    id: 222,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Percent Elongation as Ductility Measure',
    question: 'In standard metallurgical testing, ductility is quantitatively specified by the:',
    options: [
      'Percentage elongation at fracture: $\\frac{L_f - L_0}{L_0} \\times 100\\%$',
      'Young\'s modulus multiplied by density',
      'The speed of efflux',
      'Viscosity of the metal'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Percentage elongation ($\\%EL$) and percentage reduction in area ($\\%RA$) at fracture quantify the total plastic strain a material endures before breaking.',
    reasonUrdu: 'Wajah: Tootne ke waqt total percentage elongation (%EL) ductility ka quantitative paimana hota hai.',
    formula: '\\% EL = \\frac{L_f - L_0}{L_0} \\times 100\\%',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 223,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Classification: Wrought Iron, Copper, Glass, Bismuth',
    question: 'Which of the following correctly pairs materials with their mechanical classification according to page 93?',
    options: [
      'Ductile: Copper, Wrought iron; Brittle: Glass, Bismuth',
      'Ductile: Glass, Chromium; Brittle: Copper, Lead',
      'Ductile: High carbon steel; Brittle: Wrought iron',
      'All are classified as ideal fluids'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93 classifies copper and wrought iron under ductile substances, and glass and bismuth under brittle substances.',
    reasonUrdu: 'Wajah: Kitab ke mutabiq Copper aur Wrought iron ductile hain, jab ke Glass aur Bismuth brittle hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 224,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Hydrostatic Pressure Effect on Brittleness',
    question: 'Under extremely high hydrostatic confining pressure (such as deep within Earth\'s mantle), normally brittle rocks (like granite or marble):',
    options: [
      'Become ductile and deform plastically without fracturing',
      'Evaporate into gas',
      'Turn into liquid helium',
      'Lose all mass'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'High confining pressure prevents microcracks from opening and propagating, forcing the material to deform via dislocation slip and twinning instead of brittle cleavage.',
    reasonUrdu: 'Wajah: High hydrostatic dabao ma cracks khul nahi saktay, is liye sakht pathar bhi ductile ho kar murtay hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 225,
    module: 'I',
    moduleName: 'Ductile vs Brittle Materials',
    topic: 'Lead as Ductile Substance',
    question: 'Why does a sheet of pure lead (page 93) deform and dent easily when pressed, with almost no spring-back?',
    options: [
      'Lead has a very low yield stress and recrystallizes at room temperature, making it highly ductile and plastic',
      'Lead is an amorphous liquid',
      'Lead has infinite Young\'s modulus',
      'Lead is an ideal gas'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Lead\'s melting point is low ($327\\,^\\circ\\text{C}$), so room temperature ($20\\,^\\circ\\text{C} = 293\\text{ K}$) is over half its absolute melting point ($0.49 T_m$), meaning lead deforms in its high-temperature plastic regime.',
    reasonUrdu: 'Wajah: Lead ka melting point kam hota hai; room temperature par iska yield stress bohot kam aur plasticity bohot zyada hoti hai.',
    formula: 'T_{room} / T_m \\approx 0.5',
    textbookRef: 'Sec 5.5, Page 93'
  },

  // ==========================================
  // MODULE J: Strain Energy in Deformed Materials & Work Done (MCQs 226-250)
  // ==========================================
  {
    id: 226,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Definition of Strain Energy',
    question: 'According to Section 5.6 on page 93-94, what is strain energy in a deformed material?',
    options: [
      'The work done by an external deforming force stored inside the body as elastic potential energy of displaced molecules',
      'The kinetic energy of the whole moving object',
      'The heat energy lost into the surrounding air',
      'The buoyant energy of displaced liquid'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 93: "When a body is deformed by a force, work is done against elastic restoring force. It is stored in it as its potential energy and is equal to the gain in potential energy of the molecules of a body due to the displacement of these molecules from their mean positions."',
    reasonUrdu: 'Wajah: Page 93 ke mutabiq restoring force ke khilaf kia gaya kaam molecules ki elastic potential energy (strain energy) ban kar store hota hai.',
    formula: 'W = \\text{Elastic P.E.}',
    textbookRef: 'Sec 5.6, Page 93-94'
  },
  {
    id: 227,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Average Force in Stretched Spring',
    question: 'According to page 94, as a spring is stretched from extension $0$ to extension $x$ by a force increasing linearly from $0$ to $F$, what is the average force applied?',
    options: [
      '$\\text{Average force} = \\frac{0 + F}{2} = \\frac{1}{2} F$',
      '$\\text{Average force} = F$',
      '$\\text{Average force} = 2F$',
      '$\\text{Average force} = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94: "As the extension is directly proportional to the stretching force within the elastic limit, therefore the force increases uniformly from zero to $F$... Thus, the average force that stretches the spring through $x$ is $1/2 F$."',
    reasonUrdu: 'Wajah: Force 0 se barh kar F tak uniformly barhti hai, is liye average force (0 + F)/2 = 1/2 F hoti hai.',
    formula: 'F_{avg} = \\frac{1}{2} F',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 228,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Formula for Work Done / Strain Energy',
    question: 'According to Equation 5.7 on page 94, what is the work done in stretching the spring through extension $x$?',
    options: [
      '$W = \\text{Average force} \\times \\text{Distance} = \\frac{1}{2} F x$',
      '$W = F \\times x$',
      '$W = 2 F x$',
      '$W = \\frac{F}{x}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94: "Work done = Average force $\\times$ Distance in the direction of the force... $W = \\frac{1}{2} F \\times x$ (Eq. 5.7)."',
    reasonUrdu: 'Wajah: Eq 5.7 ke mutabiq Work done = Average force x Distance = 1/2 F x.',
    formula: 'W = \\frac{1}{2} F x',
    textbookRef: 'Sec 5.6, Eq 5.7, Page 94'
  },
  {
    id: 229,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Strain Energy in Terms of Spring Constant $k$',
    question: 'Substituting Hooke\'s law ($F = kx$) into the work equation (Eq. 5.7), what expression for strain energy ($E$) is obtained on page 94 (Eq. 5.8)?',
    options: [
      '$E = \\frac{1}{2} F x = \\frac{1}{2} k x^2$',
      '$E = k x^2$',
      '$E = 2 k x^2$',
      '$E = \\frac{1}{2} k x$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94, Eq 5.8 explicitly derives: "From Hooke\'s law $F = k(x)$, therefore $W = \\frac{1}{2} (kx)(x) = \\frac{1}{2} k x^2$. Strained energy stored in the body $E = \\frac{1}{2} F x = \\frac{1}{2} k x^2$ (Eq. 5.8)."',
    reasonUrdu: 'Wajah: Eq 5.8 ke mutabiq Hooke\'s law F = kx put karne par E = 1/2 k x^2 banta hai.',
    formula: 'E = \\frac{1}{2} k x^2',
    textbookRef: 'Sec 5.6, Eq 5.8, Page 94'
  },
  {
    id: 230,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Work Done as Area Under Force-Extension Graph',
    question: 'According to the "For Your Information" box on page 94, what does the area under a force-extension graph represent?',
    options: [
      'The work done to stretch the material (equal to the elastic potential energy stored in it)',
      'The density of the spring',
      'The acceleration due to gravity',
      'The volume flow rate'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94 explicitly states: "The amount of work done in stretching a material is equal to the average force applied multiplied by the distance moved. Therefore, the area under a force-extension graph represents the work done to stretch the material."',
    reasonUrdu: 'Wajah: Force-extension graph ke niche triangle ka area kia gaya kaam aur stored elastic potential energy zahir karta hai.',
    formula: '\\text{Area of } \\triangle OPQ = \\frac{1}{2} F x',
    textbookRef: 'For your info & Fig 5.7, Page 94'
  },
  {
    id: 231,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Area of Triangle OPQ on Page 94',
    question: 'In Fig. 5.7 on page 94, the force-extension graph forms a right triangle OPQ of base $x$ and height $F$. What is the geometric area of $\\triangle OPQ$?',
    options: [
      '$\\text{Area of } OPQ = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} x F$',
      '$\\text{Area} = x \\times F$',
      '$\\text{Area} = \\frac{1}{2} x^2$',
      '$\\text{Area} = \\pi x F$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94: "$W = \\text{Area of } OPQ = \\frac{1}{2} (F)(x) = \\frac{1}{2} k x^2$."',
    reasonUrdu: 'Wajah: Triangle OPQ ka area = 1/2 x base x height = 1/2 x F hota hai.',
    formula: 'W = \\text{Area of } \\triangle OPQ = \\frac{1}{2} F x',
    textbookRef: 'Sec 5.6, Fig 5.7, Page 94'
  },
  {
    id: 232,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Numerical Calculation of Stored Energy',
    question: 'A wire is stretched by an extension of $4.0\\text{ mm}$ ($4.0 \\times 10^{-3}\\text{ m}$) under a tension force of $500\\text{ N}$. How much elastic strain energy is stored in the wire?',
    options: ['1.0 J', '2.0 J', '0.5 J', '2000 J'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$W = \\frac{1}{2} F x = \\frac{1}{2} (500\\text{ N}) \\times (4.0 \\times 10^{-3}\\text{ m}) = 250 \\times 0.004 = 1.0\\text{ J}$.',
    reasonUrdu: 'Wajah: W = 1/2 F x = 1/2 x 500 x 0.004 = 1.0 Joule.',
    formula: 'W = \\frac{1}{2} F x',
    textbookRef: 'Sec 5.6, Eq 5.7, Page 94'
  },
  {
    id: 233,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Energy Density Formula in Terms of Stress and Strain',
    question: 'What is the formula for elastic strain energy per unit volume ($u = W / V$) in terms of stress ($\\sigma$) and strain ($\\varepsilon$)?',
    options: [
      '$u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain} = \\frac{1}{2} \\sigma \\varepsilon$',
      '$u = \\sigma \\times \\varepsilon$',
      '$u = \\frac{\\sigma}{\\varepsilon}$',
      '$u = 2 \\sigma \\varepsilon$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Total energy $W = \\frac{1}{2} F x$. Dividing by volume $V = A L_0$: $u = \\frac{W}{V} = \\frac{1}{2} \\frac{F}{A} \\frac{x}{L_0} = \\frac{1}{2} \\sigma \\varepsilon$.',
    reasonUrdu: 'Wajah: Energy density = Energy / Volume = (1/2 F x) / (A L0) = 1/2 Stress x Strain.',
    formula: 'u = \\frac{1}{2} \\sigma \\varepsilon',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 234,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Energy Density in Terms of Young\'s Modulus',
    question: 'Since $\\sigma = Y \\varepsilon$, what is the strain energy per unit volume ($u$) expressed in terms of Young\'s modulus $Y$ and strain $\\varepsilon$?',
    options: [
      '$u = \\frac{1}{2} Y \\varepsilon^2$',
      '$u = Y \\varepsilon^2$',
      '$u = \\frac{1}{2} Y^2 \\varepsilon$',
      '$u = \\frac{\\varepsilon^2}{2Y}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Substituting $\\sigma = Y\\varepsilon$ into $u = \\frac{1}{2}\\sigma\\varepsilon$: $u = \\frac{1}{2}(Y\\varepsilon)\\varepsilon = \\frac{1}{2} Y \\varepsilon^2$.',
    reasonUrdu: 'Wajah: \\sigma = Y \\varepsilon put karne par u = 1/2 (Y \\varepsilon) \\varepsilon = 1/2 Y \\varepsilon^2 banta hai.',
    formula: 'u = \\frac{1}{2} Y \\varepsilon^2',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 235,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Energy Density in Terms of Stress Only',
    question: 'Substituting $\\varepsilon = \\sigma / Y$ into $u = \\frac{1}{2}\\sigma\\varepsilon$, what is the strain energy per unit volume in terms of stress $\\sigma$ and Young\'s modulus $Y$?',
    options: [
      '$u = \\frac{\\sigma^2}{2Y}$',
      '$u = \\frac{Y^2}{2\\sigma}$',
      '$u = \\frac{1}{2} \\sigma^2 Y$',
      '$u = 2 \\sigma^2 Y$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$u = \\frac{1}{2} \\sigma \\left(\\frac{\\sigma}{Y}\\right) = \\frac{\\sigma^2}{2Y}$.',
    reasonUrdu: 'Wajah: \\varepsilon = \\sigma / Y put karne par u = \\sigma^2 / (2Y) nikalta hai.',
    formula: 'u = \\frac{\\sigma^2}{2Y}',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 236,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Work Done When Extension is Doubled',
    question: 'If the extension $x$ of an elastic wire obeying Hooke\'s law is doubled ($x \\to 2x$), by what factor does the stored elastic strain energy increase?',
    options: ['4 times', '2 times', '8 times', 'Remains the same'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Because $E = \\frac{1}{2} k x^2 \\propto x^2$, doubling the extension quadruples the stored strain energy: $E\' = \\frac{1}{2} k (2x)^2 = 4 \\times \\left(\\frac{1}{2} k x^2\\right) = 4E$.',
    reasonUrdu: 'Wajah: E = 1/2 k x^2; extension double hone se x^2 ki wajah sy energy 4 guna barh jati hai.',
    formula: 'E \\propto x^2',
    textbookRef: 'Sec 5.6, Eq 5.8, Page 94'
  },
  {
    id: 237,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Work Done to Stretch from $x_1$ to $x_2$',
    question: 'What is the work done in stretching a spring of stiffness $k$ from an initial extension $x_1$ to a greater extension $x_2$?',
    options: [
      '$W = \\frac{1}{2} k (x_2^2 - x_1^2)$',
      '$W = \\frac{1}{2} k (x_2 - x_1)^2$',
      '$W = k (x_2 - x_1)$',
      '$W = \\frac{1}{2} k (x_2 + x_1)^2$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$W = \\int_{x_1}^{x_2} kx \\, dx = \\left[ \\frac{1}{2} k x^2 \\right]_{x_1}^{x_2} = \\frac{1}{2} k (x_2^2 - x_1^2)$. (Note: This is NOT $\\frac{1}{2}k(x_2-x_1)^2$!)',
    reasonUrdu: 'Wajah: Work done change in potential energy ke barabar hota hai: W = 1/2 k (x2^2 - x1^2).',
    formula: 'W = \\frac{1}{2} k (x_2^2 - x_1^2)',
    textbookRef: 'Sec 5.6, Eq 5.8, Page 94'
  },
  {
    id: 238,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Energy Dissipation in Sudden Release',
    question: 'A mass $m$ hanging on an elastic wire stretches it by $\\Delta L$. The work done by gravity is $W_g = mg \\Delta L$. The elastic energy stored in the wire is only $E = \\frac{1}{2} mg \\Delta L$. What happens to the remaining $\\frac{1}{2} mg \\Delta L$ of energy?',
    options: [
      'It is converted into kinetic energy of oscillation and dissipated as heat due to internal friction',
      'It creates mass out of nothing',
      'It escapes as sound waves to infinity with zero heat',
      'It vanishes without any trace'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'When loaded statically, half the potential energy lost by the falling mass is stored as elastic strain energy; the other half goes into kinetic energy of oscillation, eventually decaying into thermal energy.',
    reasonUrdu: 'Wajah: Aadha kaam (1/2 mg \\Delta L) wire ma store hota hai aur baki aadha oscillations ki kinetic energy aur heat ma zaya hota hai.',
    formula: '\\Delta E_{lost} = \\frac{1}{2} m g \\Delta L',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 239,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Spring Cut into Two Halves',
    question: 'A spring of stiffness $k$ is cut into two equal halves. What is the stiffness $k\'$ of each half?',
    options: ['$2k$', '$k / 2$', '$k$', '$4k$'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Spring stiffness is inversely proportional to its active length: $k = \\frac{A Y}{L_0} \\propto \\frac{1}{L_0}$. Halving the length doubles the stiffness to $2k$.',
    reasonUrdu: 'Wajah: Spring ko aadha kaatne se uski stiffness double (2k) ho jati hai kyun ke k \\propto 1/L.',
    formula: 'k\' = 2k',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 240,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Ratio of Energies for Same Force',
    question: 'Two wires of identical dimensions, one of steel ($Y_1 = 200\\text{ GPa}$) and one of copper ($Y_2 = 100\\text{ GPa}$), are stretched by the SAME tensile force $F$. What is the ratio of their stored strain energies ($E_1 / E_2$)?',
    options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Energy $E = \\frac{1}{2} F x = \\frac{1}{2} F \\left(\\frac{F L_0}{A Y}\\right) = \\frac{F^2 L_0}{2 A Y} \\propto \\frac{1}{Y}$. For the same force, energy is inversely proportional to Young\'s modulus: $\\frac{E_1}{E_2} = \\frac{Y_2}{Y_1} = \\frac{100}{200} = \\frac{1}{2}$.',
    reasonUrdu: 'Wajah: Same force ke liye E = F^2 L / (2AY); energy Young\'s modulus ke inversely proportional hoti hai: E1/E2 = Y2/Y1 = 1/2.',
    formula: 'E \\propto \\frac{1}{Y} \\quad (\\text{for constant } F)',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 241,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Ratio of Energies for Same Extension',
    question: 'If the same two wires (steel $Y_1 = 200\\text{ GPa}$ and copper $Y_2 = 100\\text{ GPa}$) are stretched by the SAME extension $x$, what is the ratio of their stored strain energies ($E_1 / E_2$)?',
    options: ['2 : 1', '1 : 2', '4 : 1', '1 : 4'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'When extension $x$ is constant: $E = \\frac{1}{2} k x^2 = \\frac{1}{2} \\left(\\frac{A Y}{L_0}\\right) x^2 \\propto Y$. Therefore $\\frac{E_1}{E_2} = \\frac{Y_1}{Y_2} = \\frac{200}{100} = \\frac{2}{1}$.',
    reasonUrdu: 'Wajah: Same extension ke liye E = 1/2 (AY/L) x^2; energy Young\'s modulus ke directly proportional hoti hai: E1/E2 = Y1/Y2 = 2/1.',
    formula: 'E \\propto Y \\quad (\\text{for constant } x)',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 242,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Volumetric Strain Energy in Compressed Fluid',
    question: 'What is the elastic strain energy stored in a fluid of initial volume $V_0$ and Bulk Modulus $K$ when compressed under excess pressure $\\Delta P$?',
    options: [
      '$W = \\frac{1}{2} \\frac{(\\Delta P)^2}{K} V_0$',
      '$W = \\frac{1}{2} K (\\Delta P)^2 V_0$',
      '$W = \\Delta P \\cdot V_0$',
      '$W = \\frac{K V_0}{\\Delta P}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Work done $W = \\frac{1}{2} \\Delta P \\cdot \\Delta V$. Since $\\Delta V = \\frac{\\Delta P}{K} V_0$, substituting gives $W = \\frac{1}{2} \\frac{(\\Delta P)^2}{K} V_0$.',
    reasonUrdu: 'Wajah: Volume compression ma work done W = 1/2 \\Delta P \\Delta V hota hai; \\Delta V = (\\Delta P / K) V0 put karne par W = (\\Delta P)^2 V0 / (2K) banta hai.',
    formula: 'W = \\frac{(\\Delta P)^2 V_0}{2K}',
    textbookRef: 'Sec 5.3 & 5.6, Page 91, 94'
  },
  {
    id: 243,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Shear Strain Energy Density',
    question: 'What is the shear strain energy stored per unit volume in a block subjected to shear stress $\\tau$ and shear strain $\\gamma$?',
    options: [
      '$u = \\frac{1}{2} \\tau \\gamma = \\frac{1}{2} G \\gamma^2 = \\frac{\\tau^2}{2G}$',
      '$u = \\tau \\gamma$',
      '$u = 2 \\tau \\gamma$',
      '$u = \\frac{G}{\\gamma^2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'By direct analogy with tensile strain energy, shear energy density is half the product of shear stress and shear strain: $u = \\frac{1}{2} \\tau \\gamma = \\frac{\\tau^2}{2G}$.',
    reasonUrdu: 'Wajah: Shear energy density tensile energy ki tarah u = 1/2 tau gamma = tau^2 / (2G) hoti hai.',
    formula: 'u = \\frac{1}{2} \\tau \\gamma = \\frac{\\tau^2}{2G}',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 244,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Dimensional Formula of Energy Density',
    question: 'What is the dimensional formula of strain energy per unit volume ($u$)?',
    options: ['[M L⁻¹ T⁻²]', '[M L² T⁻²]', '[M L T⁻²]', '[M L⁻³]'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Energy Density = $\\frac{\\text{Energy}}{\\text{Volume}} = \\frac{[\\text{M L}^2 \\text{T}^{-2}]}{[\\text{L}^3]} = [\\text{M L}^{-1} \\text{T}^{-2}]$. Notice this is IDENTICAL to the dimensions of stress and pressure!',
    reasonUrdu: 'Wajah: Energy Density = Energy / Volume = [ML^2 T^-2] / [L^3] = [M L^-1 T^-2] (jo bilkul stress aur pressure ke barabar hai).',
    formula: '[u] = [\\text{M L}^{-1} \\text{T}^{-2}]',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 245,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Archery Bow Mechanics',
    question: 'When an archer pulls back a bowstring, where is the energy that propels the arrow forward originally stored?',
    options: [
      'As elastic strain energy in the bent limbs of the bow',
      'In the air around the bow',
      'In the target',
      'In the chemical bonds of the feathers'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'The archer does mechanical work bending the flexible bow limbs. This is stored as elastic strain energy ($W = \\frac{1}{2} F x$). On release, it converts into arrow kinetic energy ($\\frac{1}{2} m v^2$).',
    reasonUrdu: 'Wajah: Teer kaman ko khainchne par energy kaman ke limbs ma elastic strain energy ke tor par store hoti hai.',
    formula: '\\frac{1}{2} k x^2 = \\frac{1}{2} m v^2',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 246,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Elastic Energy in Example 5.1 Wire',
    question: 'In textbook Example 5.1 (page 93), the tractor pulls a wire with $F = 10{,}000\\text{ N}$ producing extension $\\Delta L = 4.84 \\times 10^{-3}\\text{ m}$. What is the total strain energy stored in the wire?',
    options: ['24.2 J', '48.4 J', '12.1 J', '100 J'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$W = \\frac{1}{2} F \\Delta L = \\frac{1}{2} (10{,}000\\text{ N}) \\times (4.84 \\times 10^{-3}\\text{ m}) = 5{,}000 \\times 0.00484 = 24.2\\text{ J}$.',
    reasonUrdu: 'Wajah: W = 1/2 F \\Delta L = 1/2 x 10,000 x 0.00484 = 24.2 Joules.',
    formula: 'W = \\frac{1}{2} F \\Delta L',
    textbookRef: 'Example 5.1 & Sec 5.6, Page 93-94'
  },
  {
    id: 247,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Area of Rubber Hysteresis Loop',
    question: 'When a rubber band is stretched and then allowed to contract back to its original length, the area enclosed inside its force-extension hysteresis loop represents:',
    options: [
      'Energy converted into heat due to internal molecular friction during the cycle',
      'Potential energy gained by the universe',
      'The mass of the rubber',
      'The terminal velocity'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Work done during loading exceeds work recovered during unloading. The enclosed loop area represents lost mechanical energy transformed into thermal vibration.',
    reasonUrdu: 'Wajah: Loading aur unloading ke darmiyan area internal friction ki wajah sy heat ma zaya hone wali energy zahir karta hai.',
    formula: 'Q_{heat} = \\oint F \\, dx',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 248,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Why Car Tires Get Warm',
    question: 'Why do automobile tires become distinctly warm to the touch after driving at highway speeds for an hour?',
    options: [
      'Continuous cyclical elastic hysteresis deformation of the rubber tread generates internal frictional heat with every wheel rotation',
      'The car engine exhausts directly into the tire tubes',
      'Friction with atmospheric air molecules melts the tire',
      'The rubber absorbs cosmic rays'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'With every tire revolution, rubber segments undergo rapid loading and unloading cycles. Hysteresis energy loss in each cycle accumulates into noticeable internal heating.',
    reasonUrdu: 'Wajah: Har chakar ma tire ka rubber stretch aur relax hota hai; hysteresis loop ki wajah sy har dafa energy heat ma convert hoti hai.',
    formula: '\\Delta Q = N \\oint F \\, dx',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 249,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Spring Combinations: Series vs Parallel',
    question: 'Two identical springs each of stiffness $k$ are connected in parallel. What is the equivalent spring constant $k_{eq}$ of the combination?',
    options: ['$2k$', '$k / 2$', '$k$', '$4k$'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'For parallel springs, a displacement $x$ produces force $F = F_1 + F_2 = kx + kx = 2kx$. Thus $k_{eq} = 2k$. (In series, $k_{eq} = k/2$).',
    reasonUrdu: 'Wajah: Parallel springs ma dono par barabar extension hoti hai to total force F = 2kx hoti hai, is liye keq = 2k.',
    formula: 'k_{parallel} = k_1 + k_2 = 2k',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 250,
    module: 'J',
    moduleName: 'Strain Energy in Deformed Materials',
    topic: 'Maximum Kinetic Energy from Released Wire',
    question: 'A mass $M$ is attached to a stretched wire storing strain energy $E_s$. If the wire is suddenly released from a fixed point without external resistance, the maximum velocity $v_{max}$ of the mass is:',
    options: [
      '$v_{max} = \\sqrt{\\frac{2 E_s}{M}}$',
      '$v_{max} = \\frac{E_s}{M}$',
      '$v_{max} = \\sqrt{\\frac{E_s}{2M}}$',
      '$v_{max} = \\frac{2 E_s}{M^2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'By conservation of energy, all stored elastic strain energy converts into kinetic energy at equilibrium: $E_s = \\frac{1}{2} M v_{max}^2 \\implies v_{max} = \\sqrt{\\frac{2E_s}{M}}$.',
    reasonUrdu: 'Wajah: Saari elastic strain energy kinetic energy ma convert hoti hai: 1/2 M v^2 = Es; is liye vmax = \\sqrt{2Es / M}.',
    formula: 'v_{max} = \\sqrt{\\frac{2 E_s}{M}}',
    textbookRef: 'Sec 5.6, Page 94'
  }
];
