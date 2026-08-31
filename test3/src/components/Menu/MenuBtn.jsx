import Button from "../Button/Button";
import { useContext } from "react";
import { ToggleContext } from "../Toggle/Toggle";

export default function MenuBtn({ children }) {
  // const allClasses = clsx(sizeClass, variantClass, className);
  // const { on } = useContext(ToggleContext);
  return (
    <Button
    // onClick={toggle}
    // aria-expanded={on}
    // aria-haspopup="true"
    // aria-controls={menuId}
    >
      {children}
    </Button>
  );
}
