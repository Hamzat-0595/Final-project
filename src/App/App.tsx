import { Route, Routes } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage/HomePage";
import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";
import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import PlacingAnOrderPage from "../pages/PlacingAnOrder/PlacingAnOrder";
import BasketPage from "../pages/BasketPage/BasketPage";
import Delivery from "../pages/delivery/Delivery";
import ProtectedRoute from "./ProtectedRoute";
import MenuPage from "../pages/MenuPage/MenuPage";
import Layout from "../layout/Layout";
import AccountLayout from "../layout/AccountLayout/AccountLayout";
import ProductPage from "../pages/ProductPage/ProductPage";
import AccountnIformation from "../pages/AccountnIformation/AccountnIformation";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route
            path="/basketPage"
            element={
              <ProtectedRoute>
                <BasketPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/delivery"
            element={
              <ProtectedRoute>
                <Delivery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/placingAnOrder"
            element={
              <ProtectedRoute>
                <PlacingAnOrderPage />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="placingAnOrderPage" element={<PlacingAnOrderPage />} />
          </Route>
          <Route path="/account/" element={<AccountLayout />}>
            <Route
              path="orders"
              element={
                <ProtectedRoute>
                  <OrderListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="menu"
              element={
                <ProtectedRoute>
                  <MenuPage />
                </ProtectedRoute>
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
