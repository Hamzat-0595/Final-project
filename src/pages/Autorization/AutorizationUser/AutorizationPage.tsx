import { useState } from "react";
import "./AutorizationPage.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import { registerClient } from "../../../store/user/userAction";
import { Link, NavLink } from "react-router-dom";
import { RegisterRequest } from "../../../types/types";
import { getUserCredentials } from "./helpers";
import { Button } from "../../../components/Button/Button";

interface IAutorizationPage {
  type: "cafe" | "client";
}

const AutorizationPage = ({ type }: IAutorizationPage) => {
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState({} as RegisterRequest);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    dispatch(registerClient(userData));
  };

  return (
    <div className="AutorizationPage">
      <div className="AutorizationPage__container">
        <div className="AutorizationPage__wrapper">
          <NavLink className="AutorizationPage__link" to="/client/signup">
            Стать клиентом
          </NavLink>
          <NavLink className="AutorizationPage__link" to="/cafe/signup">
            Для ресторана
          </NavLink>
        </div>
        <div className="AutorizationPage__wrapper">
          <div className="AutorizationPage__haveAnAccount">
            Уже есть аккаунт?
          </div>
          <Link className="AutorizationPage__logIn" to="/signin">
            Войти
          </Link>
        </div>
        <div className="AutorizationPage__wrapperBottom">
          <div className="AutorizationPage__anAutorizations">
            {type === "cafe" ? "Стать партнером" : "Зарегистрироваться"}
          </div>
          {getUserCredentials(type).map(({ label, name, type = "text" }) => (
            <div className="AutorizationPage__nameWrapper">
              <div className="AutorizationPage__title">{label}</div>
              <input
                type={type}
                className="AutorizationPage__Input"
                name={name}
                value={userData[name]}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button
            className="AutorizationPage__registration"
            onClick={handleClick}
          >
            Регистрация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AutorizationPage;
