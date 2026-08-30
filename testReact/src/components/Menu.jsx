import React, { createContext, useState, cloneElement, Children } from "react";

const ToggleContext = createContext();
export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((prev) => !prev);
  }
  return (
    <ToggleContext.Provider value={open}>
      <div className="menu">
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
