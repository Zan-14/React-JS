// import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/pages/home-page";
import ContactPage from "../components/pages/contact-page";
import ProductDetailsPage from "../components/pages/product-details-page";
import LoginPage from "../components/pages/login-page";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* the /:id is to create a different page for each item/product. Check the home-page.jsx */}
      <Route path="/details/:id" element={<ProductDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
