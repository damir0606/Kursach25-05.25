// src/components/Categories.js
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "phones",      title: "Смартфоны",  cls: "phones" },
  { id: "laptops",     title: "Ноутбуки",   cls: "laptops" },
  { id: "accessories", title: "Аксессуары", cls: "accessories" },
];

export default function Categories() {
  return (
    <section className="categories container">
      <h2>Категории</h2>
      <div className="list">
        {categories.map(c => (
          <Link
            key={c.id}
            to={`/products?category=${c.id}`}
            className={`item ${c.cls}`}
          >
            {c.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
