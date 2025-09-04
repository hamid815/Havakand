import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Slider.css";
import Hbakery from "../assests/hbakery.jpg";
import Hyetzaribb from "../assests/hyetkazibb.png";
import Home3 from "../assests/home3.png";
import Home4 from "../assests/home4.jpg";

const slides = [
  { id: 1, image: Hbakery, title: "slide1_title", text: "slide1_text" },
  { id: 2, image: Hyetzaribb, title: "slide2_title", text: "slide2_text" },
  { id: 3, image: Home3, title: "slide3_title", text: "slide3_text" },
  { id: 4, image: Home4, title: "slide4_title", text: "slide4_text" },
];

const Slider = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="slide-text">
            <h2>{t(slide.title)}</h2>
            <p>{t(slide.text)}</p>
            <button className="btn">{t("more_info")}</button>
          </div>
        </div>
      ))}

      <div className="homebtns-cont">
        <div className="home-joy">
          <button className="homenav prev" onClick={prevSlide}>←</button>
          <span className="home-num">
            {String(current + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
          </span>
          <button className="homenav next" onClick={nextSlide}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
