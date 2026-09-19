import ChapterTemplate from "@/app/components/ChapterTemplate";

export default function MemoryPage() {
  return (
    <ChapterTemplate
      subject="Computer Fundamentals"
      title="Computer Memory"
      url="/computer/fundamentals/memory"
      previous={{
        title: "Components of Computer",
        href: "/computer/fundamentals/components",
      }}
      next={undefined}
      content={`
Computer Memory is used to store data, programs and information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What is Memory?

Memory is the storage area of a computer where data and instructions are kept.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Memory

There are two major types:

• Primary Memory

• Secondary Memory

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Primary Memory

Primary Memory is directly connected to CPU.

It is very fast.

Types

• RAM

• ROM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RAM (Random Access Memory)

RAM is Temporary Memory.

Characteristics

✔ Fast

✔ Volatile

✔ Data is erased when power is OFF.

Examples

• DDR4 RAM

• DDR5 RAM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROM (Read Only Memory)

ROM stores permanent instructions.

Characteristics

✔ Permanent

✔ Non-Volatile

✔ Cannot be erased easily.

Examples

• BIOS

• Firmware

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. Secondary Memory

Secondary Memory stores data permanently.

Characteristics

✔ Large Capacity

✔ Slower than RAM

✔ Permanent Storage

Examples

• Hard Disk

• SSD

• Pen Drive

• Memory Card

• CD/DVD

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Difference between RAM and ROM

RAM

• Temporary

• Read & Write

• Very Fast

• Volatile

ROM

• Permanent

• Mostly Read Only

• Slower

• Non-Volatile

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Memory Units

1 Bit

8 Bits = 1 Byte

1024 Bytes = 1 KB

1024 KB = 1 MB

1024 MB = 1 GB

1024 GB = 1 TB

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary

✔ Primary Memory

✔ RAM

✔ ROM

✔ Secondary Memory

✔ Storage Devices

✔ Memory Units
`}
    />
  );
}