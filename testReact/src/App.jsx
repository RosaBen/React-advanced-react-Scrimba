// packages
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// Components
import Button from "./components/Button";
import Marquee from "./components/Marquee";

// Styles
import "./assets/styles/button.css";
import "./assets/styles/marquee.css";

function App() {
  return (
    <main>
      <Marquee>"🧛‍♀️ Welcome to Horrorville 🧛‍♀️"</Marquee>
      {/* <Button>{<FaMoneyBill />} Buy now!</Button> */}
      {/* <Button
        variant
        style={{ color: "green" }}
        onClick={() => console.log("Logging in...")}
      > */}
      <Button size="sm" className="green">
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
      </Button>
    </main>
  );
}

export default App;
