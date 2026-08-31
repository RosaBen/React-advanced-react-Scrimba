import { useContext } from "react";
import { ToggleContext } from "../../../../test3/src/components/Toggle";
export default function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  return <>{on ? children : null}</>;
}
