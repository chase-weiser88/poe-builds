import React from 'react';
import { useParams } from 'react-router-dom';
import { useBuild } from '../hooks/useBuilds';
import Loader from '../components/common/Loader';
import { FiEdit, FiTrash2, FiShare2, FiDownload } from 'react-icons/fi';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { formatCurrency, formatDPS, formatPercentage, formatDate } from '../utils/formatters';

const BuildDetails = () => {
  const { id } = useParams();
  const { build, loading, error } = useBuild(id);

  if (loading) return <Loader text="Loading build details..." />;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;
  if (!build) return <div className="text-center py-12 text-gray-400">Build not found</div>;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-poe-secondary border-b border-poe-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-poe-accent">{build.name}</h1>
              <p className="mt-2 text-gray-400">
                by {build.author} • {build.ascendancy || build.class} • Level {build.level}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Updated {formatDate(build.updatedAt)}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button variant="ghost" size="sm">
                <FiShare2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <FiDownload className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <h2 className="text-xl font-semibold text-poe-light mb-4">Description</h2>
              <p className="text-gray-400">{build.description}</p>
            </Card>

            {/* Skills */}
            <Card>
              <h2 className="text-xl font-semibold text-poe-light mb-4">Skills</h2>
              <div className="space-y-4">
                {build.skills?.map((skill, index) => (
                  <div key={index} className="border border-poe-accent/20 rounded p-4">
                    <h3 className="font-semibold text-poe-accent mb-2">
                      {skill.name} ({skill.links}-Link)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.gems.map((gem, gemIndex) => (
                        <span
                          key={gemIndex}
                          className="px-3 py-1 bg-poe-accent/10 text-poe-light text-sm rounded"
                        >
                          {gem}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Items */}
            <Card>
              <h2 className="text-xl font-semibold text-poe-light mb-4">Items</h2>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(build.items || {}).map(([slot, item]) => (
                  <div key={slot} className="border border-poe-accent/20 rounded p-3">
                    <p className="text-xs text-gray-500 uppercase">{slot}</p>
                    <p className="text-sm text-poe-light mt-1">{item.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Overview */}
            <Card>
              <h2 className="text-xl font-semibold text-poe-light mb-4">Stats</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Offense</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">DPS</span>
                      <span className="text-sm font-semibold text-poe-accent">
                        {formatDPS(build.offense?.dps)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Crit Chance</span>
                      <span className="text-sm font-semibold text-poe-light">
                        {formatPercentage(build.offense?.critChance)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Crit Multi</span>
                      <span className="text-sm font-semibold text-poe-light">
                        {formatPercentage(build.offense?.critMultiplier)}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Defense</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Life</span>
                      <span className="text-sm font-semibold text-green-500">
                        {(build.defense?.life || 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Armor</span>
                      <span className="text-sm font-semibold text-poe-light">
                        {(build.defense?.armor || 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Evasion</span>
                      <span className="text-sm font-semibold text-poe-light">
                        {(build.defense?.evasion || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Resistances</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Fire</span>
                      <span className="text-sm font-semibold text-red-500">
                        {formatPercentage(build.resistances?.fire)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Cold</span>
                      <span className="text-sm font-semibold text-blue-500">
                        {formatPercentage(build.resistances?.cold)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Lightning</span>
                      <span className="text-sm font-semibold text-yellow-500">
                        {formatPercentage(build.resistances?.lightning)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Chaos</span>
                      <span className="text-sm font-semibold text-purple-500">
                        {formatPercentage(build.resistances?.chaos)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Budget */}
            <Card>
              <h2 className="text-xl font-semibold text-poe-light mb-2">Budget</h2>
              <p className="text-3xl font-bold text-poe-accent">
                {formatCurrency(build.budget)}
              </p>
            </Card>

            {/* Tags */}
            <Card>
              <h2 className="text-xl font-semibold text-poe-light mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {build.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-poe-accent/10 text-poe-accent text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildDetails;
