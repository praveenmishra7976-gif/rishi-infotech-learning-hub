
export type PhysicsTopic = {
  title: string;
  explanation: string;
  example?: string;
};

export type PhysicsChapter = {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
  formulas: string[];
  laws: string[];
  detailedTopics: PhysicsTopic[];
};

export type PhysicsQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export const physicsChapters: PhysicsChapter[] = [
  {
    id: "physical-quantities",
    title: "Physical Quantities & Measurement",
    description:
      "Learn physical quantities, SI units, measurement, accuracy, precision and important measuring instruments.",
    icon: "📏",

    topics: [
      "Physical quantities",
      "SI units",
      "Fundamental quantities",
      "Derived quantities",
      "Measurement",
      "Accuracy and precision",
      "Measuring instruments",
    ],

    formulas: [
      "Density = Mass / Volume",
      "Speed = Distance / Time",
      "Average speed = Total distance / Total time",
    ],

    laws: [
      "Every physical measurement should be expressed using a numerical value and an appropriate unit.",
    ],

    detailedTopics: [
      {
        title: "Physical Quantities",
        explanation:
          "A physical quantity is a measurable property of an object or phenomenon. Examples include length, mass, time, temperature, speed and force. A physical quantity is normally written using a numerical value followed by a unit.",
        example:
          "For example, if the length of a table is 2 metres, 2 is the numerical value and metre is the unit.",
      },
      {
        title: "SI Units",
        explanation:
          "The International System of Units, called SI units, provides standard units for scientific measurements. Using standard units allows scientists and students around the world to communicate measurements accurately.",
        example:
          "Length is measured in metre (m), mass in kilogram (kg), time in second (s) and temperature in kelvin (K).",
      },
      {
        title: "Fundamental Quantities",
        explanation:
          "Fundamental quantities are basic physical quantities that are independent of other physical quantities. The SI system has seven fundamental quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity.",
      },
      {
        title: "Derived Quantities",
        explanation:
          "Derived quantities are obtained by combining fundamental quantities mathematically. Area, volume, speed, acceleration, force and density are examples of derived quantities.",
        example:
          "Speed is obtained by dividing distance by time, so its SI unit is metre per second (m/s).",
      },
      {
        title: "Measurement",
        explanation:
          "Measurement means comparing an unknown physical quantity with a known standard quantity of the same kind. A ruler can be used to measure length, a stopwatch to measure time and a balance to measure mass.",
      },
      {
        title: "Accuracy and Precision",
        explanation:
          "Accuracy describes how close a measurement is to the true value, while precision describes how close repeated measurements are to one another. A measurement can be precise without being accurate if there is a systematic error.",
      },
      {
        title: "Measuring Instruments",
        explanation:
          "Different physical quantities require different instruments. A metre scale measures length, a stopwatch measures time, a thermometer measures temperature, an ammeter measures current and a voltmeter measures potential difference.",
      },
    ],
  },

  {
    id: "motion",
    title: "Motion",
    description:
      "Understand rest and motion, distance, displacement, speed, velocity, acceleration and motion graphs.",
    icon: "🏃",

    topics: [
      "Rest and motion",
      "Distance",
      "Displacement",
      "Speed",
      "Velocity",
      "Acceleration",
      "Uniform motion",
      "Non-uniform motion",
      "Graphs of motion",
    ],

    formulas: [
      "Speed = Distance / Time",
      "Velocity = Displacement / Time",
      "Acceleration = Change in velocity / Time",
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
    ],

    laws: [
      "An object remains at rest or in uniform motion unless acted upon by an external force.",
    ],

    detailedTopics: [
      {
        title: "Rest and Motion",
        explanation:
          "An object is said to be at rest when its position does not change with respect to a reference point. An object is in motion when its position changes with respect to a reference point over time.",
        example:
          "A passenger sitting inside a moving bus is at rest relative to the bus but is moving relative to a person standing on the road.",
      },
      {
        title: "Distance",
        explanation:
          "Distance is the total length of the path travelled by an object. It is a scalar quantity, meaning that it has magnitude but no direction. Distance is always positive or zero.",
        example:
          "If a student walks 100 m to school and then walks 50 m back, the total distance travelled is 150 m.",
      },
      {
        title: "Displacement",
        explanation:
          "Displacement is the shortest straight-line distance from the initial position to the final position, together with its direction. Unlike distance, displacement is a vector quantity.",
        example:
          "If a person walks around a circular field and returns to the starting point, the distance is not zero but the displacement is zero.",
      },
      {
        title: "Speed",
        explanation:
          "Speed tells us how quickly an object covers distance. It is calculated by dividing the total distance travelled by the total time taken.",
        example:
          "A car travelling 100 km in 2 hours has an average speed of 50 km/h.",
      },
      {
        title: "Velocity",
        explanation:
          "Velocity is the rate of change of displacement. It has both magnitude and direction. If either the magnitude or direction changes, the velocity changes.",
      },
      {
        title: "Acceleration",
        explanation:
          "Acceleration is the rate at which velocity changes with time. An object accelerates when it speeds up, slows down or changes its direction.",
        example:
          "A car increasing its speed from 10 m/s to 20 m/s is accelerating.",
      },
      {
        title: "Uniform Motion",
        explanation:
          "An object has uniform motion when it covers equal distances in equal intervals of time. Its speed remains constant.",
      },
      {
        title: "Non-uniform Motion",
        explanation:
          "An object has non-uniform motion when it covers unequal distances in equal intervals of time or when its direction changes with time.",
      },
      {
        title: "Motion Graphs",
        explanation:
          "Graphs are useful for representing motion. A distance-time graph can show how distance changes with time, while a velocity-time graph can be used to study velocity and acceleration.",
      },
    ],
  },

  {
    id: "force",
    title: "Force & Laws of Motion",
    description:
      "Study force, inertia, momentum and Newton's three laws of motion with everyday examples.",
    icon: "💪",

    topics: [
      "Force",
      "Effects of force",
      "Inertia",
      "Momentum",
      "Newton's First Law",
      "Newton's Second Law",
      "Newton's Third Law",
    ],

    formulas: [
      "Force = Mass × Acceleration",
      "F = ma",
      "Momentum = Mass × Velocity",
      "p = mv",
    ],

    laws: [
      "Newton's First Law: An object continues in its state of rest or uniform motion unless acted upon by an external force.",
      "Newton's Second Law: Force is related to the rate of change of momentum.",
      "Newton's Third Law: For every action, there is an equal and opposite reaction.",
    ],

    detailedTopics: [
      {
        title: "Force",
        explanation:
          "Force is a push or pull that can change the state of motion, direction or shape of an object. Force is a vector quantity and its SI unit is newton (N).",
        example:
          "Pushing a stationary box can make it move, while applying force to a ball can change its direction.",
      },
      {
        title: "Effects of Force",
        explanation:
          "A force can start or stop motion, change the speed of an object, change its direction or change its shape. The effect depends on the magnitude and direction of the applied force.",
      },
      {
        title: "Inertia",
        explanation:
          "Inertia is the tendency of an object to resist a change in its state of rest or motion. Greater mass means greater inertia.",
        example:
          "When a bus suddenly starts, passengers tend to move backward because their bodies resist the change in motion.",
      },
      {
        title: "Momentum",
        explanation:
          "Momentum is the quantity of motion possessed by a moving object. It depends on both mass and velocity. A heavier or faster-moving object generally has greater momentum.",
      },
      {
        title: "Newton's First Law",
        explanation:
          "Newton's First Law states that an object remains at rest or continues in uniform motion in a straight line unless an external unbalanced force acts on it. This law is also called the law of inertia.",
        example:
          "A book lying on a table remains there until someone applies a force to move it.",
      },
      {
        title: "Newton's Second Law",
        explanation:
          "Newton's Second Law explains how force affects motion. The acceleration produced in an object depends on the applied force and its mass. For constant mass, force is proportional to acceleration.",
        example:
          "A football accelerates more when it is kicked harder.",
      },
      {
        title: "Newton's Third Law",
        explanation:
          "Newton's Third Law states that forces always occur in pairs. When one object applies a force to another object, the second object applies an equal and opposite force on the first.",
        example:
          "When a swimmer pushes water backward, the water pushes the swimmer forward.",
      },
    ],
  },

  {
    id: "gravitation",
    title: "Gravitation",
    description:
      "Learn gravitational force, gravity, mass, weight, free fall, pressure and buoyancy.",
    icon: "🌍",

    topics: [
      "Gravitation",
      "Gravity",
      "Mass",
      "Weight",
      "Free fall",
      "Acceleration due to gravity",
      "Thrust and pressure",
      "Buoyancy",
    ],

    formulas: [
      "Weight = Mass × Acceleration due to gravity",
      "W = mg",
      "F = Gm₁m₂ / r²",
      "Pressure = Force / Area",
      "Density = Mass / Volume",
    ],

    laws: [
      "Newton's law of universal gravitation states that every mass attracts every other mass.",
    ],

    detailedTopics: [
      {
        title: "Gravitation",
        explanation:
          "Gravitation is the force of attraction between any two objects having mass. It is responsible for keeping planets in orbit and for objects falling towards Earth.",
      },
      {
        title: "Gravity",
        explanation:
          "Gravity is the attractive force exerted by a planet or other massive body. Near Earth's surface, gravity pulls objects towards the centre of Earth.",
        example:
          "When a stone is released from your hand, it falls downward because of Earth's gravitational attraction.",
      },
      {
        title: "Mass and Weight",
        explanation:
          "Mass is the amount of matter in an object and is measured in kilograms. Weight is the gravitational force acting on that mass and is measured in newtons. Mass remains approximately constant while weight can change when gravitational acceleration changes.",
      },
      {
        title: "Free Fall",
        explanation:
          "An object is said to be in free fall when gravity is the only significant force acting on it. Near Earth's surface, freely falling objects have an acceleration of approximately 9.8 m/s².",
      },
      {
        title: "Acceleration Due to Gravity",
        explanation:
          "The acceleration produced in a freely falling object due to Earth's gravity is called acceleration due to gravity, represented by g. Its approximate value near Earth's surface is 9.8 m/s².",
      },
      {
        title: "Pressure",
        explanation:
          "Pressure is the force acting normally on a unit area. For the same force, pressure increases when the area decreases.",
        example:
          "A sharp nail has a small tip area, so the same force produces high pressure and allows it to enter wood easily.",
      },
      {
        title: "Buoyancy",
        explanation:
          "Buoyancy is the upward force exerted by a fluid on an object partially or completely immersed in it. Whether an object floats or sinks depends on factors including its density and the buoyant force.",
      },
    ],
  },

  {
    id: "work-energy-power",
    title: "Work, Energy & Power",
    description:
      "Understand mechanical work, different forms of energy, kinetic energy, potential energy and power.",
    icon: "⚡",

    topics: [
      "Work",
      "Energy",
      "Kinetic energy",
      "Potential energy",
      "Mechanical energy",
      "Power",
      "Conservation of energy",
    ],

    formulas: [
      "Work = Force × Displacement",
      "W = Fs",
      "Kinetic Energy = ½mv²",
      "Potential Energy = mgh",
      "Power = Work / Time",
    ],

    laws: [
      "Energy can neither be created nor destroyed; it can only be transformed from one form to another.",
    ],

    detailedTopics: [
      {
        title: "Work",
        explanation:
          "In physics, work is done when a force causes displacement of an object in the direction of the force. If there is no displacement, mechanical work is zero.",
        example:
          "When a person pushes a box and the box moves forward, the applied force does work on the box.",
      },
      {
        title: "Energy",
        explanation:
          "Energy is the capacity to do work. It exists in many forms such as mechanical, thermal, electrical, chemical and light energy.",
      },
      {
        title: "Kinetic Energy",
        explanation:
          "Kinetic energy is the energy possessed by an object because of its motion. It depends on the mass and the square of the velocity.",
        example:
          "A moving car has kinetic energy because it is in motion.",
      },
      {
        title: "Potential Energy",
        explanation:
          "Potential energy is stored energy associated with the position or configuration of an object. Gravitational potential energy increases when an object is raised to a greater height.",
      },
      {
        title: "Mechanical Energy",
        explanation:
          "Mechanical energy is commonly associated with the sum of kinetic and potential energy of a system.",
      },
      {
        title: "Power",
        explanation:
          "Power describes how quickly work is done or energy is transferred. Two machines can perform the same amount of work but the one that completes it in less time has greater power.",
      },
      {
        title: "Conservation of Energy",
        explanation:
          "Energy cannot be created or destroyed in an isolated system. It can change from one form into another while the total amount of energy remains conserved.",
        example:
          "In a hydroelectric plant, the potential energy of stored water is transformed into kinetic energy and then electrical energy.",
      },
    ],
  },

  {
    id: "heat",
    title: "Heat & Temperature",
    description:
      "Learn heat, temperature, thermal expansion and the three methods of heat transfer.",
    icon: "🌡️",

    topics: [
      "Heat",
      "Temperature",
      "Thermal expansion",
      "Conduction",
      "Convection",
      "Radiation",
      "Specific heat",
      "Change of state",
    ],

    formulas: [
      "Heat gained or lost = mcΔT",
      "Q = mcΔT",
    ],

    laws: [
      "Heat naturally flows from a body at higher temperature to a body at lower temperature until thermal equilibrium is approached.",
    ],

    detailedTopics: [
      {
        title: "Heat",
        explanation:
          "Heat is energy transferred from one body to another because of a temperature difference. Heat is energy in transfer, not simply a substance stored inside an object.",
      },
      {
        title: "Temperature",
        explanation:
          "Temperature indicates the thermal state of a body and is related to the average kinetic energy of its particles. A thermometer is used to measure temperature.",
      },
      {
        title: "Thermal Expansion",
        explanation:
          "Most materials expand when heated and contract when cooled. Thermal expansion must be considered in structures such as railway tracks, bridges and electrical wires.",
        example:
          "Small gaps are left between railway tracks to allow room for expansion during hot weather.",
      },
      {
        title: "Conduction",
        explanation:
          "Conduction is the transfer of heat through a material without bulk movement of the material itself. Metals are generally good conductors of heat.",
      },
      {
        title: "Convection",
        explanation:
          "Convection is the transfer of heat through the movement of fluids such as liquids and gases. Warmer fluid generally becomes less dense and rises while cooler fluid moves down.",
      },
      {
        title: "Radiation",
        explanation:
          "Radiation transfers thermal energy through electromagnetic waves and does not require a material medium. Energy from the Sun reaches Earth mainly through radiation.",
      },
      {
        title: "Specific Heat",
        explanation:
          "Specific heat capacity describes how much heat energy is required to raise the temperature of a unit mass of a substance by one degree Celsius or one kelvin.",
      },
      {
        title: "Change of State",
        explanation:
          "Matter can change between solid, liquid and gas states when energy is supplied or removed. Melting, freezing, evaporation, condensation and boiling are common changes of state.",
      },
    ],
  },

  {
    id: "light",
    title: "Light",
    description:
      "Study reflection, refraction, mirrors, lenses, the human eye and optical instruments.",
    icon: "💡",

    topics: [
      "Nature of light",
      "Reflection",
      "Laws of reflection",
      "Plane mirror",
      "Spherical mirrors",
      "Refraction",
      "Lenses",
      "Human eye",
      "Optical instruments",
    ],

    formulas: [
      "Mirror formula: 1/f = 1/v + 1/u",
      "Magnification = Image height / Object height",
      "Lens formula: 1/f = 1/v - 1/u",
    ],

    laws: [
      "Angle of incidence is equal to angle of reflection.",
      "The incident ray, reflected ray and normal lie in the same plane.",
    ],

    detailedTopics: [
      {
        title: "Nature of Light",
        explanation:
          "Light is a form of electromagnetic radiation that can travel through vacuum. It allows us to see objects when light reaches our eyes.",
      },
      {
        title: "Reflection",
        explanation:
          "Reflection is the bouncing back of light when it strikes a surface. The direction of reflected light depends on the angle at which the incident light strikes the surface.",
        example:
          "The image formed by a plane mirror is produced because light from the object is reflected by the mirror into our eyes.",
      },
      {
        title: "Plane Mirror",
        explanation:
          "A plane mirror has a flat reflecting surface. It generally forms a virtual, upright image of the same size as the object, with lateral inversion.",
      },
      {
        title: "Spherical Mirrors",
        explanation:
          "Spherical mirrors are reflecting surfaces that form part of a sphere. They are mainly classified as concave and convex mirrors. Their image formation depends on the position of the object.",
      },
      {
        title: "Refraction",
        explanation:
          "Refraction is the change in direction of light when it passes from one transparent medium to another because its speed changes.",
        example:
          "A pencil partly immersed in water may appear bent because light from the underwater part is refracted at the water-air boundary.",
      },
      {
        title: "Lenses",
        explanation:
          "Lenses are transparent optical devices that refract light. Convex lenses generally converge parallel rays while concave lenses generally diverge them.",
      },
      {
        title: "Human Eye",
        explanation:
          "The human eye is a natural optical system. The cornea and lens help focus light onto the retina, where light-sensitive cells respond and information is sent to the brain.",
      },
      {
        title: "Optical Instruments",
        explanation:
          "Optical instruments use mirrors, lenses or both to form useful images. Examples include cameras, microscopes, telescopes and spectacles.",
      },
    ],
  },

  {
    id: "sound",
    title: "Sound",
    description:
      "Learn sound waves, frequency, wavelength, amplitude, speed, echo and ultrasound.",
    icon: "🔊",

    topics: [
      "Production of sound",
      "Sound waves",
      "Frequency",
      "Amplitude",
      "Wavelength",
      "Time period",
      "Speed of sound",
      "Echo",
      "Ultrasound",
      "Infrasound",
    ],

    formulas: [
      "Wave speed = Frequency × Wavelength",
      "v = fλ",
      "Frequency = 1 / Time period",
    ],

    laws: [
      "Sound requires a material medium for propagation.",
    ],

    detailedTopics: [
      {
        title: "Production of Sound",
        explanation:
          "Sound is produced by vibrating objects. When an object vibrates, it causes surrounding particles in a medium to vibrate, creating a disturbance that travels through the medium.",
        example:
          "When a guitar string is plucked, it vibrates and produces sound.",
      },
      {
        title: "Sound Waves",
        explanation:
          "Sound generally travels through a medium as a mechanical wave. In air, sound propagates mainly as a longitudinal wave consisting of compressions and rarefactions.",
      },
      {
        title: "Frequency",
        explanation:
          "Frequency is the number of complete vibrations or cycles produced per second. Its SI unit is hertz (Hz). Higher frequency generally corresponds to a higher pitch.",
      },
      {
        title: "Amplitude",
        explanation:
          "Amplitude represents the maximum displacement of particles from their mean position. Greater amplitude is generally associated with greater loudness.",
      },
      {
        title: "Wavelength",
        explanation:
          "Wavelength is the distance between two successive points in the same phase of a wave, such as two successive compressions in a longitudinal sound wave.",
      },
      {
        title: "Time Period",
        explanation:
          "Time period is the time taken to complete one complete vibration. Frequency and time period are inversely related.",
      },
      {
        title: "Speed of Sound",
        explanation:
          "The speed of sound depends on the properties of the medium and its conditions. Sound generally travels faster in solids than in liquids and faster in liquids than in gases.",
      },
      {
        title: "Echo",
        explanation:
          "An echo is a repetition of sound caused by reflection from a distant surface. It can be used to estimate distances and is also useful in sonar applications.",
      },
      {
        title: "Ultrasound",
        explanation:
          "Ultrasound refers to sound waves with frequencies above the upper limit of normal human hearing. Ultrasound is used in medical imaging, cleaning and industrial testing.",
      },
      {
        title: "Infrasound",
        explanation:
          "Infrasound refers to sound waves with frequencies below the lower limit of normal human hearing. Certain natural events such as earthquakes and volcanic activity can produce very low-frequency sounds.",
      },
    ],
  },

  {
    id: "electricity",
    title: "Electricity",
    description:
      "Understand electric charge, current, voltage, resistance, circuits, power and electrical energy.",
    icon: "🔌",

    topics: [
      "Electric charge",
      "Electric current",
      "Potential difference",
      "Resistance",
      "Ohm's law",
      "Series circuits",
      "Parallel circuits",
      "Electrical power",
      "Electrical energy",
    ],

    formulas: [
      "Current = Charge / Time",
      "I = Q/t",
      "V = IR",
      "Power = VI",
      "Power = I²R",
      "Power = V²/R",
      "Electrical energy = Power × Time",
    ],

    laws: [
      "Ohm's law: At constant temperature, current through a conductor is directly proportional to potential difference across it.",
    ],

    detailedTopics: [
      {
        title: "Electric Charge",
        explanation:
          "Electric charge is a fundamental property of matter responsible for electrical interactions. There are two types of charge, commonly called positive and negative.",
      },
      {
        title: "Electric Current",
        explanation:
          "Electric current is the rate of flow of electric charge through a conductor. Its SI unit is ampere (A). A closed conducting path is required for sustained current in a simple circuit.",
      },
      {
        title: "Potential Difference",
        explanation:
          "Potential difference provides the energy change per unit charge between two points in an electrical circuit. It is measured in volts.",
      },
      {
        title: "Resistance",
        explanation:
          "Resistance is the opposition offered by a material to the flow of electric current. It depends on factors such as the material, length and cross-sectional area of a conductor and temperature.",
      },
      {
        title: "Ohm's Law",
        explanation:
          "Ohm's law states that, at constant physical conditions such as temperature, current through a conductor is directly proportional to the potential difference across it.",
      },
      {
        title: "Series Circuits",
        explanation:
          "In a series circuit, components are connected one after another in a single path. The same current passes through each component.",
      },
      {
        title: "Parallel Circuits",
        explanation:
          "In a parallel circuit, components are connected across separate branches. Each branch has the same potential difference across it, while the total current is divided among the branches.",
      },
      {
        title: "Electrical Power",
        explanation:
          "Electrical power is the rate at which electrical energy is transferred or converted. Appliances with higher power ratings generally transfer energy faster when operated under their rated conditions.",
      },
      {
        title: "Electrical Energy",
        explanation:
          "Electrical energy is the energy transferred when electric charge moves through a potential difference. Household electricity consumption is commonly measured in kilowatt-hours.",
      },
    ],
  },

  {
    id: "magnetism",
    title: "Magnetism",
    description:
      "Learn magnets, magnetic fields, electromagnets, motors, generators and electromagnetic induction.",
    icon: "🧲",

    topics: [
      "Magnets",
      "Magnetic field",
      "Magnetic field lines",
      "Earth's magnetism",
      "Electromagnets",
      "Electric motor",
      "Electromagnetic induction",
      "Electric generator",
    ],

    formulas: [
      "Magnetic force depends on the magnetic field, current and length of conductor.",
    ],

    laws: [
      "A moving electric charge can produce a magnetic field.",
      "Changing magnetic fields can induce electric current in suitable conductors.",
    ],

    detailedTopics: [
      {
        title: "Magnets",
        explanation:
          "A magnet is a material or object that produces a magnetic field and can attract certain magnetic materials. Magnets have north and south poles.",
      },
      {
        title: "Magnetic Field",
        explanation:
          "A magnetic field is the region around a magnet or current-carrying conductor where magnetic effects can be detected.",
      },
      {
        title: "Magnetic Field Lines",
        explanation:
          "Magnetic field lines are an imaginary representation used to show the direction and relative strength of a magnetic field. Outside a bar magnet they are conventionally drawn from north to south.",
      },
      {
        title: "Earth's Magnetism",
        explanation:
          "Earth behaves approximately like a giant magnet and has a magnetic field surrounding it. This magnetic field helps a compass indicate direction.",
      },
      {
        title: "Electromagnets",
        explanation:
          "An electromagnet is produced when electric current creates a magnetic field, usually using a coil of wire around a suitable core. Its magnetic effect can be controlled by controlling the current.",
      },
      {
        title: "Electric Motor",
        explanation:
          "An electric motor converts electrical energy into mechanical motion using the interaction between magnetic fields and current-carrying conductors.",
      },
      {
        title: "Electromagnetic Induction",
        explanation:
          "Electromagnetic induction is the production of an induced potential difference when the magnetic environment of a conductor changes.",
      },
      {
        title: "Electric Generator",
        explanation:
          "An electric generator converts mechanical energy into electrical energy through electromagnetic induction.",
      },
    ],
  },

  {
    id: "modern-physics",
    title: "Modern Physics",
    description:
      "Get an introduction to atoms, nuclei, radiation, nuclear energy, fission and fusion.",
    icon: "⚛️",

    topics: [
      "Atoms",
      "Nucleus",
      "Electrons",
      "Protons",
      "Neutrons",
      "Radioactivity",
      "Nuclear fission",
      "Nuclear fusion",
      "Nuclear energy",
    ],

    formulas: [
      "E = mc²",
      "Energy and mass are related through the speed of light.",
    ],

    laws: [
      "Mass and energy are related through the principles of relativity.",
    ],

    detailedTopics: [
      {
        title: "Atoms",
        explanation:
          "An atom is a basic unit of ordinary matter. It contains a small central nucleus surrounded by electrons. The nucleus contains protons and neutrons.",
      },
      {
        title: "Nucleus",
        explanation:
          "The nucleus is the dense central part of an atom. It contains positively charged protons and electrically neutral neutrons and contains most of the atom's mass.",
      },
      {
        title: "Electrons",
        explanation:
          "Electrons are negatively charged particles associated with atoms. Their arrangement and interactions are important in chemical bonding and electrical phenomena.",
      },
      {
        title: "Protons and Neutrons",
        explanation:
          "Protons have positive electric charge while neutrons have no net electric charge. Together they form the atomic nucleus.",
      },
      {
        title: "Radioactivity",
        explanation:
          "Radioactivity is the spontaneous transformation of unstable atomic nuclei accompanied by the emission of radiation. Different types of nuclear radiation have different properties and penetrating abilities.",
      },
      {
        title: "Nuclear Fission",
        explanation:
          "Nuclear fission is a process in which a heavy atomic nucleus splits into smaller nuclei and releases energy. It can also release neutrons that may participate in a chain reaction.",
      },
      {
        title: "Nuclear Fusion",
        explanation:
          "Nuclear fusion occurs when light atomic nuclei combine to form a heavier nucleus and release energy under suitable conditions. Fusion powers stars.",
      },
      {
        title: "Nuclear Energy",
        explanation:
          "Nuclear energy is energy associated with changes in atomic nuclei. It can be released through processes such as fission and fusion.",
      },
      {
        title: "Mass-Energy Equivalence",
        explanation:
          "Einstein's famous relation E = mc² expresses the equivalence between mass and energy. Because c² is extremely large, a small amount of mass can correspond to a very large amount of energy.",
      },
    ],
  },
];

