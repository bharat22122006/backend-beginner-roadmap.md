import React from "react";
import {
  FaCode,
  FaTerminal,
  FaHandHoldingHeart,
  FaGitAlt,
  FaBookOpen,
} from "react-icons/fa";
import { BsBoxes, BsShuffle } from "react-icons/bs";

interface SkillCardProps {
  title: string;
  description: string;
  icon:
    | "code"
    | "terminal"
    | "hand-heart"
    | "git"
    | "boxes"
    | "shuffle"
    | "book-open";
}

const IconMapper = ({ name }: { name: SkillCardProps["icon"] }) => {
  switch (name) {
    case "code":
      return <FaCode className="w-6" />;
    case "terminal":
      return <FaTerminal className="w-6" />;
    case "hand-heart":
      return <FaHandHoldingHeart className="w-6" />;
    case "git":
      return <FaGitAlt size={24} className="w-6" />;
    case "boxes":
      return <BsBoxes className="w-6" />;
    case "shuffle":
      return <BsShuffle className="w-6" />;
    case "book-open":
      return <FaBookOpen className="w-6" />;
    default:
      return <FaCode className="w-6" />;
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => {
  return (
    <div
      className="
      p-6 mb-4 rounded-xl shadow-lg transition-all duration-300 transform 
      hover:scale-[1.02] hover:shadow-xl bg-white border border-gray-200
      dark:bg-gray-800 dark:border-gray-700
      dark:hover:border-indigo-500
    "
    >
      <div className="flex items-center space-x-4 mb-3">
        <div
          className="p-2 rounded bg-[var(--ifm-color-primary)] text-white"
        >
          <IconMapper name={icon} />
        </div>
        <h3
          className="
          text-xl font-semibold 
          text-gray-900
          dark:text-white
        "
        >
          {title}
        </h3>
      </div>
      <p
        className="
        text-gray-600 
        dark:text-gray-400
      "
      >
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
