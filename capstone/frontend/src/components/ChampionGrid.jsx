import React, { useMemo } from 'react';
import ChampionCard from './ChampionCard';

const ChampionGrid = ({ champions }) => {
  console.log('Champion Grid rendered rendered');
  console.log('Champions: ', champions);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-fit mx-auto">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} championData={champion} />
        ))}
      </div>
    </>
  );
};

export default ChampionGrid;
