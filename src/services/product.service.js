import axios from "axios";

//  This file will contain all the functions to fetch the data from api

// this section will replace the function from DetailPage.jsx "getDetailProduct"
export async function fetchProductById(productId) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);

  return response.json();
}

// How to get data from API with axios

//   Try to use this function to show the data on AxiosPage.jsx
export async function AxiosApiProduct() {
  const response = await axios(`https://dummyjson.com/products`);

  return response?.data;
}

// The default of axios and fetch is GET method, but, we can change that with add the method after axios, example:
// const response = await axios.post(`https://dummyjson.com/products`);
