import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import auth from "../../utils/auth";

const Homepage = () => {
  const [state, setState] = useState();

  useEffect(() => {
    // fetch data from dummy JSON
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(setState);
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-xl bg-gray-300">Homepage</h1>
      <p className="text-center">from homepage.jsx</p>
      <div className="text-center py-5">
        {/* button to logout, include removing the token */}
        <button
          onClick={() => auth.logout()}
          className="bg-slate-200 rounded-lg px-3 py-2 "
        >
          Logout
        </button>
      </div>
      <h3 className="text-center font-bold text-xl bg-gray-300">
        Sample Products
      </h3>
      {/* If the fetch is success, The data will show, if failed or loading, create a loading text */}
      {/* {state ? (
        <div>{JSON.stringify(state)}</div>
      ) : (
        <h3 className="text-center font-bold text-xl bg-gray-300">
          Loading...
        </h3>
      )} */}
      <div className="bg-black p-1 my-5"></div>
      {/* Map the json file so that the real data will show up */}
      {/* {state ? (
        <div className="flex flex-wrap justify-evenly">
          {state.products.map(product => (
            <div key={product.id} className="m-5">
              <h3 className="py-2 font-bold text-xl">{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <p className="leading-10">Category: {product.category}</p>
                <p className="leading-10">Stock: {product.stock}</p>
                <p className="leading-10">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center font-bold text-xl bg-gray-300">
          Loading...
        </h3>
      )} */}
      {/* This is how you can show each product details on different page, and add a button to create the link to the page*/}
      {state ? (
        <div className="flex flex-wrap justify-evenly">
          {state.products.map(product => (
            <div key={product.id} className="m-5">
              <h3 className="py-2 font-bold text-xl">{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <p className="leading-10">Category: {product.category}</p>
                <p className="leading-10">Stock: {product.stock}</p>
                <p className="leading-10">Price: ${product.price}</p>
              </div>
              {/* this is how to create a different page for each product */}
              <Link to={`/details/${product.id}`}>
                <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center font-bold text-xl bg-gray-300">
          Loading...
        </h3>
      )}
    </div>
  );
};

export default Homepage;
