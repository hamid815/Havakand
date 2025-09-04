import React from "react";
import { useTranslation } from "react-i18next";
import "../components/Biz.css";
import Havbakery from "../assests/havbakeryimg.jpg";
import HavParis from "../assests/havbakeryparis.png";
import Havbulut from "../assests/havbulut.png";
import Havfooter from "../assests/havfooder.png";

import Ffbefe from "../assests/01ffbe8fb3fe08faf948ce49d7caa280dc42c282.jpg";
import Ceecfe from "../assests/ceeecfee1c4806ea64bf19de5932c9784084d63f.jpg";
import Oshpaz from "../assests/9a49987f6f0deefefb05c75ffd1ea34b813a8018.png";

const Biz = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="container-title als">{t("about_title")}</h2>
      <div className="havakand-bakery">
        <div className="havakand-img1-container">
          <img src={Havbakery} alt="" className="havakand-img1" />
          <img src={Havbulut} alt="" className="havakand-bulut1" />
        </div>

        <div>
          <h2>{t("about_subtitle")}</h2>
          <p>{t("about_text")}</p>
          <button>{t("about_btn")}</button>
        </div>

        <div className="havakand-img2-container">
          <img src={HavParis} alt="" className="havakand-img2" />
          <img src={Havbulut} alt="" className="havakand-bulut2" />
        </div>
        <img src={Havfooter} alt="" className="havakand-footer" />
      </div>

      <div className="fransiya-texnologiyasi">
        <img src={Ffbefe} alt="" className="fr-img" />
        <div>
          <h2>{t("about_france_title")}</h2>
          <p>{t("about_france_text")}</p>
          <button>{t("about_btn")}</button>
        </div>
      </div>

      <div className="fransiya-texnologiyasi">
        <div>
          <h2>{t("about_natural_title")}</h2>
          <p>{t("about_natural_text")}</p>
          <button>{t("about_btn")}</button>
        </div>
        <img src={Ceecfe} alt="" className="fr-img" />
      </div>

      <div className="fransiya-texnologiyasi oshpaz-cont">
        <img src={Oshpaz} alt="" className="oshpaz" />
        <div>
          <h2>{t("about_staff_title")}</h2>
          <p>{t("about_staff_text")}</p>
          <button>{t("about_btn")}</button>
        </div>
      </div>
    </div>
  );
};

export default Biz;
