import { MCQ } from '../../types/physics';

export const mcqsModuleP_T: MCQ[] = [
  // ==========================================
  // MODULE P: Torricelli's Theorem, Efflux Speed & Orifice Mechanics (MCQs 376-400)
  // ==========================================
  {
    id: 376,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Statement of Torricelli\'s Theorem',
    question: 'According to Section 5.12 on page 105, what is the statement of Torricelli\'s Theorem?',
    options: [
      'The speed of efflux is equal to the velocity gained by the fluid in falling through the distance $(h_1 - h_2)$ under the action of gravity',
      'The speed of efflux is proportional to the orifice area squared',
      'The pressure inside a tank is independent of depth',
      'The volume of fluid discharged per second is constant for all orifice depths'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 105 states: "This is Torricelli\'s theorem which states that: The speed of efflux is equal to the velocity gained by the fluid in falling through the distance $(h_1 - h_2)$ under the action of gravity."',
    reasonUrdu: 'Wajah: Page 105 ke mutabiq Torricelli\'s theorem batata hai ke efflux speed us velocity ke barabar hoti hai jo fluid (h1 - h2) faasla freely girte huye hasil karta hai.',
    formula: 'v_2 = \\sqrt{2g(h_1 - h_2)}',
    textbookRef: 'Sec 5.12, Eq 5.25, Page 105'
  },
  {
    id: 377,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Formula for Speed of Efflux (Eq. 5.25)',
    question: 'According to Equation 5.25 on page 105, what is the mathematical formula for Torricelli\'s speed of efflux?',
    options: [
      '$v_2 = \\sqrt{2g(h_1 - h_2)}$',
      '$v_2 = 2g(h_1 - h_2)$',
      '$v_2 = \\sqrt{g(h_1 - h_2)}$',
      '$v_2 = \\frac{1}{2} g (h_1 - h_2)^2$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 105, Eq 5.25 explicitly derives: "$v_2 = \\sqrt{2g(h_1 - h_2)}$ (Eq. 5.25). This is Torricelli\'s theorem."',
    reasonUrdu: 'Wajah: Eq 5.25 ke mutabiq Efflux speed ka formula v2 = \\sqrt{2g(h1 - h2)} hota hai.',
    formula: 'v_2 = \\sqrt{2g(h_1 - h_2)}',
    textbookRef: 'Sec 5.12, Eq 5.25, Page 105'
  },
  {
    id: 378,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Derivation Assumptions on Page 105',
    question: 'In the derivation on page 105 (Fig. 5.24), what key assumption is made regarding the top surface speed $v_1$ of a large tank?',
    options: [
      'Because the top surface area is vastly larger than the small orifice area, downward speed $v_1$ is approximately zero ($v_1 \\approx 0$)',
      '$v_1$ is equal to the speed of light',
      '$v_1$ is equal to $v_2$',
      '$v_1$ is negative'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 105: "Since the orifices are so small, the efflux speeds $v_2$ will be much larger than the speed $v_1$ of the top surface of water. We can therefore take $v_1$ as approximately zero ($v_1 \\approx 0$). Hence, Bernoulli\'s equation can be written as..."',
    reasonUrdu: 'Wajah: Tank ka surface area orifice ke muqablay bohot barha hota hai, is liye continuity equation ke tehat top surface ki speed v1 taqreeban zero li jati hai.',
    formula: 'A_1 \\gg A_2 \\implies v_1 \\approx 0',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 379,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Atmospheric Pressure Cancellation',
    question: 'In the derivation of Torricelli\'s theorem on page 105, why do pressures $P_1$ (at the open top of the tank) and $P_2$ (just outside the open orifice) cancel out?',
    options: [
      'Both the top liquid surface and the exiting jet are open to the atmosphere, so $P_1 = P_2 = P_{atm}$',
      'Because pressure in a fluid is always zero',
      'Because gravity neutralizes atmospheric air',
      'Because water is non-magnetic'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 105: "But $P_1 = P_2 = \\text{Atmospheric pressure}$. Therefore, the above equation becomes: $P + \\rho g h_1 = P + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$."',
    reasonUrdu: 'Wajah: Tank ka top aur orifice dono bahir hawa ma khulay hain, is liye P1 = P2 = Patm dono taraf se cancel ho jata hai.',
    formula: 'P_1 = P_2 = P_{atm}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 380,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Numerical Calculation of Efflux Speed',
    question: 'A large water tank has a small hole located $4.9\\text{ m}$ below the water surface. (Take $g = 9.8\\text{ m s}^{-2}$). What is the speed of efflux of water escaping from the hole?',
    options: [
      '$9.8\\text{ m s}^{-1}$',
      '$4.9\\text{ m s}^{-1}$',
      '$19.6\\text{ m s}^{-1}$',
      '$96.0\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$v = \\sqrt{2 g h} = \\sqrt{2 \\times 9.8 \\times 4.9} = \\sqrt{96.04} = 9.8\\text{ m/s}$. Exactly matches free fall velocity from height $4.9\\text{ m}$!',
    reasonUrdu: 'Wajah: v = \\sqrt{2gh} = \\sqrt{2 x 9.8 x 4.9} = \\sqrt{96.04} = 9.8 m/s.',
    formula: 'v = \\sqrt{2 g h}',
    textbookRef: 'Sec 5.12, Eq 5.25, Page 105'
  },
  {
    id: 381,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Independence from Fluid Density',
    question: 'Does the speed of efflux from an open orifice at depth $h$ depend on the density of the liquid (e.g. water vs denser mercury)?',
    options: [
      'No, the theoretical speed of efflux $v = \\sqrt{2gh}$ is completely independent of fluid density',
      'Yes, denser liquids always flow faster',
      'Yes, lighter liquids flow infinitely fast',
      'Yes, mercury flows with speed zero'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Just like objects in free fall accelerate identically regardless of mass, density $\\rho$ divides out completely from Bernoulli\'s equation. Mercury and water at the same depth exit with the exact same theoretical speed!',
    reasonUrdu: 'Wajah: Formula v = \\sqrt{2gh} ma density \\rho cancel ho jati hai; is liye mercury aur water dono ki efflux speed same depth par bilkul barabar hogi.',
    formula: 'v = \\sqrt{2 g h} \\quad (\\text{independent of } \\rho)',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 382,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Vena Contracta Concept',
    question: 'In real fluid flow through a sharp-edged orifice, fluid streamlines converge to a minimum cross-sectional area just outside the orifice before spreading. This narrowest jet region is called:',
    options: ['Vena contracta', 'Torricelli throat', 'Venturi pinch', 'Stokes node'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Due to fluid inertia, fluid converging toward the orifice cannot make a sharp $90^\\circ$ turn, causing the jet to contract to an area $A_{jet} \\approx 0.62 A_{orifice}$ at the vena contracta.',
    reasonUrdu: 'Wajah: Orifice ke bahir streamlines converge hone se jet ka area thora kam ho jata hai jisay Vena Contracta kehte hain.',
    formula: 'C_c = \\frac{A_{vena}}{A_{orifice}} \\approx 0.62',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 383,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Horizontal Range of Jet',
    question: 'A tall cylindrical tank of height $H$ filled with liquid stands on the ground. A hole is punched in its side at depth $y$ below the surface (height $H-y$ above ground). What is the horizontal range $R$ of the emerging jet?',
    options: [
      '$R = 2\\sqrt{y(H - y)}$',
      '$R = \\sqrt{y(H - y)}$',
      '$R = 4 y (H - y)$',
      '$R = 2(H - y)$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Efflux velocity $v = \\sqrt{2gy}$. Time to hit the ground from height $(H-y)$ is $t = \\sqrt{\\frac{2(H-y)}{g}}$. Horizontal range $R = v t = \\sqrt{2gy} \\times \\sqrt{\\frac{2(H-y)}{g}} = 2\\sqrt{y(H - y)}$.',
    reasonUrdu: 'Wajah: Horizontal range R = v x t = \\sqrt{2gy} x \\sqrt{2(H-y)/g} = 2\\sqrt{y(H - y)}.',
    formula: 'R = 2\\sqrt{y(H - y)}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 384,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Maximum Horizontal Range Condition',
    question: 'At what depth $y$ below the surface must the hole be made in a tank of total height $H$ to achieve the MAXIMUM horizontal range $R_{max}$ of the liquid jet on the ground?',
    options: [
      'At half the total depth: $y = H / 2$ (where $R_{max} = H$)',
      'At the very top: $y = 0$',
      'At the very bottom: $y = H$',
      'At $y = H / 4$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Range $R = 2\\sqrt{y(H-y)}$. Differentiating $f(y) = y(H-y)$ and setting $f\'(y) = H - 2y = 0$ gives $y = H/2$. The maximum range obtained is $R_{max} = 2\\sqrt{(H/2)(H/2)} = H$.',
    reasonUrdu: 'Wajah: Maximum range ke liye hole theek darmiyan ma (y = H/2) hona chahiye, aur maximum range tank ki height H ke barabar hoti hai.',
    formula: 'y = \\frac{H}{2} \\implies R_{max} = H',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 385,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Equal Range from Complementary Depths',
    question: 'Two holes are made in the side of a filled tank of height $H$: one at depth $y$ from the top, and another at height $y$ from the bottom (depth $H-y$). How do their horizontal ranges compare?',
    options: [
      'Both jets have the EXACT same horizontal range: $R_1 = R_2$',
      'The upper hole has twice the range',
      'The lower hole has twice the range',
      'The ranges are in ratio $1 : 4$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since $R = 2\\sqrt{y(H-y)}$, interchanging $y$ and $(H-y)$ yields the identical mathematical expression $R = 2\\sqrt{(H-y)y}$. Both streams land at the exact same spot on the ground!',
    reasonUrdu: 'Wajah: Formula symmetric hota hai: y aur (H-y) par dono dhaarain zameen par ek hi jagah ja kar girti hain.',
    formula: 'R_1 = R_2 = 2\\sqrt{y(H - y)}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 386,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Pressurized Closed Tank Efflux Speed',
    question: 'If the top of the tank is sealed and maintained at a high gauge pressure $P_{gauge}$ above atmospheric pressure, what is the speed of efflux from an orifice at depth $h$?',
    options: [
      '$v = \\sqrt{\\frac{2 P_{gauge}}{\\rho} + 2gh}$',
      '$v = \\sqrt{2gh}$',
      '$v = \\frac{P_{gauge}}{\\rho g}$',
      '$v = \\sqrt{\\frac{P_{gauge}}{\\rho}}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Bernoulli gives: $(P_{atm} + P_{gauge}) + \\rho g h = P_{atm} + \\frac{1}{2}\\rho v^2 \\implies \\frac{1}{2}\\rho v^2 = P_{gauge} + \\rho g h \\implies v = \\sqrt{\\frac{2 P_{gauge}}{\\rho} + 2gh}$.',
    reasonUrdu: 'Wajah: Tank band ho to extra pressure Pgauge bhi kinetic energy barhata hai: v = \\sqrt{2Pgauge/\\rho + 2gh}.',
    formula: 'v = \\sqrt{\\frac{2 P_{gauge}}{\\rho} + 2gh}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 387,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Volume Discharge Rate Through Orifice',
    question: 'If an orifice has cross-sectional area $a$ and is located at depth $h$ below the liquid surface in a large open tank, what is the initial rate of volume discharge $Q$?',
    options: [
      '$Q = a \\sqrt{2gh}$',
      '$Q = a \\cdot 2gh$',
      '$Q = \\frac{a}{\\sqrt{2gh}}$',
      '$Q = \\frac{1}{2} a g h$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Rate of flow $Q = \\text{Area} \\times \\text{Velocity} = a \\times v = a \\sqrt{2gh}$.',
    reasonUrdu: 'Wajah: Rate of flow Q = a x v hota hai; v = \\sqrt{2gh} put karne par Q = a \\sqrt{2gh} nikalta hai.',
    formula: 'Q = a \\sqrt{2gh}',
    textbookRef: 'Sec 5.8 & 5.12, Page 99, 105'
  },
  {
    id: 388,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Time to Empty a Cylindrical Tank',
    question: 'A cylindrical tank of uniform cross section $A$ is filled with water to height $H$. A small orifice of area $a$ is opened at the bottom. The time $T$ required to empty the tank completely is:',
    options: [
      '$T = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}$',
      '$T = \\frac{a}{A} \\sqrt{\\frac{2H}{g}}$',
      '$T = \\frac{A}{a} \\frac{H}{g}$',
      '$T = \\frac{1}{2} \\frac{A}{a} \\sqrt{\\frac{H}{2g}}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'From continuity, $-A \\frac{dh}{dt} = a \\sqrt{2gh} \\implies dt = -\\frac{A}{a \\sqrt{2g}} h^{-1/2} dh$. Integrating from $H$ to $0$: $T = \\frac{A}{a \\sqrt{2g}} [2\\sqrt{H}] = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}$. (Notice this is TWICE the time it would take if initial speed were maintained!)',
    reasonUrdu: 'Wajah: Tank khali hone ka time integration se nikalta hai: T = (A/a) \\sqrt{2H/g}.',
    formula: 'T = \\frac{A}{a}\\sqrt{\\frac{2H}{g}}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 389,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Time to Empty from $H$ to $H/2$',
    question: 'If it takes time $T$ to completely empty a tank of height $H$ through a bottom orifice, what fraction of $T$ does it take to empty the FIRST half of the tank (from $H$ to $H/2$)?',
    options: [
      '$(1 - 1/\\sqrt{2}) T \\approx 0.293 T$',
      '$0.5 T$',
      '$0.707 T$',
      '$0.25 T$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Time to fall from height $h_1$ to $h_2$ is proportional to $(\\sqrt{h_1} - \\sqrt{h_2})$. For the top half: $t_1 \\propto (\\sqrt{H} - \\sqrt{H/2}) = \\sqrt{H}(1 - 1/\\sqrt{2}) \\approx 0.293\\sqrt{H}$. The top half drains much faster because head $h$ and efflux velocity are larger!',
    reasonUrdu: 'Wajah: Shuru ma water head barha hone se speed teez hoti hai, is liye pehla aadha hissa sirf 29.3% waqt ma khali ho jata hai.',
    formula: 't_{first\\,half} = (1 - 1/\\sqrt{2}) T \\approx 0.293 T',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 390,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Reaction Force of Emerging Jet',
    question: 'When a water jet of cross-sectional area $a$ shoots out with speed $v = \\sqrt{2gh}$ from a hole in a tank, what horizontal backward reaction thrust force is exerted on the tank?',
    options: [
      '$F = \\rho a v^2 = 2 \\rho g h a$',
      '$F = \\rho g h a$',
      '$F = \\frac{1}{2} \\rho g h a$',
      '$F = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'By Newton\'s 2nd law, reaction force $F = \\frac{dp}{dt} = (\\text{mass flow}) \\times v = (\\rho a v) v = \\rho a v^2$. Since $v^2 = 2gh$, $F = 2\\rho g h a$. Notice this reaction force is TWICE the static hydrostatic force ($\\rho g h a$) on the plug!',
    reasonUrdu: 'Wajah: Reaction force F = dp/dt = (\\rho a v) v = \\rho a v^2 = 2 \\rho g h a hoti hai.',
    formula: 'F = 2 \\rho g h a',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 391,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Orifice Pointed Vertically Upward',
    question: 'In Fig. 5.24 on page 105, orifice B is pointed vertically upward. In the absence of air resistance and friction, how high will the water fountain jet rise?',
    options: [
      'Exactly to the same level as the water surface in the tank ($h_1$)',
      'Twice as high as the water surface',
      'Only half as high',
      'Infinitely high'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 105: "Notice that the speed of efflux of liquid is the same as the speed of a ball that falls through a height $(h_1 - h_2)$... If the orifice had been pointed upward at B as shown in Fig. 6.4, this K.E. would allow the liquid to rise to the level of water tank." By energy conservation, $v_2 = \\sqrt{2gh} \\implies h_{max} = v_2^2 / (2g) = h$.',
    reasonUrdu: 'Wajah: Page 105 par wazeh likha hai ke agar orifice upar point kare to kinetic energy paani ko theek tank ke level tak upar phenkegi.',
    formula: 'h_{fountain} = h_1 - h_2',
    textbookRef: 'Sec 5.12, Fig 5.24, Page 105'
  },
  {
    id: 392,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Real Fountain Height Discrepancy',
    question: 'According to page 105-106, why does a real water fountain from orifice B fail to reach the exact level of the tank in practical experiments?',
    options: [
      'Viscous energy losses within the liquid and air drag alter the result and dissipate mechanical kinetic energy',
      'Gravity increases as water rises',
      'Atmospheric pressure disappears',
      'The water becomes heavier'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 105-106 explicitly explains: "In practice, viscous-energy losses would alter the result to some extent... as well as air drag."',
    reasonUrdu: 'Wajah: Kitab ke mutabiq asal ma viscosity ke losses aur hawa ki drag ki wajah sy fountain thori kam unchai tak pohanchti hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.12, Page 105-106'
  },
  {
    id: 393,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Efflux on Moon vs Earth',
    question: 'A water tank with a hole at depth $h$ is operated on the Moon, where gravity is $g_{moon} = g / 6$. What is the speed of efflux on the Moon compared to Earth?',
    options: [
      '$v_{moon} = \\frac{v_{earth}}{\\sqrt{6}}$',
      '$v_{moon} = 6 v_{earth}$',
      '$v_{moon} = v_{earth}$',
      '$v_{moon} = \\frac{v_{earth}}{6}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since $v = \\sqrt{2gh} \\propto \\sqrt{g}$, reducing gravity by a factor of 6 reduces the efflux speed by a factor of $\\sqrt{6}$.',
    reasonUrdu: 'Wajah: Efflux speed v \\propto \\sqrt{g} hoti hai; moon par gravity 1/6 hai to speed 1/\\sqrt{6} guna kam ho jayegi.',
    formula: 'v_{moon} = \\sqrt{2 g_{moon} h} = \\frac{v_{earth}}{\\sqrt{6}}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 394,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Hole in Bottom of Accelerating Elevator',
    question: 'A tank filled with water of depth $h$ is placed in an elevator accelerating upward with acceleration $a$. The speed of efflux through a hole in the bottom is:',
    options: [
      '$v = \\sqrt{2(g + a)h}$',
      '$v = \\sqrt{2(g - a)h}$',
      '$v = \\sqrt{2gh}$',
      '$v = \\sqrt{2ah}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Inside the accelerating frame, effective gravity is $g_{eff} = g + a$. The hydrostatic pressure gradient is $\\rho(g+a)$, so $v = \\sqrt{2(g+a)h}$.',
    reasonUrdu: 'Wajah: Upward acceleration ma effective gravity (g + a) hoti hai, is liye efflux speed v = \\sqrt{2(g + a)h} ban jati hai.',
    formula: 'v = \\sqrt{2(g + a)h}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 395,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Orifice Trajectory as a Parabola',
    question: 'What is the geometric shape of the trajectory traced by a water jet issuing horizontally from an orifice in the side of a tank?',
    options: ['A parabola', 'A straight diagonal line', 'A hyperbola', 'A circle'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Horizontal velocity is constant ($x = vt$), while vertical displacement is uniformly accelerated ($y = \\frac{1}{2}gt^2$). Combining gives $y = \\frac{g}{2v^2} x^2$, which is the equation of a parabola.',
    reasonUrdu: 'Wajah: Projectile motion ki tarah horizontal speed constant aur vertical downward accelerated hoti hai, is liye path Parabolic banta hai.',
    formula: 'y = \\frac{g}{2 v^2} x^2',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 396,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Orifice Coefficient of Discharge ($C_d$)',
    question: 'In practical fluid engineering, the actual discharge $Q_{act}$ through an orifice is less than the theoretical discharge $Q_{th} = a\\sqrt{2gh}$. The ratio $C_d = Q_{act} / Q_{th}$ is called:',
    options: ['Coefficient of discharge', 'Young\'s modulus', 'Reynolds factor', 'Stokes coefficient'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Coefficient of discharge $C_d = C_c \\times C_v$ accounts for both jet contraction at the vena contracta ($C_c \\approx 0.62$) and viscous friction losses ($C_v \\approx 0.98$), typically giving $C_d \\approx 0.60$ to $0.65$.',
    reasonUrdu: 'Wajah: Asal flow aur theoretical flow ke ratio ko Coefficient of Discharge (Cd) kehte hain (taqreeban 0.62).',
    formula: 'C_d = \\frac{Q_{actual}}{Q_{theoretical}}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 397,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Hole in Submerged Sinking Ship',
    question: 'A submarine hull develops a small hole of area $1.0 \\times 10^{-4}\\text{ m}^2$ at depth $h = 50\\text{ m}$ below the sea surface ($\\rho = 1000\\text{ kg m}^{-3}$, $g = 9.8\\text{ m s}^{-2}$). What is the speed of seawater rushing in, assuming atmospheric pressure inside?',
    options: [
      '$31.3\\text{ m s}^{-1}$ (over $110\\text{ km/h}$)',
      '$9.8\\text{ m s}^{-1}$',
      '$50.0\\text{ m s}^{-1}$',
      '$3.1\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$v = \\sqrt{2 g h} = \\sqrt{2 \\times 9.8 \\times 50} = \\sqrt{980} \\approx 31.3\\text{ m/s} \\approx 112.7\\text{ km/h}$. High pressure deep underwater forces water through punctures at extreme speeds.',
    reasonUrdu: 'Wajah: v = \\sqrt{2gh} = \\sqrt{2 x 9.8 x 50} = \\sqrt{980} = 31.3 m/s (taqreeban 113 km/h).',
    formula: 'v = \\sqrt{2gh}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 398,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Torricelli and Free Fall Parallels',
    question: 'Why does Torricelli\'s theorem yield the exact same mathematical formula ($v = \\sqrt{2gh}$) as a solid rock dropped from rest through height $h$?',
    options: [
      'Both derive from conservation of mechanical energy: the loss in gravitational potential energy per unit mass ($gh$) converts entirely into kinetic energy per unit mass ($\\frac{1}{2}v^2$)',
      'Because water is made of microscopic rocks',
      'Due to atmospheric pressure only',
      'It is pure coincidence with no physical connection'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'For a falling rock: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}$. For fluid: pressure difference $\\Delta P = \\rho gh$ does work $\\rho gh$ per unit volume, which Bernoulli equates to kinetic energy $\\frac{1}{2}\\rho v^2$, giving $v = \\sqrt{2gh}$.',
    reasonUrdu: 'Wajah: Dono cases ma gravitational potential energy bina kisi zaya ke kinetic energy ma convert hoti hai (gh = 1/2 v^2).',
    formula: 'g h = \\frac{1}{2} v^2 \\implies v = \\sqrt{2 g h}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 399,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Efflux from Funnel vs Cylindrical Tank',
    question: 'Compared to a vertical cylinder, will an inverted conical tank of the same top area, height, and orifice size take more or less time to empty completely?',
    options: [
      'Less time, because the cross-sectional area decreases toward the bottom, so less liquid volume is held at low driving heads',
      'More time',
      'Exactly the same time',
      'Infinite time'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'A cone holds only $1/3$ the volume of a cylinder of the same base and height. Most of the cone\'s volume is near the top (under large driving head $\\sqrt{2gh}$), so it drains much faster.',
    reasonUrdu: 'Wajah: Cone ma zyada paani upar hota hai jahan speed teez hoti hai aur niche volume kam hota hai, is liye yeh jaldi khali hoti hai.',
    formula: 'V_{cone} = \\frac{1}{3} V_{cylinder}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 400,
    module: 'P',
    moduleName: 'Torricelli\'s Theorem & Efflux',
    topic: 'Discovery of Torricelli\'s Law',
    question: 'Evangelista Torricelli, who formulated Torricelli\'s Law of efflux in 1643, was a famous student and assistant of which legendary physicist?',
    options: ['Galileo Galilei', 'Isaac Newton', 'Johannes Kepler', 'Blaise Pascal'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Torricelli was a pupil of Galileo Galilei, succeeding him as court mathematician to the Grand Duke of Tuscany and also inventing the mercury barometer.',
    reasonUrdu: 'Wajah: Evangelista Torricelli Galileo Galilei ke mashhoor shagird aur saathi thay.',
    formula: 'N/A',
    textbookRef: 'Sec 5.12, Page 105'
  },

  // ==========================================
  // MODULE Q: Venturi Meter, Venturi Relation & Differential Pressure (MCQs 401-425)
  // ==========================================
  {
    id: 401,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Definition of Venturi Meter',
    question: 'According to Section 5.11 (topic 6, page 104-105), what is a Venturi meter?',
    options: [
      'A device used to measure the speed of liquid flow in a pipe based on Bernoulli\'s principle and the Venturi relation',
      'An instrument used to measure the density of air',
      'A meter that measures Young\'s modulus of a wire',
      'A device to measure electrical current in water'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 104-105: "6. Venturi Relation: This is known as Venturi relation, which is used in Venturi meter, a device used to measure speed of liquid flow."',
    reasonUrdu: 'Wajah: Page 104-105 ke mutabiq Venturi meter ek aisi device hai jo pipe ke andar liquid flow ki speed naapne ke liye use hoti hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.11, topic 6 & 7, Page 104-105'
  },
  {
    id: 402,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Formula for Venturi Relation (Eq. 5.23)',
    question: 'According to Equation 5.23 on page 104-105, what is the Venturi relation for pressure difference between wide pipe $A_1$ and constricted pipe $A_2$?',
    options: [
      '$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$',
      '$P_1 - P_2 = \\rho g h$',
      '$P_1 - P_2 = \\frac{1}{2}\\rho (v_1^2 - v_2^2)$',
      '$P_1 + P_2 = \\frac{1}{2}\\rho v_2^2$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 104-105, Eq 5.23: "As the pipe is placed horizontally, therefore we consider that average potential energy is the same at both places... $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$ (Eq. 5.23)."',
    reasonUrdu: 'Wajah: Eq 5.23 ke mutabiq horizontal pipe ma dabao ka farq P1 - P2 = 1/2 \\rho (v2^2 - v1^2) hota hai.',
    formula: 'P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)',
    textbookRef: 'Sec 5.11, Eq 5.23, Page 104-105'
  },
  {
    id: 403,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Approximation for Very Narrow Constriction (Eq. 5.24)',
    question: 'According to page 104-105, when the constriction area $A_2$ is much smaller than wide area $A_1$ ($A_2 \\ll A_1$), speed $v_1$ is negligible compared to $v_2$. Eq. 5.24 simplifies to:',
    options: [
      '$P_1 - P_2 = \\frac{1}{2}\\rho v_2^2$',
      '$P_1 - P_2 = \\frac{1}{2}\\rho v_1^2$',
      '$P_1 - P_2 = 2\\rho v_2^2$',
      '$P_1 - P_2 = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 104-105: "As the cross-sectional area $A_2$ is small as compared to the area $A_1$... $v_1$ will be small as compared to $v_2$... So we can neglect $v_1$ on the right-hand side of Eq. 5.23. Hence: $P_1 - P_2 = \\frac{1}{2}\\rho v_2^2$ (Eq. 5.24)."',
    reasonUrdu: 'Wajah: Eq 5.24 ke mutabiq jab constriction bohot tang ho to v1 negligible ho jata hai aur P1 - P2 = 1/2 \\rho v2^2 ban jata hai.',
    formula: 'P_1 - P_2 = \\frac{1}{2}\\rho v_2^2',
    textbookRef: 'Sec 5.11, Eq 5.24, Page 104-105'
  },
  {
    id: 404,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Manometer Height Difference in Venturi Meter',
    question: 'In Fig. 5.23 on page 104, a U-tube manometer containing liquid of density $\\rho_m$ connects the wide section and constriction. What is the relation between manometer height difference $h$ and pressure difference?',
    options: [
      '$P_1 - P_2 = \\rho_m g h$',
      '$P_1 - P_2 = \\frac{1}{2} \\rho_m g h$',
      '$P_1 - P_2 = \\frac{\\rho_m g}{h}$',
      '$P_1 - P_2 = h$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 104, Fig 5.23: "where $P_1$ and $P_2$ indicate the liquid pressure at both the portions by connecting the limbs of the manometer." The hydrostatic column difference gives $P_1 - P_2 = \\rho_m g h$.',
    reasonUrdu: 'Wajah: Fig 5.23 ke mutabiq manometer ke dono limbs ma level ka farq h pressure difference P1 - P2 = \\rho_m g h ko zahir karta hai.',
    formula: 'P_1 - P_2 = \\rho_m g h',
    textbookRef: 'Sec 5.11, Fig 5.23, Page 104'
  },
  {
    id: 405,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Formula for Flow Velocity $v_1$',
    question: 'Combining the continuity equation ($v_2 = v_1 A_1 / A_2$) with the Venturi relation ($P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$), the entry velocity $v_1$ is given by:',
    options: [
      '$v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]}}$',
      '$v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho}}$',
      '$v_1 = \\frac{A_1}{A_2} \\sqrt{2gh}$',
      '$v_1 = \\sqrt{\\frac{P_1 - P_2}{\\rho}}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: '$P_1 - P_2 = \\frac{1}{2}\\rho v_1^2 \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]$. Solving for $v_1$ gives $v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho [(A_1/A_2)^2 - 1]}}$.',
    reasonUrdu: 'Wajah: Continuity equation put kar ke solve karne par entry speed ka exact formula v1 = \\sqrt{2(P1 - P2) / [\\rho ((A1/A2)^2 - 1)]} banta hai.',
    formula: 'v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho [(A_1/A_2)^2 - 1]}}',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 406,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Pressure at the Constriction (Throat)',
    question: 'In a Venturi tube (Fig. 5.23), as fluid enters the narrow throat, what happens to its speed and internal pressure?',
    options: [
      'Speed increases ($v_2 > v_1$) and pressure decreases ($P_2 < P_1$)',
      'Speed decreases and pressure increases',
      'Both speed and pressure increase',
      'Both speed and pressure decrease'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'By the continuity equation, smaller area forces speed to increase ($A_2 < A_1 \\implies v_2 > v_1$). By Bernoulli\'s equation, higher kinetic energy requires a drop in static pressure ($P_2 < P_1$).',
    reasonUrdu: 'Wajah: Tang hissay (throat) ma continuity ki wajah sy speed barhti hai aur Bernoulli ki wajah sy pressure gir jata hai.',
    formula: 'A_2 < A_1 \\implies v_2 > v_1 \\implies P_2 < P_1',
    textbookRef: 'Sec 5.11, Fig 5.23, Page 104'
  },
  {
    id: 407,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Venturi Meter Numerical Calculation',
    question: 'A horizontal water pipe of area $A_1 = 2.0 \\times 10^{-2}\\text{ m}^2$ narrows to throat area $A_2 = 1.0 \\times 10^{-2}\\text{ m}^2$. The pressure difference is measured to be $P_1 - P_2 = 1500\\text{ Pa}$ (water density $\\rho = 1000\\text{ kg m}^{-3}$). What is the flow speed $v_1$ in the main pipe?',
    options: [
      '$1.0\\text{ m s}^{-1}$',
      '$2.0\\text{ m s}^{-1}$',
      '$0.5\\text{ m s}^{-1}$',
      '$4.0\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Area ratio $A_1 / A_2 = 2.0 / 1.0 = 2$. $(A_1/A_2)^2 - 1 = 2^2 - 1 = 3$. $v_1 = \\sqrt{\\frac{2 \\times 1500}{1000 \\times 3}} = \\sqrt{\\frac{3000}{3000}} = \\sqrt{1.0} = 1.0\\text{ m/s}$.',
    reasonUrdu: 'Wajah: Formula ma values put karne par v1 = \\sqrt{3000 / (1000 x 3)} = \\sqrt{1} = 1.0 m/s.',
    formula: 'v_1 = \\sqrt{\\frac{2\\Delta P}{\\rho [(A_1/A_2)^2 - 1]}}',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 408,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Cavitation Danger at Venturi Throat',
    question: 'If fluid speed at the throat of a Venturi tube becomes extremely high, local pressure can drop below the liquid\'s saturation vapor pressure, causing liquid to spontaneously boil into vapor bubbles that collapse violently downstream. This destructive phenomenon is called:',
    options: ['Cavitation', 'Terminal drag', 'Superfluidity', 'Viscous shear'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Cavitation occurs when local static pressure drops below vapor pressure ($P_2 < P_{vap}$), forming vapor cavities that implosively collapse downstream, eroding pipes and ship propellers.',
    reasonUrdu: 'Wajah: Throat par dabao itna gir jata hai ke paani khaul kar bubbles banata hai; unke phatne se pipe erode hota hai jisay Cavitation kehte hain.',
    formula: 'P < P_{vapor}',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 409,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Venturi Scrubber in Air Pollution Control',
    question: 'In industrial chimney emission systems, a Venturi scrubber injects water droplets into a high-speed smokestack Venturi throat. Why is this extremely effective?',
    options: [
      'Extreme air speed at the throat atomizes the water into microscopic droplets that collide with and capture fine smoke and dust particles',
      'The Venturi scrubber destroys smoke through nuclear fission',
      'It freezes the smoke into dry ice',
      'It creates a magnetic shield'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The Venturi effect produces immense shear velocity difference between fast air and injected water, atomizing water into tiny droplets that wash pollutants out.',
    reasonUrdu: 'Wajah: Throat par teez hawa paani ko fine droplets ma atomize karti hai jo dhuwein ke particles ko pakad leti hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 410,
    module: 'Q',
    moduleName: 'Venturi Meter & Venturi Effect',
    topic: 'Venturi Diverging Diffuser Angle',
    question: 'In a real Venturi meter, why does the exit diffuser (diverging cone downstream of the throat) expand very gradually at a gentle taper angle (about $5^\\circ$ to $7^\\circ$) compared to the steeper converging entry cone ($20^\\circ$)?',
    options: [
      'To prevent flow separation, boundary layer turbulence, and eddy formation, ensuring maximum pressure recovery with minimal head loss',
      'To look artistic',
      'To increase the weight of the meter',
      'To allow air to escape'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Expanding flow faces an adverse pressure gradient ($dP/dx > 0$). A gentle angle ($5^\\circ-7^\\circ$) prevents flow separation and turbulence, achieving $>90\\%$ pressure recovery.',
    reasonUrdu: 'Wajah: Diffuser ka angle chota (5-7 degree) rakha jata hai taake paani ki boundary layer deewar se alag na ho aur pressure smoothly recover ho sakay.',
    formula: '\\theta_{diffuser} \\approx 5^\\circ - 7^\\circ',
    textbookRef: 'Sec 5.11, Fig 5.23, Page 104'
  },

  // ==========================================
  // MODULE R: Real-World Bernoulli: Carburetor, Atomizer, Magnus Effect, Blood & Chimneys (MCQs 411-450)
  // ==========================================
  {
    id: 411,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Carburetor Operation',
    question: 'According to Section 5.11 (topic 4, page 104), how does the carburetor of a car engine operate?',
    options: [
      'Air drawn through a Venturi duct moves very fast, creating low pressure at a tiny inlet that draws petrol into the airstream to form the correct fuel-air mixture (Fig. 5.21)',
      'An electric motor squeezes petrol directly into the cylinder',
      'Petrol boils into steam due to exhaust heat',
      'Magnus effect spins the fuel into the engine'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 104: "4. Carburetor: The carburetor of a car engine uses a Venturi duct to feed the correct mixture of air and petrol to the cylinders (Fig. 5.21). Air is drawn through the duct... The air moves very fast, creating low pressure in the duct, which draws petrol vapours into the air stream."',
    reasonUrdu: 'Wajah: Page 104 ke mutabiq Carburetor ma Venturi duct hawa ki speed barha kar low pressure banati hai jo petrol ko kheench kar fuel-air mixture banata hai.',
    formula: 'v_{air} \\uparrow \\implies P \\downarrow \\implies \\text{Petrol drawn}',
    textbookRef: 'Sec 5.11, Fig 5.21, Page 104'
  },
  {
    id: 412,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Paint Sprayer / Atomizer Operation',
    question: 'According to Section 5.11 (topic 5, page 104), how does a paint sprayer or perfume atomizer work (Fig. 5.22)?',
    options: [
      'Squeezing the rubber bulb forces air at high speed through a narrow aperture, creating low pressure that sucks liquid up the vertical tube; the fast air blasts it into a fine mist of spray',
      'The liquid is boiled by a built-in battery heater',
      'The container is pressurized with hydrogen gas',
      'A mechanical piston pushes liquid droplets out'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 104: "5. Paint Sprayer: Actually when the rubber ball of atomizer is squeezed, the air is blown through tube and it rushes out through the narrow aperture with high speed and it causes fall of pressure. So, the atmospheric pressure pushes the perfume up leading to the narrow aperture (Fig. 5.22)."',
    reasonUrdu: 'Wajah: Page 104 ke mutabiq rubber bulb dabane se aperture par hawa tezi se nikalti hai aur pressure gir jata hai, jis se liquid upar khinch kar spray ban jata hai.',
    formula: 'P_{aperture} < P_{atm}',
    textbookRef: 'Sec 5.11, Fig 5.22, Page 104'
  },
  {
    id: 413,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Chimney Operation',
    question: 'According to the illustration and text on page 106 ("A chimney works best when it is tall..."), why does a tall chimney draw smoke upward efficiently?',
    options: [
      'Wind speeds are higher at greater heights, reducing pressure at the chimney top; higher pressure at the bottom fireplace forces smoke rapidly upward',
      'Smoke is heavier than air and sinks',
      'The chimney creates a vacuum by freezing air',
      'Torricelli theorem repels smoke'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106: "A chimney works best when it is tall and exposed to air currents, which reduces the pressure at the top and forces the upward flow of smoke."',
    reasonUrdu: 'Wajah: Page 106 ke mutabiq unchi chimney ke top par teez hawa chalne se dabao kam ho jata hai aur bottom ka zyada dabao dhuwein ko upar kheenchta hai.',
    formula: 'P_{top} < P_{bottom}',
    textbookRef: 'Sec 5.11, Page 106'
  },
  {
    id: 414,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Magnus Effect on Spinning Cricket / Golf Ball',
    question: 'According to the curriculum on page 87 & 104, why does a spinning cricket ball or golf ball curve sideways in mid-air (the Magnus Effect)?',
    options: [
      'Spin drags air faster on one side (reducing pressure) and slows air on the opposite side (raising pressure); the resulting sideways pressure imbalance deflects the ball toward the low-pressure side',
      'The ball changes mass as it rotates',
      'Earth\'s magnetic field deflects the ball',
      'Gravity acts sideways on spinning spheres'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'A spinning ball drags a boundary layer of air. On the side where surface motion aligns with oncoming air, relative air speed is higher ($v_{fast} = v + \\omega r$), so pressure drops ($P \\downarrow$). On the opposing side, speed is lower ($v_{slow} = v - \\omega r$) and pressure is higher ($P \\uparrow$). The sideways net force curves the trajectory.',
    reasonUrdu: 'Wajah: Ghoomti hui ball ek taraf hawa ko teez karti hai (low pressure) aur dusri taraf slow (high pressure); ye pressure farq ball ko curve (swing) karwata hai (Magnus Effect).',
    formula: 'F_{Magnus} \\propto \\vec{\\omega} \\times \\vec{v}',
    textbookRef: 'Course Objectives & Sec 5.11, Page 87, 104'
  },
  {
    id: 415,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Bunsen Burner Operation',
    question: 'How does a laboratory Bunsen burner draw in ambient air through its base air-holes to mix with gas?',
    options: [
      'Gas rushing at high speed through a narrow jet nozzle creates a localized low-pressure zone (Bernoulli effect), sucking outside air in through the collar holes',
      'A small electric fan inside the burner blows air in',
      'The gas is magnetic and attracts nitrogen molecules',
      'Outside air is compressed by an external pump'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'High gas velocity issuing from the small orifice creates dynamic pressure and lowers static pressure below atmospheric ($P_{jet} < P_{atm}$), drawing outside air into the barrel.',
    reasonUrdu: 'Wajah: Gas ke teez jet se nozzle par pressure kam ho jata hai jis se bahir ki hawa khud ba khud andar khinch aati hai.',
    formula: 'P_{jet} < P_{atm}',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 416,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Blood Pressure Measurement with Sphygmomanometer',
    question: 'When an inflatable arm cuff is inflated to occlude the brachial artery, the pressure at which blood first spurts through the flattened artery with turbulent tapping sounds represents:',
    options: ['Systolic pressure', 'Diastolic pressure', 'Terminal pressure', 'Venturi constant'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Systolic pressure is the peak arterial pressure during heart ventricular contraction. When cuff pressure drops just below systolic, high-velocity blood jets through, creating turbulent Korotkoff sounds.',
    reasonUrdu: 'Wajah: Cuff se pehli martaba khoon guzarne par aane wali aawaz Systolic Blood Pressure ko zahir karti hai.',
    formula: 'P_{systolic} \\approx 120\\text{ mmHg}',
    textbookRef: 'For your info & Sec 5.11, Page 101'
  },
  {
    id: 417,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Diastolic Pressure Definition',
    question: 'When cuff pressure falls further until the artery remains continuously open and turbulent sounds disappear (returning to silent laminar flow), this pressure marks:',
    options: ['Diastolic pressure', 'Systolic pressure', 'Viscous threshold', 'Stagnation point'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Diastolic pressure is the minimum pressure during cardiac ventricular relaxation (typically $\\approx 80\\text{ mmHg}$). Below this cuff pressure, arterial flow is unconstricted, laminar, and silent.',
    reasonUrdu: 'Wajah: Jab aawaz khatam ho kar flow silent laminar ban jaye to usay Diastolic Blood Pressure (~80 mmHg) kehte hain.',
    formula: 'P_{diastolic} \\approx 80\\text{ mmHg}',
    textbookRef: 'For your info & Sec 5.11, Page 101'
  },
  {
    id: 418,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Water Aspirator / Filter Pump',
    question: 'A laboratory water aspirator (vacuum pump connected to a water tap) generates suction in a flask because:',
    options: [
      'A high-speed water jet through a narrow nozzle creates a localized low-pressure vacuum that draws air out of the connected side tube',
      'Water dissolves air molecules instantly',
      'The tap water freezes the air',
      'The water generates negative gravity'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Water accelerates through a nozzle ($v \\uparrow \\implies P \\downarrow$). The static pressure drops far below atmospheric, entraining and pumping air out of the suction flask.',
    reasonUrdu: 'Wajah: Nozzle se tezi se nikalta paani low pressure banata hai jo side tube se hawa ko kheench kar vacuum create karta hai.',
    formula: 'P_{throat} \\ll P_{atm}',
    textbookRef: 'Objectives & Sec 5.11, Page 87, 104'
  },
  {
    id: 419,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Spinning Ball Trajectory Direction',
    question: 'A cricket bowler bowls a ball with topspin (spinning so the top surface moves forward in the direction of flight). Which way does the Magnus force deflect the ball?',
    options: [
      'Downwards (causing it to dip sharply onto the pitch earlier than expected)',
      'Upwards (causing it to float longer in the air)',
      'Strictly sideways to the right',
      'No deflection occurs'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'For topspin, top surface moves with the oncoming wind while bottom moves against it. Air moves faster under the ball ($v_{bot} > v_{top}$), making $P_{bot} < P_{top}$. The net downward force causes the ball to dip sharply!',
    reasonUrdu: 'Wajah: Topspin ball ke niche hawa teez aur upar slow hoti hai, is liye net downward force lagti hai aur ball achanak niche dip karti hai.',
    formula: 'F_{Magnus} \\downarrow',
    textbookRef: 'Objectives & Sec 5.11, Page 87, 104'
  },
  {
    id: 420,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Backspin Ball Trajectory Direction',
    question: 'A golf player strikes a golf ball imparting heavy backspin. What effect does the Magnus force have on the ball\'s trajectory?',
    options: [
      'An upward lift force is generated, keeping the ball airborne longer for a significantly greater flight distance',
      'The ball is driven directly into the ground',
      'The ball stops immediately in mid-air',
      'The ball turns into a circle'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'With backspin, the top surface moves backward, accelerating air over the top ($v_{top} > v_{bot}$). Low pressure above creates upward aerodynamic lift ($F_{lift}$), keeping the ball aloft.',
    reasonUrdu: 'Wajah: Backspin se ball ke upar hawa teez hoti hai aur low pressure banta hai, jis se upward lift paida hoti hai aur ball door tak udti hai.',
    formula: 'F_{lift} \\uparrow',
    textbookRef: 'Objectives & Sec 5.11, Page 87, 104'
  },
  {
    id: 421,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Vascular Flutter in TIA (Transient Ischemic Attack)',
    question: 'When a cerebral artery is partially constricted, blood velocity increases through the stenosis. The Bernoulli pressure drop can pull the vessel walls inward, temporarily shutting off blood supply to the brain. This medical condition is known as:',
    options: ['Vascular flutter / Transient Ischemic Attack (TIA)', 'Stokes seizure', 'Torricelli syndrome', 'Archimedes stroke'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The dramatic drop in static pressure caused by high flow speed through the narrow artery constriction allows external tissue pressure to compress and close the vessel walls.',
    reasonUrdu: 'Wajah: Narrow artery ma teez flow se pressure girta hai aur artery temporary band ho jati hai jisay Vascular Flutter / TIA kehte hain.',
    formula: 'P_{int} < P_{ext}',
    textbookRef: 'For your info & Sec 5.11, Page 101'
  },
  {
    id: 422,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Airplane Stalling Mechanism',
    question: 'If a pilot pitches an aircraft nose up at too steep an angle of attack ($>16^\\circ$), airflow separates from the upper wing surface into a chaotic turbulent wake. What happens to lift?',
    options: [
      'Lift drops abruptly and drag surges drastically; the aircraft enters a stall',
      'Lift increases to infinity',
      'The airplane accelerates to supersonic speed',
      'Gravity disappears'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Flow separation destroys the smooth streamline acceleration over the upper surface, eliminating the Bernoulli suction peak and causing a catastrophic loss of aerodynamic lift (stall).',
    reasonUrdu: 'Wajah: Zyada angle par streamlines wing se alag ho kar turbulent ban jati hain aur Bernoulli lift khatam ho jati hai (Stall).',
    formula: 'F_{lift} \\downarrow \\downarrow, \\quad F_{drag} \\uparrow \\uparrow',
    textbookRef: 'Sec 5.8 & 5.11, Page 98, 101'
  },
  {
    id: 423,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Prairie Dog Burrow Ventilation',
    question: 'Prairie dogs build underground burrows with two entrance mounds: one mound is built flat at ground level while the other is built tall and conical. How does Bernoulli\'s principle ventilate the burrow?',
    options: [
      'Wind speeds are higher over the taller mound, creating lower pressure there; higher pressure at the flat mound pushes a continuous breeze through the tunnels',
      'The dogs fan the burrow with their tails',
      'Geothermal heat pumps air out',
      'Underground air has zero viscosity'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Wind speed increases with height above ground ($v_{tall} > v_{flat}$). By Bernoulli: $P_{tall} < P_{flat}$. The pressure differential forces fresh air into the lower opening and out the higher opening.',
    reasonUrdu: 'Wajah: Unchay mound par hawa teez chalne se pressure kam hota hai aur nichlay mound se taazi hawa tunnel ke andar daakhil hoti hai.',
    formula: 'P_{tall} < P_{flat}',
    textbookRef: 'Sec 5.11, Page 101, 106'
  },
  {
    id: 424,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Sailboat Sailing Upwind (Tacking)',
    question: 'How can a modern sailboat sail at an angle UPWIND against the wind (tacking)?',
    options: [
      'The curved sail acts like a vertical airplane wing; air rushing across its curved outer side creates a Bernoulli low pressure that pulls the boat forward, while the keel prevents leeway drift',
      'The wind pushes the boat backward',
      'The boat uses hidden paddle wheels',
      'Water buoyancy propels it forward'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The trimmed sail forms an aerofoil camber. Air accelerates around the convex leeward side, generating aerodynamic lift oriented forward and sideways; the keel cancels sideways drift.',
    reasonUrdu: 'Wajah: Sail aerofoil wing ki tarah act karti hai; convex side par low pressure boat ko aage khainchta hai.',
    formula: 'F_{forward} = F_{lift} \\sin\\theta',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 425,
    module: 'R',
    moduleName: 'Real-World Bernoulli Applications',
    topic: 'Blowing Paper Strip Demonstration',
    question: 'If you hold a horizontal strip of paper just under your lower lip and blow vigorously horizontally OVER the top surface of the paper, the paper strip will:',
    options: [
      'Lift upward into a horizontal position',
      'Bend downward toward the floor',
      'Stay completely still',
      'Roll into a ball'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Blowing fast air over the top surface reduces pressure above the strip ($v \\uparrow \\implies P_{top} < P_{atm}$). Normal atmospheric pressure beneath pushes the paper upward.',
    reasonUrdu: 'Wajah: Paper ke upar hawa phoonkne se upar ka dabao kam hota hai aur niche ki stagnant hawa paper ko upar utha deti hai.',
    formula: 'P_{top} < P_{bottom}',
    textbookRef: 'Sec 5.11, Page 101'
  },

  // ==========================================
  // MODULE S: Viscous Drag, Viscosity $\eta$ & Stokes' Law (MCQs 426-475)
  // ==========================================
  {
    id: 426,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Definition of Viscosity',
    question: 'According to Section 5.13 on page 106 of the textbook, what is viscosity?',
    options: [
      'The frictional effect between different sliding layers of a flowing fluid; a measure of how much force is required to slide one layer over another',
      'The mass per unit volume of a fluid',
      'The upward buoyant force in a fluid',
      'The speed of sound in a liquid'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106 defines: "5.13 Viscous Drag and Stokes\' Law: The frictional effect between different layers of a flowing fluid is described in terms of viscosity of the fluid. Viscosity measures how much force is required to slide one layer of the liquid over another layer."',
    reasonUrdu: 'Wajah: Page 106 ke mutabiq fluid ki mukhtalif layers ke darmiyan internal friction ko Viscosity kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 427,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'High vs Low Viscosity Substances',
    question: 'According to page 106, which substances have large coefficients of viscosity, and which have small coefficients?',
    options: [
      'Large viscosity: thick tar and honey; Small viscosity: water and air',
      'Large viscosity: air; Small viscosity: honey',
      'Large viscosity: liquid helium; Small viscosity: tar',
      'All liquids have identical viscosity'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106: "Substances that do not flow easily, such as thick tar and honey, etc., have large coefficients of viscosity, usually denoted by Greek letter \'$\\eta$\'. Substances which flow easily, like water, have small coefficient of viscosities."',
    reasonUrdu: 'Wajah: Kitab ke mutabiq thick tar aur honey ki viscosity bohot zyada hoti hai jab ke water aur air ki viscosity kam hoti hai.',
    formula: '\\eta_{honey} \\gg \\eta_{water}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 428,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Symbol and Definition of $\\eta$',
    question: 'The coefficient of viscosity of a fluid is universally designated by which Greek letter in physics?',
    options: ['$\\eta$ (eta)', '$\\mu$ (mu)', '$\\sigma$ (sigma)', '$\\rho$ (rho)'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106: "Substances... have large coefficients of viscosity, usually denoted by Greek letter \'$\\eta$\' (eta)."',
    reasonUrdu: 'Wajah: Coefficient of viscosity ko Greek letter eta (\\eta) se zahir kiya jata hai.',
    formula: '\\eta',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 429,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Definition of Viscous Drag Force',
    question: 'According to page 106, what is "viscous drag force"?',
    options: [
      'A retarding resistive force experienced by an object moving through a fluid as the fluid opposes its motion',
      'The gravitational attraction of the fluid',
      'The upward buoyant force supporting floating ships',
      'The pressure exerted by an expanding gas'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106: "An object moving through a fluid experiences a retarding force called a drag force. The drag force increases as the speed of the object increases."',
    reasonUrdu: 'Wajah: Page 106 ke mutabiq fluid ke andar harkat karne walay jism par lagne wali mukhalif retarding force ko Drag Force kehte hain.',
    formula: 'F_{drag}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 430,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Everyday Example of Drag on Page 106',
    question: 'According to page 106, what everyday experience demonstrates the drag force of air?',
    options: [
      'Sticking your hand out of the window of a fast-moving car and feeling a considerable force pushing your hand backward',
      'Drinking a glass of cold water',
      'Looking at your reflection in a mirror',
      'Dropping a coin on the floor'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106: "If you stick out your hand out of the window of a fast moving car, you can easily recognize that considerable force has to be exerted on your hand to move it through the air. These are typical examples of drag force."',
    reasonUrdu: 'Wajah: Kitab ma car ki khirki se bahir hath nikalne ki misal di gayi hai jahan hawa ka tez piche dhakailne wala drag mehsoos hota hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 431,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Stokes\' Law Statement (Eq. 5.26)',
    question: 'According to Equation 5.26 on page 106, what is Stokes\' Law for the drag force $F$ on a sphere of radius $r$ moving slowly with speed $v$ through a fluid of viscosity $\\eta$?',
    options: [
      '$F = 6 \\pi \\eta r v$',
      '$F = \\frac{1}{2} C_d \\rho A v^2$',
      '$F = 6 \\pi \\eta r^2 v$',
      '$F = \\frac{6 \\pi \\eta}{r v}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106, Eq 5.26: "The drag force $F$ on a sphere of radius $r$ moving slowly with speed $v$ through a fluid of viscosity $\\eta$ is given by Stokes\' law as: $F = 6 \\pi \\eta r v$ (Eq. 5.26)."',
    reasonUrdu: 'Wajah: Page 106 Eq 5.26 ke mutabiq Stokes\' Law ka formula F = 6 \\pi \\eta r v hota hai.',
    formula: 'F = 6 \\pi \\eta r v',
    textbookRef: 'Sec 5.13, Eq 5.26, Page 106'
  },
  {
    id: 432,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Stokes\' Law High Speed Breakdown',
    question: 'According to page 106, what happens to the drag force on an object moving at HIGH speeds through a fluid?',
    options: [
      'The drag force is no longer simply proportional to speed $v$; it becomes proportional to speed squared ($v^2$)',
      'The drag force drops to zero',
      'The drag force becomes negative (accelerating the body)',
      'The object dissolves completely'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 106 explicitly states: "However, at high speeds the force is no longer simply proportional to speed." At high speeds with turbulence, inertial drag dominates: $F_{drag} \\propto v^2$.',
    reasonUrdu: 'Wajah: Page 106 par wazeh likha hai ke high speed par drag force speed ke proportional nahi rehti balkay v^2 ke proportional ho jati hai.',
    formula: 'F \\propto v^2 \\quad (\\text{high speed})',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 433,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'SI Unit of Coefficient of Viscosity',
    question: 'What is the SI unit of coefficient of viscosity ($\\eta$)?',
    options: [
      '$\\text{kg m}^{-1}\\text{ s}^{-1}$ or $\\text{N s m}^{-2}$ (Pascal-second, $\\text{Pa s}$)',
      '$\\text{N m}^{-2}$',
      '$\\text{N s}^{-1}$',
      '$\\text{kg m s}^{-2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'From Stokes\' law: $\\eta = \\frac{F}{6\\pi r v} = \\frac{\\text{N}}{\\text{m} \\cdot \\text{m/s}} = \\text{N s m}^{-2} = \\text{Pa s} = \\text{kg m}^{-1}\\text{ s}^{-1}$.',
    reasonUrdu: 'Wajah: \\eta = F / (6\\pi r v) = N / (m x m/s) = N s m^-2 = Pa s = kg m^-1 s^-1.',
    formula: '[\\eta] = \\text{N s m}^{-2} = \\text{Pa s} = \\text{kg m}^{-1} \\text{s}^{-1}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 434,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Dimensional Formula of Coefficient of Viscosity',
    question: 'What is the dimensional formula of coefficient of viscosity ($\\eta$)?',
    options: ['[M L⁻¹ T⁻¹]', '[M L T⁻¹]', '[M L⁻¹ T⁻²]', '[M L² T⁻¹]'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$[\\eta] = \\frac{[F]}{[r][v]} = \\frac{[\\text{M L T}^{-2}]}{[\\text{L}][\\text{L T}^{-1}]} = [\\text{M L}^{-1} \\text{T}^{-1}]$.',
    reasonUrdu: 'Wajah: [\\eta] = [MLT^-2] / ([L][LT^-1]) = [M L^-1 T^-1].',
    formula: '[\\eta] = [\\text{M L}^{-1} \\text{T}^{-1}]',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 435,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Viscosity Table on Page 106: Air vs Water',
    question: 'According to the table "Viscosities of Liquids and Gases at 30 °C" on page 106, what are the viscosities (in $10^{-3}\\text{ N s m}^{-2}$) of Air and Water?',
    options: [
      'Air: $0.019 \\times 10^{-3}$; Water: $0.801 \\times 10^{-3}\\text{ N s m}^{-2}$',
      'Air: $1.000$; Water: $6.29$',
      'Air: $1.6$; Water: $0.295$',
      'Air: $0$; Water: $0$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106 Table lists: Air = $0.019 \\times 10^{-3}\\text{ N s/m}^2$, Water = $0.801 \\times 10^{-3}\\text{ N s/m}^2$. Water is over 40 times more viscous than air!',
    reasonUrdu: 'Wajah: Page 106 ke table ma Air ki viscosity 0.019 x 10^-3 aur Water ki 0.801 x 10^-3 N s m^-2 darj hai.',
    formula: '\\eta_{air} = 0.019 \\times 10^{-3}, \\quad \\eta_{water} = 0.801 \\times 10^{-3}',
    textbookRef: 'Table, Page 106'
  },
  {
    id: 436,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Viscosity Table on Page 106: Glycerin',
    question: 'According to the table on page 106, which listed liquid has by far the highest viscosity at $30\\,^\\circ\\text{C}$?',
    options: [
      'Glycerin ($6.29 \\times 10^{-3}\\text{ N s m}^{-2}$)',
      'Water ($0.801 \\times 10^{-3}\\text{ N s m}^{-2}$)',
      'Acetone ($0.295 \\times 10^{-3}\\text{ N s m}^{-2}$)',
      'Benzene ($0.564 \\times 10^{-3}\\text{ N s m}^{-2}$)'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106 Table lists Glycerin with viscosity $6.29 \\times 10^{-3}\\text{ N s m}^{-2}$, nearly 8 times more viscous than water and 20 times more viscous than acetone.',
    reasonUrdu: 'Wajah: Table ke mutabiq Glycerin ki viscosity 6.29 x 10^-3 N s m^-2 hai jo sab se zyada hai.',
    formula: '\\eta_{glycerin} = 6.29 \\times 10^{-3} \\text{ N s m}^{-2}',
    textbookRef: 'Table, Page 106'
  },
  {
    id: 437,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Viscosity Table: Blood Plasma vs Water',
    question: 'According to the table on page 106, what is the viscosity of blood Plasma compared to Water?',
    options: [
      'Plasma: $1.6 \\times 10^{-3}\\text{ N s m}^{-2}$ (about double the viscosity of water)',
      'Plasma: $0.019 \\times 10^{-3}\\text{ N s m}^{-2}$',
      'Plasma: $6.29 \\times 10^{-3}\\text{ N s m}^{-2}$',
      'Plasma: $0$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106 Table explicitly lists: Plasma = $1.6 \\times 10^{-3}\\text{ N s m}^{-2}$ and Water = $0.801 \\times 10^{-3}\\text{ N s m}^{-2}$. Dissolved plasma proteins double its viscosity.',
    reasonUrdu: 'Wajah: Table ma Plasma ki viscosity 1.6 x 10^-3 N s m^-2 likhi hai jo paani se taqreeban double hai.',
    formula: '\\eta_{plasma} = 1.6 \\times 10^{-3} \\text{ N s m}^{-2}',
    textbookRef: 'Table, Page 106'
  },
  {
    id: 438,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Viscosity Table: Organic Solvents (Acetone, Methanol, Benzene, Ethanol)',
    question: 'According to the table on page 106, what are the viscosities (in $10^{-3}\\text{ N s m}^{-2}$) of Acetone, Methanol, Benzene, and Ethanol?',
    options: [
      'Acetone: 0.295; Methanol: 0.510; Benzene: 0.564; Ethanol: 1.000',
      'Acetone: 1.000; Methanol: 2.000; Benzene: 3.000; Ethanol: 4.000',
      'Acetone: 6.29; Methanol: 0.801; Benzene: 0.019; Ethanol: 1.6',
      'All are equal to 0.500'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106 Table: Acetone = $0.295$, Methanol = $0.510$, Benzene = $0.564$, Ethanol = $1.000$ (all $\\times 10^{-3}\\text{ N s m}^{-2}$).',
    reasonUrdu: 'Wajah: Table ma Acetone 0.295, Methanol 0.510, Benzene 0.564 aur Ethanol 1.000 darj hain.',
    formula: 'N/A',
    textbookRef: 'Table, Page 106'
  },
  {
    id: 439,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Effect of Temperature on Viscosity of Liquids',
    question: 'As the temperature of a liquid (such as engine oil or honey) is INCREASED, what happens to its viscosity?',
    options: [
      'It decreases significantly, because thermal energy increases molecular kinetic agitation and weakens cohesive intermolecular bonds',
      'It increases rapidly',
      'It remains strictly constant',
      'It drops to zero'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'In liquids, viscosity arises from cohesive intermolecular forces. Heating provides thermal energy that overcomes these cohesive attractions, allowing layers to slip more easily ($\\,\\eta_{liquid} \\downarrow$ as $T \\uparrow$).',
    reasonUrdu: 'Wajah: Garam karne se liquid ke molecules door hotay hain aur cohesive forces kamzor hoti hain, is liye liquid ki viscosity kam ho jati hai (patla ho jata hai).',
    formula: '\\eta_{liquid} \\downarrow \\text{ as } T \\uparrow',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 440,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Effect of Temperature on Viscosity of Gases',
    question: 'Unlike liquids, as the temperature of a GAS is INCREASED, what happens to its viscosity?',
    options: [
      'It INCREASES, because faster molecular thermal motion increases the rate of momentum transfer between adjacent layers ($\\eta \\propto \\sqrt{T}$)',
      'It decreases to zero',
      'It remains strictly unchanged',
      'It becomes negative'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'In gases, viscosity arises from molecular momentum exchange across layers. Higher temperature increases mean molecular speed ($v_{rms} \\propto \\sqrt{T}$), accelerating momentum transport and increasing gas viscosity.',
    reasonUrdu: 'Wajah: Gases ma viscosity momentum transfer se paida hoti hai; temperature barhne se molecules teez takratay hain aur gas ki viscosity barh jati hai (\\eta \\propto \\sqrt{T}).',
    formula: '\\eta_{gas} \\propto \\sqrt{T}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 441,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Stokes\' Drag Calculation',
    question: 'A spherical ball bearing of radius $r = 1.0\\text{ mm}$ ($1.0 \\times 10^{-3}\\text{ m}$) falls through glycerin ($\\eta = 6.29 \\times 10^{-3}\\text{ N s m}^{-2}$) at speed $v = 0.5\\text{ m s}^{-1}$. (Take $\\pi = 3.14$). What is the viscous drag force acting on it?',
    options: [
      '$5.92 \\times 10^{-5}\\text{ N}$',
      '$1.18 \\times 10^{-4}\\text{ N}$',
      '$6.29 \\times 10^{-3}\\text{ N}$',
      '$3.14 \\times 10^{-6}\\text{ N}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$F = 6 \\pi \\eta r v = 6 \\times 3.1416 \\times (6.29 \\times 10^{-3}) \\times (1.0 \\times 10^{-3}) \\times 0.5 = 18.85 \\times 6.29 \\times 10^{-6} \\times 0.5 = 5.928 \\times 10^{-5}\\text{ N}$.',
    reasonUrdu: 'Wajah: F = 6 \\pi \\eta r v = 6 x 3.14 x 6.29x10^-3 x 10^-3 x 0.5 = 5.92 x 10^-5 N.',
    formula: 'F = 6 \\pi \\eta r v',
    textbookRef: 'Sec 5.13, Eq 5.26, Page 106'
  },
  {
    id: 442,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Poiseuille\'s Law for Viscous Pipe Flow',
    question: 'For laminar viscous flow through a horizontal cylindrical pipe of radius $R$ and length $L$, the volume flow rate $Q$ under pressure difference $\\Delta P$ is given by Poiseuille\'s equation:',
    options: [
      '$Q = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}$',
      '$Q = \\frac{\\pi R^2 \\Delta P}{\\eta L}$',
      '$Q = \\frac{8 \\eta L}{\\pi R^4 \\Delta P}$',
      '$Q = \\frac{\\pi R^3 \\Delta P}{4 \\eta L}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Poiseuille\'s law demonstrates that flow rate depends on the FOURTH power of radius ($Q \\propto R^4$). A 10% narrowing of an artery reduces blood flow by over 34% ($0.9^4 \\approx 0.656$)!',
    reasonUrdu: 'Wajah: Poiseuille\'s law Q = (\\pi R^4 \\Delta P) / (8 \\eta L) hota hai; flow radius ki 4th power ke proportional hota hai.',
    formula: 'Q = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 443,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'CGS Unit of Viscosity: Poise',
    question: 'In the CGS system, the unit of viscosity is the "Poise" ($\text{P}$). How many Poise are equal to $1\\text{ SI unit}$ ($1\\text{ Pa s}$ or $1\\text{ N s m}^{-2}$)?',
    options: ['10 Poise', '100 Poise', '1 Poise', '0.1 Poise'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$1\\text{ Pa s} = 1\\text{ N s/m}^2 = \\frac{10^5\\text{ dynes} \\times \\text{s}}{(10^2\\text{ cm})^2} = 10\\text{ dyne s/cm}^2 = 10\\text{ Poise}$. A centipoise ($1\\text{ cP} = 10^{-2}\\text{ P} = 10^{-3}\\text{ Pa s}$) is approximately the viscosity of water.',
    reasonUrdu: 'Wajah: 1 Pa s = 10 Poise hota hai (CGS unit).',
    formula: '1 \\text{ Pa s} = 10 \\text{ Poise}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 444,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Assumptions of Stokes\' Law',
    question: 'Which of the following conditions is an ASSUMPTION required for Stokes\' Law ($F = 6\\pi\\eta rv$) to be valid?',
    options: [
      'The body must be perfectly spherical, smooth, rigid, moving with low velocity through an infinite, homogeneous fluid without turbulence or slip at the surface',
      'The body must move at supersonic speed',
      'The fluid must be turbulent with whirlpools',
      'The fluid must have zero viscosity'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Stokes\' derivation assumes: 1. Perfect sphere, 2. Low Reynolds number ($R_e \\ll 1$), 3. Infinite fluid extent (no wall proximity effects), 4. Continuous medium (particle radius vastly exceeds fluid mean free path).',
    reasonUrdu: 'Wajah: Stokes\' law sirf perfect smooth sphere, low speed, aur infinite non-turbulent fluid ke liye valid hota hai.',
    formula: 'R_e = \\frac{\\rho v (2r)}{\\eta} < 1',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 445,
    module: 'S',
    moduleName: 'Viscosity & Stokes\' Law',
    topic: 'Millikan Oil Drop Experiment and Stokes\' Law',
    question: 'Which Nobel Prize-winning physics experiment used Stokes\' Law to calculate the radius and mass of microscopic charged falling oil droplets to measure the elementary charge $e$ of an electron?',
    options: [
      'Millikan\'s oil drop experiment',
      'Rutherford\'s alpha scattering experiment',
      'J.J. Thomson\'s cathode ray experiment',
      'Young\'s double slit experiment'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Robert Millikan measured the terminal falling speed of charged oil droplets in air. Applying Stokes\' law gave droplet radius $r$ and mass $m$, leading directly to the quantization of electric charge ($e = 1.6 \\times 10^{-19}\\text{ C}$).',
    reasonUrdu: 'Wajah: Millikan ne oil droplets ka mass aur radius Stokes\' law se terminal velocity naap kar nikala tha.',
    formula: 'e = 1.602 \\times 10^{-19} \\text{ C}',
    textbookRef: 'Sec 5.13 & 5.14, Page 106-107'
  },

  // ==========================================
  // MODULE T: Terminal Velocity, Falling Raindrops & Superfluidity (MCQs 446-500)
  // ==========================================
  {
    id: 446,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Definition of Terminal Velocity',
    question: 'According to Section 5.14 on page 106-107, what is "terminal velocity"?',
    options: [
      'The constant maximum speed reached by a falling object when the upward retarding viscous drag force equals the downward weight, making net force zero',
      'The speed at which an object breaks the sound barrier',
      'The initial velocity when released from rest',
      'The speed of light in water'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 106-107: "5.14 Terminal Velocity: Consider a water droplet... downward force of gravity pulls droplet downward... As speed increases, the upward drag force on it increases... Finally when magnitude of drag force becomes equal to weight, net force acting on droplet is zero. Then droplet will fall with constant speed called terminal velocity."',
    reasonUrdu: 'Wajah: Page 106-107 ke mutabiq jab upward drag force downward wazan ke barabar ho jati hai to net force zero hoti hai aur droplet constant terminal velocity se girti hai.',
    formula: 'F_{drag} = W \\implies a = 0',
    textbookRef: 'Sec 5.14, Page 106-107'
  },
  {
    id: 447,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Net Force and Acceleration at Terminal Velocity',
    question: 'When a falling body reaches its terminal velocity $v_t$, what are the net force acting on it and its acceleration?',
    options: [
      'Net force = $0\\text{ N}$, and Acceleration = $0\\text{ m s}^{-2}$',
      'Net force = $mg$, and Acceleration = $9.8\\text{ m s}^{-2}$',
      'Net force = $6\\pi\\eta rv$, and Acceleration = $\\infty$',
      'Net force is maximum and acceleration is maximum'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 107, Eq 5.27 & 5.28: "$\\text{Net force} = \\text{Weight} - \\text{Drag force} = 0$. Since net force is zero, acceleration $a = 0$ and velocity remains constant."',
    reasonUrdu: 'Wajah: Eq 5.27 ke mutabiq Net force = Weight - Drag = 0, is liye acceleration a = 0 hoti hai aur speed constant rehti hai.',
    formula: 'F_{net} = mg - 6\\pi\\eta r v_t = 0 \\implies a = 0',
    textbookRef: 'Sec 5.14, Eq 5.27 & 5.28, Page 107'
  },
  {
    id: 448,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Equating Weight and Stokes\' Drag (Eq. 5.28)',
    question: 'According to page 107 (Eq. 5.28), equating the weight of the drop to Stokes\' drag gives:',
    options: [
      '$0 = mg - 6 \\pi \\eta r v_t \\implies v_t = \\frac{mg}{6 \\pi \\eta r}$',
      '$v_t = 6 \\pi \\eta r mg$',
      '$v_t = \\frac{6 \\pi \\eta r}{mg}$',
      '$v_t = \\sqrt{\\frac{mg}{6 \\pi \\eta r}}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 107, Eq 5.28: "$0 = mg - 6\\pi\\eta r v_t \\implies v_t = \\frac{mg}{6\\pi\\eta r}$ (Eq. 5.28)."',
    reasonUrdu: 'Wajah: Eq 5.28 ke mutabiq drag aur wazan ko barabar rakhne par vt = mg / (6\\pi\\eta r) banta hai.',
    formula: 'v_t = \\frac{m g}{6 \\pi \\eta r}',
    textbookRef: 'Sec 5.14, Eq 5.28, Page 107'
  },
  {
    id: 449,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Derivation of Full Formula (Eq. 5.29)',
    question: 'Substituting mass of a sphere $m = \\rho V = \\rho \\left(\\frac{4}{3}\\pi r^3\\right)$ into Eq. 5.28, what expression for terminal velocity $v_t$ is derived on page 107 (Eq. 5.29)?',
    options: [
      '$v_t = \\frac{2 g r^2 \\rho}{9 \\eta}$',
      '$v_t = \\frac{9 g r^2 \\rho}{2 \\eta}$',
      '$v_t = \\frac{2 g r \\rho}{9 \\eta}$',
      '$v_t = \\frac{4 g r^3 \\rho}{3 \\eta}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 107, Eq 5.29: "$v_t = \\frac{\\rho (\\frac{4}{3}\\pi r^3) g}{6\\pi\\eta r} = \\frac{2 g r^2 \\rho}{9 \\eta}$ (Eq. 5.29)."',
    reasonUrdu: 'Wajah: Page 107 Eq 5.29 par mass put karne se vt = (2 g r^2 \\rho) / (9 \\eta) derive hota hai.',
    formula: 'v_t = \\frac{2 g r^2 \\rho}{9 \\eta}',
    textbookRef: 'Sec 5.14, Eq 5.29, Page 107'
  },
  {
    id: 450,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Dependence on Radius Squared ($v_t \\propto r^2$)',
    question: 'According to Equation 5.29, how does terminal velocity $v_t$ depend on the radius $r$ of the falling droplet?',
    options: [
      '$v_t$ is directly proportional to the SQUARE of the radius ($v_t \\propto r^2$)',
      '$v_t$ is inversely proportional to radius',
      '$v_t$ is independent of radius',
      '$v_t$ is proportional to $r^3$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Because weight scales with volume ($r^3$) while Stokes drag scales with radius ($r$), the balance yields $v_t \\propto r^3 / r = r^2$. A droplet with twice the radius falls FOUR times faster!',
    reasonUrdu: 'Wajah: Formula vt = (2 g r^2 \\rho) / (9 \\eta) ma r^2 aata hai, is liye radius double hone se terminal velocity 4 guna barh jati hai.',
    formula: 'v_t \\propto r^2',
    textbookRef: 'Sec 5.14, Eq 5.29, Page 107'
  },
  {
    id: 451,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Why Fog Droplets Float in Air',
    question: 'According to Section 5.14 on page 106-107, why do tiny fog droplets appear to float suspended in air almost without falling?',
    options: [
      'Their radius $r$ is microscopic, so their terminal velocity ($v_t \\propto r^2$) is virtually zero (a fraction of a millimeter per second); slightest thermal updrafts keep them suspended',
      'Fog droplets have zero mass',
      'Fog droplets repel the ground magnetically',
      'Fog droplets are made of helium'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Because $v_t \\propto r^2$, droplets with $r \\sim 10^{-5}\\text{ m}$ have $v_t \\sim 1\\text{ cm/s}$ or less. Even gentle convection currents keep them hovering indefinitely.',
    reasonUrdu: 'Wajah: Fog ke droplets bohot chotay hotay hain; vt \\propto r^2 hone ki wajah sy unki terminal velocity itni kam hoti hai ke wo hawa ma tairte huye lagte hain.',
    formula: 'v_t \\propto r^2',
    textbookRef: 'Sec 5.14, Page 106-107'
  },
  {
    id: 452,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Textbook Example 5.5: Terminal Velocity Calculation',
    question: 'In textbook Example 5.5 (page 107), a tiny water droplet has radius $r = 0.010\\text{ cm} = 1.0 \\times 10^{-4}\\text{ m}$. Given $\\eta_{air} = 19 \\times 10^{-6}\\text{ kg m}^{-1}\\text{ s}^{-1}$ and $\\rho_{water} = 1000\\text{ kg m}^{-3}$, what is its terminal velocity?',
    options: [
      '$1.1\\text{ m s}^{-1}$',
      '$9.8\\text{ m s}^{-1}$',
      '$0.11\\text{ m s}^{-1}$',
      '$11.0\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 107 Example 5.5: $v_t = \\frac{2 \\times 9.8 \\times (1.0 \\times 10^{-4})^2 \\times 1000}{9 \\times (19 \\times 10^{-6})} = \\frac{19.6 \\times 10^{-8} \\times 1000}{171 \\times 10^{-6}} = \\frac{1.96 \\times 10^{-4}}{1.71 \\times 10^{-4}} = 1.146 \\approx 1.1\\text{ m/s}$.',
    reasonUrdu: 'Wajah: Example 5.5 ke mutabiq vt = (2 x 9.8 x (10^-4)^2 x 1000) / (9 x 19x10^-6) = 1.1 m/s.',
    formula: 'v_t = \\frac{2 g r^2 \\rho}{9 \\eta} = 1.1\\text{ m/s}',
    textbookRef: 'Example 5.5, Page 107'
  },
  {
    id: 453,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Parachute Operation',
    question: 'According to the "Tidbit" box on page 108, how does a parachute ensure a skydiver lands safely?',
    options: [
      'By creating a very large surface area, drastically increasing air drag to reduce terminal velocity to a safe, slow landing speed',
      'By lifting the skydiver back up into the clouds',
      'By heating the air into steam',
      'By eliminating gravitational acceleration'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108 Tidbit explicitly notes: "Parachutes increase air resistance (drag) by creating a large surface area, which counteracts the force of gravity. This slows down the persons fall, allowing them to land safely."',
    reasonUrdu: 'Wajah: Page 108 Tidbit ke mutabiq parachute barha surface area bana kar air resistance barhata hai aur terminal velocity ko mehfooz hadd tak kam kar deta hai.',
    formula: 'F_{drag} = \\frac{1}{2} C_d \\rho A v^2',
    textbookRef: 'Tidbit, Page 108'
  },
  {
    id: 454,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Two Droplets Coalescing',
    question: 'Two identical spherical raindrops of radius $r$, each falling with terminal velocity $v_t = 1.0\\text{ m s}^{-1}$, coalesce in mid-air into a single large drop. What is the new terminal velocity $V_t$ of the combined drop?',
    options: [
      '$1.59\\text{ m s}^{-1}$ ($2^{2/3} v_t$)',
      '$2.0\\text{ m s}^{-1}$',
      '$4.0\\text{ m s}^{-1}$',
      '$1.0\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Conservation of volume: $\\frac{4}{3}\\pi R^3 = 2 \\times \\frac{4}{3}\\pi r^3 \\implies R = 2^{1/3} r$. Since $v_t \\propto r^2$: $V_t = 2^{2/3} v_t = (4)^{1/3} \\times 1.0 \\approx 1.587 \\approx 1.59\\text{ m/s}$.',
    reasonUrdu: 'Wajah: Do boondon ke milne se naya radius R = 2^(1/3) r banta hai; vt \\propto r^2 hone se nayi speed 2^(2/3) vt = 1.59 m/s hogi.',
    formula: 'V_t = 2^{2/3} v_t',
    textbookRef: 'Sec 5.14, Page 107'
  },
  {
    id: 455,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Buoyancy Correction to Terminal Velocity',
    question: 'When the density $\\rho_0$ of the surrounding fluid cannot be neglected (e.g. steel ball falling in oil), how is the terminal velocity formula modified?',
    options: [
      '$v_t = \\frac{2 g r^2 (\\rho - \\rho_0)}{9 \\eta}$',
      '$v_t = \\frac{2 g r^2 (\\rho + \\rho_0)}{9 \\eta}$',
      '$v_t = \\frac{2 g r^2 \\rho_0}{9 \\eta}$',
      '$v_t = \\frac{2 g r^2}{9 \\eta (\\rho - \\rho_0)}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Upward forces are drag ($6\\pi\\eta r v_t$) plus buoyant force ($\\rho_0 g V$). At equilibrium: $W - F_b = F_{drag} \\implies (\\rho - \\rho_0) g (\\frac{4}{3}\\pi r^3) = 6\\pi\\eta r v_t \\implies v_t = \\frac{2gr^2(\\rho - \\rho_0)}{9\\eta}$.',
    reasonUrdu: 'Wajah: Fluid ki buoyancy shamil karne par effective density (\\rho - \\rho0) ho jati hai: vt = 2gr^2(\\rho - \\rho0) / (9\\eta).',
    formula: 'v_t = \\frac{2 g r^2 (\\rho - \\rho_0)}{9 \\eta}',
    textbookRef: 'Sec 5.7 & 5.14, Page 95, 107'
  },
  {
    id: 456,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Air Bubble Rising in Water',
    question: 'An air bubble of density $\\rho_{air} \\approx 1.2\\text{ kg m}^{-3}$ rises vertically through water ($\\rho_w = 1000\\text{ kg m}^{-3}$). Why does it rise with terminal velocity?',
    options: [
      'Upward buoyant force exceeds weight, accelerating it upward until downward viscous drag balances the net buoyant force',
      'Gravity pushes it upward',
      'The bubble is a superfluid',
      'Air has negative mass'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since $\\rho < \\rho_0$, the net driving force $(F_b - W)$ acts upward. Downward drag $6\\pi\\eta r v$ balances it at upward terminal velocity: $v_t = \\frac{2gr^2(\\rho_w - \\rho_{air})}{9\\eta}$.',
    reasonUrdu: 'Wajah: Bubble par net buoyant force upar lagti hai aur downward drag force usay balance kar ke constant upward terminal speed deti hai.',
    formula: 'F_b - W = 6\\pi\\eta r v_t',
    textbookRef: 'Sec 5.7 & 5.14, Page 95, 107'
  },
  {
    id: 457,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Velocity-Time Graph for Falling Droplet',
    question: 'What is the shape of the velocity versus time ($v-t$) graph for a raindrop falling from rest in a viscous atmosphere?',
    options: [
      'Starts at origin with initial slope $g$, curves over as drag builds, and asymptotically approaches a horizontal line representing terminal velocity $v_t$',
      'A straight line with constant slope $g$ forever',
      'A parabola pointing downwards',
      'A step function jumping to $v_t$ instantly at $t=0$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Initially $v=0 \\implies F_{drag}=0 \\implies a=g$. As speed rises, drag increases, reducing acceleration $a(t) = g - kv$. Velocity follows $v(t) = v_t(1 - e^{-t/\\tau})$, asymptoting to $v_t$.',
    reasonUrdu: 'Wajah: Shuru ma acceleration g hoti hai, drag barhne se acceleration kam hoti hai aur graph aahista aahista horizontal line (vt) par settle ho jata hai.',
    formula: 'v(t) = v_t (1 - e^{-t/\\tau})',
    textbookRef: 'Sec 5.14, Page 106-107'
  },
  {
    id: 458,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Acceleration-Time Graph for Falling Droplet',
    question: 'How does the acceleration $a(t)$ of a falling water droplet change with time from release ($t=0$) until terminal velocity is attained?',
    options: [
      'Starts at $a = g$ at $t=0$, decreases continuously as speed increases, and reaches exactly $0$ when $v = v_t$',
      'Remains strictly constant at $9.8\\text{ m s}^{-2}$ throughout',
      'Starts at zero and increases to $g$',
      'Becomes negative'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$a(t) = g - \\frac{6\\pi\\eta r}{m} v(t)$. At $t=0$, $v=0 \\implies a = g$. At terminal velocity, $v = v_t \\implies a = 0$. Acceleration decays exponentially.',
    reasonUrdu: 'Wajah: Release ke waqt acceleration g hoti hai, aur jab drag wazan ke barabar ho jaye to acceleration zero ho jati hai.',
    formula: 'a(t) = g \\left(1 - \\frac{v(t)}{v_t}\\right) \\to 0',
    textbookRef: 'Sec 5.14, Page 106-107'
  },
  {
    id: 459,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Section 5.16: Definition of Superfluidity',
    question: 'According to Section 5.16 on page 108 of the textbook, what is "superfluidity"?',
    options: [
      'The characteristic property of fluids with zero viscosity (flow is completely frictionless and exhibits no loss of kinetic energy)',
      'A fluid that conducts electricity without resistance',
      'A fluid that boils at $1000\\,^\\circ\\text{C}$',
      'A fluid with infinite density'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108 explicitly defines: "5.16 Superfluids: Superfluidity is the characteristic property of fluids with zero viscosity i.e., flow is frictionless. A substance exhibiting this property is a superfluid. Superfluids flow without loss of kinetic energy. They can flow through incredibly narrow spaces without any friction."',
    reasonUrdu: 'Wajah: Page 108 ke mutabiq zero viscosity (bilkul frictionless flow) ki khusosiyat ko Superfluidity kehte hain.',
    formula: '\\eta = 0 \\quad (\\text{Superfluid})',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 460,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Liquid Helium-4 as Primary Superfluid Example',
    question: 'According to page 108, which substance is the most studied and iconic example of a superfluid in physics?',
    options: ['Liquid Helium-4', 'Liquid Nitrogen', 'Liquid Mercury', 'Pure Water'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108 states: "Superfluid helium-4 is the most studied example of superfluidity. It changes from a liquid to a superfluids just a few degree below its boiling point of $-452\\,^\\circ\\text{F}$ ($-269\\,^\\circ\\text{C}$ or $4\\text{ K}$)."',
    reasonUrdu: 'Wajah: Kitab ke mutabiq Superfluid Helium-4 dunya ma superfluidity ki sab se mashhoor aur studied misal hai.',
    formula: '^{4}\\text{He}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 461,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Transition Temperature of Helium-4 on Page 108',
    question: 'According to page 108, at what temperature does liquid Helium-4 transition into a superfluid?',
    options: [
      'A few degrees below its boiling point of $-452\\,^\\circ\\text{F}$ ($-269\\,^\\circ\\text{C}$ or $4\\text{ K}$)',
      'At room temperature ($20\\,^\\circ\\text{C}$)',
      'At $0\\,^\\circ\\text{C}$ (freezing point of water)',
      'At $100\\,^\\circ\\text{C}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108: "Superfluid helium-4... changes from a liquid to a superfluids just a few degree below its boiling point of $-452\\,^\\circ\\text{F}$ ($-269\\,^\\circ\\text{C}$ or $4\\text{ K}$)." (Specifically at the lambda point $T_\\lambda = 2.17\\text{ K}$).',
    reasonUrdu: 'Wajah: Page 108 par bataya gaya hai ke Helium-4 -452 °F (-269 °C ya 4 K) ke qareeb superfluid ban jata hai.',
    formula: 'T \\le 4\\text{ K} \\quad (T_\\lambda = 2.17\\text{ K})',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 462,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Flow of Superfluid Helium-4 on Page 108',
    question: 'According to page 108, how does superfluid helium-4 behave when it starts flowing?',
    options: [
      'It moves as a normal clear liquid but has no viscosity; once it starts to flow, it keeps moving past any obstacles indefinitely without slowing down',
      'It instantly solidifies into rock',
      'It evaporates in a massive chemical explosion',
      'It sticks to the bottom of the container like tar'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108: "Superfluids helium-4 moving as a normal clear liquid, but it has no viscosity. This means that once it starts to flow, it keeps moving past any obstacles."',
    reasonUrdu: 'Wajah: Page 108 par likha hai ke zero viscosity hone ki wajah sy superfluid ek dafa chalne ke baad rukawat ke bawajood hamesha chalta rehta hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 463,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Superfluids Climbing Walls (Rollin Film)',
    question: 'According to the "Tidbit" box on page 108, what astonishing behavior can superfluids display inside a container?',
    options: [
      'Superfluids can "climb" up container walls and over the edges because they experience zero friction like normal fluids do',
      'They turn into fire',
      'They push the container through the ceiling',
      'They change color every second'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108 Tidbit explicitly states: "Superfluids can \'climb\' up walls and over edges of containers because they do not experience friction like normal fluids do." (Known in quantum physics as the Rollin film).',
    reasonUrdu: 'Wajah: Page 108 Tidbit ke mutabiq zero friction ki wajah sy superfluid container ki deewaron par khud charh kar bahir nikal jata hai.',
    formula: 'N/A',
    textbookRef: 'Tidbit, Page 108'
  },
  {
    id: 464,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Perpetual Vortex in Superfluids',
    question: 'According to page 87 & 108, what happens if you stir a superfluid inside a beaker to create a vortex?',
    options: [
      'Because there is zero viscosity to dissipate kinetic energy, the quantized vortex will keep spinning indefinitely without ever stopping',
      'It stops spinning within 3 seconds',
      'It converts into solid carbon',
      'The liquid disappears'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 87 & 108 note: "It also implies that if you stir a superfluid, the vortices will keep spinning indefinitely." In normal fluids, viscosity halts vortices; in superfluids, circulation is quantized and frictionless.',
    reasonUrdu: 'Wajah: Friction na hone ki wajah sy superfluid ma banne wala bhanwar (vortex) hamesha hamesha ke liye ghoomta rehta hai.',
    formula: '\\oint \\vec{v} \\cdot d\\vec{r} = n \\frac{h}{m}',
    textbookRef: 'Course Objectives & Sec 5.16, Page 87, 108'
  },
  {
    id: 465,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Superfluid Thermal Conductivity',
    question: 'According to page 108 ("Superfluidity Applications"), what unique thermal property does liquid helium possess in its superfluid phase?',
    options: [
      'Extremely high thermal conductivity (thermal superconductor, hundreds of times greater than copper)',
      'Zero thermal conductivity (perfect insulator)',
      'It cannot absorb heat',
      'It burns on contact with glass'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108: "Liquid helium is recognized for its great thermal conductivity and is used in cryogenic applications, including cooling superconducting magnets, scientific research, and medical uses."',
    reasonUrdu: 'Wajah: Page 108 ke mutabiq Superfluid Helium ki thermal conductivity be-misaal tor par bohot zyada hoti hai (copper se bhi sainkro guna zyada).',
    formula: 'K_{thermal} \\gg K_{copper}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 466,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Applications of Superfluids on Page 108',
    question: 'According to page 108, what are the primary modern practical applications of superfluid helium?',
    options: [
      'Coolant for high-field superconducting magnets (e.g. MRI scanners and CERN particle accelerators), particle detectors, leak testing, and electronics/optical production',
      'Cooking food in microwave ovens',
      'Fuel for diesel truck engines',
      'Making ordinary household paint'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108 explicitly lists: "Currently, there are few practical uses for superfluids. Superfluid helium-4 serves as a coolant for high-field magnets. Both helium-3 and helium-4 are utilized in advanced particle detectors... leak testing and the production of electronic and optical products."',
    reasonUrdu: 'Wajah: Page 108 par Superconducting magnets (MRI), particle detectors, cryogenic research aur leak testing ko superfluids ki applications bataya gaya hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 467,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Helium-3 vs Helium-4 as Superfluids',
    question: 'According to page 108, which two isotopes of helium exhibit superfluidity at ultra-low cryogenic temperatures?',
    options: ['Helium-3 and Helium-4', 'Helium-1 and Helium-2', 'Hydrogen and Deuterium', 'Oxygen-16 and Oxygen-18'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 108 explicitly mentions: "Both helium-3 and helium-4 are utilized in advanced particle detectors. Researching superfluidity also helps us learn more about superconductivity."',
    reasonUrdu: 'Wajah: Page 108 par Helium-3 aur Helium-4 dono ka zikr hai.',
    formula: '^{3}\\text{He} \\text{ and } ^{4}\\text{He}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 468,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Bose-Einstein Condensation in Helium-4',
    question: 'What quantum mechanical phenomenon underlies the transition of Helium-4 into a superfluid below 2.17 K?',
    options: [
      'Bose-Einstein Condensation (Helium-4 atoms are bosons with integer spin that condense into a macroscopic quantum ground state)',
      'Nuclear fusion',
      'Radioactive alpha decay',
      'Photoelectric effect'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Helium-4 consists of 2 protons, 2 neutrons, and 2 electrons, giving total integer spin 0 (a Boson). At ultra-low temperatures, a macroscopic fraction of atoms condenses into the identical quantum ground state described by a single collective wave function.',
    reasonUrdu: 'Wajah: Helium-4 atoms Bosons hotay hain; low temperature par wo Bose-Einstein Condensation kar ke aik collective quantum state banate hain jo frictionless hoti hai.',
    formula: '\\text{Spin} = 0 \\implies \\text{Boson}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 469,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Fountain Effect (Thermomechanical Effect)',
    question: 'When a capillary tube packed with fine powder submerged in superfluid helium is heated with a light beam or miniature heater, liquid helium shoots out of the tube top as a fountain. This is the:',
    options: ['Fountain effect (thermomechanical effect)', 'Magnus effect', 'Venturi effect', 'Torricelli jet'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Discovered by Allen and Jones in 1938: heating one side creates an osmotic pressure gradient between the normal and superfluid components, forcing superfluid to rush through the porous plug and shoot out as a continuous fountain.',
    reasonUrdu: 'Wajah: Superfluid helium ko halka sa heat karne par wo barik capillary tube se fountain ki tarah bahir nikalta hai (Fountain Effect).',
    formula: '\\Delta P = \\rho S \\Delta T',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 470,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Two-Fluid Model of Tisza and Landau',
    question: 'According to the classic Tisza-Landau model, liquid Helium-4 below the lambda point is conceptually treated as an intimate mixture of:',
    options: [
      'A normal fluid component (with viscosity and entropy) and a superfluid component (with zero viscosity and zero entropy)',
      'Liquid water and liquid ice',
      'Gaseous helium and solid helium',
      'Positive and negative ions'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Landau\'s two-fluid model treats liquid He-II as $\\rho = \\rho_n + \\rho_s$. The normal component $\\rho_n$ carries all thermal excitations and viscosity, while the superfluid component $\\rho_s$ moves with zero viscosity and zero entropy ($S_s = 0$).',
    reasonUrdu: 'Wajah: Landau ke two-fluid model ke mutabiq He-II normal fluid (viscous) aur superfluid (zero viscosity, zero entropy) ka mixture hota hai.',
    formula: '\\rho = \\rho_n + \\rho_s',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 471,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Superfluidity and Superconductivity Analogy',
    question: 'According to page 108, how does studying superfluidity directly aid understanding of electrical superconductivity?',
    options: [
      'Superconductivity is essentially superfluid flow of charged Cooper pairs of electrons through a crystal lattice without electrical resistance',
      'Superconductors contain liquid helium inside their wires',
      'Both require temperatures above $1000\\,^\\circ\\text{C}$',
      'Superconductors have zero mass'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 108: "Researching superfluidity also helps us learn more about superconductivity." Superconductivity is the electromagnetic analogue of neutral superfluidity: paired electrons (Cooper pairs) act as bosons and flow without resistance.',
    reasonUrdu: 'Wajah: Superconductivity asal ma electron pairs ka superfluid flow hota hai jo bina kisi resistance ke chalta hai.',
    formula: 'R = 0 \\quad (\\text{Superconductor})',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 472,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Absence of Boiling Bubbles in Superfluid Helium',
    question: 'When liquid Helium-4 is cooled through $2.17\\text{ K}$, violent bubbling and boiling abruptly stop, and the liquid surface becomes completely flat and still like glass. Why?',
    options: [
      'Its thermal conductivity becomes so gigantic that heat is conducted instantly without forming local hot spots or vapor bubbles',
      'It freezes into solid crystal',
      'It stops absorbing heat completely',
      'It evaporates into gas'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Because superfluid helium has near-infinite thermal conductivity, heat flows instantaneously throughout the entire liquid, preventing temperature localized hot spots needed for bubble nucleation. Evaporation occurs silently only at the surface.',
    reasonUrdu: 'Wajah: Superfluid helium ki thermal conductivity itni zyada hoti hai ke bubbles banne ke liye local hot spots nahi bante aur boiling achanak shaant ho jati hai.',
    formula: 'K_{thermal} \\to \\infty',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 473,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Quantized Vortices in Superfluids',
    question: 'In a rotating superfluid, how is circulation $\\kappa = \\oint \\vec{v} \\cdot d\\vec{r}$ constrained by quantum mechanics?',
    options: [
      'Circulation is strictly quantized in integer multiples of Planck\'s constant divided by mass: $\\kappa = n \\frac{h}{m}$ ($n = 1, 2, 3\\dots$)',
      'Circulation is continuous and can take any value',
      'Circulation must be zero everywhere',
      'Circulation depends on container color'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Single-valuedness of the macroscopic quantum wave function $\\Psi = \\sqrt{\\rho} e^{i\\phi}$ requires phase change around any closed path to be $2\\pi n$, meaning circulation is quantized: $\\kappa = \\oint \\vec{v}_s \\cdot d\\vec{r} = n \\frac{h}{m}$.',
    reasonUrdu: 'Wajah: Quantum mechanics ki wajah sy circulation continuous nahi hoti balkay Planck\'s constant ke integer multiples ma quantized hoti hai: n (h/m).',
    formula: '\\kappa = n \\frac{h}{m}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 474,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Second Sound in Superfluids',
    question: 'In addition to ordinary pressure sound waves (first sound), superfluid Helium-II supports a unique wave propagation mode called "second sound." What is second sound?',
    options: [
      'A temperature / entropy wave propagating without pressure fluctuations',
      'A loud explosion sound',
      'A gravitational wave',
      'An ultrasonic shock wave'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Second sound is a thermal wave where the normal and superfluid components oscillate in anti-phase, creating temperature and entropy variations while total density and pressure remain constant.',
    reasonUrdu: 'Wajah: Second sound temperature aur entropy ki wave hoti hai jo bina pressure fluctuation ke superfluid ma travel karti hai.',
    formula: 'u_2 = \\sqrt{\\frac{\\rho_s S^2 T}{\\rho_n C_v}}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 475,
    module: 'T',
    moduleName: 'Terminal Velocity & Superfluids',
    topic: 'Solid Helium Under Pressure',
    question: 'Why doesn\'t Helium-4 freeze into a solid at absolute zero ($0\\text{ K}$) under standard atmospheric pressure, requiring at least $25\\text{ atmospheres}$ of pressure to solidify?',
    options: [
      'Its light atomic mass and weak interatomic Van der Waals forces give it immense zero-point quantum vibrational kinetic energy that prevents solidification at $1\\text{ atm}$',
      'Because it has negative mass',
      'Because helium dissolves in vacuum',
      'Because it turns into photons'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Quantum zero-point energy $E_0 = \\frac{1}{2}\\hbar\\omega$ is substantial for light helium atoms, exceeding the shallow interatomic potential well. Helium remains liquid down to absolute zero unless squeezed by $\\ge 25\\text{ atm}$.',
    reasonUrdu: 'Wajah: Quantum zero-point vibrational energy bohot zyada hoti hai jo atoms ko freeze nahi hone deti jab tak 25 atm dabao na dala jaye.',
    formula: 'P_{solidify} \\ge 25\\text{ atm}',
    textbookRef: 'Sec 5.16, Page 108'
  },

  // ==========================================
  // COMBINED HIGH-YIELD ENTRANCE EXAM & TEXTBOOK MASTER REVIEW (MCQs 476-500)
  // ==========================================
  {
    id: 476,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Comprehensive Matching: Constants and Units',
    question: 'Which of the following physical quantities has the SI unit $\\text{N s m}^{-2}$?',
    options: ['Coefficient of viscosity ($\\eta$)', 'Young\'s modulus ($Y$)', 'Stress ($\\sigma$)', 'Rate of flow ($Q$)'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Coefficient of viscosity $\\eta$ has units $\\text{N s m}^{-2}$ (or $\\text{Pa s}$). Young\'s modulus and Stress have units $\\text{N m}^{-2}$ (Pa). Rate of flow has units $\\text{m}^3\\text{ s}^{-1}$.',
    reasonUrdu: 'Wajah: N s m^-2 sirf Coefficient of Viscosity (\\eta) ka SI unit hai.',
    formula: '[\\eta] = \\text{N s m}^{-2}',
    textbookRef: 'Sec 5.13, Page 106'
  },
  {
    id: 477,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Conservation Laws Mapping',
    question: 'Which of the following correctly pairs fundamental fluid equations with their underlying conservation laws?',
    options: [
      'Equation of Continuity $\\to$ Conservation of Mass; Bernoulli\'s Equation $\\to$ Conservation of Energy',
      'Equation of Continuity $\\to$ Conservation of Energy; Bernoulli\'s Equation $\\to$ Conservation of Momentum',
      'Equation of Continuity $\\to$ Conservation of Charge; Bernoulli\'s Equation $\\to$ Conservation of Mass',
      'Both express Conservation of Volume'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Continuity equation ($A_1 v_1 = A_2 v_2$) expresses conservation of mass. Bernoulli\'s equation ($P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$) expresses conservation of mechanical energy.',
    reasonUrdu: 'Wajah: Continuity equation mass conservation par aur Bernoulli\'s equation energy conservation par mabni hoti hai.',
    formula: '\\text{Continuity} \\to \\text{Mass}, \\quad \\text{Bernoulli} \\to \\text{Energy}',
    textbookRef: 'Sec 5.9 & 5.11, Page 100-101'
  },
  {
    id: 478,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Ratio of Moduli: Young\'s, Bulk, Shear',
    question: 'Can Young\'s modulus ($Y$) or Shear modulus ($G$) ever be non-zero for a static ideal or real liquid?',
    options: [
      'No, both $Y = 0$ and $G = 0$ for all static liquids; liquids possess ONLY Bulk Modulus ($K > 0$)',
      'Yes, water has $Y = 200\\text{ GPa}$',
      'Yes, mercury has $G = 1120\\text{ GPa}$',
      'Liquids have zero Bulk modulus'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 on page 91 explicitly lists Young\'s Modulus = 0 and Shear Modulus = 0 for water and mercury. Static liquids cannot sustain shear or tensile stress; they can only resist volume compression ($K_{water} = 2.2\\text{ GPa}$, $K_{Hg} = 27\\text{ GPa}$).',
    reasonUrdu: 'Wajah: Table 5.1 ke mutabiq liquids ka Young\'s aur Shear modulus zero hota hai, sirf Bulk modulus hota hai.',
    formula: 'Y_{liquid} = 0, \\quad G_{liquid} = 0, \\quad K_{liquid} > 0',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 479,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Force-Extension Slope Meaning',
    question: 'On a force ($F$) versus extension ($x$) graph of a wire, what does the SLOPE of the initial straight line represent?',
    options: [
      'The spring constant / stiffness of the wire ($k = \\frac{A Y}{L_0}$)',
      'Young\'s modulus directly',
      'The strain energy',
      'The breaking stress'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Slope $= \\frac{F}{x} = k = \\frac{A Y}{L_0}$. (The slope of a STRESS vs STRAIN graph gives Young\'s modulus $Y$, but the slope of a FORCE vs EXTENSION graph gives stiffness $k$!).',
    reasonUrdu: 'Wajah: Force vs extension graph ki slope stiffness k = AY/L0 deti hai; stress vs strain graph ki slope Young\'s modulus deti hai.',
    formula: '\\text{Slope} = \\frac{F}{x} = k = \\frac{A Y}{L_0}',
    textbookRef: 'Sec 5.4 & 5.6, Page 92, 94'
  },
  {
    id: 480,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Force-Extension Area Meaning',
    question: 'On a force ($F$) versus extension ($x$) graph, what does the AREA beneath the curve up to extension $x$ represent?',
    options: [
      'The work done in stretching the wire (elastic strain energy stored)',
      'The stiffness of the wire',
      'The Young\'s modulus',
      'The fracture stress'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Area $= \\int F \\, dx = \\frac{1}{2} F x = W = \\text{Elastic Strain Energy}$.',
    reasonUrdu: 'Wajah: Force vs extension graph ke niche ka area work done aur stored elastic strain energy ke barabar hota hai.',
    formula: '\\text{Area} = \\frac{1}{2} F x = W',
    textbookRef: 'Sec 5.6, Fig 5.7, Page 94'
  },
  {
    id: 481,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Stress-Strain Area Meaning',
    question: 'On a STRESS ($\\sigma$) versus STRAIN ($\\varepsilon$) graph, what does the AREA beneath the curve up to the elastic limit represent?',
    options: [
      'Modulus of Resilience (elastic strain energy per unit volume, $\\frac{1}{2}\\sigma\\varepsilon$)',
      'Total work done on the whole wire',
      'Breaking force',
      'Stiffness'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Area under stress-strain curve $= \\int \\sigma \\, d\\varepsilon = \\frac{1}{2} \\sigma \\varepsilon = \\frac{W}{\\text{Volume}} = \\text{Strain Energy per Unit Volume}$. Up to elastic limit, this is the Modulus of Resilience.',
    reasonUrdu: 'Wajah: Stress-strain curve ke niche ka area energy per unit volume (Modulus of Resilience) hota hai.',
    formula: '\\text{Area} = \\frac{1}{2} \\sigma \\varepsilon = u',
    textbookRef: 'Sec 5.5 & 5.6, Page 92, 94'
  },
  {
    id: 482,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Apparent Weight of Sinking Iron in Water',
    question: 'An iron block of mass $7.8\\text{ kg}$ and density $7800\\text{ kg m}^{-3}$ is completely immersed in water ($\\rho_w = 1000\\text{ kg m}^{-3}$, $g = 9.8\\text{ m s}^{-2}$). What is its apparent weight in water?',
    options: [
      '$66.64\\text{ N}$',
      '$76.44\\text{ N}$',
      '$9.8\\text{ N}$',
      '$0\\text{ N}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Volume $V = m/\\rho = 7.8 / 7800 = 1.0 \\times 10^{-3}\\text{ m}^3$. True weight $W = mg = 7.8 \\times 9.8 = 76.44\\text{ N}$. Upthrust $F_b = \\rho_w g V = 1000 \\times 9.8 \\times 10^{-3} = 9.8\\text{ N}$. Apparent weight $W_{app} = 76.44 - 9.8 = 66.64\\text{ N}$.',
    reasonUrdu: 'Wajah: Asal wazan = 76.44 N; Upthrust = 9.8 N; Apparent wazan = 76.44 - 9.8 = 66.64 N.',
    formula: 'W_{app} = W - \\rho_w g V',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 483,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Squeezing Pipe Flow Rate Invariance',
    question: 'When you squeeze the exit end of a garden hose to make water spray faster (Section 5.10, page 101), what happens to the VOLUME FLOW RATE ($Q = Av$) from the tap?',
    options: [
      'The volume flow rate $Q$ remains approximately constant (or slightly decreases due to added nozzle resistance), but does NOT increase',
      'The volume flow rate quadruples',
      'The volume flow rate becomes infinite',
      'Zero volume exits'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Squeezing increases velocity ($v \\uparrow$) strictly because area decreases ($A \\downarrow$) such that $Q = Av$ is maintained. The nozzle does NOT pump more volume per second!',
    reasonUrdu: 'Wajah: Pipe dabane se paani ki speed barhti hai kyun ke area kam hota hai, magar total volume flow rate (litres per second) barhta nahi hai.',
    formula: 'Q = A_1 v_1 = A_2 v_2 = \\text{Constant}',
    textbookRef: 'Sec 5.10, Page 101'
  },
  {
    id: 484,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Bernoulli in Non-Uniform Pipe with Friction',
    question: 'In a real horizontal pipeline carrying water over a long distance, the pressure continuously decreases downstream even if the pipe diameter is uniform ($A_1 = A_2$). Why?',
    options: [
      'Viscous shear friction between fluid layers and pipe walls causes continuous head loss, converting pressure energy into heat',
      'Gravity pushes water backward',
      'Water is absorbed by the pipe walls',
      'Bernoulli\'s principle reverses direction'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'In uniform diameter, speed is constant ($v_1 = v_2$). The steady pressure drop $\\Delta P = f \\frac{L}{D} \\frac{\\rho v^2}{2}$ (Darcy-Weisbach equation) overcomes viscous friction dissipation.',
    reasonUrdu: 'Wajah: Asal pipes ma viscous friction energy ko zaya karti hai, is liye aage jaate huye dabao musalsal girta hai.',
    formula: '\\Delta P_{loss} = f \\frac{L}{D} \\frac{\\rho v^2}{2}',
    textbookRef: 'Sec 5.11 & 5.15, Page 101, 107-108'
  },
  {
    id: 485,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Terminal Velocity of Small Sphere vs Big Sphere',
    question: 'Two lead spheres of radii $r$ and $3r$ are dropped in a tall cylinder of viscous oil. What is the ratio of their terminal velocities ($v_{t1} / v_{t2}$)?',
    options: ['1 : 9', '1 : 3', '1 : 27', '9 : 1'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'From Eq. 5.29: $v_t \\propto r^2$. Therefore $\\frac{v_{t1}}{v_{t2}} = \\left(\\frac{r}{3r}\\right)^2 = \\frac{1}{9}$. The sphere 3 times bigger falls 9 times faster!',
    reasonUrdu: 'Wajah: vt \\propto r^2; radius 3 guna barha hone se terminal velocity 3^2 = 9 guna barh jati hai (ratio 1:9).',
    formula: '\\frac{v_{t1}}{v_{t2}} = \\left(\\frac{r_1}{r_2}\\right)^2',
    textbookRef: 'Sec 5.14, Eq 5.29, Page 107'
  },
  {
    id: 486,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Stress Concentration at Hole in Plate',
    question: 'When a flat plate with a small circular hole is subjected to uniaxial tensile stress $\\sigma_0$, the peak stress at the edge of the hole is:',
    options: [
      '$3\\sigma_0$ (3 times the remote stress)',
      '$\\sigma_0$',
      '$2\\sigma_0$',
      'Zero'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Kirsch\'s solution in elasticity proves that a circular hole produces a stress concentration factor $K_t = 3$ at the hole boundary perpendicular to the tensile load.',
    reasonUrdu: 'Wajah: Circular hole ke kinaron par stress 3 guna barh jata hai (Stress Concentration Factor = 3).',
    formula: '\\sigma_{max} = 3 \\sigma_0',
    textbookRef: 'Sec 5.5, Page 93'
  },
  {
    id: 487,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Archimedes in Space Station',
    question: 'Inside an orbiting space station (where everything is in weightless free fall, $g_{eff} = 0$), a cork is held at the bottom of a container of water and released. What will happen to the cork?',
    options: [
      'It will remain at the bottom where it was released (zero upthrust acts because buoyant force requires gravity)',
      'It will shoot to the top immediately',
      'It will dissolve instantly',
      'It will spin at the speed of light'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Buoyant force $F_b = \\rho g_{eff} V$. In orbit, $g_{eff} = 0$, so hydrostatic pressure difference is zero ($\\Delta P = 0$) and upthrust vanishes completely.',
    reasonUrdu: 'Wajah: Space station ma weightlessness (geff = 0) hoti hai, is liye upthrust zero hoti hai aur cork wahi rehti hai.',
    formula: 'F_b = \\rho g_{eff} V = 0',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 488,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Torricelli Orifice at Mid-Height with Fluid Addition',
    question: 'Water leaks through a hole at the bottom of a container at rate $Q_{out} = a\\sqrt{2gh}$. Tap water is added from above at constant rate $Q_{in}$. At what steady water depth $h_{eq}$ does the water level stop changing?',
    options: [
      '$h_{eq} = \\frac{Q_{in}^2}{2 g a^2}$',
      '$h_{eq} = \\frac{Q_{in}}{2ga}$',
      '$h_{eq} = \\frac{2ga^2}{Q_{in}^2}$',
      'The tank must overflow'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Equilibrium depth is reached when outflow equals inflow: $Q_{in} = Q_{out} = a\\sqrt{2gh_{eq}} \\implies \\sqrt{2gh_{eq}} = \\frac{Q_{in}}{a} \\implies h_{eq} = \\frac{Q_{in}^2}{2ga^2}$.',
    reasonUrdu: 'Wajah: Inflow aur outflow barabar hone par level rukta hai: Qin = a \\sqrt{2gh}, is liye heq = Qin^2 / (2ga^2).',
    formula: 'h_{eq} = \\frac{Q_{in}^2}{2 g a^2}',
    textbookRef: 'Sec 5.12, Page 105'
  },
  {
    id: 489,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Ratio of Elongations: Same Mass and Volume',
    question: 'Two wires made of the same metal have masses in the ratio $1 : 2$ and lengths in the ratio $2 : 1$. If both are stretched by the SAME force $F$, what is the ratio of their elongations ($\\Delta L_1 / \\Delta L_2$)?',
    options: ['8 : 1', '4 : 1', '2 : 1', '1 : 8'],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Mass $m = \\rho A L \\implies A = \\frac{m}{\\rho L}$. Elongation $\\Delta L = \\frac{F L}{A Y} = \\frac{F L}{(m / \\rho L) Y} = \\frac{\\rho F}{Y} \\frac{L^2}{m} \\propto \\frac{L^2}{m}$. Ratio $\\frac{\\Delta L_1}{\\Delta L_2} = \\left(\\frac{L_1}{L_2}\\right)^2 \\left(\\frac{m_2}{m_1}\\right) = (2)^2 \\times (2) = 4 \\times 2 = 8$.',
    reasonUrdu: 'Wajah: \\Delta L \\propto L^2 / m; (2)^2 x (2/1) = 4 x 2 = 8:1.',
    formula: '\\Delta L \\propto \\frac{L^2}{m}',
    textbookRef: 'Sec 5.3 & 5.4, Page 90-91'
  },
  {
    id: 490,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Energy Stored in Hanging Wire under Own Weight',
    question: 'What is the elastic strain energy stored in a vertical hanging wire of mass $M$, length $L$, and cross-sectional area $A$ under its OWN weight alone?',
    options: [
      '$W = \\frac{M^2 g^2 L}{6 A Y}$',
      '$W = \\frac{M^2 g^2 L}{2 A Y}$',
      '$W = \\frac{M^2 g^2 L}{4 A Y}$',
      '$W = \\frac{M g L}{2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Tension at distance $y$ from bottom is $T(y) = \\frac{Mgy}{L}$. Energy density is $\\frac{T(y)^2}{2A^2 Y}$. Total energy $W = \\int_0^L \\frac{M^2 g^2 y^2}{2 A Y L^2} dy = \\frac{M^2 g^2 L}{6 A Y}$. (Notice the factor of 6!).',
    reasonUrdu: 'Wajah: Apne wazan ke tehat integrate karne par energy formula W = (M^2 g^2 L) / (6 A Y) banta hai.',
    formula: 'W = \\frac{M^2 g^2 L}{6 A Y}',
    textbookRef: 'Sec 5.6, Page 94'
  },
  {
    id: 491,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Apparent Loss in Weight of Floating Body',
    question: 'When a wooden block of weight $50\\text{ N}$ floats freely in water, what is its apparent weight, and what is its loss in weight?',
    options: [
      'Apparent weight = $0\\text{ N}$; Loss in weight = $50\\text{ N}$ (100% loss)',
      'Apparent weight = $50\\text{ N}$; Loss in weight = $0\\text{ N}$',
      'Apparent weight = $25\\text{ N}$; Loss in weight = $25\\text{ N}$',
      'Apparent weight = $100\\text{ N}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'By the law of floatation, $F_b = W = 50\\text{ N}$. Apparent weight $W_{app} = W - F_b = 50 - 50 = 0\\text{ N}$. The loss in weight is equal to the upthrust, which is $50\\text{ N}$.',
    reasonUrdu: 'Wajah: Tairte huye jism par Upthrust wazan ke barabar hoti hai, is liye apparent weight zero aur loss in weight 50 N (100%) hota hai.',
    formula: 'W_{app} = 0, \\quad \\text{Loss} = W',
    textbookRef: 'Sec 5.7, Page 95-96'
  },
  {
    id: 492,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Stokes Drag on Parachutist Before Opening',
    question: 'A skydiver in belly-to-earth freefall without opening a parachute reaches a terminal velocity of approximately:',
    options: [
      '$50\\text{ to }60\\text{ m s}^{-1}$ (about $200\\text{ km/h}$)',
      '$1.1\\text{ m s}^{-1}$',
      '$9.8\\text{ m s}^{-1}$',
      '$300\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'For a human body in air with $m \\approx 80\\text{ kg}$ and frontal area $A \\approx 0.7\\text{ m}^2$, turbulent quadratic drag balances gravity at $v_t = \\sqrt{\\frac{2mg}{C_d \\rho A}} \\approx 55\\text{ m/s} \\approx 200\\text{ km/h}$.',
    reasonUrdu: 'Wajah: Parachute kholne se pehle insani jism ki terminal velocity taqreeban 50-60 m/s (~200 km/h) hoti hai.',
    formula: 'v_t \\approx 55\\text{ m/s}',
    textbookRef: 'Tidbit, Page 108'
  },
  {
    id: 493,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Terminal Velocity After Parachute Deployment',
    question: 'When the skydiver deploys a large canopy parachute ($A \\approx 40\\text{ m}^2$), terminal velocity drops safely to approximately:',
    options: [
      '$4\\text{ to }5\\text{ m s}^{-1}$ (about the impact speed of jumping off a low stool)',
      '$50\\text{ m s}^{-1}$',
      '$0.01\\text{ m s}^{-1}$',
      '$0\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'The vast canopy area ($A \\approx 40\\text{ m}^2$) increases drag by a factor of 50, lowering terminal velocity to $v_t \\approx 4-5\\text{ m/s}$ ($15-18\\text{ km/h}$), allowing a safe landing.',
    reasonUrdu: 'Wajah: Parachute khulne par terminal velocity gir kar 4-5 m/s ho jati hai jis se aaram se land kiya ja sakta hai.',
    formula: 'v_t \\approx 4-5\\text{ m/s}',
    textbookRef: 'Tidbit, Page 108'
  },
  {
    id: 494,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Helium-4 Lambda Point Specific Value',
    question: 'The exact temperature at which liquid Helium-4 transitions into superfluid He-II under saturated vapor pressure is precisely:',
    options: ['2.17 K', '4.2 K', '0 K', '77 K'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Helium boils at $4.2\\text{ K}$ at $1\\text{ atm}$. When pumped down to lower pressure, it transitions into superfluid He-II at the lambda point ($T_\\lambda = 2.17\\text{ K}$), where heat capacity exhibits a characteristic $\\lambda$-shaped spike.',
    reasonUrdu: 'Wajah: Helium-4 ka exact lambda point 2.17 Kelvin hota hai jahan yeh superfluid He-II ban jata hai.',
    formula: 'T_\\lambda = 2.17\\text{ K}',
    textbookRef: 'Sec 5.16, Page 108'
  },
  {
    id: 495,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Young\'s Modulus of Bone in Medical Biomechanics',
    question: 'According to Table 5.1, the Young\'s modulus of human compact Bone is $15 \\times 10^9\\text{ N m}^{-2}$. This stiffness is comparable to which engineering metal in Table 5.1?',
    options: [
      'Lead ($15 \\times 10^9\\text{ N m}^{-2}$)',
      'Steel ($200 \\times 10^9\\text{ N m}^{-2}$)',
      'Diamond ($1120 \\times 10^9\\text{ N m}^{-2}$)',
      'Tungsten ($390 \\times 10^9\\text{ N m}^{-2}$)'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Table 5.1 lists both Bone and Lead with identical Young\'s modulus of $15 \\times 10^9\\text{ N m}^{-2}$. This remarkable natural composite matches the elastic stiffness of metallic lead while being far lighter.',
    reasonUrdu: 'Wajah: Table 5.1 ma Bone aur Lead dono ka Young\'s modulus barabar (15 x 10^9 N m^-2) darj hai.',
    formula: 'Y_{bone} = Y_{lead} = 15 \\times 10^9 \\text{ N m}^{-2}',
    textbookRef: 'Table 5.1, Page 91'
  },
  {
    id: 496,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Bulk Modulus of Solids vs Liquids vs Gases',
    question: 'In general, how do the Bulk Moduli of solids, liquids, and gases compare in order of magnitude?',
    options: [
      '$K_{solids} > K_{liquids} \\gg K_{gases}$ (Solids are least compressible, gases are most compressible)',
      '$K_{gases} > K_{liquids} > K_{solids}$',
      '$K_{liquids} > K_{solids} > K_{gases}$',
      'All three states have identical Bulk Moduli'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Solids have $K \\sim 10^{10}-10^{11}\\text{ Pa}$. Liquids have $K \\sim 10^9\\text{ Pa}$. Ideal gases have $K = P \\sim 10^5\\text{ Pa}$. Gases are roughly $10{,}000$ times more compressible than liquids!',
    reasonUrdu: 'Wajah: Solids ko dabana sab se mushkil (highest K) aur gases ko sab se aasan hota hai (lowest K).',
    formula: 'K_{solids} > K_{liquids} \\gg K_{gases}',
    textbookRef: 'Sec 5.3, Table 5.1, Page 91'
  },
  {
    id: 497,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Venturi Throat Area Ratio vs Pressure Drop',
    question: 'In a Venturi meter, if throat diameter is halved ($d_2 = d_1 / 2$), the velocity ratio $v_2 / v_1$ is 4. The dynamic pressure term $\\frac{1}{2}\\rho v_2^2$ increases by a factor of:',
    options: ['16', '4', '8', '2'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$v_2 = v_1 (d_1 / d_2)^2 = 4 v_1$. Dynamic pressure is proportional to velocity squared: $\\frac{1}{2}\\rho v_2^2 = \\frac{1}{2}\\rho (4v_1)^2 = 16 \\left(\\frac{1}{2}\\rho v_1^2\\right)$.',
    reasonUrdu: 'Wajah: Velocity 4 guna hoti hai; dynamic pressure v^2 ke proportional hone se 4^2 = 16 guna barh jata hai.',
    formula: '\\frac{1}{2}\\rho v_2^2 = 16 \\left(\\frac{1}{2}\\rho v_1^2\\right)',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 498,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Terminal Velocity Ratio for Droplets with Density Difference',
    question: 'Two droplets of equal radius $r$, one of water ($\\rho_1 = 1000\\text{ kg m}^{-3}$) and one of oil ($\\rho_2 = 800\\text{ kg m}^{-3}$), fall through air. What is the ratio of their terminal velocities ($v_{t1} / v_{t2}$)?',
    options: [
      '5 : 4 (1.25)',
      '4 : 5',
      '25 : 16',
      '1 : 1'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'From Eq. 5.29: $v_t \\propto \\rho$ (when air buoyancy is negligible). Thus $\\frac{v_{t1}}{v_{t2}} = \\frac{\\rho_1}{\\rho_2} = \\frac{1000}{800} = \\frac{5}{4} = 1.25$.',
    reasonUrdu: 'Wajah: vt density ke proportional hoti hai: 1000 / 800 = 5 / 4 = 1.25.',
    formula: '\\frac{v_{t1}}{v_{t2}} = \\frac{\\rho_1}{\\rho_2}',
    textbookRef: 'Sec 5.14, Eq 5.29, Page 107'
  },
  {
    id: 499,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Magnus Force Formula',
    question: 'The aerodynamic Magnus force $F_M$ on a spinning cylinder or sphere of radius $R$ moving at speed $v$ with circulation $\\Gamma$ is given by the Kutta-Joukowski theorem:',
    options: [
      '$F_M = \\rho v \\Gamma$',
      '$F_M = \\frac{1}{2}\\rho v^2$',
      '$F_M = 6\\pi\\eta R v$',
      '$F_M = \\rho g V$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'The Kutta-Joukowski theorem states lift per unit length is $L\' = \\rho_\\infty v_\\infty \\Gamma$, which governs both aircraft aerofoil lift and the Magnus effect on rotating cylinders and sports balls.',
    reasonUrdu: 'Wajah: Kutta-Joukowski theorem ke mutabiq Magnus lift force F = \\rho v \\Gamma hoti hai.',
    formula: 'F_M = \\rho v \\Gamma',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 500,
    module: 'T',
    moduleName: 'Entrance Exam & Master Review',
    topic: 'Grand Unified Concept: Solids vs Fluids',
    question: 'What is the fundamental mechanical distinction between a solid and an ideal or real fluid when subjected to shear stress?',
    options: [
      'A solid deforms by a definite, finite shear angle $\\gamma$ and can sustain static shear stress; a fluid deforms continuously (flows) at a rate proportional to shear stress and cannot sustain static shear stress',
      'Solids have zero mass while fluids have mass',
      'Fluids can never be compressed while solids cannot be compressed',
      'Solids obey Bernoulli\'s equation while fluids obey Hooke\'s law'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Under shear stress $\\tau$: a solid develops a static strain $\\gamma = \\tau / G$; a fluid cannot achieve static equilibrium and continuously deforms at strain rate $\\dot{\\gamma} = \\tau / \\eta$, defining the core difference between elasticity and fluid dynamics.',
    reasonUrdu: 'Wajah: Solid shear stress par ek fixed angle tak deform ho kar ruk jata hai; jab ke fluid musalsal flow karta rehta hai aur static shear bardasht nahi kar sakta.',
    formula: '\\tau_{solid} = G \\gamma, \\quad \\tau_{fluid} = \\eta \\frac{dv}{dy}',
    textbookRef: 'Chapter 5 Grand Summary, Page 88-108'
  }
];
