import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

export default function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  const { name } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input
        className="search-input"
        value={searchValue}
        type="search"
        placeholder="Buscar produtos..."
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button className="search-button" type="submit">
        <BiSearch />
      </button>
    </form>
  );
}
