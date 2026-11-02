"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { menuCategories, menuItems } from "@/data/restaurantData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const items = activeCategory === "Todo" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-section section-space" id="menu">
      <div className="page-shell">
        <div className="section-heading section-heading--menu">
          <div>
            <p className="eyebrow"><span /> De nuestra cocina y barra</p>
            <h2 className="section-title">Una carta con <em>carácter.</em></h2>
          </div>
          <p className="body-copy">Sabores que reconoces, combinaciones que te sorprenden. Cada plato cuenta su propia historia.</p>
        </div>

        <div className="menu-filters" role="group" aria-label="Filtrar platos por categoría">
          {menuCategories.map((category) => (
            <button
              className={`filter-button${activeCategory === category ? " filter-button--active" : ""}`}
              type="button"
              aria-pressed={activeCategory === category}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="menu-grid">
          {items.map((item) => (
            <motion.article
              className="menu-card"
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              key={item.name}
            >
              <Image className="menu-card__image" src={item.image} alt={item.alt} fill sizes="(max-width: 520px) calc(100vw - 36px), (max-width: 760px) 50vw, 33vw" />
              <div className="menu-card__shade" />
              <div className="menu-card__content">
                <span className="menu-card__category">{item.category}</span>
                <div className="menu-card__title-row"><h3>{item.name}</h3><span className="menu-card__price">{item.price}</span></div>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="menu-note">La carta cambia con la temporada. Consulta disponibilidad al reservar.</p>
      </div>
    </section>
  );
}
