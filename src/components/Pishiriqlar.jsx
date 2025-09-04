import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendOrderToTelegram } from "../utils/sendOrder";
import Tvaroglipishiriq from "../assests/tvaroglipishiriq.png"; 
import Makkiqatlamlipish from "../assests/makliqatlamli.png";
import Djemlipish from "../assests/djemlipish.png";
import Panshokaladlipish from "../assests/panshokaladli.png";
import Panswizer from "../assests/panswizwer.png";
import Qaymorkremli from "../assests/qaymoqkrcinna.png";
import Nutellali from "../assests/nutellalicinnamon.png";

const Pishiriqlar = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, image: Tvaroglipishiriq, price: "15,000 UZS" },
    { id: 2, image: Makkiqatlamlipish, price: "15,000 UZS" },
    { id: 3, image: Djemlipish, price: "20,000 UZS" },
    { id: 4, image: Panshokaladlipish, price: "32,000 UZS" },
    { id: 5, image: Panswizer, price: "32,000 UZS" },
    { id: 6, image: Qaymorkremli, price: "32,000 UZS" },
    { id: 7, image: Nutellali, price: "32,000 UZS" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev < items.length - visibleCount ? prev + 1 : prev
    );
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="container">
      <h2 className="container-title">{t("pastries_title")}</h2>
      <div className="bakery-container">
        <button
          className="nav prev"
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          ←
        </button>

        <div className="bakery-items">
          {visibleItems.map((item) => (
            <div key={item.id} className="bakery-card">
              <img src={item.image} alt={t(`pastry${item.id}_name`)} />
              <div className="bakery-info">
                <h3>{t(`pastry${item.id}_name`)}</h3>
                <p>{t(`pastry${item.id}_desc`)}</p>
                <span className="price">{item.price}</span>
                <button 
                  className="order-btn"
                  onClick={() => sendOrderToTelegram({
                    ...item,
                    name: t(`pastry${item.id}_name`),
                    desc: t(`pastry${item.id}_desc`)
                  })}
                >
                  {t("order.btnOrder")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav next"
          onClick={nextSlide}
          disabled={startIndex >= items.length - visibleCount}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pishiriqlar;
