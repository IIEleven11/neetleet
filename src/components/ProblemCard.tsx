import React from 'react';
import { Problem } from '../types/problem';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface ProblemCardProps {
  problem: Problem;
  onComplete: (problemId: number) => void;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onComplete }) => {
  const difficultyColor = {
    Easy: 'text-green-600',
    Medium: 'text-yellow-600',
    Hard: 'text-red-600'
  }[problem.difficulty];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
          <span className={`${difficultyColor} font-medium`}>{problem.difficulty}</span>
        </div>
        <div className="flex space-x-2">
          <a
            href={problem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          <button
            onClick={() => onComplete(problem.id)}
            className={`${
              problem.completed
                ? 'text-green-600'
                : 'text-gray-400 hover:text-green-600'
            }`}
          >
            <CheckCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};