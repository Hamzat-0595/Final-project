import AnOrderDishes from "./components/Anorderdishes/AnOrderDishes";
import "./BasketPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store"; // Импортируйте тип RootState
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/services/cartBasket/cartSlice";
import { Button, ButtonVariables } from "../../components/Button/Button";
const BasketPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items); // Получаем корзину из состояния
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (name: string) => {
    dispatch(increaseQuantity(name));
  };

  const handleDecreaseQuantity = (name: string) => {
    dispatch(decreaseQuantity(name));
  };

  const handleRemoveItem = (name: string) => {
    dispatch(removeFromCart(name));
  };
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const minimumOrderAmount = 1500;
  const isOrderValid = totalPrice >= minimumOrderAmount;
  const handleHomePageClick = () => {
    navigate("/"); // Переход на страницу HomePage
  };
  const handlePlacingAnOrderClick = () => {
    navigate("/placingAnOrder"); // Переход на страницу HomePage
  };

  <h3>
    {isOrderValid
      ? "Доставка бесплатная"
      : `До бесплатной доставки не хватает: ${
          minimumOrderAmount - totalPrice
        } ₽`}
  </h3>;
  return (
    <div className="BasketPage">
      <div className="BasketPage__container">
        <div className="BasketPage__header">
          <div className="BasketPage__header--df">
            <div className="BasketPage__header--arrow"></div>
            <Button
              className="BasketPage__header--back"
              variant={ButtonVariables.text}
              onClick={handleHomePageClick}
            >
              к выбору блюда
            </Button>
          </div>
          <div className="BasketPage__name--df">
            <div className="BasketPage__header--line"></div>
            <div className="BasketPage__header--name">КОРЗИНА</div>
            <div className="BasketPage__header--quantity">
              (в корзине {cart.length}товара)
            </div>
          </div>
        </div>
        {cart.map((item) => (
          <AnOrderDishes
            key={item.name}
            {...item}
            onIncreaseQuantity={() => handleIncreaseQuantity(item.name)}
            onDecreaseQuantity={() => handleDecreaseQuantity(item.name)}
            onRemoveItem={() => handleRemoveItem(item.name)}
          />
        ))}

        <div className="BasketPage__footer">
          <div className="BasketPage__footer--data">
            <div className="BasketPage__footer--h1">
              <h1>Итого:</h1>
              <div className="BasketPage__footer--price"> {totalPrice} р</div>
            </div>
            <h3>
              {isOrderValid
                ? "Доставка бесплатная"
                : `До бесплатной доставки не хватает: ${
                    minimumOrderAmount - totalPrice
                  } ₽`}
            </h3>
            <h3>Минимальная сума заказа 1500 ₽</h3>
          </div>
          <Button
            variant={ButtonVariables.filled}
            onClick={handlePlacingAnOrderClick}
            className="BasketPage__footer--design"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
