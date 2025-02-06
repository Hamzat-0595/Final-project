import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import "./App.scss";

import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";

import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import AutorizationCafe from "../pages/Autorization/AutorizationCafe/AutorizationCafe";
import ProtectedRoute from "./ProtectedRoute";
import MenuPage from "../pages/MenuPage/MenuPage";
import Layout from "../layout/Layout";
import AccountLayout from "../layout/AccountLayout/AccountLayout";

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
          </Route>
          <Route path="/client/signup" element={<AutorizationPage />} />
          <Route path="/cafe/signup" element={<AutorizationCafe />} />
          <Route path="/signin" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
