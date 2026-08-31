import { Toggle } from "../../assets/scripts/index";

export default function Menu({ children }) {
  return (
    <Toggle>
      <div className="menu">
        <Toggle.Button>
          <Menu.Btn>Menu</Menu.Btn>
        </Toggle.Button>
        <Toggle.On>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Projects</Menu.Item>
            <Menu.Item>Profile</Menu.Item>
          </Menu.Dropdown>
        </Toggle.On>
      </div>
    </Toggle>
  );
}
