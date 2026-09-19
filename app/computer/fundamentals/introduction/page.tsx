import ChapterTemplate from "@/app/components/ChapterTemplate";

export default function IntroductionPage() {
  return (
    <ChapterTemplate
      subject="Computer Fundamentals"
      title="Introduction to Computer"
      url="/computer/fundamentals/introduction"
      previous={undefined}
      next={{
        title: "Characteristics of Computer",
        href: "/computer/fundamentals/characteristics",
      }}
      content={`
A computer is an electronic device that accepts data as input,
processes it according to instructions,
stores it,
and produces meaningful information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition

A Computer is an electronic machine that works on the IPO Cycle.

Input → Processing → Output

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions of Computer

• Input

Accepts data from the user.

Examples:

Keyboard

Mouse

Scanner

Microphone

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Processing

Processes the input using CPU.

CPU performs:

• Arithmetic Operations

• Logical Operations

• Decision Making

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Storage

Stores data for future use.

Examples:

Hard Disk

SSD

Pen Drive

Memory Card

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Output

Displays processed information.

Examples:

Monitor

Printer

Speaker

Projector

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Advantages

• Very High Speed

• High Accuracy

• Huge Storage

• Reliability

• Automation

• Multitasking

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applications

• Education

• Banking

• Hospital

• Business

• Entertainment

• Government

• Railway Reservation

• Online Shopping

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Examples of Computers

Desktop Computer

Laptop

Tablet

Smartphone

Server

Super Computer
`}
    />
  );
}