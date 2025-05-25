import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // здесь можно отправить данные на сервер
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page container">
      {/* Контактная информация */}
      <div className="contact-info">
        <h2>Наши контактные данные</h2>
        <p><strong>Адрес:</strong> г. Алматы, пр. Назарбаева, 123</p>
        <p><strong>Телефон:</strong> <a href="tel:+77271234567">+7 (727) 123-45-67</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@smartzone.kz">info@smartzone.kz</a></p>
        <p><strong>Рабочие часы:</strong> Пн–Пт 9:00–18:00</p>
      </div>

      {/* Форма обратной связи */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Свяжитесь с нами</h2>

        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            className="input-field"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="input-field"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="button">Отправить</button>
        {submitted && (
          <p className="success-message">Спасибо! Ваше сообщение отправлено.</p>
        )}
      </form>
    </section>
  );
}
