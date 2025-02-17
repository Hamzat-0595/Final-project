import { Button, ButtonVariables } from "../../components/Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <Button className="Navbar__coldSnacks" variant={ButtonVariables.text}>
          Холодные закуски
        </Button>
        <Button className="Navbar__hotSnacks" variant={ButtonVariables.text}>
          Горячие закуски
        </Button>
        <Button className="Navbar__meat" variant={ButtonVariables.text}>
          Мясные блюда
        </Button>
        <Button className="Navbar__soups" variant={ButtonVariables.text}>
          Супы
        </Button>
        <Button className="Navbar__fishDishes" variant={ButtonVariables.text}>
          Рыбные блюда
        </Button>
        <Button className="Navbar__grillMenu" variant={ButtonVariables.text}>
          Гриль меню
        </Button>
        <Button className="Navbar__branded" variant={ButtonVariables.text}>
          Фирменное
        </Button>
      </div>
      <Button className="Navbar__basket">
        <div className="Navbar__clear">Корзина</div>
        <div className="Navbar__counter-devider" />
        <div className="Navbar__Counter-bloc"></div>
        <div className="Navbar__counter">5</div>
      </Button>
    </div>
  );
};

export default Navbar;
