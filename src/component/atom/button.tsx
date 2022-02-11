interface IButton {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = (props: IButton) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${
        props.disabled ? "bg-dark-300" : "bg-indigo-500 hover:opacity-80"
      } h-10 px-4 text-white  rounded-lg text-sm font-bold `}
    >
      {props.label}
    </button>
  );
};

export default Button;
