import React, { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart container">
        <h2>Корзина пуста</h2>
        <Link to="/products" className="button">Перейти в каталог</Link>
      </div>
    );
  }

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <section className="cart-page container">
      <h1>Корзина</h1>
      <ul className="cart-list">
        {cartItems.map(i => (
          <li key={i.id} className="cart-item">
            <div>
              <h3>{i.name}</h3>
              <p>Цена: {i.price.toLocaleString("ru-RU")} ₸</p>
              <p>Кол-во: {i.qty}</p>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(i.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">Итого: {total.toLocaleString("ru-RU")} ₸</h2>
    </section>
  );
}
