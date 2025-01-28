import "./Footer.scss";
import btnTop from "../../../assets/btnTop.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <button className="footer__btnTop">
          <img src={btnTop} alt="" />
        </button>
      </div>
      <div className="footer__info">
        <h2>LOGOS</h2>
        <h6>
          © ООО СК «АПШЕРОН»
          <br /> Все права защищены. 2010-2020
        </h6>
        <h6>Пользовательское соглашение</h6>
        <h6>Карта сайта</h6>
        <h6>Политика конфиденциальности</h6>
      </div>
      <div className="footer__btn">
        <div>О ресторане</div>
        <div>Условия доставки</div>
        <div>Возврат товара</div>
        <div>Акции</div>
      </div>
    </div>
  );
};

export default Footer;
