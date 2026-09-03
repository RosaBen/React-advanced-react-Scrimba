import { createContext, useState, cloneElement, Children, useId } from "react";

const ToggleContext = createContext();
export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  function toggle() {
    setOpen((prev) => !prev);
  }
  return (
    <ToggleContext.Provider value={{ open, toggle, menuId }}>
      <div className="menu" role="menu">
        {Children.map(children, (child) => {
          return cloneElement(child, {
            open,
            toggle,
          });
        })}
      </div>
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
