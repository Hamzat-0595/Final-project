import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

import "./App.scss";

import HomePage from "../pages/HomePage/HomePage";
import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";
import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";

function App() {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <div className="App">
      <div>
        <Routes>
          {!isAuth ? (
            <>
              <Route
                path="/client/signup"
                element={<AutorizationPage type="client" />}
              />
              <Route
                path="/cafe/signup"
                element={<AutorizationPage type="cafe" />}
              />
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
