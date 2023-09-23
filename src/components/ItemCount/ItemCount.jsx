import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {
  const [count, setCount] = useState(0); //
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };
  const handleRemoveProduct = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleRemoveProduct}>-</button>
      <label style={{ margin: 10, fontSize: "1.5rem", fontWeight: "bold" }}>
        {count}
      </label>
      <button onClick={handleAddProduct}>+</button>
    </div>
  );
};

export default ItemCount;
