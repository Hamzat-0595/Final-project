import "./HomePage.scss";

import Establishments from "./Establishments/Establishments";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import {
  useFetchAllCategorysQuery
} from "../../store/services/productService";
import Category from "./Category/Category";

const HomePage = () => {
  const { data: categorys } = useFetchAllCategorysQuery("");
  console.log({
    categorys,
  });


  // const [isVisible, setIsVisible] = useState(false);

  // const handleToggle = () => {
  //   setIsVisible((prevState) => !prevState);
  // };

  return (
    <div className="HomePage">
      <Header />
      {/* {products.map(product =>
        <OrderWindow product={product}/>
      )} */}

      <Establishments />
      {categorys?.map((category) => (
        <Category {...category} />
      ))}
      {/* {isVisible && <ShowMore />}
      <div className="HomePage__Wrapper">
        <button className="HomePage__ShowMore" onClick={handleToggle}>
          {isVisible ? "Скрыть" : "Показать больше категорий"}
        </button>
      </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
