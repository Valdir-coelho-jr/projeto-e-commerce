import { BsFillCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";

import React, { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "../../utility/formatCurrency";
import AppContext from "../../context/AppContext";

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className="card-image" />

      <div className="card-info">
        <h2 className="card-price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button className="button-add-cart" type="button" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}
