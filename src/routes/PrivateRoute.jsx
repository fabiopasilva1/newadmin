import P from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthStatus } from "../utils/auth-providers";

const PrivateRoute = () => {
  const isLoggedIn = getAuthStatus();

  return !isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: P.node,
};
