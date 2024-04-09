import React from "react";
import "../hero/Hero.css";
import heroImage from "../../assets/images/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_texts">
            <h2>Поставщик Дальнего Востока</h2>
            <p>
              Наши клиенты получают полный спектр услуг по работе с Китаем.
              Начиная с подбора производителя заканчивая доставкой товара до
              двери. Настолько прозрачных сделок с Китаем вы еще не
              осуществляли.
            </p>
            <h3>Узнать больше</h3>
          </div>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
