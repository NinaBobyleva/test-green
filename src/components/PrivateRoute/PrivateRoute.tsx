import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";
import { useAuthContext } from "../../context/authContext";

export function PrivateRoute() {
  const { isAuth } = useAuthContext();

  return isAuth ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}
