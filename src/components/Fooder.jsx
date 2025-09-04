import React from "react";
import { useTranslation } from "react-i18next";
import Havbakerynon from "../assests/havbaknon.png";
import "./Footer.css";
import Blog1 from "../assests/blog1.jpg";
import Blog2 from "../assests/blog2.png";
import Blog3 from "../assests/Blog3.png";
import Havfooter from "../assests/havfooter.png";

const Footer = () => {
  const { t } = useTranslation();

  const blogItems = [
    {
      id: 1,
      image: Blog1,
      name: t("footer.blog.items.0.name"),
      desc: t("footer.blog.items.0.desc"),
    },
    {
      id: 2,
      image: Blog2,
      name: t("footer.blog.items.1.name"),
      desc: t("footer.blog.items.1.desc"),
    },
    {
      id: 3,
      image: Blog3,
      name: t("footer.blog.items.2.name"),
      desc: t("footer.blog.items.2.desc"),
    },
  ];

  return (
    <div className="container">
      {/* Instagram */}
      <div className="instagram-site">
        <div>
          <div className="insta-btns">
            <button>{t("footer.instagram.followBtn")}</button>
            <button>
              <i className="bx bxs-heart" style={{ color: "red" }}></i>{" "}
              {t("footer.instagram.likes")}
            </button>
            <button>
              <i
                className="bx bxs-like"
                style={{ color: "rgba(255, 187, 0, 1)" }}
              ></i>{" "}
              {t("footer.instagram.hearts")}
            </button>
          </div>
          <h2>{t("footer.instagram.followTitle")}</h2>
          <p>{t("footer.instagram.followDesc")}</p>
          <button className="go-inst">{t("footer.instagram.goToInstagram")}</button>
        </div>
        <div>
          <img src={Havbakerynon} alt="Havbakerynon" className="insta-img" />
        </div>
      </div>

      {/* Blog */}
      <div>
        <h2 className="container-title">{t("footer.blog.title")}</h2>
        <div className="blog-items">
          {blogItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Grid */}
      <div className="footer">
        <img src={Havfooter} alt="Havfooter" />
        <div className="footer-grid">
          <div>
            <h3>{t("footer.nav.title")}</h3>
            <h4>{t("footer.nav.home")}</h4>
            <h4>{t("footer.nav.menu")}</h4>
            <h4>{t("footer.nav.about")}</h4>
            <h4>{t("footer.nav.address")}</h4>
            <h4>{t("footer.nav.contact")}</h4>
            <h4>{t("footer.nav.b2b")}</h4>
          </div>
          <div>
            <h3>{t("footer.menu.title")}</h3>
            <h4>{t("footer.menu.kruassan")}</h4>
            <h4>{t("footer.menu.bakery")}</h4>
            <h4>{t("footer.menu.baget")}</h4>
            <h4>{t("footer.menu.bread")}</h4>
            <h4>{t("footer.menu.sinnabon")}</h4>
          </div>
          <div>
            <h3>{t("footer.call.title")}</h3>
            <h4>
              +998 95 <span>435 30 02</span>
            </h4>
            <h4>
              +998 95 <span>435 30 02</span>
            </h4>
          </div>
          <div className="socials">
            <h3>{t("footer.socials.title")}</h3>
            <div>
              <a href="https://www.instagram.com/">
                <h4>
                  <i className="bx bxl-instagram"></i>
                </h4>
              </a>
              <a href="https://web.telegram.org/">
                <h4>
                  <i className="bx bxl-telegram"></i>
                </h4>
              </a>
              <a href="https://www.facebook.com/?locale=ru_RU">
                <h4>
                  <i className="bx bxl-facebook"></i>
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
