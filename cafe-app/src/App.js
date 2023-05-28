import React, { useState } from "react";
import Menu from "./menu";
import menu from "./data";
import Category from "./categories";

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categoryItems, setCategoryItems] = useState([]);

  const [isAll, setIsAll] = useState(false);
  const [isBreakfast, setIsBreakfast] = useState(false);
  const [isLunch, setIsLunch] = useState(false);
  const [isShakes, setIsShakes] = useState(false);

  const categorise = (category) => {
    const newList = menu.filter((item) => category === item.category);
    // return isBreakfast? ('breakfast'):('');
    setCategoryItems(newList);
  };



  return (
    <main>
      <h2>Yelo Cafe</h2>
      <div className="switch-category">
        <button
          onClick={() => {
            setIsAll(true);
            setMenuItems(menu);
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            setIsBreakfast(true);
            categorise("breakfast");
            // setCategoryItems()
          }}
        >
          breakfast
        </button>
        <button
          onClick={() => {
            setIsLunch(true);
            categorise("lunch");
            // setCategoryItems()
          }}
        >
          lunch
        </button>
        <button
          onClick={() => {
            setIsShakes(true);
            categorise("shakes");
            // setCategoryItems()
          }}
        >
          shakes
        </button>
      </div>
      {isAll && isBreakfast && isLunch && isShakes ? (
        <Category categoryItems={categoryItems}></Category>
      ) : (
        <Menu items={menuItems}></Menu>
      )}
      {}
    </main>
  );
}

export default App;
