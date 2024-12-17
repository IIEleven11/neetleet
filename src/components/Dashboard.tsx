import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ProblemCard } from './ProblemCard';
import { ProblemControls } from './ProblemControls';
import { WelcomeScreen } from './WelcomeScreen';
import { problems } from '../data/problems';
import { db } from '../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [currentProblem, setCurrentProblem] = React.useState(problems[0]);
  const [completedCount, setCompletedCount] = React.useState(0);

  React.useEffect(() => {
    if (user) {
      loadUserProgress();
    }
  }, [user]);

  const loadUserProgress = async () => {
    if (!user) return;
    const userDoc = await getDoc(doc(db, 'progress', user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      setCompletedCount(Object.keys(data.completedProblems || {}).length);
    }
  };

  const getRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * problems.length);
    setCurrentProblem(problems[randomIndex]);
  };

  const handleComplete = async (problemId: number) => {
    if (!user) return;
    
    const userRef = doc(db, 'progress', user.uid);
    await setDoc(userRef, {
      completedProblems: {
        [problemId]: {
          completedAt: new Date()
        }
      }
    }, { merge: true });
    
    setCompletedCount(prev => prev + 1);
  };

  if (!user) {
    return <WelcomeScreen />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ProblemControls
        completedCount={completedCount}
        onRandomize={getRandomProblem}
      />
      <ProblemCard
        problem={currentProblem}
        onComplete={handleComplete}
      />
    </div>
  );
};