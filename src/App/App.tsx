import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import "./App.scss";
import Header from "../layout/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
