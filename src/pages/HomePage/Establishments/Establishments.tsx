import Rectangle from "../../../assets/Rectangle 314.png";

import "./Establishments.scss";

const Establishments = () => {
  return (
    <div className="Establishments">
      <div className="Establishments__container">
        <div className="Establishments__headings">
          <div className="Establishments__border">|</div>
          Топ заведений по отзывам
        </div>
        <div className="Establishments__wrapperImg">
          <img src={Rectangle} alt="" className="Establishments__Img" />
          <img src={Rectangle} alt="" className="Establishments__Img" />
          <img src={Rectangle} alt="" className="Establishments__Img" />
          <img src={Rectangle} alt="" className="Establishments__Img" />
        </div>
        <div className="Establishments__wrapperBtn">
          <button className="Establishments__btnMore">Показать больше</button>
        </div>
      </div>
    </div>
  );
};

export default Establishments;
