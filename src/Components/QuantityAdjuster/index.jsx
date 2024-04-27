import { useContext } from 'react';
import { DataContext } from '../../Context';

function QuantityAdjuster(item) {

  const { sumQuantity, subQuantity, removeFromCart } = useContext(DataContext);
  const { id, quantity } = item.item;

  const handleSumQuantity = () => {
      sumQuantity(id)
  }

  const handleSubQuantity = () => {
    subQuantity(id)
  }

  const handleRemove = () => {
    removeFromCart(id)
  }

  return (
    <div className='quantity'>
      <p>Qtd:</p>
      <div className="quantity-adjuster">
        <button onClick={handleSubQuantity} >-</button>
        <p>{quantity}</p>
        <button onClick={handleSumQuantity} >+</button>
      </div>
      <button onClick={handleRemove} className='button-remove-item'>X</button>
    </div>
  );
}

export default QuantityAdjuster;
