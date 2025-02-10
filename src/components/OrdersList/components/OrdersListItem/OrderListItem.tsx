import { Button } from "../../../Button/Button";
import "./OrderListItem.scss";

const OrderListItem = () => {
  return (
    <div className="Orders">
      <div className="Orders__Bloc">
        <div className="Orders__People">Заказ №</div>
        <div className="Orders__Number">65e60364</div>
      </div>
      <div className="Orders__Time">Получен в 12:35 (2 часа назад)</div>
      <div className="Orders__Status">
        Статус: <span className="Orders__Adopted">принят курьером</span>
      </div>
      <div className="Orders__Prise">777 ₽</div>
      <Button className="Orders__Button">
        <div className="Orders__X">x</div>
      </Button>
    </div>
  );
};

export default OrderListItem;
