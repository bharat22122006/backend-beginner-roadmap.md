import Link from '@docusaurus/Link';
import { FaBook, FaCodeBranch, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';

const getIconComponent = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'git':
      // Using a branch icon to represent the Git workflow
      return <FaCodeBranch className="w-6 h-6 text-indigo-500" />; 
    case 'book':
      return <FaBook className="w-6 h-6 text-blue-500" />;
    case 'terminal':
      return <FaTerminal className="w-6 h-6 text-green-500" />;
    default:
      // Default icon if none is matched
      return <FaExternalLinkAlt className="w-5 h-5 text-gray-400" />; 
  }
};

/**
 * A visually styled card component for external or internal links.
 * * @param {object} props
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The descriptive text of the card.
 * @param {string} props.link - The URL to link to.
 * @param {string} [props.icon] - The name of an icon to display (e.g., 'git', 'book').
 */
const LinkCard = ({ title, description, link, icon }: { title: string; description: string; link: string; icon?: string; }) => {
  const IconComponent = getIconComponent(icon || 'default');

  return (
    <Link
      to={link}
      className="card bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-0.5"
      style={{ 
        textDecoration: 'none', 
        display: 'block', 
        borderRadius: '8px',
        padding: '20px',
        border: '1px solid var(--ifm-color-emphasis-200)' 
      }}
    >
      <div className="flex items-start space-x-4">
        {/* Icon Area */}
        <div className="flex-shrink-0 p-3 rounded bg-gray-100 dark:bg-gray-700">
          {IconComponent}
        </div>
        
        {/* Content Area */}
        <div className="flex-grow">
          <h3 
            className="text-xl font-semibold mb-1"
            style={{ 
              color: 'var(--ifm-font-color-base)', 
              marginTop: 0,
              marginBottom: 0
            }}
          >
            {title}
            <FaExternalLinkAlt className="inline ml-2 text-sm text-gray-500 dark:text-gray-400" />
          </h3>
          <p 
            className="text-sm text-gray-600 dark:text-gray-300 mt-2"
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;