import React from 'react';

function Menu({ menu, onBasketAdd }) {
    return (
        <section>
            <h2>Menu</h2>
            <ul>
                {menu.map(menuItem => (
                    <li key={menuItem.id}>
                        {menuItem.name} - £{menuItem.price}
                        <button type="button" onClick={() => onBasketAdd(menuItem)}>
                            Add to order
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Menu;