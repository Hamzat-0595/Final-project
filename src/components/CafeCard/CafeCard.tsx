import "./CafeCard.scss";
import { ICafe } from "../../models/IProduct";
import defaultImage from "../../assets/defaultImage.jpg";

interface CafeCardProps extends ICafe {
  onAddToCart?: (cafeId: number) => void; // Дополнительное свойство
  isOnSale?: boolean; // Дополнительное свойст
}

const CafeCard = ({ image }: CafeCardProps) => {
  const imageUrl = image || defaultImage;
  return (
    <div className="CafeCard">
      <div className="CafeCard__containerPage">
        <div className="CafeCard__container">
          <div className="CafeCard__wrapper">
            <img src={imageUrl} alt="Cafe" className="CafeCard__Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeCard;
