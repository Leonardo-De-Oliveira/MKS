import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const DataContext = createContext();

const DataProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [show, setShow] = useState('cart-hide')

  function hideCart(){
    if(show === 'cart'){
      setShow('cart-hide')
    } else {
      setShow('cart')
    }
  }

  const addToCart = (item, quantity) => {

    const itemInCart = cartProducts.some((prod) => prod.id === item.id) 

    if(!itemInCart){

    const itemToAdd = {...item, quantity };  

    setCartProducts((prevCart) => [...prevCart, itemToAdd]);

    } else {
      alert('Este item já está no carrinho!')
    }
  };

  const sumQuantity = (id) => {
    const itemIndex = cartProducts.findIndex((item) => item.id === id);
  
    if (itemIndex !== -1) {

      const updatedCartProducts = [...cartProducts];
  
      updatedCartProducts[itemIndex] = {
        ...updatedCartProducts[itemIndex],
        quantity: updatedCartProducts[itemIndex].quantity + 1
      };
  
      setCartProducts(updatedCartProducts);
  
      return updatedCartProducts[itemIndex].quantity + 1;
    }
  
    return null;
  };

  const subQuantity = (id) => {
    const itemIndex = cartProducts.findIndex((item) => item.id === id);
  
    if (itemIndex !== -1) {
      
      const currentItem = cartProducts[itemIndex];
  
      if (currentItem.quantity > 1) {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts[itemIndex] = {
          ...currentItem,
          quantity: currentItem.quantity - 1
        };
        setCartProducts(updatedCartProducts);
        return updatedCartProducts[itemIndex].quantity;
      } else {
        removeFromCart(id);
        return 0;
      }
    }
  
    return null; 
  };
  
  

  const removeFromCart = (itemId) => {
    setCartProducts((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC');
        setData(response.data.products);
      } catch (error) {
        console.log('Ocorreu um erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    data, 
    cartProducts,
    setCartProducts,
    show, 
    setShow,
    hideCart, 
    addToCart,
    sumQuantity,
    subQuantity, 
    removeFromCart 
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
