import React from 'react'



const Category = ({categoryItems}) => {

    return( <div className='container'>
            {categoryItems.map((item) => {
                const {id, title, img, price, desc} = item;
                return <article key={id}>
                    <img src={img} alt="" />
                    <div className='item-info'>
                        <h4>{title}</h4>
                        <span> {price.toFixed(2)}</span>
                    </div>
                    <p>{desc}</p>
                </article>
            })}
        </div>
    )
        
        // <div className="category">
        //     {isAll ? items: items}
        //     <button onClick={setIsAll(!isAll)}>
        //         all 
        //     </button>
        //     {isBreakfast? categorizeItem('breakfast'): items}    
        //     <button onClick={() => setIsBreakfast(true)}>
        //         breakfast 
        //     </button>
        //     {isLunch? categorizeItem('breakfast'): items}
        //     <button onClick={() => setIsLunch(true)}>
        //         lunch 
        //     </button>
        //     {isShakes? categorizeItem('shakes'): items}
        //     <button onClick={() => setIsShakes(true)}>
        //         shakes 
        //     </button>
        // </div>
};


export default Category