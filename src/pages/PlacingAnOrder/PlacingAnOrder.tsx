import "./PlacingAnOrder.scss";
import { useState } from "react";

enum DeliveryTypes {
  "pickup" = "pickup",
  "delivery" = "delivery",
}

const PlacingAnOrder = () => {
  const [deliveryType, setDeliveryType] = useState<DeliveryTypes>(
    DeliveryTypes.delivery
  );

  return (
    <div className="placingAnOrder">
      <div className="placingAnOrder__container">
        <div className="placingAnOrder__header">
          <div className="placingAnOrder__header--df">
            <div className="placingAnOrder__header--arrow"></div>
            <div className="placingAnOrder__header--back">в карзину</div>
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
            <input
              placeholder="Имя"
              className="placingAnOrder__contact--name"
            />
            <input
              placeholder="Телефон"
              className="placingAnOrder__contact--number"
            />
          </div>
        </div>
        <div className="placingAnOrder__delivery">
          <div className="placingAnOrder__delivery--text">2. Доставка</div>
          <div className="placingAnOrder__delivery--btn">
            <button
              onClick={() => setDeliveryType(DeliveryTypes.delivery)}
              className="placingAnOrder__delivery--del"
            >
              Доставка
            </button>
            <button
              onClick={() => setDeliveryType(DeliveryTypes.pickup)}
              className="placingAnOrder__delivery--pickup"
            >
              Самовызов
            </button>
            <img src="" alt="" /> Доставим через 1 час 30 минут
          </div>
          {deliveryType === DeliveryTypes.pickup && (
            <div className={`placingAnOrder__content`}>
              <div className="placingAnOrder__content--choice">
                Выбор ресторана
              </div>
              <input
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
                  <input
                    className="placingAnOrder__delivery--street"
                    placeholder="Укажитеулицу"
                  />
                  <input
                    className="placingAnOrder__delivery--numHome"
                    placeholder="Номер дма"
                  />
                </div>
                <div className="placingAnOrder__delivery--inputs">
                  <input
                    className="placingAnOrder__delivery--numFlat"
                    placeholder="№ квартры/офиса"
                  />
                  <input
                    className="placingAnOrder__delivery--entrance"
                    placeholder="Подъезд"
                  />
                  <input
                    className="placingAnOrder__delivery--floor"
                    placeholder="Этаж"
                  />
                </div>
                <div className="placingAnOrder__delivery--inputs">
                  <input
                    className="placingAnOrder__delivery--comment"
                    placeholder="Комментрий"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="placingAnOrder__pay">
          <div className="placingAnOrder__pay--text">3. Оплатить</div>
          <div>
            <button className="placingAnOrder__pay--card">Оплата онлайн</button>
            <button className="placingAnOrder__pay--cardK">
              Курьерукартой/
            </button>
            <button className="placingAnOrder__pay--cash">Наличныи</button>
          </div>
          <button className="placingAnOrder__pay--change"> Сдача с/</button>
        </div>
        <div className="placingAnOrder__whenDelivery">
          <div className="placingAnOrder__whenDelivery--text">
            4. Когда доставить
          </div>
          <div>
            <button className="placingAnOrder__whenDelivery--soon">
              В ближайшее время
            </button>
            <button className="placingAnOrder__whenDelivery--byTime">
              Ко времени
            </button>
            <button className="placingAnOrder__whenDelivery--indicate">
              Укажите время
            </button>
          </div>
          <button className="placingAnOrder__whenDelivery--people">
            кол-во персон
            <button className="placingAnOrder__whenDelivery--increment">
              {" "}
              -
            </button>
            <div> 1</div>
            <button className="placingAnOrder__whenDelivery--decrement">
              {" "}
              +
            </button>
          </button>
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
            <button className="placingAnOrder__footer--personBtn"></button>Я
            согласен на обработку моих перс. данных в соответствии
            <a href="">с Условиями</a>
          </div>
          <button className="placingAnOrder__footer--design">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacingAnOrder;
