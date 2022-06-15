import s from './button.module.scss';

interface ButtonProps {
  children: any;
  className?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, disabled, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${s.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
