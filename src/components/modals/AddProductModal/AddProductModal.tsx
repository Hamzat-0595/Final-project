import { useState } from "react";
import { Button } from "../../Button/Button";
import Input from "../../input/input";
import "./AddProductModal.scss";
import { useFetchAllCategorysQuery, usePostProductMutation } from "../../../store/services/productService";
import { toast } from "react-toastify";

interface IAddProductModalProps {
  toggleModalActive: () => void;
}

const AddProductModal = ({ toggleModalActive }: IAddProductModalProps) => {
  const { data: categorys } = useFetchAllCategorysQuery("");
  const [postProduct] = usePostProductMutation()

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, ] = useState("");
  const [price, setPrice] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if(event.target.files){
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.info("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("info", productDescription);
    formData.append("categoryId", category);
    formData.append("price", price);
    formData.append("image", selectedFile);

    try {
      await postProduct(formData)
      toast.success('Продукт успешно добавлен')
      toggleModalActive();
    } catch(e) {
      toast.error(`Ошибка при добавлении продукта ${JSON.stringify(e)}`)
    }

  };

  return (
    <div className="AddProductModal">
      <div className="AddProductModal__header">
        Добавление блюда
        <Button className="AddProductModal__close" onClick={toggleModalActive}>
          x
        </Button>
      </div>
      <div className="AddProductModal__form">
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">1.Название блюда</div>
          <Input className="AddProductModal__input" onChange={e => setProductName(e.target.value)} />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">2.Выберите изображение</div>
          <Input
            className="AddProductModal__input"
            type="file"
            onChange={handleChange}
            accept="image/*,.png,.jpg,.web"
          />
        </div> 
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">3.Состав</div>
          <Input className="AddProductModal__input" onChange={e => setProductDescription(e.target.value)} />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">4.Цена</div>
          <Input className="AddProductModal__input" onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="AddProductModal__input-wrapper">
          <div className="AddProductModal__">5.Категория</div>
          <select className="AddProductModal__input AddProductModal__select">
            {categorys?.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={handleUpload} className="AddProductModal__add">
        Добавить
      </Button>
    </div>
  );
};

export default AddProductModal;
