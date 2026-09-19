export interface PhysicsChapter {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
}

export const physicsChapters: PhysicsChapter[] = [
  {
    id: 1,
    title: "Units and Measurements",
    slug: "units-and-measurements",
    description: "Learn SI units, dimensions and measurements.",
    content: `
Units and Measurements

• SI Base Units
• Derived Units
• Accuracy & Precision
• Significant Figures
• Dimensional Analysis
`,
  },

  {
    id: 2,
    title: "Motion in One Dimension",
    slug: "motion-in-one-dimension",
    description: "Basic concepts of motion.",
    content: `
Motion

• Distance
• Displacement
• Speed
• Velocity
• Acceleration
`,
  },

  {
    id: 3,
    title: "Laws of Motion",
    slug: "laws-of-motion",
    description: "Newton's Laws of Motion.",
    content: `
Newton's Laws

• First Law
• Second Law
• Third Law
• Friction
`,
  },
];