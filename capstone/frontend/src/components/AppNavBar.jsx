import React from 'react';

const AppNavBar = () => {
  return (
    <div className="navbar bg-primary px-20">
      <div className="flex-1">
        <a className="btn btn-ghost h-fit">
          <img
            src="src/assets/RiftBuildsWhite.png"
            className="object-contain h-14"
          />
        </a>
      </div>
      <div className="flex flex-row gap-3 border border-black">
        <button className="btn btn-md btn-ghost">Sign Up</button>
        <button className="btn btn-md btn-ghost">Log in</button>
      </div>
    </div>
  );
};

export default AppNavBar;
