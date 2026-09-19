import type { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

export default function ComputerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto flex">

        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  );
}