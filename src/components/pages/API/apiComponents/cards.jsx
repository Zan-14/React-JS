/* eslint-disable react/prop-types */
// import React from "react";

import { Link } from "react-router-dom";

// {imgUrl, title, description} this is component props
const Cards = ({ imgUrl, title, description, id }) => {
  return (
    <>
      <Link to={`/part-7/detail/${id}`}>
        <div className="bg-blue-600 p-4 rounded-lg max-w-md my-4">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-32 object-cover mb-2 rounded-lg"
          />
          <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
          <div className="text-gray-300">{description}</div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
