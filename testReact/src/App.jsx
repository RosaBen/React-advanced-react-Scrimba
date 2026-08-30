// packages
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";

// Components
import Button from "./components/Button";
import Marquee from "./components/Marquee";
import Avatar from "./components/Avatar";

// images
import avatarImg from "./assets/images/avatarRB.jpg";
// Styles
import "./assets/styles/button.css";
import "./assets/styles/marquee.css";
import "./assets/styles/avatar.css";

function App() {
  return (
    <main>
      <Avatar src={avatarImg} alt="Rosa Ben" variant="img" />
      <br />
      <Avatar variant="initials">RB</Avatar>
      <br />
      <Avatar variant="icon" />
      {/* <Marquee>"🧛‍♀️ Welcome to Horrorville 🧛‍♀️"</Marquee> */}
      {/* <Button>{<FaMoneyBill />} Buy now!</Button> */}
      {/* <Button
        variant
        style={{ color: "green" }}
        onClick={() => console.log("Logging in...")}
      > */}
      {/* <Button size="sm" className="green">
        <FcGoogle />
        Log in with Google
      </Button>
      <Button size="lg" variant="success">
        <FcGoogle />
        Log in with Google
      </Button>
      <Button size="sm" variant="danger">
        <FcGoogle />
        Log in with Google
      </Button>
      <Button size="lg" variant="warning">
        <FcGoogle />
        Log in with Google
      </Button> */}
    </main>
  );
}

export default App;
