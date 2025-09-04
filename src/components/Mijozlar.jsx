import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Kurassan from "../assests/kurassan.png";
import Kaffe from "../assests/caffe.png";
import Mehmonxona from "../assests/mehmonxonalar.png";
import Cafe from "../assests/cafe.png";
import Akvapark from "../assests/akvapark.png";

const menuItems = [
  { id: 1, name: "clients.restoran", image: Kurassan },
  { id: 2, name: "clients.coffee", image: Kaffe },
  { id: 3, name: "clients.mehmonxona", image: Mehmonxona },
  { id: 4, name: "clients.cafe", image: Cafe },
  { id: 5, name: "clients.akvapark", image: Akvapark },
];

const Mijozlar = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);

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
      <h2 className="container-title">{t("clients_title")}</h2>
      <div className="menu-container">
        <button className="nav prev" onClick={prevSlide}>
          ←
        </button>

        <div className="menu-items">
          {menuItems.slice(startIndex, startIndex + 4).map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={t(item.name)} className="menu-image" />
              <div className="menu-overlay">
                <h3>{t(item.name)}</h3>
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

export default Mijozlar;
