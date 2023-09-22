// import React from 'react'

import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    // need preventDefault so that the function is not executed directly
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        // the correct username & password from dummyjson.com are:
        // username: kminchelle
        // password: 0lelplR
        // Custom data is available but it needs register page which will be related to the backend section
      }),
    }).then(async res => {
      if (res.status === 400)
        return alert("Enter the correct username and password");
      const { token } = await res.json();
      auth.storeAuthCredential(token);
      return navigate("/");
    });
  };

  return (
    <div className="py-10 text-center">
      <h1 className="py-5 text-3xl font-bold">LOGIN PAGE</h1>
      {/* Create a form */}
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="Enter your username"
          className="border-2 border-black bg-gray-100 mx-5 py-2 text-center"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="border-2 border-black bg-gray-100 mx-5 py-2 text-center"
        />
        <button
          type="submit"
          className="border-2 border-black bg-gray-100 py-2 px-3 text-center"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center my-10">
        <Link to={"/part-4"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Part 4 React
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
