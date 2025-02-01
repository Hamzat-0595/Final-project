import OrderListItem from "../../../components/OrdersList/components/OrdersListItem/OrderListItem";
import "./OrderList.scss";

const OrderList = () => {
  return (
    <div>
      <div className="Order__List">
        <div className="Order__List__of-orders">
          <div className="Order__List-stripe"></div>
          <div className="Order__List-orders">Список заказов</div>
          <div className="Order__active-orders">
            (количество активных заказов: 1)
          </div>
        </div>
        <div className=""><OrderListItem/></div>
      </div>
    </div>
  );
};

export default OrderList;
