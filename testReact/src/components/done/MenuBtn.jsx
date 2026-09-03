import Button from "./Button";
import { useContext } from "react";
import { ToggleContext } from "./Menu";

export default function MenuBtn({ children }) {
  // const allClasses = clsx(sizeClass, variantClass, className);
  const { toggle, open, menuId } = useContext(ToggleContext);
  return (
    <Button
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  );
}
