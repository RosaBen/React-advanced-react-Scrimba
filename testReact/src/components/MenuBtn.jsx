import Button from "./Button";
import { useContext } from "react";
import { ToggleContext } from "./Menu";

export default function MenuBtn({ children }) {
  // const allClasses = clsx(sizeClass, variantClass, className);
  const { toggle } = useContext(ToggleContext);
  return <Button onClick={toggle}>{children}</Button>;
}
