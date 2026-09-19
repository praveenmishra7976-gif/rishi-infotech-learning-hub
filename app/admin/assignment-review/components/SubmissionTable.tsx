"use client";

import { useState } from "react";
import { reviewSubmission } from "../lib/reviewSubmission";

type Submission = {
  id: string;
  marks: number | null;
  feedback: string | null;
  status: string | null;
  reviewed: boolean | null;
  file_url: string | null;
  submitted_at: string | null;
  assignments?: {
    title: string | null;
  } | null;
  profiles?: {
    full_name: string | null;
  } | null;
};

export default function SubmissionTable({
  submissions,
}: {
  submissions: Submission[];
}) {
  const [savingId, setSavingId] = useState<string | null>(null);

  async function submitReview(
    id: string,
    marks: number,
    feedback: string
  ) {
    if (marks < 0) {
      alert("Marks cannot be negative.");
      return;
    }

    setSavingId(id);

    try {
      await reviewSubmission(id, marks, feedback);

      alert("Review saved successfully.");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to save review."
      );
    } finally {
      setSavingId(null);
    }
  }

  if (!submissions || submissions.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800">
          No Submissions Found
        </h2>

        <p className="mt-3 text-gray-500">
          There are no assignment submissions to review yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {submissions.map((item) => (
        <SubmissionCard
          key={item.id}
          data={item}
          onSave={submitReview}
          saving={savingId === item.id}
        />
      ))}
    </div>
  );
}

function SubmissionCard({
  data,
  onSave,
  saving,
}: {
  data: Submission;
  onSave: (
    id: string,
    marks: number,
    feedback: string
  ) => Promise<void>;
  saving: boolean;
}) {
  const [marks, setMarks] = useState<number>(
    data.marks ?? 0
  );

  const [feedback, setFeedback] = useState<string>(
    data.feedback ?? ""
  );

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">
      {/* Assignment title */}
      <h2 className="text-2xl font-bold text-gray-900">
        {data.assignments?.title || "Untitled Assignment"}
      </h2>

      {/* Student name */}
      <p className="mt-3 text-gray-700">
        Student:{" "}
        <strong>
          {data.profiles?.full_name || "Unknown Student"}
        </strong>
      </p>

      {/* Submission date */}
      {data.submitted_at && (
        <p className="mt-1 text-sm text-gray-500">
          Submitted:{" "}
          {new Date(data.submitted_at).toLocaleString()}
        </p>
      )}

      {/* Current status */}
      <div className="mt-4">
        <span
          className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
            data.reviewed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {data.reviewed ? "Reviewed" : "Pending Review"}
        </span>
      </div>

      {/* Submitted file */}
      {data.file_url ? (
        <a
          href={data.file_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          View Submitted File
        </a>
      ) : (
        <p className="mt-5 text-sm text-red-600">
          No submitted file available.
        </p>
      )}

      {/* Marks */}
      <div className="mt-6">
        <label className="mb-2 block font-semibold text-gray-700">
          Marks
        </label>

        <input
          type="number"
          min="0"
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
          value={marks}
          onChange={(e) =>
            setMarks(Number(e.target.value))
          }
          placeholder="Enter marks"
        />
      </div>

      {/* Feedback */}
      <div className="mt-5">
        <label className="mb-2 block font-semibold text-gray-700">
          Teacher Feedback
        </label>

        <textarea
          rows={5}
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
          value={feedback}
          onChange={(e) =>
            setFeedback(e.target.value)
          }
          placeholder="Write feedback for the student..."
        />
      </div>

      {/* Save button */}
      <button
        type="button"
        disabled={saving}
        onClick={() =>
          onSave(
            data.id,
            marks,
            feedback
          )
        }
        className="mt-5 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Review"}
      </button>
    </div>
  );
}
