import { Menu } from "./assets/scripts/index.js";

function App() {
  return (
    <>
      <Menu>
        <Menu.Btn>Menu</Menu.Btn>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
