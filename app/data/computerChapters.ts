export interface ComputerChapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
}

export const computerChapters: ComputerChapter[] = [

{
id:1,
slug:"computer-fundamentals",
title:"Computer Fundamentals",
description:"Introduction to Computers",
content:`
# Computer Fundamentals

A computer is an electronic machine that accepts data,
processes it and produces useful information.

Main Parts

• Input Unit
• CPU
• Memory
• Output Unit

Applications

• Education
• Banking
• Medical
• Engineering
• Business

Advantages

• Speed
• Accuracy
• Automation
• Storage
• Reliability
`
},

{
id:2,
slug:"history-of-computer",
title:"History of Computer",
description:"Evolution of Computers",
content:`
# History of Computer

Charles Babbage is known as the Father of Computer.

Generations

1. Vacuum Tube
2. Transistor
3. Integrated Circuit
4. Microprocessor
5. Artificial Intelligence

Important People

• Charles Babbage
• Ada Lovelace
• Alan Turing
`
},

{
id:3,
slug:"computer-generations",
title:"Computer Generations",
description:"Five Generations of Computers",
content:`
# Computer Generations

First Generation
1940-1956

Second Generation
1956-1963

Third Generation
1964-1971

Fourth Generation
1971-Present

Fifth Generation
AI Based Computers
`
},

{
id:4,
slug:"input-devices",
title:"Input Devices",
description:"All Input Devices",
content:`
Examples

Keyboard
Mouse
Scanner
Microphone
Joystick
Light Pen
Barcode Reader
Touch Screen
`
},

{
id:5,
slug:"output-devices",
title:"Output Devices",
description:"All Output Devices",
content:`
Monitor
Printer
Projector
Speaker
Plotter
Headphone
`
},

{
id:6,
slug:"cpu",
title:"CPU",
description:"Central Processing Unit",
content:`
CPU is called the Brain of Computer.

Parts

ALU

CU

Registers
`
},

{
id:7,
slug:"memory",
title:"Memory",
description:"Primary Memory",
content:`
RAM

ROM

Cache Memory
`
},

{
id:8,
slug:"storage-devices",
title:"Storage Devices",
description:"Secondary Storage",
content:`
Hard Disk

SSD

DVD

Pen Drive

Memory Card
`
}

];