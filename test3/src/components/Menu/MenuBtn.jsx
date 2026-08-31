import Button from "../Button/Button";
import { useContext } from "react";
import { ToggleContext } from "../Toggle/Toggle";
import { Toggle } from "../../assets/scripts/index";

export default function MenuBtn({ children }) {
  // const allClasses = clsx(sizeClass, variantClass, className);
  // const { on } = useContext(ToggleContext);
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  );
}
