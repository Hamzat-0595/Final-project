import { useState } from "react";
import "./LogIn.scss";
import { authUser } from "../../../store/user/userAction";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(authUser({ mail, password }));
    navigate("/");
  };

  return (
    <div className="Log_In">
      <div className="Log_In__Bloc">
        <div className="Log_In__Bloc-Action">
          <h1 className="Log_In__To">Войти</h1>
          <div className="Log_In__email">Электронная почта</div>
          <input
            className="Log_In__Login"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <div className="Log_In__Password-word">Пароль</div>
          <input
            type="password"
            className="Log_In__Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Log_In__Button" onClick={handleClick}>
            <div className="Log_In__Password-Button">Войти</div>
          </button>
          <div className="Log_In__No-account-register">
            <button className="Log_In__No-account">Нет аккаунта?</button>
            <button className="Log_In__register">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
