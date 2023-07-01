import React, { useContext } from "react";
import "./CartItem.css";
import { BsCartXFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../utility/formatCurrency";
import AppContext from "../../context/AppContext";

export default function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img className="cart-item-image" src={thumbnail} alt="Imagem do produto" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button className="button-remove-item" type="button" onClick={handleRemoveItem}>
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}
