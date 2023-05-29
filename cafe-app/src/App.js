import React, { useState } from "react";
import Menu from "./menu";
import items from "./data";
//import Category from "./categories";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

console.log(allCategories);


function App() {
  //create and control itemsitems
  const [menuItems, setMenuItems] = useState(items);

  //create and control categories
  //const [categories, setCategories] = useState(allCategories);


  //return items grouped into categories
  const filterItems = (category) => {
    if(category === 'all'){
      return;
    }
    const newList = items.filter((item) => item.category === category);
    setMenuItems(newList);
  };

  return (
    <main>
      <h2>Yelo Cafe</h2>
      
      {/* <Category categories={categories} filterItems={filterItems}/> */}
      <Menu items={menuItems}></Menu>

    </main>
  );
}

export default App;
