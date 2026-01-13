import React, { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';
import Input from '../common/Input';
import Button from '../common/Button';
import { CHARACTER_CLASSES, ASCENDANCIES, BUILD_TAGS, SORT_OPTIONS } from '../../utils/constants';

const BuildFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const [showFilters, setShowFilters] = useState(true);

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    onFilterChange({ 
      class: selectedClass,
      ascendancy: '' // Reset ascendancy when class changes
    });
  };

  return (
    <div className="poe-card p-4">
      {/* Mobile Toggle */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <h3 className="text-lg font-semibold text-poe-light flex items-center">
          <FiFilter className="mr-2" />
          Filters
        </h3>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-poe-accent"
        >
          {showFilters ? <FiX /> : <FiFilter />}
        </button>
      </div>

      <div className={`space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-poe-light mb-2">
            Search
          </label>
          <Input
            type="text"
            placeholder="Search builds..."
            value={filters.search || ''}
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-medium text-poe-light mb-2">
            Sort By
          </label>
          <select
            value={filters.sort || 'popular'}
            onChange={(e) => onFilterChange({ sort: e.target.value })}
            className="w-full px-3 py-2 bg-poe-secondary border border-poe-accent/30 rounded-md text-poe-light focus:outline-none focus:ring-2 focus:ring-poe-accent"
          >
            {SORT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Class */}
        <div>
          <label className="block text-sm font-medium text-poe-light mb-2">
            Class
          </label>
          <select
            value={filters.class || ''}
            onChange={handleClassChange}
            className="w-full px-3 py-2 bg-poe-secondary border border-poe-accent/30 rounded-md text-poe-light focus:outline-none focus:ring-2 focus:ring-poe-accent"
          >
            <option value="">All Classes</option>
            {CHARACTER_CLASSES.map(cls => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        {/* Ascendancy */}
        {filters.class && (
          <div>
            <label className="block text-sm font-medium text-poe-light mb-2">
              Ascendancy
            </label>
            <select
              value={filters.ascendancy || ''}
              onChange={(e) => onFilterChange({ ascendancy: e.target.value })}
              className="w-full px-3 py-2 bg-poe-secondary border border-poe-accent/30 rounded-md text-poe-light focus:outline-none focus:ring-2 focus:ring-poe-accent"
            >
              <option value="">All Ascendancies</option>
              {ASCENDANCIES[filters.class]?.map(asc => (
                <option key={asc} value={asc}>
                  {asc}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-poe-light mb-2">
            Budget (Divine Orbs)
          </label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minBudget || ''}
              onChange={(e) => onFilterChange({ minBudget: parseFloat(e.target.value) || 0 })}
              min="0"
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxBudget || ''}
              onChange={(e) => onFilterChange({ maxBudget: parseFloat(e.target.value) || 1000 })}
              min="0"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-poe-light mb-2">
            Tags
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {BUILD_TAGS.map(tag => (
              <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.tags?.includes(tag) || false}
                  onChange={(e) => {
                    const currentTags = filters.tags || [];
                    const newTags = e.target.checked
                      ? [...currentTags, tag]
                      : currentTags.filter(t => t !== tag);
                    onFilterChange({ tags: newTags });
                  }}
                  className="rounded border-poe-accent/30 bg-poe-secondary text-poe-accent focus:ring-poe-accent"
                />
                <span className="text-sm text-poe-light">{tag}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button
          variant="ghost"
          className="w-full"
          onClick={onClearFilters}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default BuildFilters;
