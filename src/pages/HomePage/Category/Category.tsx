import ProductCard from "../../../components/ProductCard/ProductCard";
import { ICategory } from "../../../models/IProduct";
import { useFetchAllProductsQuery } from "../../../store/services/productService";
import "./Category.scss";

const Category = ({ name, _id }: ICategory) => {
  const { data: products } = useFetchAllProductsQuery(_id);

  if (!products || products?.length === 0) {
    return null;
  }

  return (
    <div className="Category">
      <div className="Category__establishments">
        <div className="Category__border">|</div>
        {name}
      </div>
      <div className="Category__wrapper">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
