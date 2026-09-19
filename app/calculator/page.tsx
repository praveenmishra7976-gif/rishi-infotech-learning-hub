"use client";

import { useState } from "react";
import {
  Calculator,
  Check,
  RotateCcw,
} from "lucide-react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");

  const buttons = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "−",
    "0",
    ".",
    "%",
    "+",
  ];

  const isOperator = (value: string) =>
    ["+", "−", "×", "÷"].includes(value);

  const addValue = (value: string) => {
    setDisplay((current) => {
      if (current === "Error") {
        return value;
      }

      if (isOperator(value)) {
        if (current === "0") {
          return value;
        }

        if (isOperator(current.slice(-1))) {
          return current.slice(0, -1) + value;
        }

        return current + value;
      }

      if (value === ".") {
        const lastNumber = current.split(/[+−×÷]/).pop() || "";

        if (lastNumber.includes(".")) {
          return current;
        }

        return current + ".";
      }

      if (value === "%") {
        const match = current.match(/(\d+\.?\d*)$/);

        if (!match) {
          return current;
        }

        const number = Number(match[1]);

        if (!Number.isFinite(number)) {
          return current;
        }

        return (
          current.slice(0, -match[1].length) +
          String(number / 100)
        );
      }

      if (current === "0") {
        return value;
      }

      return current + value;
    });
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const deleteLast = () => {
    setDisplay((current) => {
      if (current === "Error" || current.length <= 1) {
        return "0";
      }

      return current.slice(0, -1);
    });
  };

  const calculate = () => {
    try {
      const expression = display
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("−", "-");

      if (!/^[0-9+\-*/.\s]+$/.test(expression)) {
        setDisplay("Error");
        return;
      }

      const tokens = expression.match(
        /(\d+(?:\.\d+)?)|([+\-*/])/g
      );

      if (!tokens || tokens.length === 0) {
        setDisplay("Error");
        return;
      }

      const numbers: number[] = [];
      const operators: string[] = [];

      let expectingNumber = true;

      for (const token of tokens) {
        if (/^\d/.test(token)) {
          numbers.push(Number(token));
          expectingNumber = false;
        } else {
          if (expectingNumber || operators.length >= numbers.length) {
            setDisplay("Error");
            return;
          }

          operators.push(token);
          expectingNumber = true;
        }
      }

      if (expectingNumber || numbers.length !== operators.length + 1) {
        setDisplay("Error");
        return;
      }

      const values = [...numbers];
      const ops = [...operators];

      for (let i = ops.length - 1; i >= 0; i--) {
        if (ops[i] === "*" || ops[i] === "/") {
          const left = values[i];
          const right = values[i + 1];

          if (ops[i] === "/" && right === 0) {
            setDisplay("Error");
            return;
          }

          const result =
            ops[i] === "*"
              ? left * right
              : left / right;

          values.splice(i, 2, result);
          ops.splice(i, 1);
        }
      }

      let result = values[0];

      for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
          result += values[i + 1];
        } else if (ops[i] === "-") {
          result -= values[i + 1];
        }
      }

      if (!Number.isFinite(result)) {
        setDisplay("Error");
        return;
      }

      setDisplay(
        Number.isInteger(result)
          ? String(result)
          : String(Number(result.toFixed(10)))
      );
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-12">
      <div className="mx-auto w-full max-w-md">

        <div className="mb-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <Calculator size={32} />
          </div>

          <h1 className="mt-4 text-4xl font-black text-gray-900">
            Calculator
          </h1>

          <p className="mt-2 text-gray-500">
            Fast and simple calculations
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-xl">

          <div className="rounded-2xl bg-gray-950 p-5">
            <p className="min-h-12 break-all text-right text-3xl font-black tracking-wide text-white">
              {display}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-3">

            <button
              onClick={clearDisplay}
              className="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-red-500 py-4 font-black text-white transition hover:bg-red-600"
            >
              <RotateCcw size={19} />
              Clear
            </button>

            <button
              onClick={deleteLast}
              className="flex items-center justify-center rounded-2xl bg-gray-200 py-4 font-black text-gray-800 transition hover:bg-gray-300"
              aria-label="Delete"
            >
              DEL
            </button>

            <button
              onClick={calculate}
              className="flex items-center justify-center rounded-2xl bg-green-600 py-4 font-black text-white transition hover:bg-green-700"
              aria-label="Calculate"
            >
              <Check size={22} />
            </button>

            {buttons.map((button) => {
              const operator = isOperator(button);

              return (
                <button
                  key={button}
                  onClick={() => addValue(button)}
                  className={`rounded-2xl py-4 text-xl font-black transition ${
                    operator
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : button === "%"
                        ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {button}
                </button>
              );
            })}

            <button
              onClick={() => addValue("(")}
              className="rounded-2xl bg-gray-100 py-4 text-xl font-black text-gray-800 transition hover:bg-gray-200"
            >
              (
            </button>

            <button
              onClick={() => addValue(")")}
              className="rounded-2xl bg-gray-100 py-4 text-xl font-black text-gray-800 transition hover:bg-gray-200"
            >
              )
            </button>

            <button
              onClick={calculate}
              className="col-span-2 rounded-2xl bg-green-600 py-4 text-xl font-black text-white transition hover:bg-green-700"
            >
              =
            </button>

          </div>

          <p className="mt-5 text-center text-sm text-gray-400">
            Supports addition, subtraction, multiplication, division and percentages.
          </p>

        </div>
      </div>
    </main>
  );
}
