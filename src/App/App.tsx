import { Route, Routes } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage/HomePage";
import LogIn from "../pages/Autorization/login/LogIn";
import OrderListPage from "../pages/OrderListPage/OrderListPage";
import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrderListPage />
              </ProtectedRoute>
            }
          />
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
