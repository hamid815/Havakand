import React from "react";
import "../components/Header.css";
import Hlogo from "../assests/havakandlogo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>{t("menu")}</li>
            <li>{t("about")}</li>
            <li>{t("address")}</li>
            <li>{t("contact")}</li>
          </ul>
        </nav>
        <img src={Hlogo} alt="Logo" className="header-logo" />
        <nav>
          <ul>
            <li>{t("b2b")}</li>
            <li>+998 95 435 30 02</li>
            <li>
              <button onClick={() => changeLanguage("uz")}>UZ</button> -{" "}
              <button onClick={() => changeLanguage("ru")}>RU</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
