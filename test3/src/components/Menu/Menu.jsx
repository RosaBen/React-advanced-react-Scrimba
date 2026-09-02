import { Toggle } from "../../assets/scripts/index";

export default function Menu({ children, onOpen }) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu">{children}</div>
    </Toggle>
  );
}

// const inputRef = React.useRef(null);//create
// inputRef.current.focus();// add in function
// ref = { inputRef };//add in html element
