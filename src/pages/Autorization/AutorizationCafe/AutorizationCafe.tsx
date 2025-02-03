import "./AutorizationCafe.scss";

const AutorizationCafe = () => {
  return (
    <div className="AutorizationCafe">
      <div className="AutorizationCafe__container">
        <div className="AutorizationCafe__wrapper">
          <button className="AutorizationCafe__customer">Стать клиентом</button>
          <button className="AutorizationCafe__partner">Для ресторана</button>
        </div>
        <div className="AutorizationCafe__wrapper">
          <button className="AutorizationCafe__haveAnAccount">
            Уже есть аккаунт?
          </button>
          <button className="AutorizationCafe__logIn">Войти</button>
        </div>
        <div className="AutorizationCafe__wrapperBottom">
          <div className="AutorizationCafe__anAutorizations">
            СТАТЬ ПАРТНЕРОМ
          </div>
          <div className="AutorizationCafe__nameWrapper">
            <div className="AutorizationCafe__title">Название ресторана</div>
            <input type="text" className="AutorizationCafe__Input" />
          </div>
          <div className="AutorizationCafe__numberPhoneWrapper">
            <div className="AutorizationCafe__title">Номер телефона</div>
            <input type="text" className="AutorizationCafe__Input" />
          </div>
          <div className="AutorizationCafe__citiWrapper">
            <div className="AutorizationCafe__title">Город</div>
            <input type="text" className="AutorizationCafe__Input" />
          </div>
          <div className="AutorizationCafe__addressWrapper">
            <div className="AutorizationCafe__title">Адрес</div>
            <input type="text" className="AutorizationCafe__Input" />
          </div>
          <div className="AutorizationCafe__emailWrapper">
            <div className="AutorizationCafe__title">Электронная почта</div>
            <input type="text" className="AutorizationCafe__Input" />
          </div>
          <div className="AutorizationCafe__passwordWrapper">
            <div className="AutorizationCafe__title">Пароль</div>
            <input type="text" className="AutorizationCafe__Input" />
          </div>
          <button className="AutorizationCafe__registration">
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutorizationCafe;
