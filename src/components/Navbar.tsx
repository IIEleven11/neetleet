import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Code2, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout, signInWithGoogle } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">LeetCode Randomizer</span>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <img src={user.photoURL || ''} alt="Profile" className="h-8 w-8 rounded-full" />
                <span className="text-gray-700">{user.displayName}</span>
                <button
                  onClick={() => logout()}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signInWithGoogle()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign in with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};