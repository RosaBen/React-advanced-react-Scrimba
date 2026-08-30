// Styles
// import "./assets/styles/button.css";
import "./assets/styles/marquee.css";
import "./assets/styles/avatar.css";
import "./assets/styles/menu.css";

import Main from "./components/Main";
import Menu from "./components/Menu";
import MenuBtn from "./components/MenuBtn";
import MenuDropdown from "./components/MenuDropdown";
import { items } from "./assets/scripts/data";

function App() {
  return (
    <>
      <Menu>
        <MenuBtn buttonText="Sports" />
        <MenuDropdown items={items} />
      </Menu>
    </>
  );
}

export default App;
