import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <div className="info">
          <h3>{product.name}</h3>
          <p className="price">{product.price.toLocaleString("ru-RU")} ₸</p>
        </div>
      </Link>
      <button onClick={handleAdd} disabled={added}>
        {added ? "Добавлено" : "В корзину"}
      </button>
    </div>
  );
}
