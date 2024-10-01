type ButtonProps = {
    name: string;
  onClick: () => void;
};

function Button({ name, onClick }: ButtonProps) {
  return (
    <button className="button button-ads" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;