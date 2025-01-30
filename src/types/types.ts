export type User = {
  _id: string;
  name: string;
  image: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
  role: string;
  menu: Food[];
  __v: number;
};

export type UserState = {
  user: User;
  error: string;
  isAuth: boolean;
  isLoading: boolean;
};

export type Food = {
  _id: string;
  name: string;
  image: string;
  info: string;
  categoryId: string;
  price: number;
  cafeId: string;
  __v: number;
};

export type RegisterRequest = {
  name: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
};
