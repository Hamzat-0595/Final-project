import Rectangle from "../../assets/Rectangle 314.png";
import Bascet from "../../assets/Buy.png";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="ProductCard">
      <div className="ProductCard__containerPage">
        <div className="ProductCard__container">
          <div className="ProductCard__wrapper">
            <img src={Rectangle} alt="" className="ProductCard__Img" />
            <div className="ProductCard__wrapperBottom">
              <div className="ProductCard__wrapperName">
                <div className="ProductCard__foodName">Ягненок</div>
                <div className="ProductCard__foodWeight">Вес: 225 г</div>
              </div>
              <div className="ProductCard__wrapperInfo">
                Фаршированный гречневой кашей,
                <br /> курагой, апельсином и зеленым яблоком
              </div>
              <div className="ProductCard__wrapperOrdener">
                <div className="ProductCard__price">620 ₽</div>
                <button className="ProductCard__inBascet">
                  <div className="ProductCard__bascetText">В корзину</div>
                  <img className="ProductCard__bascet" src={Bascet} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
