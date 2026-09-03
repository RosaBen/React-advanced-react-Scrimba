// Styles
// import "./assets/styles/button.css";
import "./assets/styles/marquee.css";
import "./assets/styles/avatar.css";
import "./assets/styles/menu.css";

// import Main from "./components/Main";
import Menu from "./assets/scripts/indexMenu.js";
import { sports } from "./assets/scripts/data";
function App() {
  const listSports = sports.map((sport) => (
    <Menu.Item key={sport}>{sport}</Menu.Item>
  ));
  return (
    <Menu>
      <Menu.Btn>Sports</Menu.Btn>
      <Menu.Dropdown>{listSports}</Menu.Dropdown>
    </Menu>
  );
}

export default App;
