import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Button() {
  const stateObject = useContext(ThemeContext);
  const value = stateObject.theme;
  return (
    <button
      className={`${value}-theme`}
      onClick={() => stateObject.toggleTheme()}
    >
      Switch Theme
    </button>
  );
}
