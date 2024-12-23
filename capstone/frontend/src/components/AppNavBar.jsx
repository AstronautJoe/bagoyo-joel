import React from 'react';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <div className="navbar bg-primary px-20">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost h-fit">
          <img
            src="/assets/RiftBuildsWhite.png"
            className="object-contain h-14"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-3 border border-black">
        <Link to="/sign-up" className="btn btn-md btn-ghost">
          Sign Up
        </Link>
        <Link to="/log-in" className="btn btn-md btn-ghost">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default AppNavBar;
