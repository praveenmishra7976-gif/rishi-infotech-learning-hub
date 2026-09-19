import ChapterTemplate from "@/app/components/ChapterTemplate";

export default function ApplicationsPage() {
  return (
    <ChapterTemplate
      subject="Computer Fundamentals"
      title="Applications of Computer"
      url="/computer/fundamentals/applications"
      previous={{
        title: "Characteristics of Computer",
        href: "/computer/fundamentals/characteristics",
      }}
      next={{
        title: "Types of Computer",
        href: "/computer/fundamentals/types",
      }}
      content={`
Computer is used in almost every field of life.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Education

Computers help students and teachers in learning.

Examples:

• Online Classes

• Smart Classrooms

• Digital Libraries

• Online Exams

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. Banking

Banks use computers for secure and fast transactions.

Examples:

• ATM

• Internet Banking

• Mobile Banking

• Passbook Printing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. Business

Businesses use computers for daily operations.

Examples:

• Billing

• Accounting

• Payroll

• Inventory Management

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Hospital

Hospitals maintain patient information digitally.

Examples:

• Patient Records

• Laboratory Reports

• Appointment Booking

• Medical Billing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. Government

Government departments provide digital services.

Examples:

• Aadhaar

• Passport

• Income Tax

• Digital India Services

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. Entertainment

Computers provide entertainment through digital media.

Examples:

• Movies

• Games

• Music

• Video Streaming

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. Science & Research

Scientists use computers for complex calculations.

Examples:

• Weather Forecasting

• Space Research

• Simulations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. Communication

Computers connect people worldwide.

Examples:

• Email

• WhatsApp Web

• Zoom

• Google Meet

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. Engineering

Engineers design and test products using computers.

Examples:

• AutoCAD

• SolidWorks

• MATLAB

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. Transportation

Computers manage transportation systems.

Examples:

• Railway Reservation

• Flight Booking

• GPS Navigation

• Traffic Management

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary

✔ Education

✔ Banking

✔ Business

✔ Hospital

✔ Government

✔ Entertainment

✔ Science

✔ Communication

✔ Engineering

✔ Transportation
`}
    />
  );
}