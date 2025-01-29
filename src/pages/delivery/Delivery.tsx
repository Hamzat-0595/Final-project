import "./Delivery.scss";
import map from "../../assets/map.svg";
import Accordion from "./components/Accordion";
import { accordionsContent } from "./helpers";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__header">
        <div className="delivery__line"></div>
        <h1>Условия доставки</h1>
      </div>
      <div className="delivery__mid">
        <div className="delivery__column">
          {accordionsContent.map((item) => (
            <Accordion {...item} />
          ))}
        </div>
        <div className="delivery__map" /*мап это карта на Английсоком*/>
          <img className="delivery__map--img" src={map} alt="" />
        </div>
      </div>
      <div className="delivery__schedule">
        <div className="delivery__work">
          <h5>График работы доставки:</h5>
          <h4>с 10:00-21:00</h4>
        </div>
        <div className="delivery__delivery--date">
          <h5>График работы кафе:</h5>
          <h4>с 08:00-21:00</h4>
        </div>
      </div>
      <div className="delivery__bottom">
        <h5>Минимальный заказ:</h5>
        <h4>
          Бесплатная доставка пешим курьером при сумме заказа от 400 ₽ Доставка
          оператором такси от любой суммы заказа - по тарифам перевозчика.
        </h4>
      </div>
    </div>
  );
};

export default Delivery;
