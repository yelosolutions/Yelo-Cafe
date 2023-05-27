import React from 'react'


const Menu = ({items}) => {

    return (
        <div className='container'>
            {items.map((item) => {
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
}

export default Menu