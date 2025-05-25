import React from "react";
import products from "../products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="container">
      <h2>Рекомендуем</h2>
      <div className="product-grid">
        {products.slice(0, 4).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
