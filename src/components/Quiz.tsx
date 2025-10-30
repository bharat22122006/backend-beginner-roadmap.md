import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, XCircle, RefreshCw, ArrowRight } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[current];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="rounded-2xl border border-border shadow-lg dark:shadow-blue-900/10 transition-all duration-300 bg-white dark:bg-gray-900">
        <CardContent>
          {!showResults ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Question {current + 1} of {questions.length}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Score: <span className="font-medium text-blue-600 dark:text-blue-400">{score}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                  {currentQuestion.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isCorrect = index === currentQuestion.answer;
                    const isSelected = index === selected;

                    const baseClass =
                      "w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none ";
                    let stateClass = "";

                    if (selected === null) {
                      stateClass =
                        "border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-500/10";
                    } else if (isSelected && isCorrect) {
                      stateClass = "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400";
                    } else if (isSelected && !isCorrect) {
                      stateClass = "border-red-500 bg-red-500/10 text-red-600 dark:text-red-400";
                    } else {
                      stateClass = "opacity-60 border-gray-200 dark:border-gray-700";
                    }

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selected !== null}
                        whileHover={selected === null ? { scale: 1.02 } : {}}
                        whileTap={{ scale: 0.98 }}
                        className={baseClass + stateClass}
                      >
                        {option}
                      </motion.button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-5 rounded-xl p-4 bg-gray-100 dark:bg-gray-800/60"
                  >
                    {selected === currentQuestion.answer ? (
                      <p className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle className="w-5 h-5" /> Correct!
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium">
                        <XCircle className="w-5 h-5" /> Incorrect.
                      </p>
                    )}

                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      💡 <span className="font-medium">{currentQuestion.explanation}</span>
                    </p>

                    <Button
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2"
                      onClick={nextQuestion}
                    >
                      {current + 1 < questions.length ? (
                        <>
                          Next Question <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        "View Results 🎯"
                      )}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                🎉 Quiz Completed!
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                You scored{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {score}
                </span>{" "}
                out of {questions.length}.
              </p>

              <Button
                onClick={resetQuiz}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl px-6 py-2 flex items-center justify-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" /> Retake Quiz
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
