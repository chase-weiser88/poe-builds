import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiUser } from 'react-icons/fi';
import Card from '../components/common/Card';

const UserProfile = () => {
  const { id } = useParams();
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <div className="bg-poe-secondary border-b border-poe-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-poe-accent">User Profile</h1>
          <p className="mt-2 text-gray-400">
            View user information and builds
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <FiUser className="h-16 w-16 text-poe-accent mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-poe-light mb-4">
            Profile Page Coming Soon
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            User profiles are currently in development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
