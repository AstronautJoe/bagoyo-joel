import React from 'react';
import AbilityCard from './AbilityCard';

const ChampionAbilitiesSection = ({ championData }) => {
  const abilities = championData.abilities;
  const passive = championData.passive;
  return (
    <>
      <h2 className="text-secondary text-xl font-bold mt-5 mb-2">
        {championData.name.toUpperCase()}&apos;S ABILITIES
      </h2>
      <AbilityCard ability={passive} isPassive={1} />
      <div className="grid grid-cols-2">
        {abilities.map((ability, key) => (
          <AbilityCard key={key} ability={ability} />
        ))}
      </div>
    </>
  );
};

export default ChampionAbilitiesSection;
