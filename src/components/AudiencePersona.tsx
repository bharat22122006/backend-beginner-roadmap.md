import React from 'react';
import { FaUserTag, FaBrain, FaThLarge, FaRegFrownOpen } from 'react-icons/fa'; 
import { GiTechnoHeart } from 'react-icons/gi'; // A fun icon for 'Needs'

interface AudiencePersonaProps {
  name: string;
  role: string;
  expertise: 'Low' | 'Medium' | 'High';
  goal: string;
  painpoint: string;
  needs: string;
}

const AudiencePersona: React.FC<AudiencePersonaProps> = ({ name, role, expertise, goal, painpoint, needs }) => {
  
  // Helper to color the expertise badge
  const expertiseColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400';
      case 'Low':
        return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="
      p-6 rounded-xl shadow-lg border-t-4 border-indigo-500 transition-shadow duration-300
      
      // Light Theme Styles
      bg-white border-gray-200 shadow-md hover:shadow-xl
      
      // Dark Theme Styles
      dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:hover:shadow-xl
    ">
      
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4 pb-3 border-b dark:border-gray-700">
        <div>
          <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{name}</h4>
          <p className="text-md text-gray-600 dark:text-gray-400">{role}</p>
        </div>
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${expertiseColor(expertise)}`}>
          {expertise} Expertise
        </span>
      </div>

      {/* Detail Grid */}
      <div className="space-y-4">
        
        {/* Goal */}
        <div className="flex items-start space-x-3">
          <FaThLarge className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-1" />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Goal</p>
            <p className="text-gray-600 dark:text-gray-400">{goal}</p>
          </div>
        </div>

        {/* Pain Point */}
        <div className="flex items-start space-x-3">
          <FaRegFrownOpen className="flex-shrink-0 w-5 h-5 text-red-500 mt-1" />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Pain Point</p>
            <p className="text-gray-600 dark:text-gray-400">{painpoint}</p>
          </div>
        </div>

        {/* Needs */}
        <div className="flex items-start space-x-3">
          <GiTechnoHeart className="flex-shrink-0 w-5 h-5 text-green-500 mt-1" />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Documentation Needs</p>
            <p className="text-gray-600 dark:text-gray-400">{needs}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AudiencePersona;