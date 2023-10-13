// import React from 'react'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosApiProduct } from "../../../services/product.service";
import Cards from "./apiComponents/cards";

const AxiosPage = () => {
  const [dataProduct, setDataProduct] = useState();

  // Open product.service.js to know about the AxiosApiProduct()
  useEffect(() => {
    AxiosApiProduct().then(data => {
      setDataProduct(data.products);
    });
  }, []);

  return (
    <div>
      <div className="bg-gray-300 py-5">
        <h1 className="py-5 text-3xl font-bold text-center">
          API Implementation with Axios()
        </h1>
        <div className="flex justify-center items-center mb-5">
          <Link to={"/part-7"}>
            <button className="bg-red-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
              Back to Fetch page
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
              Back to home
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-4">
        {dataProduct
          ? dataProduct.map(item => {
              return (
                <Cards
                  imgUrl={item.thumbnail}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                  key={item.id}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AxiosPage;
