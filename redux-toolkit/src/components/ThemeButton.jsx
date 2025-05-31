import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice";

function ThemeButton() {
  const currTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  console.log(currTheme);
  return (
    <>
      <button onClick={() => dispatch(changeTheme())}>Theme</button>
    </>
  );
}

export default ThemeButton;
