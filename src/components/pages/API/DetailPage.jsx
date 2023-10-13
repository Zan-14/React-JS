/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../../../services/product.service";
// import React from 'react'

const DetailPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  // This section is moved into product.service.js
  // const getDetailProduct = async () => {
  //   const response = await fetch(`https://dummyjson.com/products/${params.id}`);

  //   const data = await response.json();
  //   if (data) {
  //     setProduct(data);
  //   }
  // };

  useEffect(() => {
    // This is the syntax to replace the code below
    fetchProductById(params?.id).then(data => {
      setProduct(data);
    });
    // This is commented because we want to use the function from product.service.js
    // if (params?.id) {
    //   getDetailProduct();
    // }
  }, [params?.id]);

  return (
    <>
      {/* container */}
      <div className="container mx-auto mt-8">
        <div className="flex">
          {/* Product Images */}
          <div className="w-1/2">
            {/* using ? after the state variable is to prevent error/ app crash if there isn't data to show */}
            <img src={product?.thumbnail} alt={product?.title} />
          </div>
          {/* Text section */}
          <div className="w-1/2 p-4">
            {/* title */}
            <h1 className="">{product?.title}</h1>
            {/* The rest of it u can just styling whatever you want, and maybe add a button to return to the home page */}
            {/* category */}
            <p></p>
            {/* brand */}
            <p></p>
            {/* stock */}
            <p></p>
            {/* rating */}
            <p></p>
            {/* price */}
            <p></p>
            {/* description */}
            <p></p>
          </div>
        </div>
      </div>
      {/* button to go back to the product list page */}
      <div className="flex justify-center items-center my-5">
        <Link to={"/part-7"}>
          <button className="bg-red-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Back to Fetch page
          </button>
        </Link>
      </div>
    </>
  );
};

export default DetailPage;
