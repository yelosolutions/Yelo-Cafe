import React from "react";

const Categories = ({categories, filterItems}) => {
    return (
        <div className="category-btns">
            <button onClick={filterItems} ></button>
        </div>
    );
};

export default Categories;
