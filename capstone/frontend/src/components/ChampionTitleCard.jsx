import React from 'react';

const ChampionTitleCard = ({ championData }) => {
  return (
    <div className="card bg-gradient-to-r from-blue-800 to-[#537AF3] mx-auto pl-4 border border-red-500 rounded-md flex flex-row justify-center items-center">
      {/* Champion Info */}
      <div className=" flex flex-row basis-3/4 items-center justify-center">
        <img
          src={championData.assets.imageThumbnail}
          className="object-contain rounded-full w-28 h-28 outline outline-accent outline-4 mr-5"
        />
        <div className="">
          <h1 className="text-3xl font-bold text-white italic">
            {championData.name}
          </h1>
          <h2 className="text-xl text-white italic mb-4">
            The {championData.title}
          </h2>
          <p className="text-accent text-sm">Recommended Role:</p>
          <span className="badge badge-primary h-6">
            {championData.mainRole} Lane
            <img
              src={
                '/assets/roles/white-' +
                championData.mainRole.toLowerCase() +
                '.webp'
              }
              className="object-scale-down h-5 ml-2"
            />
          </span>
        </div>

        {/* Champion Video */}
      </div>

      {/* Champion Video */}
      <video
        className="object-none w-1/2 object-right-top rounded-r-md basis-1/4 rounded-l-full"
        loop
        autoPlay
        muted
      >
        <source src={championData.assets.videoWEBM} type="video/webm" /> Your
        browser does not support the video tag. I suggest you upgrade your
        browser.
        <source src={championData.assets.videoMP4} type="video/mp4" /> Your
        browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
    </div>
  );
};

export default ChampionTitleCard;
