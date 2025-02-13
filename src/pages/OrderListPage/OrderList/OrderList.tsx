import OrderListItem from "../../../components/OrdersList/components/OrdersListItem/OrderListItem";
import "./OrderList.scss";
import { useFetchOrdersQuery } from "../../../store/services/productService";

const OrderList = () => {
  const { data: orders, isLoading, error } = useFetchOrdersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const activeOrdersCOunt = orders?.filter(
    (order) => order.status === "active"
  ).length;

  return (
    <div className="OrderList">
      <div className="OrderList__orders">
        <div className="OrderList__stripe"></div>
        <div>Список заказов</div>
        <div className="OrderList__active-orders">
          (количество активных заказов: {activeOrdersCOunt})
        </div>
      </div>
      {orders?.map((order) => (
        <OrderListItem key={order._id} {...order} />
      ))}
    </div>
  );
};

export default OrderList;
