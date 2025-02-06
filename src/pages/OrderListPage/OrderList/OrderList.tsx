import OrderListItem from "../../../components/OrdersList/components/OrdersListItem/OrderListItem";
import "./OrderList.scss";

const OrderList = () => {
  return (
    <div className="OrderList">
      <div className="OrderList__orders">
        <div className="OrderList__stripe"></div>
        <div>Список заказов</div>
        <div className="OrderList__active-orders">
          (количество активных заказов: 1)
        </div>
      </div>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </div>
  );
};

export default OrderList;
