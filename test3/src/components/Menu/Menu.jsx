import { Toggle } from "../../assets/scripts/index";

export default function Menu({ children }) {
  return (
    <Toggle>
      <div className="menu">{children}</div>
    </Toggle>
  );
}
