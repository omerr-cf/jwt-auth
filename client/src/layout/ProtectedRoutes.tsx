import { Navigate, Outlet } from "react-router-dom";
import { TOKEN_KEY } from "../constants";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem(TOKEN_KEY)?.trim();
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
};
