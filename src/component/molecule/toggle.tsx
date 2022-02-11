import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="">
      {theme === "dark" ? (
        <BsSunFill
          className="text-white text-xl"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          light
        </BsSunFill>
      ) : (
        <BsMoonFill
          className="text-dark-300 text-xl"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          dark
        </BsMoonFill>
      )}
    </div>
  );
};
export default Toggle;
