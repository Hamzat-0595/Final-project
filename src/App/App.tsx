import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import "./App.scss";
import AutorizationPage from "../pages/Autorization/AutorizationUser/AutorizationPage";
import AutorizationCafe from "../pages/Autorization/AutorizationCafe/AutorizationCafe";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/client/signup" element={<AutorizationPage />} />
          <Route path="/cafe/signup" element={<AutorizationCafe />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
