import React from 'react'
import ChampionGrid from '../components/ChampionGrid';
import AWS from 'aws-sdk';
private s3: AWS.S3;

const Home = () => {
  return (
    <div>
      <h1 className="text-strong">RiftBuilds</h1>
      {/* Test AWS S3 loading of images */}

      {/* Champion Search */}

      {/* Champion Grid */}
      <ChampionGrid />
    </div>
  );
};

export default Home
