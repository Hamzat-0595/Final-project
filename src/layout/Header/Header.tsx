import "./Heder.scss";
import search from "../../assets/Search.png";
import cool from "../../assets/Calling.png";
import img from "../../assets/Profile.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Name-input">
        <div className="Header__Name">LOGOS</div>
        <div className="Header__input-img">
          <input className="Header__input" type="text" placeholder="Search" />
          <img className="Header__search" src={search} />
        </div>
      </div>
      <div className="Header__Action">
        <div className="Header__Contact-info">
          <div className="Header__Container-img">
            <img className="Header__Action-img" src={cool} />
          </div>
          <div className="Heder__Action-Contact">
            <div className="Header__Contact">Контакты:</div>
            <a className="Header__Number">+7 (917) 510-57-59</a>
          </div>
          <img className="Header__Person-img" src={img} />
        </div>
        <div className="Header__Log_in-Basket">
          <div className="Header__Log_in-devider"/>
          <div className="Header__Log-in">Войти</div>
          <button className="Header__basket">
            <div className="Header__clear">Корзина</div>
            <div className="Header__counter-devider"/>
            <div className="Header__Counter-bloc"></div>
            <div className="Header__counter">4</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
