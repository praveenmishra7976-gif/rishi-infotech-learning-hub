export interface ChemistryChapter {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
}

export const chemistryChapters: ChemistryChapter[] = [
  {
    id: 1,
    title: "Some Basic Concepts of Chemistry",
    slug: "basic-concepts",
    description: "Introduction, Mole Concept and Stoichiometry",
    content: `
# Some Basic Concepts of Chemistry

• Matter

• Mole Concept

• Atomic Mass

• Molecular Mass

• Empirical Formula

• Molecular Formula

• Avogadro Number

• Stoichiometry
`
  },

  {
    id: 2,
    title: "Structure of Atom",
    slug: "structure-of-atom",
    description: "Atomic Models and Electronic Configuration",
    content: `
# Structure of Atom

• Dalton Model

• Thomson Model

• Rutherford Model

• Bohr Model

• Quantum Numbers

• Electronic Configuration
`
  },

  {
    id: 3,
    title: "Classification of Elements",
    slug: "classification-of-elements",
    description: "Periodic Table",
    content: `
# Classification of Elements

• Modern Periodic Table

• Groups

• Periods

• Trends

• Atomic Radius

• Ionization Energy

• Electron Affinity
`
  },

  {
    id: 4,
    title: "Chemical Bonding",
    slug: "chemical-bonding",
    description: "Ionic and Covalent Bonding",
    content: `
# Chemical Bonding

• Ionic Bond

• Covalent Bond

• Coordinate Bond

• VSEPR Theory

• Hybridization

• Hydrogen Bonding
`
  },

  {
    id: 5,
    title: "States of Matter",
    slug: "states-of-matter",
    description: "Solid, Liquid and Gas",
    content: `
# States of Matter

• Gas Laws

• Boyle's Law

• Charles Law

• Ideal Gas Equation

PV = nRT
`
  },

  {
    id: 6,
    title: "Thermodynamics",
    slug: "thermodynamics",
    description: "Heat and Energy",
    content: `
# Thermodynamics

• Internal Energy

• Enthalpy

• Entropy

• Gibbs Free Energy

• Hess Law
`
  }
];