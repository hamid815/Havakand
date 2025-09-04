import React, { useState } from "react";
import "./Buyurtma.css";
import Scr1 from "../assests/scr1.png";
import Scr2 from "../assests/scr2.png";
import Scr3 from "../assests/scr3.png";
import { useTranslation } from "react-i18next";
import { sendOrderToTelegram } from "../utils/sendMal";

const productsList = [
  { id: 1, key: "kruassan", price: "18,000 UZS" },
  { id: 2, key: "nonlar", price: "28,000 UZS" },
  { id: 3, key: "pishiriqlar", price: "20,000 UZS" },
  { id: 4, key: "others", price: "35,000 UZS" },
];

const Buyurtma = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [selectedProducts, setSelectedProducts] = useState({});

  const toggleProduct = (product) => {
    setSelectedProducts((prev) => {
      const newSelected = { ...prev };
      if (newSelected[product.key]) {
        delete newSelected[product.key];
      } else {
        newSelected[product.key] = { ...product, quantity: 1 };
      }
      return newSelected;
    });
  };

  const changeQuantity = (productKey, value) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [productKey]: {
        ...prev[productKey],
        quantity: value,
      },
    }));
  };

  const handleSend = () => {
    if (!name || !phone || Object.keys(selectedProducts).length === 0) {
      alert("Iltimos barcha maydonlarni to‘ldiring va mahsulotni tanlang!");
      return;
    }

    let productText = "";
    Object.values(selectedProducts).forEach((p) => {
      productText += `${t(`order.products.${p.key}`)} - ${p.quantity} ta - ${p.price}\n`;
    });

    const message = `
🛒 Yangi buyurtma
👤 Ism: ${name}
📞 Telefon: ${phone}
ℹ️ Qo‘shimcha: ${info || "-"}
📦 Mahsulotlar:
${productText}
    `;

    sendOrderToTelegram({ message });
    alert("Buyurtma Telegramga yuborildi ✅");

    // Formani tozalash
    setName("");
    setPhone("");
    setInfo("");
    setSelectedProducts({});
  };

  return (
    <div className="container">
      <div className="form-buyurtma">
        <div className="buyurtma-left">
          <h2 className="container-title mrdis">{t("order.title")}</h2>
          <input
            type="text"
            placeholder={t("order.name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="phone"
            placeholder={t("order.phone")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("order.info")}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <p>{t("order.question")}</p>
          <div>
            {productsList.map((prod) => (
              <div key={prod.key} style={{ display: "inline-block", margin: "5px" }}>
                <button
                  className={`btn ${selectedProducts[prod.key] ? "active" : ""}`}
                  onClick={() => toggleProduct(prod)}
                >
                  {t(`order.products.${prod.key}`)}
                </button>
                {selectedProducts[prod.key] && (
                  <input
                    type="number"
                    min={1}
                    value={selectedProducts[prod.key].quantity}
                    onChange={(e) =>
                      changeQuantity(prod.key, Number(e.target.value))
                    }
                    style={{ width: "50px", marginLeft: "5px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <button className="btn-send" onClick={handleSend}>
            {t("order.send")}
          </button>
        </div>

        {/* O‘ng qism */}
        <div className="buyurtma-right">
          <div>
            <img src={Scr1} alt="" />
            <p>{t("order.steps.step1.number")}</p>
            <h3>{t("order.steps.step1.title")}</h3>
            <h4>{t("order.steps.step1.desc")}</h4>
          </div>

          <div>
            <img src={Scr2} alt="" />
            <p>{t("order.steps.step2.number")}</p>
            <h3>{t("order.steps.step2.title")}</h3>
            <h4>{t("order.steps.step2.desc")}</h4>
          </div>

          <div>
            <img src={Scr3} alt="" />
            <p>{t("order.steps.step3.number")}</p>
            <h3>{t("order.steps.step3.title")}</h3>
            <h4>{t("order.steps.step3.desc")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyurtma;
