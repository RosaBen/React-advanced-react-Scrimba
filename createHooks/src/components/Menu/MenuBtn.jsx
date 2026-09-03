import { useContext } from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

export default function MenuBtn({ children }) {
  const { toggleOpen } = useContext(MenuContext);
  return <Button onClick={() => toggleOpen()}>{children}</Button>;
}
