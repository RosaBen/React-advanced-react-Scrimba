// Styles
// import "./assets/styles/button.css";
import "./assets/styles/marquee.css";
import "./assets/styles/avatar.css";
import "./assets/styles/menu.css";

import Main from "./components/Main";
import Menu from "./components/Menu";
import MenuBtn from "./components/MenuBtn";
import MenuDropdown from "./components/MenuDropdown";
import MenuItem from "./components/MenuItem";
import { sports } from "./assets/scripts/data";

function App() {
  const listSports = sports.map((sport) => (
    <MenuItem key={sport}>{sport}</MenuItem>
  ));
  return (
    <Menu>
      <MenuBtn>Sports</MenuBtn>
      <MenuDropdown>{listSports}</MenuDropdown>
    </Menu>
  );
}

export default App;
