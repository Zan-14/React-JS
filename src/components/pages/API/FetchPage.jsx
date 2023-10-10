// import React from 'react'

import { Link } from "react-router-dom";
import Cards from "./apiComponents/cards";
import { useEffect, useState } from "react";
import Categories from "./apiComponents/category";
import Loading from "./apiComponents/loading";

const Part7Api = () => {
  // this useState is for showing and mapping the fetched data.
  // More specifically the "dataProduct" is the one that will be mapped
  // We need to add empty array inside useState() so that we can map the data. If we don't add it, we need to add ternary operator later before mapping the data, which mapping data as true and "data not found" as false.
  const [dataProduct, setDataProduct] = useState();
  // Add another API, so now this page has 2 API calls
  const [dataCategory, setDataCategory] = useState();
  // How to add loading when the data is not loaded yet
  const [isLoading, setIsLoading] = useState(false);
  // Create filter by product category
  const [activeCategory, setActiveCategory] = useState();

  // How to get data from API with fetch
  const getApiProduct = async () => {
    // Add loading to wait for data to be loaded. setIsLoading to true
    setIsLoading(true);

    // If use this method, add async in the function > const getApiProduct = async()...
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // Create the if statement to remove the loadign when the data is loaded and show the data
    if (data) {
      setIsLoading(false);
      setDataProduct(data.products);
    }

    // or this
    // fetch("https://dummyjson.com/products")
    //   .then(res => res.json())
    //   .then(console.log);
  };

  // get the second API data
  const getApiCategory = async () => {
    // categories not category, because we want to get all the categories
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setDataCategory(data);
  };

  // Trigger each click to filter the products by category
  const onClickCategory = title => {
    if (activeCategory == title) {
      setActiveCategory();
    } else {
      setActiveCategory(title);
    }
  };

  // get the product data with the same category when clicking the category bar
  const getApiByCategory = async () => {
    setIsLoading(true);
    const response = await fetch(
      // category, not categories, because we want to choose a specific category
      `https://dummyjson.com/products/category/${activeCategory}`
    );
    const data = await response.json();
    if (data) {
      setIsLoading(false);
      setDataProduct(data.products);
    }
  };

  // use useEffect to fetch the data when the page is opened
  useEffect(() => {
    getApiCategory();
  }, []);

  // create another useEffect with if conditional when the category is selected
  // getApiProduct will move to this useEffect and fill the else statement

  useEffect(() => {
    if (activeCategory) {
      getApiByCategory();
    } else {
      getApiProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

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
        <div className="flex justify-center items-center mb-5">
          <Link to={"/part-7-axios"}>
            <button className="bg-red-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
              Axios page
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
      {/* reusable cards */}
      {/* How to use component props */}
      <Cards
        imgUrl={"https://i.dummyjson.com/data/products/1/1.jpg"}
        title={"Iphone 9"}
        description={
          "This is the old iphone but still can manage to run some lastest mobile game flawlessly"
        }
      />
      {/* This is the 2nd API which is the products category create the style in  a component*/}
      <div className="flex gap-3 mx-4 overflow-x-auto">
        {dataCategory
          ? dataCategory.map((items, key) => {
              return (
                <Categories
                  title={items}
                  key={key}
                  onClickCategory={onClickCategory}
                  activeCategory={activeCategory}
                />
              );
            })
          : "data not loaded"}
      </div>
      {/* How to fill the component props with data from API so we don't have to type manually every single card*/}
      {/* First create the grid first so the list is tidy and same amount every line */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-4">
        {/* Map the initial state which is dataProduct and don't forget the return*/}
        {/* {dataProduct.map(item => {
          return (
            <Cards
              imgUrl={item.thumbnail}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          );
        })} */}
        {/* Use this when we don't put empty array [] inside the useState()  */}
        {/* Combine with loading when the data is not loaded yet */}
        {isLoading ? <Loading /> : <></>}
        {dataProduct && isLoading == false ? (
          dataProduct.map(item => {
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Part7Api;
