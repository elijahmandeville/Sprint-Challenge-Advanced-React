import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import "../App.scss";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode("Dark");
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav>
        <h1>Women's World Cup Players</h1>
        <div onClick={toggleMode} className="mode-set">
          Dark Mode
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
