import { useContext, cloneElement, Children } from "react";
import { ToggleContext } from "../Toggle/Menu";
export default function MenuDropdown({ children }) {
  const { open, menuId } = useContext(ToggleContext);
  return (
    open && (
      <div className="menu-dropdown" aria-hidden={!open} id={menuId}>
        {Children.map(children, (child) => {
          return cloneElement(child, {
            open,
          });
        })}
      </div>
    )
  );
}
