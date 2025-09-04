import React from "react";
import { useTranslation } from "react-i18next";
import "../components/HavakandBakery.css";

import Havbaknon from "../assests/havbaknon.png";
import Havbakbarg from "../assests/havbakbarg.png";
import Havbakrang from "../assests/havbakrang.png";

import Hav1 from "../assests/hav1.png";
import Hav2 from "../assests/hav2.png";
import Hav3 from "../assests/hav3.png";
import Hav4 from "../assests/hav4.png";
import Hav5 from "../assests/hav5.png";
import Havcollect from "../assests/havcollect.jpg";

import Brend1 from "../assests/62d385788ed0b99031cb7ed560c0aee00bf92bcc.png";
import Brend2 from "../assests/313825df9befb6b5f49e89433791d9f7dfa1b445.png";
import Brend3 from "../assests/a42e7f5e4c55efcca9e42ab9781d330c5c5d6cb5.png";
import Brend4 from "../assests/f5deb16e558c0bc0bead157411631288e87674c4.png";

import B2b1 from "../assests/Screenshot 2025-09-02 165350.png";
import B2b2 from "../assests/Screenshot 2025-09-02 165333.png";
import B2b3 from "../assests/Screenshot 2025-09-02 165313.png";

const HavakandBakery = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="havakand-top">
        <h1>{t("hav_title")}</h1>
        <div>
          <img src={Havbakbarg} alt="Havbakbarg" className="hbak" />
          <img src={Havbaknon} alt="Havbaknon" className="hbaknon" />
          <img src={Havbakrang} alt="Havbakrang" className="hbak" />
        </div>
      </div>

      <div className="havakand-hero">
        <h1>{t("hav_subtitle")}</h1>
        <div>
          <img src={Hav1} alt="Hav1" />
          <img src={Hav2} alt="Hav2" />
          <img src={Hav3} alt="Hav3" />
          <img src={Hav4} alt="Hav4" />
          <img src={Hav5} alt="Hav5" />
        </div>
      </div>

      <div className="havcollect">
        <img src={Havcollect} alt="Havcollect" />
        <div>
          <h3>{t("hav_collection")}</h3>
          <h1>{t("hav_categories.kruassan")}</h1>
          <h1>{t("hav_categories.nonlar")}</h1>
          <h1>{t("hav_categories.sinnamon")}</h1>
          <h1>{t("hav_categories.pansizer")}</h1>
          <h1>{t("hav_categories.panshokolad")}</h1>
          <h1>{t("hav_categories.baget")}</h1>
          <h1>{t("hav_categories.chiabatta")}</h1>
        </div>
      </div>

      <div className="brendic">
        <img src={Brend1} alt="" className="brr" />
        <img src={Brend2} alt="" className="brr" />
        <img src={Brend3} alt="" className="brr" />
        <img src={Brend4} alt="" className="br4" />
      </div>

      <div className="b2b-uchun">
        <div>
          <h2>{t("hav_b2b_title")}</h2>
          <p>{t("hav_b2b_text")}</p>
        </div>
        <div className="b2b-images">
          <img src={B2b1} alt="" className="b2b-bg" />
          <img src={B2b2} alt="" className="b2b-bgw" />
          <img src={B2b3} alt="" className="b2b-bg" />
        </div>
      </div>
    </div>
  );
};

export default HavakandBakery;
