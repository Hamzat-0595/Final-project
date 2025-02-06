import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import UserInfo from "../../pages/OrderListPage/UserInfo/UserInfo";
import "./AccountLayout.scss";

const AccountLayout = () => {
  return (
    <>
      <Header />
      <div className="AccountLayout">
        <div className="AccountLayout__container">
          <Outlet />
        </div>
        <UserInfo />
      </div>
    </>
  );
};

export default AccountLayout;
