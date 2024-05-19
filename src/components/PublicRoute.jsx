import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const PublicRoute = ({
  component: Component,
  redirectTo = "/",
  ...routeProps
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component {...routeProps} />
  );
};
