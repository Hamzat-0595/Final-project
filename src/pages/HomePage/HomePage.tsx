import "./HomePage.scss";

import Establishments from "./Establishments/Establishments";
import OrderWindow from "./OrderWindow/OrderWindow";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import { useState } from "react";
import ShowMore from "./ShowMore/ShowMore";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="HomePage">
      <Header />
      <Establishments />
      <OrderWindow title="Пиццы" />
      <OrderWindow title="Соки" />
      <OrderWindow title="Бургеры" />
      <OrderWindow title="Гарниры" />
      {isVisible && <ShowMore />}
      <div className="HomePage__Wrapper">
        <button className="HomePage__ShowMore" onClick={handleToggle}>
          {isVisible ? "Скрыть" : "Показать больше категорий"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
