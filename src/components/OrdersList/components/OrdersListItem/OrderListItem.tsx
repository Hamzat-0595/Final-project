import { Button } from "../../../Button/Button";
import "./OrderListItem.scss";
import { Orders } from "../../../../types/types";

const OrderListItem = ({ _id, total }: Orders) => {
  return (
    <div className="Orders">
      <div className="Orders__Bloc">
        <div className="Orders__People">Заказ №</div>
        <div className="Orders__Number">{_id}</div>
      </div>
      <div className="Orders__Time">Получен в 14:00 (2 часа назад)</div>
      <div className="Orders__Status">
        Статус: <span className="Orders__Adopted">в работе</span>
      </div>
      <div className="Orders__Prise">{total} ₽</div>
      <Button className="Orders__Button">
        <div className="Orders__X">x</div>
      </Button>
    </div>
  );
};

export default OrderListItem;
