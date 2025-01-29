import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
