import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  function handleClick() {
    setMode(!mode);
    setButtonText(!buttonText);
  }
  
  const currentMode = buttonText ? "Light Mode" : "Dark Mode"
  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{currentMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
