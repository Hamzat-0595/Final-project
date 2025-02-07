import "./AnOrderDishes.scss";

const AnOrderDishes = () => {
  return (
    <div className="anOrderDishes">
      <div className="anOrderDishes__container">
        <div className="anOrderDishes__map"></div>
        <div className="anOrderDishes__data">
          <ul className="anOrderDishes__data--ul">
            ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
            <li className="anOrderDishes__data--li">
              Кальмары, мидии, креветки, сыр маасдам,
              <br /> красный лук, микс оливок, базилик, соус песто
            </li>
          </ul>
        </div>

        <div className="anOrderDishes__quantity">
          <button className="anOrderDishes__quantity--button">
            <div className="anOrderDishes__quantity--minus">
              <div className="anOrderDishes__quantity--minusImg"></div>
            </div>
          </button>
          1
          <button className="anOrderDishes__quantity--button">
            <div className="anOrderDishes__quantity--plus">
              <div className="anOrderDishes__quantity--plusImg"></div>
              <div className="anOrderDishes__quantity--plusImgg"></div>
            </div>
          </button>
        </div>
        <div className="anOrderDishes__price">1640 р</div>
        <div className="anOrderDishes__cancellation">
          <button className="anOrderDishes__cancellation--button">
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
