import { useContext } from "react";
import { ChangeThemeContext } from "../../context/ChangeThemeContext";

export default function Navbar() {
  const { theme, changeTheme } = useContext(ChangeThemeContext);

  const handleOnClick = () => {
    changeTheme();
  };
  return (
    <>
      <div className="bg-blue-300 h-10 text-white flex items-center">
        <button className="bg-black p-1 m-1 rounded-xl" onClick={handleOnClick}>
          {theme}
        </button>
      </div>
    </>
  );
}
