import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 py-10 max-w-xl rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        {/* Icon with animation */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <SparklesIcon className="h-14 w-14 text-yellow-500 dark:text-yellow-400" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          🚧 Coming Soon 🚧
        </h1>

        {/* Subtitle with typing effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
        >
          We’re working hard to bring you{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            amazing learning resources
          </span>
          . Stay tuned!
        </motion.p>

        {/* Countdown Animation */}
        <motion.div
          className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ClockIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          <span className="font-medium">Launching Soon...</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
