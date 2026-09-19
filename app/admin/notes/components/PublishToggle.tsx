"use client";

interface Props {
  published: boolean;
  setPublished: (v: boolean) => void;
}

export default function PublishToggle({
  published,
  setPublished,
}: Props) {

  return (

    <div className="flex items-center justify-between border rounded-xl p-4">

      <div>

        <h2 className="font-bold">
          Publish
        </h2>

        <p className="text-gray-500">
          Make this note visible to students.
        </p>

      </div>

      <button
        onClick={() => setPublished(!published)}
        className={`w-16 h-8 rounded-full transition ${
          published
            ? "bg-green-600"
            : "bg-gray-400"
        }`}
      >

        <div
          className={`w-7 h-7 bg-white rounded-full transition ${
            published
              ? "translate-x-8"
              : "translate-x-0"
          }`}
        />

      </button>

    </div>

  );

}