import Toggle from "../molecule/toggle";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="w-full space-x-2 flex">
        <h1 className="sm:text-3xl text-xl font-bold underline decoration-indigo-500 decoration-4 dark:text-white text-dark-200">
          Repeat
        </h1>
        <h1 className="sm:text-3xl text-xl font-bold dark:text-white text-dark-200">
          After
        </h1>
        <h1 className="sm:text-3xl text-xl font-bold underline decoration-pink-500 decoration-4 dark:text-white text-dark-200">
          Me.
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <Toggle />
        <AiFillGithub className="text-2xl text-dark-300" />
      </div>
    </div>
  );
};
export default Header;
