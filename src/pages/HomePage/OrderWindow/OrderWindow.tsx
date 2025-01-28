import ProductCard from "../../../components/ProductCard/ProductCard";
import "./OrderWindow.scss";

interface IOrderWindow {
  title: string;
}

const OrderWindow = ({ title }: IOrderWindow) => {
  return (
    <div className="OrderWindow">
      <div className="OrderWindow__establishments">
        <div className="OrderWindow__border">|</div>
        {title}
      </div>
      <div className="OrderWindow__wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default OrderWindow;
