import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../components/Topproducts.css";

import { sendOrderToTelegram } from "../utils/sendOrder";

import Klkruassan from "../assests/klhruasan.png";
import Tartin from "../assests/tartin.png";
import Piskurasan from "../assests/pistachiokruasan.png";
import Nutellali from "../assests/nutellalicinnamon.png";
import Qaymoqkremli from "../assests/qaymoqkrcinna.png";
import Maklikatlamli from "../assests/makliqatlamli.png";
import Chiabata from "../assests/chiabattaclassic.png";

const TopProducts = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, image: Klkruassan, price: "18,000 UZS" },
    { id: 2, image: Tartin, price: "30,000 UZS" },
    { id: 3, image: Piskurasan, price: "35,000 UZS" },
    { id: 4, image: Nutellali, price: "32,000 UZS" },
    { id: 5, image: Qaymoqkremli, price: "32,000 UZS" },
    { id: 6, image: Maklikatlamli, price: "15,000 UZS" },
    { id: 7, image: Chiabata, price: "17,000 UZS" },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? products.length - visibleCount : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= products.length - visibleCount ? 0 : prev + 1
    );
  };

  const handleOrder = (product) => {
    // i18n bilan tarjima qilingan matnlarni product ob’ektiga qo‘shamiz
    const translatedProduct = {
      ...product,
      name: t(`product${product.id}_name`),
      desc: t(`product${product.id}_desc`)
    };

    sendOrderToTelegram(translatedProduct);
  };

  return (
    <div className="container">
      <h2 className="container-title">{t("top_products")}</h2>
      <div className="top-products">
        <button className="nav prev" onClick={prevSlide}>←</button>
        <div className="products">
          {products.slice(index, index + visibleCount).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={t(`product${product.id}_name`)} />
              <div className="product-info">
                <h3>{t(`product${product.id}_name`)}</h3>
                <p>{t(`product${product.id}_desc`)}</p>
                <span className="price">{product.price}</span>
                <button className="order-btn" onClick={() => handleOrder(product)}>
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

export default TopProducts;
