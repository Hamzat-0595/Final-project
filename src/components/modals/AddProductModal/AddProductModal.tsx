import React from 'react'
import Input from '../../input/input';

interface IAddProductModalProps{
  toggleModalActive:()=>void;
}


const AddProductModal = ({toggleModalActive }:IAddProductModalProps) => {


  return (
    <div className='AddProductModal'>
     <div className='AddProductModal__food-name'><Input  /></div>
     <div className='AddProductModal__'><Input /></div>
     <div className='AddProductModal__'><Input/></div>
     <div className='AddProductModal__'><Input/></div>
     <div className='AddProductModal__'><Input/></div>
     <div className='AddProductModal__'><Input/></div>
     
    </div>
  )
}

export default AddProductModal
