import { useState } from 'react';
import './MenuPage.scss'
import AddProductModal from '../../components/modals/AddProductModal/AddProductModal';
import { Button } from '../../components/Button/Button';

const MenuPage = () => {

  const [modalActive, setModalActive] = useState(false);

  const toggleModalActive = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <div>
    <div className='MenuPage'>
      <Button className='MenuPage__Button' onClick={toggleModalActive}>Добавить карточку еды</Button>
    </div>
      {modalActive && <AddProductModal toggleModalActive={toggleModalActive} />}
    
    </div>
  )
}

export default MenuPage
