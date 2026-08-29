// packages

// Components
import Button from "./components/Button";
import Marquee from "./components/Marquee";

// Styles
import "./assets/styles/button.css";
import "./assets/styles/marquee.css";

function App() {
  return (
    <main>
      <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" />
      <Button text="Click here" />
    </main>
  );
}

export default App;
