import { MCQ } from '../../types/physics';

export const mcqsModuleK_O: MCQ[] = [
  // ==========================================
  // MODULE K: Archimedes' Principle, Buoyancy & Apparent Weight (MCQs 251-275)
  // ==========================================
  {
    id: 251,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Archimedes\' Principle Statement',
    question: 'According to Section 5.7 on page 94-95, what is Archimedes\' Principle?',
    options: [
      'When an object is totally or partially immersed in a fluid, an upward force (upthrust) acts on it equal to the weight of the fluid displaced by the object',
      'The pressure in a fluid is constant in all horizontal and vertical directions',
      'The speed of a fluid increases when the pipe narrows',
      'The drag force on a sphere is proportional to its radius squared'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94-95: "When an object is totally or partially immersed in a liquid, an upward thrust acts on it equal to the weight of the fluid it displaces. This upward force acting on the object is called the upthrust of the liquid. Archimedes\' principle states that..."',
    reasonUrdu: 'Wajah: Page 94-95 ke mutabiq jab koi jism fluid ma dooba ho to us par upar ki taraf lagne wala upthrust displaced fluid ke wazan ke barabar hota hai.',
    formula: 'F_b = \\rho g V',
    textbookRef: 'Sec 5.7, Page 94-95'
  },
  {
    id: 252,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Derivation of Upthrust Formula',
    question: 'In the derivation on page 95 (Fig. 5.8), a solid cylinder of height $h$ and cross-sectional area $A$ is immersed in liquid of density $\\rho$. The net upward force $F_2 - F_1$ is given by Eq. 5.11 as:',
    options: [
      '$\\text{Upthrust} = \\rho g A h = \\rho g V$',
      '$\\text{Upthrust} = \\frac{\\rho g}{V}$',
      '$\\text{Upthrust} = \\frac{1}{2} \\rho g V^2$',
      '$\\text{Upthrust} = P_1 - P_2$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 95, Eq 5.10 & 5.11: "$F_2 - F_1 = \\rho g A (h_2 - h_1) = \\rho g A h$. Since $A h = V$ (volume displaced), Upthrust of liquid = $\\rho g V$ (Eq. 5.11)."',
    reasonUrdu: 'Wajah: Eq 5.11 ke mutabiq bottom aur top pressure ke farq se Upthrust = \\rho g V nikalta hai.',
    formula: 'F_b = \\rho g V',
    textbookRef: 'Sec 5.7, Eq 5.11, Page 95'
  },
  {
    id: 253,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Origin of Buoyant Force',
    question: 'What is the physical origin of the buoyant force (upthrust) acting on a submerged body?',
    options: [
      'Hydrostatic pressure increases with depth ($P = \\rho g h$), so upward force on the bottom face ($F_2 = P_2 A$) exceeds downward force on the top face ($F_1 = P_1 A$)',
      'Gravitational attraction repels the submerged object',
      'The liquid molecules are converted into photons',
      'Viscous drag pushes the body upward'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Because fluid pressure increases with depth ($P_2 > P_1$), the pressure pushing upward on the bottom surface is greater than the downward pressure on the top, resulting in a net upward force.',
    reasonUrdu: 'Wajah: Gehrai ke sath fluid dabao barhta hai, is liye niche wali surface par upar ki taraf lagne wali force upar wali downward force se zyada hoti hai.',
    formula: 'F_2 - F_1 = (P_2 - P_1)A = \\rho g h A = \\rho g V',
    textbookRef: 'Sec 5.7, Eq 5.9 & 5.10, Page 95'
  },
  {
    id: 254,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Apparent Loss in Weight',
    question: 'When an object of true weight $W$ in vacuum/air is submerged in a fluid experiencing upthrust $F_b$, its apparent weight $W_{app}$ measured on a spring balance is:',
    options: [
      '$W_{app} = W - F_b = W - \\rho g V$',
      '$W_{app} = W + F_b$',
      '$W_{app} = \\frac{W}{F_b}$',
      '$W_{app} = F_b - W$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Upthrust supports part of the object\'s weight. Hence the apparent weight is reduced: $W_{app} = W - F_b$. The apparent loss in weight equals exactly the buoyant force.',
    reasonUrdu: 'Wajah: Upthrust wazan ke mukhalif upar push karti hai, is liye apparent weight = W - Fb hota hai.',
    formula: 'W_{app} = W - \\rho g V',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 255,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Textbook Example 5.2: Wooden Cube Upthrust',
    question: 'In textbook Example 5.2 (page 95), a wooden cube of side $10\\text{ cm}$ is dipped completely in water ($\\rho = 1000\\text{ kg m}^{-3}$, $g = 9.8\\text{ m s}^{-2}$). What is the upthrust acting on it?',
    options: [
      '9.8 N',
      '98 N',
      '0.98 N',
      '980 N'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 95 Example 5.2: Side $L = 10\\text{ cm} = 0.1\\text{ m}$. Volume $V = L^3 = (0.1)^3 = 10^{-3}\\text{ m}^3$. Upthrust $= \\rho g V = 1000\\text{ kg/m}^3 \\times 9.8\\text{ m/s}^2 \\times 10^{-3}\\text{ m}^3 = 9.8\\text{ N}$.',
    reasonUrdu: 'Wajah: Example 5.2 ke mutabiq V = (0.1)^3 = 10^-3 m^3; Upthrust = 1000 x 9.8 x 10^-3 = 9.8 N.',
    formula: 'F_b = \\rho g V',
    textbookRef: 'Example 5.2, Page 95'
  },
  {
    id: 256,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Historical Tidbit on Archimedes',
    question: 'According to the "For Your Information" box on page 95, where was Archimedes born around 287 BC and how did he die?',
    options: [
      'Born in Syracuse on the island of Sicily; killed by a Roman soldier when he refused to leave his mathematics work',
      'Born in Athens; died in a shipwreck',
      'Born in Alexandria; died of old age in Rome',
      'Born in Sparta; died in battle at Thermopylae'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 95 notes: "Archimedes was born about 287 BC in Syracuse on the Island of Sicily. He was killed by a Roman soldier when he refused to leave his mathematics work."',
    reasonUrdu: 'Wajah: Kitab ke mutabiq Archimedes Syracuse (Sicily) ma paida hua aur Roman fauji ne usay shaheed kiya jab usne math ka kaam chhorne se inkar kiya.',
    formula: 'N/A',
    textbookRef: 'For your info, Page 95'
  },
  {
    id: 257,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Archimedes in Gases',
    question: 'Does Archimedes\' principle apply to gases as well as liquids?',
    options: [
      'Yes, it is equally applicable to all fluids (both liquids and gases)',
      'No, it applies strictly to liquids only',
      'No, it applies only to solid crystals',
      'Only if the gas is at absolute zero'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 96 explicitly confirms: "Archimedes\' principle is applicable on liquids as well as on gases. We find numerous applications of this principle in our daily life."',
    reasonUrdu: 'Wajah: Page 96 par wazeh likha hai ke Archimedes\' principle liquids aur gases dono par poori tarah lagu hota hai.',
    formula: 'F_b = \\rho_{fluid} g V',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 258,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Apparent Weight of a Submerged Stone',
    question: 'A solid stone of mass $5.0\\text{ kg}$ and volume $0.002\\text{ m}^3$ is completely submerged in water ($\\rho = 1000\\text{ kg m}^{-3}$, $g = 9.8\\text{ m s}^{-2}$). What is its apparent weight in water?',
    options: ['29.4 N', '49.0 N', '19.6 N', '0 N'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'True weight $W = mg = 5.0 \\times 9.8 = 49.0\\text{ N}$. Upthrust $F_b = \\rho g V = 1000 \\times 9.8 \\times 0.002 = 19.6\\text{ N}$. Apparent weight $W_{app} = W - F_b = 49.0 - 19.6 = 29.4\\text{ N}$.',
    reasonUrdu: 'Wajah: Asal wazan = 49 N; Upthrust = 19.6 N; Apparent wazan = 49 - 19.6 = 29.4 N.',
    formula: 'W_{app} = m g - \\rho g V',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 259,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Density Determination by Archimedes\' Principle',
    question: 'If an irregularly shaped crown weighs $W_1$ in air and $W_2$ when totally submerged in water of density $\\rho_w$, the density $\\rho$ of the crown is given by:',
    options: [
      '$\\rho = \\frac{W_1}{W_1 - W_2} \\rho_w$',
      '$\\rho = \\frac{W_1 - W_2}{W_1} \\rho_w$',
      '$\\rho = \\frac{W_2}{W_1} \\rho_w$',
      '$\\rho = (W_1 - W_2) \\rho_w$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Mass of crown $m = W_1/g$. Volume displaced $V = (W_1 - W_2) / (\\rho_w g)$. Density $\\rho = m/V = \\frac{W_1}{W_1 - W_2} \\rho_w$. (This was Archimedes\' Eureka discovery!)',
    reasonUrdu: 'Wajah: Archimedes ne yahi formula use kiya tha: Density = W1 / (W1 - W2) x \\rho_water.',
    formula: '\\rho = \\frac{W_{air}}{W_{air} - W_{water}} \\rho_w',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 260,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Center of Buoyancy',
    question: 'The buoyant force (upthrust) on a partially or fully submerged object acts vertically upward through which point?',
    options: [
      'The center of gravity of the displaced fluid (Center of Buoyancy)',
      'The highest point of the object',
      'The geometric center of the dry part of the object',
      'The bottom surface of the container'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The center of buoyancy is the centroid of the displaced volume of fluid. The upward buoyant force acts through this point.',
    reasonUrdu: 'Wajah: Upthrust hamesha displaced fluid ke center of gravity (Center of Buoyancy) ke zariye vertically upar lagti hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 261,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Apparent Weight in Free Fall',
    question: 'A beaker of water containing a floating block of wood is dropped freely from a high tower ($a = g$). What is the buoyant force acting on the block during the fall?',
    options: [
      'Zero (because effective $g_{eff} = g - a = 0$)',
      'Twice the normal value',
      'Equal to the block\'s mass',
      'Infinite'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'In free fall, effective gravity inside the beaker is $g_{eff} = 0$. Since pressure gradient $\\frac{dP}{dy} = \\rho g_{eff} = 0$, there is no hydrostatic pressure difference, and buoyant force vanishes.',
    reasonUrdu: 'Wajah: Free fall ma effective gravity zero hoti hai (geff = 0), is liye hydrostatic pressure khatam ho jata hai aur upthrust zero ho jati hai.',
    formula: 'F_b = \\rho g_{eff} V = 0',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 262,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Buoyancy in an Accelerated Elevator',
    question: 'A container of water rests inside an elevator accelerating upward with acceleration $a$. How does the buoyant force $F_b$ on a submerged metal sphere change?',
    options: [
      'It increases: $F_b = \\rho (g + a) V$',
      'It decreases: $F_b = \\rho (g - a) V$',
      'It remains strictly $\\rho g V$',
      'It drops to zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Inside the upwardly accelerating frame, effective gravity is $g_{eff} = g + a$. The hydrostatic pressure gradient steepens to $\\rho(g+a)$, increasing the upthrust to $\\rho(g+a)V$.',
    reasonUrdu: 'Wajah: Elevator upar accelerate kare to effective gravity (g + a) hoti hai, is liye upthrust barh kar \\rho (g + a) V ho jati hai.',
    formula: 'F_b = \\rho (g + a) V',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 263,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Weight of Submerged Mug in Water',
    question: 'According to page 94, why does a mug or bucket feel very light when filled with water inside a well, but suddenly feels heavy the moment it is lifted out of the water?',
    options: [
      'While submerged in water, water exerts an upward buoyant force (upthrust) equal to the weight of water displaced by the mug',
      'Gravity does not act underwater',
      'The mass of water inside the mug increases in air',
      'Air creates an extra downward gravitational force'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94 notes: "We might have noticed that a mug filled with water feels light under water but feels heavy as soon as we take it out of water. This is because an upward force acts on an object... called the upthrust."',
    reasonUrdu: 'Wajah: Paani ke andar upthrust mug ko upar uthati hai, magar bahir aate hi upthrust khatam ho jati hai aur poora wazan mehsoos hota hai.',
    formula: 'W_{app} = W - F_b',
    textbookRef: 'Sec 5.7, Page 94'
  },
  {
    id: 264,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Dependence on Depth',
    question: 'For a completely submerged, incompressible solid object in an incompressible liquid, how does the buoyant force change as it sinks from a depth of $2\\text{ m}$ to $20\\text{ m}$?',
    options: [
      'It remains constant, because displaced volume $V$ and liquid density $\\rho$ do not change with depth',
      'It increases tenfold',
      'It decreases to zero',
      'It oscillates wildly'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Although pressure increases at both top and bottom, the pressure DIFFERENCE $\\Delta P = \\rho g h$ between top and bottom depends only on the object\'s height $h$. Hence $F_b = \\rho g V$ remains constant.',
    reasonUrdu: 'Wajah: Mukammal doobne ke baad displaced volume V constant rehta hai, is liye gehrai barhne se upthrust par koi farq nahi parta.',
    formula: 'F_b = \\rho g V = \\text{Constant}',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 265,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Buoyancy on Different Shapes',
    question: 'Two objects of identical volume ($0.01\\text{ m}^3$), one shaped as a sphere and one as a flat disc, are completely submerged in water. What is the ratio of upthrust on the sphere to the disc?',
    options: ['1 : 1', '2 : 1', '$\\pi : 1$', '4 : 3'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Archimedes\' upthrust depends strictly on displaced fluid volume $V$ and fluid density $\\rho$, completely independent of the object\'s geometric shape.',
    reasonUrdu: 'Wajah: Upthrust sirf volume par depend karti hai, shape par nahi; dono ka volume barabar hai to upthrust barabar hogi (1:1).',
    formula: 'F_b = \\rho g V',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 266,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Buoyancy in Saltwater vs Freshwater',
    question: 'Why does a swimmer or ship experience GREATER buoyant upthrust for the same submerged volume in ocean saltwater ($\\rho \\approx 1025\\text{ kg m}^{-3}$) than in freshwater ($\\rho = 1000\\text{ kg m}^{-3}$)?',
    options: [
      'Because saltwater has higher density, so the weight of displaced saltwater is greater ($F_b \\propto \\rho$)',
      'Because salt absorbs gravity',
      'Because ocean water is colder',
      'Because salt is an ideal fluid'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Upthrust $F_b = \\rho g V$. Since $\\rho_{saltwater} > \\rho_{freshwater}$, each cubic meter of saltwater weighs more, generating larger upward buoyant force.',
    reasonUrdu: 'Wajah: Samandari paani ki density meethay paani sy zyada hoti hai, is liye same volume par upthrust zyada milti hai.',
    formula: 'F_b \\propto \\rho',
    textbookRef: 'Sec 5.7, Page 95-96'
  },
  {
    id: 267,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Apparent Weight of Ice Melting in Water',
    question: 'A piece of ice of volume $V_{ice}$ containing an air bubble floats in a glass of water. When the ice melts completely, what happens to the water level in the glass?',
    options: [
      'It remains unchanged',
      'It rises significantly',
      'It falls significantly',
      'It overflows the glass'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The floating ice displaces a volume of water whose weight equals the weight of the ice. When it melts, it turns into liquid water of identical mass and weight, exactly filling the displaced volume!',
    reasonUrdu: 'Wajah: Ice pighal kar utna hi paani banti hai jitna usne displace kiya tha, is liye level unchanged rehta hai.',
    formula: 'V_{melted} = V_{displaced}',
    textbookRef: 'Sec 5.7, Page 95-96'
  },
  {
    id: 268,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Ice Melting with Embedded Lead Shot',
    question: 'A floating block of ice has a heavy lead pellet embedded inside it. When the ice melts completely, the lead pellet sinks to the bottom. What happens to the water level in the glass?',
    options: [
      'It falls',
      'It rises',
      'It remains unchanged',
      'Water evaporates completely'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'While floating, the lead displaced a volume of water equal to its weight ($V = m_{lead}/\\rho_{water}$). When sunken, it displaces only its own physical volume ($V = m_{lead}/\\rho_{lead}$). Since $\\rho_{lead} \\gg \\rho_{water}$, it displaces less water, so the water level falls!',
    reasonUrdu: 'Wajah: Pehle lead wazan ke barabar paani displace kar raha tha; doobne ke baad sirf apne volume ke barabar displace karta hai, is liye level gir jata hai.',
    formula: 'V_{submerged} = \\frac{m}{\\rho_{lead}} < \\frac{m}{\\rho_{water}}',
    textbookRef: 'Sec 5.7, Page 95-96'
  },
  {
    id: 269,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Reading of a Pan Balance Under Submersion',
    question: 'A beaker of water rests on a weighing scale. A solid brass cylinder hanging from a string held by your hand is lowered into the water without touching the beaker bottom. How does the scale reading change?',
    options: [
      'It increases by the weight of water displaced (equal to the upthrust on the cylinder)',
      'It decreases by the weight of the cylinder',
      'It remains unchanged',
      'It drops to zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'By Newton\'s 3rd Law, if the water pushes upward on the cylinder with buoyant force $F_b$, the cylinder exerts an equal downward reaction force $F_b$ on the water, increasing the scale reading by $F_b = \\rho g V$.',
    reasonUrdu: 'Wajah: Newton ke teesray qanoon ke mutabiq paani par niche ki taraf reaction force Fb lagti hai, jis se scale reading barh jati hai.',
    formula: '\\Delta N = F_b = \\rho g V',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 270,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Hydrometer Operating Principle',
    question: 'A hydrometer used to measure the specific gravity of battery acid or milk operates on which principle?',
    options: [
      'Archimedes\' principle and the law of floatation (it sinks deeper in less dense liquids)',
      'Torricelli\'s theorem',
      'Bernoulli\'s high-speed lift',
      'Stokes\' drag law'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'A hydrometer floats upright. It displaces fluid equal to its own weight ($W = \\rho g V_{sub}$). In lower-density liquids, it must sink deeper to displace sufficient fluid weight, directly indicating density on its stem scale.',
    reasonUrdu: 'Wajah: Hydrometer Archimedes principle par kaam karta hai; kam density wale liquid ma yeh zyada gehra doobta hai.',
    formula: 'V_{sub} = \\frac{W}{\\rho g}',
    textbookRef: 'Sec 5.7, Page 95-96'
  },
  {
    id: 271,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Lactometer Function',
    question: 'A specialized hydrometer designed specifically to test the purity and water dilution of milk is called a:',
    options: ['Lactometer', 'Venturi meter', 'Viscometer', 'Manometer'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'A lactometer measures the specific gravity of milk (pure milk is ~1.028 to 1.032). Dilution with water lowers the density, causing the lactometer to sink deeper.',
    reasonUrdu: 'Wajah: Doodh ki purity check karne ke liye Lactometer use hota hai jo density measure karta hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.7, Page 95-96'
  },
  {
    id: 272,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Buoyancy of an Air-Filled Balloon Submerged Underwater',
    question: 'According to page 94, what happens when an air-filled balloon is pushed under the surface of water and released?',
    options: [
      'It immediately shoots up to the surface because the upthrust is much greater than its weight',
      'It stays submerged at the bottom forever',
      'It sinks deeper',
      'It turns into water'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 94 notes: "An air-filled balloon immediately shoots up to the surface when released under the surface of water... because an upward force acts on an object... called upthrust."',
    reasonUrdu: 'Wajah: Hawa se bhara balloon paani se bohot halka hota hai, is liye upthrust usay tezi se upar shoot karti hai.',
    formula: 'F_b \\gg W',
    textbookRef: 'Sec 5.7, Page 94'
  },
  {
    id: 273,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Pressure Difference in Submerged Cylinder',
    question: 'In Fig. 5.8 (page 95), if $h_1$ is depth of top face and $h_2$ is depth of bottom face ($h_2 - h_1 = h$), what is the pressure difference between the bottom and top faces?',
    options: [
      '$P_2 - P_1 = \\rho g (h_2 - h_1) = \\rho g h$',
      '$P_2 - P_1 = \\frac{1}{2} \\rho v^2$',
      '$P_2 - P_1 = \\rho g (h_2 + h_1)$',
      '$P_2 - P_1 = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 95, Eq 5.9: "$P_1 = \\rho g h_1$ and $P_2 = \\rho g h_2$. Pressure difference $\\Delta P = P_2 - P_1 = \\rho g (h_2 - h_1) = \\rho g h$."',
    reasonUrdu: 'Wajah: Eq 5.9 ke mutabiq gehrai ka farq h hone par dabao ka farq \\rho g h hota hai.',
    formula: 'P_2 - P_1 = \\rho g h',
    textbookRef: 'Sec 5.7, Eq 5.9, Page 95'
  },
  {
    id: 274,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Upthrust on Body in Vacuum',
    question: 'What is the upthrust acting on an object suspended in a total vacuum ($\\rho = 0$)?',
    options: ['Zero ($0\\text{ N}$)', 'Equal to its mass', 'Infinite', '$-9.8\\text{ N}$'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Since vacuum contains zero fluid molecules ($\\rho = 0$), $F_b = \\rho g V = 0$. The measured weight in vacuum is the true weight.',
    reasonUrdu: 'Wajah: Vacuum ma koi fluid nahi hota (\\rho = 0), is liye upthrust zero hoti hai aur asal wazan milta hai.',
    formula: 'F_b = 0 \\quad (\\text{vacuum})',
    textbookRef: 'Sec 5.7, Page 95'
  },
  {
    id: 275,
    module: 'K',
    moduleName: 'Archimedes\' Principle & Buoyancy',
    topic: 'Summary of Sinking vs Floating Criteria',
    question: 'According to page 96, an object sinks into a fluid if its weight is:',
    options: [
      'Greater than the upthrust acting on it ($W > F_b$, or $\\rho_{object} > \\rho_{fluid}$)',
      'Less than the upthrust',
      'Equal to the upthrust',
      'Zero'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 96: "An object sinks into a fluid if its weight is greater than the upthrust acting on it. However, an object floats if its weight is equal or less than the upthrust."',
    reasonUrdu: 'Wajah: Jab jism ka wazan upthrust se zyada ho (W > Fb) to wo fluid ma doob jata hai.',
    formula: 'W > F_b \\implies \\text{Sinks}',
    textbookRef: 'Sec 5.7, Page 96'
  },

  // ==========================================
  // MODULE L: Principle of Floatation, Ships, Submarines & Balloons (MCQs 276-300)
  // ==========================================
  {
    id: 276,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Principle of Floatation Statement',
    question: 'According to page 96 of the textbook, what does the Principle of Floatation state?',
    options: [
      'A floating object displaces a fluid having weight equal to the weight of the object',
      'A floating object displaces its own volume of fluid',
      'A floating object experiences zero gravitational pull',
      'A floating object has zero mass'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 96 explicitly defines: "The principle of floatation states that: A floating object displaces a fluid having weight equal to the weight of the object."',
    reasonUrdu: 'Wajah: Page 96 ke mutabiq tairta hua jism apne wazan ke barabar fluid displace karta hai.',
    formula: 'W_{object} = W_{fluid displaced}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 277,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Fraction of Volume Submerged',
    question: 'If a solid object of density $\\rho_s$ and total volume $V_s$ floats in a liquid of density $\\rho_L$, what fraction of its volume is submerged ($V_{sub} / V_s$)?',
    options: [
      '$\\frac{V_{sub}}{V_s} = \\frac{\\rho_s}{\\rho_L}$',
      '$\\frac{V_{sub}}{V_s} = \\frac{\\rho_L}{\\rho_s}$',
      '$\\frac{V_{sub}}{V_s} = \\rho_s \\rho_L$',
      '$\\frac{V_{sub}}{V_s} = 1$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Equilibrium of floating requires: Weight = Upthrust $\\implies \\rho_s g V_s = \\rho_L g V_{sub} \\implies \\frac{V_{sub}}{V_s} = \\frac{\\rho_s}{\\rho_L}$.',
    reasonUrdu: 'Wajah: Floatation equilibrium ma W = Fb hota hai, is liye submerged volume ka fraction \\rho_solid / \\rho_liquid banta hai.',
    formula: '\\frac{V_{sub}}{V_s} = \\frac{\\rho_s}{\\rho_L}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 278,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Brain Teaser on Page 95: Steel Ship vs Rock',
    question: 'In the Brain Teaser on page 95: Why does a massive ship made of heavy steel float on water while a tiny small rock sinks?',
    options: [
      'The ship is hollow with a vast internal volume containing air, so its average density is far less than water, displacing water weight equal to its entire weight',
      'Steel is naturally lighter than rock',
      'Water repels steel magnetically',
      'The ship uses engines to stay afloat'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 95 & 96: A rock has density $\\approx 2500\\text{ kg/m}^3 > 1000\\text{ kg/m}^3$, so weight exceeds upthrust and it sinks. A steel ship is designed with a hollow hull enclosing huge volumes of air, making its average density ($M_{total}/V_{total}$) much less than water ($1000\\text{ kg/m}^3$).',
    reasonUrdu: 'Wajah: Jahaz andar se khokhla (hollow) hota hai jis se uski average density paani se kam hoti hai aur wo apne wazan ke barabar paani displace karta hai.',
    formula: '\\rho_{avg, ship} < \\rho_{water}',
    textbookRef: 'Brain Teaser & Sec 5.7, Page 95-96'
  },
  {
    id: 279,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Application: Hot-Air Balloon',
    question: 'According to page 96, why does a hot-air balloon rise and float in mid-air (Fig. 5.9)?',
    options: [
      'Heating the air inside expands it, lowering its density compared to surrounding cooler air; the upthrust of surrounding air exceeds its weight',
      'Hot air is attracted to the sun',
      'The balloon has zero mass when heated',
      'Bernoulli lift acts on top of the balloon'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 96: "Hot-air balloon: The reason why hot-air balloons rise and float in mid-air is because the density of the hot-air balloon is less than the surrounding air. When the upthrust of the surrounding air is more, it starts to rise."',
    reasonUrdu: 'Wajah: Hawa garam hone par phailti hai aur uski density kam hoti hai; bahir ki thandi hawa ka upthrust wazan se zyada ho kar usay upar uthata hai.',
    formula: '\\rho_{hot air} < \\rho_{cold air}',
    textbookRef: 'Sec 5.7, Fig 5.9, Page 96'
  },
  {
    id: 280,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Application: Submarine Mechanics',
    question: 'According to page 96-97, how does a submarine travel underwater and return to the surface?',
    options: [
      'It has ballast tanks: filling tanks with seawater increases total weight so it sinks ($W > F_b$); blowing seawater out with compressed air makes it lighter to surface ($W \\le F_b$)',
      'By turning off its electrical generator',
      'By changing its shape from spherical to flat',
      'By heating the water around it into steam'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 96-97: "Submarine: A submarine can travel over as well as under water... It has a system of tanks which can be filled with and emptied from seawater. As soon as its weight becomes greater than upthrust, it dives... To come up on surface, tanks are made empty."',
    reasonUrdu: 'Wajah: Submarine ke ballast tanks ma paani bharne se wazan upthrust se barhta hai aur wo doobti hai; compressed air se paani nikalne par wapis surface par aati hai.',
    formula: 'W > F_b \\implies \\text{Dives}, \\quad W \\le F_b \\implies \\text{Surfaces}',
    textbookRef: 'Sec 5.7, Fig 5.10(b), Page 96-97'
  },
  {
    id: 281,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Example 5.3: Meteorological Balloon Specs',
    question: 'In textbook Example 5.3 (page 97), an empty meteorological balloon weighs $80\\text{ N}$ and is filled with $10\\text{ m}^3$ of hydrogen ($\\rho_{H_2} = 0.09\\text{ kg m}^{-3}$). What is the weight of the hydrogen gas inside?',
    options: [
      '8.82 N',
      '80 N',
      '127.4 N',
      '0.9 N'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 97 Example 5.3: Weight of hydrogen $w_1 = \\rho_1 g V = (0.09\\text{ kg/m}^3) \\times (10\\text{ m}^3) \\times (9.8\\text{ m/s}^2) = 8.82\\text{ N}$.',
    reasonUrdu: 'Wajah: Example 5.3 ke mutabiq w1 = \\rho1 g V = 0.09 x 10 x 9.8 = 8.82 N.',
    formula: 'w_1 = \\rho_{H_2} g V',
    textbookRef: 'Example 5.3, Page 97'
  },
  {
    id: 282,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Example 5.3: Upthrust of Air on Balloon',
    question: 'In Example 5.3 (page 97), the balloon of volume $10\\text{ m}^3$ is surrounded by air of density $\\rho_{air} = 1.3\\text{ kg m}^{-3}$. What is the total upthrust ($F$) exerted by the air on the balloon?',
    options: [
      '127.4 N',
      '80 N',
      '38.58 N',
      '8.82 N'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 97 Example 5.3: Upthrust $F = \\text{Weight of air displaced} = \\rho_2 g V = (1.3\\text{ kg/m}^3) \\times (9.8\\text{ m/s}^2) \\times (10\\text{ m}^3) = 127.4\\text{ N}$.',
    reasonUrdu: 'Wajah: Upthrust = displaced air ka wazan = 1.3 x 9.8 x 10 = 127.4 N.',
    formula: 'F = \\rho_{air} g V',
    textbookRef: 'Example 5.3, Page 97'
  },
  {
    id: 283,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Example 5.3: Maximum Payload Lifted',
    question: 'In Example 5.3 (page 97), what is the maximum payload contents weight ($w_2$) that the balloon can lift in addition to its own weight ($80\\text{ N}$) and hydrogen weight ($8.82\\text{ N}$)?',
    options: [
      '38.58 N',
      '127.4 N',
      '47.4 N',
      '80 N'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 97 Example 5.3: Total lifted weight must not exceed upthrust: $w + w_1 + w_2 = F \\implies 80 + 8.82 + w_2 = 127.4 \\implies w_2 = 127.4 - 88.82 = 38.58\\text{ N}$.',
    reasonUrdu: 'Wajah: Total upthrust 127.4 N hai; balloon (80 N) aur hydrogen (8.82 N) nikal kar payload w2 = 127.4 - 88.82 = 38.58 N banta hai.',
    formula: 'w_2 = F - (w + w_1)',
    textbookRef: 'Example 5.3, Page 97'
  },
  {
    id: 284,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Submerged Fraction of Iceberg in Sea',
    question: 'Given the density of ice is $917\\text{ kg m}^{-3}$ and sea water is $1025\\text{ kg m}^{-3}$, what fraction of an iceberg\'s volume remains submerged below sea level?',
    options: [
      '$89.5\\%$ (nearly $90\\%$)',
      '$10.5\\%$',
      '$50\\%$',
      '$100\\%$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Submerged fraction $\\frac{V_{sub}}{V_{total}} = \\frac{\\rho_{ice}}{\\rho_{seawater}} = \\frac{917}{1025} \\approx 0.895 = 89.5\\%$. Only $\\approx 10.5\\%$ of an iceberg is visible above water!',
    reasonUrdu: 'Wajah: Fraction = 917 / 1025 = 0.895 (taqreeban 90% iceberg paani ke niche rehta hai).',
    formula: '\\frac{V_{sub}}{V} = \\frac{\\rho_{ice}}{\\rho_{water}}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 285,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Wood Block Floating on Water',
    question: 'According to page 96, a wooden block floats on water because:',
    options: [
      'The weight of an equal volume of water is greater than the weight of the block ($\\rho_{wood} < \\rho_{water}$)',
      'The wood has zero weight',
      'The wood is soluble in water',
      'The air pushes it down'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 96: "A wooden block floats on water... because the weight of an equal volume of water is greater than the weight of the block."',
    reasonUrdu: 'Wajah: Lakdi ki density paani se kam hoti hai, is liye uske barabar volume ka paani lakdi se zyada bhaari hota hai.',
    formula: '\\rho_{wood} < \\rho_{water}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 286,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Plimsoll Line on Ships',
    question: 'Why are commercial cargo ships painted with horizontal reference lines (Plimsoll line / load line) on their hull?',
    options: [
      'To indicate the maximum legal loading limit in different water densities (saltwater vs freshwater, warm vs cold) to prevent sinking',
      'To serve as decorative racing stripes',
      'To measure ship speed',
      'To prevent barnacles from attaching'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Because water density varies with temperature and salinity, a ship sinks deeper in freshwater than saltwater for the same cargo weight. Plimsoll lines prevent overloading.',
    reasonUrdu: 'Wajah: Plimsoll line safe loading limit batati hai taake jahaz mukhtalif paani (fresh vs saltwater) ma safe depth tak doobay.',
    formula: 'N/A',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 287,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Ship Entering River from Ocean',
    question: 'When a fully loaded cargo ship sails from the dense ocean into a freshwater river (where water density is lower), what happens to the ship?',
    options: [
      'It sinks slightly deeper into the water to displace a larger volume of less dense freshwater',
      'It rises higher out of the water',
      'Its total mass decreases',
      'Its engine power drops to zero'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The ship\'s weight $W$ is unchanged. Since $W = \\rho_{fluid} g V_{sub}$, lower freshwater density $\\rho$ requires a larger submerged volume $V_{sub}$, so the ship settles deeper.',
    reasonUrdu: 'Wajah: Darya ke meethay paani ki density kam hoti hai, is liye apne wazan ko balance karne ke liye jahaz thora aur niche doobta hai.',
    formula: 'V_{sub} \\propto \\frac{1}{\\rho_{water}}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 288,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Metacenter and Marine Stability',
    question: 'In naval architecture, what ensures that a floating ship returns upright after being tilted by ocean waves (stable equilibrium)?',
    options: [
      'The metacenter $M$ must lie ABOVE the center of gravity $G$ of the ship',
      'The metacenter must lie below the ship\'s keel',
      'The ship must be completely spherical',
      'The ballast tanks must be full of oil'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'When tilted, the center of buoyancy shifts. If the metacenter $M$ (intersection of vertical buoyant force with original vertical centerline) is above center of gravity $G$ ($GM > 0$), a restoring righting couple is created.',
    reasonUrdu: 'Wajah: Jahaz ki stability ke liye Metacenter (M) hamesha Center of Gravity (G) ke upar hona chahiye taake restoring torque banay.',
    formula: 'GM > 0 \\quad (\\text{Stable})',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 289,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Neutral Buoyancy Condition',
    question: 'When a scuba diver or submarine adjusts buoyancy so that their average density exactly matches the surrounding water density ($\\rho_{avg} = \\rho_{water}$), they achieve:',
    options: ['Neutral buoyancy (remains suspended at current depth without sinking or floating)', 'Positive buoyancy', 'Negative buoyancy', 'Superfluidity'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'At neutral buoyancy, $W = F_b$. The net vertical force is zero, allowing the object to remain at rest at any chosen depth in the fluid.',
    reasonUrdu: 'Wajah: Jab average density paani ke barabar ho to W = Fb hota hai aur diver us gehrai par muallaq (suspended) rehta hai.',
    formula: 'W = F_b \\implies F_{net} = 0',
    textbookRef: 'Sec 5.7, Page 96-97'
  },
  {
    id: 290,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Submarine Surfacing Emergency: Compressed Air',
    question: 'In an emergency ascent, a submarine surfaces rapidly by using high-pressure compressed air flasks to:',
    options: [
      'Force all seawater out of the main ballast tanks through bottom flood ports, rapidly reducing total weight',
      'Spin the propeller in reverse',
      'Cool down the engine room',
      'Evaporate the ocean'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Blowing ballast tanks expels high-density seawater and replaces it with low-density compressed air, making $W \\ll F_b$ so the submarine rockets to the surface.',
    reasonUrdu: 'Wajah: Compressed air se paani ko ballast tanks sy bahir nikal phenka jata hai jis se submarine ka wazan foran kam ho jata hai.',
    formula: 'W \\ll F_b',
    textbookRef: 'Sec 5.7, Page 96-97'
  },
  {
    id: 291,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Helium vs Hydrogen in Airships',
    question: 'Although hydrogen has a lower density than helium ($0.09\\text{ kg m}^{-3}$ vs $0.18\\text{ kg m}^{-3}$) giving slightly more lift, why is helium universally used in modern blimps?',
    options: [
      'Helium is completely inert and non-flammable, avoiding catastrophic fires (like the Hindenburg disaster)',
      'Helium is a solid',
      'Helium is heavier than air',
      'Helium produces sound waves'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Hydrogen forms explosive mixtures with air. Helium provides $\\approx 93\\%$ of hydrogen\'s lifting capacity ($1.3 - 0.18 = 1.12\\text{ kg/m}^3$ vs $1.3 - 0.09 = 1.21\\text{ kg/m}^3$) with zero fire danger.',
    reasonUrdu: 'Wajah: Hydrogen aag pakad leti hai jab ke Helium ghair-aag-geer (non-flammable) gas hai jo mehfooz rehti hai.',
    formula: '\\text{Lift}_{He} \\approx 93\\% \\text{ of } \\text{Lift}_{H_2}',
    textbookRef: 'Sec 5.7, Page 96-97'
  },
  {
    id: 292,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Cartesian Diver Demonstration',
    question: 'In the classic physics toy "Cartesian Diver" (a small eyedropper inside a flexible sealed water bottle), squeezing the bottle causes the diver to sink because:',
    options: [
      'Increased water pressure compresses the trapped air bubble inside the dropper, decreasing displaced volume and increasing average density until $W > F_b$',
      'The bottle gets hotter',
      'The water viscosity drops to zero',
      'Gravity increases'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Squeezing compresses the air bubble inside the diver. Water enters the diver, raising its total weight and density above that of water, causing it to sink.',
    reasonUrdu: 'Wajah: Bottle dabane se diver ki air compress hoti hai aur paani andar dakhil hota hai jis se diver bhaari ho kar doob jata hai.',
    formula: 'V_{bubble} \\downarrow \\implies \\rho_{diver} > \\rho_w',
    textbookRef: 'Sec 5.7, Page 96-97'
  },
  {
    id: 293,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Hydrometer Stem Calibration',
    question: 'Why are the graduation marks on a hydrometer stem spaced closer together at the bottom and farther apart near the top?',
    options: [
      'Because submerged volume varies inversely with liquid density ($V_{sub} \\propto 1/\\rho$), producing a non-linear reciprocal scale',
      'Due to manufacturer printing errors',
      'Because gravity varies along the stem',
      'Because the glass expands at the top'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Since $V_{sub} = W / (\\rho g)$, stem submergence $y$ relates to density via $y \\propto 1/\\rho$. The derivative $dy/d\\rho \\propto -1/\\rho^2$, meaning equal increments of $\\Delta\\rho$ produce larger height steps at low densities (near the top).',
    reasonUrdu: 'Wajah: Submerged volume density ke reciprocal (1/\\rho) ke proportional hota hai, is liye scale non-linear hoti hai.',
    formula: 'y \\propto \\frac{1}{\\rho}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 294,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Maximum Cargo Capacity Calculation',
    question: 'A flat barge of mass $50{,}000\\text{ kg}$ has a rectangular footprint of $20\\text{ m} \\times 10\\text{ m}$ and height $3\\text{ m}$. What is the maximum load of cargo it can carry before sinking in freshwater ($\\rho = 1000\\text{ kg m}^{-3}$)?',
    options: [
      '$550{,}000\\text{ kg}$ (550 metric tons)',
      '$600{,}000\\text{ kg}$',
      '$50{,}000\\text{ kg}$',
      '$100{,}000\\text{ kg}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Total displacement volume $= 20 \\times 10 \\times 3 = 600\\text{ m}^3$. Maximum water displaced $= 600 \\times 1000 = 600{,}000\\text{ kg}$. Subtracting barge mass: $M_{cargo} = 600{,}000 - 50{,}000 = 550{,}000\\text{ kg}$.',
    reasonUrdu: 'Wajah: Total volume = 600 m^3; max upthrust mass = 600,000 kg; barge ka apna mass 50,000 kg nikal kar 550,000 kg cargo utha sakti hai.',
    formula: 'M_{cargo} = \\rho V_{max} - M_{barge}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 295,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Fish Swim Bladder Function',
    question: 'How do bony fish maintain neutral buoyancy at varying depths without expending energy swimming?',
    options: [
      'By adjusting the gas volume in their internal swim bladder to match overall body density to the surrounding water density',
      'By drinking large volumes of oil',
      'By changing their body temperature',
      'By shedding their scales'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'The swim bladder functions like a submarine\'s ballast tank: gas is diffused into or out of the bladder to adjust volume $V$ and keep $\\rho_{fish} = \\rho_{water}$.',
    reasonUrdu: 'Wajah: Machli ka swim bladder gas bharta aur nikalta hai taake uski overall density paani ke barabar rahe.',
    formula: '\\rho_{fish} = \\rho_{water}',
    textbookRef: 'Sec 5.7, Page 96-97'
  },
  {
    id: 296,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Floating Wooden Cube: Edge Submerged',
    question: 'A wooden cube of side $L = 10\\text{ cm}$ and density $700\\text{ kg m}^{-3}$ floats in water ($\\rho = 1000\\text{ kg m}^{-3}$). What depth $h$ of the cube is submerged underwater?',
    options: ['7.0 cm', '3.0 cm', '5.0 cm', '10.0 cm'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$\\frac{h}{L} = \\frac{\\rho_{wood}}{\\rho_{water}} = \\frac{700}{1000} = 0.70 \\implies h = 0.70 \\times 10\\text{ cm} = 7.0\\text{ cm}$.',
    reasonUrdu: 'Wajah: h / L = 700 / 1000 = 0.7; is liye submerged depth h = 7.0 cm hogi.',
    formula: 'h = L \\frac{\\rho_s}{\\rho_L}',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 297,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Floating Wooden Cube: Height Above Water',
    question: 'For the same floating wooden cube (side $10\\text{ cm}$, density $700\\text{ kg m}^{-3}$), what height of the cube remains visible ABOVE the water surface?',
    options: ['3.0 cm', '7.0 cm', '5.0 cm', '1.0 cm'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Height above water $= L - h = 10\\text{ cm} - 7.0\\text{ cm} = 3.0\\text{ cm}$.',
    reasonUrdu: 'Wajah: Total 10 cm ma se 7 cm paani ke andar hai to 10 - 7 = 3.0 cm paani ke upar nazar aayega.',
    formula: 'h_{above} = L(1 - \\rho_s/\\rho_L)',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 298,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Weather Balloon Altitude Ceiling',
    question: 'Why does a weather balloon filled with helium or hydrogen stop rising once it reaches a certain high altitude?',
    options: [
      'Atmospheric air density decreases with altitude; when air density drops until upthrust equals total balloon weight ($F_b = W$), it reaches equilibrium ceiling',
      'The temperature reaches absolute zero',
      'Gravity becomes too strong',
      'The gas inside turns into a solid'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'As altitude increases, air density $\\rho_{air}$ decreases exponentially. The buoyant force $F_b = \\rho_{air} g V$ drops until $F_b = W_{total}$, at which point net upward force becomes zero.',
    reasonUrdu: 'Wajah: Bulandi par hawa ki density kam hoti jati hai; jab upthrust balloon ke wazan ke barabar ho jati hai to balloon mazeed upar nahi jata.',
    formula: '\\rho_{air}(z) g V = W_{total}',
    textbookRef: 'Sec 5.7, Page 96-97'
  },
  {
    id: 299,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Apparent Weight of Floating Body',
    question: 'What is the apparent weight of ANY object floating freely in equilibrium on the surface of a liquid?',
    options: ['Strictly zero', 'Equal to its mass', 'Equal to atmospheric pressure', 'Twice its true weight'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'For any floating object, upward buoyant force equals true weight ($F_b = W$). Therefore apparent weight $W_{app} = W - F_b = 0$. (A scale placed beneath it in water would read zero!)',
    reasonUrdu: 'Wajah: Tairte huye jism par Upthrust aur Wazan barabar hotay hain (Fb = W), is liye apparent weight zero hota hai.',
    formula: 'W_{app} = W - F_b = 0',
    textbookRef: 'Sec 5.7, Page 96'
  },
  {
    id: 300,
    module: 'L',
    moduleName: 'Floatation & Marine Mechanics',
    topic: 'Block Floating at Interface of Two Liquids',
    question: 'A solid block of density $\\rho$ floats at the interface between oil (density $\\rho_1$) and water (density $\\rho_2 > \\rho_1$) with $\\rho_1 < \\rho < \\rho_2$. What condition governs its equilibrium?',
    options: [
      '$\\rho V = \\rho_1 V_1 + \\rho_2 V_2$, where $V_1 + V_2 = V$',
      '$\\rho = \\rho_1 + \\rho_2$',
      '$\\rho = \\frac{\\rho_1 + \\rho_2}{2}$ regardless of volume',
      'The block must dissolve'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Total weight $W = \\rho g V$. Total buoyant force $F_b = \\rho_1 g V_1 + \\rho_2 g V_2$. Equating gives $\\rho V = \\rho_1 V_1 + \\rho_2 V_2$, allowing exact calculation of the fraction submerged in each liquid.',
    reasonUrdu: 'Wajah: Total wazan dono liquids ke displaced hissay ke upthrust ke barabar hota hai: \\rho V = \\rho1 V1 + \\rho2 V2.',
    formula: '\\rho V = \\rho_1 V_1 + \\rho_2 V_2',
    textbookRef: 'Sec 5.7, Page 96'
  },

  // ==========================================
  // MODULE M: Fluid Dynamics: Streamlines, Laminar vs Turbulent & Ideal Fluids (MCQs 301-325)
  // ==========================================
  {
    id: 301,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Definition of Steady (Streamline) Flow',
    question: 'According to Section 5.8 on page 98, how is steady (streamline or laminar) flow defined?',
    options: [
      'If every particle that passes a particular point moves along exactly the same path, as followed by particles which passed that point earlier',
      'A flow where fluid moves at the speed of sound',
      'A chaotic flow with whirlpools and eddies',
      'A flow that only occurs inside a vacuum'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98 explicitly defines: "If every particle that passes a particular point, moves along exactly the same path, as followed by particles which passed that points earlier, the flow is called steady or streamline flow."',
    reasonUrdu: 'Wajah: Page 98 ke mutabiq steady/streamline flow wo hota hai jahan har particle pehle guzarne wale particle ke naqsh-e-qadam par chalta hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 302,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Definition of Streamline',
    question: 'According to page 98, what is a "streamline"?',
    options: [
      'The smooth curve whose tangent at any point gives the direction of fluid velocity at that point',
      'A line dividing water from oil',
      'The boundary wall of a pipe',
      'A shock wave in supersonic air'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98 states: "The smooth path followed by fluid particles in laminar flow is called a streamline. The streamline may be straight or curved and tangent to any point gives the direction of flow of a fluid."',
    reasonUrdu: 'Wajah: Streamline wo path hai jis par kisi bhi point par khencha gaya tangent fluid velocity ki direction batata hai.',
    formula: '\\vec{v} \\parallel \\text{Tangent to streamline}',
    textbookRef: 'Sec 5.8, Fig 5.11, Page 98'
  },
  {
    id: 303,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Why Streamlines Never Cross',
    question: 'According to page 98, can two streamlines ever cross or intersect each other in steady flow?',
    options: [
      'No, because if they crossed, a fluid particle at the intersection would have two different flow directions simultaneously, which is physically impossible',
      'Yes, they cross constantly in steady flow',
      'Only if the fluid is mercury',
      'Only when flowing downhill'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98 explicitly emphasizes: "The different streamlines cannot cross each other. If two streamlines cross each other, then the particles will go in one or in the other directions and flow will not be a steady flow."',
    reasonUrdu: 'Wajah: Streamlines kabhi aapas ma cross nahi kar saktin kyun ke cross karne par ek hi point par velocity ki do directions ban jayengi jo namumkin hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 304,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Turbulent Flow Definition',
    question: 'According to Section 5.8 on page 98, how is "turbulent flow" defined?',
    options: [
      'The irregular or unsteady flow of fluid characterized by eddies and whirlpools with continually changing particle paths',
      'Flow with zero velocity',
      'Flow in which fluid moves in parallel sheets',
      'Flow in a straight vacuum tube'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98 defines: "Turbulent Flow: The irregular or unsteady flow of the fluid is called turbulent flow. In a turbulent flow, the motion of the fluid becomes unsteady and irregular... there are eddies and whirlpools in the motion and the paths of the particles are continuously changing."',
    reasonUrdu: 'Wajah: Page 98 ke mutabiq be-tarteeb aur unsteady flow jahan bhanwar (eddies/whirlpools) bante hain Turbulent Flow kehlata hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8, Fig 5.13, Page 98'
  },
  {
    id: 305,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Critical Velocity Concept',
    question: 'The maximum threshold velocity up to which fluid flow remains smooth and streamline, and above which it becomes turbulent, is called:',
    options: ['Critical velocity ($v_c$)', 'Terminal velocity ($v_t$)', 'Speed of efflux', 'Escape velocity'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98 states: "Above a certain velocity of the fluid flow, the motion of the fluid becomes unsteady and irregular." This threshold is known as the critical velocity.',
    reasonUrdu: 'Wajah: Wo hadd wali velocity jis se aage streamline flow toot kar turbulent ban jata hai Critical Velocity kehlati hai.',
    formula: 'v_c = \\frac{R_e \\eta}{\\rho D}',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 306,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Four Conditions for an Ideal Fluid',
    question: 'According to Section 5.8 (page 98-99), what four conditions must a fluid satisfy to be classified as an "ideal fluid"?',
    options: [
      '1. Non-viscous (no internal friction), 2. Incompressible (constant density), 3. Steady flow, 4. Irrotational flow',
      '1. Infinite density, 2. Highly viscous, 3. Turbulent, 4. Compressible',
      '1. Superheated, 2. Magnetic, 3. Metallic, 4. Radioactive',
      '1. Zero temperature, 2. High pressure, 3. Solid, 4. Transparent'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98-99 lists: "The behaviour of the fluid which satisfies the following conditions is called ideal fluid: 1. The fluid is non-viscous i.e., there is no frictional force between adjacent layers. 2. The fluid is incompressible i.e., its density is constant. 3. The fluid motion is steady."',
    reasonUrdu: 'Wajah: Kitab ke mutabiq Ideal fluid ki 4 sharaait hain: Non-viscous, Incompressible, Steady flow, aur Irrotational.',
    formula: '\\eta = 0, \\quad \\rho = \\text{const}, \\quad \\frac{\\partial v}{\\partial t} = 0',
    textbookRef: 'Sec 5.8, Page 98-99'
  },
  {
    id: 307,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Non-Viscous Fluid Condition',
    question: 'According to page 98, what does it mean that an ideal fluid is "non-viscous"?',
    options: [
      'There is no internal frictional force or viscous drag between adjacent sliding layers of the fluid',
      'The fluid has zero mass',
      'The fluid cannot flow through a pipe',
      'The fluid evaporates immediately'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98 states: "1. The fluid is non-viscous i.e., there is no frictional force between adjacent layers of the fluid."',
    reasonUrdu: 'Wajah: Non-viscous ka matlab hai fluid ki layers ke darmiyan koi aapas ki friction ya viscous drag nahi hoti.',
    formula: '\\eta = 0',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 308,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Incompressible Fluid Condition',
    question: 'According to page 99, what does it mean that an ideal fluid is "incompressible"?',
    options: [
      'Its density $\\rho$ remains strictly constant throughout the entire flow regardless of pressure changes',
      'Its volume expands to infinity',
      'It cannot move inside a pipe',
      'Its temperature is always $0\\,^\\circ\\text{C}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 99: "2. The fluid is incompressible i.e., its density is constant."',
    reasonUrdu: 'Wajah: Incompressible fluid wo hota hai jiski density dabao badalne se tabdeel na ho (\\rho = constant).',
    formula: '\\rho = \\text{Constant}',
    textbookRef: 'Sec 5.8, Page 99'
  },
  {
    id: 309,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Steady Motion Condition',
    question: 'According to page 99, what does condition 3 ("The fluid motion is steady") mean mathematically at any point?',
    options: [
      'Velocity, pressure, and density at any fixed point do not change with time ($\\partial v / \\partial t = 0$)',
      'Velocity is the same everywhere in the universe',
      'Velocity is zero everywhere',
      'The fluid travels in a circle'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'In steady flow, while velocity may differ at different spatial coordinates ($v_A \\neq v_B$), at any given point $P$, the velocity vector is independent of time.',
    reasonUrdu: 'Wajah: Steady flow ma kisi aik point par velocity waqt ke sath tabdeel nahi hoti (time-independent).',
    formula: '\\frac{\\partial \\vec{v}}{\\partial t} = 0',
    textbookRef: 'Sec 5.8, Page 99'
  },
  {
    id: 310,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Existence of Ideal Fluids',
    question: 'According to Section 5.15 on page 107-108, does a truly "ideal fluid" actually exist in nature?',
    options: [
      'No, ideal fluids do not exist in the real world; it is a theoretical mathematical model (all real fluids possess some viscosity)',
      'Yes, ordinary drinking water is 100% ideal',
      'Yes, olive oil is an ideal fluid',
      'Yes, atmospheric air is an ideal fluid'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 107-108 explicitly states: "Comparison of Ideal and Real Fluids: An example of ideal fluid cannot be provided because it does not exist in the real world. However, every fluid that we see around us like water, diesel, petrol, honey, etc. are real fluids."',
    reasonUrdu: 'Wajah: Kitab ma wazeh likha hai ke Ideal fluid haqeeqat ma exist nahi karta; yeh sirf physics ki theoretical assumption hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.15, Page 107-108'
  },
  {
    id: 311,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Streamline Body Design in Nature & Racing Cars',
    question: 'According to the illustrations on page 98 (Fig. 5.13 and "For Your Information"), why do Formula One racing cars, jet aircraft, and dolphins have streamlined tapered shapes?',
    options: [
      'To promote smooth laminar airflow/waterflow and minimize turbulent eddies and viscous form drag',
      'To make them look shiny',
      'To increase their gravitational attraction',
      'To increase fuel consumption'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98: "Formula One racing cars have a streamlined design... Dolphins have streamlined bodies to assist their movement in water." Streamlining delays flow separation and eliminates turbulent wake drag.',
    reasonUrdu: 'Wajah: Streamlined shape se hawa/paani smooth guzarta hai aur turbulent eddies nahi bante jis se drag bohot kam ho jata hai.',
    formula: 'F_{drag} \\downarrow',
    textbookRef: 'Sec 5.8, Fig 5.13, Page 98'
  },
  {
    id: 312,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Streamline Tube of Flow',
    question: 'A bundle or collection of adjacent streamlines forming a tubular boundary that no fluid can cross is called a:',
    options: ['Tube of flow', 'Vortex line', 'Torricelli tube', 'Searle\'s cylinder'],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'A tube of flow is bounded by streamlines. Since fluid velocity is always tangent to streamlines, no fluid can cross the boundary walls of a tube of flow.',
    reasonUrdu: 'Wajah: Streamlines ke bundle se banne wali tube ko Tube of Flow kehte hain; iski deewaro se bahir fluid cross nahi kar sakta.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8 & 5.9, Page 98-99'
  },
  {
    id: 313,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Velocity of Particles Along a Streamline',
    question: 'In Fig. 5.12 on page 98, fluid flows along streamline PQR. The velocity of a particle at point P is $v_1$, at Q is $v_2$, and at R is $v_3$. Which statement is true in steady flow?',
    options: [
      'Every particle passing point P has velocity $v_1$, at Q has velocity $v_2$, and at R has velocity $v_3$; these velocities do not change with the passage of time',
      'The velocity at all points P, Q, and R must be identical in magnitude and direction',
      'The velocity at point P changes wildly every second',
      'The particle stops completely at point Q'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 98: "If the velocity of a particle of the fluid at P, Q and R does not change with the passage of time, then the flow is said to be steady flow or streamline flow." Particles accelerate from point to point, but the flow field at each fixed point is time-invariant.',
    reasonUrdu: 'Wajah: Fig 5.12 ke mutabiq P, Q aur R par velocities mukhtalif ho sakti hain magar waqt ke sath us makhsoos point par velocity constant rehti hai.',
    formula: '\\vec{v}(P) = \\vec{v}_1 = \\text{const}',
    textbookRef: 'Sec 5.8, Fig 5.12, Page 98'
  },
  {
    id: 314,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Reynolds Number Concept',
    question: 'The dimensionless number that predicts whether fluid flow in a pipe will be laminar or turbulent based on inertial and viscous forces is the:',
    options: ['Reynolds number ($R_e$)', 'Mach number', 'Poisson\'s ratio', 'Euler number'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Reynolds number $R_e = \\frac{\\rho v D}{\\eta}$ is the ratio of inertial forces to viscous forces. For pipe flow, $R_e < 2000$ is laminar, while $R_e > 3000$ is turbulent.',
    reasonUrdu: 'Wajah: Reynolds number Re = (\\rho v D) / \\eta flow ke laminar ya turbulent hone ka faisla karta hai.',
    formula: 'R_e = \\frac{\\rho v D}{\\eta}',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 315,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Physical Meaning of Reynolds Number',
    question: 'What is the physical ratio represented by the Reynolds number ($R_e$)?',
    options: [
      '$\\frac{\\text{Inertial forces}}{\\text{Viscous forces}}$',
      '$\\frac{\\text{Buoyant force}}{\\text{Gravity}}$',
      '$\\frac{\\text{Stress}}{\\text{Strain}}$',
      '$\\frac{\\text{Pressure}}{\\text{Velocity}}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Reynolds number is defined as $R_e = \\frac{\\text{Inertial Force}}{\\text{Viscous Force}} = \\frac{\\rho v^2 / L}{\\eta v / L^2} = \\frac{\\rho v L}{\\eta}$.',
    reasonUrdu: 'Wajah: Reynolds number Inertial force aur Viscous force ke ratio ko zahir karta hai.',
    formula: 'R_e = \\frac{F_{inertial}}{F_{viscous}}',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 316,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Irrotational Flow Condition',
    question: 'A fluid flow is termed "irrotational" if:',
    options: [
      'An element of fluid has zero net angular velocity about its own center of mass (curl $\\vec{v} = 0$)',
      'The fluid travels in a straight line without bending',
      'The fluid cannot flow through curved pipes',
      'The fluid is solid'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'In irrotational flow, a small paddle wheel placed in the fluid moves along streamlines without rotating about its own axis: $\\nabla \\times \\vec{v} = 0$.',
    reasonUrdu: 'Wajah: Irrotational flow ma fluid element apne center ke gird ghoomta nahi hai (zero vorticity).',
    formula: '\\nabla \\times \\vec{v} = 0',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 317,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Streamline Density and Fluid Speed',
    question: 'In a visual streamline plot of fluid flow, what does regions where streamlines are packed tightly together represent?',
    options: [
      'High fluid velocity and low static pressure',
      'Low fluid velocity and high pressure',
      'Stagnant fluid with zero velocity',
      'Turbulent eddies only'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Because flow rate through adjacent streamlines is constant, crowding of streamlines indicates a smaller cross-sectional area, meaning higher velocity ($v \\propto 1/A$) and lower pressure (Bernoulli).',
    reasonUrdu: 'Wajah: Jahan streamlines qareeb qareeb hoti hain wahan fluid ki speed zyada aur pressure kam hota hai.',
    formula: 'v \\propto \\frac{1}{A}',
    textbookRef: 'Sec 5.8 & 5.11, Page 98, 101'
  },
  {
    id: 318,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Smoke Rising from Incense Stick',
    question: 'Smoke rising from an incense stick or cigarette rises in a smooth, straight thread for the first few centimeters, and then suddenly bursts into swirling, chaotic loops. This illustrates:',
    options: [
      'Transition from laminar (streamline) flow to turbulent flow as velocity increases',
      'A change in the chemical identity of smoke',
      'The creation of liquid helium',
      'The complete loss of gravity'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'As the hot smoke accelerates upward, its speed increases, causing the Reynolds number to exceed the critical value, triggering instability and turbulent vortices.',
    reasonUrdu: 'Wajah: Shuru ma speed kam hone se flow laminar hota hai; upar ja kar speed barhne se Reynolds number critical limit cross karta hai aur flow turbulent ban jata hai.',
    formula: 'R_e > R_{e, critical}',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 319,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Energy Dissipation in Turbulent Flow',
    question: 'Why does turbulent flow require significantly greater pumping power to drive through a pipeline than laminar flow?',
    options: [
      'Turbulent eddies and whirlpools cause intense internal mixing and viscous shear dissipation, converting mechanical pressure energy into wasted heat',
      'The mass of the fluid increases during turbulence',
      'The pipe narrows physically',
      'The liquid freezes into ice'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Turbulence creates chaotic eddies that transfer momentum across the flow, causing energy to cascade down to small scales where viscosity dissipates it into heat.',
    reasonUrdu: 'Wajah: Turbulent eddies aapas ma takrati hain aur energy ko heat ma zaya karti hain, is liye zyada pumping power chahiye hoti hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 320,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Velocity Profile in Laminar Pipe Flow',
    question: 'In real viscous laminar flow through a cylindrical pipe (Poiseuille flow), what is the shape of the velocity profile across the cross section?',
    options: [
      'Parabolic, with zero velocity at the pipe walls (no-slip condition) and maximum velocity at the central axis',
      'Completely flat (uniform speed everywhere)',
      'Maximum at the walls and zero in the center',
      'Triangular'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Due to fluid viscosity and wall adhesion (no-slip boundary condition), speed is zero at $r = R$ and maximum at $r = 0$, forming a parabola: $v(r) = v_{max}(1 - r^2/R^2)$.',
    reasonUrdu: 'Wajah: Pipe ki deewaron par viscosity ki wajah sy speed zero hoti hai aur center ma maximum, is liye velocity profile parabolic banta hai.',
    formula: 'v(r) = v_{max}\\left(1 - \\frac{r^2}{R^2}\\right)',
    textbookRef: 'Sec 5.8 & 5.13, Page 98, 106'
  },
  {
    id: 321,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Ideal Fluid Velocity Profile',
    question: 'Unlike a viscous fluid, what would the velocity profile of an IDEAL (non-viscous) fluid flowing through a smooth pipe look like?',
    options: [
      'Completely flat and uniform across the entire cross section, slipping with full velocity right at the walls',
      'Parabolic with zero wall speed',
      'Zero in the center',
      'Negative at the walls'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Since an ideal fluid has zero viscosity ($\\eta = 0$), there is no shear friction between layers or with the wall; hence all fluid elements move at identical uniform speed $v$.',
    reasonUrdu: 'Wajah: Ideal fluid ma zero viscosity hoti hai, is liye koi friction nahi hoti aur har jagah speed aik jaisi (flat) hoti hai.',
    formula: 'v(r) = \\text{Constant}',
    textbookRef: 'Sec 5.8, Page 98-99'
  },
  {
    id: 322,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Eddies and Whirlpools',
    question: 'In Fig. 5.13 on page 98, what are the swirling, rotating pockets of fluid created behind an un-streamlined blunt obstacle called?',
    options: ['Eddies and whirlpools (or vortices)', 'Streamlines', 'Torricelli rays', 'Superfluids'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 98: "In a turbulent flow... there are eddies and whirlpools in the motion and the paths of the particles are continuously changing (Fig. 5.13)."',
    reasonUrdu: 'Wajah: Fig 5.13 ma rukawat ke peeche banne wale ghoomte huye chakkar ko Eddies aur Whirlpools (bhanwar) kehte hain.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8, Fig 5.13, Page 98'
  },
  {
    id: 323,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Streamline Boundary Condition',
    question: 'Can any fluid particle in steady flow cross a streamline?',
    options: [
      'No, because velocity is always strictly tangential to the streamline, so there is zero velocity component perpendicular to it',
      'Yes, particles cross freely in all directions',
      'Only if the temperature is above $100\\,^\\circ\\text{C}$',
      'Only if the fluid is air'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'By mathematical definition, velocity is everywhere tangent to the streamline; therefore the normal velocity component across the streamline is identically zero ($v_n = 0$).',
    reasonUrdu: 'Wajah: Streamline ke perpendicular velocity hamesha zero hoti hai, is liye koi fluid particle streamline ko cross nahi kar sakta.',
    formula: 'v_{\\perp} = 0',
    textbookRef: 'Sec 5.8, Page 98'
  },
  {
    id: 324,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Laminar Flow in Blood Vessels',
    question: 'According to the "For Your Information" box on page 101, normal blood flow through healthy human arteries is:',
    options: [
      'Smooth laminar flow governed by the equation of continuity',
      'Highly turbulent like white-water rapids',
      'Superfluid flow at 4 K',
      'Completely static'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 101: "The equation of continuity applied to: (i) blood flow in arteries and veins; (ii) water flow in rivers and pipes; (iii) air flow in duct and ventilation systems." Healthy blood flow is laminar and silent.',
    reasonUrdu: 'Wajah: Page 101 ke mutabiq insani arteries aur veins ma khoon ka flow laminar hota hai aur equation of continuity obey karta hai.',
    formula: 'A_1 v_1 = A_2 v_2',
    textbookRef: 'For your info, Page 101'
  },
  {
    id: 325,
    module: 'M',
    moduleName: 'Fluid Flow & Ideal Fluids',
    topic: 'Stethoscope Detection of Murmurs',
    question: 'When an artery is narrowed by cholesterol plaque (stenosis) or compressed by a blood pressure cuff, the blood flow speed increases and becomes turbulent, producing audible rushing sounds known as:',
    options: [
      'Korotkoff sounds / heart murmurs',
      'Doppler shifts',
      'Torricelli whistles',
      'Searle clicks'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Narrowing decreases area $A$, forcing velocity $v$ to shoot up ($A_1 v_1 = A_2 v_2$). High velocity raises $R_e$ above the critical threshold, creating turbulent eddies heard as Korotkoff sounds through a stethoscope.',
    reasonUrdu: 'Wajah: Artery tang hone se blood ki speed barhti hai aur flow turbulent ho kar aawaz (Korotkoff sounds) paida karta hai.',
    formula: 'R_e = \\frac{\\rho v D}{\\eta} > R_{crit}',
    textbookRef: 'For your info & Sec 5.8, Page 98, 101'
  },

  // ==========================================
  // MODULE N: Rate of Flow & Equation of Continuity ($A_1v_1 = A_2v_2$) (MCQs 326-350)
  // ==========================================
  {
    id: 326,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Definition of Rate of Flow',
    question: 'According to Section 5.8 on page 99, how is the "Rate of Flow" of a fluid defined?',
    options: [
      'The volume of fluid passing through any section of pipe per unit time',
      'The mass of fluid inside the whole container',
      'The speed of the fastest moving molecule',
      'The pressure exerted on the pipe walls'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 99 explicitly defines: "Rate of Flow: The rate of flow of a fluid through a pipe is the volume of fluid passing through any section of pipe per unit time."',
    reasonUrdu: 'Wajah: Page 99 ke mutabiq unit time ma pipe ke kisi cross section se guzarne wale fluid ke volume ko Rate of Flow kehte hain.',
    formula: 'Q = \\frac{V}{t}',
    textbookRef: 'Sec 5.8, Page 99'
  },
  {
    id: 327,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Formula for Rate of Flow ($Q = Av$)',
    question: 'According to Equation 5.12 on page 99, what is the mathematical formula for the rate of flow through a pipe of cross-sectional area $A$ with fluid speed $v$?',
    options: [
      '$\\text{Rate of flow} = A v$',
      '$\\text{Rate of flow} = \\frac{A}{v}$',
      '$\\text{Rate of flow} = \\frac{v}{A}$',
      '$\\text{Rate of flow} = A v^2$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 99: "Volume passing through the pipe in time $t$ is: $A \\times \\ell = A v t$. Thus, Rate of flow of liquid = $\\frac{\\text{Volume}}{\\text{Time}} = \\frac{A v t}{t} = A v$ (Eq. 5.12)."',
    reasonUrdu: 'Wajah: Eq 5.12 ke mutabiq Rate of Flow = Volume / Time = Avt / t = Av.',
    formula: 'Q = A v',
    textbookRef: 'Sec 5.8, Eq 5.12, Page 99'
  },
  {
    id: 328,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'SI Units of Rate of Flow',
    question: 'According to page 99 of the textbook, what are the SI units of rate of flow?',
    options: [
      'Cubic metre per second ($\\text{m}^3\\text{ s}^{-1}$) or litres per second ($\\text{L s}^{-1}$)',
      'Square metre per second ($\\text{m}^2\\text{ s}^{-1}$)',
      'Metre per second ($\\text{m s}^{-1}$)',
      'Pascal second ($\\text{Pa s}$)'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 99 states: "In SI units, it is measured in cubic metre per second ($\\text{m}^3\\text{ s}^{-1}$). Sometimes, it is also measured in litres per second ($\\text{L s}^{-1}$)."',
    reasonUrdu: 'Wajah: Page 99 par bataya gaya hai ke Rate of Flow ka SI unit m^3/s hai, aur L/s bhi use hota hai.',
    formula: '[Q] = \\text{m}^3 \\text{ s}^{-1}',
    textbookRef: 'Sec 5.8, Page 99'
  },
  {
    id: 329,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Dimensional Formula of Rate of Flow',
    question: 'What is the dimensional formula of volume rate of flow ($Q = Av$)?',
    options: ['[L³ T⁻¹]', '[L² T⁻¹]', '[M L³ T⁻¹]', '[L³ T⁻²]'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: '$[Q] = [\\text{Area}] \\times [\\text{Velocity}] = [\\text{L}^2] \\times [\\text{L T}^{-1}] = [\\text{L}^3 \\text{T}^{-1}]$.',
    reasonUrdu: 'Wajah: Q = Area x Velocity = [L^2] x [LT^-1] = [L^3 T^-1].',
    formula: '[Q] = [\\text{L}^3 \\text{T}^{-1}]',
    textbookRef: 'Sec 5.8, Page 99'
  },
  {
    id: 330,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Statement of Equation of Continuity',
    question: 'According to Section 5.9 on page 99, what is the statement of the Equation of Continuity?',
    options: [
      'The product of cross-sectional area of the pipe and the fluid speed ($Av$) at any point along the pipe is a constant',
      'The pressure times velocity is constant',
      'The sum of potential and kinetic energy is zero',
      'The flow rate is proportional to radius squared'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 99 explicitly states: "Statement: The product of cross-sectional area of the pipe and the fluid speed (i.e., Av) at any point along the pipe is a constant. This constant is equal to the volume flow per second of the fluid or simply the flow rate: $Av = \\text{Constant} = \\frac{\\text{Volume}}{\\text{Time}}$."',
    reasonUrdu: 'Wajah: Page 99 ke mutabiq pipe ke kisi bhi point par Area aur Speed ka product (Av) hamesha constant rehta hai.',
    formula: 'A v = \\text{Constant}',
    textbookRef: 'Sec 5.9, Page 99'
  },
  {
    id: 331,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Underlying Conservation Law',
    question: 'According to page 100, the equation of continuity ($A_1 v_1 = A_2 v_2$) is a direct physical expression of which fundamental conservation law?',
    options: [
      'Law of Conservation of Mass',
      'Law of Conservation of Momentum',
      'Law of Conservation of Energy',
      'Law of Conservation of Electric Charge'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 100 explicitly emphasizes: "Equation (5.16) states that in steady flow, the rate of flow of the fluid inward is equal to the rate of flow of the fluid outward. This equation justifies the conservation of mass of the fluid which is flowing through a pipe."',
    reasonUrdu: 'Wajah: Page 100 par wazeh likha hai ke Equation of Continuity Law of Conservation of Mass ko justify karti hai.',
    formula: '\\Delta m_1 = \\Delta m_2',
    textbookRef: 'Sec 5.9, Page 100'
  },
  {
    id: 332,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Mass Inflow Derivation (Eq. 5.13)',
    question: 'In the derivation on page 100 (Fig. 5.15), in time interval $\\Delta t$, the fluid at the lower end travels distance $\\Delta x_1 = v_1 \\Delta t$. What is the mass $\\Delta m_1$ entering cross section $A_1$?',
    options: [
      '$\\Delta m_1 = \\rho_1 A_1 v_1 \\Delta t$',
      '$\\Delta m_1 = \\frac{A_1 v_1}{\\rho_1 \\Delta t}$',
      '$\\Delta m_1 = A_1 v_1 \\Delta t$',
      '$\\Delta m_1 = \\frac{\\rho_1 v_1}{A_1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 100, Eq 5.13: "Volume $V = A_1 \\Delta x_1 = A_1 v_1 \\Delta t$. If $\\rho_1$ is density of fluid, mass $\\Delta m_1 = \\text{Volume} \\times \\text{Density} = A_1 v_1 \\Delta t \\times \\rho_1$ (Eq. 5.13)."',
    reasonUrdu: 'Wajah: Eq 5.13 ke mutabiq daakhil hone wala mass \\Delta m1 = \\rho1 A1 v1 \\Delta t hota hai.',
    formula: '\\Delta m_1 = \\rho_1 A_1 v_1 \\Delta t',
    textbookRef: 'Sec 5.9, Eq 5.13, Page 100'
  },
  {
    id: 333,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'General Compressible Equation of Continuity',
    question: 'According to Equation 5.15 on page 100, what is the general continuity equation for steady flow of ANY fluid (compressible or incompressible)?',
    options: [
      '$\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$',
      '$A_1 v_1 = A_2 v_2$',
      '$\\frac{A_1 v_1}{\\rho_1} = \\frac{A_2 v_2}{\\rho_2}$',
      '$\\rho_1 v_1^2 = \\rho_2 v_2^2$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 100, Eq 5.15: "Since mass of fluid is conserved: $\\Delta m_1 = \\Delta m_2 \\implies A_1 v_1 \\Delta t \\times \\rho_1 = A_2 v_2 \\Delta t \\times \\rho_2 \\implies \\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$ (Eq. 5.15)."',
    reasonUrdu: 'Wajah: Eq 5.15 ke mutabiq mass conservation ka general form \\rho1 A1 v1 = \\rho2 A2 v2 hota hai.',
    formula: '\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2',
    textbookRef: 'Sec 5.9, Eq 5.15, Page 100'
  },
  {
    id: 334,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Incompressible Form of Continuity (Eq. 5.16)',
    question: 'According to page 100, when the fluid is incompressible (density is constant, $\\rho_1 = \\rho_2$), how does the equation of continuity simplify?',
    options: [
      '$A_1 v_1 = A_2 v_2$',
      '$\\rho_1 A_1 = \\rho_2 A_2$',
      '$v_1 = v_2$',
      '$\\frac{A_1}{v_1} = \\frac{A_2}{v_2}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 100, Eq 5.16: "Since density is constant for the steady flow of incompressible fluid, therefore, the equation of continuity becomes: $A_1 v_1 = A_2 v_2$ (Eq. 5.16)."',
    reasonUrdu: 'Wajah: Incompressible fluid ma density \\rho1 = \\rho2 cancel ho jati hai aur equation A1 v1 = A2 v2 ban jati hai.',
    formula: 'A_1 v_1 = A_2 v_2',
    textbookRef: 'Sec 5.9, Eq 5.16, Page 100'
  },
  {
    id: 335,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Historical Scientific Fact on Euler',
    question: 'According to the "Scientific Fact" box on page 100, who originally obtained the continuity equation for incompressible fluids in 1752?',
    options: ['Leonhard Euler', 'Isaac Newton', 'Robert Boyle', 'Archimedes'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 100: "Scientific Fact: Euler obtained the continuity equation for a incompressible fluid with a large number of terms in 1752. Later, it was translated by C. Truesdell from English in 1954."',
    reasonUrdu: 'Wajah: Kitab ke mutabiq Leonhard Euler ne 1752 ma incompressible fluid ke liye continuity equation daryaft ki thi.',
    formula: 'N/A',
    textbookRef: 'Scientific Fact, Page 100'
  },
  {
    id: 336,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Section 5.10: Squeezing a Rubber Pipe',
    question: 'According to Section 5.10 on page 101, why does squeezing the end of a rubber garden hose increase the flow speed of water issuing from it (Fig. 5.16)?',
    options: [
      'Squeezing decreases the exit cross-sectional area ($A_2 < A_1$); according to $A_1 v_1 = A_2 v_2$, speed $v_2$ must increase to maintain constant volume flow rate',
      'Squeezing adds electrical energy to the water',
      'Squeezing decreases the water density to zero',
      'Squeezing stops the flow of mass'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 101: "5.10 Increase in Flow Velocity: We can increase the flow velocity of water in a rubber pipe by squeezing it. When we squeeze the rubber pipe, we decrease the cross-sectional area through which the water flows. According to the equation of continuity $A_1 v_1 = A_2 v_2$... By decreasing area ($A_2 < A_1$), velocity ($v_2$) must increase to maintain the same flow rate."',
    reasonUrdu: 'Wajah: Pipe ka munh dabane se cross-sectional area kam hota hai, is liye continuity equation ke mutabiq paani ki speed foran barh jati hai.',
    formula: 'v_2 = v_1 \\frac{A_1}{A_2}',
    textbookRef: 'Sec 5.10, Fig 5.16, Page 101'
  },
  {
    id: 337,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Falling Water Tap Stream Narrowing',
    question: 'According to the "Tidbits" box on page 101, why does a smooth stream of water falling from an open kitchen tap narrow down and become thinner as it descends?',
    options: [
      'As water falls, gravity accelerates it so its speed $v$ increases; by the equation of continuity ($Av = \\text{const}$), its cross-sectional area $A$ must decrease',
      'The water evaporates as it falls',
      'The water freezes in mid-air',
      'Surface tension pushes it inward until it stops'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 101 Tidbits explicitly notes: "As the water falls, its speed increases and so its cross sectional area decreases as mandated by the continuity equation."',
    reasonUrdu: 'Wajah: Niche girtay huye gravity ki wajah sy paani ki speed barhti hai, is liye continuity equation (Av = const) ke tehat dhaad patli ho jati hai.',
    formula: 'A \\propto \\frac{1}{v}',
    textbookRef: 'Tidbits, Page 101'
  },
  {
    id: 338,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Example 5.4 Calculation: Water Speed in Hose',
    question: 'In textbook Example 5.4 (page 100-101), a water hose has an internal diameter of $20\\text{ mm}$ ($r = 0.01\\text{ m}$). Water discharges $30\\text{ kg}$ in $60\\text{ s}$ (density $1000\\text{ kg m}^{-3}$). What is the speed of water $v$ at the outlet?',
    options: [
      '$1.6\\text{ m s}^{-1}$',
      '$3.2\\text{ m s}^{-1}$',
      '$0.8\\text{ m s}^{-1}$',
      '$16\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Page 101 Example 5.4: Mass per second $= 30 / 60 = 0.5\\text{ kg/s}$. Area $A = \\pi r^2 = 3.14 \\times (0.01)^2 = 3.14 \\times 10^{-4}\\text{ m}^2$. From $\\rho A v = \\text{Mass}/\\text{sec} \\implies v = \\frac{0.5}{1000 \\times 3.14 \\times 10^{-4}} = \\frac{0.5}{0.314} \\approx 1.6\\text{ m/s}$.',
    reasonUrdu: 'Wajah: Example 5.4 ke mutabiq mass flow = 0.5 kg/s, area = 3.14 x 10^-4 m^2; speed v = 0.5 / (1000 x 3.14 x 10^-4) = 1.6 m/s.',
    formula: 'v = \\frac{\\text{Mass}/\\text{sec}}{\\rho A} = 1.6\\text{ m/s}',
    textbookRef: 'Example 5.4, Page 100-101'
  },
  {
    id: 339,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Applications Listed on Page 101',
    question: 'According to the "For Your Information" box on page 101, which systems are governed by the equation of continuity?',
    options: [
      '(i) Blood flow in arteries and veins, (ii) Water flow in rivers and pipes, (iii) Air flow in ducts and ventilation systems',
      'Only rocket fuel combustion',
      'Only quantum particle decay',
      'Only seismic wave propagation'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 101 lists: "The equation of continuity is applied to: (i) blood flow in arteries and veins; (ii) water flow in rivers and pipes; (iii) air flow in duct and ventilation systems."',
    reasonUrdu: 'Wajah: Page 101 par bataya gaya hai ke arteries, rivers/pipes aur AC/duct systems sab par continuity equation lagu hoti hai.',
    formula: 'A_1 v_1 = A_2 v_2',
    textbookRef: 'For your info, Page 101'
  },
  {
    id: 340,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Diameter Reduction and Velocity Ratio',
    question: 'A horizontal pipe carrying water constricts to HALF its initial diameter ($d_2 = d_1 / 2$). If the initial speed is $v_1 = 2.0\\text{ m s}^{-1}$, what is the speed $v_2$ in the constricted section?',
    options: [
      '$8.0\\text{ m s}^{-1}$ (4 times initial speed)',
      '$4.0\\text{ m s}^{-1}$',
      '$1.0\\text{ m s}^{-1}$',
      '$16.0\\text{ m s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Area $A = \\pi d^2 / 4 \\propto d^2$. From $A_1 v_1 = A_2 v_2$: $v_2 = v_1 \\left(\\frac{d_1}{d_2}\\right)^2 = 2.0 \\times (2)^2 = 8.0\\text{ m/s}$.',
    reasonUrdu: 'Wajah: Area diameter ke square ke mutabiq hota hai; diameter aadha hone par area 1/4 ho jata hai, is liye speed 4 guna barh kar 8.0 m/s ho jayegi.',
    formula: 'v_2 = v_1 \\left(\\frac{d_1}{d_2}\\right)^2',
    textbookRef: 'Sec 5.9 & 5.10, Page 100-101'
  },
  {
    id: 341,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Blood Flow from Aorta to Capillaries',
    question: 'The human aorta has radius $1.0\\text{ cm}$ with blood speed $30\\text{ cm s}^{-1}$. It branches into billions of capillaries whose TOTAL combined cross-sectional area is $2000\\text{ cm}^2$. What is the average speed of blood in the capillaries?',
    options: [
      '$0.047\\text{ cm s}^{-1}$ (approx $0.5\\text{ mm s}^{-1}$)',
      '$30\\text{ cm s}^{-1}$',
      '$300\\text{ cm s}^{-1}$',
      '$15\\text{ cm s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Aorta area $A_1 = \\pi (1)^2 = 3.14\\text{ cm}^2$. Total capillary area $A_2 = 2000\\text{ cm}^2$. From $A_1 v_1 = A_2 v_2$: $v_2 = \\frac{3.14 \\times 30}{2000} \\approx 0.047\\text{ cm/s} \\approx 0.47\\text{ mm/s}$. This extremely slow speed allows ample time for nutrient/gas exchange!',
    reasonUrdu: 'Wajah: Capillaries ka total area bohot barha hota hai (2000 cm^2), is liye blood ki speed kam tareen (~0.5 mm/s) ho jati hai taake oxygen exchange ho sakay.',
    formula: 'A_1 v_1 = A_{total, cap} v_{cap}',
    textbookRef: 'For your info, Page 101'
  },
  {
    id: 342,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'River Flowing into Narrow Gorge',
    question: 'A wide, lazy river flows slowly across a flat valley. When it enters a deep, narrow rocky canyon (gorge), what happens to the water speed?',
    options: [
      'The water speed increases significantly, forming fast rapids',
      'The water stops completely',
      'The water speed decreases',
      'The water turns into steam'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 101: In narrow sections, cross-sectional area $A$ is reduced. By the continuity equation ($Av = \\text{const}$), flow velocity must increase to maintain constant volume flow rate.',
    reasonUrdu: 'Wajah: Darya jab tang raste se guzarta hai to area kam hone ki wajah sy paani ki raftar bohot teez ho jati hai.',
    formula: 'v \\propto \\frac{1}{A}',
    textbookRef: 'For your info, Page 101'
  },
  {
    id: 343,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Branching Pipe Network',
    question: 'A main supply pipe of cross-sectional area $A$ carries water at speed $v$. It splits into $n$ identical parallel branch pipes, each of cross-sectional area $a$. What is the speed $v\'$ in each branch?',
    options: [
      '$v\' = \\frac{A v}{n a}$',
      '$v\' = \\frac{n A v}{a}$',
      '$v\' = \\frac{a v}{n A}$',
      '$v\' = v$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Total inflow rate = Total outflow rate: $A v = n (a v\') \\implies v\' = \\frac{A v}{n a}$.',
    reasonUrdu: 'Wajah: Daakhil hone wala flow Av n pipes ma taqseem hota hai: Av = n(a v\'), is liye v\' = Av / (na).',
    formula: 'A v = n \\cdot a \\cdot v\'',
    textbookRef: 'Sec 5.9, Page 100'
  },
  {
    id: 344,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Falling Tap Stream Diameter Calculation',
    question: 'Water issues from a circular tap nozzle of area $A_0$ at initial downward speed $v_0$. After falling vertically through distance $h$ under gravity, what is the cross-sectional area $A$ of the stream?',
    options: [
      '$A = A_0 \\frac{v_0}{\\sqrt{v_0^2 + 2gh}}$',
      '$A = A_0 \\frac{\\sqrt{v_0^2 + 2gh}}{v_0}$',
      '$A = A_0 \\frac{v_0}{2gh}$',
      '$A = A_0$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'From kinematics, speed after falling distance $h$ is $v = \\sqrt{v_0^2 + 2gh}$. By continuity, $A_0 v_0 = A v \\implies A = A_0 \\frac{v_0}{v} = A_0 \\frac{v_0}{\\sqrt{v_0^2 + 2gh}}$.',
    reasonUrdu: 'Wajah: Kinematics se speed v = \\sqrt{v0^2 + 2gh} hoti hai; continuity lagane par A = A0 v0 / \\sqrt{v0^2 + 2gh} nikalta hai.',
    formula: 'A = A_0 \\frac{v_0}{\\sqrt{v_0^2 + 2gh}}',
    textbookRef: 'Tidbits, Page 101'
  },
  {
    id: 345,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Gas Flow with Compressibility',
    question: 'Carbon dioxide gas flows steadily through a pipe where pressure drops, causing its density to decrease to half its original value ($\\rho_2 = \\rho_1 / 2$). If the pipe cross section remains unchanged ($A_1 = A_2$), what is the velocity $v_2$?',
    options: [
      '$v_2 = 2 v_1$ (speed doubles)',
      '$v_2 = v_1 / 2$',
      '$v_2 = v_1$',
      '$v_2 = 4 v_1$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'From the general continuity equation (Eq. 5.15): $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$. Since $A_1 = A_2$: $\\rho_1 v_1 = \\left(\\frac{\\rho_1}{2}\\right) v_2 \\implies v_2 = 2v_1$.',
    reasonUrdu: 'Wajah: Compressible fluid ma \\rho1 v1 = \\rho2 v2; density aadhi hone par mass flow barqarar rakhne ke liye speed double ho jati hai.',
    formula: '\\rho_1 v_1 = \\rho_2 v_2',
    textbookRef: 'Sec 5.9, Eq 5.15, Page 100'
  },
  {
    id: 346,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Volume Discharged Calculation',
    question: 'Water flows through a pipe of diameter $10\\text{ cm}$ at an average speed of $2.0\\text{ m s}^{-1}$. What total volume of water is discharged in 10 minutes ($600\\text{ s}$)? (Take $\\pi = 3.14$)',
    options: [
      '$9.42\\text{ m}^3$ (9420 litres)',
      '$1.57\\text{ m}^3$',
      '$18.84\\text{ m}^3$',
      '$0.94\\text{ m}^3$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Radius $r = 0.05\\text{ m}$. Area $A = \\pi r^2 = 3.14 \\times (0.05)^2 = 7.85 \\times 10^{-3}\\text{ m}^2$. Rate $Q = Av = (7.85 \\times 10^{-3}) \\times 2.0 = 0.0157\\text{ m}^3\\text{/s}$. Total volume in $600\\text{ s} = 0.0157 \\times 600 = 9.42\\text{ m}^3$.',
    reasonUrdu: 'Wajah: Q = Av = 3.14 x (0.05)^2 x 2 = 0.0157 m^3/s; 600 seconds ma volume = 0.0157 x 600 = 9.42 m^3.',
    formula: 'V = A v t',
    textbookRef: 'Sec 5.8 & 5.9, Page 99'
  },
  {
    id: 347,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Time to Fill a Tank',
    question: 'A swimming pool of volume $120\\text{ m}^3$ is filled using a pipe of cross-sectional area $0.02\\text{ m}^2$ with water flowing at $2.5\\text{ m s}^{-1}$. How long does it take to fill the pool?',
    options: ['2400 seconds (40 minutes)', '1200 seconds', '4800 seconds', '600 seconds'],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Flow rate $Q = Av = 0.02 \\times 2.5 = 0.05\\text{ m}^3\\text{/s}$. Time $t = \\frac{\\text{Volume}}{Q} = \\frac{120\\text{ m}^3}{0.05\\text{ m}^3\\text{/s}} = 2400\\text{ s} = 40\\text{ minutes}$.',
    reasonUrdu: 'Wajah: Flow rate Q = 0.02 x 2.5 = 0.05 m^3/s; Time = 120 / 0.05 = 2400 seconds (40 minute).',
    formula: 't = \\frac{V}{A v}',
    textbookRef: 'Sec 5.8, Page 99'
  },
  {
    id: 348,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Syringe Plunger vs Needle Speed',
    question: 'A doctor pushes a syringe plunger of diameter $1.0\\text{ cm}$ at speed $1.0\\text{ cm s}^{-1}$. If the fine needle attached has diameter $0.5\\text{ mm}$, at what speed does medicine squirt from the needle?',
    options: [
      '$400\\text{ cm s}^{-1}$ ($4.0\\text{ m s}^{-1}$)',
      '$20\\text{ cm s}^{-1}$',
      '$100\\text{ cm s}^{-1}$',
      '$40\\text{ cm s}^{-1}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Plunger diameter $D_1 = 10\\text{ mm}$, needle diameter $D_2 = 0.5\\text{ mm}$. Ratio $D_1 / D_2 = 10 / 0.5 = 20$. From continuity: $v_2 = v_1 (D_1 / D_2)^2 = 1.0 \\times (20)^2 = 400\\text{ cm/s} = 4.0\\text{ m/s}$.',
    reasonUrdu: 'Wajah: Diameter ka ratio 20 hai; square karne par 400 banega; needle se dawa 400 cm/s (4 m/s) ki teez raftar se niklegi.',
    formula: 'v_2 = v_1 \\left(\\frac{D_1}{D_2}\\right)^2',
    textbookRef: 'Sec 5.9 & 5.10, Page 100-101'
  },
  {
    id: 349,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Differential Continuity Equation in 3D',
    question: 'In modern fluid dynamics, what is the three-dimensional vector form of the conservation of mass (continuity equation) for any unsteady compressible flow?',
    options: [
      '$\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0$',
      '$\\nabla \\times \\vec{v} = 0$',
      '$\\rho \\vec{v} = \\text{Constant}$',
      '$\\frac{\\partial \\vec{v}}{\\partial t} = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'By applying Gauss\'s divergence theorem to a control volume: rate of mass accumulation $\\frac{\\partial \\rho}{\\partial t}$ equals net mass flux divergence $-\\nabla \\cdot (\\rho \\vec{v})$, giving the fundamental continuity PDE: $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0$.',
    reasonUrdu: 'Wajah: 3D fluid mechanics ma mass conservation ki general differential form \\partial\\rho/\\partial t + \\nabla \\cdot (\\rho v) = 0 hoti hai.',
    formula: '\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0',
    textbookRef: 'Sec 5.9, Page 100'
  },
  {
    id: 350,
    module: 'N',
    moduleName: 'Flow Rate & Equation of Continuity',
    topic: 'Continuity in Incompressible 3D Flow',
    question: 'For an incompressible fluid ($\\rho = \\text{constant}$), what does the 3D differential continuity equation simplify to?',
    options: [
      '$\\nabla \\cdot \\vec{v} = 0$ (velocity field is solenoidal/divergence-free)',
      '$\\nabla \\times \\vec{v} = 0$',
      '$\\nabla^2 \\vec{v} = 0$',
      '$\\vec{v} = 0$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'If $\\rho$ is constant, $\\frac{\\partial \\rho}{\\partial t} = 0$ and $\\nabla \\cdot (\\rho \\vec{v}) = \\rho (\\nabla \\cdot \\vec{v}) = 0 \\implies \\nabla \\cdot \\vec{v} = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z} = 0$.',
    reasonUrdu: 'Wajah: Incompressible fluid ma divergence of velocity zero hoti hai: \\nabla \\cdot v = 0.',
    formula: '\\nabla \\cdot \\vec{v} = 0',
    textbookRef: 'Sec 5.9, Page 100'
  },

  // ==========================================
  // MODULE O: Bernoulli's Equation & Conservation of Energy (MCQs 351-375)
  // ==========================================
  {
    id: 351,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Statement of Bernoulli\'s Equation',
    question: 'According to Section 5.11 on page 101, what is the statement of Bernoulli\'s Equation?',
    options: [
      'The sum of pressure, K.E. per unit volume, and P.E. per unit volume of an ideal fluid throughout its steady flow remains constant',
      'The velocity times area is constant',
      'The rate of mass flow is proportional to pressure',
      'The buoyant force equals the weight of the fluid'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 101 explicitly states: "5.11 Bernoulli\'s Equation: The sum of pressure, K.E. per unit volume and P.E. per unit volume of an ideal fluid throughout its steady flow remains constant."',
    reasonUrdu: 'Wajah: Page 101 par Bernoulli\'s equation ka statement wazeh hai: Pressure + KE per volume + PE per volume = Constant.',
    formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{Constant}',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 352,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Mathematical Formulation of Bernoulli\'s Equation',
    question: 'What is the full mathematical equation for Bernoulli\'s principle along a streamline for an ideal fluid?',
    options: [
      '$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{Constant}$',
      '$P + \\rho v^2 + \\rho g h = 0$',
      '$\\frac{P}{\\rho} + v^2 + g h = \\text{Constant}$',
      '$P v + \\frac{1}{2} m v^2 = \\text{Constant}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Bernoulli\'s equation states: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 = \\text{Constant}$.',
    reasonUrdu: 'Wajah: Bernoulli\'s equation ka standard formula P + 1/2 \\rho v^2 + \\rho g h = Constant hota hai.',
    formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{Constant}',
    textbookRef: 'Sec 5.11, Page 101, 104'
  },
  {
    id: 353,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Underlying Conservation Principle',
    question: 'Bernoulli\'s equation in fluid dynamics is a direct consequence of which fundamental law of physics?',
    options: [
      'Law of Conservation of Energy (Work-Energy Theorem)',
      'Law of Conservation of Mass',
      'Law of Conservation of Angular Momentum',
      'Newton\'s Third Law'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Bernoulli\'s equation represents the work-energy theorem applied to a moving fluid element: work done by pressure forces equals change in kinetic energy plus change in gravitational potential energy.',
    reasonUrdu: 'Wajah: Bernoulli\'s equation fluid dynamics ma Law of Conservation of Energy (Work-Energy theorem) ko represent karti hai.',
    formula: 'W = \\Delta K.E. + \\Delta P.E.',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 354,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Kinetic Energy Per Unit Volume',
    question: 'How is the kinetic energy per unit volume of a fluid of density $\\rho$ moving with speed $v$ expressed in Bernoulli\'s equation?',
    options: [
      '$\\frac{1}{2} \\rho v^2$',
      '$\\frac{1}{2} m v^2$',
      '$\\rho v^2$',
      '$\\frac{\\rho v^2}{g}$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Kinetic energy $= \\frac{1}{2} m v^2$. Dividing by volume $V$: $\\frac{K.E.}{V} = \\frac{1}{2} \\left(\\frac{m}{V}\\right) v^2 = \\frac{1}{2} \\rho v^2$.',
    reasonUrdu: 'Wajah: KE per unit volume = (1/2 m v^2) / Volume = 1/2 (m/V) v^2 = 1/2 \\rho v^2.',
    formula: '\\text{K.E. per unit volume} = \\frac{1}{2} \\rho v^2',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 355,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Potential Energy Per Unit Volume',
    question: 'How is the gravitational potential energy per unit volume of a fluid at height $h$ expressed in Bernoulli\'s equation?',
    options: [
      '$\\rho g h$',
      '$m g h$',
      '$\\frac{\\rho g}{h}$',
      '$\\frac{1}{2} \\rho g h^2$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Potential energy $= m g h$. Dividing by volume $V$: $\\frac{P.E.}{V} = \\left(\\frac{m}{V}\\right) g h = \\rho g h$.',
    reasonUrdu: 'Wajah: PE per unit volume = (m g h) / Volume = \\rho g h.',
    formula: '\\text{P.E. per unit volume} = \\rho g h',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 356,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Bernoulli for Horizontal Flow',
    question: 'When an ideal fluid flows through a strictly HORIZONTAL pipe of constant height ($h_1 = h_2$), how does Bernoulli\'s equation simplify?',
    options: [
      '$P + \\frac{1}{2}\\rho v^2 = \\text{Constant}$',
      '$P + \\rho g h = \\text{Constant}$',
      '$P = \\frac{1}{2}\\rho v^2$',
      '$\\frac{1}{2}\\rho v^2 = \\rho g h$'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 104-105: For a horizontal pipe, average potential energy is the same at both places ($h_1 = h_2$), so the $\\rho g h$ term cancels out: $P + \\frac{1}{2}\\rho v^2 = \\text{Constant}$.',
    reasonUrdu: 'Wajah: Horizontal pipe ma height same hoti hai (h1 = h2), is liye PE cancel ho kar P + 1/2 \\rho v^2 = Constant reh jata hai.',
    formula: 'P + \\frac{1}{2}\\rho v^2 = \\text{Constant}',
    textbookRef: 'Sec 5.11, Page 104-105'
  },
  {
    id: 357,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Core Bernoulli Trade-Off: Speed vs Pressure',
    question: 'According to Bernoulli\'s principle for horizontal flow ($P + \\frac{1}{2}\\rho v^2 = \\text{const}$), where the speed of the fluid is HIGH, the internal pressure is:',
    options: [
      'LOW',
      'HIGH',
      'Zero',
      'Infinite'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Page 105: "It is clear from the result of Bernoulli\'s Equation for horizontal pipe that \'where speed is high, pressure will be low\'."',
    reasonUrdu: 'Wajah: Page 105 par wazeh likha hai: "Where speed is high, pressure will be low." Speed barhne se kinetic energy barhti hai to pressure drop ho jata hai.',
    formula: 'v \\uparrow \\implies P \\downarrow',
    textbookRef: 'Sec 5.11, Page 105'
  },
  {
    id: 358,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Static, Dynamic, and Hydrostatic Pressure',
    question: 'In the equation $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{Constant}$, what are the three individual terms called in engineering?',
    options: [
      '$P$ is Static pressure; $\\frac{1}{2}\\rho v^2$ is Dynamic pressure; $\\rho g h$ is Hydrostatic pressure',
      '$P$ is Atmospheric pressure; $\\frac{1}{2}\\rho v^2$ is Viscous pressure; $\\rho g h$ is Elastic pressure',
      '$P$ is Total pressure; $\\frac{1}{2}\\rho v^2$ is Drag pressure; $\\rho g h$ is Lift pressure',
      'They are all identical thermal pressures'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$P$ is the thermodynamic static pressure measured moving with the fluid, $\\frac{1}{2}\\rho v^2$ is the dynamic pressure resulting from directed bulk motion, and $\\rho g h$ is the hydrostatic elevation head.',
    reasonUrdu: 'Wajah: P ko Static pressure, 1/2 \\rho v^2 ko Dynamic pressure aur \\rho g h ko Hydrostatic pressure kehte hain.',
    formula: 'P_{static} + P_{dynamic} + P_{hydrostatic} = P_{total}',
    textbookRef: 'Sec 5.11, Page 101, 104'
  },
  {
    id: 359,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Stagnation Pressure (Pitot Tube Principle)',
    question: 'When fluid flowing at speed $v$ and static pressure $P_0$ is brought to a complete stop ($v = 0$) at the tip of a Pitot tube (stagnation point), the measured stagnation pressure $P_{stag}$ is:',
    options: [
      '$P_{stag} = P_0 + \\frac{1}{2}\\rho v^2$',
      '$P_{stag} = P_0 - \\frac{1}{2}\\rho v^2$',
      '$P_{stag} = \\frac{1}{2}\\rho v^2$',
      '$P_{stag} = P_0$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'At the stagnation point, all dynamic kinetic energy converts into pressure: $P_0 + \\frac{1}{2}\\rho v^2 = P_{stag} + 0 \\implies P_{stag} = P_0 + \\frac{1}{2}\\rho v^2$. Aircraft airspeed indicators use this to measure flight speed!',
    reasonUrdu: 'Wajah: Stagnation point par speed zero hone se saari kinetic energy pressure ma convert hoti hai: Pstag = P0 + 1/2 \\rho v^2.',
    formula: 'P_{stag} = P_0 + \\frac{1}{2}\\rho v^2',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 360,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Head Form of Bernoulli\'s Equation',
    question: 'Dividing every term of Bernoulli\'s equation by $\\rho g$, what classic civil engineering "head" form is obtained?',
    options: [
      '$\\frac{P}{\\rho g} + \\frac{v^2}{2g} + h = \\text{Constant (Total Head)}$',
      '$\\frac{P}{g} + \\frac{v^2}{2} + h = \\text{Constant}$',
      '$P + v + h = \\text{Constant}$',
      '$\\frac{P}{\\rho} + v^2 = \\text{Constant}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Each term now has the dimension of length (meters of fluid): $\\frac{P}{\\rho g}$ is Pressure head, $\\frac{v^2}{2g}$ is Velocity head, and $h$ is Elevation head.',
    reasonUrdu: 'Wajah: \\rho g se divide karne par har term meters (Head) ma aati hai: Pressure Head + Velocity Head + Elevation Head = Total Head.',
    formula: '\\frac{P}{\\rho g} + \\frac{v^2}{2g} + h = H_{total}',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 361,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Units and Dimensions of Bernoulli Terms',
    question: 'What are the SI units and dimensional formula of every term ($P$, $\\frac{1}{2}\\rho v^2$, $\\rho g h$) in Bernoulli\'s equation?',
    options: [
      'Pascal ($\\text{N m}^{-2}$ or $\\text{J m}^{-3}$) with dimensions $[\\text{M L}^{-1} \\text{T}^{-2}]$',
      'Joule ($[\\text{M L}^2 \\text{T}^{-2}]$)',
      'Watt ($[\\text{M L}^2 \\text{T}^{-3}]$)',
      'Newton ($[\\text{M L T}^{-2}]$)'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Every term represents energy per unit volume: $\\text{J/m}^3 = (\\text{N}\\cdot\\text{m})/\\text{m}^3 = \\text{N/m}^2 = \\text{Pa}$. Dimensional formula is $[\\text{M L}^{-1} \\text{T}^{-2}]$.',
    reasonUrdu: 'Wajah: Bernoulli\'s equation ki har term energy per unit volume hoti hai jis ka unit Pascal (N/m^2 ya J/m^3) aur dimensions [M L^-1 T^-2] hain.',
    formula: '[P] = [\\frac{1}{2}\\rho v^2] = [\\rho g h] = [\\text{M L}^{-1} \\text{T}^{-2}]',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 362,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Static Fluid as Special Case of Bernoulli',
    question: 'If fluid velocity is zero everywhere ($v_1 = v_2 = 0$), Bernoulli\'s equation $P_1 + \\rho g h_1 = P_2 + \\rho g h_2$ reduces directly to:',
    options: [
      '$P_1 - P_2 = \\rho g (h_2 - h_1)$ (Hydrostatic pressure equation)',
      '$P_1 = P_2$',
      '$h_1 = h_2$',
      'Zero pressure'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Setting $v=0$ yields $P_2 - P_1 = -\\rho g (h_2 - h_1) = -\\rho g \\Delta h$, demonstrating that hydrostatic pressure is simply a zero-velocity special case of Bernoulli\'s equation!',
    reasonUrdu: 'Wajah: Jab velocity zero ho to Bernoulli\'s equation hydrostatic pressure equation P2 - P1 = \\rho g h ban jati hai.',
    formula: 'P_1 - P_2 = \\rho g \\Delta h',
    textbookRef: 'Sec 5.7 & 5.11, Page 95, 101'
  },
  {
    id: 363,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Pressure Drop Calculation in Horizontal Pipe',
    question: 'Water ($\\rho = 1000\\text{ kg m}^{-3}$) flows through a horizontal pipe where its speed increases from $v_1 = 1.0\\text{ m s}^{-1}$ to $v_2 = 3.0\\text{ m s}^{-1}$. What is the pressure drop $P_1 - P_2$?',
    options: [
      '$4000\\text{ Pa}$ ($4.0\\text{ kPa}$)',
      '$8000\\text{ Pa}$',
      '$2000\\text{ Pa}$',
      '$1000\\text{ Pa}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'From Bernoulli\'s horizontal relation: $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\frac{1}{2} (1000) \\times (3^2 - 1^2) = 500 \\times (9 - 1) = 500 \\times 8 = 4000\\text{ Pa}$.',
    reasonUrdu: 'Wajah: P1 - P2 = 1/2 \\rho (v2^2 - v1^2) = 500 x (9 - 1) = 4000 Pa.',
    formula: 'P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)',
    textbookRef: 'Sec 5.11, Page 104'
  },
  {
    id: 364,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Assumptions in Bernoulli\'s Derivation',
    question: 'Which of the following conditions is an ASSUMPTION required for the validity of Bernoulli\'s equation?',
    options: [
      'Flow must be steady, streamline, incompressible, and frictionless (non-viscous)',
      'Flow must be highly turbulent and chaotic',
      'The fluid must be a compressible real gas with high viscosity',
      'The pipe must be made of rubber'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Bernoulli\'s theorem strictly requires an ideal fluid: 1. Incompressible (constant density), 2. Non-viscous (no friction losses), 3. Steady flow (time-independent), 4. Irrotational flow along streamlines.',
    reasonUrdu: 'Wajah: Bernoulli\'s equation ke liye fluid ka steady, incompressible aur non-viscous (friction-free) hona zaroori hai.',
    formula: 'N/A',
    textbookRef: 'Sec 5.8 & 5.11, Page 98, 101'
  },
  {
    id: 365,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Why Two Parallel Ships Collide',
    question: 'When two large ships steam parallel and close to each other in deep water, why are they dangerously drawn toward each other, risking a collision?',
    options: [
      'Water squeezed between the two hulls flows with higher speed, creating a low-pressure region between them; higher outer water pressure pushes them together',
      'Gravitational attraction pulls them together',
      'Magnetic attraction of their steel hulls',
      'Their propellers push them sideways'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'Water constricted between the narrow channel between hulls accelerates ($A \\downarrow \\implies v \\uparrow$). By Bernoulli, pressure drops between them ($P_{between} < P_{outside}$). The net lateral force pushes them together.',
    reasonUrdu: 'Wajah: Jahazon ke darmiyan paani tezi se nikalta hai jis se darmiyan ma pressure kam ho jata hai aur bahir ka zyada dabao unhe aapas ma takra deta hai.',
    formula: 'v_{between} > v_{outer} \\implies P_{between} < P_{outer}',
    textbookRef: 'Sec 5.11, Page 101, 104'
  },
  {
    id: 366,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Person Standing Near Fast Train',
    question: 'Why is it dangerous for a passenger to stand too close to the edge of a platform when a high-speed express train rushes past?',
    options: [
      'The fast train drags air with it, creating a high-velocity, low-pressure zone; higher atmospheric pressure behind the person pushes them toward the train',
      'The train\'s magnetic field pulls the person',
      'The train emits gravitational waves',
      'Air behind the train becomes super-dense'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'The train\'s speed sets air in rapid motion between the passenger and train ($v \\uparrow \\implies P \\downarrow$). Normal atmospheric pressure behind the person pushes them into the train\'s path.',
    reasonUrdu: 'Wajah: Train ke qareeb hawa tezi se chalti hai jis se pressure kam ho jata hai; peeche ka normal dabao bande ko train ki taraf dhakelta hai.',
    formula: 'P_{train} < P_{behind}',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 367,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Roof Blown Off in a Gale',
    question: 'During a violent hurricane or gale, why is a tin roof or thatched roof often blown UPWARD off a house rather than pushed down?',
    options: [
      'High wind velocity blowing over the roof creates a low pressure above it, while stagnant high atmospheric pressure inside pushes the roof upward',
      'The wind enters through the roof tiles and pulls it up',
      'The house becomes lighter than air',
      'Gravity reverses direction in a storm'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Wind rushing over the roof has high speed ($v_{top} \\gg 0$), dropping pressure above ($P_{top} \\ll P_{inside}$). Trapped air inside has zero velocity ($v_{in} = 0$), so $P_{inside} = P_{atm}$. The large upward net force $F = (P_{in} - P_{top})A$ blows the roof off.',
    reasonUrdu: 'Wajah: Chhatt ke upar teez hawa chalne se dabao kam ho jata hai jab ke kamray ke andar ka dabao zyada hota hai, is liye chhatt upar urr jati hai.',
    formula: 'F_{up} = (P_{inside} - P_{top}) A',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 368,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Two Ping-Pong Balls Blown Apart',
    question: 'Two ping-pong balls are suspended side by side a few centimeters apart by light threads. When you blow a rapid stream of air directly between them, what happens?',
    options: [
      'They attract and move closer together',
      'They fly apart in opposite directions',
      'They spin around their threads',
      'Nothing happens'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'Blowing air between the balls increases air speed, lowering the pressure between them. Higher stationary air pressure on the outer sides pushes both balls inward toward each other.',
    reasonUrdu: 'Wajah: Darmiyan ma hawa phoonkne se pressure kam ho jata hai aur bahir ka dabao balls ko aapas ma qareeb kheench leta hai.',
    formula: 'P_{between} < P_{outside}',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 369,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Viscous Losses in Bernoulli Flow',
    question: 'When Bernoulli\'s equation is modified for REAL fluids flowing in real pipes, what extra term must be added to account for friction?',
    options: [
      'Head loss due to friction ($h_L$ or $\\Delta P_{friction}$)',
      'Zero term',
      'Acceleration due to gravity squared',
      'Mass gained'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'In real fluids, viscous shear dissipates mechanical energy into heat: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 + \\Delta P_{loss}$.',
    reasonUrdu: 'Wajah: Asal fluids ma friction ki wajah sy head loss (energy loss) hota hai jo equation ma add kiya jata hai.',
    formula: 'P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 + \\Delta P_L',
    textbookRef: 'Sec 5.11 & 5.15, Page 101, 107-108'
  },
  {
    id: 370,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Bernoulli Along Different Streamlines',
    question: 'Can Bernoulli\'s constant have different numerical values on different streamlines in an incompressible rotational flow?',
    options: [
      'Yes, Bernoulli\'s constant is constant along a given streamline, but can differ across streamlines unless the flow is irrotational',
      'No, it is always identically the same across the entire universe',
      'Only if the fluid is a metal',
      'Only in a vacuum'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'In general rotational flow, Bernoulli\'s equation holds strictly along any individual streamline ($C = C(\\psi)$). If and only if the flow is irrotational ($\\nabla \\times \\vec{v} = 0$), the constant $C$ is identical throughout the entire flow field.',
    reasonUrdu: 'Wajah: Rotational flow ma har streamline ka apna constant ho sakta hai; sirf irrotational flow ma constant har jagah barabar hota hai.',
    formula: '\\nabla \\times \\vec{v} = 0 \\implies C = \\text{Uniform}',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 371,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Aerodynamic Lift on Aircraft Wing',
    question: 'An airplane wing (aerofoil) is curved on top and flatter on the bottom. According to Bernoulli\'s principle, how is aerodynamic lift generated?',
    options: [
      'Air rushes faster over the curved upper surface than the lower surface; lower pressure on top creates a net upward lift force ($F = \\Delta P \\cdot A$)',
      'Air pushed down creates lift by gravity repulsion',
      'The engine pushes the wings upward',
      'Wings are lighter than air'
    ],
    correctAnswer: 0,
    difficulty: 'Basic',
    explanation: 'The camber forces streamlines to crowd over the top surface ($v_{top} > v_{bottom}$). By Bernoulli: $P_{top} < P_{bottom}$. The upward pressure difference across the wing area creates aerodynamic lift.',
    reasonUrdu: 'Wajah: Wing ke upar hawa tezi se chalti hai jis se upar pressure kam aur niche zyada hota hai, ye pressure difference jahaz ko upar uthata hai.',
    formula: 'F_{lift} = (P_{bottom} - P_{top}) A',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 372,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Lift Force Numerical Calculation',
    question: 'An aircraft wing of total area $20\\text{ m}^2$ experiences airflow speed of $120\\text{ m s}^{-1}$ over its upper surface and $100\\text{ m s}^{-1}$ along its lower surface. Given air density $\\rho = 1.2\\text{ kg m}^{-3}$, what is the net upward lift force?',
    options: [
      '$52{,}800\\text{ N}$ ($52.8\\text{ kN}$)',
      '$26{,}400\\text{ N}$',
      '$10{,}000\\text{ N}$',
      '$105{,}600\\text{ N}$'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: '$\\Delta P = \\frac{1}{2} \\rho (v_{top}^2 - v_{bot}^2) = \\frac{1}{2} (1.2) \\times (120^2 - 100^2) = 0.6 \\times (14400 - 10000) = 0.6 \\times 4400 = 2640\\text{ Pa}$. Lift force $F = \\Delta P \\times A = 2640 \\times 20 = 52{,}800\\text{ N} = 52.8\\text{ kN}$.',
    reasonUrdu: 'Wajah: \\Delta P = 0.6 x (14400 - 10000) = 2640 Pa; Lift force = 2640 x 20 = 52,800 N.',
    formula: 'F_{lift} = \\frac{1}{2}\\rho (v_{top}^2 - v_{bot}^2) A',
    textbookRef: 'Sec 5.11, Page 101'
  },
  {
    id: 373,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Vascular Flutter and Arterial Collapse',
    question: 'When high-velocity blood surges through a partially constricted elastic artery, what dangerous phenomenon can occur due to Bernoulli\'s principle?',
    options: [
      'The steep pressure drop ($P \\downarrow$) inside the constriction allows external tissue pressure to momentarily collapse or flutter the artery shut',
      'The blood immediately boils',
      'The blood becomes an ideal gas',
      'The artery expands to infinite diameter'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'High velocity reduces internal lateral pressure. If internal pressure drops below surrounding tissue pressure, flexible artery walls can collapse shut, temporarily halting flow.',
    reasonUrdu: 'Wajah: Arteries ma blood ki teez raftari se andar ka dabao gir jata hai jis se bahir ke dabao ki wajah sy artery achanak collapse (flutter) ho sakti hai.',
    formula: 'P_{internal} < P_{external}',
    textbookRef: 'For your info & Sec 5.11, Page 101'
  },
  {
    id: 374,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Vertical Siphon Mechanics',
    question: 'In a siphon draining water from a high reservoir over a ridge to a lower reservoir, what drives the continuous flow over the ridge crest?',
    options: [
      'Atmospheric pressure pushes water into the siphon inlet, and gravitational potential energy difference between the reservoirs drives continuous flow via Bernoulli\'s equation',
      'Capillary action only',
      'Viscous drag only',
      'Electric attraction'
    ],
    correctAnswer: 0,
    difficulty: 'Intermediate',
    explanation: 'The liquid column in the longer discharge arm has greater weight than in the shorter arm, reducing crest pressure and pulling liquid continuously over the crest.',
    reasonUrdu: 'Wajah: Siphon ma dono reservoirs ke elevation farq aur atmospheric pressure se continuous flow chalta hai.',
    formula: 'v = \\sqrt{2g \\Delta h}',
    textbookRef: 'Sec 5.11, Page 101, 105'
  },
  {
    id: 375,
    module: 'O',
    moduleName: 'Bernoulli\'s Equation & Energy',
    topic: 'Unsteady Bernoulli Equation',
    question: 'For unsteady, irrotational flow where velocity potential $\\phi$ changes with time, what time-derivative term is added to Bernoulli\'s equation?',
    options: [
      '$\\rho \\frac{\\partial \\phi}{\\partial t}$',
      '$\\frac{\\partial v}{\\partial x}$',
      '$\\frac{\\partial P}{\\partial t}$',
      '$\\rho g \\frac{\\partial h}{\\partial t}$'
    ],
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'Integrating Euler\'s equation for unsteady irrotational flow yields: $\\rho \\frac{\\partial \\phi}{\\partial t} + P + \\frac{1}{2}\\rho v^2 + \\rho g h = f(t)$, where $\\phi$ is the velocity potential ($\\vec{v} = \\nabla\\phi$).',
    reasonUrdu: 'Wajah: Unsteady irrotational flow ma time-dependent term \\rho (\\partial \\phi / \\partial t) add hoti hai.',
    formula: '\\rho \\frac{\\partial \\phi}{\\partial t} + P + \\frac{1}{2}\\rho v^2 + \\rho g h = f(t)',
    textbookRef: 'Sec 5.11, Page 101'
  }
];
