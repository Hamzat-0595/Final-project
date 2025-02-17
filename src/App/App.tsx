import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import "./App.scss";

import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";
import PlacingAnOrder from "../pages/PlacingAnOrder/PlacingAnOrder";

import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import ProtectedRoute from "./ProtectedRoute";
import MenuPage from "../pages/MenuPage/MenuPage";
import Layout from "../layout/Layout";
import AccountLayout from "../layout/AccountLayout/AccountLayout";
import ProductPage from "../pages/ProductPage/ProductPage";
import AccountnIformation from "../pages/AccountnIformation/AccountnIformation";
import Delivery from "../pages/delivery/Delivery";
import BasketPage from "../pages/BasketPage/BasketPage";

function App() {
  return (
    <div className="App">
      <div>
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
                <PlacingAnOrder />
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
            <Route path="information" element={<AccountnIformation />} />
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
