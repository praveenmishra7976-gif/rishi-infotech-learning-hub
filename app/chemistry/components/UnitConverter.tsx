"use client";

import { useMemo, useState } from "react";
import { ArrowRightLeft } from "lucide-react";

type ConversionType =
  | "mass"
  | "volume"
  | "temperature"
  | "pressure";

const conversions: Record<
  ConversionType,
  {
    title: string;
    from: string;
    to: string;
    convert: (value: number) => number;
  }
> = {
  mass: {
    title: "Gram ⇄ Kilogram",
    from: "g",
    to: "kg",
    convert: (value) => value / 1000,
  },
  volume: {
    title: "Millilitre ⇄ Litre",
    from: "mL",
    to: "L",
    convert: (value) => value / 1000,
  },
  temperature: {
    title: "Celsius → Kelvin",
    from: "°C",
    to: "K",
    convert: (value) => value + 273.15,
  },
  pressure: {
    title: "Atmosphere → Pascal",
    from: "atm",
    to: "Pa",
    convert: (value) => value * 101325,
  },
};

export default function UnitConverter() {
  const [type, setType] = useState<ConversionType>("mass");
  const [value, setValue] = useState("");

  const conversion = conversions[type];

  const result = useMemo(() => {
    if (!value.trim()) {
      return null;
    }

    const numericValue = Number(value);

    if (!Number.isFinite(numericValue)) {
      return null;
    }

    if (type === "mass" && numericValue < 0) {
      return null;
    }

    if (type === "volume" && numericValue < 0) {
      return null;
    }

    if (type === "pressure" && numericValue < 0) {
      return null;
    }

    return conversion.convert(numericValue);
  }, [value, type, conversion]);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex gap-3 items-center mb-8">

        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ArrowRightLeft
            className="text-green-700"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chemistry Unit Converter
          </h2>

          <p className="text-gray-500 mt-1">
            Convert common units used in Chemistry calculations.
          </p>
        </div>

      </div>

      <div className="mb-6">

        <label className="block text-sm font-bold text-gray-700 mb-2">
          Conversion Type
        </label>

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value as ConversionType);
            setValue("");
          }}
          className="border border-gray-200 rounded-xl p-4 w-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        >

          <option value="mass">
            Mass: Gram → Kilogram
          </option>

          <option value="volume">
            Volume: Millilitre → Litre
          </option>

          <option value="temperature">
            Temperature: Celsius → Kelvin
          </option>

          <option value="pressure">
            Pressure: Atmosphere → Pascal
          </option>

        </select>

      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-end">

        <div>

          <label className="block text-sm font-bold text-gray-700 mb-2">
            Value ({conversion.from})
          </label>

          <input
            type="number"
            step="any"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter value in ${conversion.from}`}
            className="border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>

        <div className="hidden md:flex w-12 h-12 rounded-xl bg-green-100 items-center justify-center mb-1">
          <ArrowRightLeft
            className="text-green-700"
            size={22}
          />
        </div>

        <div>

          <label className="block text-sm font-bold text-gray-700 mb-2">
            Result ({conversion.to})
          </label>

          <div className="border border-green-100 bg-green-50 rounded-xl p-4 min-h-[58px] flex items-center">

            {result === null ? (
              <span className="text-gray-400">
                --
              </span>
            ) : (
              <span className="text-xl font-black text-green-700">
                {result.toLocaleString(undefined, {
                  maximumFractionDigits: 6,
                })}{" "}
                {conversion.to}
              </span>
            )}

          </div>

        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-100 p-5">

        <p className="font-bold text-blue-800">
          Conversion
        </p>

        <p className="mt-2 text-blue-700">
          {type === "mass" && "1 kg = 1000 g"}
          {type === "volume" && "1 L = 1000 mL"}
          {type === "temperature" && "K = °C + 273.15"}
          {type === "pressure" && "1 atm = 101325 Pa"}
        </p>

      </div>

    </div>
  );
}
