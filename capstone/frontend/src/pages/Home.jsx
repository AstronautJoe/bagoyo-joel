import React from 'react';
import { useQuery } from 'react-query';
import ChampionGrid from '../components/ChampionGrid';
import { useAppContext } from '../contexts/AppContext';
import * as apiClient from '../api-client';

const Home = () => {
  console.log('Home component rendered');
  const { showToast } = useAppContext();

  const {
    data: champions,
    isLoading,
    isError,
    error,
  } = useQuery('fetchAllChampions', apiClient.fetchAllChampions, {
    onError: (error) => {
      // Show error toast with the provided error message
      showToast({
        message:
          error.message || 'Error in fetching champions. Please try again.',
        type: 'ERROR',
      });
    },
  });

  // Loading state
  if (isLoading) {
    return <p>Loading champions...</p>;
  }

  // Error state
  if (isError) {
    return <p>Error loading champions. Please try again later.</p>;
  }

  return (
    <>
      <h2 className="text-3xl italic text-center mb-10">Select a Champion</h2>
      <ChampionGrid champions={champions} />
    </>
  );
};

export default Home;
