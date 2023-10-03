// import React from 'react'

import { Link } from "react-router-dom";

export const UnauthorizedPage = () => {
  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">ACCESS DENIED</h1>
      <h1 className="py-5 text-2xl font-bold text-center">401</h1>
      <div className="flex justify-center items-center">
        <Link to={"/login"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Login
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to={"/part-4"}>
          <button className="bg-green-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            GO TO LEARN REACT JS PART 4 & 5
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to={"/part-6"}>
          <button className="bg-green-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            GO TO LEARN REACT JS PART 6 Redux
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to={"/part-7"}>
          <button className="bg-pink-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            REACT JS PART 7 API
          </button>
        </Link>
      </div>
    </div>
  );
};
