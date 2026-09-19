"use client";

import { useState } from "react";

const themes = [
  { name: "Default", value: "default" },
  { name: "Diwali", value: "diwali" },
  { name: "Holi", value: "holi" },
  { name: "Independence Day", value: "independence-day" },
  { name: "Republic Day", value: "republic-day" },
  { name: "Eid", value: "eid" },
  { name: "Christmas", value: "christmas" },
  { name: "Teachers Day", value: "teachers-day" },
  { name: "Childrens Day", value: "childrens-day" },
];

export default function ThemeTest() {
  const [theme, setTheme] = useState("default");

  function changeTheme(value: string) {
    setTheme(value);

    document.documentElement.setAttribute(
      "data-festival-theme",
      value
    );
  }

  return (
    <div className="min-h-screen bg-[var(--festival-background)] text-[var(--festival-text)]">
      <div className="border-b border-[var(--festival-border)] bg-[var(--festival-surface)] p-6">
        <h1 className="text-2xl font-bold">
          Rishi Infotech Learning Hub
        </h1>

        <p className="mt-2 text-[var(--festival-text-soft)]">
          Global Festival Theme Test
        </p>
      </div>

      <main className="mx-auto max-w-6xl p-6">
        <div className="mb-8 flex flex-wrap gap-3">
          {themes.map((item) => (
            <button
              key={item.value}
              onClick={() => changeTheme(item.value)}
              className="rounded-xl bg-[var(--festival-primary)] px-4 py-2 font-semibold text-white shadow transition hover:bg-[var(--festival-primary-hover)]"
            >
              {item.name}
            </button>
          ))}
        </div>

        <section className="rounded-3xl bg-[var(--festival-surface)] p-8 shadow-[var(--festival-shadow)] border border-[var(--festival-border)]">
          <div
            className="rounded-2xl p-8 text-white"
            style={{
              background: "var(--festival-gradient)",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider">
              Current Theme
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {theme}
            </h2>

            <p className="mt-4 opacity-90">
              This theme is controlled globally.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--festival-border)] bg-[var(--festival-surface-soft)] p-5">
              <h3 className="font-bold text-[var(--festival-primary)]">
                Learning
              </h3>
              <p className="mt-2 text-[var(--festival-text-soft)]">
                Courses and notes
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--festival-border)] bg-[var(--festival-surface-soft)] p-5">
              <h3 className="font-bold text-[var(--festival-primary)]">
                Practice
              </h3>
              <p className="mt-2 text-[var(--festival-text-soft)]">
                Quizzes and MCQs
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--festival-border)] bg-[var(--festival-surface-soft)] p-5">
              <h3 className="font-bold text-[var(--festival-primary)]">
                Technology
              </h3>
              <p className="mt-2 text-[var(--festival-text-soft)]">
                AI and developer tools
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
