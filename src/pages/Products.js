import React from "react";
import { useLocation } from "react-router-dom";
import products from "../products";
import ProductCard from "../components/ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Products() {
  const q = useQuery();
  const cat = q.get("category");
  const map = { phones:"Смартфоны", laptops:"Ноутбуки", accessories:"Аксессуары" };
  const list = cat ? products.filter(p => p.category === map[cat]) : products;

  return (
    <section className="container">
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
        {cat ? map[cat] : "Все товары"}
      </h1>
      {list.length === 0 && <p style={{ textAlign: "center" }}>Товары не найдены.</p>}
      <div className="product-grid">
        {list.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
