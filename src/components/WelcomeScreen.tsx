import React from 'react';
import { Code2 } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <Code2 className="h-16 w-16 text-indigo-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">LeetCode Randomizer</h1>
      <p className="text-xl text-gray-600 mb-8">Sign in to start practicing random LeetCode problems</p>
    </div>
  );
};