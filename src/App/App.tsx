import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import "./App.scss";

import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";

import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import AutorizationCafe from "../pages/Autorization/AutorizationCafe/AutorizationCafe";
import { useAppSelector } from "../hooks/hooks";

function App() {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <div className="App">
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
  );
}

export default App;
