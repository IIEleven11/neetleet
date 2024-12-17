import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;