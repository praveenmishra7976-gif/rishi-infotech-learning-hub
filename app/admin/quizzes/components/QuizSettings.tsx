"use client";

interface Props {
  subject: string;
  setSubject: (v: string) => void;

  duration: number;
  setDuration: (v: number) => void;

  totalMarks: number;
  setTotalMarks: (v: number) => void;

  passingMarks: number;
  setPassingMarks: (v: number) => void;
}

export default function QuizSettings({
  subject,
  setSubject,
  duration,
  setDuration,
  totalMarks,
  setTotalMarks,
  passingMarks,
  setPassingMarks,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <select
        value={subject}
        onChange={(e) =>
          setSubject(e.target.value)
        }
        className="border rounded-xl p-4"
      >
        <option>Computer</option>
        <option>Physics</option>
        <option>Chemistry</option>
        <option>Mathematics</option>
        <option>Sanskrit</option>
        <option>General Knowledge</option>
      </select>

      <input
        type="number"
        value={duration}
        onChange={(e) =>
          setDuration(Number(e.target.value))
        }
        placeholder="Duration"
        className="border rounded-xl p-4"
      />

      <input
        type="number"
        value={totalMarks}
        onChange={(e) =>
          setTotalMarks(Number(e.target.value))
        }
        placeholder="Total Marks"
        className="border rounded-xl p-4"
      />

      <input
        type="number"
        value={passingMarks}
        onChange={(e) =>
          setPassingMarks(Number(e.target.value))
        }
        placeholder="Passing Marks"
        className="border rounded-xl p-4"
      />

    </div>
  );
}