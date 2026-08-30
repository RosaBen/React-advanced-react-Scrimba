import { useState } from "react";

export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="menu">
      {children}
      {/* <MenuBtn buttonText={buttonText} onClick={toggle} />
      {open && <MenuDropdown items={items} />} */}
    </div>
  );
}
