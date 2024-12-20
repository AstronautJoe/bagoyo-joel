import React from 'react'

const ChampionCard = ({ championData }) => {
  return (
    <div className="card w-28 h-28 bg-base-100 shadow-md rounded-md">
      <figure>
        {/* <p>Champion ID: {championData.id}</p> */}
        <img
          src={championData.assets.imageThumbnail}
          alt={championData.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body py-1 px-2 bg-secondary rounded-b-md">
        <h2 className="card-title text-center block text-sm text-white">
          {championData.name.toUpperCase()}
        </h2>
      </div>
    </div>
  );
};

export default ChampionCard
