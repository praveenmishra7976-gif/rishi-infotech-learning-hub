export interface MathChapter {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
}

export const mathChapters: MathChapter[] = [

{
id:1,
title:"Number System",
slug:"number-system",
description:"Natural Numbers, Integers, Rational Numbers",
content:`
Number System

• Natural Numbers

• Whole Numbers

• Integers

• Rational Numbers

• Irrational Numbers

• Real Numbers
`
},

{
id:2,
title:"Algebra",
slug:"algebra",
description:"Variables and Algebraic Expressions",
content:`
Algebra

• Variables

• Constants

• Expressions

• Identities

• Factorization
`
},

{
id:3,
title:"Linear Equations",
slug:"linear-equations",
description:"One Variable and Two Variables",
content:`
Linear Equations

ax+b=0

Slope

Graph

Applications
`
},

{
id:4,
title:"Quadratic Equations",
slug:"quadratic-equations",
description:"Quadratic Formula",
content:`
Quadratic Equation

ax²+bx+c=0

Discriminant

Roots

Quadratic Formula
`
},

{
id:5,
title:"Trigonometry",
slug:"trigonometry",
description:"Sin Cos Tan",
content:`
Trigonometry

sin

cos

tan

cot

sec

cosec
`
},

];