import React from 'react';
import TEAMDATA from '../team-data/team-data';
import MemberList from '../components/MemberList';
import { Outlet, useLocation } from 'react-router-dom';

const Team = () => {
  // Get the current location (URL)
  const location = useLocation();

  // Check if the URL path contains the member ID
  const isMemberSelected = location.pathname.includes('/members/');
  return (
    <div className="container h-80">
      <h1 className="text-center my-5">Welcome to the Team Members Page!</h1>
      <div className="d-flex flex-row gap-5">
        <section className="container card p-3 h-80">
          <h2 className="mb-3">Member List</h2>
          <MemberList array={TEAMDATA} />
        </section>
        <section className="container card p-3 h-80">
          <h2 className="mb-3">Member Details</h2>
          {isMemberSelected ? (
            <Outlet />
          ) : (
            <div>
              <p>Please select a member to view their details.</p>
              {/* Or a custom placeholder component */}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Team;
