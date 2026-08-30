import { useContext, cloneElement, Children } from "react";
import { ToggleContext } from "./Menu";
export default function MenuDropdown({ children }) {
  const { open } = useContext(ToggleContext);
  return (
    open && (
      <div className="menu-dropdown">
        {Children.map(children, (child) => {
          return cloneElement(child, {
            open,
          });
        })}
      </div>
    )
  );
}
