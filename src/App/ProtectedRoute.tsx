import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { checkAuthUser } from "../store/user/userAction";
import Cookies from "js-cookie";

interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const { isAuth, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/signin");
    }
    dispatch(checkAuthUser());
  }, [dispatch]);

  if (isLoading) {
    return null;
  }

  console.log({ isAuth, isLoading });

  if (!isAuth && isLoading === false) {
    return <Navigate to={"/signin"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
