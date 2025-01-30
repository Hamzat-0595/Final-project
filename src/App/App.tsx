import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import "./App.scss";
import LogIn from "../pages/login/LogIn";
import Header from "../layout/Header/Header";

function App() {
  return (
    <div className="App">
      <div>
          <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
