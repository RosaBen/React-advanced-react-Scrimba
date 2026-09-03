import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../hooks/useToggle";

export default function Star() {
  const [on, toggle] = useToggle();
  return (
    <>
      {on ? (
        <BsStarFill className="star filled" onClick={() => toggle()} />
      ) : (
        <BsStar className="star" onClick={() => toggle()} />
      )}
    </>
  );
}
