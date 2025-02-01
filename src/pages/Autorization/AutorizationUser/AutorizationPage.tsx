import { useState } from "react";
import "./AutorizationPage.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import { registerClient } from "../../../store/user/userAction";
import { Link } from "react-router-dom";

// "name": "unicode",
// "phone": "89009990099",
// "city":"Grozny",
// "address": "none",
// "mail": "none",
// "password": "unicode123"

const AutorizationPage = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    dispatch(registerClient({ name, phone, city, address, mail, password }));
  };

  return (
    <div className="AutorizationPage">
      <div className="AutorizationPage__container">
        <div className="AutorizationPage__wrapper">
          <button className="AutorizationPage__customer">Стать клиентом</button>
          <button className="AutorizationPage__partner">Для ресторана</button>
        </div>
        <div className="AutorizationPage__wrapper">
          <button className="AutorizationPage__haveAnAccount">
            Уже есть аккаунт?
          </button>
          <button className="AutorizationPage__logIn">
            <Link to="/signin">Войти</Link>
          </button>
        </div>
        <div className="AutorizationPage__wrapperBottom">
          <div className="AutorizationPage__anAutorizations">
            Зарегистрироваться
          </div>
          <div className="AutorizationPage__nameWrapper">
            <div className="AutorizationPage__title">Имя</div>
            <input
              type="text"
              className="AutorizationPage__Input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="AutorizationPage__numberPhoneWrapper">
            <div className="AutorizationPage__title">Номер телефона</div>
            <input
              type="text"
              className="AutorizationPage__Input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="AutorizationPage__citiWrapper">
            <div className="AutorizationPage__title">Город</div>
            <input
              type="text"
              className="AutorizationPage__Input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="AutorizationPage__addressWrapper">
            <div className="AutorizationPage__title">Адрес</div>
            <input
              type="text"
              className="AutorizationPage__Input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="AutorizationPage__emailWrapper">
            <div className="AutorizationPage__title">Электронная почта</div>
            <input
              type="text"
              className="AutorizationPage__Input"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="AutorizationPage__passwordWrapper">
            <div className="AutorizationPage__title">Пароль</div>
            <input
              type="password"
              className="AutorizationPage__Input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="AutorizationPage__registration"
            onClick={handleClick}
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutorizationPage;
