import { Navigate, Outlet } from "react-router-dom";
import { getAuthStatus } from "../utils/auth-providers";

const PublicRoute = () => {
  const isLoggedIn = getAuthStatus();
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
