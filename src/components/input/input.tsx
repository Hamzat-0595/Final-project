import "./Input.scss";

export enum InputVariants {
  dark = "dark",
  light = "light",
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: InputVariants;
}

const Input: React.FC<InputProps> = ({
  className = "",
  variant = InputVariants.dark,
  ...rest
}) => {
  return <input className={`Input ${variant} ${className}`} {...rest} />;
};

export default Input;
