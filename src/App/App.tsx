import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import "./App.scss";
import Header from "../layout/Header/Header";

import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";

import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import AutorizationCafe from "../pages/Autorization/AutorizationCafe/AutorizationCafe";
import { useAppSelector } from "../hooks/hooks";
import Footer from "../layout/Footer/Footer";
import PlacingAnOrderPage from "../pages/PlacingAnOrder/PlacingAnOrder";
import BasketPage from "../pages/BasketPage/BasketPage";
import Delivery from "../pages/delivery/Delivery";

function App() {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/basketPage" element={<BasketPage />} />
          <Route path="/placingAnOrderPage" element={<PlacingAnOrderPage />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
        <Footer />

        <div>
          <Routes>
            {!isAuth ? (
              <>
                <Route path="/client/signup" element={<AutorizationPage />} />
                <Route path="/cafe/signup" element={<AutorizationCafe />} />
                <Route path="/signin" element={<LogIn />} />
              </>
            ) : (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/orders" element={<OrderListPage />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
