export interface IProduct {
  _id: string;
  name: string;
  image: string;
  info: string;
  categoryId: string;
  price: number;
  cafeId: string;
  __v: number;
}
export interface IFood {
  _id: string;
  categoryId: string;
  name: string;
  image: string;
  price: number;
  cafeId: string;
  __v: number;
  info: string;
  quantity: number; // Добавим количество товара
}

export interface ICategory {
  _id: string;
  name: string;
  __v: number;
}
export interface ICafe {
  _id: string;
  name: string;
  image: string;
  phone: number;
  city: number;
  address: string;
  mail: string;
  password: string;
  role: string;
  menu: [];
  __v: number;
}
