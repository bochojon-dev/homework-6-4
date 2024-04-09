import React from "react";
import "../icons/Icons.css";
import Icon1 from "../../assets/images/hero_icon.svg";
import Icon2 from "../../assets/images/hero_icon2.svg";
import Icon3 from "../../assets/images/hero_icon3.svg";
const Icons = () => {
  const icons = [
    {
      image: Icon1,
      id: 1,
      title: "Поиск производителей по товару",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
    {
      image: Icon2,
      id: 2,
      title: "Поиск конкретного производителя",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
    {
      image: Icon3,
      id: 3,
      title: "Доставка образцов товаров",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
  ];
  return (
    <div className="icons">
      <div className="container">
        <div className="icon_components">
          {icons?.map((e, inx) => (
            <div key={inx} className="icon">
              <img src={e.image} alt="icons" />
              <h3>{e.title}</h3>
              <p>{e.lorem}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
