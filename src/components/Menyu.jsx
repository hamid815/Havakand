import React, { useState } from "react";
import "./Menyu.css";
import Kurassan from "../assests/kurassan.png";
import Pishiriqlar from "../assests/pishiriqlar.png";
import Baget from "../assests/baget.png";
import Non from "../assests/non.png";
import Sinnabon from "../assests/sinnabon.png";
import { useTranslation } from "react-i18next";

const Menyu = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);

  const menuItems = [
    { id: 1, name: t("croissant"), image: Kurassan },
    { id: 2, name: t("pastries"), image: Pishiriqlar },
    { id: 3, name: t("baguette"), image: Baget },
    { id: 4, name: t("bread"), image: Non },
    { id: 5, name: t("cinnabon"), image: Sinnabon },
  ];

  const nextSlide = () => {
    if (startIndex < menuItems.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container">
      <h2 className="container-title">{t("menu_title")}</h2>
      <div className="menu-container">
        <button className="nav prev" onClick={prevSlide}>
          ←
        </button>

        <div className="menu-items">
          {menuItems.slice(startIndex, startIndex + 4).map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-overlay">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="nav next" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
};

export default Menyu;
