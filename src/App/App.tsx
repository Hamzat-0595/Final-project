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

function App() {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <div className="App">
<<<<<<< HEAD
      <div className="App__container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
=======
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
>>>>>>> 1fd0e3fd35cb9b83307116e7c21da88e0dc55bca
      </div>
    </div>
  );
}

export default App;
