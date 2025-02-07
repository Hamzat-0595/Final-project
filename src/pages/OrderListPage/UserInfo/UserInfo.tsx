import "./UserInfo.scss";
import img from "../../../assets/Rectangle 314.png";
import {
  Button,
  ButtonTypes,
  ButtonVariables,
} from "../../../components/Button/Button";

const UserInfo = () => {
  return (
    <div>
      <div className="User">
        <img className="User__img" src={img} />
        <div className="User__Button-Name">Кофетун</div>
        <Button
          buttonType={ButtonTypes.link}
          activeVariant={ButtonVariables.text}
          to={"/account/orders"}
          className="User__Button"
        >
          Заказы
        </Button>
        <Button
          buttonType={ButtonTypes.link}
          activeVariant={ButtonVariables.text}
          to={"/account/menu"}
          className="User__Button"
        >
          Меню
        </Button>
        <Button
          buttonType={ButtonTypes.link}
          activeVariant={ButtonVariables.text}
          to={"/account/information"}
          className="User__Button"
        >
          Информация о расторане
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
