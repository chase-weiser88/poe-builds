import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FiFolder } from 'react-icons/fi';

const MyBuilds = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <div className="bg-poe-secondary border-b border-poe-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-poe-accent">My Builds</h1>
          <p className="mt-2 text-gray-400">
            Manage your created builds
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <FiFolder className="h-16 w-16 text-poe-accent mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-poe-light mb-4">
            No builds yet
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            You haven't created any builds yet. Start by using the build calculator!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBuilds;
