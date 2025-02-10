import Input from "../../components/input/input";
import "./AccountnIformation.scss";

const AccountnIformation = () => {
  return (
    <div className="AccountnIformation">
      <div className="AccountnIformation__form">
        <div className="AccountnIformation__input-wrapper">
          <div className="AccountnIformation__">1.Название организации</div>
          <Input className="AccountnIformation__input" />
        </div>
        <div className="AccountnIformation__input-wrapper">
          <div className="AccountnIformation__">2.Изменить логотип</div>
          <Input className="AccountnIformation__input" type="file" />
        </div>
        <div className="AccountnIformation__input-wrapper">
          <div className="AccountnIformation__">3.Телефон</div>
          <Input className="AccountnIformation__input" />
        </div>
        <div className="AccountnIformation__input-wrapper">
          <div className="AccountnIformation__">4.Email</div>
          <Input className="AccountnIformation__input" />
        </div>
        <div className="AccountnIformation__input-wrapper">
          <div className="AccountnIformation__">5.Адрес органзации</div>
          <Input className="AccountnIformation__input" />
        </div>
        <div className="AccountnIformation__input-wrapper">
          <div className="AccountnIformation__">6.Доп.информация</div>
          <Input className="AccountnIformation__input" />
        </div>
      </div>
    </div>
  );
};

export default AccountnIformation;
