import ChapterTemplate from "../../components/ChapterTemplate";
import Quiz from "../../components/Quiz";

export default function FundamentalsPage() {
  return (
    <ChapterTemplate
      title="Chapter 1: Computer Fundamentals"
      description="Learn the basics of computers, their characteristics, applications, and importance."

      previousLink="/computer"
      nextLink="/computer/history"

      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700">
            What is a Computer?
          </h2>

          <p className="mt-4 text-gray-700 leading-8">
            A computer is an electronic device that accepts data as input,
            processes it according to instructions, stores it, and produces
            meaningful information as output.
          </p>

          <div className="bg-blue-50 rounded-2xl p-6 mt-8">
            <h2 className="text-2xl font-bold">
              Characteristics of a Computer
            </h2>

            <ul className="list-disc ml-8 mt-4 space-y-2">
              <li>High Speed</li>
              <li>Accuracy</li>
              <li>Automation</li>
              <li>Reliability</li>
              <li>Versatility</li>
              <li>Large Storage Capacity</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 mt-8">
            <h2 className="text-2xl font-bold">
              Applications of Computers
            </h2>

            <ul className="list-disc ml-8 mt-4 space-y-2">
              <li>Education</li>
              <li>Business</li>
              <li>Healthcare</li>
              <li>Banking</li>
              <li>Research</li>
              <li>Entertainment</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 mt-8">
            <h2 className="text-2xl font-bold">
              Quick Revision
            </h2>

            <ul className="list-disc ml-8 mt-4 space-y-2">
              <li>Computer is an electronic device.</li>
              <li>Works on Input → Process → Output.</li>
              <li>Stores data for future use.</li>
            </ul>
          </div>

          <div className="mt-12">
            <Quiz
              title="Computer Fundamentals Quiz"
              questions={[
                {
                  question: "What is a computer?",
                  options: [
                    "Electronic Device",
                    "Mechanical Device",
                    "Manual Device",
                    "Optical Device",
                  ],
                  answer: "Electronic Device",
                },
                {
                  question:
                    "Which of the following is a characteristic of a computer?",
                  options: [
                    "Speed",
                    "Emotion",
                    "Sleep",
                    "Intelligence",
                  ],
                  answer: "Speed",
                },
                {
                  question: "Computers are used in:",
                  options: [
                    "Education",
                    "Banking",
                    "Healthcare",
                    "All of the Above",
                  ],
                  answer: "All of the Above",
                },
              ]}
            />
          </div>
        </>
      }
    />
  );
}