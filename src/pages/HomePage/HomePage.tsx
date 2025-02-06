import "./HomePage.scss";

import Establishments from "./Establishments/Establishments";
import { useFetchAllCategorysQuery } from "../../store/services/productService";
import Category from "./Category/Category";

const HomePage = () => {
  const { data: categorys } = useFetchAllCategorysQuery("");
  console.log({
    categorys,
  });

  return (
    <div className="HomePage">
      <Establishments />
      {categorys?.map((category) => (
        <Category {...category} />
      ))}
    </div>
  );
};

export default HomePage;
