import { createContext } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import { useState } from "react";

const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

export { ThemeContext };
