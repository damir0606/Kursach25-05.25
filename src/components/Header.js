import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="header container">
      <NavLink to="/" className="logo">SmartZone</NavLink>
      <nav>
        <NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>
          Каталог
        </NavLink>
        <NavLink to="/cart" className={({isActive}) => isActive ? "active" : ""}>
          Корзина ({totalQty})
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
          Контакты
        </NavLink>
      </nav>
    </header>
  );
}
