import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Searchbar";
import UserCard from "./Components/UserCard";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [theme, setTheme] = useState("light");

  // toggle dark mode

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="app_container">
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Search userInfo={userInfo} setUserInfo={setUserInfo} />
          <UserCard userInfo={userInfo} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
