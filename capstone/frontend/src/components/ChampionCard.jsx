import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChampionCard = ({ championData }) => {
  const championId = championData._id;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('champions/' + championId);
  };
  return (
    <div
      onClick={handleClick}
      className="card w-28 h-28 bg-base-100 shadow-md rounded-md hover:cursor-pointer"
    >
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
