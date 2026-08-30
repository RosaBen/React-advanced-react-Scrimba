import { useContext, cloneElement, Children } from "react";
import { ToggleContext } from "./Menu";
export default function MenuDropdown({ children, open, toggle }) {
  const value = useContext(ToggleContext);
  return (
    value && (
      <div className="menu-dropdown">
        {Children.map(children, (child) => {
          return cloneElement(child, {
            open,
            toggle,
          });
        })}
      </div>
    )
  );
}
