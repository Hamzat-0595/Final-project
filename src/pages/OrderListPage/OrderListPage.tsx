import OrderList from './OrderList/OrderList';
import'./OrderListPage.scss'
import UserInfo from './UserInfo/UserInfo';

const OrderListPage = () => {
  return (
    <div className="OrderListPage">
      <OrderList/>
      <UserInfo/>
    </div>
  );
};

export default OrderListPage;
