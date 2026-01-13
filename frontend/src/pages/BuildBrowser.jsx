import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import BuildGrid from '../components/builds/BuildGrid';
import BuildFilters from '../components/builds/BuildFilters';
import Button from '../components/common/Button';
import { useBuilds } from '../hooks/useBuilds';
import { useDebounce } from '../hooks/useDebounce';
import { useAuth } from '../context/AuthContext';

const BuildBrowser = () => {
  const { isAuthenticated } = useAuth();
  const [filters, setFilters] = useState({
    search: '',
    sort: 'popular',
    class: '',
    ascendancy: '',
    minBudget: undefined,
    maxBudget: undefined,
    tags: []
  });

  const debouncedSearch = useDebounce(filters.search, 500);
  const { builds, loading, pagination, fetchBuilds, setPage } = useBuilds();

  useEffect(() => {
    fetchBuilds({ ...filters, search: debouncedSearch });
  }, [debouncedSearch, filters.sort, filters.class, filters.ascendancy, filters.minBudget, filters.maxBudget, filters.tags, pagination.page]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      sort: 'popular',
      class: '',
      ascendancy: '',
      minBudget: undefined,
      maxBudget: undefined,
      tags: []
    });
    setPage(1);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-poe-secondary border-b border-poe-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-poe-accent">Browse Builds</h1>
              <p className="mt-2 text-gray-400">
                Discover and explore community builds
              </p>
            </div>
            {isAuthenticated && (
              <Link to="/calculator" className="mt-4 md:mt-0">
                <Button variant="primary">
                  <FiPlus className="h-5 w-5 mr-2" />
                  Create Build
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <BuildFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Builds Grid */}
          <div className="lg:col-span-3">
            {/* Results count */}
            <div className="mb-4 text-gray-400">
              {!loading && (
                <span>
                  Showing {builds.length} of {pagination.total} builds
                </span>
              )}
            </div>

            <BuildGrid builds={builds} loading={loading} />

            {/* Pagination */}
            {!loading && pagination.totalPages > 1 && (
              <div className="mt-8 flex justify-center space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={pagination.page === 1}
                  onClick={() => setPage(pagination.page - 1)}
                >
                  Previous
                </Button>
                
                <div className="flex items-center space-x-1">
                  {[...Array(Math.min(pagination.totalPages, 5))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <Button
                        key={pageNum}
                        variant={pagination.page === pageNum ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setPage(pageNum)}
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  disabled={pagination.page === pagination.totalPages}
                  onClick={() => setPage(pagination.page + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildBrowser;
