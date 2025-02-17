import "./HomePage.scss";

import { useFetchAllCategorysQuery } from "../../store/services/productService";
import Category from "./Category/Category";
import TopEstablishments from "./TopEstablishments/TopEstablishments";

const HomePage = () => {
  const { data: categorys } = useFetchAllCategorysQuery("");

  return (
    <div className="HomePage">
      <TopEstablishments />
      {categorys?.map((category) => (
        <Category {...category} />
      ))}
    </div>
  );
};

export default HomePage;
