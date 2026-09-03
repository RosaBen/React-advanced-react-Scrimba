import { BsStar, BsStarFill } from "react-icons/bs";
import { Toggle } from "../assets/scripts/index.js";
export default function Star({ onChange }) {
  return (
    <Toggle onToggle={onChange}>
      <Toggle.Button>
        <Toggle.On>
          <BsStarFill className="star filled" />
        </Toggle.On>
        <Toggle.Off>
          <BsStar className="star" />
        </Toggle.Off>
      </Toggle.Button>
    </Toggle>
  );
}
