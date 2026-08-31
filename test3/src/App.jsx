import Star from "./components/Star";
import { Menu } from "./assets/scripts/index";

function App() {
  return (
    <>
      <Star />
      <br />

      <Menu>
        <Menu.Btn>Menu</Menu.Btn>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Profile</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
