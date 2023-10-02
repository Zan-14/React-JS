// import React from 'react'

import { Link } from "react-router-dom";

const Part5React = () => {
  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center bg-gray-300">
        Part 5 React JS
      </h1>
      <h2 className="py-5 text-2xl font-bold text-center">
        TypeScript and ESLint
      </h2>
      <div className="flex justify-center my-5">
        <Link to={"/part-4"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Go to Part 4 React JS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Part5React;
