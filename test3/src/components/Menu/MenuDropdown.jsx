import { useContext, cloneElement, Children } from "react";
import { ToggleContext } from "../Toggle/Toggle";
export default function MenuDropdown({ children }) {
  // const { on } = useContext(ToggleContext);
  return (
    // <div className="menu-dropdown" aria-hidden={!on} id={menuId}>
    <div className="menu-dropdown">{children}</div>
  );
}
