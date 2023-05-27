import React, { useEffect, useState } from 'react'
import menu from './data'

const Items = () => {
    const [items, setItems] = useState(menu);

    return (
        <div className='container'>
            {items.map((item) => {
                const {id, title, category, img, price, desc} = item;
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
}

export default Items