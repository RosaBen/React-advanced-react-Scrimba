import { createContext } from "react";
import useToggle from "../../hooks/useToggle";

const MenuContext = createContext();
export default function Menu({ children }) {
  const [open, toggleOpen] = useToggle();
  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
