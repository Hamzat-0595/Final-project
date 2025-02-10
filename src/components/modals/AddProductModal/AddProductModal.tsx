import { Button } from "../../Button/Button";
import Input from "../../input/input";
import "./AddProductModal.scss";

// interface IAddProductModalProps {
//   toggleModalActive: () => void;
// }

const AddProductModal =
  (/* { toggleModalActive }: IAddProductModalProps */) => {
    return (
      <div className="AddProductModal">
        <div className="AddProductModal__header">
          Добавление блюда
          <Button className="AddProductModal__close">x</Button>
        </div>
        <div className="AddProductModal__form">
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">1.Название блюда</div>
          <Input className="AddProductModal__input" />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">2.Выберите изображение</div>
          <Input className="AddProductModal__input" type="file" />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">3.Состав</div>
          <Input  className="AddProductModal__input" />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">4.Цена</div>
          <Input className="AddProductModal__input" />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">5.Категория</div>
          <select className="AddProductModal__input AddProductModal__select">Пиццы tgerge</select>
        </div>
        </div>
        <Button className="AddProductModal__add">Добавить</Button>
      </div>
    );
  };

export default AddProductModal;
