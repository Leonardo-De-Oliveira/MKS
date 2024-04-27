import React, { useContext } from 'react';
import { DataContext } from '../../Context';
import '../../sass/app.sass';
import QuantityAdjuster from '../../Components/QuantityAdjuster';

function Cart() {

    const { cartProducts, show, hideCart } = useContext(DataContext);

    const finalValue = cartProducts.reduce( (acc, value ) => {
        let result = Number(value.price) * value.quantity
        return acc + result
    }, 0)

    return (
        <div className={show}>
            <button onClick={()=> hideCart()} className='button-close-cart'>X</button>
            <div className='cart-box'>
                <h2>Carrinho de compras</h2>
                <div className='cart-box-products'>
                    {cartProducts && cartProducts.length > 0 ? (
                        cartProducts.map((item) => (
                            <div className='cart-items' key={item.id}>
                                <img src={item.photo} alt={item.name} />
                                <p className='name-item'>{item.name}</p>
                                <QuantityAdjuster 
                                    item={item}/>
                                <p className='price-cart'>R${Number(item.price)}</p>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
                <div className='cart-box-total'>
                    <h2>Total:</h2>
                    <p>R${finalValue}</p>
                </div>
            </div>
            <button className='button-finish'>Finalizar Compra</button>
        </div>
    );
}

export default Cart;