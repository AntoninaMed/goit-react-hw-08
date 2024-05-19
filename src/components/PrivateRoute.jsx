import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectorIsLoggedIn,
  selectorIsRefreshing,
} from "../redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
  ...routeProps
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isRefreshing = useSelector(selectorIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
