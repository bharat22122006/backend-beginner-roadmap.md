import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './ToolCard.module.css';

// Define the properties (props) that the ToolCard component accepts
interface ToolCardProps {
  name: string;
  description: string;
  useCase: ReactNode; // Use ReactNode to allow rich content (like <strong> or <em>)
}

/**
 * A reusable card component to display an essential tool for technical writers.
 * Designed to be visually distinct and easily scannable within the documentation.
 */
export default function ToolCard({
  name,
  description,
  useCase,
}: ToolCardProps): JSX.Element {
  return (
    <div className={clsx('card', styles.toolCardContainer)}>
      {/* Card Header for the Tool Name */}
      <div className={clsx('card__header', styles.toolCardHeader)}>
        <h3>{name}</h3>
      </div>
      
      {/* Card Body for Description and Use Case */}
      <div className="card__body">
        {/* Description Section */}
        <p className={styles.descriptionText}>
          {description}
        </p>
        
        {/* Use Case/Why it matters Section */}
        <div className={styles.useCaseSection}>
          <p className={styles.useCaseTitle}>
            Use Case / Why it Matters:
          </p>
          <p className={styles.useCaseText}>
            {useCase}
          </p>
        </div>
      </div>
    </div>
  );
}


// How to use the ToolCard component:
/*
<ToolCard
  name="Docusaurus"
  description="The Static Site Generator (SSG) powering your entire documentation site."
  useCase="Transforming Markdown/MDX into a fast, static React application."
/>
*/