import React from "react";
import "../footer/Footer.css";
import insta from "../../assets/images/insta.svg";
import facebook from "../../assets/images/facebook.svg";
import arrow from "../../assets/images/arrow.svg";

const Footer = () => {
  const footer1 = [
    {
      id: "f-1",
      link: "Каталог",
    },
    {
      id: "f-2",
      link: "о Компании",
    },
    {
      id: "f-3",
      link: "Индивидуальная",
    },
    {
      id: "f-4",
      link: "Партнерам",
    },
  ];
  const footer2 = [
    {
      id: "fo-1",
      service: "2D, 3D модели",
    },
    {
      id: "fo-2",
      service: "Шоу-румы",
    },
    {
      id: "fo-3",
      service: "Дилерам",
    },
    {
      id: "fo-4",
      service: "Контакты",
    },
    {
      id: "fo-5",
      service: "Конфигуратор",
    },
  ];

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <div className="items">
            <h2>LOGO</h2>
            <ul className="foo1">
              {footer1?.map((el) => (
                <li>{el.link}</li>
              ))}
            </ul>
            <ul className="foo2">
              {footer2?.map((e) => (
                <li>{e.service}</li>
              ))}
            </ul>
            <div className="contacts">
              <div className="icons">
                <img src={insta} alt="icons" />
                <img src={facebook} alt="icons" />
              </div>
              <p>+38 (099)-638-45-37</p>
              <div className="go">
                <h4>Персональная консультация</h4>
                <img src={arrow} alt="right arrow" />
              </div>
            </div>
          </div>
          <h5>© 1993–2021 Интернет-магазин «LOGO» — Truck</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
