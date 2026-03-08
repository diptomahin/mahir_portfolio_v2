import { useState, useEffect } from 'react';

export function usePortfolioData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (!response.ok) throw new Error('Failed to fetch data');
        const portfolioData = await response.json();
        setData(portfolioData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateData = async (newData) => {
    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      });
      if (!response.ok) throw new Error('Failed to update data');
      setData(newData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  return { data, loading, error, updateData };
}
