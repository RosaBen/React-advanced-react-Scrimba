import { useContext, cloneElement, Children } from "react";
import { ToggleContext } from "../Toggle/Toggle";
import { Toggle } from "../../assets/scripts/index";
export default function MenuDropdown({ children }) {
  return (
    <Toggle.On>
      <div className="menu-dropdown">{children}</div>;
    </Toggle.On>
  );
}
