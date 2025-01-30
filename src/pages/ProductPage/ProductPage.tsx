import "./ProductPage.scss";
import shopping from "../../assets/shopping-bag.svg";
import OrderWindow from "../HomePage/OrderWindow/OrderWindow";

const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="productPage__container">
        <div className="productPage__header">
          <div className="productPage__at--btn">
            <button className="productPage__btn"></button>
          </div>
          <div>
            <h1>Вернуться назад</h1>
          </div>
        </div>

        <div className="productPage__product">
          <img className="productPage__img" />
          <div className="productPage__data">
            <h2>Ягненок</h2>
            <h4>
              помидор, сыр фета, масло подсолнечное, капуста пекинская, перец
              сладкий красный, огурцы, оливки без косточек
            </h4>
            <h3>Вес:210 г</h3>
            <div className="productPage__in">
              <button className="productPage__inBascet">
                <div className="productPage__bascetText">Карзина</div>
                <div className="productPage__inBascet--line"></div>
                <img className="productPage__bascet" src={shopping} />
              </button>
              <h2>259 р</h2>
            </div>
            <div className="productPage__bju">
              <div>Белки</div> <div> Жиры</div> <div>Углеводы</div>
              <div>Ккал</div> <div>Вес </div>
            </div>
            <div className="productPage__border--line"></div>
            <div className="productPage__weight">
              <div>17.23</div>
              <div>7.63</div>
              <div>22.35</div>
              <div>234</div>
              <div>210 г</div>
            </div>
          </div>
        </div>
      </div>

      <OrderWindow title="Пиццы" />
    </div>
  );
};

export default ProductPage;
