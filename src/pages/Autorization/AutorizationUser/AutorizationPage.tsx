import "./AutorizationPage.scss";

const AutorizationPage = () => {
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
          <button className="AutorizationPage__logIn">Войти</button>
        </div>
        <div className="AutorizationPage__wrapperBottom">
          <div className="AutorizationPage__anAutorizations">
            Зарегистрироваться
          </div>
          <div className="AutorizationPage__nameWrapper">
            <div className="AutorizationPage__title">Имя</div>
            <input type="text" className="AutorizationPage__Input" />
          </div>
          <div className="AutorizationPage__numberPhoneWrapper">
            <div className="AutorizationPage__title">Номер телефона</div>
            <input type="text" className="AutorizationPage__Input" />
          </div>
          <div className="AutorizationPage__citiWrapper">
            <div className="AutorizationPage__title">Город</div>
            <input type="text" className="AutorizationPage__Input" />
          </div>
          <div className="AutorizationPage__addressWrapper">
            <div className="AutorizationPage__title">Адрес</div>
            <input type="text" className="AutorizationPage__Input" />
          </div>
          <div className="AutorizationPage__emailWrapper">
            <div className="AutorizationPage__title">Электронная почта</div>
            <input type="text" className="AutorizationPage__Input" />
          </div>
          <div className="AutorizationPage__passwordWrapper">
            <div className="AutorizationPage__title">Пароль</div>
            <input type="text" className="AutorizationPage__Input" />
          </div>
          <button className="AutorizationPage__registration">
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutorizationPage;
