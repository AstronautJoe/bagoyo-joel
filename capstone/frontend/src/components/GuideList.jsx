import React from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const GuideList = () => {
  return (
    <>
      <h2 className="text-secondary text-xl font-bold mt-5 mb-2">GUIDES</h2>
      <div className="flex flex-col gap-y-2">
        {/* Guide List Row */}
        <div className="card flex flex-row pr-5 bg-secondary rounded-none">
          <div className="avatar w-24 object-fit">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          <div className="px-5 pt-3 pb-5">
            <div className="flex flex-row gap-x-2 items-center">
              <img src="/assets/roles/white-baron.webp" className="h-5" />
              <p className="strong text-md text-gray-200">How to win as Ashe</p>
            </div>

            <p className="strong text-xs text-accent text-opacity-25 ">
              Guide by Johnny, updated January 2024
            </p>

            {/* Ratings */}
            <div className="badge bg-transparent flex flex-row gap-x-4 text-white mt-2 border-none">
              <div className="flex flex-row justify-start items-center">
                <FiThumbsUp size={15} />
                <p>300</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <FiThumbsDown size={15} />
                <p>300</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guide List Row */}
        <div className="card flex flex-row pr-5 bg-secondary rounded-none">
          <div className="avatar w-24 object-fit">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          <div className="px-5 pt-3 pb-5">
            <div className="flex flex-row gap-x-2 items-center">
              <img src="/assets/roles/white-baron.webp" className="h-5" />
              <p className="strong text-md text-gray-200">How to win as Ashe</p>
            </div>

            <p className="strong text-xs text-accent text-opacity-25 ">
              Guide by Johnny, updated January 2024
            </p>

            {/* Ratings */}
            <div className="badge bg-transparent flex flex-row gap-x-4 text-white mt-2 border-none">
              <div className="flex flex-row justify-start items-center">
                <FiThumbsUp size={15} />
                <p>300</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <FiThumbsDown size={15} />
                <p>300</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guide List Row */}
        <div className="card flex flex-row pr-5 bg-secondary rounded-none">
          <div className="avatar w-24 object-fit">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          <div className="px-5 pt-3 pb-5">
            <div className="flex flex-row gap-x-2 items-center">
              <img src="/assets/roles/white-baron.webp" className="h-5" />
              <p className="strong text-md text-gray-200">How to win as Ashe</p>
            </div>

            <p className="strong text-xs text-accent text-opacity-25 ">
              Guide by Johnny, updated January 2024
            </p>

            {/* Ratings */}
            <div className="badge bg-transparent flex flex-row gap-x-4 text-white mt-2 border-none">
              <div className="flex flex-row justify-start items-center">
                <FiThumbsUp size={15} />
                <p>300</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <FiThumbsDown size={15} />
                <p>300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideList;
