import "./Heder.scss";
import search from "../../assets/Search.png";
import cool from "../../assets/Calling.png";
import img from "../../assets/Profile.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {  useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../store/user/logaut";
import { Button, ButtonTypes, ButtonVariables } from "../../components/Button/Button";
const Header = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate(); // Используем хук useNavigate
  const dispatch = useAppDispatch();

  const handleBasketClick = () => {
    navigate("/BasketPage"); // Переход на страницу корзины
  };


  const logoutClick = async () => {
    await dispatch(logout());
    navigate("/signin");
  };

  return (
    <div className="Header">
      <div className="Header__Name-input">
        <Button buttonType={ButtonTypes.link} variant={ButtonVariables.text} to={'/'} className='Header__Name'>LOGOS</Button>
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
          <div className="Header__Log_in-devider" />
          <button className="Header__Log-in" onClick={logoutClick}>
            Выйти
          </button>
          <button className="Header__basket" onClick={handleBasketClick}>
            <div className="Header__clear">Корзина</div>
            <div className="Header__counter-devider" />
            <div className="Header__Counter-bloc"></div>
            <div className="Header__counter">{cartQuantity}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
