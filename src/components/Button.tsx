type ButtonProps = {
  inverted?: boolean;
  alt?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  noScale?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  inverted = false,
  alt = false,
  children,
  className = "",
  disabled = false,
  noScale = false,
  ...props
}) => {
  const baseStyles = `rounded-2xl px-5 py-3 flex gap-3 font-medium justify-center items-center w-fit transition-transform duration-300 ease-in-out ${
    !noScale ? "hover:scale-105" : ""
  }`;

  const normalStyles = "bg-highlight-dark text-black";
  const altStyles = "bg-highlighted text-black";
  const invertedStyles = "bg-transparent border border-highlight-dark text-highlight-dark";
  const disabledStyles = "bg-gray ring ring-red ring-1 box-border text-grey";

  const buttonStyles = `${baseStyles} ${
    alt ? altStyles : disabled ? disabledStyles : inverted ? invertedStyles : normalStyles
  } ${className}`;

  return (
    <button className={buttonStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;