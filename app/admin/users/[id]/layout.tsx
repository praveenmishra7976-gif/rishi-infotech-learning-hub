import type { ReactNode } from "react";

export default function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto p-8">

        {children}

      </div>

    </main>
  );
}