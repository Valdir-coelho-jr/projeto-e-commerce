// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import "./CartButton.css";
import AppContext from "../../context/AppContext";

export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="button" className="cart-button" onClick={() => setIsCartVisible(!isCartVisible)}>
      <BsCart4 />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}
