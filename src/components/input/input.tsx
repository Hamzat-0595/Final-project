import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = "", ...rest }) => {
  return <input className={`Input ${className}`} {...rest} />;
};

export default Input;
