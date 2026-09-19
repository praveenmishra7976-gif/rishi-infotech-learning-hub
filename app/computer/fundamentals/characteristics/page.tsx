import ChapterTemplate from "@/app/components/ChapterTemplate";

export default function CharacteristicsPage() {
  return (
    <ChapterTemplate
      subject="Computer Fundamentals"
      title="Characteristics of Computer"
      url="/computer/fundamentals/characteristics"
      previous={{
        title: "Introduction to Computer",
        href: "/computer/fundamentals/introduction",
      }}
      next={{
        title: "Applications of Computer",
        href: "/computer/fundamentals/applications",
      }}
      content={`
Computer has many characteristics that make it an essential machine in today's world.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Speed

A computer can perform millions and billions of calculations within a second.

Examples:

• Scientific Calculations

• Banking Transactions

• Online Payments

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. Accuracy

Computers produce highly accurate results.

If the input is correct,
the output will also be correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. Automation

Once a program is started,
the computer works automatically without human intervention.

Examples:

• Automatic Billing

• Payroll System

• Railway Reservation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Storage Capacity

Computers can store huge amounts of data.

Examples:

• Documents

• Images

• Videos

• Databases

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. Reliability

Computers can work continuously without getting tired.

They perform the same task repeatedly with consistent results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. Diligence

Unlike humans,
computers never become tired or bored.

They can work for hours continuously.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. Versatility

A computer can perform many different kinds of work.

Examples:

• Education

• Banking

• Hospital

• Engineering

• Entertainment

• Government

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. Multitasking

Computers can perform multiple tasks simultaneously.

Examples:

• Playing Music

• Browsing Internet

• Editing Documents

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. Communication

Computers communicate through networks.

Examples:

• Internet

• Email

• Video Calls

• Cloud Computing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. Productivity

Computers increase efficiency and save both time and cost.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary

✔ High Speed

✔ Accuracy

✔ Automation

✔ Reliability

✔ Storage

✔ Diligence

✔ Versatility

✔ Multitasking

✔ Communication

✔ Productivity
`}
    />
  );
}