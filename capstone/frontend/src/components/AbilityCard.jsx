import React from 'react';

const AbilityCard = ({ ability, isPassive = 0 }) => {
  console.log(ability);
  return (
    <div className="card bg-slate-300">
      <div className="card-body">
        <div className="flex flex-row justify-start items-center">
          <img
            src={ability.image}
            className="object-contain rounded-full md:w-10 md:h-10 outline outline-accent outline-4 mr-5"
          />
          <div className="flex flex-col ">
            <p className="text-md font-bold">
              {isPassive ? `PASSIVE: ${ability.name}` : ability.name}
            </p>
            <p className="text-sm font-light opacity-50">
              Cooldown: {isPassive ? '∞' : ability.cooldownPerLevel.join(' / ')}
            </p>
            <p className="text-sm font-light opacity-50">
              Cost:{' '}
              {isPassive
                ? 'None'
                : ability.costPerLevel
                    .map((costArray) => {
                      // Access the first element of each array and return the amount
                      return costArray[costArray.length - 1].amount; // Fallback to 'N/A' if no amount exists
                    })
                    .join(' / ')}{' '}
              {/* Join all amounts with a '/' */}
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <p className="text-md">{ability.basicDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AbilityCard;
