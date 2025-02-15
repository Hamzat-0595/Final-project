import { Button } from "../../../components/Button/Button";
import CafeCard from "../../../components/CafeCard/CafeCard";
import { useFetchAllCafeQuery } from "../../../store/services/productService";
import "./TopEstablishments.scss";

const TopEstablishments = () => {
  const { data: cafes } = useFetchAllCafeQuery("");

  if (!cafes || cafes?.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="TopEstablishments">
        <div className="TopEstablishments__container">
          <div className="TopEstablishments__headings">
            <div className="TopEstablishments__border">|</div>
            Топ заведений по отзывам
          </div>
          <div className="TopEstablishments__wrapperImg">
            {cafes?.map((cafe) => (
              <CafeCard {...cafe} />
            ))}
          </div>
          <div className="TopEstablishments__wrapperBtn">
            <Button className="TopEstablishments__btnMore">
              Показать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopEstablishments;
