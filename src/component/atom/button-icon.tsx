interface IButtonIcon {
  children: JSX.Element;
  onClick: () => void;
  className?: string;
}
const ButtonIcon = (props: IButtonIcon) => {
  return (
    <button
      onClick={props.onClick}
      className={`rounded-full bg-white shadow-lg h-10 w-10 flex items-center justify-center ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
