import {
  DeliveryTypes,
  PayTypes,
} from "../pages/PlacingAnOrder/PlacingAnOrder";

export type User = {
  _id: string;
  name: string;
  image: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
  role?: string;
  menu?: Food[];
  __v: number;
};

export type UserState = {
  user: User;
  error: string;
  token: string;
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

export enum RegisterRequestCredentials {
  name = "name",
  phone = "phone",
  city = "city",
  address = "address",
  mail = "mail",
  password = "password",
}
export interface OrderForm {
  name: string;
  phone: string;
  deliveryType: DeliveryTypes;
  restaurant?: string; // Опциональное поле, если выбран самовывоз
  street?: string;
  houseNumber?: string;
  flatNumber?: string;
  entrance?: string;
  floor?: string;
  comment?: string;
  payType: PayTypes;
  deliveryTime: DeliveryTypes;
  specifiedTime?: string; // Опциональное поле, если выбрано "Ко времени"
  personCount: number;
  callback: "no" | "yes"; // Поле для обратного звонка
  isAgreed: boolean;
}

export type RegisterRequest = {
  [RegisterRequestCredentials.name]: string;
  [RegisterRequestCredentials.phone]: string;
  [RegisterRequestCredentials.city]: string;
  [RegisterRequestCredentials.address]: string;
  [RegisterRequestCredentials.mail]: string;
  [RegisterRequestCredentials.password]: string;
};

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
  info: string;
}
export interface CartState {
  items: CartItem[];
}
