// import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/pages/home-page";
// import ContactPage from "../components/pages/contact-page";
import ProductDetailsPage from "../components/pages/product-details-page";
import LoginPage from "../components/pages/login-page";
import { UnauthorizedPage } from "../components/pages/unauthorized-page";
import { PrivateRoute } from "./private-route";
import { ProtectedRoute } from "./protected-route";

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
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
};

export default Routers;
