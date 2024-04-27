import React, { useContext } from 'react';
import '../../sass/2-layouts/layouts.sass';
import cart from '../../assets/cart.png';

import { DataContext } from '../../Context';

function Header() {
    
    const { hideCart, cartProducts } = useContext(DataContext);
        
    const itemsInCart = cartProducts.length

    return(
        <header className='header'>
            <div className='box'>
                <p className='title'>MKS <span className='text'>Sistemas</span></p>
                <button onClick={hideCart} className='button'>
                    <img src={cart} alt='carrinho' />
                    <p>{itemsInCart}</p>
                </button>
            </div>
        </header>
    );    
}

export default Header;