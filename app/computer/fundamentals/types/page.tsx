import ChapterTemplate from "@/app/components/ChapterTemplate";

export default function TypesPage() {
  return (
    <ChapterTemplate
      subject="Computer Fundamentals"
      title="Types of Computer"
      url="/computer/fundamentals/types"
      previous={{
        title: "Applications of Computer",
        href: "/computer/fundamentals/applications",
      }}
      next={{
        title: "Components of Computer",
        href: "/computer/fundamentals/components",
      }}
      content={`
Computers are classified according to their size, speed, processing power, and purpose.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Super Computer

The fastest and most powerful computer.

Uses:

• Weather Forecasting

• Space Research

• Artificial Intelligence

• Scientific Simulation

Examples:

• PARAM Siddhi

• Fugaku

• Summit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. Mainframe Computer

A very large computer capable of handling thousands of users simultaneously.

Uses:

• Banking

• Railway Reservation

• Insurance

• Government Departments

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. Mini Computer

Smaller than a mainframe but more powerful than a microcomputer.

Uses:

• Small Industries

• Universities

• Laboratories

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Micro Computer

The most common type of computer used by individuals.

Examples:

• Desktop

• Laptop

• Tablet

• Smartphone

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Micro Computers

Desktop Computer

• Used at homes and offices

Laptop

• Portable computer

Tablet

• Touch screen computer

Smartphone

• Pocket computer with internet

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Classification by Purpose

General Purpose Computer

Used for everyday work.

Examples:

• Browsing

• MS Office

• Programming

Special Purpose Computer

Designed for one specific task.

Examples:

• ATM

• Washing Machine Controller

• Traffic Control System

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Comparison

Super Computer

✔ Fastest

✔ Most Expensive

✔ Scientific Work

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mainframe

✔ Large Organizations

✔ Thousands of Users

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mini Computer

✔ Medium Organizations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Micro Computer

✔ Personal Use

✔ Affordable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary

✔ Super Computer

✔ Mainframe Computer

✔ Mini Computer

✔ Micro Computer

✔ General Purpose

✔ Special Purpose
`}
    />
  );
}