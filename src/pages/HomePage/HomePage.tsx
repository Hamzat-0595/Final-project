import "./HomePage.scss";

import Establishments from "./Establishments/Establishments";
import OrderWindow from "./OrderWindow/OrderWindow";
import Header from "../../layout/Header/Header";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <Establishments />
      <OrderWindow title="Пиццы" />
      <OrderWindow title="Соки" />
      <OrderWindow title="Бургеры" />
      <OrderWindow title="Гарниры" />
      <div className="HomePage__Wrapper">
        <button className="HomePage__ShowMore">
          Показать больше категорий
        </button>
      </div>
    </div>
  );
};

export default HomePage;
