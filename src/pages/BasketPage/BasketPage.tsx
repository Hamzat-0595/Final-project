import AnOrderDishes from "./components/Anorderdishes/AnOrderDishes";
import "./BasketPage.scss";
const BasketPage = () => {
  return (
    <div className="BasketPage">
      <div className="BasketPage__container">
        <div className="BasketPage__header">
          <div className="BasketPage__header--df">
            <div className="BasketPage__header--arrow"></div>
            <div className="BasketPage__header--back">к выбору блюда</div>
          </div>
          <div className="BasketPage__name--df">
            <div className="BasketPage__header--line"></div>
            <div className="BasketPage__header--name">КОРЗИНА</div>
            <div className="BasketPage__header--quantity">
              (в корзине 3 товара)
            </div>
          </div>
        </div>

        <AnOrderDishes />
        <AnOrderDishes />
        <div className="BasketPage__footer">
          <div className="BasketPage__footer--data">
            <div className="BasketPage__footer--h1">
              <h1>Итого:</h1>
              <div className="BasketPage__footer--price"> 500 р</div>
            </div>
            <h3>
              До бесплатной доставки не хватет:{" "}
              <span className="free-blue">100 ₽</span>
            </h3>
            <h3>Минимальная сума заказа 1500 ₽</h3>
          </div>
          <button className="BasketPage__footer--design">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
