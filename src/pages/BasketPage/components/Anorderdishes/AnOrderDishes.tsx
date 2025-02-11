import { CartItem } from "../../../../types/types";
import "./AnOrderDishes.scss";

interface AnOrderDishesProps extends CartItem {
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveItem: () => void;
}

const AnOrderDishes = ({
  name,
  info,
  image,
  price,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}: AnOrderDishesProps) => {
  return (
    <div className="anOrderDishes">
      <div className="anOrderDishes__container">
        <div className="anOrderDishes__map">
          <img className="anOrderDishes__map" src={image} alt={name} />
        </div>
        <div className="anOrderDishes__data">
          <ul className="anOrderDishes__data--ul">
            {name}
            <li className="anOrderDishes__data--li">{info}</li>
          </ul>
        </div>

        <div className="anOrderDishes__quantity">
          <button
            className="anOrderDishes__quantity--button"
            onClick={onDecreaseQuantity}
          >
            <div className="anOrderDishes__quantity--minus">
              <div className="anOrderDishes__quantity--minusImg"></div>
            </div>
          </button>
          {quantity}
          <button
            className="anOrderDishes__quantity--button"
            onClick={onIncreaseQuantity}
          >
            <div className="anOrderDishes__quantity--plus">
              <div className="anOrderDishes__quantity--plusImg"></div>
              <div className="anOrderDishes__quantity--plusImgg"></div>
            </div>
          </button>
        </div>
        <div className="anOrderDishes__price">{price} р</div>
        <div className="anOrderDishes__cancellation">
          <button
            className="anOrderDishes__cancellation--button"
            onClick={onRemoveItem}
          >
            <div className="anOrderDishes__cancellation--plus">
              <div className="anOrderDishes__cancellation--plusImg"></div>
              <div className="anOrderDishes__cancellation--plusImgg"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AnOrderDishes;
