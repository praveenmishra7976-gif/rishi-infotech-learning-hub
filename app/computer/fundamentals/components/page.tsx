import ChapterTemplate from "@/app/components/ChapterTemplate";

export default function ComponentsPage() {
  return (
    <ChapterTemplate
      subject="Computer Fundamentals"
      title="Components of Computer"
      url="/computer/fundamentals/components"
      previous={{
        title: "Types of Computer",
        href: "/computer/fundamentals/types",
      }}
      next={{
        title: "Computer Memory",
        href: "/computer/fundamentals/memory",
      }}
      content={`
A computer system consists of different hardware components that work together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Input Unit

The Input Unit accepts data and instructions from the user.

Examples:

• Keyboard

• Mouse

• Scanner

• Microphone

• Webcam

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. CPU (Central Processing Unit)

CPU is called the Brain of the Computer.

It processes all instructions.

CPU has three parts:

• ALU (Arithmetic Logic Unit)

• CU (Control Unit)

• Registers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ALU

Performs:

• Addition

• Subtraction

• Multiplication

• Division

• Logical Operations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CU (Control Unit)

Controls all hardware components.

It manages the flow of data between devices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Registers

Very small high-speed memory inside CPU.

Stores temporary data during processing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. Memory Unit

Stores data and programs.

Memory is of two types:

Primary Memory

Secondary Memory

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Output Unit

Displays processed information.

Examples:

• Monitor

• Printer

• Speaker

• Projector

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. Storage Devices

Used for permanent storage.

Examples:

• Hard Disk

• SSD

• Pen Drive

• Memory Card

• CD/DVD

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Block Diagram

Input Unit

↓

CPU

↓

Memory

↓

Output Unit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary

✔ Input Unit

✔ CPU

✔ ALU

✔ CU

✔ Registers

✔ Memory Unit

✔ Output Unit

✔ Storage Devices
`}
    />
  );
}