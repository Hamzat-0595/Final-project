import Bascet from "../../assets/Buy.png";
import "./ProductCard.scss";
import { IProduct } from "../../models/IProduct";
import { Button } from "../Button/Button";

const ProductCard = ({ name, image, price, info }: IProduct) => {
  return (
    <div className="ProductCard">
      <div className="ProductCard__containerPage">
        <div className="ProductCard__container">
          <div className="ProductCard__wrapper">
            <img src={image} alt="" className="ProductCard__Img" />
            <div className="ProductCard__wrapperBottom">
              <div className="ProductCard__wrapperName">
                <div className="ProductCard__foodName">
                  {name.substring(0, 30)}
                </div>
                <div className="ProductCard__foodWeight">Вес: {222} г</div>
              </div>
              <div className="ProductCard__wrapperInfo">
                {info.substring(0, 100) + "..."}
              </div>
              <div className="ProductCard__wrapperOrdener">
                <div className="ProductCard__price">{price} ₽</div>
                <Button className="ProductCard__inBascet">
                  <div className="ProductCard__bascetText">В корзину</div>
                  <img className="ProductCard__bascet" src={Bascet} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
