import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectorIsLoggedIn } from "../redux/auth/selectors";

export const PublicRoute = ({
  component: Component,
  redirectTo = "/",
  ...routeProps
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
