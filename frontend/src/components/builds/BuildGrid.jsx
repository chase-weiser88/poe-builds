import React from 'react';
import BuildCard from './BuildCard';
import Loader from '../common/Loader';

const BuildGrid = ({ builds, loading }) => {
  if (loading) {
    return <Loader text="Loading builds..." />;
  }

  if (!builds || builds.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No builds found</p>
        <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {builds.map((build) => (
        <BuildCard key={build.id} build={build} />
      ))}
    </div>
  );
};

export default BuildGrid;
