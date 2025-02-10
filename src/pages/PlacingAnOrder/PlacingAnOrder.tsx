import { useNavigate } from "react-router-dom";
import { Button, ButtonVariables } from "../../components/Button/Button";
import Input, { InputVariants } from "../../components/input/input";
import "./PlacingAnOrder.scss";
import { useState } from "react";
import { OrderForm } from "../../types/types";
import { useAppDispatch } from "../../hooks/hooks";
import { order } from "../../store/user/userAction";
// множества типов buttons
export enum DeliveryTypes {
  "pickup" = "pickup",
  "delivery" = "delivery",
}

export enum DeliveryTimes {
  "asap" = "asap",
  "inTime" = "inTime",
}
export enum PayTypes {
  "byCard" = "byCard",
  "courierBy" = "courierBy",
  "cash" = "cash",
}

//изменение button bakcgraund
const PlacingAnOrder = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(order(formData));
  };
  const navigate = useNavigate(); // Используем хук useNavigate
  const [deliveryType, setDeliveryType] = useState<DeliveryTypes>(
    DeliveryTypes.delivery
  );

  const [deliveryTime, setDeliveryTime] = useState<DeliveryTimes>(
    DeliveryTimes.asap
  );

  const [payType, setPayType] = useState<PayTypes>(PayTypes.courierBy);
  //чекбокс

  const [isAgreed, setIsAgreed] = useState(false); // Состояние для чекбокса

  const handleAgreementClick = () => {
    setIsAgreed(!isAgreed); // Переключаем состояние чекбокса
  };
  //счетчик

  const [personCount, setPersonCount] = useState(1);

  // Увеличивает
  const increment = () => {
    if (personCount < 10) {
      //Максимум 10персон
      setPersonCount((prevCount) => prevCount + 1);
    }
  };

  //Уменьшение
  const decrement = () => {
    setPersonCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1)); //не позволяет значению быть меньше 1
  };

  const handleBasketClick = () => {
    navigate("/BasketPage"); // Переход на страницу корзины
  };

  const [formData, setFormData] = useState<OrderForm>({
    name: "",
    phone: "",
    deliveryType: DeliveryTypes.delivery,
    restaurant: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
    entrance: "",
    floor: "",
    comment: "",
    payType: PayTypes.courierBy,
    deliveryTime: DeliveryTimes.asap,
    specifiedTime: "",
    personCount: 1,
    callback: "no",
    isAgreed: false,
  });

  return (
    <div className="placingAnOrder">
      <div className="placingAnOrder__container">
        <div className="placingAnOrder__header">
          <div className="placingAnOrder__header--df">
            <div className="placingAnOrder__header--arrow"></div>
            <Button
              variant={ButtonVariables.text}
              className="placingAnOrder__header--back"
              onClick={handleBasketClick}
            >
              в корзину
            </Button>
          </div>
          <div className="placingAnOrder__name--df">
            <div className="placingAnOrder__header--line"></div>
            <div className="placingAnOrder__header--name">
              ОФОРМЛЕНИЕ ЗАКАЗА
            </div>
          </div>
        </div>
        <div className="placingAnOrder__contact">
          <div className="placingAnOrder__contact--text">
            1. Контактная информация
          </div>
          <div className="placingAnOrder__contact--df">
            <Input
              variant={InputVariants.light}
              placeholder="Имя"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="placingAnOrder__contact--name"
            />
            <Input
              variant={InputVariants.light}
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="placingAnOrder__contact--number"
            />
          </div>
        </div>
        <div className="placingAnOrder__delivery">
          <div className="placingAnOrder__delivery--text">2. Доставка</div>
          <div className="placingAnOrder__delivery--btn">
            <Button
              variant={
                deliveryType === DeliveryTypes.delivery
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              onClick={() => setDeliveryType(DeliveryTypes.delivery)}
              className="placingAnOrder__delivery--del"
            >
              Доставка
            </Button>
            <Button
              variant={
                deliveryType === DeliveryTypes.pickup
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              onClick={() => setDeliveryType(DeliveryTypes.pickup)}
              className="placingAnOrder__delivery--pickup"
            >
              Самовызов
            </Button>
            <img src="" alt="" /> Доставим через 1 час 30 минут
          </div>
          {deliveryType === DeliveryTypes.pickup && (
            <div className={`placingAnOrder__content`}>
              <div className="placingAnOrder__content--choice">
                Выбор ресторана
              </div>
              <Input
                variant={InputVariants.light}
                placeholder="Выбор ресторана"
                className="placingAnOrder__content--choiceOf"
                type="text"
              />
            </div>
          )}
          {deliveryType === DeliveryTypes.delivery && (
            <div className={`placingAnOrder__delivery`}>
              <div className="placingAnOrder__delivery--text">
                Адресс доставки
              </div>
              <div className="placingAnOrder__delivery--field">
                <div className="placingAnOrder__delivery--inputs">
                  <Input
                    variant={InputVariants.light}
                    className="placingAnOrder__delivery--street"
                    placeholder="Укажите улицу"
                    value={formData.street}
                    onChange={(e) =>
                      setFormData({ ...formData, street: e.target.value })
                    }
                  />
                  <Input
                    variant={InputVariants.light}
                    className="placingAnOrder__delivery--numHome"
                    placeholder="Номер дома"
                    value={formData.houseNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, houseNumber: e.target.value })
                    }
                  />
                </div>
                <div className="placingAnOrder__delivery--inputs">
                  <Input
                    variant={InputVariants.light}
                    className="placingAnOrder__delivery--numFlat"
                    placeholder="№ квартры/офиса"
                    value={formData.flatNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, flatNumber: e.target.value })
                    }
                  />
                  <Input
                    variant={InputVariants.light}
                    className="placingAnOrder__delivery--entrance"
                    placeholder="Подъезд"
                    value={formData.entrance}
                    onChange={(e) =>
                      setFormData({ ...formData, entrance: e.target.value })
                    }
                  />
                  <Input
                    variant={InputVariants.light}
                    className="placingAnOrder__delivery--floor"
                    placeholder="Этаж"
                    value={formData.floor}
                    onChange={(e) =>
                      setFormData({ ...formData, floor: e.target.value })
                    }
                  />
                </div>
                <div className="placingAnOrder__delivery--inputs">
                  <Input
                    variant={InputVariants.light}
                    className="placingAnOrder__delivery--comment"
                    placeholder="Комментрий"
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="placingAnOrder__pay">
          <div className="placingAnOrder__pay--text">3. Оплатить</div>
          <div className="placingAnOrder__pay-buttons">
            <Button
              onClick={() => setPayType(PayTypes.byCard)}
              variant={
                payType === PayTypes.byCard
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              className="placingAnOrder__pay--card"
            >
              Оплата онлайн
            </Button>
            <Button
              onClick={() => setPayType(PayTypes.courierBy)}
              variant={
                payType === PayTypes.courierBy
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              className="placingAnOrder__pay--cardK"
            >
              Курьеру картой
            </Button>
            <Button
              onClick={() => setPayType(PayTypes.cash)}
              variant={
                payType === PayTypes.cash
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              className="placingAnOrder__pay--cash"
            >
              Наличныи
            </Button>
          </div>
          {payType === PayTypes.cash && (
            <button className="placingAnOrder__pay--change">Сдача с/</button>
          )}
        </div>
        <div className="placingAnOrder__whenDelivery">
          <div className="placingAnOrder__whenDelivery--text">
            4. Когда доставить
          </div>
          <div className="placingAnOrder__contact--df">
            <Button
              variant={
                deliveryTime === DeliveryTimes.asap
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              onClick={() => setDeliveryTime(DeliveryTimes.asap)}
              className="placingAnOrder__whenDelivery--soon"
            >
              В ближайшее время
            </Button>
            <Button
              variant={
                deliveryTime === DeliveryTimes.inTime
                  ? ButtonVariables.filled
                  : ButtonVariables.outlined
              }
              onClick={() => setDeliveryTime(DeliveryTimes.inTime)}
              className="placingAnOrder__whenDelivery--byTime"
            >
              Ко времени
            </Button>

            {deliveryTime === DeliveryTimes.inTime && (
              <Input
                className="placingAnOrder__whenDelivery--indicate"
                placeholder="Укажите время"
                variant={InputVariants.light}
              />
            )}
          </div>

          <Button
            variant={ButtonVariables.outlined}
            className="placingAnOrder__whenDelivery--people"
          >
            <span>кол-во персон</span>
            <button
              onClick={decrement}
              className="placingAnOrder__whenDelivery--decrement"
            >
              _
            </button>
            <div> {personCount}</div>
            <button
              onClick={increment}
              className="placingAnOrder__whenDelivery--increment"
            >
              +
            </button>
          </Button>
          <div className="placingAnOrder__whenDelivery--connection">
            <div className="placingAnOrder__whenDelivery--feedback">
              Хотите мы позвоним?
            </div>
            <div className="placingAnOrder__whenDelivery--callOperator">
              <input
                id="radio-1"
                type="radio"
                name="callback"
                className="placingAnOrder__whenDelivery--donBtn"
              />
              <label htmlFor="radio-1">{""}</label>
              <div>Не перезвонить</div>
            </div>
            <div className="placingAnOrder__whenDelivery--callOperator">
              <input
                id="radio-2"
                type="radio"
                name="callback"
                className="placingAnOrder__whenDelivery--donBtn"
              />
              <label htmlFor="radio-2">{""}</label>
              <div>По требуется званок оператору</div>
            </div>
          </div>
        </div>
        <div className="placingAnOrder__footer">
          <div className="placingAnOrder__footer--personal">
            <button
              className="placingAnOrder__footer--checkbox"
              onClick={handleAgreementClick}
              style={{ cursor: "pointer" }}
            >
              <input
                className="placingAnOrder__footer--checkboxx"
                type="checkbox"
                checked={isAgreed}
                onChange={() => {}}
              />
            </button>
            <span>
              Я согласен на обработку моих перс. данных в соответствии
              <a
                style={{
                  color: "rgba(114, 164, 121, 1)",
                }}
                href=""
              >
                с Условиями
              </a>
            </span>
          </div>
          <Button
            variant={ButtonVariables.filled}
            onClick={handleClick}
            disabled={!isAgreed}
            style={{
              backgroundColor: isAgreed ? "green" : "gray",
              cursor: isAgreed ? "pointer" : "not-allowed",
            }}
            className="placingAnOrder__footer--design"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlacingAnOrder;
