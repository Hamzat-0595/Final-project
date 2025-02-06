import { RegisterRequestCredentials } from "../../../types/types";

export const getUserCredentials = (
  type: string
): {
  name: RegisterRequestCredentials;
  label: string;
  type?: string;
}[] => [
  {
    name: RegisterRequestCredentials.name,
    label: type === "cafe" ? "Название ресторана" : "Имя",
  },
  { name: RegisterRequestCredentials.phone, label: "Номер телефона" },
  { name: RegisterRequestCredentials.city, label: "Город" },
  { name: RegisterRequestCredentials.address, label: "Адрес" },
  { name: RegisterRequestCredentials.mail, label: " Электронная почта" },
  {
    name: RegisterRequestCredentials.password,
    label: "Пароль",
    type: "password",
  },
];
