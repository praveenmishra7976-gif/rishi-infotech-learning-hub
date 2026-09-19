export default function ChemistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-100 min-h-screen">
      {children}
    </main>
  );
}