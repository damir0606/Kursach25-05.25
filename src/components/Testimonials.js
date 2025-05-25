import React from "react";

const reviews = [
  { id:1, name:"Алексей", text:"Отличный магазин, быстрая доставка!" },
  { id:2, name:"Мария",  text:"Купила наушники — звук просто супер." },
  { id:3, name:"Иван",   text:"Поддержка ответила в течение часа." },
];

export default function Testimonials() {
  return (
    <section className="testimonials container">
      <h2>Отзывы клиентов</h2>
      <div className="cards">
        {reviews.map(r => (
          <div key={r.id} className="card">
            <p>“{r.text}”</p>
            <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
