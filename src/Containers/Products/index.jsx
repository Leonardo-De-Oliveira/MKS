import React, { useContext } from 'react';
import { DataContext } from '../../Context';
import Card from "../../Components/Card";
import Cart from "../../Containers/Cart";
import CardSchematic from '../../Components/CardSchematic';
import '../../sass/2-layouts/layouts.sass';

function Products() {

  const { data, addToCart  } = useContext(DataContext);

  return (
    <main className='products'>
      <div className='products-box'>
        {data &&  data.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              price={item.price}
              text={item.description}
              img={item.photo}
              addToCart={() => addToCart(item, 1)}
            />
          ))
        ) : (
          <>
            <CardSchematic />
            <CardSchematic />
            <CardSchematic />
            <CardSchematic />
            <CardSchematic />
            <CardSchematic />
            <CardSchematic />
            <CardSchematic />
          </>
        )}

      </div>

      <Cart />
    </main>
  );
}

export default Products;
