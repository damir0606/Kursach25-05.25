import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const slides = [
  { id: 1, title: "Летняя распродажа!",  description: "Скидки до 30% на смартфоны и ноутбуки" },
  { id: 2, title: "Новинки 2025 года",    description: "Умные часы и аксессуары в наличии" },
  { id: 3, title: "Бесплатная доставка", description: "При заказе от 5000 ₸" },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % slides.length), 4000);
    return () => clearInterval(iv);
  }, []);

  const slide = slides[idx];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <button className="button" onClick={() => window.location = '/products'}>
            Перейти в каталог
          </button>
        </div>
      </section>

      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </>
  );
}
