import React from "react";
import { useTranslation } from "react-i18next";
import Klassickr from "../assests/klhruasan.png";
import Piskurasan from "../assests/pistachiokruasan.png";
import Bodomlikruasan from "../assests/bodomlikr.png";
import Nutellalikr from "../assests/nutellalikr.png";
import { sendOrderToTelegram } from "../utils/sendOrder";
import "./Kruassan.css";

const SpecialOffers = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, image: Klassickr, price: "18,000 UZS" },
    { id: 2, image: Piskurasan, price: "35,000 UZS" },
    { id: 3, image: Bodomlikruasan, price: "32,000 UZS" },
    { id: 4, image: Nutellalikr, price: "38,000 UZS" },
  ];

  return (
    <div className="container">
      <h2 className="container-title">{t("croissant_title")}</h2>
      <div className="offers">
        <div className="offers-container">
          <div className="offers-items">
            {items.map((item) => (
              <div key={item.id} className="offers-card">
                <img src={item.image} alt={t(`croissant${item.id}_name`)} />
                <div className="offers-info">
                  <h3>{t(`croissant${item.id}_name`)}</h3>
                  <p>{t(`croissant${item.id}_desc`)}</p>
                  <span className="price">{item.price}</span>
                  <button 
                    className="order-btn"
                    onClick={() => sendOrderToTelegram({
                      ...item,
                      name: t(`croissant${item.id}_name`),
                      desc: t(`croissant${item.id}_desc`)
                    })}
                  >
                    {t("order.btnOrder")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
