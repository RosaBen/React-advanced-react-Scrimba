import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const stateObject = useContext(ThemeContext);
  const value = stateObject.theme;
  return (
    <header className={`${value}-theme`}>
      <h1>{value === "light" ? "Light" : "Dark"} Theme</h1>
    </header>
  );
}
