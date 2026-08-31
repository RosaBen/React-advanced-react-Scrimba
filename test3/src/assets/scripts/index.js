import Toggle from "../../components/Toggle/Toggle";
import ToggleButton from "../../components/Toggle/ToggleButton";
import ToggleOn from "../../components/Toggle/ToggleOn";
import ToggleOff from "../../components/Toggle/ToggleOff";

import Menu from "../../components/Menu/Menu";
import MenuBtn from "../../components/Menu/MenuBtn";
import MenuDropdown from "../../components/Menu/MenuDropdown";
import MenuItem from "../../components/Menu/MenuItem";


Toggle.Button = ToggleButton;
Toggle.On = ToggleOn;
Toggle.Off = ToggleOff;

Menu.Btn = MenuBtn;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;

export { Toggle, Menu };