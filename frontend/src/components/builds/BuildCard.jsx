import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiUser, FiTrendingUp } from 'react-icons/fi';
import Card from '../common/Card';
import { formatCurrency, formatDPS, formatRelativeTime } from '../../utils/formatters';
import { CHARACTER_CLASSES } from '../../utils/constants';

const BuildCard = ({ build }) => {
  const navigate = useNavigate();
  
  const classInfo = CHARACTER_CLASSES.find(c => c.id === build.class);
  
  const handleClick = () => {
    navigate(`/builds/${build.id}`);
  };

  return (
    <Card hover onClick={handleClick} className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-poe-light hover:text-poe-accent transition-colors line-clamp-1">
            {build.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {build.ascendancy || build.class}
          </p>
        </div>
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: classInfo?.color || '#666' }}
        >
          {build.level}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <p className="text-xs text-gray-500">DPS</p>
          <p className="text-sm font-semibold text-poe-accent">
            {formatDPS(build.offense?.dps)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Life</p>
          <p className="text-sm font-semibold text-green-500">
            {(build.defense?.life || 0).toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Budget</p>
          <p className="text-sm font-semibold text-yellow-500">
            {formatCurrency(build.budget)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Main Skill</p>
          <p className="text-sm font-semibold text-blue-400 truncate">
            {build.mainSkill}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {build.tags?.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-poe-accent/10 text-poe-accent text-xs rounded"
          >
            {tag}
          </span>
        ))}
        {build.tags?.length > 3 && (
          <span className="px-2 py-0.5 bg-poe-accent/10 text-poe-accent text-xs rounded">
            +{build.tags.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-3 border-t border-poe-accent/10 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center space-x-1">
          <FiUser className="h-3 w-3" />
          <span>{build.author}</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <FiStar className="h-3 w-3 text-yellow-500" />
            <span>{build.rating?.average?.toFixed(1) || '0.0'}</span>
            <span className="text-gray-500">({build.rating?.count || 0})</span>
          </div>
          <span>{formatRelativeTime(build.createdAt)}</span>
        </div>
      </div>
    </Card>
  );
};

export default BuildCard;
