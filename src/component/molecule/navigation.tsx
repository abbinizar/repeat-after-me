import ButtonIcon from "../atom/button-icon";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface INavigation {
  onClickLeft: () => void;
  onClickRight: () => void;
}

const Navigation = (props: INavigation) => {
  return (
    <div className="flex items-center space-x-4">
      <ButtonIcon onClick={props.onClickLeft}>
        <FiChevronLeft className="text-2xl" />
      </ButtonIcon>
      <ButtonIcon onClick={props.onClickRight}>
        <FiChevronRight className="text-2xl" />
      </ButtonIcon>
    </div>
  );
};

export default Navigation;
