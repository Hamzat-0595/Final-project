import { ReactNode } from "react";
import { useAppSelector } from "../hooks/hooks";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to={"/signin"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
