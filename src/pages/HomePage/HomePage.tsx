import "./HomePage.scss";

import Establishments from "./Establishments/Establishments";
import OrderWindow from "./OrderWindow/OrderWindow";
import Footer from "../../layout/Footer/Footer";

const HomePage = () => {
  return (
    <div className="HomePage">
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
      <Footer />
    </div>
  );
};

export default HomePage;
