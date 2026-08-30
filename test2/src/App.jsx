import { createContext } from "react";
import Button from "./components/Button";
import Header from "./components/Header";

const ThemeContext = createContext();
function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="container light-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

export { ThemeContext };
