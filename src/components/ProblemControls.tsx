import React from 'react';
import { Dices, Trophy } from 'lucide-react';

interface ProblemControlsProps {
  completedCount: number;
  onRandomize: () => void;
}

export const ProblemControls: React.FC<ProblemControlsProps> = ({
  completedCount,
  onRandomize
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-2">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <span className="text-lg font-medium">Problems Completed: {completedCount}</span>
      </div>
      <button
        onClick={onRandomize}
        className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        <Dices className="h-5 w-5" />
        <span>Get Random Problem</span>
      </button>
    </div>
  );
};