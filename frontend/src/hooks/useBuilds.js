import { useState, useEffect } from 'react';
import buildService from '../services/buildService';

export const useBuilds = () => {
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 12,
    total: 0,
    totalPages: 0
  });

  const fetchBuilds = async (filters) => {
    setLoading(true);
    setError(null);
    try {
      const result = await buildService.getBuilds({
        ...filters,
        page: pagination.page,
        perPage: pagination.perPage
      });
      setBuilds(result.builds);
      setPagination({
        page: result.page,
        perPage: result.perPage,
        total: result.total,
        totalPages: result.totalPages
      });
    } catch (err) {
      setError(err.message);
      setBuilds([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    builds,
    loading,
    error,
    pagination,
    fetchBuilds,
    setPage: (page) => setPagination(prev => ({ ...prev, page }))
  };
};

export const useBuild = (id) => {
  const [build, setBuild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBuild = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await buildService.getBuildById(id);
        setBuild(result);
      } catch (err) {
        setError(err.message);
        setBuild(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBuild();
  }, [id]);

  const refetch = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const result = await buildService.getBuildById(id);
      setBuild(result);
    } catch (err) {
      setError(err.message);
      setBuild(null);
    } finally {
      setLoading(false);
    }
  };

  return { build, loading, error, refetch };
};
