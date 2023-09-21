// import React from 'react'
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl bg-yellow-300">
        Contact Page
      </h1>
      <p className="text-center">from contact.jsx</p>
      <div className="text-center p-4 bg-red-100">
        <Link to="/" className="text-center">
          Go to Home Page
        </Link>{" "}
        <br />
        {/* <Link to="/details">Go to Product Detals</Link> */}
      </div>
    </div>
  );
};

export default ContactPage;
