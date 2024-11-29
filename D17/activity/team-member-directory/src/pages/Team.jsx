import React from 'react';
import TEAMDATA from '../team-data/team-data';
import MemberList from '../components/MemberList';
import { Outlet } from 'react-router-dom';

const Team = () => {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Team Members Page!</h1>
      <div className="d-flex flex-row gap-5">
        <section className="member-selection flex-grow-2">
          <h2>Member List</h2>
          <MemberList array={TEAMDATA} />
        </section>
        <section className="member-details flex-grow-1">
          <h2>Member Details</h2>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Team;
