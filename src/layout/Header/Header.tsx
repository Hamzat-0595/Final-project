import "./Heder.scss";
import search from "../../assets/Search.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Name__input">
        <div className="Header-Name">LOGOS</div>
        <div className="Header-input__img">
          <img className="Header-search" src={search} />
          <input className="Header-input" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="Header-Action">
        <div className="Header-">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="Header-">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
