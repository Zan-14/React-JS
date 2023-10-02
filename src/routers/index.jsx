// import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/pages/home-page";
// import ContactPage from "../components/pages/contact-page";
import ProductDetailsPage from "../components/pages/product-details-page";
import LoginPage from "../components/pages/login-page";
import { UnauthorizedPage } from "../components/pages/unauthorized-page";
import { PrivateRoute } from "./private-route";
import { ProtectedRoute } from "./protected-route";
import { Part4React } from "../components/pages/part-4-reactjs";
import { UseReducerPage } from "../components/pages/useReducer-page";
import Part5React from "../components/pages/part-5-reactjs";
import Part6Redux from "../components/pages/part-6-redux";

const Routers = () => {
  return (
    <Routes>
      {/* How to make homepage and selected page as Private route */}
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Homepage />} />
        {/* the /:id is to create a different page for each item/product. Check the home-page.jsx */}
        <Route path="/details/:id" element={<ProductDetailsPage />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      {/* Free page */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/part-4" element={<Part4React />} />
      <Route path="/part-5" element={<Part5React />} />
      <Route path="/part-6" element={<Part6Redux />} />

      <Route path="/usereducer" element={<UseReducerPage />} />
    </Routes>
  );
};

export default Routers;
