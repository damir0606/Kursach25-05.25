import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const submit = e => {
    e.preventDefault();
    setOk(true);
    setEmail("");
  };

  return (
    <section className="newsletter container">
      <h2>Подпишитесь на новости</h2>
      <p>Будьте в курсе горячих распродаж и новинок!</p>
      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Подписаться</button>
      </form>
      {ok && <p className="success-message">Спасибо за подписку!</p>}
    </section>
  );
}
