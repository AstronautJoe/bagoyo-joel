import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import * as apiClient from '../api-client';
import { useQuery } from 'react-query';
import ChampionTitleCard from '../components/ChampionTitleCard';
import ChampionAbilitiesSection from '../components/ChampionAbilitiesSection';
import GuideList from '../components/GuideList';

// fetch champion details

// fetch guide details

const Champion = () => {
  console.log('Champion Page rendered');
  const { showToast } = useAppContext();
  const { id } = useParams();

  const {
    data: champion,
    isLoading,
    isError,
    error,
  } = useQuery(
    ['fetchChampionById', id], // Query key with `id` for uniqueness
    () => apiClient.fetchChampionById(id), // Pass a function reference
    {
      onError: (error) => {
        showToast({
          message:
            error.message || 'Error in fetching champion. Please try again.',
          type: 'ERROR',
        });
      },
    }
  );

  // Loading state
  if (isLoading) {
    return <p>Loading champion data...</p>;
  }

  // Error state
  if (isError) {
    return <p>Error loading champion. Please try again later.</p>;
  }

  console.log(champion);

  return (
    <>
      <ChampionTitleCard championData={champion} />
      <GuideList />
      <ChampionAbilitiesSection championData={champion} />

      <h2>Champion ID:{id}</h2>
    </>
  );
};

export default Champion;
