// import React from 'react'

import { Link } from "react-router-dom";

const Part7Api = () => {
  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">React JS part 7</h1>
      <h1 className="py-5 text-3xl font-bold text-center">
        API Implementation
      </h1>
      <div className="flex justify-center items-center">
        <Link to={"/"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Part7Api;
