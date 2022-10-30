import React from "react";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <h1>devfinder</h1>
      {theme === "light" ? (
        <button className="switch_button" type="button" onClick={toggleTheme}>
          Dark <img src="../assets/icon-moon.svg"></img>
        </button>
      ) : (
        <button className="switch_button" type="button" onClick={toggleTheme}>
          Light <img src="../assets/icon-sun.svg"></img>
        </button>
      )}
    </header>
  );
};

export default Header;
