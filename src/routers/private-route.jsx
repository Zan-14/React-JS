// type rafc then tab or enter to generate the template

import { Navigate, Outlet } from "react-router-dom";
// import { UnauthorizedPage } from "../components/pages/unauthorized-page";
import auth from "../utils/auth";

// import React from "react";

export const PrivateRoute = () => {
  // Condition when auth.isAuthenticated() is true or login success, user will go to "/" (<Outlet />) and if it's false, user will go to a new page (unauthorized-page.jsx)
  // <Outlet /> here is a child route of the private route which is homepage and product details page
  if (auth.isAuthenticated()) return <Outlet />;

  // return <UnauthorizedPage />;
  // or
  return <Navigate to="/unauthorized" />;
};
