import Star from "./components/Star";
import Toggle from "./assets/scripts/index";

function App() {
  return (
    <Toggle>
      <Toggle.Button>
        <Star />
      </Toggle.Button>
    </Toggle>
  );
}

export default App;
