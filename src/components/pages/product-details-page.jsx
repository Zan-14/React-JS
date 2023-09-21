// import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  // I use product instead of state to make it different from the homepage
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    // fetch data from dummy JSON but changing the link with backtick and dynamic url using ${id}
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
    //   Because we use useParams and the const is {id}, we need to add id inside the [] useEffect instead of just leave it empty like on the homepage.
  }, [id]);

  return (
    <div>
      <h1 className="text-center font-bold text-xl bg-red-300">
        Product Details Page
      </h1>
      <p className="text-center">from product-details-page.jsx</p>
      <div className="text-center p-4 bg-cyan-400">
        <Link to="/contact">Go to Contact Us</Link> <br />
        <Link to="/">Go to Homepage</Link>
      </div>
      {/* add ternary operator here, same with home-page with a little tweaks and without the map looping*/}
      {product ? (
        <div className="p-5 flex flex-wrap justify-evenly">
          <div className="m-5">
            {/* here we put the other data from the JSON file, the order may be different from the homepage */}
            <h3 className="py-2 font-bold text-xl text-center">
              {product.title}
            </h3>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <p className="leading-10">
                <span className="font-bold">Category:</span> {product.category}
              </p>
              <div className="w-[50vw]">
                <p className="leading-6">
                  <span className="font-bold">Description:</span>{" "}
                  {product.description}
                </p>
              </div>
              <p className="leading-10">
                <span className="font-bold">Rating:</span> {product.rating}
              </p>
              <p className="leading-10">
                <span className="font-bold">Stock:</span> {product.stock}
              </p>
              <p className="leading-10">
                <span className="font-bold">Price:</span> ${product.price}
              </p>
            </div>
            {/* <img src={product.images} alt={product.title} /> */}
          </div>
        </div>
      ) : (
        <h3 className="text-center font-bold text-xl bg-gray-300">
          Loading...
        </h3>
      )}
    </div>
  );
};

export default ProductDetailsPage;
