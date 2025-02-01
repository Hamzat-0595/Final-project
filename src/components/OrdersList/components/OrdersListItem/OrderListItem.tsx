import React from "react";

const OrderListItem = () => {
  return (
    <div className="OrderListItem">
      <div className="Order__Bloc">
        <div className="Order__People">Заказ №</div>
        <div className="Order__Number">65e60364</div>
      </div>
      <div className="Order__Time">Получен в 12:35 (2 часа назад)</div>
      <div className="Order__Status">Статус:</div>
      <div className="Order__Adopted">принят курьером</div>
      <div className="Order__Prise">777 ₽</div>
      <button className=""><div className="">x</div></button>
    </div>
  );
};

export default OrderListItem;
