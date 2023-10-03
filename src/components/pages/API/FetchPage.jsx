// import React from 'react'

import { Link } from "react-router-dom";
import Cards from "./apiComponents/cards";
import { useEffect, useState } from "react";

const Part7Api = () => {
  // this useState is for showing and mapping the fetched data.
  // More specifically the "dataProduct" is the one that will be mapped
  const [dataProduct, setDataProduct] = useState([]);

  // How to get data from API with fetch
  const getApiProduct = async () => {
    // If use this method, add async in the function > const getApiProduct = async()...
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setDataProduct(data.products);

    // or this
    // fetch("https://dummyjson.com/products")
    //   .then(res => res.json())
    //   .then(console.log);
  };

  // use useEffect to fetch the data when the page is opened
  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <>
      <div>
        <h2 className="bg-blue-800 text-white text-2xl text-center">
          API (Application Programming Interface)
        </h2>
      </div>
      <div className="bg-gray-200 pb-5 mb-4">
        <h1 className="py-5 text-3xl font-bold text-center">React JS part 7</h1>
        <h1 className="py-5 text-3xl font-bold text-center">
          API Implementation with fetch()
        </h1>
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
              Back to home
            </button>
          </Link>
        </div>
      </div>
      {/* reusable cards */}
      {/* How to use component props */}
      <Cards
        imgUrl={"https://i.dummyjson.com/data/products/1/1.jpg"}
        title={"Iphone 9"}
        description={
          "This is the old iphone but still can manage to run some lastest mobile game flawlessly"
        }
      />
      {/* How to fill the component props with data from API so we don't have to type manually every single card*/}
      {/* First create the grid first so the list is tidy and same amount every line */}
      <div className="grid grid-cols-3 mx-4 justify-center">
        {/* Map the initial state which is dataProduct and don't forget the return*/}
        {dataProduct.map(item => {
          return (
            <Cards
              imgUrl={item.thumbnail}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Part7Api;
