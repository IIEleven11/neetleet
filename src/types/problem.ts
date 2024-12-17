export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  url: string;
  completed?: boolean;
  completedAt?: Date;
}

export interface UserProgress {
  uid: string;
  completedProblems: {
    [problemId: number]: {
      completedAt: Date;
    };
  };
}