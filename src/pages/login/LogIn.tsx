import "./LogIn.scss";

const LogIn = () => {
  return (
    <div className="Log_In">
      <div className="Log_In__Bloc">
        <div className="Log_In__Bloc-Action">
          <h1 className="Log_In__To">Войти</h1>
          <div className="Log_In__email">Электронная почта</div>
          <input className="Log_In__Login" />
          <div className="Log_In__Password-word">Пароль</div>
          <input className="Log_In__Password" />
          <button className="Log_In__Button">
            <div className="Log_In__Password-Button">Войти</div>
          </button>
          <div className="Log_In__No-account-register">
            <div className="Log_In__No-account">Нет аккаунта?</div>
            <div className="Log_In__register">Зарегистрироваться</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
