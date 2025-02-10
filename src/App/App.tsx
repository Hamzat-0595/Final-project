import { Route, Routes } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage/HomePage";
import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";
import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import ProtectedRoute from "./ProtectedRoute";
import MenuPage from "../pages/MenuPage/MenuPage";
import Layout from "../layout/Layout";
import AccountLayout from "../layout/AccountLayout/AccountLayout";
import AccountnIformation from "../pages/AccountnIformation/AccountnIformation";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/account/" element={<AccountLayout />}>
            <Route
              path="orders"
              element={
                // <ProtectedRoute>
                <OrderListPage />
                // </ProtectedRoute>
              }
            />
            <Route
              path="menu"
              element={
                // <ProtectedRoute>
                <MenuPage />
                // </ProtectedRoute>
              }
            />

            <Route
              path="information"
              element={
                // <ProtectedRoute>
                <AccountnIformation />
                // </ProtectedRoute>
              }
            />

          </Route>
          <Route
            path="/client/signup"
            element={<AutorizationPage type="client" />}
          />
          <Route
            path="/cafe/signup"
            element={<AutorizationPage type="cafe" />}
          />
          <Route path="/signin" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
