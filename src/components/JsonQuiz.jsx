import { useState } from "react";

export default function JsonQuiz({ data }) {
  // data should be a JSON object with a wordBank array
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = data.wordBank;
  const q = questions[current];

  const handleSelect = (choice) => {
    setSelected(choice);
  };

  const handleNext = () => {
    if (selected === q.answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center p-6 gap-4">
        <h1 className="text-2xl font-bold">Quiz Complete!</h1>
        <p className="text-lg">Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 gap-6 w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold">{q.word}</h2>
      <p className="text-gray-600">{q.definition}</p>

      <div className="grid grid-cols-1 gap-4 w-full">
        {q.choices.map((choice, i) => (
          <button
            key={i}
            onClick={() => handleSelect(choice)}
            className={`p-3 rounded-2xl border shadow transition-all hover:scale-105 ${
              selected === choice ? "border-blue-500" : "border-gray-300"
            }`}
          >
            {choice}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selected === null}
        className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600 disabled:bg-gray-400"
      >
        {current + 1 < questions.length ? "Next" : "Finish"}
      </button>
    </div>
  );
}