export const physicsQuestions: PhysicsQuestion[] = [
  {
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: "Newton",
  },
  {
    question: "What is the formula for speed?",
    options: [
      "Time / Distance",
      "Distance / Time",
      "Mass / Volume",
      "Force / Area",
    ],
    answer: "Distance / Time",
  },
  {
    question: "What is the SI unit of energy?",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answer: "Joule",
  },
  {
    question: "Which law is represented by F = ma?",
    options: [
      "Newton's First Law",
      "Newton's Second Law",
      "Newton's Third Law",
      "Law of Gravitation",
    ],
    answer: "Newton's Second Law",
  },
  {
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    answer: "Ampere",
  },
  {
    question: "Which formula represents Ohm's law?",
    options: ["V = IR", "P = VI", "F = ma", "W = Fs"],
    answer: "V = IR",
  },
  {
    question: "What is the SI unit of power?",
    options: ["Joule", "Newton", "Watt", "Volt"],
    answer: "Watt",
  },
  {
    question: "Which instrument measures temperature?",
    options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
    answer: "Thermometer",
  },
  {
    question: "What is the wave-speed formula?",
    options: ["v = fλ", "F = ma", "V = IR", "W = Fs"],
    answer: "v = fλ",
  },
  {
    question: "Which force attracts objects towards the Earth?",
    options: ["Magnetic force", "Friction", "Gravity", "Buoyant force"],
    answer: "Gravity",
  },
  {
    question: "Which quantity is measured in kilograms?",
    options: ["Force", "Mass", "Power", "Pressure"],
    answer: "Mass",
  },
  {
    question: "What is the SI unit of pressure?",
    options: ["Pascal", "Joule", "Newton", "Watt"],
    answer: "Pascal",
  },
  {
    question: "Which quantity has both magnitude and direction?",
    options: ["Mass", "Distance", "Speed", "Velocity"],
    answer: "Velocity",
  },
  {
    question: "What is the approximate value of acceleration due to gravity near Earth?",
    options: ["2.8 m/s²", "9.8 m/s²", "20 m/s²", "98 m/s²"],
    answer: "9.8 m/s²",
  },
  {
    question: "Which method of heat transfer does not require a material medium?",
    options: ["Conduction", "Convection", "Radiation", "Diffusion"],
    answer: "Radiation",
  },
  {
    question: "What is the unit of frequency?",
    options: ["Newton", "Hertz", "Joule", "Volt"],
    answer: "Hertz",
  },
  {
    question: "What does a voltmeter measure?",
    options: [
      "Electric current",
      "Resistance",
      "Potential difference",
      "Power",
    ],
    answer: "Potential difference",
  },
  {
    question: "Which device converts electrical energy into mechanical energy?",
    options: ["Generator", "Motor", "Transformer", "Thermometer"],
    answer: "Motor",
  },
  {
    question: "Which type of nuclear process powers the Sun?",
    options: ["Fission", "Fusion", "Evaporation", "Conduction"],
    answer: "Fusion",
  },
  {
    question: "Which equation represents mass-energy equivalence?",
    options: ["F = ma", "V = IR", "E = mc²", "P = VI"],
    answer: "E = mc²",
  },
  {
    question: "Which particle has a negative electric charge?",
    options: ["Proton", "Neutron", "Electron", "Photon"],
    answer: "Electron",
  },
];