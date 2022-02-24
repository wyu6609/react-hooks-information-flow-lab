import React from "react";

function Header({ onDarkModeClick, darkModeState }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {darkModeState ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
