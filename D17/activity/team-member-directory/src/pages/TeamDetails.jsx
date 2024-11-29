import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetails = () => {
  const { memberId } = useParams();
  return (
    <div className="container">
      <h2>Member ID: {memberId} </h2>
    </div>
  );
};

export default TeamDetails;
