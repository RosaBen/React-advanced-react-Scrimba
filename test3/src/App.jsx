// import Star from "./components/Star";
import { Toggle, Menu } from "./assets/scripts/index";

import { BsStar, BsStarFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
      <br />
      <Toggle>
        <Menu>
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
        </Menu>
      </Toggle>
    </>
  );
}

export default App;
