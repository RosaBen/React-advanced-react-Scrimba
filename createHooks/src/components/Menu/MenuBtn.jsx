import Button from "../Button/Button";
import { Toggle } from "../../assets/scripts/index";

export default function MenuBtn({ children }) {
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  );
}
