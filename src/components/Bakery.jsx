import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Bakery.css";
import { sendOrderToTelegram } from "../utils/sendOrder";

import Baget from "../assests/baget.png";
import Tartingrech from "../assests/tartingrechkali.png";
import Tartin from "../assests/tartin.png";
import Klassictartin from "../assests/klassictartin.png";
import Arpalitartin from "../assests/arpalitartin.png";
import Pistalitartin from "../assests/pistalitartin.jpg";
import Dania from "../assests/daniyanoni.png";
import Chiyabatta from "../assests/chiyabatta.png";
import Xokkaydo from "../assests/xokkaydo.jpg";

const Bakery = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, image: Baget, price: "18,000 UZS", kg: "300gr" },
    { id: 2, image: Tartingrech, price: "28,000 UZS", kg: "650gr" },
    { id: 3, image: Tartin, price: "30,000 UZS", kg: "650gr" },
    { id: 4, image: Klassictartin, price: "25,000 UZS", kg: "650gr" },
    { id: 5, image: Arpalitartin, price: "35,000 UZS", kg: "650gr" },
    { id: 6, image: Pistalitartin, price: "35,000 UZS", kg: "650gr" },
    { id: 7, image: Dania, price: "50,000 UZS", kg: "700gr" },
    { id: 8, image: Chiyabatta, price: "35,000 UZS", kg: "300gr" },
    { id: 9, image: Xokkaydo, price: "35,000 UZS", kg: "300gr" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const visibleItems = items.slice(startIndex, startIndex + 4);
  if (visibleItems.length < 4) {
    visibleItems.push(...items.slice(0, 4 - visibleItems.length));
  }

  return (
    <div className="container">
      <h2 className="container-title">{t("bakery_title")}</h2>
      <div className="bakery-container">
        <button className="nav prev" onClick={prevSlide}>←</button>
        <div className="bakery-items">
          {visibleItems.map((item) => (
            <div key={item.id} className="bakery-card">
              <img src={item.image} alt={t(`bakery${item.id}_name`)} />
              <div className="bakery-info">
                <h3>{t(`bakery${item.id}_name`)}</h3>
                <p>{t(`bakery${item.id}_desc`)}</p>
                <h4>{item.kg}</h4>
                <span className="price">{item.price}</span>
                <button 
                  className="order-btn"
                  onClick={() => sendOrderToTelegram({
                    ...item,
                    name: t(`bakery${item.id}_name`),
                    desc: t(`bakery${item.id}_desc`)
                  })}
                >
                  {t("order.btnOrder")}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="nav next" onClick={nextSlide}>→</button>
      </div>
    </div>
  );
};

export default Bakery;
