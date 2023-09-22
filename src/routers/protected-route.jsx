// import React from 'react'

import { Navigate, Outlet } from "react-router-dom";
import auth from "../utils/auth";
// import { PrivateRoute } from "./private-route";

export const ProtectedRoute = () => {
  // the opposite of the private route by addint ! before auth
  if (!auth.isAuthenticated()) return <Outlet />;

  //   return <PrivateRoute />;
  // or
  return <Navigate to="/" />;
};
