import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";
import { CartContext } from "../App";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === +id);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Товар не найден</h2>
        <Link to="/products" className="button">К каталогу</Link>
      </div>
    );
  }

  const {
    name, image, price,
    description, category,
    manufacturer, releaseDate, specs
  } = product;

  return (
    <section className="product-detail container">
      <h1>{name}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "1rem" }}>
        <img
          src={image}
          alt={name}
          style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
        />

        <div style={{ flex: 1, minWidth: "280px" }}>
          <p><strong>Категория:</strong> {category}</p>
          <p><strong>Производитель:</strong> {manufacturer}</p>
          <p><strong>Дата выпуска:</strong> {new Date(releaseDate).toLocaleDateString("ru-RU", {
            day: "numeric", month: "long", year: "numeric"
          })}</p>
          <p style={{ margin: "1rem 0" }}>{description}</p>
          <p className="price" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            {price.toLocaleString("ru-RU")} ₸
          </p>
          <button
            onClick={() => addToCart(product)}
            className="button"
          >
            Добавить в корзину
          </button>
          <p style={{ marginTop: "1rem" }}>
            <Link to="/products" style={{ color: "var(--accent)" }}>← Назад в каталог</Link>
          </p>
        </div>
      </div>

      {/* Спецификации */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Характеристики</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "0.75rem 1rem", fontWeight: "500", textTransform: "capitalize" }}>
                  {key.replace(/([A-Z])/g, " $1")}
                </td>
                <td style={{ padding: "0.75rem 1rem" }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
