import React from 'react';

const AbilityCard = ({ ability, isPassive = 0 }) => {
  console.log(ability);
  return (
    <div className="card bg-slate-300">
      <p>img url: {ability.image}</p>
      <div className="card-body">
        <img
          src={ability.image}
          className="object-contain rounded-full w-28 h-28 outline outline-accent outline-4 mr-5"
        />
        <p className="text-md font-bold">
          {isPassive ? `PASSIVE: ${ability.name}` : ability.name}
        </p>
      </div>
    </div>
  );
};

export default AbilityCard;
