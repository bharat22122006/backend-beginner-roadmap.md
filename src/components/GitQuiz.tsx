import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const questions = [
  {
    question: "What command initializes a new Git repository?",
    options: ["git start", "git init", "git create", "git new"],
    answer: "git init",
  },
  {
    question: "Which command shows the current branch?",
    options: ["git branch", "git status", "git log", "git show-branch"],
    answer: "git branch",
  },
  {
    question: "Which GitHub feature is used for code collaboration?",
    options: ["Forks", "Actions", "Pull Requests", "Issues"],
    answer: "Pull Requests",
  },
  {
    question: "What does `git clone` do?",
    options: [
      "Deletes a repository",
      "Copies a repository from remote",
      "Merges two branches",
      "Creates a new branch",
    ],
    answer: "Copies a repository from remote",
  },
  {
    question: "Which file is used to ignore files from being tracked?",
    options: [".ignore", ".config", ".gitignore", "ignore.txt"],
    answer: ".gitignore",
  },
];

export default function GitQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[current].answer) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected("");
      } else {
        setIsFinished(true);
      }
    }, 800);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setIsFinished(false);
  };

  const progress = ((current + (isFinished ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-6 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
        Git & GitHub Quiz
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-3 rounded-xl bg-gray-300 dark:bg-gray-700 mb-6 overflow-hidden">
        <motion.div
          className="h-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {!isFinished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
          >
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {questions[current].question}
            </p>

            <div className="grid gap-4">
              {questions[current].options.map((option, idx) => {
                const isCorrect = option === questions[current].answer;
                const isSelected = option === selected;

                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selected}
                    className={`w-full py-3 px-4 rounded-xl border font-medium text-gray-800 dark:text-gray-200 transition-all
                      ${
                        selected
                          ? isCorrect
                            ? "bg-green-500 text-white border-green-600"
                            : isSelected
                            ? "bg-red-500 text-white border-red-600"
                            : "bg-gray-200 dark:bg-gray-800 border-gray-600"
                          : "bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 border-gray-300 dark:border-gray-600"
                      }`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <Confetti numberOfPieces={200} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-800 rounded-2xl shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              🎉 Quiz Completed!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              Your Score: <span className="font-extrabold">{score}</span> /{" "}
              {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
            >
              Retry Quiz
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}
